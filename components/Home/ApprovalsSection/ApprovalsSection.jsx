"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import "./ApprovalsSection.css";

const approvals = [
    {
        id: 1,
        name: "National Council for Teacher Education",
        image: "/images/approvals/ncte.webp",
    },
    {
        id: 2,
        name: "Bar Council of India, New Delhi",
        image: "/images/approvals/bci.webp",
    },
    {
        id: 3,
        name: "State Council of Educational Research and Training, Lucknow",
        image: "/images/approvals/scert.webp",
    },
    {
        id: 4,
        name: "Chaudhary Charan Singh University, Meerut",
        image: "/images/approvals/ccsu.webp",
    },
    {
        id: 5,
        name: "All India Council for Technical Education, New Delhi",
        image: "/images/approvals/aicte.webp",
    },
    {
        id: 6,
        name: "University Grants Commission, New Delhi",
        image: "/images/approvals/ugc.webp",
    },
    {
        id: 7,
        name: "Ministry of Education, New Delhi",
        image: "/images/approvals/mhrd.webp",
    },
    {
        id: 8,
        name: "National Assessment and Accreditation Council",
        image: "/images/approvals/naac.webp",
    },
];

export default function ApprovalsSection() {

    const [currentIndex, setCurrentIndex] = useState(1);
    const [visibleCards, setVisibleCards] = useState(3);
    const [transitionEnabled, setTransitionEnabled] = useState(true);

    const timerRef = useRef(null);

    // Responsive card count
    useEffect(() => {

        const updateCards = () => {

            if (window.innerWidth <= 480) {
                setVisibleCards(1);
            } else if (window.innerWidth <= 700) {
                setVisibleCards(2);
            } else {
                setVisibleCards(3);
            }

        };

        updateCards();

        window.addEventListener("resize", updateCards);

        return () => {
            window.removeEventListener("resize", updateCards);
        };

    }, []);

    // Preload ALL images before displaying the carousel
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {

        let cancelled = false;

        const preloadImages = approvals.map((item) => {

            return new Promise((resolve) => {

                const img = new window.Image();

                img.onload = () => resolve();
                img.onerror = () => resolve();

                img.src = item.image;

                if (img.complete) {
                    resolve();
                }

            });

        });

        Promise.all(preloadImages).then(() => {

            if (!cancelled) {
                setImagesLoaded(true);
            }

        });

        return () => {
            cancelled = true;
        };

    }, []);

    // Clone cards for infinite carousel
    const sliderItems = [
        approvals[approvals.length - 1],
        ...approvals,
        ...approvals.slice(0, 3),
    ];

    // Next slide
    const nextSlide = () => {

        setCurrentIndex((prev) => prev + 1);

    };

    // Previous slide
    const prevSlide = () => {

        setCurrentIndex((prev) => prev - 1);

    };

    // Automatic sliding every 3 seconds
    useEffect(() => {

        timerRef.current = setInterval(() => {

            nextSlide();

        }, 3000);

        return () => {
            clearInterval(timerRef.current);
        };

    }, []);

    // Infinite carousel reset  (ONLY THIS FUNCTION IS CHANGED)
    const handleTransitionEnd = (e) => {

        // ignore hover transitions bubbling up from the cards
        if (e.target !== e.currentTarget) return;

        // went past the last real card -> jump back to the start
        if (currentIndex >= approvals.length + 1) {

            setTransitionEnabled(false);
            setCurrentIndex(1 + ((currentIndex - 1) % approvals.length));

        }

        // went before the first real card -> jump to the end
        if (currentIndex <= 0) {

            setTransitionEnabled(false);
            setCurrentIndex(approvals.length);

        }

    };

    // Restore transition after invisible reset
    useEffect(() => {

        if (!transitionEnabled) {

            requestAnimationFrame(() => {

                requestAnimationFrame(() => {

                    setTransitionEnabled(true);

                });

            });

        }

    }, [transitionEnabled]);

    // Stop autoplay while manually interacting
    const handleManualSlide = (direction) => {

        clearInterval(timerRef.current);

        if (direction === "next") {
            nextSlide();
        } else {
            prevSlide();
        }

        timerRef.current = setInterval(() => {

            nextSlide();

        }, 3000);

    };

    if (!imagesLoaded) {
        return (
            <section className="approvals-section">
                <div className="approvals-container">
                    <div className="approvals-content">
                        <span className="approvals-badge">
                            <i className="fa-solid fa-certificate"></i>
                            RECOGNISED & APPROVED
                        </span>

                        <h2>
                            Approvals &
                            <span> Affiliations</span>
                        </h2>

                        <p>
                            Recognised by India's leading academic
                            and statutory bodies.
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    return (

        <section className="approvals-section">

            <div className="approvals-container">

                {/* LEFT CONTENT */}

                <div className="approvals-content">

                    <span className="approvals-badge">

                        <i className="fa-solid fa-certificate"></i>

                        RECOGNISED & APPROVED

                    </span>

                    <h2>
                        Approvals &
                        <span> Affiliations</span>
                    </h2>

                    <p>
                        Recognised by India's leading academic
                        and statutory bodies.
                    </p>

                    <Link
                        href="/about/approvals"
                        className="approvals-link"
                    >
                        View all approvals

                        <span> → </span>

                    </Link>

                </div>


                {/* RIGHT CAROUSEL */}

                <div className="approvals-carousel">

                    {/* NAVIGATION BUTTONS */}

                    <div className="approvals-controls">

                        <button
                            onClick={() => handleManualSlide("prev")}
                            aria-label="Previous approvals"
                        >
                            <i className="fa-solid fa-chevron-left"></i>
                        </button>

                        <button
                            onClick={() => handleManualSlide("next")}
                            aria-label="Next approvals"
                        >
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>

                    </div>


                    {/* SLIDER VIEWPORT */}

                    <div className="approvals-viewport">

                        <div
                            className={`approvals-track ${
                                transitionEnabled ? "slide-active" : "slide-reset"
                            }`}
                            style={{
                                "--visible-cards": visibleCards,
                                transform: `translateX(calc(
                                    ${currentIndex} * (
                                        -100% / ${visibleCards}
                                        - 16px / ${visibleCards}
                                    )
                                ))`,
                            }}
                            onTransitionEnd={handleTransitionEnd}
                        >

                            {sliderItems.map((item, index) => (

                                <div
                                    className="approval-card"
                                    key={`${item.id}-${index}`}
                                >

                                    <div className="approval-image-wrapper">

                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            width={110}
                                            height={85}
                                            className="approval-image"
                                            priority
                                            unoptimized
                                        />

                                    </div>

                                    <h3>
                                        {item.name}
                                    </h3>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}