import Link from "next/link";
import "./lsr-law-academy.css";

export const metadata = {
    title: "LSR Law Academy | Best Law College in Ghaziabad",
    description:
        "Explore LSR Law Academy in Ghaziabad, offering 3-year LL.B. and 5-year BA LL.B. programs with BCI approval, practical legal training, moot courts and internships.",
    alternates: {
        canonical: "https://www.templgroup.in/Colleges/lsr-law-academy",
    },
    openGraph: {
        title: "LSR Law Academy | Best Law College in Ghaziabad",
        description:
            "Build your legal career with academic excellence, practical training and professional guidance at LSR Law Academy.",
        images: ["/image/lsr-law-academy.webp"],
    },
};

const advantages = [
    {
        number: "01",
        title: "Academic Excellence",
        description:
            "A balanced curriculum combining legal theory with practical learning through internships, court visits, moot courts and legal aid activities.",
    },
    {
        number: "02",
        title: "Experienced Faculty",
        description:
            "Learn from qualified professors, legal practitioners and industry experts committed to academic excellence and professional ethics.",
    },
    {
        number: "03",
        title: "Career Opportunities",
        description:
            "Gain exposure to law firms, courts, government organizations and corporate legal departments through professional interactions and placement assistance.",
    },
    {
        number: "04",
        title: "BCI Approved Programs",
        description:
            "Study law programs approved by the Bar Council of India, supporting the professional pathway towards legal practice and the AIBE.",
    },
    {
        number: "05",
        title: "Holistic Development",
        description:
            "Participate in debates, moot court competitions, seminars, workshops and leadership activities to strengthen professional skills.",
    },
    {
        number: "06",
        title: "Modern Infrastructure",
        description:
            "Learn in an academic environment supported by smart classrooms, digital learning resources, moot courtrooms and seminar facilities.",
    },
    {
        number: "07",
        title: "Research-Oriented Learning",
        description:
            "Develop analytical and problem-solving abilities through legal research, case studies, policy analysis and academic discussions.",
    },
    {
        number: "08",
        title: "Ethics & Professional Values",
        description:
            "Build a strong foundation in legal ethics, professional responsibility, integrity and social commitment.",
    },
];

const locationAdvantages = [
    {
        number: "01",
        title: "Prime Campus Location",
        description:
            "Situated on NH-58 Abupur Road, Muradnagar, Ghaziabad, providing convenient access to the campus.",
    },
    {
        number: "02",
        title: "Excellent Connectivity",
        description:
            "Accessible from Ghaziabad, Delhi, Noida, Greater Noida, Meerut, Modinagar and Hapur.",
    },
    {
        number: "03",
        title: "Public Transport Access",
        description:
            "Connected through highways, local transport, bus services and nearby railway facilities.",
    },
    {
        number: "04",
        title: "Safe Campus Environment",
        description:
            "A peaceful and student-friendly academic environment that supports focused learning.",
    },
    {
        number: "05",
        title: "Practical Legal Exposure",
        description:
            "Access to courts, legal institutions, government offices and professional organizations for legal exposure.",
    },
    {
        number: "06",
        title: "Namo Bharat Connectivity",
        description:
            "Convenient access through the Delhi–Meerut Namo Bharat Rapid Rail corridor for students across the region.",
    },
];

const campusActivities = [
    {
        number: "01",
        title: "Moot Court Competitions",
        description:
            "Develop courtroom confidence, legal arguments, research abilities and advocacy skills through simulated court proceedings.",
    },
    {
        number: "02",
        title: "Debates & Discussions",
        description:
            "Strengthen communication, logical reasoning and the ability to present legal arguments effectively.",
    },
    {
        number: "03",
        title: "Legal Awareness Programs",
        description:
            "Understand important legal rights, responsibilities and social issues through awareness activities.",
    },
    {
        number: "04",
        title: "Seminars & Workshops",
        description:
            "Learn about contemporary legal developments through academic seminars, workshops and expert sessions.",
    },
    {
        number: "05",
        title: "Guest Lectures",
        description:
            "Interact with legal professionals and experts to gain insights into different areas of legal practice.",
    },
    {
        number: "06",
        title: "Sports & Cultural Activities",
        description:
            "Participate in extracurricular activities that encourage teamwork, leadership and personal development.",
    },
];

