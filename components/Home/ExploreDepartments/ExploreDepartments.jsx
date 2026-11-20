"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import "./ExploreDepartments.css";

/* Update the links, course names and descriptions to match your project */
const departments = [
    {
        id: 1,
        title: "Department of Law",
        image: "/images/departments/law.webp",
        href: "/departments/law",
        popupTitle: "Law",
        course: "B.A.LL.B / LL.B",
        description:
            "Department of Law (LSR Law Academy) plays a pivotal role in upholding justice, interpreting laws, and ensuring a fair and orderly society. It serves as the backbone of legal frameworks, encompassing various branches such as criminal law, civil law, corporate law, and more. This section will explore the multifaceted functions of the Department of Law and its impact on our daily lives.",
    },
    {
        id: 2,
        title: "Department of Computer Science",
        image: "/images/departments/Computer new.webp",
        href: "/departments/computer-science",
        popupTitle: "Computer Science",
        course: "BCA",
        description:
            "The Department of Computer Science is at the forefront of technological advancements, driving innovation and shaping the digital landscape. In this section, we'll explore the diverse facets of computer science, ranging from software development and artificial intelligence to cybersecurity and data analysis. Gain a deeper understanding..",
    },
    {
        id: 3,
        title: "Department of Management",
        image: "/images/departments/Management.webp",
        href: "/departments/management",
        popupTitle: "Management",
        course: "B.B.A",
        description:
            "The Department of Management is the epicentre of strategic planning, leadership development, and organizational excellence. In this section, we'll delve into the core principles that govern the field, from understanding organizational behaviour to mastering the art of effective management. Discover how the department shapes and future leaders.",
    },
    {
        id: 4,
        title: "Department of Commerce",
        image: "/images/departments/Commerce.webp",
        href: "/departments/commerce",
        popupTitle: "Commerce",
        course: "B.Com",
        description:
            "The Department of Commerce stands as the backbone of economic ecosystems, playing a pivotal role in shaping business strategies, financial policies, and global trade relations. In this section, we'll unravel the diverse functions of the department, from fostering economic growth to facilitating international business transactions.",
    },
    {
        id: 5,
        title: "Department of Education",
        image: "/images/departments/education.webp",
        href: "/departments/education",
        popupTitle: "Education",
        course: "B.Ed",
        description:
            "The Department of Education serves as the cornerstone of educational frameworks, shaping policies, curriculum standards, and initiatives that impact learners of all ages. This section delves into the core functions of the department, from ensuring access to quality education to fostering innovation and addressing the diverse needs of students.",
    },
    {
        id: 6,
        title: "Department of Sports",
        image: "/images/departments/sport new.webp",
        href: "/departments/sports",
        popupTitle: "Physical Education",
        course: "B.P.E.S",
        description:
            "Build a Career in Sports, Fitness, and Physical Education The Department of Physical Education & Sports at the Institute for Education and Technical-sciences (IET) – a premier institution under the TEMPL Group of Institutions – offers an exceptional academic environment for students passionate about sports and physical fitness.",
    },
];

export default function ExploreDepartments() {
    const [activeDept, setActiveDept] = useState(null);
    const closeButtonRef = useRef(null);
    const lastCardRef = useRef(null);

    const openModal = (dept, e) => {
        lastCardRef.current = e.currentTarget;
        setActiveDept(dept);
    };

    const closeModal = () => {
        setActiveDept(null);
        /* return focus to the card that opened the popup */
        if (lastCardRef.current) {
            lastCardRef.current.focus();
        }
    };

    /* Close on Escape + lock page scroll while the popup is open */
    useEffect(() => {
        if (!activeDept) return;

        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setActiveDept(null);
                if (lastCardRef.current) lastCardRef.current.focus();
            }
        };

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        document.addEventListener("keydown", handleKeyDown);
        closeButtonRef.current?.focus();

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [activeDept]);

    return (
        <section className="explore-dept-section">

            <div className="explore-dept-container">

                {/* Section Heading */}
                <div className="explore-dept-heading">
                    <h2>Explore <span>Departments</span></h2>

                    <p>
                        Explore our academic departments at one of the best
                        colleges in Ghaziabad, offering industry-focused
                        education &amp; practical skills and career growth
                        opportunities.
                    </p>

                </div>


                {/* Department Cards */}
                <div className="explore-dept-grid">

                    {departments.map((dept, index) => (

                        <button
                            type="button"
                            className="explore-dept-card"
                            key={dept.id}
                            onClick={(e) => openModal(dept, e)}
                            aria-haspopup="dialog"
                            aria-label={`View details of ${dept.title}`}
                        >

                            <Image
                                src={dept.image}
                                alt={dept.title}
                                fill
                                sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                                className="explore-dept-image"
                                priority={index < 3}
                            />

                            {/* Soft shade so the glass stays readable */}
                            <span className="explore-dept-shade" aria-hidden="true"></span>

                            {/* iOS style glass label */}
                            <div className="explore-dept-glass">

                                <span className="explore-dept-title">
                                    {dept.title}
                                </span>

                                <span className="explore-dept-arrow" aria-hidden="true">
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M5 12h14" />
                                        <path d="M13 6l6 6-6 6" />
                                    </svg>
                                </span>

                            </div>

                        </button>

                    ))}

                </div>

            </div>


            {/* =========================
                POPUP MODAL
            ========================= */}

            {activeDept && (

                <div
                    className="dept-modal-overlay"
                    onClick={closeModal}
                >

                    <div
                        className="dept-modal"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="dept-modal-title"
                        onClick={(e) => e.stopPropagation()}
                    >

                        {/* Close Button */}
                        <button
                            type="button"
                            className="dept-modal-close"
                            onClick={closeModal}
                            ref={closeButtonRef}
                            aria-label="Close popup"
                        >
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                            >
                                <path d="M6 6l12 12" />
                                <path d="M18 6L6 18" />
                            </svg>
                        </button>

                        {/* Image */}
                        <div className="dept-modal-image">
                            <Image
                                src={activeDept.image}
                                alt={activeDept.popupTitle}
                                fill
                                sizes="(max-width: 600px) 100vw, 560px"
                                className="dept-modal-img"
                            />
                        </div>

                        {/* Content */}
                        <div className="dept-modal-body">

                            <h3 id="dept-modal-title">
                                {activeDept.popupTitle}
                            </h3>

                            <span className="dept-modal-course">
                                {activeDept.course}
                            </span>

                            <div className="dept-modal-divider"></div>

                            <p>{activeDept.description}</p>

                            <Link
                                href={activeDept.href}
                                className="dept-modal-button"
                                onClick={() => setActiveDept(null)}
                            >
                                Explore Department
                            </Link>

                        </div>

                    </div>

                </div>

            )}

        </section>
    );
}