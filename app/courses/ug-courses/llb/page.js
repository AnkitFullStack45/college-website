import Link from "next/link";
import "./llb.css";

/* =========================================================
   SEO METADATA
========================================================= */

export const metadata = {
    metadataBase: new URL("https://www.templgroup.in"),

    title: "LLB Law College in Ghaziabad | LSR Law Academy – TEMPL Group",

    description:
        "Explore the 3-year LL.B programme at LSR Law Academy, TEMPL Group, Ghaziabad. Check eligibility, BCI approval, CCSU affiliation, course details and admission information.",

    alternates: {
        canonical: "/Llb",
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
        title: "LLB Law College in Ghaziabad | LSR Law Academy",
        description:
            "Discover the three-year LL.B programme at LSR Law Academy, TEMPL Group. Explore course details, eligibility, affiliation and admission information.",
        url: "https://www.templgroup.in/Llb",
        siteName: "TEMPL Group of Institutions",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: "/images/llb.webp",
                width: 1200,
                height: 630,
                alt: "LL.B programme at LSR Law Academy, TEMPL Group",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "LLB Law College in Ghaziabad | LSR Law Academy",
        description:
            "Explore the LL.B programme, eligibility and admission at LSR Law Academy, TEMPL Group.",
        images: ["/images/llb.webp"],
    },
};


/* =========================================================
   COURSE SCHEMA
========================================================= */

const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",

    name: "Bachelor of Laws (LL.B)",

    description:
        "The three-year Bachelor of Laws (LL.B) undergraduate programme at LSR Law Academy, TEMPL Group of Institutions, Muradnagar, Ghaziabad. The programme covers legal principles, civil law, criminal law, constitutional law, legal research and practical legal training.",

    url: "https://www.templgroup.in/Llb",

    courseCode: "LLB",

    educationalLevel: "Undergraduate",

    teaches: [
        "Civil Law",
        "Criminal Law",
        "Constitutional Law",
        "Legal Research",
        "Legal Drafting",
        "Professional Ethics",
        "Moot Court Practice",
        "Legal Procedures",
    ],

    provider: {
        "@type": "CollegeOrUniversity",
        name: "LSR Law Academy – TEMPL Group of Institutions",
        url: "https://www.templgroup.in/",

        address: {
            "@type": "PostalAddress",
            streetAddress: "NH-58, Abupur Road",
            addressLocality: "Muradnagar",
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


/* =========================================================
   FAQ DATA
========================================================= */

const faqs = [
    {
        question: "What is the duration of the LL.B programme?",
        answer:
            "The LL.B programme at LSR Law Academy is a three-year undergraduate law course for candidates who have completed graduation.",
    },
    {
        question: "What are the eligibility criteria for LL.B admission?",
        answer:
            "Candidates must hold a bachelor's degree from a recognised university. The eligibility criteria listed for the programme are 45% marks for General Category, 42% for OBC Category and 40% for SC/ST Category, subject to applicable CCS University and Bar Council of India regulations. Candidates should confirm the current admission requirements with the college.",
    },
    {
        question: "Is the LL.B programme approved by the Bar Council of India?",
        answer:
            "The LL.B programme at LSR Law Academy is stated to be approved by the Bar Council of India (BCI). Candidates can contact the college for details of the applicable approval.",
    },
    {
        question: "Which university is LSR Law Academy affiliated with?",
        answer:
            "LSR Law Academy is affiliated with Chaudhary Charan Singh University, Meerut.",
    },
    {
        question: "How many seats are available in the LL.B programme?",
        answer:
            "The stated seat intake for the LL.B programme is 240 seats, subject to applicable approvals and university norms.",
    },
    {
        question: "What career opportunities are available after LL.B?",
        answer:
            "Graduates can explore career opportunities in litigation, corporate law, legal consultancy, government services, judicial services, legal research, compliance and academics. Some professions require additional examinations, qualifications or enrolment.",
    },
    {
        question: "Does the college provide practical legal training?",
        answer:
            "The programme includes practical learning opportunities such as moot court activities, workshops, legal research and internship-related exposure, as applicable to the academic programme.",
    },
    {
        question: "Can I pursue an LL.M after completing LL.B?",
        answer:
            "Yes. After completing LL.B, graduates can pursue an LL.M in areas such as Constitutional Law, Corporate Law, International Law, Taxation and Intellectual Property Law, subject to the admission requirements of the chosen institution.",
    },
    {
        question: "How can I apply for LL.B admission?",
        answer:
            "You can enquire about LL.B admission through the official TEMPL Group website or visit the LSR Law Academy campus for admission assistance.",
    },
];


/* =========================================================
   FAQ SCHEMA
========================================================= */

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


/* =========================================================
   BREADCRUMB SCHEMA
========================================================= */

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.templgroup.in/",
        },
        {
            "@type": "ListItem",
            position: 2,
            name: "LL.B – Bachelor of Laws",
            item: "https://www.templgroup.in/Llb",
        },
    ],
};


