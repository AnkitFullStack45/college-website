import Image from "next/image";
import Link from "next/link";
import "./deled.css";

/* =========================================================
   SEO METADATA
========================================================= */

export const metadata = {
    metadataBase: new URL("https://www.templgroup.in"),

    title: "D.El.Ed (BTC) College in Ghaziabad | IET College – TEMPL Group",

    description:
        "Explore the 2-year D.El.Ed (BTC) programme at IET College, TEMPL Group, Ghaziabad. Learn about eligibility, teacher training, admission process, course details and career opportunities.",

    alternates: {
        canonical: "/Deld",
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
        title: "D.El.Ed (BTC) College in Ghaziabad | IET College",
        description:
            "Discover the Diploma in Elementary Education programme at IET College, TEMPL Group. Explore course details, eligibility and admission information.",
        url: "https://www.templgroup.in/Deld",
        siteName: "TEMPL Group of Institutions",
        locale: "en_IN",
        type: "website",
        images: [
            {
                url: "/images/deploma_in_elementry_education.webp",
                width: 1200,
                height: 630,
                alt: "D.El.Ed Diploma in Elementary Education at IET College",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "D.El.Ed (BTC) College in Ghaziabad | TEMPL Group",
        description:
            "Explore D.El.Ed teacher training, eligibility and admission at IET College, TEMPL Group, Ghaziabad.",
        images: ["/images/deploma_in_elementry_education.webp"],
    },
};


/* =========================================================
   COURSE SCHEMA
========================================================= */

const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",

    name: "D.El.Ed – Diploma in Elementary Education (BTC)",

    description:
        "The two-year Diploma in Elementary Education (D.El.Ed), also known as BTC, is a teacher education programme designed to develop pedagogical knowledge and practical teaching skills for elementary education.",

    url: "https://www.templgroup.in/Deld",

    courseCode: "D.El.Ed",

    educationalLevel: "Diploma",

    teaches: [
        "Child Development and Psychology",
        "Teaching Methodologies",
        "Classroom Management",
        "Elementary Education",
        "Educational Technology",
        "Pedagogical Practices",
        "Assessment and Evaluation",
        "Teaching Practice",
    ],

    provider: {
        "@type": "EducationalOrganization",
        name: "Institute for Education and Technical Sciences – TEMPL Group of Institutions",
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
        duration: "P2Y",
    },
};


/* =========================================================
   FAQ DATA
========================================================= */

const faqs = [
    {
        question: "What is D.El.Ed and is it the same as BTC?",
        answer:
            "D.El.Ed stands for Diploma in Elementary Education. BTC, or Basic Training Certificate, is the earlier commonly used name for this teacher education programme. It is generally a two-year professional programme focused on elementary-level teaching.",
    },

    {
        question: "What is the duration of the D.El.Ed course?",
        answer:
            "The D.El.Ed programme is generally two years in duration. Students should check the applicable academic calendar and current programme regulations.",
    },

    {
        question: "What are the eligibility criteria for D.El.Ed admission?",
        answer:
            "Candidates must fulfil the educational qualification, minimum marks, age and other requirements prescribed in the applicable Uttar Pradesh D.El.Ed admission notification. The exact eligibility criteria should be checked for the relevant admission session.",
    },

    {
        question: "Is D.El.Ed a recognised teacher education programme?",
        answer:
            "D.El.Ed is a recognised teacher education qualification when offered by an institution with the required recognition and approval for the programme. Candidates should verify the current recognition status of the institution and programme before admission.",
    },

    {
        question: "How many seats are available in the D.El.Ed programme?",
        answer:
            "The displayed intake for the programme is 50 seats, subject to confirmation against the current approved institutional intake and applicable admission regulations.",
    },

    {
        question: "What subjects are covered in D.El.Ed?",
        answer:
            "The programme generally covers child development, educational psychology, teaching methodologies, classroom management, pedagogical practices, educational technology and assessment methods.",
    },

    {
        question: "What career opportunities are available after D.El.Ed?",
        answer:
            "D.El.Ed graduates can explore elementary teaching opportunities in eligible schools, subject to applicable teacher eligibility tests, recruitment rules and other requirements. They may also explore private education and further studies.",
    },

    {
        question: "Can I become a government school teacher after D.El.Ed?",
        answer:
            "D.El.Ed can be an essential qualification for certain elementary teaching positions, but it does not guarantee government employment. Candidates must meet the applicable eligibility conditions, qualify the required teacher eligibility test and fulfil recruitment requirements.",
    },

    {
        question: "How can I apply for D.El.Ed admission?",
        answer:
            "Candidates can enquire through the official TEMPL Group website or contact the institution for information about the current admission process and applicable state counselling procedure.",
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
            name: "D.El.Ed – Diploma in Elementary Education",
            item: "https://www.templgroup.in/Deld",
        },
    ],
};


