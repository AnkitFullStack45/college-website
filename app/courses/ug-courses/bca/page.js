import Link from "next/link";
import Image from "next/image";
import "./bca.css";

const BASE_URL = "https://www.templgroup.in";
const PAGE_URL = `${BASE_URL}/courses/ug-courses/bca`;

export const metadata = {
    title: "Best BCA College in Ghaziabad | Admission 2026 | IET College",
    description:
        "Apply for BCA Admission 2026 at IET College, TEMPL Group, Ghaziabad. CCSU affiliated, AICTE approved, with internships, free certifications, placement support and scholarships.",
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        title: "Best BCA College in Ghaziabad | BCA Admission 2026",
        description:
            "BCA at IET College, TEMPL Group: CCSU affiliated, AICTE approved, with internships, free certifications and scholarships.",
        url: PAGE_URL,
        siteName: "TEMPL Group of Institutions",
        type: "website",
        locale: "en_IN",
    },
};

const highlights = [
    "25+ Years of Excellence",
    "Computer Science Education Since 1999",
    "NAAC Accredited",
    "AICTE Approved & UGC Recognised",
    "CCSU Affiliated",
    "Industry-Oriented Curriculum",
    "Career Focused Learning",
    "Internships & Practical Exposure",
];

const reasons = [
    "Computer science education since 1999 with a legacy of quality teaching.",
    "NAAC Accredited Institution.",
    "AICTE Approved and UGC Recognised programmes.",
    "Affiliated with CCS University, Meerut.",
    "Experienced faculty with an industry-oriented teaching approach.",
    "Smart classrooms and modern computer laboratories.",
    "Well-stocked library with extensive academic resources.",
    "Hackathons, coding bootcamps and technical workshops.",
    "Internship assistance and a dedicated Training & Placement Cell.",
    "Personality development and communication skills training.",
    "Scholarships of up to 40% for eligible students based on academic merit, sports achievements and science exhibition participation.",
    "Wi-Fi enabled campus with transportation facilities.",
    "Sports facilities and student activity programmes.",
    "Hygienic campus canteen for students.",
];

const facilities = [
    {
        title: "Smart Classrooms",
        description:
            "Technology-enabled classrooms create an interactive learning environment through smart presentations, coding demonstrations and modern teaching methods that make programming concepts and software development easier to understand.",
    },
    {
        title: "Computer Laboratories",
        description:
            "Well-equipped computer labs give students practical exposure to programming, databases, web development, software tools and technology-based learning essential for today's IT industry.",
    },
    {
        title: "Central Library",
        description:
            "The library offers a wide collection of academic books, journals, reference materials and digital learning resources that help students strengthen their knowledge beyond classroom learning.",
    },
    {
        title: "Wi-Fi Enabled Campus",
        description:
            "High-speed internet connectivity across the campus supports online learning, research activities, project work and access to digital educational resources.",
    },
    {
        title: "Seminar & Workshop Facilities",
        description:
            "Regular coding workshops, technical seminars and hackathons give students valuable industry insights while enhancing their practical programming knowledge and technical skills in information technology.",
    },
    {
        title: "Sports Facilities",
        description:
            "The institution encourages physical fitness and teamwork through various indoor and outdoor sports activities that contribute to the overall personality development of students.",
    },
    {
        title: "Transportation Facility",
        description:
            "Transportation services are available for convenient and safe commuting for students travelling from different parts of Ghaziabad and nearby areas.",
    },
    {
        title: "Student Canteen",
        description:
            "A clean and hygienic campus canteen offers refreshments and meals, giving students a comfortable place to relax and interact during breaks.",
    },
];

const careers = [
    {
        title: "Software Development",
        description: "Software Developer, App Developer, Game Developer",
    },
    {
        title: "Web Development",
        description: "Frontend, Backend, Full Stack Developer",
    },
    {
        title: "Database & Data",
        description: "Data Analyst, DBA, BI Analyst",
    },
    {
        title: "Cybersecurity",
        description: "Ethical Hacker, Security Analyst",
    },
    {
        title: "Cloud & DevOps",
        description: "Cloud Engineer, DevOps Engineer",
    },
    {
        title: "AI & Machine Learning",
        description: "AI Developer, Data Scientist, ML Engineer",
    },
];

const certifications = [
    {
        title: "Web Development",
        description:
            "HTML, CSS, JavaScript, responsive design and modern web technologies to build dynamic websites.",
    },
    {
        title: "Python Programming",
        description:
            "Software development, automation, data analysis and AI applications using Python.",
    },
    {
        title: "Digital Marketing",
        description:
            "SEO, social media marketing, Google Ads, content marketing and web analytics.",
    },
];

