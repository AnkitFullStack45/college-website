import Link from "next/link";
import "./llb.css";

const whyChoose = [
    {
        icon: "🏛️",
        title: "Top Law College",
        description: "Quality legal education in Ghaziabad and Delhi NCR.",
    },
    {
        icon: "👨‍🏫",
        title: "Expert Faculty",
        description: "Learn from experienced faculty and legal professionals.",
    },
    {
        icon: "📚",
        title: "Comprehensive Curriculum",
        description: "Build strong foundations in different areas of law.",
    },
    {
        icon: "⚖️",
        title: "Moot Court Training",
        description: "Develop courtroom confidence through practical activities.",
    },
    {
        icon: "🏢",
        title: "Modern Infrastructure",
        description: "Learn in smart classrooms with legal research facilities.",
    },
    {
        icon: "🤝",
        title: "Industry Connections",
        description: "Explore internships and professional networking opportunities.",
    },
];

const admissionSteps = [
    "Complete the online application form.",
    "Submit your graduation details and academic documents.",
    "Attend counselling and document verification.",
    "Complete the admission formalities and fee payment.",
];

const careerOptions = [
    {
        icon: "⚖️",
        title: "Legal Profession",
        roles: "Advocate, Criminal Lawyer, Civil Lawyer, Legal Advisor and Public Prosecutor.",
    },
    {
        icon: "🏢",
        title: "Corporate Sector",
        roles: "Corporate Lawyer, In-house Counsel, Contract Manager and IP Lawyer.",
    },
    {
        icon: "🏛️",
        title: "Government & Public Sector",
        roles: "Judicial Services, Civil Services, Government Legal Expert and Tax Consultant.",
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
        roles: "Law Professor, Lecturer and Legal Researcher.",
    },
    {
        icon: "📋",
        title: "Corporate Governance",
        roles: "Compliance Officer, Company Secretary and Governance Professional.",
    },
    {
        icon: "🌐",
        title: "International Law",
        roles: "International Lawyer, Diplomat and Foreign Service Officer.",
    },
    {
        icon: "✍️",
        title: "Alternative Careers",
        roles: "Legal Journalist, LPO Professional and Corporate Legal Trainer.",
    },
];

const faqs = [
    {
        question: "What is the duration of the LL.B program?",
        answer: "The LL.B program at LSR Law Academy is a three-year undergraduate law course for graduates.",
    },
    {
        question: "What are the eligibility criteria for LL.B admission?",
        answer: "Candidates must hold a bachelor's degree from a recognized university. The minimum marks requirement is generally 45% for General Category, 42% for OBC and 40% for SC/ST candidates, subject to applicable university and BCI regulations.",
    },
    {
        question: "Is the LL.B program approved by the Bar Council of India?",
        answer: "The LL.B program at LSR Law Academy is approved by the Bar Council of India (BCI).",
    },
    {
        question: "Which university is LSR Law Academy affiliated with?",
        answer: "LSR Law Academy is affiliated with Chaudhary Charan Singh University, Meerut.",
    },
    {
        question: "How many seats are available in the LL.B program?",
        answer: "The stated seat intake for the LL.B program is 240 seats, subject to applicable approvals and university norms.",
    },
    {
        question: "What career opportunities are available after LL.B?",
        answer: "Graduates can explore careers in litigation, corporate law, legal consultancy, government services, judicial services, legal research, compliance and academics.",
    },
    {
        question: "Does the college provide practical legal training?",
        answer: "The program emphasizes practical learning through moot court activities, workshops, internships and legal research opportunities.",
    },
    {
        question: "Can I pursue an LL.M after completing LL.B?",
        answer: "Yes. After completing LL.B, graduates can pursue an LL.M in areas such as Constitutional Law, Corporate Law, International Law, Taxation and Intellectual Property Law.",
    },
    {
        question: "How can I apply for LL.B admission?",
        answer: "You can complete the online application form through the official TEMPL Group website or visit the campus for admission assistance.",
    },
];