/* =========================================================
   WHY CHOOSE LSR
========================================================= */

const whyChoose = [
    {
        icon: "🏛️",
        title: "Quality Legal Education",
        description:
            "Build a strong foundation in legal principles and professional responsibilities.",
    },
    {
        icon: "👨‍🏫",
        title: "Experienced Faculty",
        description:
            "Learn through academic guidance and subject-focused instruction.",
    },
    {
        icon: "📚",
        title: "Comprehensive Curriculum",
        description:
            "Develop knowledge across different areas of law and legal studies.",
    },
    {
        icon: "⚖️",
        title: "Moot Court Activities",
        description:
            "Develop courtroom confidence through practical legal activities.",
    },
    {
        icon: "🏢",
        title: "Learning Infrastructure",
        description:
            "Study in an academic environment with classroom and learning resources.",
    },
    {
        icon: "🤝",
        title: "Professional Development",
        description:
            "Explore practical learning and opportunities to develop professional skills.",
    },
];


/* =========================================================
   ADMISSION STEPS
========================================================= */

const admissionSteps = [
    "Complete the online application form.",
    "Submit your graduation details and academic documents.",
    "Attend counselling and document verification.",
    "Complete the admission formalities and fee payment.",
];


/* =========================================================
   CAREER OPTIONS
========================================================= */

const careerOptions = [
    {
        icon: "⚖️",
        title: "Legal Profession",
        roles: "Advocate, Criminal Lawyer, Civil Lawyer, Legal Advisor and Public Prosecutor.",
    },
    {
        icon: "🏢",
        title: "Corporate Sector",
        roles: "Corporate Lawyer, In-house Counsel, Contract Manager and Intellectual Property Lawyer.",
    },
    {
        icon: "🏛️",
        title: "Government & Public Sector",
        roles: "Judicial Services, Civil Services and Government Legal Expert.",
    },
    {
        icon: "🤝",
        title: "Litigation & Arbitration",
        roles: "Litigation Lawyer, Arbitrator and Mediator.",
    },
    {
        icon: "🌍",
        title: "Human Rights & Social Justice",
        roles: "Human Rights Lawyer and Social Justice Advocate.",
    },
    {
        icon: "🎓",
        title: "Academics & Research",
        roles: "Law Professor, Lecturer and Legal Researcher, subject to further qualifications.",
    },
    {
        icon: "📋",
        title: "Corporate Governance",
        roles: "Compliance Professional and Corporate Governance Specialist.",
    },
    {
        icon: "🌐",
        title: "International Law",
        roles: "Explore opportunities in international legal practice and related fields.",
    },
    {
        icon: "✍️",
        title: "Alternative Careers",
        roles: "Legal Journalist, Legal Process Outsourcing Professional and Legal Trainer.",
    },
];


/* =========================================================
   SAFE JSON-LD HELPER
========================================================= */

const jsonLd = (data) => ({
    __html: JSON.stringify(data).replace(/</g, "\\u003c"),
});


/* =========================================================
   MAIN LLB PAGE
========================================================= */

