import Image from "next/image";
import Link from "next/link";
import "./bba.css";

export const metadata = {
    title: "Best BBA College in Ghaziabad | BBA Course at TEMPL Group of Institutions",
    description:
        "Bachelor of Business Administration (BBA) at TEMPL Group of Institutions (IET College), Ghaziabad. CCSU affiliated, AICTE & UGC approved.",
};

const introParagraphs = [
    "At TEMPL Group of Institutions (IET College), we offer a complete Bachelor of Business Administration (BBA) program designed to prepare Learners for successful careers in business management and leadership. Widely recognized as one of the best colleges in Ghaziabad, our three-year undergraduate course combines academic excellence with practical learning, enabling Learners to develop strong managerial, analytical, communication, and decision-making skills.",
    "With a robust academic foundation, modern infrastructure, experienced faculty, and an industry-oriented curriculum, the BBA program equips Trainee with the knowledge, confidence, and professional competencies required to thrive in today's competitive corporate environment. Located in the heart of Ghaziabad and Delhi NCR, the institution provides Learners with access to valuable industry exposure, internship opportunities, and career-focused training that support long-term professional growth and success.",
    "Affiliated to CCS University Meerut, and approved by AICTE and UGC, the BBA program at IET College is designed to provide students with a balanced education in both theory and practical industry skills. This course is suitable for Learners from any stream after Class 12.",
];

const highlights = [
    "25+ Years of Excellence",
    "Established in 1998",
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
            "The BBA program is affiliated with CCS University Meerut and is approved by AICTE and UGC, ensuring high academic standards and industry relevance.",
    },
    {
        title: "Strong Industry Connections",
        description:
            "Our strategic location in Ghaziabad allows Aspirants to build strong connections with top industry professionals and business leaders.",
    },
    {
        title: "Comprehensive Curriculum",
        description:
            "Covers critical Industry areas like Leadership principles, marketing, finance, and entrepreneurship.",
    },
    {
        title: "Experienced Faculty",
        description:
            "Expert faculty members bring years of academic and industry experience to the classroom.",
    },
    {
        title: "Modern Infrastructure",
        description:
            "Features a Wi-Fi-enabled campus, multimedia classrooms, and state-of-the-art Enterprise labs.",
    },
];

const facilities = [
    {
        title: "Smart Classrooms",
        description:
            "Technology-enabled classrooms create an interactive learning environment through presentations, multimedia resources, and modern teaching methods that make business concepts easier to understand.",
    },
    {
        title: "Computer Laboratories",
        description:
            "Well-equipped computer labs provide learner with practical exposure to Industry applications, research, presentations, digital tools, and technology-based learning essential for today's corporate environment.",
    },
    {
        title: "Central Library",
        description:
            "The library offers a wide collection of academic books, journals, reference materials, and digital learning resources that help trainees strengthen their knowledge beyond classroom learning.",
    },
    {
        title: "Wi-Fi Enabled Campus",
        description:
            "High-speed internet connectivity across the campus supports online learning, research activities, project work, and access to digital educational resources.",
    },
    {
        title: "Seminar & Workshop Facilities",
        description:
            "Regular seminars, workshops, and guest lectures provide Learners with valuable industry insights while enhancing their practical knowledge and professional skills.",
    },
    {
        title: "Sports Facilities",
        description:
            "The institution encourages physical fitness and teamwork through various indoor and outdoor sports activities that contribute to the overall personality development of Aspirants.",
    },
    {
        title: "Transportation Facility",
        description:
            "Transportation services are available to provide convenient and safe commuting for students travelling from different parts of Ghaziabad and nearby areas.",
    },
    {
        title: "Student Canteen",
        description:
            "A clean and hygienic campus canteen offers refreshments and meals, providing aspirants with a comfortable place to relax and interact during breaks.",
    },
];

