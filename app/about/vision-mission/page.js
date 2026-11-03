import Link from "next/link";
import "./vision-mission.css";

export const metadata = {
    title: "Vision & Mission | TEMPL Group of Institutions",
    description:
        "Discover the vision and mission of TEMPL Group of Institutions, focused on academic excellence, innovation, ethical values and holistic student development.",
};

export default function VisionMissionPage() {
    return (
        <main className="vision-mission-page">

            {/* ================= HERO SECTION ================= */}

            <section className="vm-hero">

                <div className="vm-hero-overlay"></div>

                <div className="vm-hero-content">

                    <span className="vm-hero-subtitle">
                        OUR PURPOSE & PHILOSOPHY
                    </span>

                    <h1>Vision & Mission</h1>

                    <p>
                        Inspiring excellence, nurturing values and
                        empowering the leaders of tomorrow.
                    </p>

                    <div className="vm-breadcrumb">
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <span>Vision & Mission</span>
                    </div>

                </div>

            </section>


            {/* ================= INTRODUCTION ================= */}

            <section className="vm-intro">

                <span className="vm-section-label">
                    OUR GUIDING PRINCIPLES
                </span>

                <h2>
                    Shaping Tomorrow Through{" "}
                    <span>Education & Values</span>
                </h2>

                <p>
                    At TEMPL Group of Institutions, we believe that
                    education goes beyond academic learning. It is
                    about developing knowledge, strengthening
                    character and preparing individuals to make a
                    meaningful contribution to society. Our vision
                    and mission guide every step towards creating
                    a learning environment that encourages
                    excellence, innovation and personal growth.
                </p>

            </section>


            {/* ================= VISION SECTION ================= */}

            <section className="vm-content-section">

                <div className="vm-content-container">

                    <div className="vm-image-wrapper">
                        <img
                            src="/images/vission_mission.webp"
                            alt="Vision and mission of TEMPL Group of Institutions"
                            className="vm-image"
                        />

                    </div>


                    <div className="vm-text-content">

                        <span className="vm-section-label">
                            WHERE WE ASPIRE TO BE
                        </span>

                        <div className="vm-heading-row">
                            <div className="vm-icon">
                                <i className="fa-solid fa-eye"></i>
                            </div>

                            <h2>Our Vision</h2>
                        </div>

                        <p>
                            At TEMPL Group of Institutions, our vision
                            is to cultivate a new generation of global
                            leaders who are not only competitive,
                            adaptable, and innovative, but also deeply
                            rooted in strong moral values and rich
                            cultural heritage. We aspire to shape
                            students into visionaries who possess the
                            skills, knowledge, and ethical integrity
                            to excel in a rapidly changing world.
                        </p>

                        <p>
                            We aim to serve as a dynamic platform for
                            learning, where students can exchange
                            ideas, share experiences, and engage in
                            collaborative learning. Through this, we
                            are committed to empowering individuals
                            with the tools and techniques necessary
                            to achieve professional excellence in
                            their chosen fields. Our ultimate goal
                            is to ensure that our graduates emerge
                            as capable, confident, and responsible
                            professionals ready to contribute
                            meaningfully to society and thrive in
                            international career landscapes.
                        </p>

                        <p>
                            At TEMPL Group, we believe in fostering
                            an educational environment that nurtures
                            diversity, promotes global perspectives,
                            and instils a sense of responsibility
                            towards creating positive societal
                            change. Our vision is to continuously
                            inspire students to achieve excellence
                            not only in their professional endeavors
                            but also in personal growth and cultural
                            understanding.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================= MISSION SECTION ================= */}

            <section className="vm-mission-section">

                <div className="vm-content-container vm-mission-container">

                    <div className="vm-text-content">

                        <span className="vm-section-label">
                            WHAT DRIVES US
                        </span>

                        <div className="vm-heading-row">
                            <div className="vm-icon">
                                <i className="fa-solid fa-bullseye"></i>
                            </div>

                            <h2>Our Mission</h2>
                        </div>

                        <p>
                            At TEMPL Group of Institutions, our mission
                            is to create a dynamic, forward-thinking
                            educational ecosystem that prioritizes
                            the growth and well-being of all
                            stakeholders—students, faculty, and
                            industry partners. We are dedicated to
                            fostering an environment where academic
                            excellence, innovation, and collaborative
                            learning thrive.
                        </p>

                        <p>
                            Our aim is to build a campus that meets
                            global standards, offering an integrated
                            pathway from early education through to
                            postgraduate studies. We are committed
                            to not only imparting knowledge but also
                            preparing students to navigate the
                            complexities of the modern world. By
                            nurturing their critical thinking,
                            problem-solving skills, and emotional
                            intelligence, we equip them to become
                            successful professionals and responsible
                            citizens.
                        </p>

                        <p>
                            At TEMPL, we focus on holistic development,
                            ensuring our students are not only
                            academically accomplished but also
                            ethically grounded and socially conscious.
                            We believe in empowering them with the
                            tools to master the art of living,
                            cultivate strong moral values, and
                            contribute positively to society, thus
                            becoming leaders of tomorrow who are
                            well-prepared to face global challenges
                            with confidence.
                        </p>

                    </div>


                    <div className="vm-mission-visual">

                        <div className="vm-mission-card">

                            <div className="vm-mission-icon">
                                <i className="fa-solid fa-graduation-cap"></i>
                            </div>

                            <h3>Our Commitment</h3>

                            <p>
                                Empowering students through knowledge,
                                innovation, ethical values and
                                lifelong learning.
                            </p>

                            <div className="vm-mission-highlight">
                                Education with Purpose
                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= CORE VALUES ================= */}

            <section className="vm-values-section">

                <div className="vm-values-container">

                    <span className="vm-section-label">
                        THE FOUNDATION OF OUR APPROACH
                    </span>

                    <h2>
                        Values That <span>Guide Us</span>
                    </h2>

                    <p className="vm-values-description">
                        Our vision and mission are strengthened by
                        the principles that shape our educational
                        philosophy and institutional culture.
                    </p>


                    <div className="vm-values-grid">

                        <div className="vm-value-card">
                            <i className="fa-solid fa-book-open"></i>
                            <h3>Academic Excellence</h3>
                            <p>
                                Encouraging continuous learning,
                                knowledge and intellectual growth.
                            </p>
                        </div>

                        <div className="vm-value-card">
                            <i className="fa-solid fa-lightbulb"></i>
                            <h3>Innovation</h3>
                            <p>
                                Promoting creativity, fresh ideas
                                and forward-thinking approaches.
                            </p>
                        </div>

                        <div className="vm-value-card">
                            <i className="fa-solid fa-handshake"></i>
                            <h3>Integrity</h3>
                            <p>
                                Building strong moral values,
                                honesty and ethical responsibility.
                            </p>
                        </div>

                        <div className="vm-value-card">
                            <i className="fa-solid fa-users"></i>
                            <h3>Holistic Development</h3>
                            <p>
                                Nurturing confident, responsible
                                and socially conscious individuals.
                            </p>
                        </div>

                    </div>

                </div>

            </section>


            {/* ================= CLOSING SECTION ================= */}

            <section className="vm-closing-section">

                <div className="vm-closing-content">

                    <span>OUR COMMITMENT TO THE FUTURE</span>

                    <h2>
                        Empowering Minds, Transforming Lives
                    </h2>

                    <p>
                        Together, let us create a future where
                        knowledge, values and innovation empower
                        every individual to achieve their full
                        potential.
                    </p>

                    <Link href="/" className="vm-button">
                        Explore TEMPL <span>→</span>
                    </Link>

                </div>

            </section>

        </main>
    );
}