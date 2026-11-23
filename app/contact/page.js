import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./contact.css";

config.autoAddCss = false;

export const metadata = {
  title: "Contact Us | TEMPL Group of Institutions",
  description:
    "Get in touch with TEMPL Group of Institutions, Knowledge and Innovation Campus, Muradnagar, Ghaziabad (Delhi-NCR). Call, email or visit us.",
};

/* ---------- EDIT YOUR CONTENT HERE ---------- */

const ADDRESS =
  "TEMPL Group of Institution, Knowledge and Innovation Campus, NH-58 Abupur Road, Muradnagar, Midway between Muradnagar and Modinagar, Near SRM University, Ghaziabad (Delhi-NCR), Uttar Pradesh - 201206";

const EMAILS = ["admin@templgroup.in", "info@templgroup.in"];

const PHONES = [
  { label: "+91 9412221868", href: "tel:+919412221868" },
  { label: "+91 9319828699", href: "tel:+919319828699" },
  { label: "+91 8865961096", href: "tel:+918865961096" },
];

const MAP_SRC =
  "https://www.google.com/maps?q=" +
  encodeURIComponent("TEMPL Group of Institutions, NH-58 Abupur Road, Muradnagar, Ghaziabad") +
  "&output=embed";

/* ---------- Page ---------- */

export default function ContactPage() {
  return (
    <main className="ct-page">
      {/* ===== HERO ===== */}
      <section className="ct-hero">
        <div className="ct-wrap ct-hero-inner">
          <nav className="ct-crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">Contact Us</span>
          </nav>
          <h1 className="ct-title">
            Let&apos;s <span>Get in Touch</span>
          </h1>
          <p className="ct-sub">
            Questions about admissions, courses or the campus? Call us, write
            to us or visit us. Our team is happy to help.
          </p>
        </div>
      </section>

      {/* ===== INFO CARDS ===== */}
      <section className="ct-cards-section">
        <div className="ct-wrap ct-cards">
          <article className="ct-card ct-card-violet">
            <span className="ct-card-icon">
              <FontAwesomeIcon icon={faLocationDot} />
            </span>
            <h2 className="ct-card-title">Location</h2>
            <p className="ct-card-address">{ADDRESS}</p>
          </article>

          <article className="ct-card ct-card-coral">
            <span className="ct-card-icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <h2 className="ct-card-title">Email</h2>
            <ul className="ct-list">
              {EMAILS.map((email) => (
                <li key={email}>
                  <a href={`mailto:${email}`}>{email}</a>
                </li>
              ))}
            </ul>
          </article>

          <article className="ct-card ct-card-gold">
            <span className="ct-card-icon">
              <FontAwesomeIcon icon={faPhone} />
            </span>
            <h2 className="ct-card-title">Call</h2>
            <ul className="ct-list">
              {PHONES.map((phone) => (
                <li key={phone.href}>
                  <a href={phone.href}>{phone.label}</a>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* ===== MAP ===== */}
      <section className="ct-main">
        <div className="ct-wrap">
          <div className="ct-map-box">
            <iframe
              title="TEMPL Group of Institutions location map"
              src={MAP_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="ct-cta">
        <div className="ct-wrap ct-cta-inner">
          <h2>Ready to join TGI?</h2>
          <p>Admissions are open for the Academic Session 2027-28.</p>
          <Link href="/register/enquiry" className="ct-btn">
            Apply for admission
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </section>
    </main>
  );
}