const skills = [
    {
        title: "Personality Development",
        description:
            "Dedicated training sessions help Candidates build self-confidence, professional behaviour, positive attitude, emotional intelligence, and interpersonal skills required for career success.",
    },
    {
        title: "Communication & Presentation Skills",
        description:
            "Candidates enhance verbal, written, Industry level communication, public speaking, and presentation skills through discussions, presentations, and practical classroom activities.",
    },
    {
        title: "Leadership & Team Management",
        description:
            "Academic projects and collaborative activities develop leadership, teamwork, decision-making, conflict resolution, and people Leadership skills.",
    },
    {
        title: "Analytical & Problem-Solving Skills",
        description:
            "Case studies, business simulations, and real-world projects help students analyse challenges, evaluate alternatives, and develop effective Enterprise solutions.",
    },
    {
        title: "Strategic & Entrepreneurial Thinking",
        description:
            "Students learn Enterprise planning, innovation, market analysis, strategic thinking, and entrepreneurial decision-making to identify future Corporate Administration opportunities.",
    },
    {
        title: "Workshops, Seminars & Guest Lectures",
        description:
            "Industry experts and academicians regularly interact with learners to provide insights into current Firm trends, managerial practices, emerging technologies, and corporate expectations.",
    },
    {
        title: "Industrial Visits & Practical Exposure",
        description:
            "Industrial visits, internships, live projects, and Corporate interactions help Candidates understand organizational operations and gain valuable real-world experience.",
    },
    {
        title: "Career Readiness & Professional Ethics",
        description:
            "Continuous career guidance, placement preparation, time management, and ethical Industry practices prepare aspirants for higher education, competitive recruitment, and long-term professional success.",
    },
];

const curriculum = [
    {
        title: "Principles of Management",
        description:
            "Learn the fundamentals of planning, organizing, staffing, directing, and controlling organizational activities for effective business operations.",
    },
    {
        title: "Business Economics",
        description:
            "Understand economic concepts, market dynamics, demand and supply analysis, and their impact on Organizational decision-making and organizational growth.",
    },
    {
        title: "Marketing Management",
        description:
            "Develop knowledge of consumer behavior, market research, branding, advertising, sales strategies, and digital marketing techniques.",
    },
    {
        title: "Financial Management",
        description:
            "Gain insights into financial planning, budgeting, investment analysis, risk handling, and corporate finance principles.",
    },
    {
        title: "Human Resource Management",
        description:
            "Learn talent acquisition, employee engagement, performance measurement, training and development, and workplace leadership strategies.",
    },
    {
        title: "Business Communication",
        description:
            "Enhance verbal, written, interpersonal, and professional communication skills essential for corporate success and leadership roles.",
    },
    {
        title: "Entrepreneurship",
        description:
            "Explore Firm planning, startup development, innovation management, and entrepreneurial strategies for building successful ventures.",
    },
    {
        title: "Digital Marketing",
        description:
            "Study modern marketing tools, social media marketing, search engine optimization (SEO), content marketing, and online brand Administration.",
    },
    {
        title: "Business Analytics",
        description:
            "Learn data-driven decision-making techniques, Enterprise intelligence tools, statistical analysis, and performance evaluation methods.",
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
        description: "Industrial visits to understand real Organizational operations.",
    },
    {
        title: "Live Business Projects",
        description:
            "Live projects to develop analytical and decision-making skills.",
    },
    {
        title: "Professional Skill Development",
        description:
            "Professional skill development programs focusing on leadership, communication, and teamwork.",
    },
    {
        title: "Internship Opportunities",
        description:
            "Internship opportunities across various Enterprise domains for practical industry exposure.",
    },
];

const scope = [
    {
        title: "Corporate Careers",
        description:
            "Build successful careers in corporate organizations, multinational companies, startups, and business enterprises.",
    },
    {
        title: "Banking & Finance",
        description:
            "Explore opportunities in banking, financial services, investment firms, insurance, and finance companies.",
    },
    {
        title: "Marketing",
        description:
            "Develop careers in marketing, digital marketing, branding, sales, and Enterprise development.",
    },
    {
        title: "Human Resources",
        description:
            "Build expertise in recruitment, talent management, employee engagement, and HR operations.",
    },
    {
        title: "Entrepreneurship",
        description:
            "Start your own Firm, manage family enterprises, or build innovative startups.",
    },
    {
        title: "Emerging Industries",
        description:
            "Career opportunities in consulting, retail, e-commerce, hospitality, logistics, and Industrial analytics.",
    },
    {
        title: "Higher Education",
        description:
            "Pursue MBA, PGDM, M.Com, and specialized management programmes for career advancement.",
    },
    {
        title: "Career Growth",
        description:
            "Develop leadership, managerial, and practical Enterprise skills for long-term professional success.",
    },
];

