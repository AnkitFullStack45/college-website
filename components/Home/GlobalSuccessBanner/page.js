"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import "./GlobalSuccessBanner.css";

// Keep equal to top/bottom (in px) of .gs-banner-bg in the CSS.
const RANGE = 220;

export default function GlobalSuccessBanner() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;
      const section = sectionRef.current;
      const bg = bgRef.current;
      if (!section || !bg) return;

      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;

      // 1 = banner entering at the bottom, -1 = leaving at the top
      const p = (rect.top + rect.height / 2 - vh / 2) / (vh / 2 + rect.height / 2);
      const clamped = Math.max(-1, Math.min(1, p));

      bg.style.transform = `translate3d(0, ${-clamped * RANGE}px, 0)`;
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();

    window.addEventListener("scroll", onScroll, { passive: true, capture: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll, { capture: true });
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="gs-banner" ref={sectionRef}>
      <div className="gs-banner-bg" ref={bgRef}>
        <Image
          src="/images/global-success-bg.webp"
          alt="Students working together on campus"
          fill
          sizes="100vw"
          className="gs-banner-img"
        />
      </div>
      <div className="gs-banner-overlay" />

      <div className="gs-banner-inner">
        <div className="gs-banner-text">
          <h2 className="gs-banner-title">Your Path to Global Success</h2>
          <p className="gs-banner-desc">
            We provide a complete learning experience that prepares students
            for the challenges of the modern global workforce.
          </p>
        </div>

        <Link href="/admission" className="gs-banner-btn">
          Apply For Admission
        </Link>
      </div>
    </section>
  );
}