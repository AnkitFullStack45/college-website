import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./RecruitersSection.css";

const recruiters = [
    { id: 1, name: "Bajaj", image: "/images/recruiters/Bajaj.webp" },
    { id: 2, name: "Cyfuture", image: "/images/recruiters/cyfuture.webp" },
    { id: 3, name: "DYAUSMED", image: "/images/recruiters/dyausmed1.webp" },
    { id: 4, name: "Franklinn", image: "/images/recruiters/franlinn.webp" },
    { id: 5, name: "Hikeedu", image: "/images/recruiters/hikeedu.webp" },
    { id: 6, name: "INFOTECH", image: "/images/recruiters/infotech.webp" },
    { id: 7, name: "MERCURY", image: "/images/recruiters/mercury.webp" },
    { id: 8, name: "PAYTM", image: "/images/recruiters/paytm.webp" },
    { id: 9, name: "SECA", image: "/images/recruiters/seca.webp" },
    { id: 10, name: "TATA", image: "/images/recruiters/tata.webp" }
];

export default function RecruitersSection() {
    return (
        <section className="recruiters-section">

            <div className="recruiters-container">

                {/* SECTION HEADING */}
                <div className="recruiters-heading">

                    <span className="recruiters-label">
                        <i className="fa-solid fa-handshake"></i>
                        &nbsp; INDUSTRY CONNECTIONS
                    </span>

                    <h2>
                        Our Top <span>Recruiters</span>
                    </h2>

                    <p>
                        At TEMPL Group of Institutions, we focus on preparing
                        students for professional success through practical
                        learning, industry exposure and career development.
                        Our placement support helps students explore
                        opportunities across different industries.
                    </p>

                </div>

                {/* AUTOMATIC INFINITE LOGO SLIDER */}
                <div className="recruiters-slider">

                    <div className="recruiters-track">

                        {[...recruiters, ...recruiters].map((recruiter, index) => (

                            <div
                                className="recruiter-card"
                                key={`${recruiter.id}-${index}`}
                                aria-hidden={index >= recruiters.length}
                            >

                                <div className="recruiter-logo-wrapper">

                                    <Image
                                        src={recruiter.image}
                                        alt={`${recruiter.name} logo`}
                                        width={200}
                                        height={110}
                                        className="recruiter-logo"
                                        sizes="220px"
                                    />

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

                {/* VIEW ALL BUTTON */}
                <div className="recruiters-button-wrapper">

                    <Link
                        href="/Edge/placement-facility/recruiters"
                        className="recruiters-view-btn"
                    >
                        View All Recruiters
                        <i className="fa-solid fa-arrow-right"></i>
                    </Link>

                </div>

            </div>

        </section>
    );
}