const support = [
    {
        title: "Career Guidance",
        description:
            "Students receive career counselling and professional guidance to help them identify suitable career paths, higher education opportunities, and industry expectations.",
    },
    {
        title: "Training & Placement Cell",
        description:
            "A dedicated Training & Placement Cell supports candidates through internship assistance, career development activities, and industry-oriented training programmes.",
    },
    {
        title: "Resume Building",
        description:
            "Students are guided to prepare professional resumes that effectively highlight their academic achievements, skills, internships, and career objectives.",
    },
    {
        title: "Mock Interviews & GD Sessions",
        description:
            "Mock interviews and group discussion sessions help students improve their confidence, communication, analytical thinking, and interview performance.",
    },
    {
        title: "Aptitude & Skill Development",
        description:
            "Regular aptitude training and skill development sessions help learners strengthen their logical reasoning, quantitative aptitude, and problem-solving abilities.",
    },
    {
        title: "Corporate Communication",
        description:
            "Special training in Firm communication, professional email writing, presentation skills, and workplace etiquette helps aspirants become industry-ready professionals.",
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
        "Exposure to a dynamic Managerial environment and emerging industries.",
    ],
    [
        "Skill Development",
        "Opportunities to build professional skills through seminars, workshops, and management events.",
    ],
    [
        "Career Opportunities",
        "Suitable destination for students planning careers in Managerial, finance, marketing, and entrepreneurship.",
    ],
];

const whyTempl = [
    {
        title: "25+ Years of Academic Excellence",
        description:
            "Since 1998, TEMPL Group has been committed to providing quality education while continuously evolving to meet modern academic and industry standards.",
    },
    {
        title: "Recognised & Accredited Institution",
        description:
            "NAAC-Accredited, AICTE approved, UGC recognised, and affiliated with CCS University, Meerut, ensuring quality education and academic credibility.",
    },
    {
        title: "Experienced & Supportive Faculty",
        description:
            "Learn from a dedicated team of experienced academicians and passionate educators who combine academic knowledge with practical teaching approaches.",
    },
    {
        title: "Innovation & Entrepreneurship Culture",
        description:
            "Candidates actively participate in entrepreneurship programmes, innovation activities, Organizational events, and Organizational competitions. Outstanding performers are recognised through initiatives such as the Best Innovator Award.",
    },
    {
        title: "Industry-Oriented Learning",
        description:
            "Industrial visits, seminars, workshops, guest lectures, internships, and practical learning activities help learner understand real Corporate environments.",
    },
    {
        title: "Student Clubs & Leadership Opportunities",
        description:
            "Students can participate in Sports Club, Media Club, Literature Club, Academic Club, Cultural Club, and Entrepreneurship & Innovation Club to develop leadership, teamwork, creativity, and communication skills.",
    },
    {
        title: "Holistic Student Development",
        description:
            "Personality development programmes, communication skills training, aptitude sessions, group discussions, mock interviews, and career guidance prepare students for future opportunities.",
    },
    {
        title: "Vibrant Campus Experience",
        description:
            "Management fests, cultural events, sports competitions, technical activities, and student engagement programmes create a dynamic campus life that supports both academic and personal growth.",
    },
    {
        title: "Prime Location in Ghaziabad",
        description:
            "Located in Ghaziabad with excellent connectivity to Delhi NCR, the campus provides aspirants with convenient access to educational resources, industries, and professional exposure.",
    },
];