const internshipSkills = [
    "Software development using modern programming languages",
    "Code writing, debugging and software testing",
    "Database management and SQL integration",
    "Version control using Git and GitHub",
    "Real-time project development experience",
];

const internshipBenefits = [
    "Gain practical industry experience",
    "Improve programming and problem-solving skills",
    "Build a strong project portfolio",
    "Enhance your resume for placements",
    "Develop teamwork and professional skills",
];

const placementServices = [
    {
        title: "Technical Training",
        description:
            "Learn programming languages, software development, databases and web technologies with practical projects.",
    },
    {
        title: "Interview Preparation",
        description:
            "Improve aptitude, communication skills, mock interviews and group discussion performance.",
    },
    {
        title: "Resume Building",
        description:
            "Build professional resumes and LinkedIn profiles that increase placement opportunities.",
    },
    {
        title: "Placement Support",
        description:
            "Internship assistance, campus recruitment drives and career guidance from industry experts.",
    },
];

// The FAQ schema below is generated from this same array,
// so the visible FAQ and the structured data always match.
const faqs = [
    {
        question:
            "What are the duration and eligibility for BCA at TEMPL Group, Ghaziabad?",
        answer:
            "BCA at IET College, TEMPL Group is a 3-year (6 semester) undergraduate programme. Candidates need to be 12th pass with Mathematics from a recognised board, with minimum 45% marks (GEN/OBC) and 40% (SC/ST). Admission rules may vary as per U.P. Government and CCS University norms.",
    },
    {
        question: "Is BCA at TEMPL Group affiliated to CCSU Meerut?",
        answer:
            "Yes. BCA at IET College, TEMPL Group is affiliated to Chaudhary Charan Singh University (CCSU), Meerut, approved by AICTE and UGC, and the institution is NAAC accredited.",
    },
    {
        question:
            "Is there a scholarship for BCA students at TEMPL Group, Ghaziabad?",
        answer:
            "Yes. TEMPL Group offers scholarships of up to 40% for eligible students based on academic merit, sports achievements and science exhibition participation. Contact the admission office for details.",
    },
    {
        question:
            "Why is TEMPL Group among the best BCA colleges in Ghaziabad?",
        answer:
            "With modern computer laboratories, experienced faculty, industry-oriented training, practical learning opportunities and a strong focus on skill development, the institution provides students with a comprehensive learning environment for computer science and information technology education.",
    },
    {
        question: "What makes the Computer Lab at TEMPL Group unique?",
        answer:
            "The modern computing lab features branded desktop computers, a 1:1 student-to-computer ratio, advanced software tools, high-speed internet connectivity and dedicated faculty support.",
    },
    {
        question: "Do BCA students get internship opportunities?",
        answer:
            "Yes. Students are encouraged to take part in internships to gain practical exposure, develop technical skills and understand real-world industry practices.",
    },
    {
        question:
            "Do students receive hands-on programming experience in the labs?",
        answer:
            "Yes. Students regularly take part in practical programming sessions, coding exercises, software development projects and technical assignments.",
    },
    {
        question: "What programming languages can students learn?",
        answer:
            "Students gain exposure to C, C++, Java, Python, HTML, CSS, JavaScript, Database Management Systems and web development tools.",
    },
    {
        question: "Is high-speed internet available in the computer lab?",
        answer:
            "Yes. The lab provides reliable high-speed internet connectivity, enabling students to access coding platforms, online resources and digital learning tools.",
    },
    {
        question:
            "How do the computer labs support project-based learning?",
        answer:
            "The labs provide access to modern computers, software tools and expert faculty guidance, enabling students to work on academic projects, software applications, technical assignments and innovative solutions that enhance practical knowledge.",
    },
    {
        question:
            "Are hackathons and coding competitions organised for students?",
        answer:
            "Yes. Regular hackathons, coding competitions, technical workshops and innovation events are organised to encourage creativity, teamwork, programming excellence and real-world problem-solving skills.",
    },
    {
        question:
            "How do faculty members support students during lab sessions?",
        answer:
            "Experienced faculty members and lab coordinators provide continuous technical guidance, practical demonstrations, coding support and project mentoring to help students understand concepts and complete assignments successfully.",
    },
    {
        question:
            "Can students work on emerging technologies in the Computer Lab?",
        answer:
            "Yes. Students are encouraged to explore emerging technologies such as Artificial Intelligence, Data Science, Cybersecurity, Cloud Computing, Software Engineering and Full Stack Web Development through practical learning and project-based activities.",
    },
    {
        question:
            "Is TEMPL Group of Institutions a safe BCA college for girl students in Ghaziabad?",
        answer:
            "Yes. TEMPL Group of Institutions provides a safe and secure campus with CCTV surveillance, trained security personnel and a disciplined environment. Girl students can pursue their education with confidence in a supportive and student-friendly atmosphere.",
    },
    {
        question:
            "Why should girls choose TEMPL Group of Institutions for a BCA degree?",
        answer:
            "TEMPL Group of Institutions offers experienced faculty, modern computer labs, scholarship opportunities for eligible students, industry-oriented training, internships, placement support and personality development programmes that help girl students build successful careers in the IT industry.",
    },
];

