import "./computer-lab.css";

export const metadata = {
    title: "Advanced Computer Lab Facility | TEMPL Group of Institutions",
    description:
        "Explore the advanced computer lab at TEMPL Group of Institutions, featuring branded desktop PCs, 1:1 student-to-computer ratio, modern software, programming facilities and practical learning.",
    alternates: {
        canonical: "https://www.templgroup.in/Edge/computer-lab",
    },
    openGraph: {
        title: "Advanced Computer Lab | TEMPL Group of Institutions",
        description:
            "Discover modern computer lab facilities, programming infrastructure and practical learning opportunities at TEMPL Group of Institutions.",
        images: ["/contentImg/department_of_computer_science.webp"],
    },
};

const labFeatures = [
    {
        icon: "fa-solid fa-desktop",
        title: "1:1 Student-to-PC Ratio",
        description:
            "Every student gets access to an individual branded desktop computer, ensuring uninterrupted practical learning and programming practice.",
    },
    {
        icon: "fa-solid fa-microchip",
        title: "Latest Generation Desktop PCs",
        description:
            "Modern branded computers with high-performance configurations support programming, designing, data analysis and technical applications.",
    },
    {
        icon: "fa-solid fa-code",
        title: "Programming & Development Tools",
        description:
            "Students get practical exposure to programming IDEs, web development tools, database applications, design software and data analytics platforms.",
    },
    {
        icon: "fa-solid fa-chalkboard-user",
        title: "Multimedia Projection System",
        description:
            "Interactive teaching through live coding demonstrations, programming tutorials, technical presentations and collaborative learning sessions.",
    },
    {
        icon: "fa-solid fa-user-tie",
        title: "Faculty & Lab Coordinator Support",
        description:
            "Experienced faculty members and lab coordinators guide students through practical assignments, coding exercises and technical challenges.",
    },
    {
        icon: "fa-solid fa-people-group",
        title: "Collaborative Learning",
        description:
            "A comfortable lab environment encourages individual practice, teamwork, group projects and collaborative problem-solving.",
    },
];

const technologies = [
    "C",
    "C++",
    "Java",
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "SQL",
    "Database Management",
    "Web Development",
    "Data Analytics",
];

const emergingTechnologies = [
    {
        icon: "fa-solid fa-brain",
        title: "Artificial Intelligence",
    },
    {
        icon: "fa-solid fa-robot",
        title: "Machine Learning",
    },
    {
        icon: "fa-solid fa-shield-halved",
        title: "Cyber Security",
    },
    {
        icon: "fa-solid fa-chart-line",
        title: "Data Science",
    },
    {
        icon: "fa-solid fa-cloud",
        title: "Cloud Computing",
    },
    {
        icon: "fa-solid fa-laptop-code",
        title: "Software Development",
    },
];

const benefits = [
    {
        icon: "fa-solid fa-laptop",
        title: "Hands-On Learning",
        description:
            "Students gain practical experience by working directly with modern computer hardware and software.",
    },
    {
        icon: "fa-solid fa-briefcase",
        title: "Industry-Relevant Skills",
        description:
            "Exposure to current technologies helps students develop skills aligned with industry requirements.",
    },
    {
        icon: "fa-solid fa-lightbulb",
        title: "Problem-Solving Skills",
        description:
            "Programming exercises and practical assignments strengthen analytical and logical thinking.",
    },
    {
        icon: "fa-solid fa-diagram-project",
        title: "Project-Based Learning",
        description:
            "Students apply theoretical knowledge through practical projects and technical activities.",
    },
];

const keyHighlights = [
    "Individual computer access for every student",
    "Modern branded desktop computers",
    "Programming and development software",
    "Multimedia projection system",
    "Dedicated faculty and lab coordinators",
    "Annual hackathons and coding competitions",
    "Regular software and equipment updates",
    "Collaborative and individual learning spaces",
];

