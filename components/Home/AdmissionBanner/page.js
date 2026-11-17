import Link from "next/link";
import "./AdmissionBanner.css";

export default function AdmissionBanner() {
  return (
    <section className="adm-wrap">
      <div className="adm-banner">
        <span className="adm-watermark" aria-hidden="true">
          2027
        </span>

        <div className="adm-content">
          <span className="adm-pill">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            NOW OPEN
          </span>

          <h2>
            Admissions <span>2027 – 28</span>
          </h2>

         <p>
         Future-ready education, aligned with the National Education Policy — across BCA, BBA, B.Com, B.Ed, M.Ed, BPES, D.El.Ed, LL.B, BA LL.B &amp; more.
         </p>
        </div>

        <div className="adm-actions">
          <Link href="/courses" className="adm-btn adm-btn-primary">
            View Programs
            <svg
              width="14"
              height="14"
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
          </Link>

          <Link href="/register" className="adm-btn adm-btn-outline">
            Apply Online
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M7 17 17 7M8 7h9v9" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}