import Link from "next/link";
import "./bpes.css"

/* =========================================================
   CONSTANTS
========================================================= */

const SITE_URL = "https://www.templgroup.in";
const PAGE_URL = `${SITE_URL}/Bpes`;
const BANNER_IMAGE = "/images/offer%27s%20BPES.webp"; // rename file to offers-bpes.webp when possible

/* =========================================================
   SEO METADATA
========================================================= */

export const metadata = {
    metadataBase: new URL(SITE_URL),

    title: "Best BPES College in Ghaziabad | BPES Admission 2026 | TEMPL",

    description:
        "Explore the 3-year BPES course at IET College, TEMPL Group, Ghaziabad. CCSU-affiliated and NAAC-accredited institution offering sports training, physical education, fitness development and modern sports facilities.",

    alternates: {
        canonical: "/Bpes",
    },

    robots: {
        index: true,
        follow: true,

        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },

    openGraph: {
        title: "Best BPES College in Ghaziabad | BPES Admission 2026 | TEMPL",

        description:
            "Pursue a Bachelor of Physical Education and Sports at IET College, TEMPL Group of Institutions. Explore sports facilities, practical training, eligibility and career opportunities.",

        url: PAGE_URL,

        siteName: "TEMPL Group of Institutions",

        locale: "en_IN",

        type: "website",

        images: [
            {
                url: BANNER_IMAGE,
                alt: "Bachelor of Physical Education and Sports at IET College, TEMPL Group of Institutions",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",

        title: "Best BPES College in Ghaziabad | TEMPL Group",

        description:
            "Explore the BPES program at IET College, Ghaziabad. Learn about sports training, physical education, admission and career opportunities.",

        images: [BANNER_IMAGE],
    },
};

/* =========================================================
   FAQ DATA
========================================================= */

const faqs = [
    {
        question: "What is B.P.E.S and what are its career opportunities?",
        answer:
            "B.P.E.S (Bachelor of Physical Education and Sports) is an undergraduate degree focused on physical education, sports science, fitness and sports training. Graduates can explore opportunities as sports coaches, fitness trainers, physical education professionals and sports management executives, subject to applicable qualifications.",
    },
    {
        question: "Is B.P.E.S at IET College affiliated with CCS University?",
        answer:
            "Yes. The B.P.E.S program at IET College, TEMPL Group of Institutions, is affiliated with Chaudhary Charan Singh University (CCSU), Meerut.",
    },
    {
        question: "What is the duration of the B.P.E.S course?",
        answer:
            "The B.P.E.S program at IET College is a three-year undergraduate course divided into six semesters.",
    },
    {
        question: "What is the eligibility for B.P.E.S admission?",
        answer:
            "Candidates must have passed Class 12th or an equivalent examination from a recognised board. General/OBC candidates need 45% marks with a valid sports participation certificate, and SC/ST candidates need 40% marks with a valid sports certificate. Candidates must also demonstrate basic physical fitness, and additional criteria may apply according to university admission guidelines.",
    },
    {
        question: "How many seats are available in the B.P.E.S program?",
        answer:
            "The stated intake for the B.P.E.S program at IET College is 60 seats, subject to applicable university approvals.",
    },
    {
        question: "What subjects are taught in B.P.E.S?",
        answer:
            "The program covers areas such as human anatomy and physiology, exercise science, sports psychology, sports coaching, physical fitness assessment, sports training and sports administration.",
    },
    {
        question: "What sports facilities are available at IET College?",
        answer:
            "The campus offers sports facilities including a cricket ground, basketball court, volleyball court, badminton facility, table tennis, kabaddi ground and gym facilities.",
    },
    {
        question: "Can I pursue higher education after B.P.E.S?",
        answer:
            "Yes. Graduates can explore further studies in physical education, sports science, sports management, coaching and related disciplines, subject to the eligibility requirements of the respective institutions.",
    },
    {
        question: "Where is IET College located?",
        answer:
            "IET College, TEMPL Group of Institutions, is located at NH-58, Abupur Road, Muradnagar, Ghaziabad, Uttar Pradesh 201206.",
    },
];

/* =========================================================
   STRUCTURED DATA
========================================================= */

const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Bachelor of Physical Education and Sports (B.P.E.S)",
    description:
        "The Bachelor of Physical Education and Sports (B.P.E.S) is a three-year undergraduate program offered at Institute for Education and Technical Sciences (IET College), TEMPL Group of Institutions, Ghaziabad. The program focuses on physical education, sports science, fitness training, sports coaching, exercise physiology and sports management.",
    url: PAGE_URL,
    courseCode: "B.P.E.S",
    educationalLevel: "Undergraduate",
    inLanguage: "en-IN",
    teaches: [
        "Human Anatomy and Physiology",
        "Exercise Science",
        "Sports Psychology",
        "Sports Coaching",
        "Physical Fitness Assessment",
        "Sports Training",
        "Sports Management",
        "Sports Administration",
        "Team Management",
        "Physical Education",
    ],
    provider: {
        "@type": "CollegeOrUniversity",
        name: "Institute for Education and Technical Sciences (IET College)",
        parentOrganization: {
            "@type": "EducationalOrganization",
            name: "TEMPL Group of Institutions",
            url: SITE_URL,
        },
        url: SITE_URL,
        address: {
            "@type": "PostalAddress",
            streetAddress: "NH-58, Abupur Road, Muradnagar",
            addressLocality: "Ghaziabad",
            addressRegion: "Uttar Pradesh",
            postalCode: "201206",
            addressCountry: "IN",
        },
    },
    hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "Onsite",
        duration: "P3Y",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
        },
    })),
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_URL}/`,
        },
        {
            "@type": "ListItem",
            position: 2,
            name: "B.P.E.S - Bachelor of Physical Education and Sports",
            item: PAGE_URL,
        },
    ],
};

const structuredData = [courseSchema, faqSchema, breadcrumbSchema];

/* =========================================================
   PAGE CONTENT DATA
========================================================= */

const courseHighlights = [
    "3 Years – 6 Semesters",
    "Full-Time Undergraduate Degree",
    "60 Seats Intake",
    "CCS University Affiliated",
    "Sports-Based Learning",
    "Practical Training",
    "Modern Sports Infrastructure",
    "Career Development",
];

const subjects = [
    "Human Anatomy & Physiology for Athletes",
    "Exercise Science & Sports Psychology",
    "Sports Coaching & Training",
    "Physical Fitness Assessment",
    "Team Management & Leadership in Sports",
    "Event Organization & Sports Administration",
];

const sportsFacilities = [
    {
        title: "Cricket Ground",
        description: "Full-sized cricket ground for practice, training and competitive matches.",
    },
    {
        title: "Basketball Court",
        description: "Dedicated basketball court for skill development and team practice.",
    },
    {
        title: "Volleyball Court",
        description: "Sports facility for volleyball training and competitive activities.",
    },
    {
        title: "Indoor Badminton Hall",
        description: "Indoor badminton facility for regular practice and skill development.",
    },
    {
        title: "Table Tennis Arena",
        description: "Dedicated space for table tennis practice and recreational activities.",
    },
    {
        title: "Weightlifting Training Zone",
        description: "Training area for strength development and weightlifting practice.",
    },
    {
        title: "Kabaddi Ground",
        description: "Dedicated ground for kabaddi training and team competitions.",
    },
    {
        title: "Athletics & Track Training",
        description: "Facilities for athletics, running and physical endurance training.",
    },
    {
        title: "Fully Equipped Gym",
        description: "Gym with strength and cardio sections to support physical fitness training.",
    },
];

const upcomingSports = [
    "Weightlifting",
    "Boxing",
    "Shooting",
    "Archery",
    "Badminton",
];

const academicFacilities = [
    "Smart Digital Classrooms",
    "Wi-Fi Enabled Campus",
    "Well-stocked Library with Sports Journals",
    "Advanced Computer Lab",
    "Experienced and Certified Physical Education Coaches",
    "Guest Lectures by National-Level Athletes",
    "Sports Sponsorships and Scholarships for Talented Students",
];

const suitableStudents = [
    "Have participated in district, state, or national-level sports competitions",
    "Wish to become sports coaches, PE teachers, or fitness trainers",
    "Aim to work in the sports management or health and wellness sector",
    "Are preparing for careers in Army, Police, CRPF, or Paramilitary forces under sports quota",
    "Want to pursue further education in B.P.Ed, M.P.Ed, or Sports Psychology",
];

const careerOptions = [
    {
        category: "Teaching & Coaching",
        icon: "01",
        careers: [
            "Physical Education Teacher (in schools & junior colleges)",
            "Sports Coach (Cricket, Basketball, Badminton, Athletics, etc.)",
            "Assistant Coach at Private or Government Academies",
            "Fitness Trainer or Personal Trainer",
        ],
    },
    {
        category: "Health & Fitness",
        icon: "02",
        careers: [
            "Gym Instructor or Wellness Coach",
            "Sports Physiotherapy Assistant",
            "Yoga & Meditation Trainer",
            "Lifestyle & Fitness Consultant",
        ],
    },
    {
        category: "Sports Management & Government Jobs",
        icon: "03",
        careers: [
            "Sports Development Officer",
            "Sports Event Organizer",
            "Careers under Sports Quota in Government Jobs",
            "Admission into B.P.Ed / M.P.Ed / Diploma in Coaching / Sports Management",
        ],
    },
];

const admissionSteps = [
    {
        number: "01",
        title: "Application",
        description:
            "Complete the admission application process as per the prescribed guidelines.",
    },
    {
        number: "02",
        title: "Physical Fitness Test",
        description:
            "Candidates participate in physical fitness assessments involving endurance, strength, flexibility, etc.",
    },
    {
        number: "03",
        title: "Efficiency Test",
        description:
            "Candidates demonstrate their sports skills through the prescribed efficiency test.",
    },
    {
        number: "04",
        title: "Personal Interview",
        description:
            "Candidates participate in a personal interview as part of the selection process.",
    },
    {
        number: "05",
        title: "Final Counselling",
        description:
            "Final counselling and document verification are conducted according to the admission guidelines.",
    },
];

const eligibility = [
    "Students must have passed 10+2 or equivalent examination from a recognized board.",
    "General/OBC: 45% with a valid sports participation certificate.",
    "SC/ST: 40% with a valid sports certificate.",
    "Candidates must demonstrate basic physical fitness and interest in physical education and sports.",
];

/* =========================================================
   PAGE
========================================================= */

export default function BPESPage() {
    return (
        <main className="bpes-page">

            {/* STRUCTURED DATA (JSON-LD) */}
            {structuredData.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
                    }}
                />
            ))}

            {/* FULL-WIDTH BANNER IMAGE */}
            <section className="bpes-banner">
                <img
                    src={BANNER_IMAGE}
                    alt="Bachelor of Physical Education and Sports at IET College, TEMPL Group of Institutions"
                    className="bpes-banner-img"
                    width={1920}
                    height={600}
                    fetchPriority="high"
                />
            </section>

            {/* HERO INTRODUCTION */}
            <section className="bpes-hero">
                <div className="bpes-container">
                    <div className="bpes-hero-card">

                        <span className="bpes-eyebrow">
                            IET COLLEGE | TEMPL GROUP OF INSTITUTIONS
                        </span>

                        <h1>
                            B.P.E.S – Bachelor of Physical Education & Sports
                            in Ghaziabad
                        </h1>

                        <h2>
                            Begin Your Career in Sports, Fitness, and Physical
                            Education with a Degree that Moves You Forward
                        </h2>

                        <p>
                            Affiliated to: Chaudhary Charan Singh (CCS)
                            University, Meerut | Muradnagar, Ghaziabad
                            (Delhi NCR)
                        </p>

                        <Link href="/contact" className="bpes-primary-btn">
                            Apply Now <span>→</span>
                        </Link>

                    </div>
                </div>
            </section>

            {/* INTRODUCTION */}
            <section className="bpes-section">
                <div className="bpes-container">

                    <div className="bpes-intro-grid">

                        <div className="bpes-section-heading">
                            <span className="bpes-label">
                                ABOUT THE PROGRAM
                            </span>

                            <h2>
                                Bachelor of Physical Education & Sports
                                (BPES)
                            </h2>

                            <div className="bpes-heading-line"></div>

                            <p className="bpes-side-note">
                                Turn Your Passion for Sports into a Profession
                            </p>
                        </div>

                        <div className="bpes-intro-text">
                            <p>
                                The world is witnessing a tremendous rise in
                                awareness around fitness, physical education,
                                and the importance of sports. The demand for
                                trained professionals in physical education,
                                sports coaching, and fitness management is
                                higher than ever.
                            </p>

                            <p>
                                The Bachelor of Physical Education & Sports
                                (BPES) program at Institute for Education and
                                Technical Sciences (IET), part of TEMPL Group
                                of Institutions, offers an excellent foundation
                                for students who aspire to turn their love for
                                sports into a successful profession.
                            </p>

                            <p>
                                Located in Muradnagar, Ghaziabad, close to
                                Delhi NCR, IET is one of the top physical
                                education colleges affiliated with CCS
                                University offering BPES admissions for 2026.
                                Our program is recognized for its academic
                                rigor, hands-on training, modern infrastructure,
                                and emphasis on holistic development.
                            </p>
                        </div>

                    </div>

                    {/* HIGHLIGHTS */}
                    <div className="bpes-highlight-grid">
                        {courseHighlights.map((item, index) => (
                            <div className="bpes-glass bpes-highlight-card" key={item}>
                                <span className="bpes-highlight-number">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <h3>{item}</h3>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* ABOUT BPES PROGRAM */}
            <section className="bpes-section bpes-section-alt">
                <div className="bpes-container">

                    <div className="bpes-centered-heading">
                        <span className="bpes-label">
                            COURSE OVERVIEW
                        </span>

                        <h2>About the BPES Program</h2>

                        <div className="bpes-heading-line"></div>

                        <p>
                            BPES (Bachelor of Physical Education & Sports) is
                            a three-year full-time undergraduate degree course
                            designed to provide students with in-depth
                            knowledge of physical education, sports science
                            and athletic development.
                        </p>
                    </div>

                    <div className="bpes-subject-grid">
                        {subjects.map((subject, index) => (
                            <article className="bpes-glass bpes-subject-card" key={subject}>
                                <span>{String(index + 1).padStart(2, "0")}</span>
                                <h3>{subject}</h3>
                            </article>
                        ))}
                    </div>

                    {/* COURSE DETAILS */}
                    <div className="bpes-course-details">
                        <div className="bpes-glass bpes-course-card">
                            <span>COURSE NAME</span>
                            <h3>BPES – Bachelor of Physical Education & Sports</h3>
                        </div>

                        <div className="bpes-glass bpes-course-card">
                            <span>DURATION</span>
                            <h3>3 Years (6 Semesters)</h3>
                        </div>

                        <div className="bpes-glass bpes-course-card">
                            <span>MODE</span>
                            <h3>Full-Time</h3>
                        </div>

                        <div className="bpes-glass bpes-course-card">
                            <span>INTAKE CAPACITY</span>
                            <h3>60 Seats</h3>
                        </div>

                        <div className="bpes-glass bpes-course-card">
                            <span>UNIVERSITY AFFILIATION</span>
                            <h3>Chaudhary Charan Singh University, Meerut</h3>
                        </div>

                        <div className="bpes-glass bpes-course-card">
                            <span>LOCATION</span>
                            <h3>TEMPL Group of Institutions Campus, Muradnagar (Near Delhi NCR)</h3>
                        </div>
                    </div>

                </div>
            </section>

            {/* ELIGIBILITY */}
            <section className="bpes-section">
                <div className="bpes-container">

                    <div className="bpes-section-heading">
                        <span className="bpes-label">ADMISSION REQUIREMENTS</span>
                        <h2>Eligibility Criteria</h2>
                        <div className="bpes-heading-line"></div>
                    </div>

                    <div className="bpes-glass bpes-eligibility-card">
                        <p>
                            To be eligible for admission in BPES 2026 at IET:
                        </p>

                        <ul>
                            {eligibility.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>

                </div>
            </section>

            {/* SELECTION PROCESS */}
            <section className="bpes-section bpes-section-alt">
                <div className="bpes-container">

                    <div className="bpes-centered-heading">
                        <span className="bpes-label">ADMISSION PROCESS</span>
                        <h2>Selection Process</h2>
                        <div className="bpes-heading-line"></div>

                        <p>
                            Admission is strictly based on merit and follows
                            CCS University guidelines.
                        </p>
                    </div>

                    <div className="bpes-admission-grid">
                        {admissionSteps.map((step) => (
                            <article className="bpes-glass bpes-admission-card" key={step.number}>
                                <span>{step.number}</span>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </article>
                        ))}
                    </div>

                </div>
            </section>

            {/* WHY CHOOSE IET */}
            <section className="bpes-section">
                <div className="bpes-container">

                    <div className="bpes-centered-heading">
                        <span className="bpes-label">WHY CHOOSE IET?</span>
                        <h2>
                            Why Choose IET – TEMPL Group of Institutions
                            for BPES?
                        </h2>
                        <div className="bpes-heading-line"></div>

                        <p>
                            As a premier BPES college in Ghaziabad, IET
                            understands that sports and physical education
                            go far beyond textbooks. We provide an immersive
                            learning environment with state-of-the-art
                            facilities and hands-on learning experiences.
                        </p>
                    </div>

                    <div className="bpes-campus-banner">
                        <div className="bpes-campus-number">10</div>
                        <div>
                            <span>ACRES OF CAMPUS</span>
                            <h3>Vast Campus with Sports Infrastructure</h3>
                        </div>
                    </div>

                    <div className="bpes-facility-grid">
                        {sportsFacilities.map((facility, index) => (
                            <article className="bpes-glass bpes-facility-card" key={facility.title}>
                                <span>{String(index + 1).padStart(2, "0")}</span>
                                <h3>{facility.title}</h3>
                                <p>{facility.description}</p>
                            </article>
                        ))}
                    </div>

                </div>
            </section>

            {/* UPCOMING SPORTS ACADEMY */}
            <section className="bpes-section bpes-section-alt">
                <div className="bpes-container">

                    <div className="bpes-centered-heading">
                        <span className="bpes-label">FUTURE OPPORTUNITIES</span>
                        <h2>Upcoming International-Level Sports Academy</h2>
                        <div className="bpes-heading-line"></div>
                    </div>

                    <div className="bpes-sports-grid">
                        {upcomingSports.map((sport, index) => (
                            <div className="bpes-glass bpes-sport-card" key={sport}>
                                <span>{String(index + 1).padStart(2, "0")}</span>
                                <h3>{sport}</h3>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* ACADEMIC FACILITIES */}
            <section className="bpes-section">
                <div className="bpes-container">

                    <div className="bpes-centered-heading">
                        <span className="bpes-label">CAMPUS FACILITIES</span>
                        <h2>Academic & Support Facilities</h2>
                        <div className="bpes-heading-line"></div>
                    </div>

                    <div className="bpes-support-grid">
                        {academicFacilities.map((facility) => (
                            <div className="bpes-glass bpes-support-card" key={facility}>
                                <span className="bpes-check">✓</span>
                                <h3>{facility}</h3>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* WHO SHOULD JOIN */}
            <section className="bpes-section bpes-section-alt">
                <div className="bpes-container">

                    <div className="bpes-centered-heading">
                        <span className="bpes-label">IS BPES RIGHT FOR YOU?</span>
                        <h2>BPES – Who Should Join?</h2>
                        <div className="bpes-heading-line"></div>

                        <p>
                            This course is perfect for students who:
                        </p>
                    </div>

                    <div className="bpes-suitable-grid">
                        {suitableStudents.map((item) => (
                            <div className="bpes-glass bpes-suitable-card" key={item}>
                                <span>✓</span>
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* CAREER OPPORTUNITIES */}
            <section className="bpes-section">
                <div className="bpes-container">

                    <div className="bpes-centered-heading">
                        <span className="bpes-label">CAREER PATHS</span>
                        <h2>Career Opportunities After BPES</h2>
                        <div className="bpes-heading-line"></div>

                        <p>
                            Explore career opportunities in teaching,
                            coaching, health, fitness, sports management
                            and government sectors.
                        </p>
                    </div>

                    <div className="bpes-career-grid">
                        {careerOptions.map((career) => (
                            <article className="bpes-glass bpes-career-card" key={career.category}>
                                <span className="bpes-card-number">
                                    {career.icon}
                                </span>

                                <h3>{career.category}</h3>

                                <ul>
                                    {career.careers.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>

                </div>
            </section>

            {/* SPORTS INDUSTRY */}
            <section className="bpes-section bpes-section-alt">
                <div className="bpes-container">

                    <div className="bpes-centered-heading">
                        <span className="bpes-label">FUTURE OF SPORTS</span>
                        <h2>
                            Growth in Sports Industry in India – A Golden
                            Opportunity
                        </h2>
                        <div className="bpes-heading-line"></div>
                    </div>

                    <div className="bpes-glass bpes-growth-card">
                        <p>
                            India’s sports sector is growing rapidly with
                            government initiatives like <strong>Khelo India</strong>,
                            increased funding for Olympic sports, and
                            fitness-focused policies like <strong>Fit India Movement</strong>.
                            Graduates from BPES programs near Delhi NCR are
                            now in high demand across both the public and
                            private sectors.
                        </p>
                    </div>

                </div>
            </section>

            {/* FAQ (visible content matching the FAQPage schema) */}
            <section className="bpes-section">
                <div className="bpes-container">

                    <div className="bpes-centered-heading">
                        <span className="bpes-label">FAQ</span>
                        <h2>Frequently Asked Questions About BPES</h2>
                        <div className="bpes-heading-line"></div>
                    </div>

                    <div className="bpes-faq-list">
                        {faqs.map((faq) => (
                            <details className="bpes-glass bpes-faq-item" key={faq.question}>
                                <summary>{faq.question}</summary>
                                <p>{faq.answer}</p>
                            </details>
                        ))}
                    </div>

                </div>
            </section>

            {/* FINAL CTA */}
            <section className="bpes-cta-section">
                <div className="bpes-container">

                    <div className="bpes-glass bpes-cta-card">
                        <div>
                            <span className="bpes-label">IET COLLEGE</span>

                            <h2>
                                Turn Your Passion for Sports into a
                                Professional Career
                            </h2>

                            <p>
                                Explore the BPES program at TEMPL Group of
                                Institutions and take the next step towards
                                your future in sports and physical education.
                            </p>
                        </div>

                        <Link href="/contact" className="bpes-primary-btn">
                            Enquire Now <span>→</span>
                        </Link>
                    </div>

                </div>
            </section>

        </main>
    );
}