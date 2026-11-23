import Link from "next/link";
import "./Footer.css";

const columns = [
  {
    number: "01",
    title: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Campus", href: "/Edge/campus-life" },
      { label: "Placement", href: "/Edge/placement-facility" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  {
    number: "02",
    title: "Academics",
    links: [
      { label: "Courses", href: "/courses" },
      { label: "Departments", href: "/departments" },
      { label: "Colleges", href: "/colleges/iet-college" },
      { label: "B.C.A", href: "/courses/ug-courses/bca" },
      { label: "B.B.A", href: "/courses/ug-courses/bba" },
    ],
  },
  {
    number: "03",
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Blog Login", href: "/blog-login" },
      { label: "Contact", href: "/register/enquiry" },
      { label: "Apply Online", href: "/register" },
    ],
  },
];

const quickChips = [
  { label: "Life@TGI", href: "/tgi-life"},
  { label: "Apply Online", href: "/register" },
  { label: "Admission Enquiry", href: "/register/enquiry" },
  { label: "All Courses", href: "/courses" },
  { label: "Our Colleges", href: "/colleges/iet-college" },
  { label: "Contact Us", href: "/contact" },
  { label: "TGI Virtual Tour", href:"/virtual-tour"}
];
const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100063790814316/",
    icon: "/images/social/facebook.webp",
    scale: 0.85,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/templgroup/",
    icon: "/images/social/instagram.webp",
    scale: 1.4,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@TEMPLGroupofinstitutions",
    icon: "/images/social/youtube.webp",
    scale: 1.3,
  },
];

function Icon({ children }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="tf-footer">
      <div className="tf-container">
        <div className="tf-top">
          {/* ===== Contact card ===== */}
          <div className="tf-card">
            <Link
              href="/"
              className="tf-logo-box"
              aria-label="TEMPL Group home"
            >
              <img
                src="/images/templ.webp"
                alt="TEMPL Group of Institutions"
                className="tf-logo"
                height={58}
              />
            </Link>

            <p className="tf-card-name">TEMPL Group of Institutions</p>
            <a
              href="https://www.templgroup.in"
              className="tf-site"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon>
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
              </Icon>
              www.templgroup.in
            </a>

            <div className="tf-divider" />

            <ul className="tf-contact">
              <li>
                <span className="tf-contact-icon">
                  <Icon>
                    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </Icon>
                </span>
                <address>
                  Knowledge and Innovation Campus, NH-58 Abupur Road,
                  Muradnagar, Midway between Muradnagar and Modinagar, Near SRM
                  University, Ghaziabad (Delhi-NCR), Uttar Pradesh - 201206
                </address>
              </li>

              <li>
                <span className="tf-contact-icon">
                  <Icon>
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
                  </Icon>
                </span>
                <div className="tf-stack">
                  <a href="tel:+919422218868">+91 9422218868</a>
                  <a href="tel:+919319828699">+91 9319828699</a>
                  <a href="tel:+918865961096">+91 8865961096</a>
                </div>
              </li>

              <li>
                <span className="tf-contact-icon">
                  <Icon>
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </Icon>
                </span>
                <div className="tf-stack">
                  <a href="mailto:admin@templgroup.in">admin@templgroup.in</a>
                  <a href="mailto:info@templgroup.in">info@templgroup.in</a>
                </div>
              </li>
            </ul>
          </div>

          {/* ===== Link columns ===== */}
          <div className="tf-links-area">
            <div className="tf-columns">
              {columns.map((col) => (
                <nav key={col.title} className="tf-col" aria-label={col.title}>
                  <h3>
                    <span>{col.number}</span>
                    {col.title}
                  </h3>
                  <ul>
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <Link href={link.href}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>

            <div className="tf-chips-wrap">
              <ul className="tf-chips">
                {quickChips.map((chip) => (
                  <li key={chip.label}>
                    <Link href={chip.href}>{chip.label}</Link>
                  </li>
                ))}
              </ul>

              <div className="tf-social" aria-label="Social networks">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                  >
                    <img
                      src={s.icon}
                      alt=""
                      loading="lazy"
                      style={{ "--icon-scale": s.scale }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Copyright ===== */}
      <div className="tf-bottom">
        <div className="tf-container tf-bottom-inner">
          <p>
            Copyright © 2026 TEMPL Group of Institutions. All rights reserved.
          </p>
          <p className="tf-bottom-links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span aria-hidden="true">•</span>
            <Link href="/terms-of-service">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
