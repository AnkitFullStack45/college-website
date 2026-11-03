import Link from "next/link";
import "./inspirations.css";

export const metadata = {
    title: "Our Inspirators | TEMPL Group of Institutions",
    description:
        "Discover the inspiring lives and lasting legacy of the founders of TEMPL Group of Institutions, whose vision, dedication and values continue to guide our educational journey.",
};

const inspirators = [
    {
        number: "01",
        name: "Late Shri Lal Singh Rohila",
        role: "Freedom Fighter & Visionary Entrepreneur",
        icon: "fa-solid fa-landmark",
        paragraphs: [
            "A freedom fighter and visionary entrepreneur, Shri Lal Singh Rohila was committed to empowering individuals through accessible, high-quality education. Born into a rural background, he recognized the challenges faced by students from similar origins and was determined to create a platform for them to succeed.",
            "His deep spiritual connection as an Arya Samaji and his sense of responsibility toward his community drove him to establish an institution that provides education at affordable fees, ensuring that no student is left behind. His legacy is the cornerstone of our mission to make world-class education available to all, irrespective of their economic background.",
        ],
    },
    {
        number: "02",
        name: "Late Shri Girwar Singh Thakur",
        role: "Educator & Academic Visionary",
        icon: "fa-solid fa-book-open",
        paragraphs: [
            "With more than 60 years of teaching experience, Shri Girwar Singh Thakur was not just an educator, but a mentor and guide to many. His vision for quality education and his commitment to the academic upliftment of society laid the foundation for the strong academic framework at TEMPL Group of Institutions.",
            "He believed that education should always be rigorous, uncompromising, and transformative. His emphasis on academic excellence continues to be the driving force behind our institution's commitment to providing top-tier education to all students, preparing them for leadership roles in their respective fields.",
        ],
    },
    {
        number: "03",
        name: "Late Smt. Kalawati",
        role: "A Symbol of Compassion & Humanity",
        icon: "fa-solid fa-heart",
        paragraphs: [
            "A compassionate and empathetic soul, Smt. Kalawati brought heart and soul to the TEMPL Group of Institutions. Her deep sense of kindness, empathy, and unwavering love for others laid the foundation of the moral and ethical compass of our institution.",
            "Her belief in the holistic development of students, ensuring that they grow both academically and morally, continues to shape our approach to education. We are committed to not just making students successful professionals, but also good human beings, as per her vision.",
        ],
    },
    {
        number: "04",
        name: "Late Smt. Rajkumari",
        role: "Pioneer of Women's Education",
        icon: "fa-solid fa-graduation-cap",
        paragraphs: [
            "An independent and visionary woman, Smt. Rajkumari was one of the pioneers of women's education in India during the 1960s. Holding a postgraduate qualification in an era when women's higher education was rare, her foresight and belief in the transformative power of education were truly groundbreaking.",
            "She believed that education is the key to dignity, respect, and personal growth, not only for individuals but for society at large. Her unwavering commitment to ensuring that students receive the highest quality education continues to inspire us as we work relentlessly to raise TEMPL Group of Institutions to new academic heights, empowering students to achieve success both in life and in their careers.",
        ],
    },
];

const values = [
    {
        icon: "fa-solid fa-graduation-cap",
        title: "Education",
        description: "Making quality education accessible to all.",
    },
    {
        icon: "fa-solid fa-hand-holding-heart",
        title: "Humanity",
        description: "Building a culture of kindness and compassion.",
    },
    {
        icon: "fa-solid fa-lightbulb",
        title: "Vision",
        description: "Inspiring progress through forward-thinking ideas.",
    },
    {
        icon: "fa-solid fa-scale-balanced",
        title: "Integrity",
        description: "Upholding strong moral and ethical values.",
    },
];