const faqs = [
    {
        question:
            "Why is TEMPL Group considered one of the Top Management College in Ghaziabad for BBA?",
        answer:
            "TEMPL Group offers a comprehensive BBA program with experienced faculty, industry-oriented learning, modern infrastructure, practical training, internship opportunities, and dedicated placement support, making it a preferred choice for management education in Ghaziabad and Delhi NCR.",
    },
    {
        question: "What is the eligibility criteria for BBA admission in 2026?",
        answer:
            "Candidates who have completed 10+2 from a recognized board with the required minimum marks as per CCS University and institutional guidelines are eligible to apply for the BBA program.",
    },
    {
        question: "What is the duration of the BBA program?",
        answer:
            "The Bachelor of Business Administration (BBA) program is a three-year undergraduate degree divided into six semesters, focusing on Organizational Leadership and development.",
    },
    {
        question: "What career opportunities are available after completing a BBA?",
        answer:
            "BBA graduates can pursue careers in marketing, finance, human resource management, business development, banking, entrepreneurship, retail management, consulting, and corporate administration.",
    },
    {
        question: "Can I pursue an MBA after completing BBA?",
        answer:
            "Yes, BBA is one of the most popular pathways to an MBA and provides a strong foundation in Industrial and management concepts for advanced studies.",
    },
    {
        question: "Does the BBA program provide internship opportunities?",
        answer:
            "Yes, Eligible Aspirants are provided with internship opportunities through the Training and Placement Cell in collaboration with industry partners.",
    },
    {
        question: "What skills are developed through the BBA program?",
        answer:
            "Students develop leadership, communication, decision-making, strategic thinking, team management, problem-solving, entrepreneurial, and analytical skills essential for Industrial success.",
    },
    {
        question: "Does TEMPL Group provide placement assistance for BBA students?",
        answer:
            "Yes, the dedicated Training and Placement Cell provides career guidance, skill development programs, interview preparation, internship support, and placement opportunities with reputed organizations.",
    },
    {
        question: "Is scholarship available for BBA students?",
        answer:
            "Yes, eligible Aspirants may avail scholarship benefits based on academic performance and institutional scholarship policies applicable during the admission session.",
    },
    {
        question: "Why should students choose a BBA course after 12th?",
        answer:
            "BBA is an excellent choice for learners who aspire to build careers in Enterprise management, entrepreneurship, finance, marketing, and corporate leadership while developing industry-relevant professional skills.",
    },
];

const registerPoints = [
    ["Admission Guidance", "Get expert assistance throughout the admission process."],
    [
        "Scholarship Opportunities",
        "Learn about merit-based scholarships and financial assistance.",
    ],
    [
        "Career Counseling",
        "Explore career paths in Organizational Leadership, marketing, finance, and entrepreneurship.",
    ],
    [
        "Industry Exposure",
        "Gain access to internships, workshops, and Enterprise development activities.",
    ],
    [
        "Placement Support",
        "Benefit from dedicated training and placement assistance.",
    ],
];

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