const careerOptions = [
    "Advocate & Legal Practitioner",
    "Corporate Legal Advisor",
    "Judicial Services",
    "Legal Consultant",
    "Legal Researcher",
    "Compliance Professional",
    "Cyber Law Professional",
    "Public Policy Professional",
    "Intellectual Property Law",
    "Legal Academia",
];

const faqs = [
    {
        question: "What law courses are offered at LSR Law Academy?",
        answer:
            "LSR Law Academy offers a 3-Year LL.B. program and a 5-Year Integrated BA LL.B. program. Both programs are designed to develop legal knowledge, practical exposure and professional skills.",
    },
    {
        question: "Is LSR Law Academy approved by the Bar Council of India?",
        answer:
            "Yes. According to the information provided, LSR Law Academy's law programs are approved by the Bar Council of India (BCI) and affiliated with Chaudhary Charan Singh University (CCSU), Meerut.",
    },
    {
        question: "What is the duration of LL.B. and BA LL.B. courses?",
        answer:
            "The LL.B. program is a 3-year degree for graduates, while the BA LL.B. is a 5-year integrated program for students after Class 12.",
    },
    {
        question: "Does LSR Law Academy provide internship opportunities?",
        answer:
            "Yes. Students gain practical legal exposure through internships with law firms, courts, corporate legal departments, legal consultancies and government organizations.",
    },
    {
        question: "Why choose LSR Law Academy in Ghaziabad?",
        answer:
            "LSR Law Academy combines academic learning, experienced faculty, moot courts, internships, legal aid activities, modern infrastructure and practical legal training.",
    },
    {
        question: "What career opportunities are available after completing a law degree?",
        answer:
            "Graduates can explore careers in legal practice, corporate law, judicial services, cyber law, compliance, public policy, intellectual property law, legal research and academia.",
    },
    {
        question: "Does LSR Law Academy organize moot court competitions?",
        answer:
            "Yes. Students participate in moot court competitions, seminars, debates, legal workshops, guest lectures and legal awareness programs to develop advocacy and research skills.",
    },
    {
        question: "How can I apply for admission to LSR Law Academy?",
        answer:
            "Interested candidates can follow the official admission process or contact the admission office for information about eligibility, required documents, fees and admission procedures.",
    },
];

function SectionHeading({ eyebrow, title, description, centered = false }) {
    return (
        <div className={`lsr-section-heading ${centered ? "lsr-heading-center" : ""}`}>
            <span className="lsr-eyebrow">{eyebrow}</span>
            <h2>{title}</h2>
            {description && <p>{description}</p>}
        </div>
    );
}

