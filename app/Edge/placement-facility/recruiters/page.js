import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./recruiters.css";

const recruiters = [
    {
        id: 1,
        name: "Bajaj",
        image: "/images/recruiters/Bajaj.webp",
    },
    {
        id: 2,
        name: "Cyfuture",
        image: "/images/recruiters/cyfuture.webp",
    },
    {
        id: 3,
        name: "DYAUSMED",
        image: "/images/recruiters/dyausmed1.webp",
    },
    {
        id: 4,
        name: "Franklinn",
        image: "/images/recruiters/franlinn.webp",
    },
    {
        id: 5,
        name: "Hikeedu",
        image: "/images/recruiters/hikeedu.webp",
    },
    {
        id: 6,
        name: "Infotech",
        image: "/images/recruiters/infotech.webp",
    },
    {
        id: 7,
        name: "Mercury",
        image: "/images/recruiters/mercury.webp",
    },
    {
        id: 8,
        name: "Paytm",
        image: "/images/recruiters/paytm.webp",
    },
    {
        id: 9,
        name: "SECA",
        image: "/images/recruiters/seca.webp",
    },
    {
        id: 10,
        name: "TATA",
        image: "/images/recruiters/tata.webp",
    },
];

const placementFeatures = [
    {
        icon: "fa-solid fa-laptop-code",
        title: "Practical Learning",
        description:
            "Students develop practical knowledge and technical understanding through academic learning and hands-on activities.",
    },
    {
        icon: "fa-solid fa-building",
        title: "Industry Exposure",
        description:
            "Industry-oriented learning helps students understand professional environments and workplace expectations.",
    },
    {
        icon: "fa-solid fa-comments",
        title: "Communication Skills",
        description:
            "Focus on communication, confidence and interpersonal skills to help students prepare for professional interactions.",
    },
    {
        icon: "fa-solid fa-user-tie",
        title: "Career Development",
        description:
            "Career guidance and placement support help students understand opportunities and prepare for their professional journey.",
    },
];

const careerSteps = [
    {
        number: "01",
        title: "Build Academic Knowledge",
        description:
            "Develop subject knowledge and a strong academic foundation through structured learning.",
    },
    {
        number: "02",
        title: "Develop Professional Skills",
        description:
            "Improve technical abilities, communication and problem-solving skills.",
    },
    {
        number: "03",
        title: "Prepare for Opportunities",
        description:
            "Understand recruitment expectations and prepare for professional interactions.",
    },
    {
        number: "04",
        title: "Explore Career Opportunities",
        description:
            "Explore relevant employment opportunities based on qualifications, skills and employer requirements.",
    },
];

