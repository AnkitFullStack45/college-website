"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./tgi-life.css"

/* ---------- EDIT YOUR CONTENT HERE ---------- */

const STATS = [
  { value: "5", label: "Active clubs" },
  { value: "50+", label: "Events every year" },
  { value: "1000+", label: "Student members" },
  { value: "100%", label: "Open to every student" },
];

// One photo per club: put them in /public/images/life/
const CLUBS = [
  {
    name: "Academic Club",
    image: "/images/life/academic.webp",
    desc: "Strengthen your learning beyond the classroom through study circles, quizzes, seminars and peer-led academic activities.",
    points: ["Quizzes & contests", "Study circles", "Seminars & guest talks", "Research & paper presentations"],
  },
  {
    name: "Cultural Club",
    image: "/images/life/cultural.webp",
    desc: "A stage for music, dance, drama and festivals where creative talent gets noticed.",
    points: ["Annual fest", "Music & dance", "Drama & theatre", "Art exhibitions"],
  },
  {
    name: "Media & Literature Club",
    image: "/images/life/media-literature.webp",
    desc: "For students who love writing, storytelling, photography and media. Express your ideas through words, pictures and video.",
    points: ["Campus magazine", "Creative writing", "Photography & video", "Debates & book discussions"],
  },
  {
    name: "Sports Club",
    image: "/images/life/sports.webp",
    desc: "Fitness, teamwork and healthy competition through tournaments and daily practice.",
    points: ["Inter-college meets", "Annual sports day", "Team training", "Fitness drives"],
  },
  {
    name: "Entrepreneurship and Innovation Club",
    image: "/images/life/entrepreneurship.webp",
    desc: "Think like a founder and turn ideas into real ventures with guidance and mentors.",
    points: ["Pitch events", "Startup talks", "Mentorship", "Business challenges"],
  },
];

// size: "tall" | "wide" | "big" | "" (normal)
const MOMENTS = [
  { src: "/images/life/moment-1.webp", caption: "Annual Day", size: "big" },
  { src: "/images/life/moment-2.webp", caption: "Sports Meet", size: "" },
  { src: "/images/life/moment-3.webp", caption: "Guest Lecture", size: "tall" },
  { src: "/images/life/moment-4.webp", caption: "Hackathon", size: "wide" },
  { src: "/images/life/moment-5.webp", caption: "Award Ceremony", size: "" },
  { src: "/images/life/moment-6.webp", caption: "Cultural Night", size: "wide" },
];

/* ---------- Page ---------- */

export default function LifeAtTGI() {
  const [open, setOpen] = useState(0);

  return (
    <main className="lf-page">
      {/* ===== HERO ===== */}
      <section className="lf-hero">
        <div className="lf-wrap lf-hero-grid">
          <div className="lf-hero-text">
            <nav className="lf-crumbs" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Life @ TGI</span>
            </nav>
            <h1 className="lf-hero-title">
              Life <span>At TGI</span>
            </h1>
            <p className="lf-hero-sub">
              Classrooms teach you the subject. Campus life teaches you
              everything else: leadership, teamwork, confidence and friendships
              that last.
            </p>
            <a href="#clubs" className="lf-btn">
              Explore our clubs
            </a>
          </div>

          <div className="lf-hero-photos" aria-hidden="true">
            <div className="lf-photo lf-photo-a">
              <Image src="/images/life/hero-1.webp" alt="" fill sizes="260px" />
            </div>
            <div className="lf-photo lf-photo-b">
              <Image src="/images/life/hero-2.webp" alt="" fill sizes="260px" />
            </div>
            <div className="lf-photo lf-photo-c">
              <Image src="/images/life/hero-3.webp" alt="" fill sizes="260px" />
            </div>
          </div>
        </div>

        <div className="lf-wrap">
          <ul className="lf-stats">
            {STATS.map((s) => (
              <li key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== CLUBS ===== */}
      <section className="lf-clubs" id="clubs">
        <div className="lf-wrap">
          <div className="lf-head lf-head-light">
            <span className="lf-tag">Clubs &amp; societies</span>
            <h2>Find the club that fits you</h2>
            <p>
              Pick a panel to see what each club does. Every student is
              welcome to join, and you can be part of more than one.
            </p>
          </div>

          <div className="lf-accordion">
            {CLUBS.map((club, i) => {
              const isOpen = open === i;
              return (
                <article
                  key={club.name}
                  className={`lf-panel ${isOpen ? "is-open" : ""}`}
                >
                  <Image
                    src={club.image}
                    alt=""
                    fill
                    sizes="(max-width: 800px) 100vw, 50vw"
                    className="lf-panel-img"
                  />
                  <div className="lf-panel-shade" />

                  <button
                    type="button"
                    className="lf-panel-btn"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(i)}
                  >
                    <span className="lf-panel-num">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="lf-panel-name">{club.name}</span>
                  </button>

                  {isOpen && (
                    <div className="lf-panel-body">
                      <p>{club.desc}</p>
                      <ul>
                        {club.points.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== MOMENTS ===== */}
      <section className="lf-moments">
        <div className="lf-wrap">
          <div className="lf-head">
            <span className="lf-tag">Life on campus</span>
            <h2>Moments that make memories</h2>
          </div>

          <div className="lf-mosaic">
            {MOMENTS.map((m) => (
              <figure key={m.src} className={`lf-tile ${m.size}`}>
                <Image
                  src={m.src}
                  alt={m.caption}
                  fill
                  sizes="(max-width: 800px) 50vw, 25vw"
                />
                <figcaption>{m.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="lf-cta">
        <div className="lf-wrap lf-cta-inner">
            <h2>Ready to be part of it?</h2>
            <p>Join TGI and find your people, your passion and your next big step.</p>
         
          <Link href="/register/enquiry" className="lf-btn lf-btn-dark">
            Apply for admission
          </Link>
        </div>
      </section>
    </main>
  );
}