const faqs = [
    {
        question: "What facilities are available in the computer lab?",
        answer:
            "The computer lab features latest-generation branded desktop computers, high-speed internet connectivity, multimedia projection systems, modern software tools, ergonomic seating and dedicated faculty support.",
    },
    {
        question: "What is the student-to-computer ratio?",
        answer:
            "The institution maintains a 1:1 student-to-computer ratio, ensuring that every student has access to an individual computer for programming practice and project work.",
    },
    {
        question: "Which programming languages can students learn?",
        answer:
            "Students gain practical exposure to C, C++, Java, Python, HTML, CSS, JavaScript, SQL and other technologies relevant to modern computing.",
    },
    {
        question: "Do students receive practical programming training?",
        answer:
            "Yes. Students participate in coding exercises, laboratory sessions, project-based learning and practical assignments under the guidance of faculty members and lab coordinators.",
    },
    {
        question: "Are hackathons and coding competitions organized?",
        answer:
            "Yes. Annual hackathons, coding competitions, technical events and programming challenges encourage innovation, teamwork and problem-solving.",
    },
    {
        question: "Can students work on practical projects?",
        answer:
            "Students are encouraged to work on practical assignments and projects that help them apply theoretical concepts to real-world scenarios.",
    },
    {
        question: "Is internet access available in the computer lab?",
        answer:
            "Yes. High-speed internet access supports research, online learning, project collaboration and access to technical resources.",
    },
    {
        question: "How does the computer lab support career preparation?",
        answer:
            "Practical programming, project work, technical assignments and exposure to emerging technologies help students strengthen their technical skills for internships and IT career opportunities.",
    },
];

function SectionHeading({ label, title, highlight }) {
    return (
        <div className="cl-heading">
            <span>{label}</span>
            <h2>
                {title} <strong>{highlight}</strong>
            </h2>
            <div className="cl-heading-line"></div>
        </div>
    );
}