/* ---------- Structured data (JSON-LD) ---------- */

const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Bachelor of Computer Applications (BCA)",
    description:
        "3-year undergraduate BCA programme at IET College, TEMPL Group of Institutions, Ghaziabad. CCSU-affiliated, AICTE-approved, NAAC-accredited. Covers programming, database management, software development and IT fundamentals.",
    url: PAGE_URL,
    educationalLevel: "Undergraduate",
    educationalCredentialAwarded: "Bachelor of Computer Applications",
    provider: {
        "@type": "EducationalOrganization",
        name: "IET College, TEMPL Group of Institutions",
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
        courseWorkload: "P3Y",
        location: "IET College, NH-58, Muradnagar, Ghaziabad",
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
            name: "BCA - Bachelor of Computer Applications",
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

export default function BcaPage() {
    return (
        <>
            <JsonLd data={courseSchema} />
            <JsonLd data={breadcrumbSchema} />
            <JsonLd data={faqSchema} />

            <main className="bca-page">
                {/* TOP BANNER IMAGE */}
                <section className="bca-banner">
                    <Image
                        src="/images/offer's BCA.webp"
                        alt="BCA students at IET College, TEMPL Group of Institutions, Ghaziabad"
                        fill
                        priority
                        sizes="100vw"
                    />
                </section>

                {/* HERO TEXT (BELOW IMAGE) */}
                <section className="bca-top-text">
                    <div className="bca-container">
                        <span className="bca-eyebrow">
                            TEMPL GROUP OF INSTITUTIONS
                        </span>

                        <h1>
                            Best BCA College in Ghaziabad – Bachelor of
                            Computer Applications (BCA)
                        </h1>

                        <h2>
                            BCA Programme at TEMPL Group of Institutions:
                            Unlock Your Future in Computer Science
                        </h2>

                        <p>Bachelor of Computer Applications (BCA)</p>

                        <Link href="#admission" className="bca-primary-btn">
                            Apply Now <span>→</span>
                        </Link>
                    </div>
                </section>

                {/* INTRODUCTION */}
                <section className="bca-section">
                    <div className="bca-container">
                        <div className="bca-intro-grid">
                            <div className="bca-section-heading">
                                <span className="bca-label">BCA PROGRAMME</span>
                                <h2>Bachelor of Computer Applications (BCA)</h2>
                                <div className="bca-heading-line"></div>
                            </div>

                            <div className="bca-intro-text">
                                <p>
                                    At TEMPL Group of Institutions (IET
                                    College), we offer a comprehensive Bachelor
                                    of Computer Applications (BCA) programme.
                                    This 3-year undergraduate course in
                                    computer science is designed for students
                                    who have completed Class 12 and want to
                                    build a career in information technology
                                    and software development.
                                </p>

                                <p>
                                    The programme is affiliated to CCS
                                    University, Meerut, approved by AICTE and
                                    UGC, and offered at our campus on NH-58,
                                    Muradnagar, Ghaziabad (Delhi NCR).
                                </p>
                            </div>
                        </div>

                        <div className="bca-highlight-grid">
                            {highlights.map((item, index) => (
                                <div className="bca-highlight-card" key={index}>
                                    <span className="bca-highlight-icon">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <h3>{item}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHY CHOOSE TEMPL */}
                <section className="bca-section bca-light-section">
                    <div className="bca-container">
                        <div className="bca-centered-heading">
                            <span className="bca-label">WHY TEMPL</span>
                            <h2>Why Choose TEMPL Group for BCA?</h2>
                            <div className="bca-heading-line"></div>
                        </div>

                        <div className="bca-content-width">
                            <p>
                                Choosing the right college is one of the most
                                important decisions for students who want to
                                build a successful career in information
                                technology and software development. With
                                computer science education offered since
                                1999, TEMPL Group of Institutions is committed
                                to delivering quality education through
                                academic excellence, practical learning and
                                industry-oriented training. The Bachelor of
                                Computer Applications (BCA) programme is
                                designed to help students develop the
                                technical, analytical and problem-solving
                                skills required to succeed in today's rapidly
                                evolving IT industry.
                            </p>

                            <p>
                                Affiliated with CCS University, Meerut,
                                approved by AICTE and UGC, and accredited by
                                NAAC, TEMPL Group provides students with a
                                strong academic foundation supported by
                                experienced faculty, advanced computer
                                laboratories, modern infrastructure and
                                continuous technical skill development. Our
                                focus extends beyond classroom learning to
                                hands-on programming, live projects, coding
                                workshops, internships, seminars, industry
                                interaction and communication skills, to
                                prepare students for successful careers in the
                                IT industry.
                            </p>
                        </div>

                        <div className="bca-reasons-grid">
                            {reasons.map((reason, index) => (
                                <div className="bca-reason-card" key={index}>
                                    <span className="bca-check">✓</span>
                                    <p>{reason}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bca-content-width bca-bottom-text">
                            <p>
                                At TEMPL Group of Institutions, students
                                receive an education that combines academic
                                knowledge with practical experience, helping
                                them develop the technical expertise,
                                analytical thinking and problem-solving
                                abilities required for careers in software
                                development, web and mobile application
                                development, database management,
                                cybersecurity, cloud computing, data analytics
                                and other emerging IT domains.
                            </p>
                        </div>
                    </div>
                </section>

                {/* INFRASTRUCTURE */}
                <section className="bca-section">
                    <div className="bca-container">
                        <div className="bca-centered-heading">
                            <span className="bca-label">CAMPUS FACILITIES</span>
                            <h2>
                                Modern Infrastructure and Facilities for BCA
                                Students at IET College
                            </h2>
                            <div className="bca-heading-line"></div>
                        </div>

                        <div className="bca-content-width">
                            <p>
                                A productive learning environment plays a vital
                                role in shaping the academic journey of every
                                computer science student. At TEMPL Group of
                                Institutions, BCA students benefit from modern
                                infrastructure and technology-enabled
                                facilities that support academic excellence,
                                practical learning, technical skill
                                development and overall growth. The campus is
                                designed to create an engaging environment
                                where students can learn, innovate, collaborate
                                and prepare for successful careers in
                                information technology and computer
                                applications.
                            </p>
                        </div>

                        <div className="bca-facilities-grid">
                            {facilities.map((facility, index) => (
                                <article
                                    className="bca-facility-card"
                                    key={index}
                                >
                                    <span className="bca-card-number">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <h3>{facility.title}</h3>
                                    <p>{facility.description}</p>
                                </article>
                            ))}
                        </div>

                        <div className="bca-content-width bca-bottom-text">
                            <p>
                                These facilities create a supportive
                                environment for academic excellence, practical
                                learning and technical skill development
                                throughout the Bachelor of Computer
                                Applications programme at TEMPL Group of
                                Institutions, preparing students for careers in
                                the IT industry.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ADMISSION */}
                <section
                    className="bca-section bca-admission-section"
                    id="admission"
                >
                    <div className="bca-container">
                        <div className="bca-centered-heading">
                            <span className="bca-label">JOIN TEMPL</span>
                            <h2>BCA Admission Details</h2>
                            <h3>Eligibility, Admission Process & Seat Intake</h3>
                            <div className="bca-heading-line"></div>
                        </div>

                        <div className="bca-admission-grid">
                            <article className="bca-admission-card">
                                <div className="bca-admission-icon">01</div>
                                <h3>Eligibility Criteria</h3>

                                <h4>Educational Qualification:</h4>
                                <p>
                                    12th pass with Mathematics from a
                                    recognised board.
                                </p>

                                <h4>Minimum Marks:</h4>
                                <p>
                                    45% (GEN/OBC) & 40% (SC/ST). Maths
                                    mandatory.
                                </p>
                            </article>

                            <article className="bca-admission-card">
                                <div className="bca-admission-icon">02</div>
                                <h3>Admission Process</h3>

                                <ul>
                                    <li>
                                        <strong>Application:</strong> Apply
                                        online or at campus.
                                    </li>
                                    <li>
                                        <strong>Merit Selection:</strong> Based
                                        on 12th marks.
                                    </li>
                                    <li>
                                        <strong>Verification:</strong> Document
                                        verification & counselling.
                                    </li>
                                    <li>
                                        <strong>Fee Payment:</strong> Final
                                        admission confirmation.
                                    </li>
                                </ul>
                            </article>

                            <article className="bca-seats-card">
                                <span>SEAT INTAKE</span>
                                <strong>120</strong>
                                <h3>Total Seats Available</h3>
                            </article>
                        </div>

                        <div className="bca-admission-cta">
                            <div>
                                <h3>Apply Now</h3>
                                <p>
                                    Limited seats available. Apply early to
                                    secure your admission in the BCA programme.
                                </p>
                            </div>

                            <Link
                                href="/register/enquiry"
                                className="bca-primary-btn"
                            >
                                Apply Now <span>→</span>
                            </Link>
                        </div>

                        <p className="bca-admission-note">
                            Admission rules may vary as per U.P. Government /
                            CCS University.
                        </p>
                    </div>
                </section>

                {/* CAREER OPPORTUNITIES */}
                <section className="bca-section">
                    <div className="bca-container">
                        <div className="bca-centered-heading">
                            <span className="bca-label">CAREER PATHS</span>
                            <h2>Career Opportunities After BCA</h2>
                            <h3>
                                Explore various career paths and higher
                                education options after BCA.
                            </h3>
                            <div className="bca-heading-line"></div>
                        </div>

                        <p className="bca-content-width bca-center-text">
                            After completing BCA, students can explore multiple
                            domains in the IT industry:
                        </p>

                        <div className="bca-careers-grid">
                            {careers.map((career, index) => (
                                <article
                                    className="bca-career-card"
                                    key={index}
                                >
                                    <span className="bca-card-number">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <h3>{career.title}</h3>
                                    <p>{career.description}</p>
                                </article>
                            ))}
                        </div>

                        <div className="bca-special-careers">
                            <div>
                                <h3>Special Career Fields</h3>
                                <ul>
                                    <li>Business Analyst / IT Consultant</li>
                                    <li>SEO / Digital Marketing (Tech Focus)</li>
                                    <li>UX/UI Designer</li>
                                    <li>
                                        Prompt Engineer / Generative AI
                                        Developer
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3>Higher Education & Certifications</h3>
                                <h4>Higher Studies</h4>
                                <ul>
                                    <li>MCA (Master of Computer Applications)</li>
                                    <li>
                                        MBA (Master of Business Administration)
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* BCA VS BTECH */}
                <section className="bca-section bca-light-section">
                    <div className="bca-container">
                        <div className="bca-centered-heading">
                            <span className="bca-label">
                                MAKE THE RIGHT CHOICE
                            </span>
                            <h2>Why Choose BCA Instead of B.Tech?</h2>
                            <h3>
                                Understand the difference and choose the right
                                career path after Class 12.
                            </h3>
                            <div className="bca-heading-line"></div>
                        </div>

                        <div className="bca-content-width">
                            <p>
                                Choosing between Bachelor of Computer
                                Applications (BCA) and Bachelor of Technology
                                (B.Tech) is an important decision after Class
                                12. Both offer strong career opportunities in
                                the IT industry.
                            </p>

                            <p>
                                At TEMPL Group of Institutions, our BCA
                                programme is designed for students who want
                                strong skills in programming, software
                                development, databases, web technologies and
                                emerging IT fields without pursuing an
                                engineering degree.
                            </p>
                        </div>

                        <div className="bca-choice-grid">
                            <article className="bca-choice-card">
                                <h3>Why Choose BCA at IET College</h3>
                                <ul>
                                    <li>
                                        Industry-oriented curriculum aligned
                                        with IT trends
                                    </li>
                                    <li>
                                        Strong focus on coding and practical
                                        learning
                                    </li>
                                    <li>
                                        Modern computer labs with advanced
                                        tools
                                    </li>
                                    <li>
                                        Experienced faculty from academic &
                                        industry background
                                    </li>
                                    <li>Internship & placement support</li>
                                    <li>
                                        Affordable fee structure compared to
                                        engineering programmes
                                    </li>
                                </ul>
                            </article>

                            <article className="bca-choice-card bca-choice-dark">
                                <h3>BCA vs B.Tech – Which is Right for You?</h3>
                                <p>
                                    Students interested in programming,
                                    software development, databases and IT
                                    careers often prefer BCA. Students
                                    interested in broader engineering fields
                                    like mechanical, civil or electronics may
                                    prefer B.Tech.
                                </p>
                            </article>
                        </div>

                        <div className="bca-content-width bca-bottom-text">
                            <p>
                                At IET College, TEMPL Group of Institutions, the
                                BCA programme provides strong technical
                                knowledge, practical training and industry
                                exposure to prepare students for the
                                fast-growing digital economy.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CERTIFICATIONS */}
                <section className="bca-section">
                    <div className="bca-container">
                        <div className="bca-centered-heading">
                            <span className="bca-label">SKILL DEVELOPMENT</span>
                            <h2>Free Industry Certifications for BCA Students</h2>
                            <h3>
                                Enhance technical skills, employability and
                                placement opportunities with industry-ready
                                certifications.
                            </h3>
                            <div className="bca-heading-line"></div>
                        </div>

                        <p className="bca-content-width">
                            Every BCA student gets access to free industry
                            certification programmes designed to enhance
                            technical skills, employability and placement
                            opportunities. These certifications help students
                            gain practical knowledge in emerging technologies
                            aligned with industry needs.
                        </p>

                        <div className="bca-certification-grid">
                            {certifications.map((item, index) => (
                                <article
                                    className="bca-certification-card"
                                    key={index}
                                >
                                    <span className="bca-card-number">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* INTERNSHIP */}
                <section className="bca-section bca-light-section">
                    <div className="bca-container">
                        <div className="bca-centered-heading">
                            <span className="bca-label">
                                PRACTICAL EXPERIENCE
                            </span>
                            <h2>Software Development Internship Opportunities</h2>
                            <h3>
                                Hands-on industry experience for BCA students at
                                IET College, TEMPL Group of Institutions
                            </h3>
                            <div className="bca-heading-line"></div>
                        </div>

                        <p className="bca-content-width">
                            At IET College, TEMPL Group of Institutions, BCA
                            students get practical exposure through Software
                            Development Internships. These internships help
                            students apply programming knowledge, work on
                            real-world projects and understand the complete
                            software development lifecycle.
                        </p>

                        <div className="bca-internship-grid">
                            <article className="bca-list-card">
                                <h3>Skills You Will Learn</h3>
                                <ul>
                                    {internshipSkills.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </article>

                            <article className="bca-list-card">
                                <h3>Benefits of Internship</h3>
                                <ul>
                                    {internshipBenefits.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </article>
                        </div>
                    </div>
                </section>

                {/* PLACEMENT */}
                <section className="bca-section">
                    <div className="bca-container">
                        <div className="bca-centered-heading">
                            <span className="bca-label">CAREER DEVELOPMENT</span>
                            <h2>BCA Placement Opportunities at IET College</h2>
                            <div className="bca-heading-line"></div>
                        </div>

                        <p className="bca-content-width">
                            Our placement support focuses on technical
                            training, resume building, interview preparation,
                            aptitude development and industry readiness to help
                            students build successful careers in the IT sector.
                        </p>

                        <div className="bca-placement-grid">
                            {placementServices.map((item, index) => (
                                <article
                                    className="bca-placement-card"
                                    key={index}
                                >
                                    <span className="bca-card-number">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="bca-section bca-light-section">
                    <div className="bca-container">
                        <div className="bca-centered-heading">
                            <span className="bca-label">HAVE QUESTIONS?</span>
                            <h2>Frequently Asked Questions</h2>
                            <h3>
                                Find answers to common questions about the BCA
                                programme, computer labs, internships and career
                                opportunities.
                            </h3>
                            <div className="bca-heading-line"></div>
                        </div>

                        <div className="bca-faq-list">
                            {faqs.map((faq, index) => (
                                <details className="bca-faq-item" key={index}>
                                    <summary>
                                        <span>{faq.question}</span>
                                        <span className="bca-faq-plus">+</span>
                                    </summary>
                                    <div className="bca-faq-answer">
                                        <p>{faq.answer}</p>
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FINAL CTA */}
                <section className="bca-final-cta">
                    <div className="bca-container bca-final-cta-content">
                        <div>
                            <span className="bca-label">BEGIN YOUR JOURNEY</span>
                            <h2>Build Your Future in Computer Science</h2>
                            <p>
                                Explore the BCA programme at TEMPL Group of
                                Institutions.
                            </p>
                        </div>

                        <Link
                            href="/register/enquiry"
                            className="bca-primary-btn"
                        >
                            Apply Now <span>→</span>
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}