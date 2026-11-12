import Image from "next/image";
import Link from "next/link";
import "./dep-computer.css";

// ================= DEPARTMENT HIGHLIGHTS =================

const departmentHighlights = [
    {
        title: "About IET College",
        description:
            "Institute for Education and Technical Sciences (IET College), part of the TEMPL Group of Institutions, is a reputed institution established in 1999 in Ghaziabad, focused on quality technical and professional education.",
        icon: "🏛️",
    },
    {
        title: "Computer Science Department",
        description:
            "Offers a strong academic foundation in Computer Science with a focus on industry-oriented and practical learning for IT career readiness.",
        icon: "💻",
    },
    {
        title: "BCA Program Highlights",
        description:
            "Comprehensive curriculum covering programming, software development, database management, web technologies, artificial intelligence, cloud computing, and emerging IT trends.",
        icon: "📚",
    },
    {
        title: "Practical Learning Approach",
        description:
            "Emphasis on project-based learning, modern computer labs, and hands-on technical training to bridge the gap between theory and industry requirements.",
        icon: "⚙️",
    },
    {
        title: "Skill Development",
        description:
            "Focus on problem-solving, innovation, and technical expertise to prepare students for real-world IT challenges.",
        icon: "🚀",
    },
    {
        title: "Experienced Faculty",
        description:
            "Supported by qualified faculty members and advanced computer laboratories for effective learning and skill enhancement.",
        icon: "👨‍🏫",
    },
    {
        title: "Career-Oriented Education",
        description:
            "Designed to prepare students for opportunities in leading IT industries and technology-driven organizations.",
        icon: "🎯",
    },
    {
        title: "Industry Relevance",
        description:
            "Curriculum aligned with current IT industry demands, ensuring students are job-ready for the evolving digital economy.",
        icon: "🌐",
    },
    {
        title: "Location Advantage",
        description:
            "Strategically located in Ghaziabad, serving students from Ghaziabad and Delhi NCR seeking quality computer science education.",
        icon: "📍",
    },
    {
        title: "Institution Vision",
        description:
            "To deliver excellence in technical education and produce skilled, confident, and future-ready IT professionals.",
        icon: "🌟",
    },
];


// ================= BCA PROGRAM FEATURES =================

const programFeatures = [
    {
        title: "AICTE and UGC Approved",
        description:
            "Affiliated with CCS University Meerut, subject to applicable institutional and regulatory approvals.",
    },
    {
        title: "Cutting-edge Infrastructure",
        description:
            "State-of-the-art computer labs, high-speed internet, and advanced software tools.",
    },
    {
        title: "Industry-Aligned Curriculum",
        description:
            "Updated curriculum covering programming languages like Java, C++, Python, and more.",
    },
    {
        title: "Experienced Faculty",
        description:
            "Qualified faculty blending academic knowledge and industry expertise.",
    },
    {
        title: "Hands-on Learning",
        description:
            "Emphasis on live projects, coding sessions, practical assignments, and internship opportunities.",
    },
    {
        title: "Placement Assistance",
        description:
            "Dedicated training and placement support through aptitude training, interview preparation, and resume-building sessions.",
    },
    {
        title: "Project-Based Learning",
        description:
            "Real-world projects and practical assignments strengthen software development and problem-solving skills.",
    },
    {
        title: "Emerging Technologies",
        description:
            "Exposure to Artificial Intelligence, Machine Learning, Cloud Computing, Cybersecurity, and Data Analytics.",
    },
];


// ================= WHY CHOOSE BCA =================

const reasons = [
    "AICTE & UGC Recognition",
    "Experienced and Industry-Connected Faculty",
    "Focus on Problem-Solving & Logical Thinking",
    "Hands-on Experience and Internships",
    "AI and Industry-Relevant Curriculum",
    "Placement Assistance and Career Support",
    "Modern Computer Laboratories",
    "Project-Based Learning",
    "Career-Focused Training",
];


// ================= FACILITIES =================