export default function LLBPage() {
    return (
        <main className="llb-page">

            {/* TOP BANNER */}
            <section className="llb-banner">
                <img
                    src="/images/llb.webp"
                    alt="LL.B Bachelor of Laws at LSR Law Academy"
                    className="llb-banner-image"
                />
            </section>

            {/* HERO SECTION */}
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
                            A comprehensive three-year LL.B program designed
                            to develop legal knowledge, professional skills,
                            practical exposure and ethical understanding.
                        </p>

                        <div className="llb-hero-buttons">
                            <Link href="/contact" className="llb-btn llb-btn-primary">
                                Apply Now <span>→</span>
                            </Link>

                            <a href="#about-llb" className="llb-btn llb-btn-outline">
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
                                <span>Program Duration</span>
                            </div>

                            <div>
                                <strong>BCI</strong>
                                <span>Approved Program</span>
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

            {/* INTRODUCTION */}
            <section className="llb-section" id="about-llb">
                <div className="llb-container">

                    <div className="llb-intro-card llb-glass">
                        <div className="llb-intro-content">
                            <span className="llb-label">ABOUT THE PROGRAM</span>

                            <h2>
                                LL.B Program at LSR Law Academy –
                                The Gateway to a Prestigious Legal Career
                            </h2>

                            <p>
                                Welcome to LSR Law Academy, an institution
                                committed to providing quality legal education
                                and industry-relevant learning. As part of the
                                TEMPL Group of Institutions, we offer a
                                comprehensive three-year LL.B program for
                                graduates who wish to pursue a career in law.
                            </p>

                            <p>
                                The program focuses on legal principles,
                                professional ethics, legal research and
                                practical skills that help students understand
                                the responsibilities of the legal profession.
                            </p>

                            <p>
                                LSR Law Academy is affiliated with CCS
                                University, Meerut, and the LL.B program is
                                approved by the Bar Council of India (BCI).
                            </p>
                        </div>

                        <div className="llb-intro-side">
                            <div className="llb-law-symbol">⚖️</div>
                            <h3>Knowledge. Justice. Responsibility.</h3>
                            <p>
                                Develop the confidence and skills to contribute
                                to the legal profession.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* WHY CHOOSE */}
            <section className="llb-section llb-section-alt">
                <div className="llb-container">

                    <div className="llb-section-heading">
                        <span className="llb-label">WHY LSR LAW ACADEMY</span>
                        <h2>Why Choose LL.B at LSR Law Academy?</h2>
                        <p>
                            Develop legal knowledge, practical abilities and
                            professional confidence in a supportive academic
                            environment.
                        </p>
                    </div>

                    <div className="llb-feature-grid">
                        {whyChoose.map((item, index) => (
                            <div className="llb-feature-card llb-glass" key={index}>
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

            {/* AFFILIATION */}
            <section className="llb-section">
                <div className="llb-container">

                    <div className="llb-section-heading">
                        <span className="llb-label">RECOGNITION & AFFILIATION</span>
                        <h2>Affiliation, Accreditation & Approvals</h2>
                    </div>

                    <div className="llb-approval-grid">

                        <div className="llb-approval-card llb-glass">
                            <span>🎓</span>
                            <h3>CCS University</h3>
                            <p>Affiliated to Chaudhary Charan Singh University, Meerut.</p>
                        </div>

                        <div className="llb-approval-card llb-glass">
                            <span>⚖️</span>
                            <h3>Bar Council of India</h3>
                            <p>LL.B program approved by the Bar Council of India.</p>
                        </div>

                        <div className="llb-approval-card llb-glass">
                            <span>📜</span>
                            <h3>UGC</h3>
                            <p>University recognition as stated in the institution's approvals.</p>
                        </div>

                    </div>

                </div>
            </section>

            {/* ELIGIBILITY AND ADMISSION */}
            <section className="llb-section llb-section-alt">
                <div className="llb-container">

                    <div className="llb-section-heading">
                        <span className="llb-label">ADMISSIONS</span>
                        <h2>Eligibility & Admission Process</h2>
                        <p>
                            Understand the admission requirements and steps
                            for joining the three-year LL.B program.
                        </p>
                    </div>

                    <div className="llb-admission-grid">

                        <div className="llb-info-card llb-glass">
                            <div className="llb-card-heading">
                                <span>🎓</span>
                                <h3>Eligibility Criteria</h3>
                            </div>

                            <p>
                                Candidates seeking admission to the LL.B
                                program must fulfil the following criteria:
                            </p>

                            <ul className="llb-check-list">
                                <li>
                                    Graduation in any stream from a recognized
                                    university.
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
                                Note: Eligibility is subject to the prevailing
                                regulations of CCS University and the Bar
                                Council of India.
                            </div>
                        </div>

                        <div className="llb-info-card llb-glass">
                            <div className="llb-card-heading">
                                <span>📋</span>
                                <h3>Admission Process</h3>
                            </div>

                            <div className="llb-timeline">
                                {admissionSteps.map((step, index) => (
                                    <div className="llb-timeline-item" key={index}>
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

            {/* SEAT INTAKE */}
            <section className="llb-seat-section">
                <div className="llb-container">
                    <div className="llb-seat-card">
                        <div>
                            <span className="llb-label">ADMISSION INTAKE</span>
                            <h2>Seats Intake</h2>
                            <p>
                                LSR Law Academy offers a stated intake of
                                240 seats for its three-year LL.B program,
                                subject to applicable approvals.
                            </p>
                        </div>

                        <div className="llb-seat-number">
                            <strong>240</strong>
                            <span>Seats</span>
                        </div>

                        <div className="llb-seat-duration">
                            <strong>3</strong>
                            <span>Years Program</span>
                        </div>

                        <Link href="/contact" className="llb-btn llb-btn-light">
                            Enquire Now →
                        </Link>
                    </div>
                </div>
            </section>

            {/* WHY LSR */}
            <section className="llb-section">
                <div className="llb-container">

                    <div className="llb-section-heading">
                        <span className="llb-label">THE LSR ADVANTAGE</span>
                        <h2>Why Choose LSR Law Academy?</h2>
                    </div>

                    <div className="llb-advantage-grid">

                        <div className="llb-advantage-card llb-glass">
                            <span>01</span>
                            <h3>Quality Legal Education</h3>
                            <p>
                                An academic environment focused on legal
                                principles, practical learning and professional
                                development.
                            </p>
                        </div>

                        <div className="llb-advantage-card llb-glass">
                            <span>02</span>
                            <h3>Strong Alumni Network</h3>
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
                            <h3>Accessible Education</h3>
                            <p>
                                Quality academic facilities and an educational
                                environment designed to support student growth.
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            {/* CAREER OPPORTUNITIES */}
            <section className="llb-section llb-section-alt" id="career-options">
                <div className="llb-container">

                    <div className="llb-section-heading">
                        <span className="llb-label">YOUR FUTURE IN LAW</span>
                        <h2>Career Opportunities After LL.B</h2>
                        <p>
                            An LL.B degree can open doors to opportunities
                            across legal practice, corporate organizations,
                            public services, research and other professional
                            fields.
                        </p>
                    </div>

                    <div className="llb-career-grid">
                        {careerOptions.map((career, index) => (
                            <div className="llb-career-card llb-glass" key={index}>
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

            {/* HIGHER EDUCATION */}
            <section className="llb-section">
                <div className="llb-container">

                    <div className="llb-higher-card llb-glass">
                        <div>
                            <span className="llb-label">CONTINUE YOUR JOURNEY</span>
                            <h2>Higher Education After LL.B</h2>
                            <p>
                                Students interested in advanced legal studies
                                and specialization can explore several
                                opportunities after completing their LL.B.
                            </p>
                        </div>

                        <div className="llb-higher-grid">
                            <div>
                                <span>🎓</span>
                                <h3>Master of Laws (LL.M)</h3>
                                <p>
                                    Specialize in Constitutional Law,
                                    Corporate Law, International Law,
                                    Taxation or Human Rights.
                                </p>
                            </div>

                            <div>
                                <span>📖</span>
                                <h3>Ph.D. in Law</h3>
                                <p>
                                    Pursue advanced legal research and
                                    contribute to academic knowledge.
                                </p>
                            </div>

                            <div>
                                <span>📜</span>
                                <h3>Diplomas & Certifications</h3>
                                <p>
                                    Explore Cyber Law, Taxation, Intellectual
                                    Property and other specialized areas.
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

            {/* FAQ */}
            <section className="llb-section llb-section-alt" id="faq">
                <div className="llb-container">

                    <div className="llb-section-heading">
                        <span className="llb-label">FREQUENTLY ASKED QUESTIONS</span>
                        <h2>LL.B Admission FAQs</h2>
                        <p>
                            Find answers to common questions about the LL.B
                            program at LSR Law Academy.
                        </p>
                    </div>

                    <div className="llb-faq-list">
                        {faqs.map((faq, index) => (
                            <details className="llb-faq-item llb-glass" key={index}>
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

            {/* FINAL CTA */}
            <section className="llb-final-cta">
                <div className="llb-container">
                    <div className="llb-final-card">
                        <span className="llb-label">YOUR LEGAL CAREER STARTS HERE</span>

                        <h2>
                            Join LSR Law Academy
                            <span> – The Gateway to a Prestigious Legal Career</span>
                        </h2>

                        <p>
                            Learn • Practice • Excel
                        </p>

                        <Link href="/contact" className="llb-btn llb-btn-light">
                            Apply for LL.B Admission →
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}