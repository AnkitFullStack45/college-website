import Link from "next/link";
import "./ballb.css";

export const metadata = {
    title: "BA LLB – Integrated Law Degree in Ghaziabad | LSR Law Academy",
    description:
        "BA LLB at LSR Law Academy, TEMPL Group of Institutions. Explore the five-year integrated law degree, eligibility, admission, infrastructure and career opportunities.",
};

const highlights = [
    "5-Year Integrated Degree",
    "BCI Approved",
    "CCSU Affiliated",
    "120 Seats Intake",
    "Moot Court Training",
    "Experienced Faculty",
    "Internship Opportunities",
    "Modern Infrastructure",
];

const reasons = [
    {
        title: "Dual Degree Advantage: Save One Year!",
        description:
            "By enrolling in our BA LLB integrated course, students complete two degrees – Bachelor of Arts and Bachelor of Laws – in just five years. This unique structure allows you to save a year compared to the traditional route, where students would have to complete their BA and LLB separately over six years.",
    },
    {
        title: "Best Law College in Ghaziabad & Delhi NCR",
        description:
            "LSR Law Academy is recognized as the top law college in Ghaziabad (Delhi NCR), offering a cutting-edge curriculum and modern infrastructure. Our BA LLB program is designed to give students a comprehensive understanding of the legal landscape, preparing them for a wide range of careers in law, business, governance, and beyond.",
    },
    {
        title: "Top Ranking Law College in Modinagar & Muradnagar",
        description:
            "Located strategically for students from Modinagar, Muradnagar, and neighbouring areas, LSR Law Academy is considered the top-ranking law college for aspiring lawyers. Our integrated BA LLB course combines theoretical learning with practical application, giving you the perfect foundation for a career in law.",
    },
    {
        title: "Unique Teaching and Grooming Methodology",
        description:
            "At TEMPL Group of Institutions, we take pride in our unique teaching and grooming methodology that goes beyond traditional classroom learning. Our approach integrates innovative pedagogy, practical exposure, and holistic development to equip students with the skills and mindset required for success in their careers.",
    },
    {
        title: "Expert Faculty and Industry Exposure",
        description:
            "At LSR Law Academy, we believe in providing students with the best possible exposure to the field of law. Our faculty members are renowned experts in their respective fields, many of whom have extensive experience in both academia and the legal profession.",
    },
    {
        title: "Comprehensive Curriculum & Skill Development",
        description:
            "Our BA LLB curriculum is designed to meet the needs of today's rapidly changing legal landscape. We cover a wide range of subjects, from constitutional law and contract law to international law and cyber law. Additionally, our focus on skill development ensures that our graduates stand out in the competitive legal job market.",
    },
    {
        title: "Moot Court and Practical Training",
        description:
            "As part of our hands-on learning approach, we provide students with access to moot court facilities, where they can practice their advocacy skills and engage in simulated court proceedings. Moot court participation is an essential part of the BA LLB program at LSR Law Academy.",
    },
    {
        title: "Strong Alumni Network",
        description:
            "The success of our alumni speaks volumes about the quality of education at LSR Law Academy. Our graduates have gone on to hold prestigious positions in law firms, government agencies, international organizations, and academia.",
    },
];

const facilities = [
    "Multimedia Interactive Classrooms - Tech-enabled classrooms with smart technology.",
    "Moot Court & Practical Training - Facilities to engage in simulated court proceedings.",
    "Modern Labs and Technology - Well-equipped labs supporting hands-on learning.",
    "Library with Vast Resources - A well-stocked library for academic research.",
    "Spacious Auditoriums and Seminar Halls - Venues for seminars and guest lectures.",
    "Wi-Fi Enabled Campus - Continuous internet access for research and online learning.",
    "Sports and Recreational Facilities - Gymnasium, sports complex, and recreational areas.",
];

