import Image from "next/image";
import Link from "next/link";
import "./ballb.css";

const BASE_URL = "https://www.templgroup.in";
const PAGE_URL = `${BASE_URL}/courses/ug-courses/ballb`;

export const metadata = {
    title: "Best BA LLB College in Ghaziabad | Admission 2026 | LSR Law Academy",
    description:
        "Apply for BA LLB (5-year integrated law degree) admission 2026 at LSR Law Academy, TEMPL Group, Ghaziabad. BCI approved, CCSU affiliated, with moot court training and internships.",
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        title: "Best BA LLB College in Ghaziabad | BA LLB Admission 2026",
        description:
            "5-year integrated BA LLB at LSR Law Academy, TEMPL Group: BCI approved, CCSU affiliated, with moot court, internships and career guidance.",
        url: PAGE_URL,
        siteName: "TEMPL Group of Institutions",
        type: "website",
        locale: "en_IN",
    },
};

const introParagraphs = [
    "At LSR Law Academy, part of TEMPL Group of Institutions, we offer a BA LLB (Bachelor of Arts and Bachelor of Laws) 5-year integrated programme designed to provide a solid foundation in law. This course is an ideal choice for students who have completed Class 12 and aspire to become legal professionals.",
    "Our BA LLB programme provides two degrees in just five years and ensures a comprehensive education in legal principles, critical thinking and professional ethics. Students save one year compared with completing a BA and an LLB separately. If you are looking for a BCI-approved law college in Ghaziabad (Delhi NCR), including students from Modinagar and Muradnagar, LSR Law Academy offers modern facilities, experienced faculty and practical training.",
];

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

const overview = [
    {
        title: "What is BA LLB?",
        description:
            "BA LLB (Bachelor of Arts and Bachelor of Laws) is a five-year integrated undergraduate degree programme that combines legal education with humanities and social science subjects. The course provides students with a strong foundation in law while developing the analytical, communication and critical thinking skills required for a successful legal career.",
    },
    {
        title: "Career Growth and Opportunities with a BA LLB Degree",
        description:
            "The scope of BA LLB in India continues to grow due to increasing demand for legal professionals in courts, corporations, government departments, compliance sectors and international organisations. Graduates can pursue careers in litigation, judiciary, legal consultancy, corporate law, arbitration, legal research and public administration.",
    },
    {
        title: "Is BA LLB a Good Career Option?",
        description:
            "Yes. BA LLB is one of the most rewarding professional degree programmes. It opens doors to diverse careers in legal practice, corporate governance, public service, academia and entrepreneurship. The degree also provides a strong foundation for higher studies such as LLM, judicial services preparation and civil services examinations.",
    },
    {
        title: "What Jobs Can You Get After BA LLB?",
        description:
            "BA LLB graduates can work as Advocates, Corporate Lawyers, Legal Advisors, Public Prosecutors, Judicial Officers, Compliance Officers, Legal Analysts, Arbitration Specialists, Human Rights Advocates, Intellectual Property Consultants, Legal Researchers and Law Professors. Many graduates also pursue careers in civil services, the judiciary and corporate management.",
    },
];