/* =========================================================
   SAFE JSON-LD HELPER
========================================================= */

const jsonLd = (data) => ({
    __html: JSON.stringify(data).replace(/</g, "\\u003c"),
});


/* =========================================================
   FEATURES
========================================================= */

const features = [
    {
        icon: "👩‍🏫",
        title: "Qualified Faculty",
        text: "Learn through academic guidance and subject-focused instruction designed to support the development of future educators.",
    },

    {
        icon: "📚",
        title: "Comprehensive Curriculum",
        text: "Study teaching methodologies, child development, educational psychology, classroom management and pedagogical practices.",
    },

    {
        icon: "🏫",
        title: "Learning Infrastructure",
        text: "Access classrooms, library resources and educational facilities that support academic learning and teacher preparation.",
    },

    {
        icon: "🌱",
        title: "Holistic Development",
        text: "Develop communication, teamwork, leadership and interpersonal skills through academic and extracurricular activities.",
    },
];


/* =========================================================
   ADMISSION STEPS
========================================================= */

const admissionSteps = [
    {
        title: "Check Admission Eligibility",
        text: "Review the current Uttar Pradesh D.El.Ed admission notification to understand the eligibility conditions and application requirements.",
    },

    {
        title: "Complete the Application",
        text: "Follow the prescribed application and registration procedure for the relevant admission session.",
    },

    {
        title: "Participate in Counselling",
        text: "Complete the applicable counselling, choice-filling and document verification process wherever required.",
    },

    {
        title: "Complete Admission Formalities",
        text: "After selection and seat allotment, complete the institutional admission formalities and applicable fee payment.",
    },
];


/* =========================================================
   CAREER OPTIONS
========================================================= */

const careers = [
    {
        title: "Elementary School Teacher",
        text: "Explore teaching opportunities in eligible primary and elementary schools, subject to applicable recruitment requirements.",
    },

    {
        title: "Private School Educator",
        text: "Explore teaching opportunities in private schools that accept the relevant D.El.Ed qualification.",
    },

    {
        title: "Early Childhood Educator",
        text: "Develop a career in early childhood learning environments and educational support settings.",
    },

    {
        title: "Educational Support",
        text: "Explore roles supporting classroom activities, student learning and academic development.",
    },

    {
        title: "Private Tutoring",
        text: "Use teaching and subject knowledge to provide academic support and private tutoring.",
    },

    {
        title: "Further Education",
        text: "Explore higher education opportunities in education and related academic disciplines, subject to eligibility.",
    },
];


/* =========================================================
   CAREER DEVELOPMENT
========================================================= */

const placement = [
    {
        title: "Professional Skill Development",
        text: "Develop communication, presentation, classroom interaction and professional skills through academic activities.",
    },

    {
        title: "Teaching Practice",
        text: "Understand practical classroom situations and teaching methods through applicable practical training activities.",
    },

    {
        title: "Academic Workshops",
        text: "Participate in educational discussions, workshops and learning activities to understand teaching practices and developments.",
    },
];


/* =========================================================
   WHY CHOOSE TEMPL
========================================================= */

const whyChoose = [
    {
        title: "Academic Learning Environment",
        text: "Study in an educational environment focused on academic development and professional learning.",
    },

    {
        title: "Learning Infrastructure",
        text: "Access classrooms, library resources and educational facilities that support the learning process.",
    },

    {
        title: "Holistic Development",
        text: "Develop academic knowledge, communication abilities, teamwork and leadership skills.",
    },

    {
        title: "Convenient Location",
        text: "The campus is situated on NH-58, Abupur Road, Muradnagar, Ghaziabad, with connectivity to nearby areas.",
    },
];


/* =========================================================
   MAIN D.EL.ED PAGE
========================================================= */

