"use client";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUsers,
    faBriefcase,
    faGraduationCap,
    faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./YearsExperiance.css";

/* Stops Font Awesome from injecting its CSS twice in Next.js */
config.autoAddCss = false;

const stats = [
    {
        id: 1,
        icon: faUsers,
        value: 2,
        suffix: "K",
        label: "Current Enroll Students",
    },
    {
        id: 2,
        icon: faBriefcase,
        value: 100,
        suffix: "%",
        label: "Placement Support",
    },
    {
        id: 3,
        icon: faGraduationCap,
        value: 20,
        suffix: "K",
        label: "Alumni",
    },
    {
        id: 4,
        icon: faBuilding,
        value: 10,
        suffix: "",
        unit: "Acres",
        label: "Campus Space",
    },
];

/* Counts from 0 up to `end` once `start` becomes true */
function useCountUp(end, start, duration = 1600) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) return;

        let raf;
        const startTime = performance.now();

        const tick = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); /* ease-out */
            setCount(Math.round(end * eased));
            if (progress < 1) raf = requestAnimationFrame(tick);
        };

        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [end, start, duration]);

    return count;
}

function StatItem({ stat, start }) {
    const count = useCountUp(stat.value, start);

    return (
        <div className="years-stat">
            <div className="years-stat-icon">
                <FontAwesomeIcon icon={stat.icon} />
            </div>

            <div className="years-stat-number">
                {count}
                {stat.suffix}
                {stat.unit && (
                    <span className="years-stat-unit"> {stat.unit}</span>
                )}
            </div>

            <p className="years-stat-label">{stat.label}</p>
        </div>
    );
}

export default function YearsExperience() {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    /* Start the count-up when the section scrolls into view */
    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="years-section" ref={sectionRef}>
            <div className="years-container">

                {/* Heading */}
                <div className="years-heading">
                    <h2>
                        <span>22 Years of</span> Experience
                    </h2>

                    <p>
                        At Our campus, 22+ years of excellence in education,
                        empowering students with expert guidance, modern
                        facilities, and industry-relevant programs.
                    </p>
                </div>

                {/* Stats */}
                <div className="years-stats">
                    {stats.map((stat) => (
                        <StatItem key={stat.id} stat={stat} start={visible} />
                    ))}
                </div>

            </div>
        </section>
    );
}