export default function InspirationsPage() {
    return (
        <main className="inspirations-page">

            {/* =====================================
                HERO SECTION
            ===================================== */}

            <section className="inspirations-hero">

                <div className="inspirations-hero-image">
                    <img
                        src="/images/inspirators.webp"
                        alt="Our Inspirators - TEMPL Group of Institutions"
                    />
                </div>

                <div className="inspirations-hero-overlay"></div>

                <div className="inspirations-container inspirations-hero-content">

                    <span className="inspirations-eyebrow">
                        OUR FOUNDATIONS, OUR INSPIRATION
                    </span>

                    <h1>
                        Our <span>Inspirators</span>
                    </h1>

                    <p>
                        Celebrating the vision, wisdom and values of the
                        remarkable individuals who laid the foundation
                        of TEMPL Group of Institutions.
                    </p>

                    <div className="inspirations-breadcrumb">
                        <Link href="/">Home</Link>
                        <i className="fa-solid fa-chevron-right"></i>
                        <span>Our Inspirators</span>
                    </div>

                </div>
            </section>


            {/* =====================================
                INTRODUCTION
            ===================================== */}

            <section className="inspirations-section inspirations-intro">

                <div className="inspirations-container">

                    <div className="inspirations-intro-content">

                        <span className="inspirations-label">
                            THE PEOPLE BEHIND OUR LEGACY
                        </span>

                        <h2>
                            A Vision That Continues to{" "}
                            <span>Inspire Generations</span>
                        </h2>

                        <p>
                            <strong>At TEMPL Group of Institutions,</strong>{" "}
                            our legacy is deeply rooted in the inspiring
                            lives of our founders, whose wisdom, vision,
                            and values continue to guide our journey
                            toward excellence in education.
                        </p>

                        <p>
                            We are proud to share the remarkable stories
                            of the individuals who laid the foundation
                            of our esteemed institution. Their dedication
                            to education, empowerment, and humanity
                            continues to shape our purpose and inspire
                            everything we do.
                        </p>

                    </div>

                    <div className="inspirations-values">

                        {values.map((value, index) => (
                            <div className="inspirations-value-card" key={index}>

                                <div className="inspirations-value-icon">
                                    <i className={value.icon}></i>
                                </div>

                                <div>
                                    <h3>{value.title}</h3>
                                    <p>{value.description}</p>
                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================
                FOUNDERS SECTION
            ===================================== */}

            <section className="inspirations-section inspirations-founders">

                <div className="inspirations-container">

                    <div className="inspirations-section-heading">

                        <span className="inspirations-label">
                            THE PILLARS OF TEMPL
                        </span>

                        <h2>
                            Meet Our <span>Inspirators</span>
                        </h2>

                        <p>
                            Their extraordinary lives and enduring
                            contributions remain an integral part
                            of our institutional identity.
                        </p>

                    </div>


                    <div className="inspirations-list">

                        {inspirators.map((person) => (

                            <article
                                className="inspirations-founder-card"
                                key={person.number}
                            >

                                <div className="inspirations-founder-number">
                                    {person.number}
                                </div>

                                <div className="inspirations-founder-content">

                                    <div className="inspirations-founder-top">

                                        <div className="inspirations-founder-icon">
                                            <i className={person.icon}></i>
                                        </div>

                                        <div>
                                            <span className="inspirations-founder-tag">
                                                OUR INSPIRATION
                                            </span>

                                            <h3>{person.name}</h3>

                                            <span className="inspirations-founder-role">
                                                {person.role}
                                            </span>
                                        </div>

                                    </div>

                                    <div className="inspirations-founder-description">

                                        {person.paragraphs.map((paragraph, index) => (
                                            <p key={index}>
                                                {paragraph}
                                            </p>
                                        ))}

                                    </div>

                                </div>

                            </article>

                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================
                LEGACY SECTION
            ===================================== */}

            <section className="inspirations-legacy">

                <div className="inspirations-container">

                    <div className="inspirations-legacy-content">

                        <div className="inspirations-legacy-icon">
                            <i className="fa-solid fa-quote-left"></i>
                        </div>

                        <span className="inspirations-label">
                            CARRYING THEIR VISION FORWARD
                        </span>

                        <h2>
                            A Legacy of <span>Excellence, Compassion, and Vision</span>
                        </h2>

                        <p>
                            At TEMPL Group of Institutions, we carry forward
                            the teachings and values imparted by these
                            incredible leaders. Their dedication to education,
                            empowerment, and humanity remains at the heart
                            of everything we do.
                        </p>

                        <p>
                            We are committed to providing innovative,
                            world-class education that shapes not only
                            successful professionals but also responsible
                            global citizens. Their vision continues to
                            inspire us, and we are dedicated to honoring
                            their legacy every day through our pursuit
                            of academic excellence and moral integrity.
                        </p>

                        <div className="inspirations-legacy-divider"></div>

                        <h3>
                            Their Vision. Our Inspiration. Our Future.
                        </h3>

                    </div>

                </div>

            </section>

        </main>
    );
}