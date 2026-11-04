import Link from "next/link";
import "./iet-college.css";

export const metadata = {
    title: "IET College Ghaziabad | Courses, Facilities & Admissions",
    description:
        "Explore IET College Ghaziabad, offering BCA, BBA, B.Com, B.Ed, M.Ed, BPES and D.El.Ed programs with modern facilities, practical learning and placement assistance.",
    alternates: {
        canonical: "https://www.templgroup.in/Colleges/iet-college",
    },
    openGraph: {
        title: "IET College Ghaziabad | TEMPL Group of Institutions",
        description:
            "Discover academic programs, modern campus facilities, scholarships and career opportunities at IET College.",
        images: ["/image/new_ietCollege%20(2).webp"],
    },
};

const programs = [
    {
        number: "01",
        title: "Bachelor of Education (B.Ed)",
        year: "Started in 2003",
        description:
            "Prepare for a rewarding teaching career through modern teaching methodologies, classroom management, practical training and student-centered learning.",
        href: "/Bed",
        tag: "Education",
    },
    {
        number: "02",
        title: "BBA",
        year: "Introduced in 2011",
        description:
            "Develop a strong foundation in management, entrepreneurship, marketing, business strategy and organizational skills.",
        href: "/Bba",
        tag: "Management",
    },
    {
        number: "03",
        title: "B.Com",
        year: "Introduced in 2011",
        description:
            "Build knowledge of accounting, finance, commerce, taxation and business practices for a professional career.",
        href: "/Bcom",
        tag: "Commerce",
    },
    {
        number: "04",
        title: "Bachelor of Computer Applications (BCA)",
        year: "Introduced in 2016",
        description:
            "Learn programming, software development, databases, networking, web technologies, cloud computing and practical project development.",
        href: "/Bca",
        tag: "Computer Science",
    },
    {
        number: "05",
        title: "Master of Education (M.Ed)",
        year: "Launched in 2019",
        description:
            "Explore educational research, leadership, curriculum development and advanced teaching practices.",
        href: "/Med",
        tag: "Education",
    },
    {
        number: "06",
        title: "Diploma in Elementary Education (D.El.Ed)",
        year: "Professional Diploma",
        description:
            "Develop essential skills in pedagogy, child psychology, classroom teaching and elementary education.",
        href: "/Deld",
        tag: "Education",
    },
    {
        number: "07",
        title: "Bachelor of Physical Education & Sports (BPES)",
        year: "Started in 2025",
        description:
            "Explore sports science, fitness, coaching, sports management, exercise physiology and practical training.",
        href: "/Bpes",
        tag: "Sports & Fitness",
    },
];

const reasons = [
    {
        number: "01",
        title: "Industry-Oriented Programs",
        description:
            "Curriculum designed around current industry trends, combining academic knowledge with practical learning.",
    },
    {
        number: "02",
        title: "Experienced Faculty",
        description:
            "Learn from qualified faculty members who guide students through academic learning and professional development.",
    },
    {
        number: "03",
        title: "Modern Infrastructure",
        description:
            "Spacious classrooms, computer laboratories, a well-stocked library and modern campus facilities.",
    },
    {
        number: "04",
        title: "Industry Exposure",
        description:
            "Workshops, internships, industrial visits, expert sessions and live projects help develop practical knowledge.",
    },
    {
        number: "05",
        title: "Holistic Development",
        description:
            "Cultural events, sports activities, seminars and leadership programs support personality development.",
    },
    {
        number: "06",
        title: "Scholarships & Financial Assistance",
        description:
            "Merit-based scholarships and financial support help eligible students pursue higher education.",
    },
];

const facilities = [
    {
        number: "01",
        title: "Computer Lab",
        description:
            "Computer laboratories equipped with hardware, programming software and internet connectivity for practical learning.",
    },
    {
        number: "02",
        title: "Digital Library",
        description:
            "Access books, journals, research papers, e-books and digital learning resources.",
    },
    {
        number: "03",
        title: "Smart Classrooms",
        description:
            "Interactive classrooms supported by projectors, digital teaching tools and multimedia technology.",
    },
    {
        number: "04",
        title: "Wi-Fi Campus",
        description:
            "Internet connectivity across the campus to support digital learning and academic activities.",
    },
    {
        number: "05",
        title: "Sports Facilities",
        description:
            "Opportunities for cricket, football, volleyball, athletics, indoor games, yoga and fitness activities.",
    },
    {
        number: "06",
        title: "Auditorium",
        description:
            "A venue for seminars, workshops, conferences, cultural programs and guest lectures.",
    },
    {
        number: "07",
        title: "Training & Placement",
        description:
            "Career counselling, aptitude training, resume building, mock interviews, internships and placement assistance.",
    },
    {
        number: "08",
        title: "Innovation Lab",
        description:
            "An environment for developing academic projects, coding solutions, research ideas and technology innovations.",
    },
];

