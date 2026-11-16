"use client";

import { useEffect, useState } from "react";
import "./ExploreCourses.css";

const courses = [
  {
    id: "bca",
    short: "BCA",
    full: "Bachelor of Computer Applications",
    accent: "#4f8df7",
    accent2: "#a5c8ff",
    description:
      "The Bachelor of Computer Application program is designed to equip students with a solid foundation in computer science and programming. In this section, we explore the core subjects such as computer programming, data structures, software development, web technologies, and database management. Discover how the program combines theoretical knowledge with hands-on practical skills to prepare students for the dynamic IT industry.",
    link: "/courses/bca",
  },
  {
    id: "bba",
    short: "BBA",
    full: "Bachelor of Business Administration",
    accent: "#ef6a82",
    accent2: "#ffb3c0",
    description:
      "The Bachelor of Business Administration program is a gateway of business concepts, strategies, and management principles. In this section, we explore the core components of the BBA curriculum, covering subjects such as accounting, marketing, finance, human resources, and organizational behaviour. Discover how the program combines theoretical knowledge with practical skills to prepare students for diverse roles in the business world.",
    link: "/courses/bba",
  },
  {
    id: "bcom",
    short: "B.COM",
    full: "Bachelor of Commerce",
    accent: "#8b5cf6",
    accent2: "#cdb8ff",
    description:
      "The Bachelor of Commerce program is a gateway of financial management, business principles, and economic concepts. In this section, we delve into the core components of the B.Com curriculum, covering subjects such as accounting, finance, business law, economics, and marketing. Discover how the program combines theoretical foundations with practical applications to prepare students for success in the business.",
    link: "/courses/bcom",
  },
  {
    id: "llb",
    short: "LL.B",
    full: "Bachelor of Legislative Law",
    accent: "#22b573",
    accent2: "#9be8c3",
    description:
      "The Bachelor of Legislative Law program is your gateway to the legal realm, providing a comprehensive understanding of legal principles, statutes, and the intricacies of the judicial system. In this section, we explore the core components of the L.L.B curriculum, covering subjects such as constitutional law, criminal law, civil law, and legal research methodologies. Discover knowledge with practical application to prepare students for the dynamic and challenging field of law.",
    link: "/courses/llb",
  },
  {
    id: "ballb",
    short: "B.A LL.B",
    full: "Bachelor of Arts and Bachelor of Laws",
    accent: "#f59e0b",
    accent2: "#fde0a0",
    description:
      "The Bachelor of Arts and Bachelor of Laws program is a distinctive approach to legal education that integrates the study of law with the enriching insights of liberal arts. In this section, we delve into the core components of the B.A L.L.B curriculum, covering legal theory, constitutional law and criminal law. Discover how the program harmonizes the foundational principles of law with the diverse perspectives offered by arts and humanities.",
    link: "/courses/ba-llb",
  },
  {
    id: "bed",
    short: "B.ED",
    full: "Bachelor of Education",
    accent: "#14b8a6",
    accent2: "#8ee6db",
    description:
      "The Bachelor of Education program is a gateway to becoming a proficient and compassionate educator. In this section, we delve into the core components of the B.Ed. curriculum, covering pedagogy, educational psychology, classroom management, and subject-specific methodologies. Discover how the program combines theoretical knowledge with practical teaching skills of education.",
    link: "/courses/bed",
  },
  {
    id: "deled",
    short: "D.El.Ed",
    full: "Diploma in Elementary Education",
    accent: "#06b6d4",
    accent2: "#99e6f3",
    description:
      "The Diploma of Elementary Education program is a foundational step for individuals aspiring to become primary school teachers. In this section, we explore the core components of the D.El.Ed curriculum, covering essential teaching methodologies, child psychology, educational philosophy, and practical classroom training. Discover how the program equips aspiring educators with the knowledge and skills necessary for effective teaching at the primary level.",
    link: "/courses/deled",
  },
  {
    id: "med",
    short: "M.ED",
    full: "Master of Education",
    accent: "#6366f1",
    accent2: "#b9bbff",
    description:
      "The Master of Education program is designed to empower educators with advanced knowledge, leadership skills, and a deep understanding of educational practices. In this section, we delve into the core components of the M.Ed curriculum, covering advanced pedagogy, educational research, leadership development, and specialized areas of study. Discover how the program combines theoretical depth with practical application to prepare educators for education.",
    link: "/courses/med",
  },
  {
    id: "bpes",
    short: "B.P.E.S",
    full: "Bachelor of Physical Education & Sports",
    accent: "#f97316",
    accent2: "#ffc296",
    description:
      "The Bachelor of Physical Education and Sports program is really cool for students who love sports and fitness. This program teaches students a lot about health and physical education. Students learn about sports coaching and how to manage fitness programs. They also learn about exercise science and sports psychology. The Bachelor of Physical Education and Sports program helps students learn by doing things not just reading books. They play sports. Get guidance from professionals.",
    link: "/courses/bpes",
  },
  {
    id: "cyber",
    short: "CYBER SECURITY",
    full: "Securing Data, Defending Trust",
    accent: "#0ea5e9",
    accent2: "#98d8f7",
    description:
      "Cyber Security and Law is a field that deals with keeping systems and data safe on the internet. It also makes sure people follow the law when they are online. As new cyber threats come up people who work in this field need to know about the side of security and the legal side of protecting data and privacy. They need to understand cybercrime and intellectual property rights. Cyber Security and Law teaches students about the basics of cybersecurity the laws related to it and how to hack into systems in a way to test them.",
    link: "/courses/cyber-security",
  },
];

const accentStyle = (c) => ({
  "--accent": c.accent,
  "--accent2": c.accent2,
});

export default function ExploreCourses() {
  const [active, setActive] = useState(null);

  // Close on Escape + lock page scroll while modal is open
  useEffect(() => {
    if (!active) return;

    const onKey = (e) => e.key === "Escape" && setActive(null);
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [active]);

  return (
    <section className="courses-section">
      <h2 className="courses-title">Explore Courses</h2>

      <div className="courses-grid">
        {courses.map((course) => (
          <button
            key={course.id}
            type="button"
            className="course-card"
            style={accentStyle(course)}
            onClick={() => setActive(course)}
          >
            <span className="course-card-short">{course.short}</span>
            <span className="course-card-full">{course.full}</span>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="course-modal-overlay"
          onClick={() => setActive(null)}
        >
          <div
            className="course-modal"
            style={accentStyle(active)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="course-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="course-modal-header">
              <h3 id="course-modal-title" className="course-modal-title">
                {active.short}
              </h3>
              <p className="course-modal-subtitle">{active.full}</p>
              <button
                type="button"
                className="course-modal-close"
                aria-label="Close"
                onClick={() => setActive(null)}
              >
                ✕
              </button>
            </div>

            <div className="course-modal-body">
              <p className="course-modal-text">{active.description}</p>
              <a href={active.link} className="course-modal-btn">
                Explore Course
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}