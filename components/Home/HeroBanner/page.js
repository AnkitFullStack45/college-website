import Link from "next/link";
import "./HeroBanner.css";
import ScholarshipSection from "../ScholarshipSection/page";

export default function HeroBanner() {
  return (
    <section className="hero">
      {/* Background video */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/hero-poster.webp"
      >
        <source src="/videos/Main_video.webm" type="video/webm" />
      </video>
      <div className="hero-overlay" />

      {/* Overlay text */}
      <div className="hero-content">
        <h1 className="hero-title">EDUCATING | GROOMING | SUCCEEDING</h1>

        <div className="hero-buttons">
          <Link href="/demo-class" className="hero-btn hero-btn-orange">
            Book a demo class
          </Link>
          <Link href="/career-evaluation-test" className="hero-btn hero-btn-blue">
            Career Evaluation Test
          </Link>
        </div>

        <div className="hero-contact">
          <a href="tel:+919319828699" className="hero-contact-item">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#FBBF24" aria-hidden="true">
              <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.300.2 2.500.6 3.600.1.300 0 .700-.2 1l-2.300 2.200z" />
            </svg>
            +91 9319828699
          </a>

          <a href="mailto:info@templgroup.in" className="hero-contact-item">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#FBBF24" aria-hidden="true">
              <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm9 7.200L4.500 7v1.300L12 13.500 19.500 8.300V7L12 12.200z" />
            </svg>
            info@templgroup.in
          </a>
        </div>

        <p className="hero-admission">ADMISSION OPEN-2026</p>
        <Link href="/register" className="hero-btn hero-btn-register">
          Register Now
        </Link>
      </div>

      {/* Scholarship cards at the bottom of the hero */}
      <div className="hero-bottom">
        <ScholarshipSection />
      </div>
    </section>
  );
}