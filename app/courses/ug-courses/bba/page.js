import Image from "next/image";
import Link from "next/link";
import "./bba.css";

const BASE_URL = "https://www.templgroup.in";
const PAGE_URL = `${BASE_URL}/courses/ug-courses/bba`;

export const metadata = {
    title: "Best BBA College in Ghaziabad | BBA Admission 2026 | TEMPL Group",
    description:
        "Apply for BBA Admission 2026 at TEMPL Group, one of the best BBA colleges in Ghaziabad. AICTE-approved, CCSU-affiliated with scholarships and placements.",
    alternates: {
        canonical: PAGE_URL,
    },
    openGraph: {
        title: "Best BBA College in Ghaziabad | BBA Admission 2026",
        description:
            "BBA at IET College, TEMPL Group: CCSU affiliated, AICTE & UGC approved, with internships, placement support and scholarships.",
        url: PAGE_URL,
        siteName: "TEMPL Group of Institutions",
        type: "website",
        locale: "en_IN",
    },
};

const introParagraphs = [
    "At TEMPL Group of Institutions (IET College), we offer a complete Bachelor of Business Administration (BBA) programme designed to prepare students for successful careers in business management and leadership. This three-year undergraduate course combines academic excellence with practical learning, helping students develop strong managerial, analytical, communication and decision-making skills.",
    "With a robust academic foundation, modern infrastructure, experienced faculty and an industry-oriented curriculum, the BBA programme equips students with the knowledge, confidence and professional competencies required in today's competitive corporate environment. Located on NH-58 in Muradnagar, Ghaziabad (Delhi NCR), the campus gives students access to industry exposure, internship opportunities and career-focused training that support long-term professional growth.",
    "Affiliated to CCS University, Meerut, and approved by AICTE and UGC, the BBA programme at IET College provides a balanced education in both theory and practical industry skills. The course is suitable for students from any stream after Class 12.",
];

const highlights = [
    "25+ Years of Excellence",
    "NAAC Accredited",
    "AICTE & UGC Approved",
    "Quality Education & Recognition",
    "CCSU Affiliated",
    "Industry-Oriented Curriculum",
    "Career Focused Learning",
    "Internships & Practical Exposure",
];

const keyHighlights = [
    {
        title: "Accreditation & Affiliation",
        description:
            "The BBA programme is affiliated with CCS University, Meerut and is approved by AICTE and UGC, ensuring high academic standards and industry relevance.",
    },
    {
        title: "Strong Industry Connections",
        description:
            "Our location in Delhi NCR helps students build connections with industry professionals and business leaders.",
    },
    {
        title: "Comprehensive Curriculum",
        description:
            "Covers critical business areas such as management principles, marketing, finance, HR and entrepreneurship.",
    },
    {
        title: "Experienced Faculty",
        description:
            "Expert faculty members bring years of academic and industry experience to the classroom.",
    },
    {
        title: "Modern Infrastructure",
        description:
            "Features a Wi-Fi-enabled campus, multimedia classrooms and well-equipped computer labs.",
    },
];

