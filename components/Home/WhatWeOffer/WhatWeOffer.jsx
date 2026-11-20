"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import "./WhatWeOffer.css";

const offers = [
  {
    title: "Digital Classrooms",
    button: "Explore",
    video: "/videos/Digital_classroom.webm",
    poster: "/Images/bg_4.webp",
    link: "/",
  },
  {
    title: "English Speaking Classes",
    button: "Join Now",
    video: "/videos/English_speaking.webm",
    poster: "/Images/bg_4.webp",
    link: "/",
  },
  {
    title: "Expert Teachers",
    button: "Know More",
    video: "/videos/Expert%20Teacher.webm",
    poster: "/Images/bg_4.webp",
    link: "/",
  },
  {
    title: "Career Evaluation Test",
    button: "Start Now",
    video: "/videos/CET%20video.webm",
    poster: "/Images/bg_4.webp",
    link: "/",
  },
];

// Sets the video source once. #t=0.1 makes the browser show a frame at 0.1s
const loadVideo = (video) => {
  if (!video || video.dataset.loaded === "true") return;
  const source = video.querySelector("source");
  if (source?.dataset.src) {
    source.src = `${source.dataset.src}#t=0.1`;
    video.dataset.loaded = "true";
    video.load();
  }
};

export default function WhatWeOffer() {
  const videoRefs = useRef([]);

  // Load each video's first frame when it is close to the screen
  useEffect(() => {
    const videos = videoRefs.current.filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadVideo(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px 200px 0px", threshold: 0.1 }
    );

    videos.forEach((v) => observer.observe(v));

    return () => {
      observer.disconnect();
      videos.forEach((v) => v.pause());
    };
  }, []);

  const handleVideoPlay = (video) => {
    if (!video) return;
    loadVideo(video);
    video.play().catch(() => {});
  };

  const handleVideoPause = (video) => {
    if (!video) return;
    video.pause();
    video.currentTime = 0.1; // back to the preview frame
  };

  return (
    <section className="offer-creative-section">
      <div className="offer-container">
        <div className="offer-section-title">
          <h2>What We Offer</h2>
          <span className="offer-title-line"></span>
          <p>Our strengths that shape future-ready learners</p>
        </div>

        <div className="offer-row">
          {offers.map((offer, index) => (
            <div className="offer-column" key={offer.title}>
              <div
                className="offer-card"
                onMouseEnter={() => handleVideoPlay(videoRefs.current[index])}
                onMouseLeave={() => handleVideoPause(videoRefs.current[index])}
                onTouchStart={() => handleVideoPlay(videoRefs.current[index])}
                onTouchEnd={() => handleVideoPause(videoRefs.current[index])}
              >
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  className="card-video"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={offer.poster}
                >
                  <source data-src={offer.video} type="video/webm" />
                </video>

                <div className="card-overlay">
                  <div className="card-bottom-content">
                    <h3>{offer.title}</h3>
                    <Link href={offer.link} className="read-more-btn">
                      {offer.button}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}