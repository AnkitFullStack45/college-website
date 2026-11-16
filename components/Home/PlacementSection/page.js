"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./PlacementSection.css";

const items = [
  {
    id: "overview",
    accent: "#1D4ED8",
    image: "/images/overview.webp",
    title: "Overview",
    text: "Placements play a crucial role in the overall educational experience, providing students with tangible benefits that contribute to their personal and professional development. Here are several ways in which campus placement and placement assistance can help students. TEMPL group of Institution not only provides excellent placement assistance to all it is students ensuring a perfect start of your prosperous and successful career but also emphasise on overall development of students personality making them ready to crack their job interviews.",
    button: "Overview!",
  },
  {
    id: "rwex",
    accent: "#166534",
    image: "/images/rwex.webp",
    title: "Real World Experience",
    text: "Placements / Internships offer students the opportunity to apply theoretical knowledge in real-world settings. This hands-on experience is invaluable, as it helps bridge the gap between academic learning and practical application.",
    button: "Experience!",
  },
  {
    id: "skill",
    accent: "#B45309",
    image: "/images/skill.webp",
    title: "Skill Development",
    text: "Getting ready for placements help students can develop and enhance a wide range of skills, including technical skills related to their field of study, as well as soft skills such as communication, teamwork, problem-solving, and time management. These skills are essential for success in the professional world.",
    button: "Skill development!",
  },
  {
    id: "pgrowth",
    accent: "#7C3AED",
    image: "/images/pgrowth.webp",
    title: "Personal Growth",
    text: "TEMPL Group of Institutions conduct various seminars, webinars and workshops for Placements which contribute to the personal growth of students by exposing them to new challenges and situations. They learn to adapt, overcome obstacles, and develop resilience, qualities that are valuable both personally and professionally.",
    button: "Personal growth!",
  },
];

const AUTO_DELAY = 3000;

export default function PlacementSection() {
  const total = items.length;
  // The first card is repeated at the end so the loop never has a gap
  const slides = [...items, items[0]];

  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);

  const next = () => {
    setAnimate(true);
    setIndex((i) => Math.min(i + 1, total));
  };

  const prev = () => {
    if (index === 0) {
      // jump to the repeated card silently, then slide back one
      setAnimate(false);
      setIndex(total);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          setAnimate(true);
          setIndex(total - 1);
        })
      );
    } else {
      setAnimate(true);
      setIndex(index - 1);
    }
  };

  const goTo = (i) => {
    setAnimate(true);
    setIndex(i);
  };

  // Auto slide, forever
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, AUTO_DELAY);
    return () => clearInterval(timer);
  }, [paused]);

  // After reaching the repeated card, reset to the real first card with no animation
  const handleTransitionEnd = (e) => {
    if (e.target !== e.currentTarget) return;
    if (index === total) {
      setAnimate(false);
      setIndex(0);
    }
  };

  return (
    <section className="placement-section">
      <div className="placement-container">
        <div className="placement-heading">
          <h2 id="placement" className="placement-title">
            <span className="placement-title-blue">Student Grooming</span> and
            Placements
          </h2>
          <p className="placement-subtitle">
            Where Academic Excellence Meets Industry Demand to Create the
            Leaders of Tomorrow
          </p>
        </div>

        <div
          className="placement-slider"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <button
            type="button"
            className="placement-arrow placement-arrow-prev"
            aria-label="Previous"
            onClick={prev}
          >
            ‹
          </button>

          <div className="placement-viewport">
            <div
              className={`placement-track ${animate ? "is-animating" : ""}`}
              style={{ transform: `translateX(-${index * 100}%)` }}
              onTransitionEnd={handleTransitionEnd}
            >
              {slides.map((item, i) => (
                <div className="placement-slide" key={`${item.id}-${i}`}>
                  <article
                    className="placement-card"
                    style={{ "--accent": item.accent }}
                  >
                    <div className="placement-img">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={120}
                        height={120}
                      />
                    </div>

                    <h3 className="placement-card-title">{item.title}</h3>
                    <p className="placement-card-text">{item.text}</p>

                    <Link
                      href="/Edge/placement-facility"
                      className="placement-btn"
                    >
                      {item.button}
                    </Link>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="placement-arrow placement-arrow-next"
            aria-label="Next"
            onClick={next}
          >
            ›
          </button>
        </div>

        <div className="placement-dots">
          {items.map((item, i) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Go to ${item.title}`}
              className={`placement-dot ${i === index % total ? "active" : ""}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}