const reasons = [
    {
        title: "Dual Degree Advantage: Save One Year",
        description:
            "By enrolling in our integrated BA LLB course, students complete two degrees, Bachelor of Arts and Bachelor of Laws, in five years. This saves a year compared with the traditional route, where a BA and an LLB completed separately take six years.",
    },
    {
        title: "Law College in Ghaziabad & Delhi NCR",
        description:
            "LSR Law Academy offers a modern curriculum and infrastructure in Delhi NCR. Our BA LLB programme is designed to give students a comprehensive understanding of the legal landscape, preparing them for careers in law, business, governance and beyond.",
    },
    {
        title: "Convenient for Students from Modinagar & Muradnagar",
        description:
            "Located on NH-58 in Muradnagar, LSR Law Academy is easily accessible for students from Modinagar, Muradnagar and neighbouring areas. Our integrated BA LLB course combines theoretical learning with practical application, giving you a strong foundation for a career in law.",
    },
    {
        title: "Unique Teaching and Grooming Methodology",
        description:
            "At TEMPL Group of Institutions, our teaching and grooming methodology goes beyond traditional classroom learning. Our approach combines innovative teaching, practical exposure and holistic development to equip students with the skills and mindset required for success in their careers.",
    },
    {
        title: "Expert Faculty and Industry Exposure",
        description:
            "At LSR Law Academy, we believe in giving students the best possible exposure to the field of law. Our faculty members bring experience from both academia and the legal profession.",
    },
    {
        title: "Comprehensive Curriculum & Skill Development",
        description:
            "Our BA LLB curriculum is designed for today's changing legal landscape. We cover a wide range of subjects, from constitutional law and contract law to international law and cyber law. Our focus on skill development helps graduates stand out in the competitive legal job market.",
    },
    {
        title: "Moot Court and Practical Training",
        description:
            "As part of our hands-on learning approach, students have access to moot court facilities where they can practise their advocacy skills and take part in simulated court proceedings. Moot court participation is an essential part of the BA LLB programme at LSR Law Academy.",
    },
    {
        title: "Alumni Network",
        description:
            "Our graduates go on to work in law firms, courts, government departments and academia. Our alumni network supports current students with guidance and professional connections.",
    },
];

