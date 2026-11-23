import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHandPointer,
  faMagnifyingGlassPlus,
  faExpand,
  faChalkboardUser,
  faLaptopCode,
  faBookOpen,
  faFutbol,
  faMasksTheater,
  faTree,
  faArrowRight,
  faCirclePlay,
} from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import VirtualTour360 from '@/components/VirtualTour360';
import './virtual-tour.css';

config.autoAddCss = false;

export const metadata = {
  title: 'Virtual Tour | TEMPL Group of Institutions',
  description:
    'Explore the IET College campus in 360°. Take a virtual tour of our classrooms, labs and campus facilities from anywhere.',
};

const STATS = [
  { value: '360°', label: 'Immersive View' },
  { value: '6+', label: 'Campus Areas' },
  { value: 'HD', label: 'Video Quality' },
];

const GUIDE = [
  { icon: faHandPointer, title: 'Drag', text: 'Click and drag to look around' },
  { icon: faMagnifyingGlassPlus, title: 'Zoom', text: 'Scroll to zoom in and out' },
  { icon: faExpand, title: 'Fullscreen', text: 'Expand for the best view' },
];

const HIGHLIGHTS = [
  { icon: faChalkboardUser, title: 'Smart Classrooms', text: 'Spacious, modern classrooms built for focused learning.' },
  { icon: faLaptopCode, title: 'Computer Labs', text: 'High-speed systems and up-to-date software for practicals.' },
  { icon: faBookOpen, title: 'Library', text: 'A quiet reading space with books, journals and e-resources.' },
  { icon: faFutbol, title: 'Sports Facilities', text: 'Grounds and courts to keep students active and competitive.' },
  { icon: faMasksTheater, title: 'Auditorium', text: 'A hall for seminars, events and cultural programmes.' },
  { icon: faTree, title: 'Green Campus', text: 'Open, clean and safe surroundings across the campus.' },
];

export default function VirtualTourPage() {
  return (
    <main className="vtp-page">
      {/* ================= HERO ================= */}
      <section className="vtp-hero">
        <span className="vtp-orb vtp-orb-1" aria-hidden="true" />
        <span className="vtp-orb vtp-orb-2" aria-hidden="true" />

        <div className="vtp-hero-inner">
          <span className="vtp-badge">
            <span className="vtp-badge-dot" />
            360° Experience
          </span>

          <h1 className="vtp-title">
            Explore Our Campus,
            <span className="vtp-title-accent"> From Anywhere</span>
          </h1>

          <p className="vtp-subtitle">
            Step inside TEMPL Group with an immersive 360° tour. Press play,
            then drag to look around in every direction.
          </p>

          <div className="vtp-hero-actions">
            <a href="#tour" className="vtp-btn vtp-btn-primary">
              <FontAwesomeIcon icon={faCirclePlay} />
              Start the Tour
            </a>
            <Link href="/register/enquiry" className="vtp-btn vtp-btn-ghost">
              Apply Now
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>

          <ul className="vtp-stats">
            {STATS.map((s) => (
              <li key={s.label} className="vtp-stat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= PLAYER ================= */}
      <section id="tour" className="vtp-player-section">
        <div className="vtp-player-frame">
          <VirtualTour360
            src="/videos/campus-360.mp4"
            poster="/images/campus-poster.jpg"
            title="IET College Campus Tour"
          />
        </div>

        <div className="vtp-guide">
          {GUIDE.map((g) => (
            <div key={g.title} className="vtp-guide-item">
              <span className="vtp-guide-icon">
                <FontAwesomeIcon icon={g.icon} />
              </span>
              <div className="vtp-guide-text">
                <strong>{g.title}</strong>
                <span>{g.text}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= HIGHLIGHTS ================= */}
      <section className="vtp-highlights">
        <div className="vtp-section-head">
          <span className="vtp-eyebrow">What You&apos;ll See</span>
          <h2 className="vtp-section-title">A Look Around the Campus</h2>
          <p className="vtp-section-sub">
            Take a closer look at the spaces where our students learn, create
            and grow.
          </p>
        </div>

        <div className="vtp-grid">
          {HIGHLIGHTS.map((h, i) => (
            <article
              key={h.title}
              className="vtp-card"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <span className="vtp-card-icon">
                <FontAwesomeIcon icon={h.icon} />
              </span>
              <h3 className="vtp-card-title">{h.title}</h3>
              <p className="vtp-card-text">{h.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="vtp-cta-wrap">
        <div className="vtp-cta">
          <span className="vtp-cta-glow" aria-hidden="true" />
          <h2 className="vtp-cta-title">Like what you see?</h2>
          <p className="vtp-cta-text">
            Admissions are open for the Academic Session 2027-28. Take the
            first step towards your future today.
          </p>
          <Link href="/register/enquiry" className="lf-btn">
            Apply for Admission
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </section>
    </main>
  );
}