const careers = [
    {
        title: "Legal Profession",
        description:
            "Advocate, Corporate Lawyer, Criminal Lawyer, Civil Lawyer, Legal Advisor, Public Prosecutor.",
    },
    {
        title: "Corporate Sector",
        description: "In-House Counsel, Contract Manager, IP Lawyer.",
    },
    {
        title: "Government & Public Sector",
        description:
            "Judicial Services, Civil Services, Legal Expert in Government, Tax Consultant.",
    },
    {
        title: "Litigation and Arbitration",
        description:
            "Litigation Lawyer, Arbitration Specialist, Mediator.",
    },
    {
        title: "Human Rights & Social Justice",
        description: "Human Rights Lawyer, Social Justice Advocate.",
    },
    {
        title: "Academics and Research",
        description: "Law Professor, Legal Researcher.",
    },
    {
        title: "Corporate Governance & Compliance",
        description: "Compliance Officer, Company Secretary (CS).",
    },
    {
        title: "International Law & Diplomacy",
        description: "International Lawyer, Diplomat.",
    },
    {
        title: "Alternative Careers",
        description:
            "Legal Journalism, Legal Process Outsourcing, Corporate Trainer in Legal Subjects.",
    },
];

const faqs = [
    {
        question:
            "1.What is the duration of the BA LLB course at LSR Law Academy?",
        answer:
            "The BA LLB program is a five-year integrated undergraduate law course that combines legal studies with arts subjects, providing students with a comprehensive foundation in law and social sciences.",
    },
    {
        question:
            "2.Is the BA LLB program approved by the Bar Council of India?",
        answer:
            "Yes, the BA LLB program offered by LSR Law Academy is approved by the Bar Council of India (BCI) and affiliated with CCS University, Meerut, ensuring recognized and quality legal education.",
    },
    {
        question:
            "3.Who is eligible to apply for the BA LLB course?",
        answer:
            "Students who have successfully completed their 10+2 examination from a recognized board and meet the prescribed eligibility criteria can apply for admission to the BA LLB program.",
    },
    {
        question:
            "4.What career opportunities are available after completing BA LLB?",
        answer:
            "BA LLB graduates can pursue careers as advocates, corporate lawyers, legal advisors, public prosecutors, judicial officers, compliance officers, legal consultants, and legal researchers in both public and private sectors.",
    },
    {
        question:
            "5.Does LSR Law Academy provide internship and practical training opportunities?",
        answer:
            "Yes, students are encouraged to participate in internships, moot court competitions, legal aid activities, workshops, and industry interactions to gain practical legal experience and professional exposure.",
    },
    {
        question:
            "6.Why choose LSR Law Academy for BA LLB in Ghaziabad?",
        answer:
            "LSR Law Academy offers experienced faculty, modern infrastructure, moot court facilities, career guidance, practical learning opportunities, and a student-focused academic environment, making it a preferred choice for legal education in Ghaziabad.",
    },
];