export default function RecruitersPage() {
    return (
        <main className="recruiters-page">

            {/* =====================================
                HERO SECTION
            ===================================== */}

            <section className="recruiters-hero">

                <div className="recruiters-hero-overlay"></div>

                <div className="recruiters-hero-content">

                    <span className="recruiters-hero-label">
                        INDUSTRY CONNECTIONS
                    </span>

                    <h1>
                        Our <span>Recruiters</span>
                    </h1>

                    <p>
                        Connecting education with professional opportunities.
                        Discover the organizations associated with TEMPL Group
                        of Institutions and our commitment to student career
                        development.
                    </p>

                    <div className="recruiters-breadcrumb">
                        <Link href="/">Home</Link>
                        <i className="fa-solid fa-chevron-right"></i>
                        <Link href="/placements">Placements</Link>
                        <i className="fa-solid fa-chevron-right"></i>
                        <span>Our Recruiters</span>
                    </div>

                </div>

            </section>


            {/* =====================================
                INTRODUCTION SECTION
            ===================================== */}

            <section className="recruiters-intro">

                <div className="recruiters-page-container">

                    <div className="recruiters-intro-grid">

                        <div className="recruiters-intro-content">

                            <span className="recruiters-section-label">
                                OUR INDUSTRY NETWORK
                            </span>

                            <h2>
                                Building Connections,
                                <span> Creating Opportunities</span>
                            </h2>

                            <p>
                                At TEMPL Group of Institutions, we believe
                                education should prepare students for
                                opportunities beyond the classroom.
                                Developing professional skills, practical
                                knowledge and industry awareness is an
                                important part of the learning journey.
                            </p>

                            <p>
                                Our industry connections provide students
                                with exposure to different organizations
                                and employment environments. Through
                                academic learning, skill development and
                                placement support, we encourage students
                                to prepare for their future careers.
                            </p>

                            <p>
                                We aim to help students develop the
                                confidence, knowledge and professional
                                abilities required to explore opportunities
                                across different sectors.
                            </p>

                            <Link
                                href="/about"
                                className="recruiters-primary-btn"
                            >
                                Discover TEMPL
                                <i className="fa-solid fa-arrow-right"></i>
                            </Link>

                        </div>


                        <div className="recruiters-intro-visual">

                            <div className="recruiters-visual-card">

                                <div className="recruiters-visual-icon">
                                    <i className="fa-solid fa-handshake"></i>
                                </div>

                                <h3>
                                    Education Meets Industry
                                </h3>

                                <p>
                                    Preparing students with the knowledge,
                                    skills and confidence to explore
                                    professional opportunities.
                                </p>

                                <div className="recruiters-visual-bottom">

                                    <span>
                                        <i className="fa-solid fa-check-circle"></i>
                                        Practical Learning
                                    </span>

                                    <span>
                                        <i className="fa-solid fa-check-circle"></i>
                                        Skill Development
                                    </span>

                                    <span>
                                        <i className="fa-solid fa-check-circle"></i>
                                        Career Guidance
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================
                RECRUITER LOGO SECTION
            ===================================== */}

            <section className="recruiters-network">

                <div className="recruiters-page-container">

                    <div className="recruiters-network-heading">

                        <span className="recruiters-section-label">
                            OUR RECRUITER NETWORK
                        </span>

                        <h2>
                            Organizations Associated
                            <span> With Us</span>
                        </h2>

                        <p>
                            Explore the organizations featured in our
                            recruiter network. These connections reflect
                            our focus on industry engagement and
                            employment opportunities for students.
                        </p>

                    </div>


                    <div className="recruiters-detail-grid">

                        {recruiters.map((recruiter, index) => (

                            <div
                                className="recruiters-detail-card"
                                key={recruiter.id}
                                style={{
                                    "--card-index": index,
                                }}
                            >

                                <div className="recruiters-detail-logo">

                                    <Image
                                        src={recruiter.image}
                                        alt={`${recruiter.name} logo`}
                                        width={240}
                                        height={120}
                                        sizes="(max-width: 600px) 80vw, (max-width: 1000px) 40vw, 240px"
                                    />

                                </div>

                                <div className="recruiters-detail-info">

                                    <h3>{recruiter.name}</h3>

                                    <span>
                                        <i className="fa-solid fa-circle-check"></i>
                                        Recruiter Network
                                    </span>

                                </div>

                            </div>

                        ))}

                    </div>

                    <p className="recruiters-network-note">
                        Recruitment opportunities depend on available
                        positions, eligibility criteria and individual
                        employer requirements.
                    </p>

                </div>

            </section>


            {/* =====================================
                PLACEMENT SUPPORT SECTION
            ===================================== */}

            <section className="recruiters-support">

                <div className="recruiters-page-container">

                    <div className="recruiters-support-heading">

                        <span className="recruiters-section-label">
                            STUDENT CAREER DEVELOPMENT
                        </span>

                        <h2>
                            Preparing Students for
                            <span> Professional Success</span>
                        </h2>

                        <p>
                            Career preparation involves more than academic
                            knowledge. We emphasize the development of
                            practical abilities and professional skills
                            that help students prepare for employment.
                        </p>

                    </div>


                    <div className="recruiters-support-grid">

                        {placementFeatures.map((feature, index) => (

                            <div
                                className="recruiters-support-card"
                                key={index}
                            >

                                <div className="recruiters-support-icon">

                                    <i className={feature.icon}></i>

                                </div>

                                <h3>{feature.title}</h3>

                                <p>{feature.description}</p>

                                <div className="recruiters-support-number">
                                    0{index + 1}
                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================
                CAREER DEVELOPMENT PROCESS
            ===================================== */}

            <section className="recruiters-process">

                <div className="recruiters-page-container">

                    <div className="recruiters-process-heading">

                        <span className="recruiters-section-label">
                            YOUR PROFESSIONAL JOURNEY
                        </span>

                        <h2>
                            From Learning to
                            <span> Career Opportunities</span>
                        </h2>

                        <p>
                            A structured approach to developing the
                            knowledge and skills needed to explore
                            professional opportunities.
                        </p>

                    </div>


                    <div className="recruiters-process-grid">

                        {careerSteps.map((step, index) => (

                            <div
                                className="recruiters-process-card"
                                key={index}
                            >

                                <span className="recruiters-process-number">
                                    {step.number}
                                </span>

                                <div className="recruiters-process-icon">

                                    <i className={[
                                        "fa-solid fa-book-open",
                                        "fa-solid fa-code",
                                        "fa-solid fa-comments",
                                        "fa-solid fa-briefcase",
                                    ][index]}></i>

                                </div>

                                <h3>{step.title}</h3>

                                <p>{step.description}</p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================
                CALL TO ACTION
            ===================================== */}

            <section className="recruiters-cta">

                <div className="recruiters-page-container">

                    <div className="recruiters-cta-content">

                        <div>

                            <span className="recruiters-cta-label">
                                BUILD YOUR FUTURE WITH TEMPL
                            </span>

                            <h2>
                                Take the Next Step Towards
                                Your Career Goals
                            </h2>

                            <p>
                                Explore our academic programmes and
                                develop the knowledge and skills to
                                prepare for your professional journey.
                            </p>

                        </div>


                        <div className="recruiters-cta-buttons">

                            <Link
                                href="/courses"
                                className="recruiters-cta-primary"
                            >
                                Explore Courses
                                <i className="fa-solid fa-arrow-right"></i>
                            </Link>

                            <Link
                                href="/contact"
                                className="recruiters-cta-secondary"
                            >
                                Contact Us
                            </Link>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}