"use client";

import { useState, useEffect, useRef, useCallback } from "react";
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
    short: "Academic",
    image: "/images/life/academic.webp",
    desc: "Strengthen your learning beyond the classroom through study circles, quizzes, seminars and peer-led academic activities.",
    points: ["Quizzes & contests", "Study circles", "Seminars & guest talks", "Research & paper presentations"],
  },
  {
    name: "Cultural Club",
    short: "Cultural",
    image: "/images/life/cultural.webp",
    desc: "A stage for music, dance, drama and festivals where creative talent gets noticed.",
    points: ["Annual fest", "Music & dance", "Drama & theatre", "Art exhibitions"],
  },
  {
    name: "Media & Literature Club",
    short: "Media & Literature",
    image: "/images/life/media-literature.webp",
    desc: "For students who love writing, storytelling, photography and media. Express your ideas through words, pictures and video.",
    points: ["Campus magazine", "Creative writing", "Photography & video", "Debates & book discussions"],
  },
  {
    name: "Sports Club",
    short: "Sports",
    image: "/images/life/sports.webp",
    desc: "Fitness, teamwork and healthy competition through tournaments and daily practice.",
    points: ["Inter-college meets", "Annual sports day", "Team training", "Fitness drives"],
  },
  {
    name: "Entrepreneurship and Innovation Club",
    short: "Entrepreneurship",
    image: "/images/life/entrepreneurship.webp",
    desc: "Think like a founder and turn ideas into real ventures with guidance and mentors.",
    points: ["Pitch events", "Startup talks", "Mentorship", "Business challenges"],
  },
  {
    name: "Social X Club",
    short: "Social X",
    image: "/images/life/social-x.webp", // was "/images/life/.webp", which is a broken path
    desc: "Build your digital voice and turn creative ideas into real campaigns with expert mentors.",
    points: ["Content workshops", "Social media campaigns", "Public speaking", "Creative challenges"],
  },
];

// size: "tall" | "wide" | "big" | "" (normal)
const MOMENTS = [
  { src: "/images/life/moment-1.webp", caption: "Annual Day", size: "big" },
  { src: "/images/life/moment-2.webp", caption: "Sports Meet", size: "" },
  { src: "/images/life/moment-3.webp", caption: "Guest Lecture", size: "tall" },
  { src: "/images/life/moment-4.webp", caption: "Hackathon", size: "wide" },
  { src: "/images/life/moment-5.webp", caption: "Award Ceremony", size: "" },
  { src: "/images/life/moment-6.webp", caption: "Educational Tour", size: "wide" },
];

const AUTOPLAY_MS = 6000;

/* ---------- Page ---------- */

export default function LifeAtTGI() {
  const total = CLUBS.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const touchStartX = useRef(null);
  const tabsRef = useRef(null);
  const tabRefs = useRef([]);

  const goTo = useCallback((i) => setActive((i + total) % total), [total]);
  const next = useCallback(() => setActive((p) => (p + 1) % total), [total]);
  const prev = useCallback(() => setActive((p) => (p - 1 + total) % total), [total]);

  // Autoplay (pauses on hover / focus; timer resets after any manual change)
  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, active, next]);

  // Keep the active tab centred inside the tab strip (without scrolling the page)
  useEffect(() => {
    const box = tabsRef.current;
    const el = tabRefs.current[active];
    if (!box || !el) return;
    box.scrollTo({
      left: el.offsetLeft - box.clientWidth / 2 + el.clientWidth / 2,
      behavior: "smooth",
    });
  }, [active]);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(diff) > 50) (diff < 0 ? next : prev)();
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

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

      {/* ===== CLUBS (SLIDER) ===== */}
      <section className="lf-clubs" id="clubs">
        <div className="lf-wrap">
          <div className="lf-head lf-head-light">
            <span className="lf-tag">Clubs &amp; societies</span>
            <h2>Find the club that fits you</h2>
            <p>
              Swipe through our clubs to see what each one does. Every student
              is welcome to join, and you can be part of more than one.
            </p>
          </div>

          {/* Tab strip */}
          <div className="lf-sl-tabs" ref={tabsRef} role="tablist" aria-label="Clubs">
            {CLUBS.map((club, i) => (
              <button
                key={club.name}
                ref={(el) => (tabRefs.current[i] = el)}
                type="button"
                role="tab"
                aria-selected={active === i}
                className={`lf-sl-tab ${active === i ? "is-active" : ""}`}
                onClick={() => goTo(i)}
              >
                <span className="lf-sl-tab-num">{String(i + 1).padStart(2, "0")}</span>
                {club.short}
              </button>
            ))}
          </div>

          {/* Slider */}
          <div
            className={`lf-sl ${paused ? "is-paused" : ""}`}
            role="region"
            aria-roledescription="carousel"
            aria-label="Student clubs"
            tabIndex={0}
            onKeyDown={onKeyDown}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="lf-sl-track"
              style={{ transform: `translateX(-${active * 100}%)` }}
            >
              {CLUBS.map((club, i) => (
                <article
                  key={club.name}
                  className={`lf-sl-slide ${active === i ? "is-active" : ""}`}
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${total}`}
                  aria-hidden={active !== i}
                >
                  <div className="lf-sl-media">
                    <Image
                      src={club.image}
                      alt={club.name}
                      fill
                      sizes="(max-width: 800px) 100vw, 50vw"
                      priority={i === 0}
                    />
                    <span className="lf-sl-count">
                      {String(i + 1).padStart(2, "0")}
                      <small> / {String(total).padStart(2, "0")}</small>
                    </span>
                  </div>

                  <div className="lf-sl-content">
                    <span className="lf-sl-bignum" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="lf-sl-kicker">Club {i + 1}</span>
                    <h3 className="lf-sl-name">{club.name}</h3>
                    <p className="lf-sl-desc">{club.desc}</p>

                    <ul className="lf-sl-points">
                      {club.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>

                    <Link href="/register/enquiry" className="lf-sl-link">
                      Join this club
                      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                        <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Arrows */}
            <button
              type="button"
              className="lf-sl-arrow lf-sl-prev"
              onClick={prev}
              aria-label="Previous club"
            >
              <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                <path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              className="lf-sl-arrow lf-sl-next"
              onClick={next}
              aria-label="Next club"
            >
              <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Progress bar (restarts on every slide) */}
            <div className="lf-sl-progress" aria-hidden="true">
              <span key={active} style={{ animationDuration: `${AUTOPLAY_MS}ms` }} />
            </div>
          </div>

          {/* Dots */}
          <div className="lf-sl-dots">
            {CLUBS.map((club, i) => (
              <button
                key={club.name}
                type="button"
                className={`lf-sl-dot ${active === i ? "is-active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Go to ${club.name}`}
              />
            ))}
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