export default function BbaPage() {
    return (
        <main className="bba-page">

            {/* TOP BANNER IMAGE */}
            <section className="bba-banner">
                <Image
                    src="/images/offer's BBA.webp"
                    alt="TEMPL Group - Best BBA College in Ghaziabad Campus and Students"
                    width={0}
                    height={0}
                    sizes="100vw"
                    priority
                />
            </section>

            {/* HERO TEXT */}
            <section className="bba-top-text">
                <div className="bba-container">
                    <span className="bba-eyebrow">TEMPL GROUP OF INSTITUTIONS</span>
                    <h1>
                        Best BBA College in Ghaziabad | Bachelor of Business
                        Administration (BBA)
                    </h1>
                    <h2>
                        BBA Program at TEMPL Group of Institutions – Shaping
                        Future Business Leaders
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
                            <span className="bba-label">BBA PROGRAM</span>
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
                            A productive learning environment plays a vital role
                            in shaping the academic journey of every management
                            student. At TEMPL Group of Institutions, BBA
                            aspirants benefit from modern infrastructure and
                            student-friendly facilities that support academic
                            excellence, practical learning, professional
                            development, and overall growth. The campus is
                            designed to create an engaging environment where
                            aspirants can learn, collaborate, and prepare for
                            successful careers in business and management.
                        </p>
                    </div>

                    <CardGrid
                        items={facilities}
                        grid="bba-facilities-grid"
                        card="bba-facility-card"
                    />

                    <div className="bba-content-width bba-bottom-text">
                        <p>
                            These modern facilities create an environment where
                            learners can focus on academic excellence, practical
                            learning, skill development, and holistic growth
                            throughout their Bachelor of Business Administration
                            (BBA) journey at TEMPL Group of Institutions.
                        </p>
                    </div>
                </div>
            </section>

            {/* SKILLS & DEVELOPMENT */}
            <section className="bba-section bba-light-section">
                <div className="bba-container">
                    <Heading
                        label="SKILL DEVELOPMENT"
                        title="Skills & Student Development Programs for BBA Students"
                    />

                    <div className="bba-content-width">
                        <p>
                            The Bachelor of Business Administration (BBA)
                            programme at TEMPL Group of Institutions (IET
                            College) is designed to develop industry-ready
                            professionals through a balanced combination of
                            academic excellence, practical exposure, and
                            personality development. Along with classroom
                            learning, learners participate in workshops,
                            seminars, industrial visits, guest lectures,
                            presentations, case studies, internships, and
                            interactive learning activities that strengthen
                            their managerial, leadership, and professional
                            competencies.
                        </p>
                        <p>
                            The programme focuses on preparing Aspirants for
                            successful careers in corporate organizations,
                            entrepreneurship, higher education, and the global
                            Enterprise environment by enhancing their technical,
                            managerial, communication, and interpersonal
                            abilities.
                        </p>
                    </div>

                    <CardGrid
                        items={skills}
                        grid="bba-placement-grid"
                        card="bba-placement-card"
                    />

                    <div className="bba-content-width bba-bottom-text">
                        <p>
                            Through this comprehensive skill development
                            approach, BBA students graduate with strong
                            managerial, analytical, leadership, communication,
                            and professional competencies. The programme equips
                            them with the confidence and practical expertise
                            required for careers in marketing, finance, human
                            resource managements, banking, consulting,
                            entrepreneurship, retail, operations, and other
                            rapidly growing Commercial sector.
                        </p>
                    </div>
                </div>
            </section>

            {/* CURRICULUM */}
            <section className="bba-section">
                <div className="bba-container">
                    <Heading
                        label="ACADEMICS"
                        title="BBA Curriculum and Subjects"
                    />

                    <div className="bba-content-width">
                        <p>
                            The Bachelor of Business Administration (BBA)
                            program at TEMPL Group is designed to provide
                            learners with a strong foundation in business
                            Administration, leadership, entrepreneurship, and
                            modern organizational practices. The curriculum
                            combines theoretical knowledge with practical
                            applications, enabling learners to develop the
                            analytical, managerial, and decision-making skills
                            required in today's competitive business
                            environment. Through a blend of classroom learning,
                            case studies, projects, presentations, and industry
                            exposure, aspirants gain a comprehensive
                            understanding of various Corporate functions and
                            Business Administration principles.
                        </p>
                    </div>

                    <CardGrid
                        items={curriculum}
                        grid="bba-careers-grid"
                        card="bba-career-card"
                    />

                    <div className="bba-content-width bba-bottom-text">
                        <p>
                            The comprehensive BBA curriculum prepares students
                            for careers in Organizational Leadership, marketing,
                            finance, human resources, entrepreneurship,
                            consulting, banking, and emerging business sectors.
                            By combining academic excellence with practical
                            learning and industry-oriented training, the program
                            equips graduates with the skills and confidence
                            required to become future business leaders and
                            successful professionals.
                        </p>
                    </div>
                </div>
            </section>

            {/* INDUSTRY EXPOSURE */}
            <section className="bba-section bba-light-section">
                <div className="bba-container">
                    <Heading
                        label="PRACTICAL LEARNING"
                        title="Industry Exposure & Practical Learning"
                    />

                    <div className="bba-content-width">
                        <p>
                            At TEMPL Group of Institutions (IET College), we
                            believe that successful Corporate professionals are
                            developed through a balance of academic knowledge and
                            practical experience. The BBA program is designed to
                            provide learners with real-world exposure, enabling
                            them to understand modern Industry practices and
                            develop the skills required to excel in today's
                            competitive corporate environment.
                        </p>
                        <p>
                            Throughout the program, candidates participate in
                            workshops, guest lectures, industrial visits, live
                            Enterprise projects, and skill development activities
                            that bridge the gap between classroom learning and
                            industry expectations. These experiences help
                            candidates build confidence, strengthen their
                            managerial abilities, and prepare for future career
                            opportunities.
                        </p>
                    </div>

                    <CardGrid
                        items={exposure}
                        grid="bba-certification-grid"
                        card="bba-certification-card"
                    />

                    <div className="bba-content-width bba-bottom-text">
                        <p>
                            This industry-focused learning approach helps BBA
                            students enhance their professional competencies,
                            improve their employability, and build a strong
                            foundation for higher education, entrepreneurship,
                            and careers in industry management, marketing,
                            finance, human resource management, and related
                            fields.
                        </p>
                        <p>
                            In addition to academic learning, Aspirants actively
                            participate in presentations, case studies,
                            Industrial simulations, group discussions, and
                            collaborative learning activities. These practical
                            experiences enhance critical thinking, creativity,
                            problem-solving abilities, and decision-making
                            skills, preparing aspirants to confidently meet the
                            evolving demands of the business world.
                        </p>
                    </div>
                </div>
            </section>

            {/* FUTURE SCOPE */}
            <section className="bba-section">
                <div className="bba-container">
                    <Heading
                        label="CAREER PATHS"
                        title="Future Scope & Career Opportunities After BBA"
                    />

                    <div className="bba-content-width">
                        <p>
                            A Bachelor of Business Administration (BBA) is one
                            of the most sought-after undergraduate Organizational
                            Leadership programmes for students aspiring to build
                            successful careers in Corporate and management. The
                            programme develops a strong foundation in marketing,
                            finance, human resource management, operations,
                            entrepreneurship, and Enterprise strategy while
                            enhancing leadership, communication, analytical, and
                            decision-making skills required in today's
                            competitive Industry environment.
                        </p>
                        <p>
                            With the rapid growth of industries such as banking,
                            finance, consulting, retail, e-commerce, information
                            technology, healthcare, hospitality, and startups,
                            BBA graduates have access to diverse career
                            opportunities. Candidates can either begin their
                            professional journey immediately after graduation or
                            pursue higher education to specialize in their
                            preferred Organizational Leadership domain.
                        </p>
                    </div>

                    <CardGrid
                        items={scope}
                        grid="bba-facilities-grid"
                        card="bba-facility-card"
                    />
                </div>
            </section>

            {/* CAREER SUPPORT */}
            <section className="bba-section bba-light-section">
                <div className="bba-container">
                    <Heading
                        label="CAREER DEVELOPMENT"
                        title="Career Support & Professional Development for BBA Students"
                    />

                    <div className="bba-content-width">
                        <p>
                            At TEMPL Group of Institutions, the Bachelor of
                            Business Administration (BBA) programme focuses on
                            preparing learners for the professional world
                            through continuous career guidance, skill
                            development, and practical learning opportunities.
                            Along with academic excellence, learners are
                            encouraged to build the confidence, communication
                            abilities, leadership qualities, and workplace
                            skills required to succeed in today's competitive
                            Corporate environment.
                        </p>
                    </div>

                    <CardGrid
                        items={support}
                        grid="bba-certification-grid"
                        card="bba-certification-card"
                    />

                    <div className="bba-content-width bba-bottom-text">
                        <p>
                            Through continuous mentoring, personality
                            development programmes, internship assistance, and
                            professional skill enhancement, TEMPL Group of
                            Institutions helps BBA students build a strong
                            foundation for successful careers in business
                            management, finance, marketing, human resource
                            Organizational Leadership, entrepreneurship, and
                            higher education.
                        </p>
                    </div>
                </div>
            </section>

            {/* ADMISSION */}
            <section className="bba-section bba-admission-section" id="admission">
                <div className="bba-container">
                    <Heading
                        label="JOIN TEMPL"
                        title="Admission Process for BBA at TEMPL Group"
                        sub="Eligibility, Admission Process & Seat Intake"
                    />

                    <div className="bba-admission-grid">
                        <article className="bba-admission-card">
                            <div className="bba-admission-icon">01</div>
                            <h3>Eligibility Criteria</h3>
                            <h4>Educational Qualification:</h4>
                            <p>10+2 from a recognized board (all streams).</p>
                            <h4>Minimum Marks:</h4>
                            <p>45% for GEN/OBC and 40% for SC/ST.</p>
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

                        <article className="bba-seats-card">
                            <span>SEAT INTAKE</span>
                            <strong>120</strong>
                            <h3>Total Seats Available</h3>
                        </article>
                    </div>

                    <div className="bba-admission-cta">
                        <div>
                            <h3>Apply Now</h3>
                            <p>
                                Limited seats available. Apply early to secure
                                your admission in the BBA program.
                            </p>
                        </div>
                        <Link href="#admission" className="bba-primary-btn">
                            Apply Now <span>→</span>
                        </Link>
                    </div>

                    <p className="bba-admission-note">
                        Note: Admission process may vary as per prevailing rules
                        and guidelines of the U.P. State Government/CCS
                        University, Meerut.
                    </p>
                </div>
            </section>

            {/* WHY GHAZIABAD */}
            <section className="bba-section">
                <div className="bba-container">
                    <Heading label="LOCATION" title="Why Study BBA in Ghaziabad?" />

                    <div className="bba-content-width">
                        <p>
                            Ghaziabad has emerged as one of the leading education
                            and business destinations in North India. Candidates
                            pursuing a Bachelor of Business Administration (BBA)
                            in Ghaziabad benefit from quality education,
                            affordable living, and access to a rapidly growing
                            industry environment. Its proximity to Delhi NCR
                            provides exposure to diverse industries and helps
                            candidates prepare for successful careers in
                            corporate and management.
                        </p>
                    </div>

                    <ReasonGrid items={whyGhaziabad} />

                    <div className="bba-content-width bba-bottom-text">
                        <p>
                            Pursuing a BBA in Ghaziabad provides learners with a
                            balanced combination of academic learning and
                            practical exposure, helping them build a strong
                            foundation for higher studies and future career
                            growth.
                        </p>
                    </div>
                </div>
            </section>

            {/* WHY TEMPL */}
            <section className="bba-section bba-light-section">
                <div className="bba-container">
                    <Heading
                        label="WHY TEMPL"
                        title="Why TEMPL Group is One of the Best BBA Colleges in Ghaziabad"
                    />

                    <div className="bba-content-width">
                        <p>
                            Choosing the right college is one of the most
                            important decisions for every Organizational
                            Leadership student. Established in 1998, TEMPL Group
                            of Institutions has built a strong reputation for
                            delivering quality education through academic
                            excellence, practical learning, industry exposure,
                            and holistic student development. With
                            NAAC-Accreditation, AICTE Approval, UGC Recognition,
                            and affiliation with CCS University, Meerut, the
                            institution provides a trusted learning environment
                            where candidates can build a strong foundation for
                            successful careers in Corporate and management.
                        </p>
                        <p>
                            The Bachelor of Business Administration programme is
                            designed to go beyond classroom teaching by combining
                            modern learning methods, professional skill
                            development, entrepreneurship initiatives,
                            innovation-driven activities, industrial exposure,
                            and student engagement programmes. This
                            comprehensive learning approach helps learners become
                            confident, responsible, and industry-ready
                            professionals.
                        </p>
                    </div>

                    <CardGrid
                        items={whyTempl}
                        grid="bba-careers-grid"
                        card="bba-career-card"
                    />

                    <div className="bba-content-width bba-bottom-text">
                        <p>
                            Through its student-centric learning environment,
                            industry-oriented curriculum, modern infrastructure,
                            innovation-driven culture, and continuous focus on
                            professional development, TEMPL Group of Institutions
                            provides an excellent platform for learners aspiring
                            to build successful careers in Corporate and
                            management. These strengths make it one of the
                            preferred choices for candidates looking to pursue a
                            Bachelor of Business Administration (BBA) in
                            Ghaziabad.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="bba-section">
                <div className="bba-container">
                    <Heading
                        label="HAVE QUESTIONS?"
                        title="Frequently Asked Questions (FAQs)"
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

            {/* REGISTER */}
            <section className="bba-section bba-light-section">
                <div className="bba-container">
                    <Heading
                        label="ENROLL TODAY"
                        title="Register for BBA Admission 2026"
                    />

                    <div className="bba-content-width">
                        <p>
                            Take the first step toward a successful career in
                            business administration by enrolling in the Bachelor
                            of Business Administration (BBA) program at TEMPL
                            Group. Designed for ambitious students seeking
                            leadership, management, and entrepreneurial skills,
                            the program provides industry-oriented education,
                            practical exposure, internship opportunities, and
                            placement support to help candidates excel in
                            today's competitive Corporate world.
                        </p>
                        <p>
                            Students interested in pursuing a BBA degree can
                            register now to receive personalized admission
                            guidance, course information, scholarship details,
                            eligibility requirements, fee structure, and career
                            counseling support from our admissions team. Whether
                            your goal is to build a corporate career, start your
                            own Firm, or pursue higher studies such as an MBA,
                            our BBA program provides the foundation for long-term
                            professional success.
                        </p>
                    </div>

                    <ReasonGrid items={registerPoints} />
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="bba-final-cta">
                <div className="bba-container bba-final-cta-content">
                    <div>
                        <span className="bba-label">BEGIN YOUR JOURNEY</span>
                        <h2>Become a Future Business Leader</h2>
                        <p>
                            Join one of the leading Institutions for management
                            education in Ghaziabad and begin your journey toward
                            becoming a future business leader.
                        </p>
                    </div>

                    <Link href="#admission" className="bba-primary-btn">
                        Apply Now <span>→</span>
                    </Link>
                </div>
            </section>

        </main>
    );
}