export default function DElEdPage() {

    return (
        <main className="deled-page">

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
                HERO IMAGE
            ================================================= */}

            <section className="full-hero">

                <Image
                    src="/images/deploma_in_elementry_education.webp"
                    alt="D.El.Ed Diploma in Elementary Education at IET College, TEMPL Group"
                    fill
                    priority
                    sizes="100vw"
                    className="full-hero-img"
                />

            </section>


            <div className="deled-container">


                {/* =================================================
                    INTRODUCTION
                ================================================= */}

                <section
                    id="details"
                    className="glass intro-section"
                >

                    <span className="section-badge">
                        WELCOME TO TEMPL GROUP
                    </span>

                    <h1 className="main-title">
                        D.El.Ed (BTC) – Diploma in Elementary Education
                        in Ghaziabad
                    </h1>

                    <p className="lead-text">
                        The Diploma in Elementary Education (D.El.Ed),
                        commonly associated with the earlier BTC
                        qualification, is a professional teacher education
                        programme for individuals interested in elementary
                        education. It focuses on developing the knowledge
                        and practical teaching skills needed to support
                        children's learning and development.
                    </p>

                    <p className="lead-text">
                        Offered at the Institute for Education and Technical
                        Sciences, TEMPL Group of Institutions, Muradnagar,
                        Ghaziabad, the programme introduces aspiring
                        educators to teaching methodologies, child
                        development, classroom management and educational
                        practices.
                    </p>


                    <div className="stats-grid">

                        <div className="stat-card">
                            <strong>2 Years</strong>
                            <span>Course Duration</span>
                        </div>

                        <div className="stat-card">
                            <strong>50</strong>
                            <span>Stated Seat Intake</span>
                        </div>

                        <div className="stat-card">
                            <strong>D.El.Ed</strong>
                            <span>Teacher Education Programme</span>
                        </div>

                    </div>

                </section>


                {/* =================================================
                    ABOUT INSTITUTION
                ================================================= */}

                <section className="glass content-section">

                    <span className="section-badge">
                        ABOUT OUR INSTITUTION
                    </span>

                    <h2 className="section-heading">
                        Study D.El.Ed at TEMPL Group of Institutions
                    </h2>

                    <p className="section-text">
                        TEMPL Group of Institutions provides an academic
                        environment for students pursuing professional
                        education. Through its teacher education programme,
                        the institution aims to help aspiring educators
                        develop an understanding of elementary education,
                        teaching practices and student development.
                    </p>

                    <p className="section-text">
                        The D.El.Ed programme focuses on the academic
                        foundations and practical aspects of teaching,
                        preparing students to understand the learning needs
                        of children and the responsibilities of educators.
                    </p>

                </section>


                {/* =================================================
                    FEATURES
                ================================================= */}

                <section className="content-section">

                    <div className="section-header">

                        <span>ACADEMIC EXCELLENCE</span>

                        <h2>
                            Key Features of the D.El.Ed Programme
                        </h2>

                    </div>


                    <div className="grid-2">

                        {features.map((feature) => (

                            <article
                                className="glass feature-card"
                                key={feature.title}
                            >

                                <div className="feature-icon">
                                    {feature.icon}
                                </div>

                                <h3>{feature.title}</h3>

                                <p>{feature.text}</p>

                            </article>

                        ))}

                    </div>

                </section>


                {/* =================================================
                    ELIGIBILITY AND SEATS
                ================================================= */}

                <section className="grid-2 content-section">


                    {/* ELIGIBILITY */}

                    <div className="glass content-card">

                        <span className="section-badge">
                            ELIGIBILITY
                        </span>

                        <h2 className="section-heading">
                            Eligibility for D.El.Ed / BTC
                        </h2>

                        <p className="section-text">
                            Candidates interested in the D.El.Ed programme
                            must meet the eligibility requirements specified
                            in the applicable Uttar Pradesh admission
                            notification.
                        </p>

                        <ul className="custom-list">

                            <li>
                                <strong>Educational Qualification:</strong>
                                Candidates must have the prescribed
                                educational qualification from a recognised
                                institution.
                            </li>

                            <li>
                                <strong>Minimum Marks:</strong>
                                Candidates must satisfy the category-wise
                                minimum marks requirement specified in the
                                current admission notification.
                            </li>

                            <li>
                                <strong>Other Requirements:</strong>
                                Age limits, reservation rules and other
                                conditions are subject to the applicable
                                admission guidelines.
                            </li>

                        </ul>

                        <p className="section-text">
                            Always check the latest official admission
                            notification for the applicable eligibility
                            requirements.

                        </p>

                    </div>


                    {/* SEAT INTAKE */}

                    <div className="glass content-card">

                        <span className="section-badge">
                            SEAT INTAKE
                        </span>

                        <h2 className="section-heading">
                            Seat Intake and Reservation
                        </h2>

                        <p className="section-text">
                            The stated seat intake for the D.El.Ed programme
                            is subject to the institution's current approved
                            intake and applicable admission regulations.
                        </p>

                        <div className="big-number">
                            50 Seats
                        </div>

                        <p className="section-text">
                            Reservation and seat allocation are governed by
                            the applicable state admission and counselling
                            rules.
                        </p>

                    </div>

                </section>


                {/* =================================================
                    ADMISSION PROCESS
                ================================================= */}

                <section className="glass content-section">

                    <span className="section-badge">
                        JOIN OUR INSTITUTION
                    </span>

                    <h2 className="section-heading">
                        D.El.Ed Admission Process
                    </h2>

                    <p className="section-text">
                        Candidates should follow the prescribed admission
                        procedure for the relevant Uttar Pradesh D.El.Ed
                        admission session.
                    </p>


                    <div className="steps-list">

                        {admissionSteps.map((step, index) => (

                            <div
                                className="step-item"
                                key={step.title}
                            >

                                <div className="step-number">
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                                <div>

                                    <h3>{step.title}</h3>

                                    <p>{step.text}</p>

                                </div>

                            </div>

                        ))}

                    </div>

                </section>


                {/* =================================================
                    CAREER OPPORTUNITIES
                ================================================= */}

                <section className="content-section">

                    <div className="section-header">

                        <span>FUTURE OPPORTUNITIES</span>

                        <h2>
                            Career Opportunities After D.El.Ed / BTC
                        </h2>

                    </div>

                    <p className="center-text">
                        D.El.Ed develops foundational teaching knowledge,
                        classroom management abilities and an understanding
                        of elementary education. Graduates can explore
                        relevant teaching and education-related opportunities
                        according to applicable qualification and recruitment
                        requirements.
                    </p>


                    <div className="grid-3">

                        {careers.map((career) => (

                            <article
                                className="glass career-card"
                                key={career.title}
                            >

                                <div className="card-check">
                                    ✓
                                </div>

                                <h3>{career.title}</h3>

                                <p>{career.text}</p>

                            </article>

                        ))}

                    </div>

                    <p className="section-text">
                        <strong>Important:</strong> Government and other
                        regulated teaching positions may require CTET,
                        UPTET or another applicable teacher eligibility
                        qualification, along with the relevant recruitment
                        conditions. Completing D.El.Ed does not guarantee
                        employment.
                    </p>

                </section>


                {/* =================================================
                    PLACEMENT AND CAREER SUPPORT
                ================================================= */}

                <section className="content-section">

                    <div className="section-header">

                        <span>CAREER DEVELOPMENT</span>

                        <h2>
                            Professional Development and Career Support
                        </h2>

                    </div>

                    <p className="center-text">
                        Teacher preparation involves more than academic
                        study. Professional development activities can help
                        aspiring educators strengthen communication,
                        classroom interaction and practical teaching skills.
                    </p>


                    <div className="grid-3">

                        {placement.map((item) => (

                            <article
                                className="glass placement-card"
                                key={item.title}
                            >

                                <div className="feature-icon">
                                    🎓
                                </div>

                                <h3>{item.title}</h3>

                                <p>{item.text}</p>

                            </article>

                        ))}

                    </div>

                </section>


                {/* =================================================
                    WHY CHOOSE TEMPL
                ================================================= */}

                <section className="glass content-section">

                    <span className="section-badge">
                        WHY TEMPL GROUP?
                    </span>

                    <h2 className="section-heading">
                        Why Choose TEMPL Group of Institutions?
                    </h2>


                    <div className="grid-2">

                        {whyChoose.map((item) => (

                            <div
                                className="why-card"
                                key={item.title}
                            >

                                <div className="card-check">
                                    ✓
                                </div>

                                <div>

                                    <h3>{item.title}</h3>

                                    <p>{item.text}</p>

                                </div>

                            </div>

                        ))}

                    </div>

                </section>


                {/* =================================================
                    FAQ SECTION
                ================================================= */}

                <section
                    className="glass content-section"
                    id="faq"
                >

                    <div className="section-header">

                        <span>FREQUENTLY ASKED QUESTIONS</span>

                        <h2>
                            D.El.Ed / BTC Admission FAQs
                        </h2>

                        <p>
                            Find answers to common questions about the
                            D.El.Ed programme, eligibility, admission and
                            career opportunities.
                        </p>

                    </div>


                    <div className="deled-faq-list">

                        {faqs.map((faq, index) => (

                            <details
                                className="deled-faq-item"
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

                </section>


                {/* =================================================
                    FINAL CTA
                ================================================= */}

                <footer className="glass footer-section">

                    <span className="section-badge">
                        START YOUR JOURNEY
                    </span>

                    <h2>
                        Begin Your Journey in Teacher Education
                    </h2>

                    <p>
                        Explore the D.El.Ed / BTC programme at TEMPL Group
                        of Institutions, Muradnagar, Ghaziabad. Take the
                        first step towards developing your teaching
                        knowledge and professional skills.
                    </p>

                    <div className="deled-cta-buttons">

                        <Link
                            href="/contact"
                            className="primary-button"
                        >
                            Enquire About Admission →
                        </Link>

                    </div>

                </footer>

            </div>

        </main>
    );
}