export default function LLBPage() {
    return (
        <main className="llb-page">

            {/* =================================================
                STRUCTURED DATA
            ================================================= */}

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={jsonLd(courseSchema)}
            />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={jsonLd(faqSchema)}
            />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={jsonLd(breadcrumbSchema)}
            />


            {/* =================================================
                TOP BANNER
            ================================================= */}

            <section className="llb-banner">
                <img
                    src="/images/llb.webp"
                    alt="LL.B Bachelor of Laws programme at LSR Law Academy"
                    className="llb-banner-image"
                />
            </section>


            {/* =================================================
                HERO SECTION
            ================================================= */}

            <section className="llb-hero">
                <div className="llb-container llb-hero-grid">

                    <div className="llb-hero-content">

                        <span className="llb-eyebrow">
                            BCI Approved <span>|</span> CCS University, Meerut
                        </span>

                        <h1>
                            LL.B – Bachelor
                            <span> of Laws</span>
                        </h1>

                        <h2>
                            Build a Successful Legal Career with
                            <span> LSR Law Academy</span>
                        </h2>

                        <p>
                            A comprehensive three-year LL.B programme designed
                            to develop legal knowledge, professional skills,
                            practical exposure and an understanding of legal
                            ethics and responsibilities.
                        </p>

                        <div className="llb-hero-buttons">

                            <Link
                                href="/contact"
                                className="llb-btn llb-btn-primary"
                            >
                                Apply Now <span>→</span>
                            </Link>

                            <a
                                href="#about-llb"
                                className="llb-btn llb-btn-outline"
                            >
                                Know More
                            </a>

                        </div>

                        <div className="llb-hero-stats">

                            <div>
                                <strong>240</strong>
                                <span>Seats</span>
                            </div>

                            <div>
                                <strong>3 Years</strong>
                                <span>Programme Duration</span>
                            </div>

                            <div>
                                <strong>BCI</strong>
                                <span>Approved Programme</span>
                            </div>

                        </div>

                    </div>


                    <div className="llb-hero-visual">

                        <div className="llb-visual-circle">
                            <span>⚖️</span>
                        </div>

                        <div className="llb-floating-card">

                            <span>⚖️</span>

                            <div>
                                <strong>Learn the Law</strong>
                                <p>Build a meaningful legal career</p>
                            </div>

                        </div>

                    </div>

                </div>
            </section>


            {/* =================================================
                INTRODUCTION
            ================================================= */}

            <section className="llb-section" id="about-llb">

                <div className="llb-container">

                    <div className="llb-intro-card llb-glass">

                        <div className="llb-intro-content">

                            <span className="llb-label">
                                ABOUT THE PROGRAMME
                            </span>

                            <h2>
                                LL.B Programme at LSR Law Academy –
                                The Gateway to a Legal Career
                            </h2>

                            <p>
                                Welcome to LSR Law Academy, an institution
                                committed to providing legal education and
                                academic learning. As part of the TEMPL Group
                                of Institutions, LSR Law Academy offers a
                                three-year LL.B programme for graduates
                                interested in pursuing a career in law.
                            </p>

                            <p>
                                The programme focuses on legal principles,
                                professional ethics, legal research and
                                practical skills that help students understand
                                the responsibilities of the legal profession.
                            </p>

                            <p>
                                LSR Law Academy is affiliated with Chaudhary
                                Charan Singh University, Meerut, and its LL.B
                                programme is stated to be approved by the
                                Bar Council of India (BCI).
                            </p>

                        </div>


                        <div className="llb-intro-side">

                            <div className="llb-law-symbol">⚖️</div>

                            <h3>Knowledge. Justice. Responsibility.</h3>

                            <p>
                                Develop the knowledge and skills to contribute
                                to the legal profession.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =================================================
                WHY CHOOSE
            ================================================= */}

            <section className="llb-section llb-section-alt">

                <div className="llb-container">

                    <div className="llb-section-heading">

                        <span className="llb-label">
                            WHY LSR LAW ACADEMY
                        </span>

                        <h2>
                            Why Choose LL.B at LSR Law Academy?
                        </h2>

                        <p>
                            Develop legal knowledge, practical abilities and
                            professional confidence in an academic
                            environment.
                        </p>

                    </div>


                    <div className="llb-feature-grid">

                        {whyChoose.map((item, index) => (

                            <div
                                className="llb-feature-card llb-glass"
                                key={index}
                            >

                                <div className="llb-feature-icon">
                                    {item.icon}
                                </div>

                                <h3>{item.title}</h3>

                                <p>{item.description}</p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* =================================================
                AFFILIATION AND APPROVALS
            ================================================= */}

            <section className="llb-section">

                <div className="llb-container">

                    <div className="llb-section-heading">

                        <span className="llb-label">
                            RECOGNITION & AFFILIATION
                        </span>

                        <h2>
                            Affiliation, Recognition & Approvals
                        </h2>

                    </div>


                    <div className="llb-approval-grid">

                        <div className="llb-approval-card llb-glass">

                            <span>🎓</span>

                            <h3>CCS University</h3>

                            <p>
                                Affiliated with Chaudhary Charan Singh
                                University, Meerut.
                            </p>

                        </div>


                        <div className="llb-approval-card llb-glass">

                            <span>⚖️</span>

                            <h3>Bar Council of India</h3>

                            <p>
                                LL.B programme stated to be approved by
                                the Bar Council of India.
                            </p>

                        </div>


                        <div className="llb-approval-card llb-glass">

                            <span>📜</span>

                            <h3>Legal Education Standards</h3>

                            <p>
                                The programme follows the applicable
                                university and legal education requirements.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =================================================
                ELIGIBILITY AND ADMISSION
            ================================================= */}

            <section className="llb-section llb-section-alt">

                <div className="llb-container">

                    <div className="llb-section-heading">

                        <span className="llb-label">
                            ADMISSIONS
                        </span>

                        <h2>
                            Eligibility & Admission Process
                        </h2>

                        <p>
                            Understand the admission requirements and steps
                            for joining the three-year LL.B programme.
                        </p>

                    </div>


                    <div className="llb-admission-grid">


                        {/* ELIGIBILITY */}

                        <div className="llb-info-card llb-glass">

                            <div className="llb-card-heading">

                                <span>🎓</span>

                                <h3>Eligibility Criteria</h3>

                            </div>

                            <p>
                                Candidates seeking admission to the LL.B
                                programme must fulfil the applicable
                                eligibility requirements:
                            </p>

                            <ul className="llb-check-list">

                                <li>
                                    Graduation in any stream from a
                                    recognised university.
                                </li>

                                <li>
                                    General Category: Minimum 45% marks.
                                </li>

                                <li>
                                    OBC Category: Minimum 42% marks.
                                </li>

                                <li>
                                    SC/ST Category: Minimum 40% marks.
                                </li>

                            </ul>

                            <div className="llb-note">
                                Note: These criteria must be confirmed against
                                the current CCS University and Bar Council of
                                India regulations before admission.
                            </div>

                        </div>


                        {/* ADMISSION PROCESS */}

                        <div className="llb-info-card llb-glass">

                            <div className="llb-card-heading">

                                <span>📋</span>

                                <h3>Admission Process</h3>

                            </div>

                            <div className="llb-timeline">

                                {admissionSteps.map((step, index) => (

                                    <div
                                        className="llb-timeline-item"
                                        key={index}
                                    >

                                        <span>{index + 1}</span>

                                        <p>{step}</p>

                                    </div>

                                ))}

                            </div>

                            <p className="llb-small-note">
                                Admissions are conducted according to the
                                applicable UP State Government, CCS University
                                and BCI guidelines.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =================================================
                SEAT INTAKE
            ================================================= */}

            <section className="llb-seat-section">

                <div className="llb-container">

                    <div className="llb-seat-card">

                        <div>

                            <span className="llb-label">
                                ADMISSION INTAKE
                            </span>

                            <h2>LL.B Seat Intake</h2>

                            <p>
                                LSR Law Academy has a stated intake of
                                240 seats for its three-year LL.B programme,
                                subject to applicable approvals and
                                university norms.
                            </p>

                        </div>


                        <div className="llb-seat-number">

                            <strong>240</strong>

                            <span>Seats</span>

                        </div>


                        <div className="llb-seat-duration">

                            <strong>3</strong>

                            <span>Years Programme</span>

                        </div>


                        <Link
                            href="/contact"
                            className="llb-btn llb-btn-light"
                        >
                            Enquire Now →
                        </Link>

                    </div>

                </div>

            </section>


            {/* =================================================
                LSR ADVANTAGE
            ================================================= */}

            <section className="llb-section">

                <div className="llb-container">

                    <div className="llb-section-heading">

                        <span className="llb-label">
                            THE LSR ADVANTAGE
                        </span>

                        <h2>
                            Learning Environment at LSR Law Academy
                        </h2>

                    </div>


                    <div className="llb-advantage-grid">


                        <div className="llb-advantage-card llb-glass">

                            <span>01</span>

                            <h3>Legal Education</h3>

                            <p>
                                An academic environment focused on legal
                                principles, practical learning and
                                professional development.
                            </p>

                        </div>


                        <div className="llb-advantage-card llb-glass">

                            <span>02</span>

                            <h3>Academic Community</h3>

                            <p>
                                Become part of an academic community that
                                encourages professional connections and
                                continued learning.
                            </p>

                        </div>


                        <div className="llb-advantage-card llb-glass">

                            <span>03</span>

                            <h3>Technology-Enabled Learning</h3>

                            <p>
                                Benefit from multimedia classrooms, digital
                                resources and legal research facilities.
                            </p>

                        </div>


                        <div className="llb-advantage-card llb-glass">

                            <span>04</span>

                            <h3>Student Development</h3>

                            <p>
                                Develop academic knowledge, communication
                                abilities and professional skills through
                                learning activities.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =================================================
                CAREER OPPORTUNITIES
            ================================================= */}

            <section
                className="llb-section llb-section-alt"
                id="career-options"
            >

                <div className="llb-container">

                    <div className="llb-section-heading">

                        <span className="llb-label">
                            YOUR FUTURE IN LAW
                        </span>

                        <h2>
                            Career Opportunities After LL.B
                        </h2>

                        <p>
                            An LL.B degree can open opportunities across
                            legal practice, corporate organisations, public
                            services, research and other professional fields.
                        </p>

                    </div>


                    <div className="llb-career-grid">

                        {careerOptions.map((career, index) => (

                            <div
                                className="llb-career-card llb-glass"
                                key={index}
                            >

                                <div className="llb-career-icon">
                                    {career.icon}
                                </div>

                                <h3>{career.title}</h3>

                                <p>{career.roles}</p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* =================================================
                HIGHER EDUCATION
            ================================================= */}

            <section className="llb-section">

                <div className="llb-container">

                    <div className="llb-higher-card llb-glass">

                        <div>

                            <span className="llb-label">
                                CONTINUE YOUR JOURNEY
                            </span>

                            <h2>
                                Higher Education After LL.B
                            </h2>

                            <p>
                                Students interested in advanced legal studies
                                and specialisation can explore several
                                opportunities after completing their LL.B.
                            </p>

                        </div>


                        <div className="llb-higher-grid">


                            <div>

                                <span>🎓</span>

                                <h3>Master of Laws (LL.M)</h3>

                                <p>
                                    Specialise in Constitutional Law,
                                    Corporate Law, International Law,
                                    Taxation or Human Rights.
                                </p>

                            </div>


                            <div>

                                <span>📖</span>

                                <h3>Ph.D. in Law</h3>

                                <p>
                                    Pursue advanced legal research and
                                    contribute to academic knowledge,
                                    subject to eligibility requirements.
                                </p>

                            </div>


                            <div>

                                <span>📜</span>

                                <h3>Diplomas & Certifications</h3>

                                <p>
                                    Explore Cyber Law, Taxation, Intellectual
                                    Property and other specialised areas.
                                </p>

                            </div>


                            <div>

                                <span>🏛️</span>

                                <h3>Competitive Examinations</h3>

                                <p>
                                    Prepare for Judicial Services and other
                                    relevant competitive examinations.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =================================================
                FREQUENTLY ASKED QUESTIONS
            ================================================= */}

            <section
                className="llb-section llb-section-alt"
                id="faq"
            >

                <div className="llb-container">

                    <div className="llb-section-heading">

                        <span className="llb-label">
                            FREQUENTLY ASKED QUESTIONS
                        </span>

                        <h2>
                            LL.B Admission FAQs
                        </h2>

                        <p>
                            Find answers to common questions about the LL.B
                            programme at LSR Law Academy.
                        </p>

                    </div>


                    <div className="llb-faq-list">

                        {faqs.map((faq, index) => (

                            <details
                                className="llb-faq-item llb-glass"
                                key={index}
                            >

                                <summary>

                                    <span>{faq.question}</span>

                                    <b>+</b>

                                </summary>

                                <p>{faq.answer}</p>

                            </details>

                        ))}

                    </div>

                </div>

            </section>


            {/* =================================================
                FINAL CTA
            ================================================= */}

            <section className="llb-final-cta">

                <div className="llb-container">

                    <div className="llb-final-card">

                        <span className="llb-label">
                            YOUR LEGAL CAREER STARTS HERE
                        </span>

                        <h2>
                            Join LSR Law Academy
                            <span>
                                {" "}– Begin Your Journey in Legal Education
                            </span>
                        </h2>

                        <p>
                            Learn • Practice • Excel
                        </p>

                        <Link
                            href="/contact"
                            className="llb-btn llb-btn-light"
                        >
                            Apply for LL.B Admission →
                        </Link>

                    </div>

                </div>

            </section>

        </main>
    );
}