const facilities = [
    {
        title: "Smart Classrooms",
        description:
            "Technology-enabled classrooms create an interactive learning environment through presentations, multimedia resources and modern teaching methods that make business concepts easier to understand.",
    },
    {
        title: "Computer Laboratories",
        description:
            "Well-equipped computer labs give students practical exposure to business applications, research, presentations and digital tools essential for today's corporate environment.",
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
            "Regular seminars, workshops and guest lectures give students valuable industry insights while enhancing their practical knowledge and professional skills.",
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

const skills = [
    {
        title: "Personality Development",
        description:
            "Dedicated training sessions help students build self-confidence, professional behaviour, a positive attitude, emotional intelligence and the interpersonal skills required for career success.",
    },
    {
        title: "Communication & Presentation Skills",
        description:
            "Students enhance verbal, written and business communication, public speaking and presentation skills through discussions, presentations and practical classroom activities.",
    },
    {
        title: "Leadership & Team Management",
        description:
            "Academic projects and collaborative activities develop leadership, teamwork, decision-making, conflict resolution and people management skills.",
    },
    {
        title: "Analytical & Problem-Solving Skills",
        description:
            "Case studies, business simulations and real-world projects help students analyse challenges, evaluate alternatives and develop effective business solutions.",
    },
    {
        title: "Strategic & Entrepreneurial Thinking",
        description:
            "Students learn business planning, innovation, market analysis, strategic thinking and entrepreneurial decision-making to identify future business opportunities.",
    },
    {
        title: "Workshops, Seminars & Guest Lectures",
        description:
            "Industry experts and academicians regularly interact with students to share insights into current business trends, managerial practices, emerging technologies and corporate expectations.",
    },
    {
        title: "Industrial Visits & Practical Exposure",
        description:
            "Industrial visits, internships, live projects and corporate interactions help students understand how organisations operate and gain valuable real-world experience.",
    },
    {
        title: "Career Readiness & Professional Ethics",
        description:
            "Continuous career guidance, placement preparation, time management and ethical business practices prepare students for higher education, competitive recruitment and long-term professional success.",
    },
];

const curriculum = [
    {
        title: "Principles of Management",
        description:
            "Learn the fundamentals of planning, organising, staffing, directing and controlling organisational activities for effective business operations.",
    },
    {
        title: "Business Economics",
        description:
            "Understand economic concepts, market dynamics, demand and supply analysis, and their impact on business decision-making and organisational growth.",
    },
    {
        title: "Marketing Management",
        description:
            "Develop knowledge of consumer behaviour, market research, branding, advertising, sales strategies and digital marketing techniques.",
    },
    {
        title: "Financial Management",
        description:
            "Gain insights into financial planning, budgeting, investment analysis, risk management and corporate finance principles.",
    },
    {
        title: "Human Resource Management",
        description:
            "Learn talent acquisition, employee engagement, performance measurement, training and development, and workplace leadership strategies.",
    },
    {
        title: "Business Communication",
        description:
            "Enhance verbal, written, interpersonal and professional communication skills essential for corporate success and leadership roles.",
    },
    {
        title: "Entrepreneurship",
        description:
            "Explore business planning, startup development, innovation management and entrepreneurial strategies for building successful ventures.",
    },
    {
        title: "Digital Marketing",
        description:
            "Study modern marketing tools, social media marketing, search engine optimisation (SEO), content marketing and online brand management.",
    },
    {
        title: "Business Analytics",
        description:
            "Learn data-driven decision-making techniques, business intelligence tools, statistical analysis and performance evaluation methods.",
    },
];

const exposure = [
    {
        title: "Industry Workshops & Seminars",
        description: "Industry-oriented workshops and management seminars.",
    },
    {
        title: "Guest Lectures",
        description:
            "Guest lectures by experienced academicians and industry professionals.",
    },
    {
        title: "Industrial Visits",
        description: "Industrial visits to understand real business operations.",
    },
    {
        title: "Live Business Projects",
        description:
            "Live projects to develop analytical and decision-making skills.",
    },
    {
        title: "Professional Skill Development",
        description:
            "Professional skill development programmes focusing on leadership, communication and teamwork.",
    },
    {
        title: "Internship Opportunities",
        description:
            "Internship opportunities across various business domains for practical industry exposure.",
    },
];

const scope = [
    {
        title: "Corporate Careers",
        description:
            "Build successful careers in corporate organisations, multinational companies, startups and business enterprises.",
    },
    {
        title: "Banking & Finance",
        description:
            "Explore opportunities in banking, financial services, investment firms, insurance and finance companies.",
    },
    {
        title: "Marketing",
        description:
            "Develop careers in marketing, digital marketing, branding, sales and business development.",
    },
    {
        title: "Human Resources",
        description:
            "Build expertise in recruitment, talent management, employee engagement and HR operations.",
    },
    {
        title: "Entrepreneurship",
        description:
            "Start your own business, manage a family enterprise or build an innovative startup.",
    },
    {
        title: "Emerging Industries",
        description:
            "Career opportunities in consulting, retail, e-commerce, hospitality, logistics and business analytics.",
    },
    {
        title: "Higher Education",
        description:
            "Pursue MBA, PGDM, M.Com and specialised management programmes for career advancement.",
    },
    {
        title: "Career Growth",
        description:
            "Develop leadership, managerial and practical business skills for long-term professional success.",
    },
];

const support = [
    {
        title: "Career Guidance",
        description:
            "Students receive career counselling and professional guidance to help them identify suitable career paths, higher education opportunities and industry expectations.",
    },
    {
        title: "Training & Placement Cell",
        description:
            "A dedicated Training & Placement Cell supports students through internship assistance, career development activities and industry-oriented training programmes.",
    },
    {
        title: "Resume Building",
        description:
            "Students are guided to prepare professional resumes that effectively highlight their academic achievements, skills, internships and career objectives.",
    },
    {
        title: "Mock Interviews & GD Sessions",
        description:
            "Mock interviews and group discussion sessions help students improve their confidence, communication, analytical thinking and interview performance.",
    },
    {
        title: "Aptitude & Skill Development",
        description:
            "Regular aptitude training and skill development sessions help students strengthen their logical reasoning, quantitative aptitude and problem-solving abilities.",
    },
    {
        title: "Corporate Communication",
        description:
            "Special training in business communication, professional email writing, presentation skills and workplace etiquette helps students become industry-ready professionals.",
    },
];

const admissionSteps = [
    ["Online Application", "Fill out the online application form on our website."],
    ["Merit-Based Selection", "Based on the merit of 12th standard marks."],
    [
        "Counselling and Document Verification",
        "Shortlisted candidates undergo document verification.",
    ],
    ["Fee Payment", "Complete fee payment to secure admission."],
];

const whyGhaziabad = [
    ["Educational Hub", "Growing educational hub with reputed colleges and universities."],
    [
        "Affordable Education",
        "Affordable education and living compared to many metropolitan cities.",
    ],
    [
        "Business Environment",
        "Exposure to a dynamic business environment and emerging industries.",
    ],
    [
        "Skill Development",
        "Opportunities to build professional skills through seminars, workshops and management events.",
    ],
    [
        "Career Opportunities",
        "A suitable destination for students planning careers in management, finance, marketing and entrepreneurship.",
    ],
];

const whyTempl = [
    {
        title: "25+ Years of Academic Excellence",
        description:
            "For over 25 years, TEMPL Group has been committed to providing quality education while continuously evolving to meet modern academic and industry standards.",
    },
    {
        title: "Recognised & Accredited Institution",
        description:
            "NAAC accredited, AICTE approved, UGC recognised and affiliated with CCS University, Meerut, ensuring quality education and academic credibility.",
    },
    {
        title: "Experienced & Supportive Faculty",
        description:
            "Learn from a dedicated team of experienced academicians and passionate educators who combine academic knowledge with practical teaching approaches.",
    },
    {
        title: "Innovation & Entrepreneurship Culture",
        description:
            "Students actively participate in entrepreneurship programmes, innovation activities, business events and competitions. Outstanding performers are recognised through initiatives such as the Best Innovator Award.",
    },
    {
        title: "Industry-Oriented Learning",
        description:
            "Industrial visits, seminars, workshops, guest lectures, internships and practical learning activities help students understand real corporate environments.",
    },
    {
        title: "Student Clubs & Leadership Opportunities",
        description:
            "Students can participate in the Sports Club, Media Club, Literature Club, Academic Club, Cultural Club and Entrepreneurship & Innovation Club to develop leadership, teamwork, creativity and communication skills.",
    },
    {
        title: "Holistic Student Development",
        description:
            "Personality development programmes, communication skills training, aptitude sessions, group discussions, mock interviews and career guidance prepare students for future opportunities.",
    },
    {
        title: "Vibrant Campus Experience",
        description:
            "Management fests, cultural events, sports competitions, technical activities and student engagement programmes create a dynamic campus life that supports both academic and personal growth.",
    },
    {
        title: "Convenient Location on NH-58",
        description:
            "Located on NH-58 in Muradnagar, Ghaziabad, with good connectivity to Delhi NCR, the campus gives students convenient access to educational resources, industries and professional exposure.",
    },
];

// The FAQ schema below is generated from this same array,
// so the visible FAQ and the structured data always match.
const faqs = [
    {
        question:
            "Why is TEMPL Group considered one of the top management colleges in Ghaziabad for BBA?",
        answer:
            "TEMPL Group offers a comprehensive BBA programme with experienced faculty, industry-oriented learning, modern infrastructure, practical training, internship opportunities and dedicated placement support, making it a preferred choice for management education in Ghaziabad and Delhi NCR.",
    },
    {
        question: "What is the eligibility criteria for BBA admission in 2026?",
        answer:
            "Candidates who have completed 10+2 from a recognised board with the required minimum marks as per CCS University and institutional guidelines are eligible to apply for the BBA programme. Students from any stream (Science, Commerce or Arts) can apply.",
    },
    {
        question: "What is the duration of the BBA programme?",
        answer:
            "The Bachelor of Business Administration (BBA) programme is a three-year undergraduate degree divided into six semesters, focusing on business leadership and development.",
    },
    {
        question: "Is BBA at TEMPL Group affiliated to CCSU Meerut?",
        answer:
            "Yes. BBA at IET College, TEMPL Group is affiliated to Chaudhary Charan Singh University (CCSU), Meerut, and approved by AICTE and UGC. The institution is NAAC accredited.",
    },
    {
        question: "What career opportunities are available after completing a BBA?",
        answer:
            "BBA graduates can pursue careers in marketing, finance, human resource management, business development, banking, entrepreneurship, retail management, consulting and corporate administration.",
    },
    {
        question: "Can I pursue an MBA after completing BBA?",
        answer:
            "Yes. BBA is one of the most popular pathways to an MBA and provides a strong foundation in business and management concepts for advanced studies.",
    },
    {
        question: "Does the BBA programme provide internship opportunities?",
        answer:
            "Yes. Eligible students are provided with internship opportunities through the Training and Placement Cell in collaboration with industry partners.",
    },
    {
        question: "What skills are developed through the BBA programme?",
        answer:
            "Students develop leadership, communication, decision-making, strategic thinking, team management, problem-solving, entrepreneurial and analytical skills essential for business success.",
    },
    {
        question: "Does TEMPL Group provide placement assistance for BBA students?",
        answer:
            "Yes. The dedicated Training and Placement Cell provides career guidance, skill development programmes, interview preparation, internship support and placement opportunities with reputed organisations.",
    },
    {
        question: "Is a scholarship available for BBA students?",
        answer:
            "Yes. TEMPL Group offers scholarships of up to 40% for eligible students based on academic merit, sports achievements and science exhibition participation. Contact the admission office for details applicable to the current admission session.",
    },
    {
        question: "Why should students choose a BBA course after 12th?",
        answer:
            "BBA is an excellent choice for students who want to build careers in business management, entrepreneurship, finance, marketing and corporate leadership while developing industry-relevant professional skills.",
    },
];

const registerPoints = [
    ["Admission Guidance", "Get expert assistance throughout the admission process."],
    [
        "Scholarship Opportunities",
        "Learn about merit-based scholarships and financial assistance.",
    ],
    [
        "Career Counselling",
        "Explore career paths in business leadership, marketing, finance and entrepreneurship.",
    ],
    [
        "Industry Exposure",
        "Gain access to internships, workshops and business development activities.",
    ],
    [
        "Placement Support",
        "Benefit from dedicated training and placement assistance.",
    ],
];

/* ---------- Structured data (JSON-LD) ---------- */

const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Bachelor of Business Administration (BBA)",
    description:
        "3-year undergraduate BBA programme at IET College, TEMPL Group of Institutions, Ghaziabad. CCSU-affiliated, AICTE-approved. Covers business management, marketing, finance, HR and entrepreneurship.",
    url: PAGE_URL,
    educationalLevel: "Undergraduate",
    educationalCredentialAwarded: "Bachelor of Business Administration",
    coursePrerequisites:
        "10+2 from a recognised board as per CCSU eligibility norms",
    inLanguage: "en",
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
            name: "BBA - Bachelor of Business Administration",
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

/* ---------- small helpers ---------- */

function Heading({ label, title, sub }) {
    return (
        <div className="bba-centered-heading">
            <span className="bba-label">{label}</span>
            <h2>{title}</h2>
            {sub && <h3>{sub}</h3>}
            <div className="bba-heading-line"></div>
        </div>
    );
}

function CardGrid({ items, grid, card }) {
    return (
        <div className={grid}>
            {items.map((item, i) => (
                <article className={card} key={item.title}>
                    <span className="bba-card-number">
                        {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </article>
            ))}
        </div>
    );
}

function ReasonGrid({ items }) {
    return (
        <div className="bba-reasons-grid">
            {items.map(([title, text]) => (
                <div className="bba-reason-card" key={title}>
                    <span className="bba-check">✓</span>
                    <p>
                        <strong>{title}:</strong> {text}
                    </p>
                </div>
            ))}
        </div>
    );
}

/* ---------- Page ---------- */

export default function BbaPage() {
    return (
        <>
            <JsonLd data={courseSchema} />
            <JsonLd data={breadcrumbSchema} />
            <JsonLd data={faqSchema} />

            <main className="bba-page">
                {/* TOP BANNER IMAGE */}
                <section className="bba-banner">
                    <Image
                        src="/images/offer's BBA.webp"
                        alt="BBA students at IET College, TEMPL Group of Institutions, Ghaziabad"
                        width={0}
                        height={0}
                        sizes="100vw"
                        priority
                    />
                </section>

                {/* HERO TEXT */}
                <section className="bba-top-text">
                    <div className="bba-container">
                        <span className="bba-eyebrow">
                            TEMPL GROUP OF INSTITUTIONS
                        </span>
                        <h1>
                            Best BBA College in Ghaziabad | Bachelor of Business
                            Administration (BBA)
                        </h1>
                        <h2>
                            BBA Programme at TEMPL Group of Institutions –
                            Shaping Future Business Leaders
                        </h2>
                        <p>Bachelor of Business Administration (BBA)</p>
                        <Link href="#admission" className="bba-primary-btn">
                            Apply Now <span>→</span>
                        </Link>
                    </div>
                </section>

                {/* INTRODUCTION */}
                <section className="bba-section">
                    <div className="bba-container">
                        <div className="bba-intro-grid">
                            <div className="bba-section-heading">
                                <span className="bba-label">BBA PROGRAMME</span>
                                <h2>Bachelor of Business Administration (BBA)</h2>
                                <div className="bba-heading-line"></div>
                            </div>

                            <div className="bba-intro-text">
                                {introParagraphs.map((text, i) => (
                                    <p key={i}>{text}</p>
                                ))}
                            </div>
                        </div>

                        <div className="bba-highlight-grid">
                            {highlights.map((item, index) => (
                                <div className="bba-highlight-card" key={item}>
                                    <span className="bba-highlight-icon">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <h3>{item}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* KEY HIGHLIGHTS */}
                <section className="bba-section bba-light-section">
                    <div className="bba-container">
                        <Heading
                            label="WHY BBA AT TEMPL"
                            title="Key Highlights of BBA at TEMPL Group of Institutions"
                        />
                        <CardGrid
                            items={keyHighlights}
                            grid="bba-careers-grid"
                            card="bba-career-card"
                        />
                    </div>
                </section>

                {/* CAMPUS FACILITIES */}
                <section className="bba-section">
                    <div className="bba-container">
                        <Heading
                            label="CAMPUS FACILITIES"
                            title="Campus Facilities for BBA Students at TEMPL Group"
                        />

                        <div className="bba-content-width">
                            <p>
                                A productive learning environment plays a vital
                                role in shaping the academic journey of every
                                management student. At TEMPL Group of
                                Institutions, BBA students benefit from modern
                                infrastructure and student-friendly facilities
                                that support academic excellence, practical
                                learning, professional development and overall
                                growth. The campus is designed to create an
                                engaging environment where students can learn,
                                collaborate and prepare for successful careers
                                in business and management.
                            </p>
                        </div>

                        <CardGrid
                            items={facilities}
                            grid="bba-facilities-grid"
                            card="bba-facility-card"
                        />

                        <div className="bba-content-width bba-bottom-text">
                            <p>
                                These modern facilities create an environment
                                where students can focus on academic excellence,
                                practical learning, skill development and
                                holistic growth throughout their Bachelor of
                                Business Administration (BBA) journey at TEMPL
                                Group of Institutions.
                            </p>
                        </div>
                    </div>
                </section>

                {/* SKILLS & DEVELOPMENT */}
                <section className="bba-section bba-light-section">
                    <div className="bba-container">
                        <Heading
                            label="SKILL DEVELOPMENT"
                            title="Skills & Student Development Programmes for BBA Students"
                        />

                        <div className="bba-content-width">
                            <p>
                                The Bachelor of Business Administration (BBA)
                                programme at TEMPL Group of Institutions (IET
                                College) goes beyond textbooks. Along with
                                academic learning, students take part in
                                structured programmes that build the
                                communication, leadership, analytical and
                                professional skills employers look for.
                            </p>
                        </div>

                        <CardGrid
                            items={skills}
                            grid="bba-facilities-grid"
                            card="bba-facility-card"
                        />
                    </div>
                </section>

                {/* CURRICULUM */}
                <section className="bba-section">
                    <div className="bba-container">
                        <Heading
                            label="CURRICULUM"
                            title="What You Will Study in BBA"
                            sub="Core subjects that build a strong business foundation"
                        />
                        <CardGrid
                            items={curriculum}
                            grid="bba-careers-grid"
                            card="bba-career-card"
                        />
                    </div>
                </section>

                {/* INDUSTRY EXPOSURE */}
                <section className="bba-section bba-light-section">
                    <div className="bba-container">
                        <Heading
                            label="PRACTICAL EXPERIENCE"
                            title="Industry Exposure for BBA Students"
                        />
                        <CardGrid
                            items={exposure}
                            grid="bba-careers-grid"
                            card="bba-career-card"
                        />
                    </div>
                </section>

                {/* CAREER SCOPE */}
                <section className="bba-section">
                    <div className="bba-container">
                        <Heading
                            label="CAREER PATHS"
                            title="Career Scope After BBA"
                            sub="Explore career paths and higher education options after BBA."
                        />
                        <CardGrid
                            items={scope}
                            grid="bba-careers-grid"
                            card="bba-career-card"
                        />
                    </div>
                </section>

                {/* PLACEMENT & CAREER SUPPORT */}
                <section className="bba-section bba-light-section">
                    <div className="bba-container">
                        <Heading
                            label="CAREER DEVELOPMENT"
                            title="Career Guidance & Placement Support for BBA Students"
                        />
                        <CardGrid
                            items={support}
                            grid="bba-placement-grid"
                            card="bba-placement-card"
                        />
                    </div>
                </section>

                {/* ADMISSION */}
                <section
                    className="bba-section bba-admission-section"
                    id="admission"
                >
                    <div className="bba-container">
                        <Heading
                            label="JOIN TEMPL"
                            title="BBA Admission Details"
                            sub="Eligibility & Admission Process"
                        />

                        <div className="bba-admission-grid">
                            <article className="bba-admission-card">
                                <div className="bba-admission-icon">01</div>
                                <h3>Eligibility Criteria</h3>
                                <p>
                                    10+2 from a recognised board with the
                                    required minimum marks as per CCS University
                                    guidelines. Students from any stream can
                                    apply.
                                </p>
                            </article>

                            <article className="bba-admission-card">
                                <div className="bba-admission-icon">02</div>
                                <h3>Admission Process</h3>
                                <ul>
                                    {admissionSteps.map(([title, text]) => (
                                        <li key={title}>
                                            <strong>{title}:</strong> {text}
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        </div>

                        <div className="bba-admission-cta">
                            <div>
                                <h3>Apply Now</h3>
                                <p>
                                    Admissions are open for 2026. Apply early to
                                    secure your seat in the BBA programme.
                                </p>
                            </div>

                            <Link
                                href="/register/enquiry"
                                className="bba-primary-btn"
                            >
                                Apply Now <span>→</span>
                            </Link>
                        </div>

                        <p className="bba-admission-note">
                            Admission rules may vary as per U.P. Government /
                            CCS University.
                        </p>
                    </div>
                </section>

                {/* WHY GHAZIABAD */}
                <section className="bba-section">
                    <div className="bba-container">
                        <Heading
                            label="LOCATION"
                            title="Why Study BBA in Ghaziabad?"
                        />
                        <ReasonGrid items={whyGhaziabad} />
                    </div>
                </section>

                {/* WHY TEMPL */}
                <section className="bba-section bba-light-section">
                    <div className="bba-container">
                        <Heading
                            label="WHY TEMPL"
                            title="Why Choose TEMPL Group for BBA?"
                        />
                        <CardGrid
                            items={whyTempl}
                            grid="bba-facilities-grid"
                            card="bba-facility-card"
                        />
                    </div>
                </section>

                {/* FAQ */}
                <section className="bba-section">
                    <div className="bba-container">
                        <Heading
                            label="HAVE QUESTIONS?"
                            title="Frequently Asked Questions"
                            sub="Find answers to common questions about the BBA programme, admission, placements and careers."
                        />

                        <div className="bba-faq-list">
                            {faqs.map((faq) => (
                                <details className="bba-faq-item" key={faq.question}>
                                    <summary>
                                        <span>{faq.question}</span>
                                        <span className="bba-faq-plus">+</span>
                                    </summary>
                                    <div className="bba-faq-answer">
                                        <p>{faq.answer}</p>
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* REGISTER / FINAL CTA */}
                <section className="bba-final-cta">
                    <div className="bba-container">
                        <div className="bba-final-cta-content">
                            <div>
                                <span className="bba-label">
                                    BEGIN YOUR JOURNEY
                                </span>
                                <h2>Register for BBA Admission 2026</h2>
                                <p>
                                    Take the first step towards a successful
                                    career in business and management at TEMPL
                                    Group of Institutions.
                                </p>
                            </div>

                            <Link
                                href="/register/enquiry"
                                className="bba-primary-btn"
                            >
                                Apply Now <span>→</span>
                            </Link>
                        </div>

                        <ReasonGrid items={registerPoints} />
                    </div>
                </section>
            </main>
        </>
    );
}