const facilities = [
    {
        title: "Ultramodern Computer Labs",
        description:
            "Latest hardware and software for programming, coding, and development.",
        icon: "💻",
    },
    {
        title: "Wi-Fi Enabled Campus",
        description:
            "Access global learning resources and digital educational materials.",
        icon: "📶",
    },
    {
        title: "Interactive Classrooms",
        description:
            "Smart boards and digital tools for engaging learning experiences.",
        icon: "🏫",
    },
    {
        title: "Solar-Powered Green Campus",
        description:
            "Eco-friendly infrastructure and sustainable campus practices.",
        icon: "🌱",
    },
    {
        title: "Library & E-Library",
        description:
            "Extensive learning resources covering programming, cybersecurity, and AI.",
        icon: "📖",
    },
    {
        title: "Sports & Recreation",
        description:
            "Sports and recreational activities promoting physical and mental well-being.",
        icon: "⚽",
    },
];


// ================= ADMISSION STEPS =================

const admissionSteps = [
    {
        number: "01",
        title: "Application Submission",
        description:
            "Fill out the online application form or submit it directly at the campus.",
    },
    {
        number: "02",
        title: "Merit-Based Selection",
        description:
            "Candidates are considered according to their academic performance and applicable admission criteria.",
    },
    {
        number: "03",
        title: "Document Verification",
        description:
            "Shortlisted candidates complete document verification and counseling.",
    },
    {
        number: "04",
        title: "Fee Payment",
        description:
            "Complete the admission process by paying the prescribed fees.",
    },
];


// ================= FAQ DATA =================

const faqs = [
    {
        question:
            "Why is IET College considered a good choice for BCA in Ghaziabad?",
        answer:
            "IET College, under the TEMPL Group of Institutions, offers an industry-focused BCA program supported by experienced faculty, modern computer labs, practical learning opportunities, and placement assistance.",
    },
    {
        question: "What is the eligibility criteria for BCA admission?",
        answer:
            "Candidates must have completed 10+2 or an equivalent examination from a recognized board. Admission eligibility is subject to university and institutional guidelines applicable at the time of admission.",
    },
    {
        question: "What is the duration of the BCA program?",
        answer:
            "The Bachelor of Computer Applications (BCA) program is an undergraduate degree course. Its duration and semester structure follow the applicable university regulations.",
    },
    {
        question: "What subjects are covered in the BCA curriculum?",
        answer:
            "The curriculum covers programming languages, database management systems, web development, computer networks, software engineering, cloud computing, artificial intelligence, and other emerging technologies.",
    },
    {
        question: "Does the BCA program include practical training?",
        answer:
            "Yes. Students gain hands-on experience through computer laboratory sessions, coding assignments, projects, workshops, and internship opportunities.",
    },
    {
        question: "What career opportunities are available after BCA?",
        answer:
            "BCA graduates can pursue careers as Software Developers, Web Developers, Data Analysts, System Administrators, Cybersecurity Professionals, Technical Support Engineers, and IT Consultants.",
    },
    {
        question: "Does IET College provide placement assistance?",
        answer:
            "Yes. The Training and Placement Cell offers career guidance, aptitude training, interview preparation, resume-building support, and internship opportunities.",
    },
    {
        question: "Are modern computer laboratories available?",
        answer:
            "The Department of Computer Science provides access to computer laboratories, internet facilities, digital learning resources, and software tools for practical learning.",
    },
    {
        question: "Can BCA students pursue higher education?",
        answer:
            "Yes. Graduates can pursue MCA, MBA, postgraduate diploma programs, professional certifications, and specialized technology courses.",
    },
    {
        question: "How can students apply for BCA admission?",
        answer:
            "Students can apply through the official admission process by submitting the application form and required documents and completing the prescribed counseling and verification procedures.",
    },
];


// ================= MAIN PAGE =================