export default function LSRLawAcademyPage() {
    return (
        <main className="lsr-page">

            {/* HERO SECTION */}
            <section className="lsr-hero">

                <div className="lsr-hero-decoration lsr-decoration-one"></div>
                <div className="lsr-hero-decoration lsr-decoration-two"></div>

                <div className="lsr-container lsr-hero-content">

                    <span className="lsr-hero-label">
                        TEMPL GROUP OF INSTITUTIONS
                    </span>

                    <span className="lsr-hero-small-title">
                        REDEFINING LEGAL EDUCATION
                    </span>

                    <h1>
                        LSR Law Academy
                        <span>Shaping Tomorrow's Legal Professionals</span>
                    </h1>

                    <p>
                        Building legal knowledge, strengthening advocacy
                        skills and developing responsible legal professionals
                        through academic excellence and practical exposure.
                    </p>

                    <div className="lsr-hero-buttons">
                        <a href="#programs" className="lsr-btn lsr-btn-orange">
                            Explore Law Programs <span>→</span>
                        </a>

                        <a href="#admissions" className="lsr-btn lsr-btn-outline">
                            Admission Enquiry
                        </a>
                    </div>

                    <div className="lsr-hero-features">
                        <span>Established in 2018</span>
                        <span>BCI Approved</span>
                        <span>CCSU Affiliated</span>
                    </div>

                </div>
            </section>


            {/* INTRODUCTION */}
            <section className="lsr-intro lsr-section">
                <div className="lsr-container lsr-intro-grid">

                    <div className="lsr-intro-content">
                        <span className="lsr-eyebrow">
                            ABOUT LSR LAW ACADEMY
                        </span>

                        <h2>
                            Redefining the Future of
                            <span> Legal Education</span>
                        </h2>

                        <p>
                            Welcome to LSR Law Academy, a premier institution
                            under the TEMPL Group of Institutions, dedicated
                            to shaping the next generation of legal
                            professionals.
                        </p>

                        <p>
                            Established in 2018, LSR Law Academy focuses on
                            academic excellence, ethical values and
                            professional integrity. Our approach combines
                            theoretical legal knowledge with practical
                            experiences to prepare students for the evolving
                            legal environment.
                        </p>

                        <p>
                            Approved by the Bar Council of India (BCI) and
                            affiliated with Chaudhary Charan Singh University
                            (CCSU), Meerut, the academy aims to develop
                            confident, skilled and responsible legal
                            professionals.
                        </p>

                        <div className="lsr-intro-links">
                            <a
                                href="https://lsrlawacademy.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="lsr-text-link"
                            >
                                Visit Official LSR Website <span>→</span>
                            </a>

                            <a
                                href="https://www.templgroup.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="lsr-text-link"
                            >
                                TEMPL Group <span>→</span>
                            </a>
                        </div>
                    </div>

                    <div className="lsr-intro-highlight">

                        <div className="lsr-highlight-top">
                            <span className="lsr-highlight-icon">LSR</span>
                            <span>LEGAL EDUCATION & PROFESSIONAL DEVELOPMENT</span>
                        </div>

                        <h3>
                            Knowledge.
                            <span> Justice.</span>
                            <br />
                            Integrity.
                        </h3>

                        <p>
                            Developing legal professionals with strong
                            academic foundations, practical skills and
                            ethical values.
                        </p>

                        <div className="lsr-highlight-bottom">
                            <div>
                                <strong>2018</strong>
                                <span>Established</span>
                            </div>

                            <div>
                                <strong>BCI</strong>
                                <span>Approved</span>
                            </div>

                            <div>
                                <strong>CCSU</strong>
                                <span>Affiliated</span>
                            </div>
                        </div>

                    </div>

                </div>
            </section>


            {/* WHY CHOOSE LSR */}
            <section className="lsr-advantages lsr-section">
                <div className="lsr-container">

                    <SectionHeading
                        eyebrow="THE LSR ADVANTAGE"
                        title="Why Choose LSR Law Academy?"
                        description="A comprehensive legal learning environment focused on academic knowledge, practical training, professional ethics and career development."
                        centered
                    />

                    <div className="lsr-advantages-grid">
                        {advantages.map((item) => (
                            <article className="lsr-advantage-card" key={item.number}>

                                <div className="lsr-advantage-number">
                                    {item.number}
                                </div>

                                <h3>{item.title}</h3>

                                <p>{item.description}</p>

                            </article>
                        ))}
                    </div>

                </div>
            </section>


            {/* LOCATION */}
            <section className="lsr-location lsr-section" id="location">
                <div className="lsr-container">

                    <div className="lsr-location-header">
                        <div>
                            <span className="lsr-eyebrow">
                                CONNECTIVITY & ACCESSIBILITY
                            </span>

                            <h2>
                                Prime Location of LSR Law Academy
                                <span> in Ghaziabad</span>
                            </h2>
                        </div>

                        <p>
                            A strategically located campus with convenient
                            connectivity and access to educational and
                            professional opportunities across Delhi NCR
                            and Western Uttar Pradesh.
                        </p>
                    </div>

                    <div className="lsr-location-info">

                        <div className="lsr-location-address">
                            <span className="lsr-location-icon">⌖</span>

                            <div>
                                <span className="lsr-address-label">
                                    CAMPUS ADDRESS
                                </span>

                                <h3>Knowledge and Innovation Campus</h3>

                                <p>
                                    NH-58, Abupur Road, Muradnagar,
                                    Ghaziabad, Uttar Pradesh, India.
                                </p>
                            </div>
                        </div>

                        <div className="lsr-location-connectivity">
                            <span>Ghaziabad</span>
                            <span>Delhi NCR</span>
                            <span>Noida</span>
                            <span>Meerut</span>
                            <span>Modinagar</span>
                            <span>Hapur</span>
                        </div>

                    </div>

                    <div className="lsr-location-grid">
                        {locationAdvantages.map((item) => (
                            <article className="lsr-location-card" key={item.number}>
                                <span>{item.number}</span>

                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>

                </div>
            </section>


            {/* LOCATION BENEFIT */}
            <section className="lsr-location-benefit lsr-section">
                <div className="lsr-container lsr-location-benefit-grid">

                    <div>
                        <span className="lsr-eyebrow">
                            A CONNECTED ACADEMIC ENVIRONMENT
                        </span>

                        <h2>
                            An Ideal Destination for
                            <span> Legal Education</span>
                        </h2>
                    </div>

                    <div>
                        <p>
                            With its strategic location, modern infrastructure,
                            transportation connectivity and proximity to
                            professional institutions, LSR Law Academy
                            provides an environment for students to pursue
                            legal education while staying connected to
                            opportunities across Ghaziabad, Delhi NCR
                            and Uttar Pradesh.
                        </p>

                        <a
                            href="https://lsrlawacademy.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="lsr-text-link"
                        >
                            Explore LSR Law Academy <span>→</span>
                        </a>
                    </div>

                </div>
            </section>


            {/* CAMPUS LIFE */}
            <section className="lsr-campus lsr-section">
                <div className="lsr-container">

                    <SectionHeading
                        eyebrow="LIFE BEYOND CLASSROOMS"
                        title="Campus Life at LSR Law Academy"
                        description="An engaging campus environment that encourages academic excellence, leadership, teamwork and holistic student development."
                        centered
                    />

                    <div className="lsr-campus-intro">
                        <p>
                            At LSR Law Academy, legal education extends beyond
                            the classroom. Students are encouraged to
                            participate in sports, cultural events, legal
                            workshops, seminars, guest lectures and
                            extracurricular activities that contribute to
                            personal and professional growth.
                        </p>

                        <p>
                            Moot court competitions, debate sessions, legal
                            awareness programs and industry interactions
                            help strengthen advocacy, communication,
                            analytical thinking and courtroom skills.
                        </p>
                    </div>

                    <div className="lsr-campus-grid">
                        {campusActivities.map((item) => (
                            <article className="lsr-campus-card" key={item.number}>
                                <span className="lsr-campus-number">
                                    {item.number}
                                </span>

                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </article>
                        ))}
                    </div>

                    <div className="lsr-campus-footer">
                        <p>
                            A vibrant student environment where future legal
                            professionals build friendships, gain practical
                            experience and develop confidence for their
                            professional journeys.
                        </p>
                    </div>

                </div>
            </section>


            {/* LAW PROGRAMS */}
            <section className="lsr-programs lsr-section" id="programs">
                <div className="lsr-container">

                    <SectionHeading
                        eyebrow="BUILD YOUR LEGAL CAREER"
                        title="Our Law Programs"
                        description="Choose a law program that aligns with your academic background and professional aspirations."
                        centered
                    />

                    <div className="lsr-program-grid">

                        <article className="lsr-program-card">
                            <div className="lsr-program-top">
                                <span className="lsr-program-tag">
                                    UNDERGRADUATE LAW PROGRAM
                                </span>

                                <span className="lsr-program-number">01</span>
                            </div>

                            <h3>3-Year LL.B.</h3>

                            <div className="lsr-program-duration">
                                <span>Duration</span>
                                <strong>3 Years</strong>
                            </div>

                            <p>
                                A professional law degree designed for
                                graduates seeking to develop legal knowledge,
                                analytical abilities, advocacy skills and
                                professional understanding.
                            </p>

                            <a
                                href="https://lsrlawacademy.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="lsr-card-link"
                            >
                                Know More <span>→</span>
                            </a>
                        </article>


                        <article className="lsr-program-card lsr-program-featured">
                            <div className="lsr-program-top">
                                <span className="lsr-program-tag">
                                    INTEGRATED LAW PROGRAM
                                </span>

                                <span className="lsr-program-number">02</span>
                            </div>

                            <h3>5-Year Integrated BA LL.B.</h3>

                            <div className="lsr-program-duration">
                                <span>Duration</span>
                                <strong>5 Years</strong>
                            </div>

                            <p>
                                An integrated program for students after
                                Class 12, combining humanities education
                                with comprehensive legal studies and
                                professional development.
                            </p>

                            <a
                                href="https://lsrlawacademy.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="lsr-card-link"
                            >
                                Know More <span>→</span>
                            </a>
                        </article>

                    </div>

                </div>
            </section>


            {/* CAREER OPPORTUNITIES */}
            <section className="lsr-careers lsr-section">
                <div className="lsr-container lsr-careers-grid">

                    <div className="lsr-careers-content">
                        <span className="lsr-eyebrow">
                            EXPLORE YOUR POSSIBILITIES
                        </span>

                        <h2>
                            Build a Career in the
                            <span> Legal Profession</span>
                        </h2>

                        <p>
                            Legal education opens pathways across different
                            professional fields. With strong legal knowledge,
                            practical exposure and professional skills,
                            graduates can explore a range of career
                            opportunities.
                        </p>
                    </div>

                    <div className="lsr-career-list">
                        {careerOptions.map((career, index) => (
                            <div className="lsr-career-item" key={career}>
                                <span>
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <strong>{career}</strong>

                                <span className="lsr-career-arrow">→</span>
                            </div>
                        ))}
                    </div>

                </div>
            </section>


            {/* JOIN LSR */}
            <section className="lsr-join lsr-section">
                <div className="lsr-container">

                    <div className="lsr-join-box">

                        <span className="lsr-eyebrow">
                            YOUR LEGAL JOURNEY BEGINS HERE
                        </span>

                        <h2>
                            Join LSR Law Academy
                            <span> Your Pathway to Legal Excellence</span>
                        </h2>

                        <p>
                            Begin your journey toward a successful legal
                            career with quality education, practical
                            training and professional guidance.
                        </p>

                        <p>
                            Whether you aspire to become an advocate,
                            corporate legal advisor, judicial officer,
                            legal consultant or policy expert, LSR Law
                            Academy aims to help you develop the knowledge,
                            research abilities, advocacy skills and
                            professional confidence needed to pursue
                            your ambitions.
                        </p>

                        <a href="#admissions" className="lsr-btn lsr-btn-orange">
                            Start Your Legal Journey <span>→</span>
                        </a>

                    </div>

                </div>
            </section>


            {/* FAQ */}
            <section className="lsr-faq lsr-section">
                <div className="lsr-container lsr-faq-grid">

                    <div className="lsr-faq-intro">
                        <span className="lsr-eyebrow">
                            HAVE QUESTIONS?
                        </span>

                        <h2>
                            Frequently Asked
                            <span> Questions</span>
                        </h2>

                        <p>
                            Find answers to common questions about law
                            courses, admissions, internships, practical
                            training and student life at LSR Law Academy.
                        </p>

                        <a href="#admissions" className="lsr-text-link">
                            Admission Enquiry <span>→</span>
                        </a>
                    </div>

                    <div className="lsr-faq-list">
                        {faqs.map((faq, index) => (
                            <details className="lsr-faq-item" key={index}>
                                <summary>
                                    <span>{faq.question}</span>
                                    <span className="lsr-faq-icon">+</span>
                                </summary>

                                <p>{faq.answer}</p>
                            </details>
                        ))}
                    </div>

                </div>
            </section>


            {/* ADMISSION CTA */}
            <section className="lsr-admission lsr-section" id="admissions">
                <div className="lsr-container">

                    <div className="lsr-admission-box">

                        <div className="lsr-admission-content">
                            <span className="lsr-eyebrow">
                                ADMISSIONS & ENQUIRIES
                            </span>

                            <h2>
                                Take the First Step Towards
                                <span> Your Legal Career</span>
                            </h2>

                            <p>
                                Interested in pursuing LL.B. or BA LL.B.?
                                Connect with LSR Law Academy to learn more
                                about the admission process, eligibility,
                                required documents, fees and academic
                                opportunities.
                            </p>

                            <div className="lsr-admission-benefits">
                                <span>✓ Admission Guidance</span>
                                <span>✓ Course Information</span>
                                <span>✓ Eligibility Details</span>
                                <span>✓ Fee Structure Information</span>
                                <span>✓ Career Guidance</span>
                                <span>✓ Internship Information</span>
                            </div>

                            <p className="lsr-admission-note">
                                Start building your future with legal
                                knowledge, practical experience and
                                professional guidance.
                            </p>
                        </div>

                        <div className="lsr-admission-card">

                            <span className="lsr-admission-card-label">
                                EXPLORE YOUR FUTURE
                            </span>

                            <h3>
                                Your Journey Towards Legal Excellence Starts Here
                            </h3>

                            <p>
                                Connect with the admission team and explore
                                opportunities at LSR Law Academy.
                            </p>

                            <a
                                href="https://lsrlawacademy.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="lsr-btn lsr-btn-orange lsr-admission-btn"
                            >
                                Visit Official Website <span>→</span>
                            </a>

                            <div className="lsr-admission-programs">
                                <span>3-Year LL.B.</span>
                                <span>5-Year BA LL.B.</span>
                            </div>

                        </div>

                    </div>

                </div>
            </section>

        </main>
    );
}