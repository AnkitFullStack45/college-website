"use client";

import { useState } from "react";
import Link from "next/link";
import "./BeginJourney.css";
import CallbackModal from "@/components/CallBack";

const quickLinks = [
  { label: "View Programs", href: "/courses" },
  { label: "Approvals & Affiliations", href: "/approvals" },
  { label: "Eligibility & Admission Process", href: "/admission-process" },
  { label: "Scholarships", href: "/scholarships" },
  { label: "Campus & Facilities", href: "/campus" },
  { label: "Sports Facilities", href: "/Bpes" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
];

const statCards = [
  {
    variant: "orange",
    eyebrow: "OUR CAMPUS",
    value: "10",
    suffix: "Acres",
    title: "Green Campus",
    text: "A vast campus at Muradnagar with classrooms, labs and sports infrastructure.",
    linkLabel: "Explore Campus",
    href: "/Edge/campus-life",
  },
  {
    variant: "blue",
    eyebrow: "CAREER OUTCOMES",
    value: "Placement",
    suffix: "Assistance",
    title: "Dedicated Placement Cell",
    text: "Career guidance, internships and placement support for every student.",
    linkLabel: "Placement Cell",
    href: "/Edge/placement-facility",
  },
];

function Check() {
  return (
    <span className="bj-check" aria-hidden="true">
      <svg
        width="11"
        height="11"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </span>
  );
}

function Arrow({ size = 14 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function BeginJourney() {
  const [showCallback, setShowCallback] = useState(false);

  return (
    <>
      <section className="bj-section" aria-labelledby="bj-heading">
        <div className="bj-container">
          {/* Heading */}
          <header className="bj-header">
            <span className="bj-top-pill">
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 21V4M5 4h11l-2 4 2 4H5" />
              </svg>
              TAKE THE NEXT STEP
            </span>

            <h2 id="bj-heading">
              Begin Your <span>TEMPL Journey</span>
            </h2>

            <p>
              Everything you need to apply, plan your stay and explore career
              outcomes — all in one place.
            </p>
          </header>

          <div className="bj-grid">
            {/* Main dark card */}
            <article className="bj-main">
              <span className="bj-status">ADMISSIONS OPEN</span>

              <h3>
                Admission <span>2027–28</span>
              </h3>

              <p className="bj-main-text">
                Browse programmes, scholarships, financial aid and the
                application process — or talk to our admissions team.
              </p>

              <ul className="bj-links">
                {quickLinks.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href}>
                      <Check />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="bj-actions">
                {/* Apply Online */}
                <Link href="/register" className="bj-btn bj-btn-primary">
                  Apply Online
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 17 17 7M8 7h9v9" />
                  </svg>
                </Link>

                {/* Request a Call Back */}
                <button
                  type="button"
                  className="bj-btn bj-btn-outline"
                  onClick={() => setShowCallback(true)}
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z" />
                  </svg>
                  Request a Call Back
                </button>
              </div>
            </article>

            {/* Side stat cards */}
            <div className="bj-side">
              {statCards.map((card) => (
                <article
                  key={card.eyebrow}
                  className={`bj-stat bj-stat-${card.variant}`}
                >
                  <span className="bj-stat-eyebrow">{card.eyebrow}</span>

                  <div className="bj-stat-value">
                    {card.value}
                    {card.suffix && <small>{card.suffix}</small>}
                  </div>

                  <h4>{card.title}</h4>

                  <p>{card.text}</p>

                  <Link href={card.href} className="bj-stat-link">
                    {card.linkLabel}
                    <Arrow />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Request a Call Back popup */}
      <CallbackModal
        open={showCallback}
        onClose={() => setShowCallback(false)}
      />
    </>
  );
}