const recognitions = [
    {
        short: "CCSU",
        title: "CCSU Affiliation",
        description:
            "Affiliated with Chaudhary Charan Singh University, Meerut.",
    },
    {
        short: "NCTE",
        title: "NCTE Approved",
        description:
            "Approved by the National Council for Teacher Education.",
    },
    {
        short: "SCERT",
        title: "SCERT Approved",
        description:
            "Approved by the State Council of Educational Research and Training.",
    },
    {
        short: "AICTE",
        title: "AICTE Approved",
        description:
            "Approved by the All India Council for Technical Education.",
    },
    {
        short: "UGC",
        title: "UGC Recognized",
        description:
            "Recognized by the University Grants Commission.",
    },
    {
        short: "NAAC",
        title: "NAAC Accredited",
        description:
            "Accredited by the National Assessment and Accreditation Council.",
    },
];

const faqs = [
    {
        question: "Why should students choose IET College for higher education?",
        answer:
            "IET College offers career-oriented programs, experienced faculty, modern infrastructure, practical learning opportunities and student development activities.",
    },
    {
        question: "Is IET College affiliated with CCS University Meerut?",
        answer:
            "Yes. IET College is affiliated with Chaudhary Charan Singh University (CCSU), Meerut.",
    },
    {
        question: "What courses are offered at IET College?",
        answer:
            "The academic programs include BCA, BBA, B.Com, B.Ed, M.Ed, BPES and D.El.Ed.",
    },
    {
        question: "Does IET College provide placement assistance?",
        answer:
            "Yes. The Training and Placement Cell provides career counselling, aptitude training, resume-building guidance, mock interviews, internship opportunities and placement assistance.",
    },
    {
        question: "What facilities are available on the campus?",
        answer:
            "Campus facilities include computer laboratories, a digital library, smart classrooms, Wi-Fi connectivity, sports facilities, an auditorium, an innovation lab and placement support.",
    },
    {
        question: "Does IET College offer scholarships?",
        answer:
            "Yes. Eligible students can receive merit-based scholarships and financial assistance based on academic performance and extracurricular achievements.",
    },
    {
        question: "How does IET College improve students' employability?",
        answer:
            "Students participate in workshops, seminars, certification programs, communication training, technical sessions, internships and industry projects.",
    },
    {
        question: "Is IET College a good choice for students in Ghaziabad and Delhi NCR?",
        answer:
            "IET College offers a range of academic programs, modern infrastructure, practical learning opportunities and career support for students from Ghaziabad and the Delhi NCR region.",
    },
];

function SectionHeading({ eyebrow, title, description, centered = false }) {
    return (
        <div className={`iet-section-heading ${centered ? "iet-heading-center" : ""}`}>
            <span className="iet-eyebrow">{eyebrow}</span>
            <h2>{title}</h2>
            {description && <p>{description}</p>}
        </div>
    );
}