const facilities = [
    {
        title: "Multimedia Interactive Classrooms",
        description: "Tech-enabled classrooms with smart technology.",
    },
    {
        title: "Moot Court & Practical Training",
        description: "Facilities to engage in simulated court proceedings.",
    },
    {
        title: "Modern Labs and Technology",
        description: "Well-equipped labs supporting hands-on learning.",
    },
    {
        title: "Library with Vast Resources",
        description: "A well-stocked library for academic research.",
    },
    {
        title: "Spacious Auditoriums and Seminar Halls",
        description: "Venues for seminars and guest lectures.",
    },
    {
        title: "Wi-Fi Enabled Campus",
        description: "Continuous internet access for research and online learning.",
    },
    {
        title: "Sports and Recreational Facilities",
        description: "Gymnasium, sports complex and recreational areas.",
    },
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
        description: "Litigation Lawyer, Arbitration Specialist, Mediator.",
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

// The FAQ schema below is generated from this same array,
// so the visible FAQ and the structured data always match.
const faqs = [
    {
        question: "What is the duration of the BA LLB course at LSR Law Academy?",
        answer:
            "The BA LLB programme is a five-year (10 semester) integrated undergraduate law course that combines legal studies with arts subjects, awarding both a BA and an LLB degree and giving students a comprehensive foundation in law and social sciences.",
    },
    {
        question: "Is the BA LLB programme approved by the Bar Council of India?",
        answer:
            "Yes. The BA LLB programme offered by LSR Law Academy is approved by the Bar Council of India (BCI) and affiliated to Chaudhary Charan Singh University (CCSU), Meerut.",
    },
    {
        question: "Who is eligible to apply for the BA LLB course?",
        answer:
            "Students who have passed 10+2 in any stream from a recognised board are eligible: minimum 45% marks for General, 42% for BC and 40% for SC/ST candidates. Admission rules may vary as per U.P. Government and CCS University norms.",
    },
    {
        question: "Is the BA LLB degree valid for practising as an advocate?",
        answer:
            "Yes. LSR Law Academy's BA LLB is approved by the Bar Council of India, so graduates can enrol with the Bar Council and practise as advocates in Indian courts.",
    },
    {
        question:
            "What career opportunities are available after completing BA LLB?",
        answer:
            "BA LLB graduates can pursue careers as advocates, corporate lawyers, legal advisors, public prosecutors, judicial officers, compliance officers, legal consultants and legal researchers in both public and private sectors.",
    },
    {
        question:
            "Does LSR Law Academy provide internship and practical training opportunities?",
        answer:
            "Yes. Students are encouraged to take part in internships, moot court competitions, legal aid activities, workshops and industry interactions to gain practical legal experience and professional exposure.",
    },
    {
        question: "Why choose LSR Law Academy for BA LLB in Ghaziabad?",
        answer:
            "LSR Law Academy offers experienced faculty, modern infrastructure, moot court facilities, career guidance, practical learning opportunities and a student-focused academic environment, making it a preferred choice for legal education in Ghaziabad.",
    },
];

/* ---------- Structured data (JSON-LD) ---------- */

const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "BA LLB (B.A. LL.B) Integrated Law Degree",
    description:
        "5-year integrated BA LLB (B.A. LL.B) programme at LSR Law Academy, TEMPL Group of Institutions, Ghaziabad. BCI-approved and CCSU-affiliated. Two degrees, BA and LLB, in five years.",
    url: PAGE_URL,
    educationalLevel: "Undergraduate",
    educationalCredentialAwarded: "BA LLB (Integrated)",
    coursePrerequisites:
        "10+2 in any stream from a recognised board, with minimum marks as per CCSU norms",
    provider: {
        "@type": "EducationalOrganization",
        name: "LSR Law Academy, TEMPL Group of Institutions",
        url: BASE_URL,
        telephone: "+91 9319828699",
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
        courseMode: "onsite",
        courseWorkload: "P5Y",
        location: "LSR Law Academy, NH-58, Muradnagar, Ghaziabad",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}/` },
        {
            "@type": "ListItem",
            position: 2,
            name: "Courses",
            item: `${BASE_URL}/courses`,
        },
        {
            "@type": "ListItem",
            position: 3,
            name: "BA LLB - Integrated Law Degree",
            item: PAGE_URL,
        },
    ],
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

function JsonLd({ data }) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(data).replace(/</g, "\\u003c"),
            }}
        />
    );
}

/* ---------- Page ---------- */

export default function BaLlbPage() {
    return (
        <>
            <JsonLd data={courseSchema} />
            <JsonLd data={breadcrumbSchema} />
            <JsonLd data={faqSchema} />

            <main className="ballb-page">
                {/* TOP BANNER IMAGE - NO TEXT OVERLAY */}
                <section className="ballb-banner">
                    <Image
                        src="/images/offer's BALLB.webp"
                        alt="BA LLB students at LSR Law Academy, TEMPL Group of Institutions, Ghaziabad"
                        className="ballb-banner-img"
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        priority
                    />
                </section>

                {/* INTRODUCTION */}
                <section className="ballb-section">
                    <div className="ballb-container">
                        <div className="ballb-heading">
                            <span className="ballb-label">LSR LAW ACADEMY</span>

                            <h1>
                                Best BA LLB College in Ghaziabad | BA LLB at LSR
                                Law Academy
                            </h1>

                            <div className="ballb-title-line"></div>

                            <h2>
                                A Path to Excellence in Legal Education: Your
                                Gateway to a Rewarding Legal Career
                            </h2>
                        </div>

                        <div className="ballb-glass ballb-intro-card">
                            {introParagraphs.map((text, i) => (
                                <p key={i}>{text}</p>
                            ))}
                        </div>

                        <div className="ballb-highlight-grid">
                            {highlights.map((item, index) => (
                                <div
                                    className="ballb-glass ballb-highlight"
                                    key={item}
                                >
                                    <span>
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
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
                            <span className="ballb-label">PROGRAMME OVERVIEW</span>
                            <h2>Everything You Need to Know About BA LLB</h2>
                            <div className="ballb-title-line"></div>
                        </div>

                        <div className="ballb-info-grid">
                            {overview.map((item, index) => (
                                <article
                                    className="ballb-glass ballb-info-card"
                                    key={item.title}
                                >
                                    <span className="ballb-card-number">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </article>
                            ))}

                            <article className="ballb-glass ballb-info-card ballb-info-wide">
                                <span className="ballb-card-number">05</span>
                                <h3>
                                    Why Study BA LLB at LSR Law Academy,
                                    Ghaziabad?
                                </h3>
                                <p>
                                    LSR Law Academy, under the aegis of{" "}
                                    <Link href="/">
                                        TEMPL Group of Institutions
                                    </Link>
                                    , offers a Bar Council of India approved BA
                                    LLB programme with experienced faculty,
                                    modern infrastructure, moot court training,
                                    legal workshops, seminars, internships and
                                    industry-oriented learning. Students benefit
                                    from practical exposure and career guidance
                                    that help them succeed in the legal
                                    profession.
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
                                <article
                                    className="ballb-glass ballb-reason-card"
                                    key={item.title}
                                >
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
                                <Link href="/">TEMPL Group of Institutions</Link>
                                , is affiliated to Chaudhary Charan Singh
                                University (CCSU), Meerut, and approved by the
                                Bar Council of India (BCI) and the University
                                Grants Commission (UGC). The academy is
                                committed to delivering quality legal education
                                through experienced faculty, modern
                                infrastructure, moot court facilities, a
                                comprehensive law library and a student-focused
                                learning environment. Academic and
                                infrastructural facilities are developed in
                                accordance with the standards prescribed by
                                regulatory authorities, making LSR Law Academy a
                                preferred destination for students seeking a BA
                                LLB degree in Ghaziabad and Delhi NCR.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ELIGIBILITY AND ADMISSION */}
                <section className="ballb-section" id="admission">
                    <div className="ballb-container">
                        <div className="ballb-heading">
                            <span className="ballb-label">ADMISSIONS</span>
                            <h2>Eligibility</h2>
                            <div className="ballb-title-line"></div>
                        </div>

                        <div className="ballb-glass ballb-eligibility-card">
                            <ul>
                                <li>
                                    10+2 in any stream with minimum 40% marks in
                                    12th standard for SC/ST candidates
                                </li>
                                <li>
                                    Minimum 42% marks in 12th standard for BC
                                    candidates
                                </li>
                                <li>
                                    Minimum 45% marks in 12th standard for GEN
                                    candidates
                                </li>
                            </ul>
                        </div>

                        <div className="ballb-heading ballb-subheading">
                            <h2>Admission Process</h2>
                            <div className="ballb-title-line"></div>
                        </div>

                        <p className="ballb-center-text">
                            The admission process for the BA LLB programme is
                            designed to be simple and transparent:
                        </p>

                        <div className="ballb-admission-grid">
                            <article className="ballb-glass ballb-admission-card">
                                <span>01</span>
                                <h3>Online Application</h3>
                                <p>
                                    Fill out the online application form
                                    available on our website.
                                </p>
                            </article>

                            <article className="ballb-glass ballb-admission-card">
                                <span>02</span>
                                <h3>Merit-Based Admission</h3>
                                <p>
                                    Admission is based on 12th standard or
                                    equivalent exam marks.
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
                                    Students can proceed with fee payment once
                                    admitted.
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
                                Admission is merit-based, subject to seat
                                availability. Admission rules may vary as per
                                U.P. Government / CCS University.
                            </p>
                        </div>

                        <div className="ballb-glass ballb-visit-card">
                            <p>
                                For detailed information about admissions,
                                courses and campus facilities, visit{" "}
                                <Link href="/">TEMPL Group of Institutions</Link>{" "}
                                or explore legal education programmes at{" "}
                                <Link href="/colleges/lsr-law-academy">
                                    LSR Law Academy
                                </Link>{" "}
                                and the{" "}
                                <Link href="/departments/dep-law">
                                    Department of Law
                                </Link>
                                .
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
                                State-of-the-Art Infrastructure at TEMPL Group of
                                Institutions
                            </h2>
                            <div className="ballb-title-line"></div>
                        </div>

                        <p className="ballb-center-text">
                            Our modern, dynamic learning environment is crucial
                            to shaping the leaders of tomorrow.
                        </p>

                        <div className="ballb-facility-grid">
                            {facilities.map((facility, index) => (
                                <article
                                    className="ballb-glass ballb-facility-card"
                                    key={facility.title}
                                >
                                    <span>
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <h3>{facility.title}</h3>
                                    <p>{facility.description}</p>
                                </article>
                            ))}
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
                            career paths in law, business, governance and more.
                            Some of the career opportunities include:
                        </p>

                        <div className="ballb-career-grid">
                            {careers.map((career, index) => (
                                <article
                                    className="ballb-glass ballb-career-card"
                                    key={career.title}
                                >
                                    <span>
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
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
                            {faqs.map((faq) => (
                                <details
                                    className="ballb-glass ballb-faq"
                                    key={faq.question}
                                >
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
                                <h2>Start Your Journey in Legal Education</h2>
                            </div>

                            <Link
                                href="/register/enquiry"
                                className="ballb-cta-button"
                            >
                                Apply for BA LLB 2026 <span>→</span>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}