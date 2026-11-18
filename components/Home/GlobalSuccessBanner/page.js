import Image from "next/image";
import Link from "next/link";
import "./GlobalSuccessBanner.css";

export default function GlobalSuccessBanner() {
  return (
    <section className="gs-banner">
      <Image
        src="/images/global-success-bg.webp"
        alt="Students working together on campus"
        fill
        sizes="100vw"
        className="gs-banner-img"
      />
      <div className="gs-banner-overlay" />

      <div className="gs-banner-inner">
        <h2 className="gs-banner-title">Your Path to Global Success</h2>
        <p className="gs-banner-desc">
          We provide a complete learning experience that prepares students
          for the challenges of the modern global workforce.
        </p>
        <Link href="/admission" className="gs-banner-btn">
          Apply For Admission
        </Link>
      </div>
    </section>
  );
}