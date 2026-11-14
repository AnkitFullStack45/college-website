"use client";

import Link from "next/link";
import Image from "next/image";
import "./CampusLife.css";

const campusItems = [
    {
        id: 1,
        type: "video",
        title: "Cultural Activities",
        src: "/videos/Cultural_fest.webm",
    },
    {
        id: 2,
        type: "image",
        title: "Expert Guest Sessions",
        src: "/images/Workshop.webp",
    },
    {
        id: 3,
        type: "video",
        title: "Sports Activities",
        src: "/videos/sports.webm",
    },
    {
        id: 4,
        type: "image",
        title: "Student Development Sessions",
        src: "/images/seminar.webp",
    },
    {
        id: 5,
        type: "video",
        title: "Achievements & Celebrations",
        src: "/videos/College Celebration.webm",
    },
    {
        id: 6,
        type: "image",
        title: "Creative Activities",
        src: "/images/Student Activity.webp",
    },
];

/* Play on hover */
const handleVideoEnter = (e) => {
    const video = e.currentTarget.querySelector("video");
    if (video) {
        video.play().catch(() => {});
    }
};

/* Pause and go back to the first frame on leave */
const handleVideoLeave = (e) => {
    const video = e.currentTarget.querySelector("video");
    if (video) {
        video.pause();
        video.currentTime = 0.1;
    }
};

/* Tap to play / pause (for touch devices) */
const handleVideoClick = (e) => {
    const video = e.currentTarget.querySelector("video");
    if (!video) return;

    if (video.paused) {
        video.play().catch(() => {});
    } else {
        video.pause();
    }
};

export default function CampusLife() {
    return (
        <section className="campus-life-section">

            <div className="campus-life-container">

                {/* Section Heading */}
                <div className="campus-life-heading">

                    <span className="campus-section-label">
                        LIFE AT TEMPL
                    </span>

                    <h2>
                        About <span>Campus Life</span>
                    </h2>

                    <p>
                        Experience a vibrant campus life at TEMPL Group,
                        where learning goes beyond the classroom.
                        Discover memorable moments, engaging activities,
                        inspiring sessions and experiences that shape
                        students into confident individuals.
                    </p>

                    <div className="campus-heading-line"></div>

                </div>


                {/* Campus Video & Image Gallery */}
                <div className="campus-video-grid">

                    {campusItems.map((item) => (

                        <div
                            className={`campus-gallery-card ${item.type}-card`}
                            key={item.id}
                        >

                            <div
                                className="campus-media-wrapper"
                                onMouseEnter={
                                    item.type === "video" ? handleVideoEnter : undefined
                                }
                                onMouseLeave={
                                    item.type === "video" ? handleVideoLeave : undefined
                                }
                                onClick={
                                    item.type === "video" ? handleVideoClick : undefined
                                }
                            >

                                {item.type === "video" ? (

                                    /* Video Cards (no controls) */

                                    <video
                                        className="campus-video"
                                        src={`${encodeURI(item.src)}#t=0.1`}
                                        muted
                                        loop
                                        playsInline
                                        preload="metadata"
                                        aria-label={item.title}
                                    />

                                ) : (

                                    /* Image Cards */

                                    <Image
                                        src={item.src}
                                        alt={item.title}
                                        fill
                                        sizes="(max-width: 550px) 100vw, (max-width: 900px) 50vw, 33vw"
                                        className="campus-image"
                                    />

                                )}

                                {/* Hover Overlay (same for image + video) */}

                                <div className="campus-image-overlay">
                                    <h3>
                                        {item.title}
                                    </h3>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>


                {/* About TEMPL Button */}

                <div className="campus-about-button-wrapper">

                    <Link
                        href="/about"
                        className="campus-about-button"
                    >
                        About TEMPL
                        <span aria-hidden="true"> → </span>
                    </Link>

                </div>

            </div>

        </section>
    );
}