export default function ComputerSciencePage() {

    return (

        <main className="page">

            {/* ================= HERO IMAGE ================= */}

            <section className="hero">

                <Image
                    src="https://www.templgroup.in/contentImg/department_of_computer_application.webp"
                    alt="Department of Computer Science at IET College"
                    fill
                    priority
                    unoptimized
                    sizes="100vw"
                    className="heroImage"
                />

            </section>


            {/* ================= INTRODUCTION ================= */}

            <section className="introSection">

                <div className="container">

                    <div className="sectionLabel">
                        WELCOME TO IET COLLEGE
                    </div>

                    <h1 className="mainTitle">
                        Department of Computer Science
                    </h1>

                    <h2 className="subTitle">
                        Best BCA College in Ghaziabad
                    </h2>

                    <p className="groupText">
                        Under the esteemed aegis of TEMPL Group of Institutions
                    </p>

                    <div className="introContent">

                        <div className="introText">

                            <h3>
                                The Gateway to Your Tech Career
                            </h3>

                            <p>
                                Welcome to the Department of Computer Science
                                at IET College, where technology meets
                                innovation and education builds successful
                                careers.
                            </p>

                            <p>
                                As a part of the TEMPL Group of Institutions,
                                IET College has been delivering quality
                                education and technological learning since
                                1999. Located in Ghaziabad, the college has
                                earned a reputation for academic excellence
                                and industry-focused education.
                            </p>

                            <p>
                                The Department of Computer Science offers a
                                strong learning environment supported by
                                experienced faculty, modern computer
                                laboratories, and practical training
                                opportunities.
                            </p>

                            <p>
                                Our BCA program is designed to equip students
                                with the technical knowledge and professional
                                skills needed to succeed in the rapidly growing
                                IT industry, making it a preferred choice for
                                students across Ghaziabad and Delhi NCR.
                            </p>

                        </div>


                        <div className="introHighlight">

                            <span className="highlightIcon">
                                💡
                            </span>

                            <h3>
                                Learn. Innovate. Build.
                            </h3>

                            <p>
                                Develop technical expertise, strengthen
                                problem-solving abilities, and prepare for
                                opportunities in the modern IT industry.
                            </p>

                            <div className="highlightFooter">
                                Computer Science Department
                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= DEPARTMENT HIGHLIGHTS ================= */}

            <section className="highlightsSection">

                <div className="container">

                    <div className="sectionHeading">

                        <span>OUR DEPARTMENT</span>

                        <h2>
                            Department of Computer Science
                        </h2>

                        <p>
                            Building a strong foundation for tomorrow's
                            technology professionals.
                        </p>

                    </div>


                    <div className="highlightGrid">

                        {departmentHighlights.map((item, index) => (

                            <div
                                className="highlightCard"
                                key={index}
                            >

                                <div className="cardIcon">
                                    {item.icon}
                                </div>

                                <h3>
                                    {item.title}
                                </h3>

                                <p>
                                    {item.description}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* ================= PROGRAMS OFFERED ================= */}

            <section className="programSection">

                <div className="container">

                    <div className="sectionHeading">

                        <span>ACADEMIC PROGRAMS</span>

                        <h2>
                            Programs Offered
                        </h2>

                        <p>
                            Explore our undergraduate computer application
                            program.
                        </p>

                    </div>


                    <div className="programCard">

                        <div className="programTop">

                            <div>

                                <span className="programBadge">
                                    UNDERGRADUATE PROGRAM
                                </span>

                                <h3>
                                    Bachelor of Computer Applications (BCA)
                                </h3>

                                <p>
                                    Build your future in Information
                                    Technology, Computer Science, and
                                    digital innovation.
                                </p>

                            </div>

                            <div className="programIcon">
                                💻
                            </div>

                        </div>


                        <p className="programDescription">
                            The 3-year Bachelor of Computer Applications
                            (BCA) program is designed for students aiming
                            to build careers in Information Technology,
                            Computer Science, and digital innovation.
                            It offers a strong foundation in programming,
                            software development, web technologies,
                            database management, computer networks, and
                            emerging technologies.
                        </p>

                        <p className="programDescription">
                            Through hands-on projects, industry-oriented
                            learning, and real-world applications,
                            students develop both technical expertise
                            and problem-solving skills.
                        </p>


                        <div className="programFooter">

                            <span>
                                Duration: 3 Years
                            </span>

                            <Link
                                href="/Bca"
                                className="programButton"
                            >
                                Explore BCA Program →
                            </Link>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= BCA FEATURES ================= */}

            <section className="featuresSection">

                <div className="container">

                    <div className="sectionHeading">

                        <span>ACADEMIC EXCELLENCE</span>

                        <h2>
                            Key Features of Our BCA Program
                        </h2>

                        <p>
                            An industry-oriented learning experience
                            designed to develop future IT professionals.
                        </p>

                    </div>


                    <div className="featuresGrid">

                        {programFeatures.map((feature, index) => (

                            <div
                                className="featureItem"
                                key={index}
                            >

                                <div className="featureNumber">
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                                <div>

                                    <h3>
                                        {feature.title}
                                    </h3>

                                    <p>
                                        {feature.description}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* ================= LEGACY ================= */}

            <section className="legacySection">

                <div className="container">

                    <div className="legacyContent">

                        <div className="legacyLabel">
                            ESTABLISHED 1999
                        </div>

                        <h2>
                            Our Legacy: A Tradition of Excellence in
                            Computer Science Education
                        </h2>

                        <p>
                            Since 1999,{" "}

                            <Link
                                href="https://www.templgroup.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                TEMPL Group of Institutions
                            </Link>

                            {" "}has been committed to excellence in higher
                            education and has established strong standards
                            in the field of Information Technology and
                            Computer Science education.
                        </p>

                        <p>
                            The Department of Computer Science focuses on
                            transforming aspiring programmers into skilled
                            technology professionals by developing their
                            abilities in critical thinking, logical
                            reasoning, problem-solving, and innovation.
                        </p>

                        <p>
                            Through academic learning, practical training,
                            project-based experiences, and exposure to
                            emerging technologies, students gain the
                            technical expertise required to succeed in
                            the modern IT industry.
                        </p>

                    </div>


                    <div className="legacyStats">

                        <div>
                            <strong>1999</strong>
                            <span>Year of Establishment</span>
                        </div>

                        <div>
                            <strong>BCA</strong>
                            <span>Undergraduate Program</span>
                        </div>

                        <div>
                            <strong>IT</strong>
                            <span>Technology Education</span>
                        </div>

                    </div>

                </div>

            </section>


            {/* ================= WHY CHOOSE US ================= */}

            <section className="whySection">

                <div className="container">

                    <div className="sectionHeading">

                        <span>YOUR FUTURE STARTS HERE</span>

                        <h2>
                            Why Choose Our BCA Program?
                        </h2>

                        <p>
                            Develop the skills and confidence required
                            to succeed in the technology industry.
                        </p>

                    </div>


                    <div className="whyGrid">

                        {reasons.map((reason, index) => (

                            <div
                                className="whyItem"
                                key={index}
                            >

                                <span>✓</span>

                                <p>
                                    {reason}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* ================= FACILITIES ================= */}

            <section className="facilitiesSection">

                <div className="container">

                    <div className="sectionHeading">

                        <span>CAMPUS INFRASTRUCTURE</span>

                        <h2>
                            Facilities & Infrastructure
                        </h2>

                        <p>
                            An enriching campus environment for academic
                            and personal development.
                        </p>

                    </div>


                    <div className="facilitiesGrid">

                        {facilities.map((facility, index) => (

                            <div
                                className="facilityCard"
                                key={index}
                            >

                                <div className="facilityIcon">
                                    {facility.icon}
                                </div>

                                <h3>
                                    {facility.title}
                                </h3>

                                <p>
                                    {facility.description}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* ================= ADMISSION PROCESS ================= */}

            <section className="admissionSection">

                <div className="container">

                    <div className="sectionHeading">

                        <span>JOIN IET COLLEGE</span>

                        <h2>
                            Admission Process
                        </h2>

                        <p>
                            Take the first step toward your technology career.
                        </p>

                    </div>


                    <div className="eligibilityBox">

                        <h3>
                            BCA Admission Eligibility
                        </h3>

                        <p>
                            Candidates must have completed 12th standard
                            or an equivalent examination from a recognized
                            board. Mathematics requirements and minimum
                            marks are subject to applicable university
                            and institutional admission guidelines.
                        </p>

                    </div>


                    <div className="admissionGrid">

                        {admissionSteps.map((step, index) => (

                            <div
                                className="admissionCard"
                                key={index}
                            >

                                <span className="stepNumber">
                                    {step.number}
                                </span>

                                <h3>
                                    {step.title}
                                </h3>

                                <p>
                                    {step.description}
                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>


            {/* ================= CAREER PROSPECTS ================= */}

            <section className="careerSection">

                <div className="container">

                    <div className="careerContent">

                        <div>

                            <span className="careerLabel">
                                BUILD YOUR CAREER
                            </span>

                            <h2>
                                Career Prospects and Placement
                            </h2>

                            <p>
                                Our Training and Placement Cell provides
                                dedicated career support to help students
                                prepare for successful careers in the IT
                                industry.
                            </p>

                            <p>
                                Through placement training, aptitude
                                development, mock interviews,
                                resume-building sessions, and industry
                                interaction programs, students gain the
                                confidence and skills required for
                                professional success.
                            </p>

                            <p>
                                Graduates can explore opportunities in
                                software development, web development,
                                data analysis, network administration,
                                cybersecurity, technical support, and
                                other growing technology domains.
                            </p>

                        </div>


                        <div className="careerRoles">

                            <h3>
                                Explore Career Opportunities
                            </h3>

                            {[
                                "Software Developer",
                                "Web Developer",
                                "Data Analyst",
                                "Cybersecurity Professional",
                                "Network Administrator",
                                "Technical Support Engineer",
                                "IT Consultant",
                                "Cloud Computing Professional",
                            ].map((role, index) => (

                                <div
                                    className="roleItem"
                                    key={index}
                                >

                                    <span>✓</span>

                                    {role}

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= FAQ SECTION ================= */}

            <section className="faqSection">

                <div className="container">

                    <div className="sectionHeading">

                        <span>HAVE QUESTIONS?</span>

                        <h2>
                            Frequently Asked Questions
                        </h2>

                        <p>
                            Find answers to common questions about
                            Computer Science and the BCA program.
                        </p>

                    </div>


                    <div className="faqList">

                        {faqs.map((faq, index) => (

                            <details
                                className="faqItem"
                                key={index}
                            >

                                <summary>

                                    <span>
                                        {String(index + 1).padStart(2, "0")}.
                                        {" "}
                                        {faq.question}
                                    </span>

                                    <span className="faqIcon">
                                        +
                                    </span>

                                </summary>


                                <div className="faqAnswer">
                                    {faq.answer}
                                </div>

                            </details>

                        ))}

                    </div>

                </div>

            </section>


            {/* ================= FINAL CTA ================= */}

            <section className="ctaSection">

                <div className="container">

                    <span>
                        YOUR TECH JOURNEY BEGINS HERE
                    </span>

                    <h2>
                        Ready to Start Your Journey in Computer Science?
                    </h2>

                    <p>
                        Join the Department of Computer Science at IET
                        College and begin your journey toward becoming
                        a successful technology professional.
                    </p>


                    <div className="ctaButtons">

                        <Link
                            href="/Bca"
                            className="ctaPrimary"
                        >
                            Explore BCA Program →
                        </Link>

                        <Link
                            href="/Contact"
                            className="ctaSecondary"
                        >
                            Contact Us
                        </Link>

                    </div>

                </div>

            </section>

        </main>

    );

}