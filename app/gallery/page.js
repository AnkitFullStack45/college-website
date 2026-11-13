"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "./gallery.css";

// Automatically generate 50 gallery images
const galleryImages = Array.from({ length: 50 }, (_, index) => {
    const imageNumber = index + 1;

    return {
        id: imageNumber,
        src: `/images/gallery/${imageNumber}.jpg`,
        title: `TEMPL Gallery ${imageNumber}`,
        category: "Campus",
    };
});

// Gallery categories
const categories = ["All", "Campus"];

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedImage, setSelectedImage] = useState(null);

    // Filter images
    const filteredImages =
        activeCategory === "All"
            ? galleryImages
            : galleryImages.filter(
                  (image) => image.category === activeCategory
              );

    // Open next image
    const showNext = () => {
        if (!selectedImage) return;

        const currentIndex = galleryImages.findIndex(
            (image) => image.id === selectedImage.id
        );

        const nextIndex = (currentIndex + 1) % galleryImages.length;

        setSelectedImage(galleryImages[nextIndex]);
    };

    // Open previous image
    const showPrevious = () => {
        if (!selectedImage) return;

        const currentIndex = galleryImages.findIndex(
            (image) => image.id === selectedImage.id
        );

        const previousIndex =
            (currentIndex - 1 + galleryImages.length) %
            galleryImages.length;

        setSelectedImage(galleryImages[previousIndex]);
    };

    // Keyboard navigation and body scroll control
    useEffect(() => {
        if (!selectedImage) return;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setSelectedImage(null);
            }

            if (event.key === "ArrowRight") {
                setSelectedImage((current) => {
                    if (!current) return null;

                    const index = galleryImages.findIndex(
                        (image) => image.id === current.id
                    );

                    return galleryImages[
                        (index + 1) % galleryImages.length
                    ];
                });
            }

            if (event.key === "ArrowLeft") {
                setSelectedImage((current) => {
                    if (!current) return null;

                    const index = galleryImages.findIndex(
                        (image) => image.id === current.id
                    );

                    return galleryImages[
                        (index - 1 + galleryImages.length) %
                            galleryImages.length
                    ];
                });
            }
        };

        document.body.style.overflow = "hidden";

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedImage]);

    return (
        <main className="gallery-page">

            {/* ==============================
                HERO SECTION
            ============================== */}

            <section className="gallery-hero">

                <div className="gallery-hero-content">

                    <span className="gallery-hero-subtitle">
                        LIFE AT TEMPL
                    </span>

                    <h1>Our Gallery</h1>

                    <p>
                        Capturing moments, celebrating achievements,
                        and showcasing the vibrant spirit of TEMPL
                        Group of Institutions.
                    </p>

                    <div className="gallery-breadcrumb">
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <span>Gallery</span>
                    </div>

                </div>

            </section>


            {/* ==============================
                INTRODUCTION SECTION
            ============================== */}

            <section className="gallery-intro-section">

                <div className="gallery-intro-content">

                    <span className="gallery-section-label">
                        EXPLORE OUR CAMPUS
                    </span>

                    <h2>
                        Every Picture Tells
                        <span> A Story</span>
                    </h2>

                    <p>
                        At TEMPL Group of Institutions, every day brings
                        new opportunities to learn, explore, celebrate,
                        and grow. Our gallery captures the memorable
                        experiences of our students, faculty, and campus
                        community.
                    </p>

                    <p>
                        From academic activities and cultural celebrations
                        to sports competitions and campus life, explore
                        the moments that make the TEMPL experience special.
                    </p>

                    <div className="gallery-intro-line"></div>

                </div>

            </section>


            {/* ==============================
                MAIN GALLERY SECTION
            ============================== */}

            <section className="gallery-main-section">

                <div className="gallery-container">

                    {/* Gallery Heading */}

                    <div className="gallery-heading">

                        <span className="gallery-section-label">
                            OUR MEMORIES
                        </span>

                        <h2>
                            Moments That Make
                            <span> Us Proud</span>
                        </h2>

                        <p>
                            Take a glimpse into the activities, experiences,
                            and unforgettable moments at TEMPL.
                        </p>

                    </div>


                    {/* CATEGORY FILTERS */}

                    <div className="gallery-filters">

                        {categories.map((category) => (

                            <button
                                key={category}
                                type="button"
                                className={
                                    activeCategory === category
                                        ? "gallery-filter active"
                                        : "gallery-filter"
                                }
                                onClick={() => {
                                    setActiveCategory(category);
                                    setSelectedImage(null);
                                }}
                            >
                                {category}
                            </button>

                        ))}

                    </div>


                    {/* IMAGE GRID */}

                    <div className="gallery-grid">

                        {filteredImages.map((image) => (

                            <div
                                className="gallery-card"
                                key={image.id}
                                onClick={() => setSelectedImage(image)}
                                role="button"
                                tabIndex={0}
                                aria-label={`View ${image.title}`}
                                onKeyDown={(event) => {
                                    if (
                                        event.key === "Enter" ||
                                        event.key === " "
                                    ) {
                                        event.preventDefault();
                                        setSelectedImage(image);
                                    }
                                }}
                            >

                                <div className="gallery-image-wrapper">

                                    <Image
                                        src={image.src}
                                        alt={`${image.title} at TEMPL Group of Institutions`}
                                        fill
                                        sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                                        className="gallery-image"
                                    />

                                    <div className="gallery-image-overlay">

                                        <div className="gallery-image-info">

                                            <span>
                                                {image.category}
                                            </span>

                                            <h3>
                                                {image.title}
                                            </h3>

                                        </div>

                                        <div className="gallery-zoom-icon">
                                            <i className="fa-solid fa-expand"></i>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>


                    {/* EMPTY STATE */}

                    {filteredImages.length === 0 && (

                        <div className="gallery-empty">

                            <i className="fa-regular fa-image"></i>

                            <h3>No Images Available</h3>

                            <p>
                                Images for this category will be available soon.
                            </p>

                        </div>

                    )}

                </div>

            </section>


            {/* ==============================
                IMAGE LIGHTBOX
            ============================== */}

            {selectedImage && (

                <div
                    className="gallery-lightbox"
                    onClick={() => setSelectedImage(null)}
                >

                    {/* Close Button */}

                    <button
                        type="button"
                        className="gallery-lightbox-close"
                        onClick={() => setSelectedImage(null)}
                        aria-label="Close image"
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>


                    {/* Previous Button */}

                    <button
                        type="button"
                        className="gallery-lightbox-nav previous"
                        onClick={(event) => {
                            event.stopPropagation();
                            showPrevious();
                        }}
                        aria-label="Previous image"
                    >
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>


                    {/* Image and Caption */}

                    <div
                        className="gallery-lightbox-content"
                        onClick={(event) => event.stopPropagation()}
                    >

                        <div className="gallery-lightbox-image">

                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                fill
                                sizes="90vw"
                                className="gallery-lightbox-img"
                            />

                        </div>

                        <div className="gallery-lightbox-caption">

                            <span>
                                {selectedImage.category}
                            </span>

                            <h3>
                                {selectedImage.title}
                            </h3>

                            <p>
                                {selectedImage.id} / {galleryImages.length}
                            </p>

                        </div>

                    </div>


                    {/* Next Button */}

                    <button
                        type="button"
                        className="gallery-lightbox-nav next"
                        onClick={(event) => {
                            event.stopPropagation();
                            showNext();
                        }}
                        aria-label="Next image"
                    >
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>

                </div>

            )}

        </main>
    );
}