export default function BaLlbPage() {
    return (
        <main className="ballb-page">

            {/* TOP BANNER IMAGE - NO TEXT OVERLAY */}
            <section className="ballb-banner">
                <img
                    src="/images/offer's BALLB.webp"
                    alt="BA LLB at LSR Law Academy, TEMPL Group of Institutions"
                    className="ballb-banner-img"
                />
            </section>

            {/* INTRODUCTION */}
            <section className="ballb-section">
                <div className="ballb-container">

                    <div className="ballb-heading">
                        <span className="ballb-label">
                            LSR LAW ACADEMY
                        </span>

                        <h1>
                            BA LLB at LSR Law Academy - A Path to Excellence
                            in Legal Education
                        </h1>

                        <div className="ballb-title-line"></div>

                        <h2>
                            Welcome to LSR Law Academy – Your Gateway to a
                            Rewarding Legal Career!
                        </h2>
                    </div>

                    <div className="ballb-glass ballb-intro-card">
                        <p>
                            At LSR Law Academy, part of the renowned TEMPL
                            Group of Institutions, we offer an exceptional
                            BA LLB (Bachelor of Arts and Bachelor of Laws)
                            5-year integrated program designed to provide
                            a solid foundation in law. This prestigious
                            course is an ideal choice for students who have
                            completed their 12th standard and aspire to
                            become legal professionals.
                        </p>

                        <p>
                            Our BA LLB program not only provides two degrees
                            in just five years but also ensures a comprehensive
                            education in legal principles, critical thinking,
                            and professional ethics. Further, students can
                            save one year by enrolling in this program. If
                            you are looking for the best law college in
                            Ghaziabad (Delhi NCR) or the top law college in
                            Modinagar, Muradnagar,ghaziabad or Delhi, LSR Law
                            Academy stands as an undisputed leader in law
                            education, offering world-class facilities, expert
                            faculty, and a proven track record of success.
                        </p>

                        <p>
                            At LSR Law Academy, part of the renowned TEMPL
                            Group of Institutions, we offer an exceptional
                            BA LLB (Bachelor of Arts and Bachelor of Laws)
                            5-year integrated program designed to provide
                            a solid foundation in law. This prestigious
                            course is an ideal choice for students who have
                            completed their 12th standard and aspire to
                            become legal professionals.
                        </p>

                        <p>
                            Our BA LLB program not only provides two degrees
                            in just five years but also ensures a comprehensive
                            education in legal principles, critical thinking,
                            and professional ethics. Further, students can
                            save one year by enrolling in this program. If
                            you are looking for the best law college in
                            Ghaziabad (Delhi NCR) or the top law college in
                            Modinagar, Muradnagar, or Delhi, LSR Law Academy
                            stands as an undisputed leader in law education,
                            offering world-class facilities, expert faculty,
                            and a proven track record of success.
                        </p>
                    </div>

                    <div className="ballb-highlight-grid">
                        {highlights.map((item, index) => (
                            <div className="ballb-glass ballb-highlight" key={index}>
                                <span>{String(index + 1).padStart(2, "0")}</span>
                                <h3>{item}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* EVERYTHING ABOUT BA LLB */}
            <section className="ballb-section ballb-section-alt">
                <div className="ballb-container">

                    <div className="ballb-heading">
                        <span className="ballb-label">PROGRAM OVERVIEW</span>
                        <h2>Everything You Need to Know About BA LLB</h2>
                        <div className="ballb-title-line"></div>
                    </div>

                    <div className="ballb-info-grid">
                        <article className="ballb-glass ballb-info-card">
                            <span className="ballb-card-number">01</span>
                            <h3>What is BA LLB?</h3>
                            <p>
                                BA LLB (Bachelor of Arts and Bachelor of Laws)
                                is a five-year integrated undergraduate degree
                                program that combines legal education with
                                humanities and social science subjects. The
                                course provides students with a strong
                                foundation in law while developing analytical,
                                communication, and critical thinking skills
                                required for a successful legal career.
                            </p>
                        </article>

                        <article className="ballb-glass ballb-info-card">
                            <span className="ballb-card-number">02</span>
                            <h3>Career Growth and Opportunities with a BA LLB Degree?</h3>
                            <p>
                                The scope of BA LLB in India is continuously
                                growing due to increasing demand for legal
                                professionals in courts, corporations,
                                government departments, compliance sectors,
                                and international organizations. Graduates
                                can pursue careers in litigation, judiciary,
                                legal consultancy, corporate law, arbitration,
                                legal research, and public administration.
                            </p>
                        </article>

                        <article className="ballb-glass ballb-info-card">
                            <span className="ballb-card-number">03</span>
                            <h3>Is BA LLB a Good Career Option?</h3>
                            <p>
                                Yes, BA LLB is considered one of the most
                                rewarding professional degree programs. It
                                opens doors to diverse career opportunities
                                in legal practice, corporate governance,
                                public service, academia, and entrepreneurship.
                                The degree also provides a strong foundation
                                for higher studies such as LLM, judicial
                                services preparation, and civil services
                                examinations.
                            </p>
                        </article>

                        <article className="ballb-glass ballb-info-card">
                            <span className="ballb-card-number">04</span>
                            <h3>What Jobs Can You Get After BA LLB?</h3>
                            <p>
                                BA LLB graduates can work as Advocates,
                                Corporate Lawyers, Legal Advisors, Public
                                Prosecutors, Judicial Officers, Compliance
                                Officers, Legal Analysts, Arbitration
                                Specialists, Human Rights Advocates,
                                Intellectual Property Consultants, Legal
                                Researchers, and Law Professors. Many
                                graduates also pursue careers in civil
                                services, judiciary, and corporate management.
                            </p>
                        </article>

                        <article className="ballb-glass ballb-info-card ballb-info-wide">
                            <span className="ballb-card-number">05</span>
                            <h3>Why Study BA LLB at LSR Law Academy, Ghaziabad?</h3>
                            <p>
                                LSR Law Academy, under the aegis of{" "}
                                <Link
                                    href="https://www.templgroup.in/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    TEMPL Group of Institutions
                                </Link>
                                , offers a Bar Council of India approved BA
                                LLB program with experienced faculty, modern
                                infrastructure, moot court training, legal
                                workshops, seminars, internships, and
                                industry-oriented learning. Students benefit
                                from practical exposure and career guidance
                                that help them succeed in the legal profession.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE */}
            <section className="ballb-section">
                <div className="ballb-container">

                    <div className="ballb-heading">
                        <span className="ballb-label">WHY LSR LAW ACADEMY</span>
                        <h2>Why Choose BA LLB at LSR Law Academy?</h2>
                        <div className="ballb-title-line"></div>
                    </div>

                    <div className="ballb-reasons-grid">
                        {reasons.map((item, index) => (
                            <article className="ballb-glass ballb-reason-card" key={index}>
                                <span className="ballb-card-number">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* AFFILIATIONS */}
            <section className="ballb-section ballb-section-alt">
                <div className="ballb-container">
                    <div className="ballb-heading">
                        <span className="ballb-label">RECOGNITION</span>
                        <h2>Affiliations</h2>
                        <div className="ballb-title-line"></div>
                    </div>

                    <div className="ballb-glass ballb-affiliation-card">
                        <p>
                            LSR Law Academy, under the aegis of{" "}
                            <Link
                                href="https://www.templgroup.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                TEMPL Group of Institutions
                            </Link>
                            , is affiliated with Chaudhary Charan Singh
                            University (CCSU), Meerut, and approved by the
                            Bar Council of India (BCI) and the University
                            Grants Commission (UGC). The academy is committed
                            to delivering high-quality legal education
                            through experienced faculty, modern infrastructure,
                            well-equipped moot court facilities, a comprehensive
                            law library, and a student-focused learning
                            environment. All academic and infrastructural
                            facilities are developed in accordance with the
                            standards prescribed by regulatory authorities,
                            making LSR Law Academy a preferred destination
                            for students seeking a BA LLB degree from a
                            reputed law college in Ghaziabad and Delhi NCR.
                        </p>
                    </div>
                </div>
            </section>

            {/* ELIGIBILITY AND ADMISSION */}
            <section className="ballb-section">
                <div className="ballb-container">

                    <div className="ballb-heading">
                        <span className="ballb-label">ADMISSIONS</span>
                        <h2>Eligibility</h2>
                        <div className="ballb-title-line"></div>
                    </div>

                    <div className="ballb-glass ballb-eligibility-card">
                        <ul>
                            <li>
                                10+2 in any stream with Min. 40% marks in 12th
                                Standard for SC/ST candidates
                            </li>
                            <li>
                                Min. 42% marks in 12th Standard for BC candidates
                            </li>
                            <li>
                                Min. 45% marks in 12th Standard for GEN candidates
                            </li>
                        </ul>
                    </div>

                    <div className="ballb-heading ballb-subheading">
                        <h2>Admission Process</h2>
                        <div className="ballb-title-line"></div>
                    </div>

                    <p className="ballb-center-text">
                        The admission process for the BA LLB program is
                        designed to be simple and transparent:
                    </p>

                    <div className="ballb-admission-grid">
                        <article className="ballb-glass ballb-admission-card">
                            <span>01</span>
                            <h3>Online Application</h3>
                            <p>
                                Fill out the online application form available
                                on our website.
                            </p>
                        </article>

                        <article className="ballb-glass ballb-admission-card">
                            <span>02</span>
                            <h3>Merit-Based Admission</h3>
                            <p>
                                Admission is based on the 12th standard or
                                equivalent exams.
                            </p>
                        </article>

                        <article className="ballb-glass ballb-admission-card">
                            <span>03</span>
                            <h3>Counselling and Document Verification</h3>
                            <p>
                                Shortlisted candidates will be called for
                                counselling sessions.
                            </p>
                        </article>

                        <article className="ballb-glass ballb-admission-card">
                            <span>04</span>
                            <h3>Fee Payment</h3>
                            <p>
                                Students can proceed with fee payment once admitted.
                            </p>
                        </article>
                    </div>

                    <div className="ballb-glass ballb-seat-card">
                        <div>
                            <span>Total Seats Intake:</span>
                            <strong>120</strong>
                            <span>Seats</span>
                        </div>

                        <p>
                            Admissions are on a first-come, first-served
                            basis, subject to merit.
                        </p>
                    </div>

                    <div className="ballb-glass ballb-visit-card">
                        <p>
                            For detailed information about admissions,
                            courses, and campus facilities, visit{" "}
                            <Link
                                href="https://www.templgroup.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                TEMPL Group of Institutions
                            </Link>{" "}
                            or explore legal education programs at{" "}
                            <Link
                                href="https://www.templgroup.in/Lsrlawacademy"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LSR Law Academy
                            </Link>.
                        </p>
                    </div>
                </div>
            </section>

            {/* INFRASTRUCTURE */}
            <section className="ballb-section ballb-section-alt">
                <div className="ballb-container">

                    <div className="ballb-heading">
                        <span className="ballb-label">CAMPUS FACILITIES</span>
                        <h2>
                            State-of-the-Art Infrastructure at TEMPL Group
                            of Institutions
                        </h2>
                        <div className="ballb-title-line"></div>
                    </div>

                    <p className="ballb-center-text">
                        Our modern, dynamic learning environment is crucial
                        to shaping the leaders of tomorrow.
                    </p>

                    <div className="ballb-facility-grid">
                        {facilities.map((facility, index) => {
                            const [title, description] = facility.split(" - ");

                            return (
                                <article className="ballb-glass ballb-facility-card" key={index}>
                                    <span>{String(index + 1).padStart(2, "0")}</span>
                                    <h3>{title}</h3>
                                    <p>{description}</p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CAREER OPPORTUNITIES */}
            <section className="ballb-section">
                <div className="ballb-container">

                    <div className="ballb-heading">
                        <span className="ballb-label">CAREER PATHS</span>
                        <h2>Career Opportunities After BA LLB</h2>
                        <div className="ballb-title-line"></div>
                    </div>

                    <p className="ballb-center-text">
                        After completing a BA LLB, you can pursue various
                        career paths in law, business, governance, and more.
                        Some of the career opportunities include:
                    </p>

                    <div className="ballb-career-grid">
                        {careers.map((career, index) => (
                            <article className="ballb-glass ballb-career-card" key={index}>
                                <span>{String(index + 1).padStart(2, "0")}</span>
                                <h3>{career.title}</h3>
                                <p>{career.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="ballb-section ballb-section-alt">
                <div className="ballb-container">

                    <div className="ballb-heading">
                        <span className="ballb-label">HAVE QUESTIONS?</span>
                        <h2>Frequently Asked Questions (FAQs)</h2>
                        <div className="ballb-title-line"></div>
                    </div>

                    <div className="ballb-faq-list">
                        {faqs.map((faq, index) => (
                            <details className="ballb-glass ballb-faq" key={index}>
                                <summary>
                                    <span>{faq.question}</span>
                                    <span className="ballb-faq-icon">+</span>
                                </summary>

                                <div className="ballb-faq-answer">
                                    <p>{faq.answer}</p>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="ballb-cta-section">
                <div className="ballb-container">
                    <div className="ballb-glass ballb-cta-card">
                        <div>
                            <span className="ballb-label">
                                LSR LAW ACADEMY
                            </span>
                            <h2>
                                Start Your Journey in Legal Education
                            </h2>
                        </div>

                        <Link
                            href="https://www.templgroup.in/Lsrlawacademy"
                            className="ballb-cta-button"
                        >
                            Explore LSR Law Academy <span>→</span>
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}