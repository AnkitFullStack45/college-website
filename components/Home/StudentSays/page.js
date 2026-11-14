"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "./StudentSays.css";

/* Replace names, courses, photos and quotes with your real students */
const students = [
    {
        id: 1,
        name: "Amit Kumar",
        course: "BCA",
        image: "/images/students/amit.webp",
        quote:
            "I choose BCA to build my dream career in the IT field and this college gave me strong technical knowledge with practical coding experience. From basic programming to advanced projects, the learning environment here is excellent. The placement training and mock interviews boosted my confidence for IT jobs.",
    },
    {
        id: 2,
        name: "Vaishnavi",
        course: "B.B.A",
        image: "/images/students/vaishnavi.webp",
        quote: "I always dreamed of studying in a college that not only teaches business but also builds confidence and leadership. Choosing BBA here was the best decision of my life. From presentations to seminars and practical learning, this college truly became my dream college where my personality and career both started growing.",
    },
    {
        id: 3,
        name: "Aayushi Tyagi",
        course: "B.Com",
        image: "/images/students/AayushiB.COM.webp",
        quote: "My B.Com program strengthened my understanding of accounting, finance and taxation. Along with academics, personality development and communication classes improved my confidence. I feel fully prepared for banking and corporate opportunities.",
    },
    {
        id: 4,
        name: "Neeraj", 
        course: "B.A.LL.B",
        image: "/images/students/neeraj.webp",
        quote: "Studying BA LL.B in my dream college has been an incredible journey. The moot court sessions, legal workshops and expert guidance gave me real exposure to the legal world. This college not only gave me knowledge but also the confidence to pursue my dream of becoming a successful lawyer.",
    },
    {
        id: 5,
        name: "Navya",
        course: "B.E.P.S",
        image: "/images/students/navya.webp",
        quote: "I choose BPES because of my passion for sports and this college helped me turn that passion into a profession. I learn discipline, teamwork and leadership through sports activities in this college and the practical coaching and fitness guidance prepared me for a career in sports and physical education",
    },
    {
        id: 6,
        name: "Kaushal",
        course: "M.ED",
        image: "/images/students/kaushal.webp",
        quote: "During my M.Ed journey, I gained deeper knowledge about educational research and leadership. The advanced research guidance and educational leadership training enhanced my understanding of modern teaching systems.",
    },
    {
        id: 7,
        name: "Shilpa",
        course: "D.EL.ED",
        image: "/images/students/shilpa.webp",
        quote: "I learned how to teach young learners effectively through practical training and child psychology classes. This course gave me confidence, classroom management skills and strong foundational teaching.",
    },
    {
        id: 8,
        name: "Pratham Singhal",
        course: "B.A.LL.B",
        image: "/images/students/pratham.webp",
        quote: "The LL.B course gave me strong conceptual clarity in law along with practical legal drafting experience. The practical case discussions and legal drafting sessions helped me build real courtroom confidence. It prepared me for judiciary exams and advocacy practice.",
    },
    {
        id: 9,
        name: "Manish Bhardwaj",
        course: "DIPLOMA IN CYBER CRIME & LAWS",
        image: "/images/students/manish.webp",
        quote: "I wanted to save peoples of my country from cyber threats. This course gave me practical knowledge about cyber security, cyber laws and digital investigations. It help me to build my dream career in the growing cyber field",
    },
    {
        id: 10,
        name: "Shruti",
        course: "B.ED",
        image: "/images/students/shruti.webp",
        quote: "I always wanted to become a teacher and this B.Ed program prepared me perfectly. The micro-teaching sessions and school internships gave me real classroom experience and strengthened my teaching abilities. This college shaped me into a responsible and skilled teacher and now I feel confident to handle real classrooms",
    }
];

const total = students.length;

/* Clone last + first slide so the loop is seamless in both directions */
const slides = [students[total - 1], ...students, students[0]];

const AUTO_DELAY = 4000; /* ms between slides */

export default function StudentsSay() {
    const [index, setIndex] = useState(1); /* 1 = first real slide */
    const [animate, setAnimate] = useState(true);
    const [paused, setPaused] = useState(false);

    const locked = useRef(false);
    const touchStartX = useRef(null);

    const goNext = () => {
        if (locked.current) return;
        locked.current = true;
        setAnimate(true);
        setIndex((i) => i + 1);
    };

    const goPrev = () => {
        if (locked.current) return;
        locked.current = true;
        setAnimate(true);
        setIndex((i) => i - 1);
    };

    /* After sliding onto a clone, jump (without animation) to the real slide */
    const handleTransitionEnd = (e) => {
        if (e.target !== e.currentTarget) return;

        if (index === total + 1) {
            setAnimate(false);
            setIndex(1);
        } else if (index === 0) {
            setAnimate(false);
            setIndex(total);
        }
        locked.current = false;
    };

    /* Auto slide: right to left, forever */
    useEffect(() => {
        if (paused) return;
        const timer = setInterval(goNext, AUTO_DELAY);
        return () => clearInterval(timer);
    }, [paused]);

    /* Swipe support for phones */
    const onTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
        setPaused(true);
    };

    const onTouchEnd = (e) => {
        if (touchStartX.current !== null) {
            const diff = touchStartX.current - e.changedTouches[0].clientX;
            if (diff > 50) goNext();
            else if (diff < -50) goPrev();
        }
        touchStartX.current = null;
        setPaused(false);
    };

    return (
        <section className="students-section">
            <h2 className="students-title">What Our Students Say</h2>

            <div
                className="students-slider"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
            >
                <button
                    type="button"
                    className="students-arrow students-arrow-prev"
                    onClick={goPrev}
                    aria-label="Previous student"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M15 5l-7 7 7 7" />
                    </svg>
                </button>

                <div className="students-viewport">
                    <div
                        className={`students-track ${animate ? "is-animating" : ""}`}
                        style={{ transform: `translateX(-${index * 100}%)` }}
                        onTransitionEnd={handleTransitionEnd}
                    >
                        {slides.map((student, i) => (
                            <div className="students-slide" key={`${student.id}-${i}`}>
                                <div className="students-photo">
                                    <Image
                                        src={student.image}
                                        alt={student.name}
                                        width={120}
                                        height={120}
                                    />
                                </div>

                                <div className="students-content">
                                    <p className="students-quote">&quot;{student.quote}&quot;</p>
                                    <h3 className="students-name">
                                        {student.name} - ({student.course})
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    type="button"
                    className="students-arrow students-arrow-next"
                    onClick={goNext}
                    aria-label="Next student"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </section>
    );
}