export default function IETCollegePage() {
    return (
        <main className="iet-page">

            {/* HERO SECTION */}
            <section className="iet-hero">
                <div className="iet-hero-image">
                    <img
                        src="/images/new_ietCollege.webp"
                        alt="Institute for Education and Technical Sciences - IET College"
                    />
                </div>

                <div className="iet-hero-overlay"></div>

                <div className="iet-hero-content">
                    <span className="iet-hero-label">
                        TEMPL GROUP OF INSTITUTIONS
                    </span>

                    <h1>
                        Institute for Education and
                        <span> Technical Sciences</span>
                    </h1>

                    <p>
                        Building knowledge, developing skills and preparing
                        students for successful professional careers.
                    </p>

                    <div className="iet-hero-buttons">
                        <a href="#academic-programs" className="iet-btn iet-btn-orange">
                            Explore Programs <span>→</span>
                        </a>

                        <a href="#admissions" className="iet-btn iet-btn-outline">
                            Enquire Now
                        </a>
                    </div>
                </div>

                <div className="iet-hero-bottom">
                    <span>Academic Excellence</span>
                    <span>Practical Learning</span>
                    <span>Career Development</span>
                </div>
            </section>


            {/* INTRODUCTION */}
            <section className="iet-intro iet-section">
                <div className="iet-container iet-intro-grid">

                    <div className="iet-intro-left">
                        <span className="iet-eyebrow">WELCOME TO IET COLLEGE</span>

                        <h2>
                            Education That Builds
                            <span> Your Future</span>
                        </h2>

                        <p>
                            IET College is recognized as an educational
                            institution in Ghaziabad offering programs in
                            computer applications, management, commerce,
                            education and physical education.
                        </p>

                        <p>
                            By combining academic learning, practical
                            experiences and professional development,
                            the college aims to prepare students for
                            opportunities in an evolving professional world.
                        </p>

                        <a
                            href="https://ietcollege.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="iet-text-link"
                        >
                            Visit Official IET College Website <span>→</span>
                        </a>
                    </div>

                    <div className="iet-intro-card">
                        <div className="iet-intro-card-top">
                            <span className="iet-intro-icon">IET</span>
                            <span className="iet-intro-card-label">
                                ABOUT THE INSTITUTE
                            </span>
                        </div>

                        <h3>Over Two Decades of Educational Experience</h3>

                        <p>
                            Established with a vision to connect educational
                            excellence with professional requirements, IET
                            College supports intellectual growth, leadership
                            and career development.
                        </p>

                        <div className="iet-intro-card-footer">
                            <span>Education</span>
                            <span>Management</span>
                            <span>Commerce</span>
                            <span>Computer Science</span>
                        </div>
                    </div>

                </div>
            </section>


            {/* ACADEMIC PROGRAMS */}
            <section className="iet-programs iet-section" id="academic-programs">
                <div className="iet-container">

                    <SectionHeading
                        eyebrow="EXPLORE OUR COURSES"
                        title="Our Academic Programs"
                        description="Choose from career-oriented academic programs designed to develop knowledge, practical skills and professional capabilities."
                        centered
                    />

                    <div className="iet-program-grid">
                        {programs.map((program) => (
                            <article className="iet-program-card" key={program.number}>

                                <div className="iet-program-top">
                                    <span className="iet-card-number">
                                        {program.number}
                                    </span>

                                    <span className="iet-program-tag">
                                        {program.tag}
                                    </span>
                                </div>

                                <h3>{program.title}</h3>

                                <span className="iet-program-year">
                                    {program.year}
                                </span>

                                <p>{program.description}</p>

                                <Link href={program.href} className="iet-card-link">
                                    Explore Program <span>→</span>
                                </Link>

                            </article>
                        ))}
                    </div>

                </div>
            </section>


            {/* WHY CHOOSE IET */}
            <section className="iet-why iet-section">
                <div className="iet-container">

                    <SectionHeading
                        eyebrow="THE IET ADVANTAGE"
                        title="Why Choose IET College?"
                        description="A student-focused learning environment that brings together academic knowledge, practical exposure and personal development."
                        centered
                    />

                    <div className="iet-reasons-grid">
                        {reasons.map((reason) => (
                            <article className="iet-reason-card" key={reason.number}>
                                <span className="iet-reason-number">
                                    {reason.number}
                                </span>

                                <h3>{reason.title}</h3>
                                <p>{reason.description}</p>
                            </article>
                        ))}
                    </div>

                </div>
            </section>


            {/* CAMPUS FACILITIES */}
            <section className="iet-facilities iet-section">
                <div className="iet-container">

                    <SectionHeading
                        eyebrow="CAMPUS INFRASTRUCTURE"
                        title="Campus Facilities at IET College"
                        description="A supportive campus environment with facilities that encourage academic learning, innovation, physical fitness and professional growth."
                        centered
                    />

                    <div className="iet-facilities-grid">
                        {facilities.map((facility) => (
                            <article className="iet-facility-card" key={facility.number}>
                                <span className="iet-facility-number">
                                    {facility.number}
                                </span>

                                <div>
                                    <h3>{facility.title}</h3>
                                    <p>{facility.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>

                </div>
            </section>


            {/* LEARNING ENVIRONMENT */}
            <section className="iet-learning iet-section">
                <div className="iet-container">
                    <div className="iet-learning-content">

                        <div>
                            <span className="iet-eyebrow">
                                BEYOND CLASSROOM LEARNING
                            </span>

                            <h2>
                                A Learning Environment That
                                <span> Supports Success</span>
                            </h2>
                        </div>

                        <div className="iet-learning-text">
                            <p>
                                At IET College, students benefit from a
                                learning environment that brings together
                                laboratories, digital resources, smart
                                classrooms, sports facilities and
                                innovation-driven education.
                            </p>

                            <p>
                                Academic activities and practical experiences
                                help students develop technical knowledge,
                                leadership abilities, communication skills
                                and professional confidence.
                            </p>
                        </div>

                    </div>

                    <div className="iet-learning-points">
                        <span>Practical Learning</span>
                        <span>Digital Resources</span>
                        <span>Innovation</span>
                        <span>Personality Development</span>
                    </div>
                </div>
            </section>


            {/* RECOGNITIONS */}
            <section className="iet-recognitions iet-section">
                <div className="iet-container">

                    <SectionHeading
                        eyebrow="ACADEMIC CREDENTIALS"
                        title="Recognitions, Affiliations & Approvals"
                        description="IET College maintains academic affiliations and approvals from educational authorities and regulatory bodies."
                        centered
                    />

                    <div className="iet-recognition-grid">
                        {recognitions.map((item) => (
                            <article className="iet-recognition-card" key={item.short}>
                                <div className="iet-recognition-badge">
                                    {item.short}
                                </div>

                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </article>
                        ))}
                    </div>

                </div>
            </section>


            {/* FAQ */}
            <section className="iet-faq iet-section">
                <div className="iet-container iet-faq-layout">

                    <div className="iet-faq-intro">
                        <span className="iet-eyebrow">GOT QUESTIONS?</span>

                        <h2>
                            Frequently Asked
                            <span> Questions</span>
                        </h2>

                        <p>
                            Find helpful information about IET College,
                            academic programs, campus facilities,
                            scholarships and student support.
                        </p>

                        <a href="#admissions" className="iet-text-link">
                            Talk to Our Admission Team <span>→</span>
                        </a>
                    </div>

                    <div className="iet-faq-list">
                        {faqs.map((faq, index) => (
                            <details className="iet-faq-item" key={index}>
                                <summary>
                                    <span>{faq.question}</span>
                                    <span className="iet-faq-plus">+</span>
                                </summary>

                                <p>{faq.answer}</p>
                            </details>
                        ))}
                    </div>

                </div>
            </section>


            {/* FUTURE CTA */}
            <section className="iet-future iet-section">
                <div className="iet-container">
                    <div className="iet-future-box">

                        <span className="iet-eyebrow">
                            YOUR JOURNEY STARTS HERE
                        </span>

                        <h2>
                            Your Future Starts
                            <span> With IET College</span>
                        </h2>

                        <p>
                            Whether you are interested in education, business,
                            commerce, information technology or physical
                            education, IET College aims to support your
                            academic journey and professional ambitions.
                        </p>

                        <a href="#admissions" className="iet-btn iet-btn-orange">
                            Begin Your Journey <span>→</span>
                        </a>

                    </div>
                </div>
            </section>


            {/* ADMISSION CTA */}
            <section className="iet-admission iet-section" id="admissions">
                <div className="iet-container iet-admission-grid">

                    <div className="iet-admission-content">
                        <span className="iet-eyebrow">
                            ADMISSIONS & ENQUIRIES
                        </span>

                        <h2>
                            Interested in Building a
                            <span> Successful Career?</span>
                        </h2>

                        <p>
                            Take the first step toward your academic and
                            professional goals. Our admission counselors
                            can guide you through courses, scholarships,
                            eligibility, fee structure, placements and
                            career opportunities.
                        </p>

                        <div className="iet-admission-benefits">
                            <span>✓ Expert Admission Guidance</span>
                            <span>✓ Scholarship Information</span>
                            <span>✓ Career Counselling Support</span>
                            <span>✓ Course & Fee Details</span>
                            <span>✓ Placement & Skill Development Information</span>
                            <span>✓ Guidance Throughout the Admission Process</span>
                        </div>

                        <p className="iet-admission-note">
                            Explore your opportunities and take the next
                            step toward a rewarding educational journey.
                        </p>
                    </div>

                    <div className="iet-admission-card">
                        <span className="iet-admission-card-label">
                            START YOUR JOURNEY
                        </span>

                        <h3>Take the First Step Towards Your Future</h3>

                        <p>
                            Connect with our admission team to learn more
                            about available programs and admission guidance.
                        </p>

                        <a
                            href="https://ietcollege.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="iet-btn iet-btn-orange iet-admission-btn"
                        >
                            Visit IET College <span>→</span>
                        </a>

                        <div className="iet-admission-courses">
                            <span>BCA</span>
                            <span>BBA</span>
                            <span>B.Com</span>
                            <span>B.Ed</span>
                            <span>M.Ed</span>
                            <span>BPES</span>
                            <span>D.El.Ed</span>
                        </div>
                    </div>

                </div>
            </section>

        </main>
    );
}