export default function ComputerLabPage() {
    return (
        <main className="computer-lab-page">

            {/* HERO SECTION */}
            <section className="cl-hero">
                <img
                    src="/images/department_of_computer_science.webp"
                    alt="Advanced Computer Lab at TEMPL Group of Institutions"
                    className="cl-hero-image"
                />
            </section>

            {/* INTRODUCTION */}
            <section className="cl-intro cl-container">

                <SectionHeading
                    label="TECHNOLOGY & INNOVATION"
                    title="Advanced Computer Lab Facility at"
                    highlight="TEMPL"
                />

                <p>
                    At TEMPL Group of Institutions, we believe in providing
                    students with modern infrastructure that supports their
                    academic and technical growth. Our advanced computer lab
                    offers a practical learning environment equipped with
                    branded desktop computers, modern software and dedicated
                    faculty support.
                </p>

                <p>
                    More than just a computer laboratory, it is a space where
                    students explore programming, develop technical skills,
                    collaborate on projects and turn innovative ideas into
                    practical solutions.
                </p>

                <div className="cl-intro-highlight">
                    <div>
                        <i className="fa-solid fa-computer"></i>
                    </div>
                    <div>
                        <h3>1:1 Student-to-PC Ratio</h3>
                        <p>
                            Individual computer access for practical
                            learning and programming.
                        </p>
                    </div>
                </div>

            </section>

            {/* SPACIOUS LAB */}
            <section className="cl-infrastructure">

                <div className="cl-container cl-infrastructure-grid">

                    <div>
                        <span className="cl-subtitle">
                            MODERN INFRASTRUCTURE
                        </span>

                        <h2>
                            Spacious & State-of-the-Art
                            <strong> Computer Lab</strong>
                        </h2>

                        <p>
                            Our computer lab provides a spacious and
                            comfortable working environment designed to
                            support different academic and technical
                            requirements.
                        </p>

                        <p>
                            With individual computer access, ergonomic
                            seating and ample desk space, students can
                            comfortably work on coding assignments,
                            software applications and collaborative
                            projects.
                        </p>

                        <div className="cl-check-list">
                            <div>
                                <i className="fa-solid fa-circle-check"></i>
                                Individual computer access
                            </div>
                            <div>
                                <i className="fa-solid fa-circle-check"></i>
                                Comfortable ergonomic seating
                            </div>
                            <div>
                                <i className="fa-solid fa-circle-check"></i>
                                Individual and collaborative learning
                            </div>
                            <div>
                                <i className="fa-solid fa-circle-check"></i>
                                Modern hardware and software
                            </div>
                        </div>
                    </div>

                    <div className="cl-infrastructure-card">
                        <i className="fa-solid fa-microchip"></i>
                        <h3>Technology That Supports Learning</h3>
                        <p>
                            Creating opportunities for practical
                            exploration, innovation and technical growth.
                        </p>
                    </div>

                </div>

            </section>

            {/* FEATURES */}
            <section className="cl-features cl-container">

                <SectionHeading
                    label="OUR COMPUTER LAB"
                    title="Features & Facilities"
                    highlight=""
                />

                <p className="cl-section-desc">
                    Our computer laboratory combines modern computing
                    infrastructure with expert guidance to provide
                    students with an engaging practical learning experience.
                </p>

                <div className="cl-feature-grid">

                    {labFeatures.map((item, index) => (
                        <div className="cl-feature-card" key={index}>

                            <div className="cl-feature-icon">
                                <i className={item.icon}></i>
                            </div>

                            <h3>{item.title}</h3>

                            <p>{item.description}</p>

                        </div>
                    ))}

                </div>

            </section>

            {/* HACKATHONS */}
            <section className="cl-hackathon">

                <div className="cl-container cl-hackathon-grid">

                    <div className="cl-hackathon-icon">
                        <i className="fa-solid fa-code"></i>
                    </div>

                    <div className="cl-hackathon-content">

                        <span className="cl-subtitle">
                            INNOVATION & CREATIVITY
                        </span>

                        <h2>
                            Annual Hackathons: Fostering
                            <strong> Programming Excellence</strong>
                        </h2>

                        <p>
                            TEMPL Group of Institutions organizes annual
                            hackathons that encourage students to showcase
                            their creativity, programming knowledge and
                            problem-solving abilities.
                        </p>

                        <p>
                            These events provide opportunities to work
                            collaboratively, develop software and web
                            applications, explore innovative ideas and
                            solve practical challenges within a competitive
                            environment.
                        </p>

                        <div className="cl-hackathon-tags">
                            <span>Teamwork</span>
                            <span>Innovation</span>
                            <span>Coding</span>
                            <span>Problem Solving</span>
                        </div>

                    </div>

                </div>

            </section>

            {/* PROGRAMMING LANGUAGES */}
            <section className="cl-technologies cl-container">

                <SectionHeading
                    label="TECHNICAL SKILL DEVELOPMENT"
                    title="Programming Languages &"
                    highlight="Technologies"
                />

                <p className="cl-section-desc">
                    Students gain practical exposure to programming
                    languages, database technologies and modern
                    development tools.
                </p>

                <div className="cl-tech-list">

                    {technologies.map((tech, index) => (
                        <div className="cl-tech-item" key={index}>
                            <i className="fa-solid fa-code"></i>
                            <span>{tech}</span>
                        </div>
                    ))}

                </div>

            </section>

            {/* EMERGING TECHNOLOGIES */}
            <section className="cl-emerging">

                <div className="cl-container">

                    <SectionHeading
                        label="FUTURE-READY LEARNING"
                        title="Exposure to Emerging"
                        highlight="Technologies"
                    />

                    <p className="cl-section-desc">
                        Our computer lab supports learning and exploration
                        across emerging technology fields, helping students
                        understand modern computing environments.
                    </p>

                    <div className="cl-emerging-grid">

                        {emergingTechnologies.map((item, index) => (
                            <div className="cl-emerging-card" key={index}>
                                <i className={item.icon}></i>
                                <h3>{item.title}</h3>
                            </div>
                        ))}

                    </div>

                </div>

            </section>

            {/* BENEFITS */}
            <section className="cl-benefits cl-container">

                <SectionHeading
                    label="LEARNING OUTCOMES"
                    title="Benefits of Learning in an"
                    highlight="Advanced Computer Lab"
                />

                <div className="cl-benefit-grid">

                    {benefits.map((item, index) => (
                        <div className="cl-benefit-card" key={index}>

                            <i className={item.icon}></i>

                            <h3>{item.title}</h3>

                            <p>{item.description}</p>

                        </div>
                    ))}

                </div>

            </section>

            {/* KEY HIGHLIGHTS */}
            <section className="cl-highlights">

                <div className="cl-container">

                    <SectionHeading
                        label="WHY TEMPL"
                        title="Key Highlights of Our"
                        highlight="Computer Lab"
                    />

                    <div className="cl-highlight-grid">

                        {keyHighlights.map((item, index) => (
                            <div className="cl-highlight-item" key={index}>
                                <i className="fa-solid fa-check-circle"></i>
                                <span>{item}</span>
                            </div>
                        ))}

                    </div>

                </div>

            </section>

            {/* WHY CHOOSE TEMPL */}
            <section className="cl-why cl-container">

                <SectionHeading
                    label="YOUR TECHNICAL LEARNING ADVANTAGE"
                    title="Why Choose TEMPL for"
                    highlight="IT Excellence?"
                />

                <div className="cl-why-grid">

                    <div>
                        <i className="fa-solid fa-server"></i>
                        <h3>Advanced Infrastructure</h3>
                        <p>
                            Modern computing resources support programming,
                            practical assignments and project development.
                        </p>
                    </div>

                    <div>
                        <i className="fa-solid fa-user-graduate"></i>
                        <h3>Expert Guidance</h3>
                        <p>
                            Faculty members and lab coordinators help
                            students strengthen their practical knowledge.
                        </p>
                    </div>

                    <div>
                        <i className="fa-solid fa-lightbulb"></i>
                        <h3>Innovation & Skill Development</h3>
                        <p>
                            Hackathons and coding challenges encourage
                            creative thinking and technical innovation.
                        </p>
                    </div>

                    <div>
                        <i className="fa-solid fa-rocket"></i>
                        <h3>Industry-Ready Skills</h3>
                        <p>
                            Exposure to programming and emerging
                            technologies helps students prepare for
                            future IT opportunities.
                        </p>
                    </div>

                </div>

            </section>

            {/* FAQ */}
            <section className="cl-faq">

                <div className="cl-container">

                    <SectionHeading
                        label="COMMON QUESTIONS"
                        title="Frequently Asked"
                        highlight="Questions"
                    />

                    <div className="cl-faq-list">

                        {faqs.map((faq, index) => (
                            <details className="cl-faq-item" key={index}>
                                <summary>
                                    <span>{faq.question}</span>
                                    <i className="fa-solid fa-plus"></i>
                                </summary>

                                <p>{faq.answer}</p>
                            </details>
                        ))}

                    </div>

                </div>

            </section>

            {/* CONCLUSION */}
            <section className="cl-conclusion">

                <div className="cl-container">

                    <span>LEARN • INNOVATE • CREATE</span>

                    <h2>
                        Build Your Future with
                        Technology & Practical Learning
                    </h2>

                    <p>
                        At TEMPL Group of Institutions, our advanced
                        computer lab is more than just a learning space.
                        It is an environment where students develop
                        programming skills, explore modern technologies,
                        collaborate on projects and prepare for future
                        opportunities in the IT industry.
                    </p>

                    <p>
                        Take the next step towards your academic and
                        professional goals with an environment that
                        encourages technical excellence and innovation.
                    </p>

                </div>

            </section>

        </main>
    );
}