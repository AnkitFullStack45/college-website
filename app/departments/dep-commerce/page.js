import Image from "next/image";
import "./dep-commerce.css";

export const metadata = {
    title: "Department of Commerce | B.Com College in Ghaziabad | IET College",
    description:
        "Explore the B.Com program at IET College, Ghaziabad. Learn about eligibility, admission process, faculty, infrastructure, career opportunities, and commerce education.",
};

const highlights = [
    {
        number: "03",
        label: "Years of Academic Learning",
        icon: "🎓",
    },
    {
        number: "120",
        label: "Total Seat Intake",
        icon: "📚",
    },
    {
        number: "10+2",
        label: "Minimum Qualification",
        icon: "🏆",
    },
    {
        number: "CCSU",
        label: "University Affiliation",
        icon: "🏛️",
    },
];

const programFeatures = [
    {
        icon: "📊",
        title: "Industry-Relevant Curriculum",
        description:
            "Aligned with the latest NEP curriculum from CCS University, covering Accounting, Finance, Business Law, Economics, and Taxation.",
    },
    {
        icon: "💼",
        title: "Practical Exposure",
        description:
            "Industry visits, internships, live projects, and guest lectures from industry experts help students understand real business environments.",
    },
    {
        icon: "👨‍🏫",
        title: "Experienced Faculty",
        description:
            "Learn from qualified faculty members with strong academic knowledge and substantial industry experience.",
    },
    {
        icon: "💰",
        title: "Affordable Education",
        description:
            "Access quality commerce education, modern infrastructure, and academic resources through an affordable fee structure.",
    },
    {
        icon: "🚀",
        title: "Career Development",
        description:
            "Dedicated training programs, resume-building workshops, mock interviews, and placement assistance prepare students for professional careers.",
    },
    {
        icon: "💻",
        title: "Modern Learning Resources",
        description:
            "Access digital libraries, e-learning platforms, research materials, and technology-enabled classrooms.",
    },
    {
        icon: "🌟",
        title: "Skill Enhancement",
        description:
            "Regular workshops, seminars, personality development sessions, communication training, and entrepreneurship programs.",
    },
];

const infrastructure = [
    {
        icon: "🖥️",
        title: "Interactive Classrooms",
        description:
            "Smart boards, interactive displays, and audio-visual systems support an engaging classroom learning experience.",
    },
    {
        icon: "🔬",
        title: "Well-Equipped Computer Labs",
        description:
            "Computer labs and research facilities with high-speed internet and modern software support practical learning.",
    },
    {
        icon: "📶",
        title: "Wi-Fi Enabled Campus",
        description:
            "Access online resources, e-books, journals, and study materials across the campus.",
    },
    {
        icon: "📖",
        title: "Extensive Library",
        description:
            "A collection of books, journals, and digital resources covering commerce, business, accounting, and finance.",
    },
    {
        icon: "🎤",
        title: "Auditoriums and Seminar Halls",
        description:
            "Dedicated spaces for guest lectures, industry seminars, academic activities, and cultural events.",
    },
    {
        icon: "📈",
        title: "Commerce Learning Environment",
        description:
            "A student-friendly environment encouraging collaborative learning, case studies, group discussions, and business activities.",
    },
    {
        icon: "💡",
        title: "Digital Learning Facilities",
        description:
            "Modern computer systems, accounting software, digital resources, and online learning tools develop practical and technical skills.",
    },
    {
        icon: "🌳",
        title: "Safe and Green Campus",
        description:
            "A secure, well-maintained, and eco-friendly campus environment that supports academic and personal growth.",
    },
];

const studentDevelopment = [
    {
        icon: "🏀",
        title: "Sports and Recreation",
        description:
            "Sports facilities including basketball courts, cricket grounds, and indoor gyms.",
    },
    {
        icon: "🎯",
        title: "Skill Development Workshops",
        description:
            "Workshops focused on communication, leadership, entrepreneurship, and personality development.",
    },
    {
        icon: "🧭",
        title: "Career Guidance",
        description:
            "Career counselling, mentorship, and professional development support.",
    },
    {
        icon: "🤝",
        title: "Industry Interaction",
        description:
            "Guest lectures, seminars, and expert sessions from industry professionals.",
    },
    {
        icon: "👥",
        title: "Leadership Opportunities",
        description:
            "Student clubs, team activities, and event management experiences.",
    },
    {
        icon: "🗣️",
        title: "Soft Skills Training",
        description:
            "Programs focused on communication, teamwork, and workplace readiness.",
    },
    {
        icon: "🎭",
        title: "Cultural Activities",
        description:
            "Participation in cultural events, competitions, and extracurricular programs.",
    },
];

const reasons = [
    "Leading destination for B.Com education in Ghaziabad, Muradnagar, and Modinagar.",
    "B.Com program affiliated with Chaudhary Charan Singh University (CCSU), Meerut.",
    "Qualified faculty members with academic and industry expertise.",
    "Opportunities for internships, industrial visits, workshops, and expert sessions.",
    "Career guidance, skill development programs, and placement assistance.",
    "Modern classrooms, computer labs, library resources, and Wi-Fi-enabled campus.",
    "Quality commerce education with an affordable fee structure and scholarship opportunities.",
    "Regular training in communication, leadership, entrepreneurship, and professional development.",
    "Career-oriented learning for accounting, banking, finance, taxation, and business management.",
];

const careerOptions = [
    "Accountant",
    "Financial Analyst",
    "Banking Professional",
    "Tax Consultant",
    "Auditor",
    "Business Executive",
    "Insurance Professional",
    "Entrepreneur",
];

const higherStudies = ["MBA", "CA", "CS", "CMA"];

const admissionSteps = [
    {
        number: "01",
        title: "Online Application",
        description:
            "Fill out the online application form available on the college website.",
    },
    {
        number: "02",
        title: "Merit-Based Admission",
        description:
            "Admission is considered on the basis of merit in the 12th standard examination.",
    },
    {
        number: "03",
        title: "Counselling & Verification",
        description:
            "Shortlisted candidates are called for counselling and document verification.",
    },
    {
        number: "04",
        title: "Fee Payment",
        description:
            "After verification, candidates can pay the prescribed fees to confirm admission.",
    },
];

const faqs = [
    {
        question:
            "Why should I choose IET College for B.Com in Ghaziabad?",
        answer:
            "IET College offers a CCS University-affiliated B.Com program with experienced faculty, modern infrastructure, industry exposure, skill development programs, and placement support.",
    },
    {
        question:
            "Is the B.Com program at IET College affiliated with CCS University?",
        answer:
            "Yes, the Bachelor of Commerce (B.Com) program at IET College is affiliated with Chaudhary Charan Singh (CCS) University, Meerut.",
    },
    {
        question:
            "What is the eligibility criteria for B.Com admission?",
        answer:
            "Students who have completed 10+2 or an equivalent examination from a recognized board are eligible to apply, subject to university and college guidelines.",
    },
    {
        question:
            "What career opportunities are available after B.Com?",
        answer:
            "Graduates can pursue careers in accounting, banking, finance, taxation, auditing, insurance, business management, and government sectors. They can also pursue higher studies such as MBA, CA, CS, and CMA.",
    },
    {
        question:
            "Does IET College provide placement assistance?",
        answer:
            "Yes, IET College provides placement support through career counselling, resume-building workshops, interview preparation, internships, and industry interaction programs.",
    },
    {
        question:
            "What facilities are available for B.Com students?",
        answer:
            "Facilities include smart classrooms, computer labs, a well-stocked library, Wi-Fi-enabled campus facilities, seminar halls, sports facilities, and modern learning resources.",
    },
    {
        question:
            "Are internships and industry exposure provided?",
        answer:
            "Students benefit from internships, industry visits, guest lectures, workshops, and seminars that help connect academic learning with practical business knowledge.",
    },
    {
        question:
            "Are scholarships available for B.Com students?",
        answer:
            "Eligible students may avail scholarship opportunities based on academic performance and institutional guidelines announced during the admission process.",
    },
    {
        question:
            "Why is IET College considered a good B.Com college in Ghaziabad?",
        answer:
            "IET College combines quality education, experienced faculty, affordable fees, industry-oriented learning, modern infrastructure, and student-focused development programs.",
    },
    {
        question:
            "How can I apply for B.Com admission at IET College?",
        answer:
            "Eligible candidates can apply by completing the college application process and submitting the necessary academic documents.",
    },
];

export default function CommercePage() {
    return (
        <main className="commerce-page">

            {/* HERO IMAGE */}
            <section className="commerce-hero">
                <Image
                    className="commerce-hero-image"
                    src="/images/department_of_commerce.webp"
                    alt="Department of Commerce at IET College, Ghaziabad"
                    fill
                    priority
                    unoptimized
                    sizes="100vw"
                />
            </section>


            {/* INTRODUCTION */}
            <section className="commerce-section commerce-intro">
                <div className="commerce-container">

                    <div className="commerce-intro-card glass-card">
                        <span className="section-tag">
                            Department of Commerce
                        </span>

                        <h1>
                            Department of Commerce at{" "}
                            <span>IET College, Ghaziabad</span>
                        </h1>

                        <h2>
                            Building Business Knowledge and Financial
                            Expertise
                        </h2>

                        <p>
                            Welcome to TEMPL Group of Institutions, where
                            academic excellence meets career-focused
                            education. Under Institute for Education and
                            Technical Sciences (IET College), we offer a
                            Bachelor of Commerce (B.Com) program designed
                            to prepare students for careers in business,
                            finance, accounting, banking, taxation, and
                            entrepreneurship.
                        </p>

                        <p>
                            The Department of Commerce focuses on
                            developing analytical skills, professional
                            ethics, and practical business knowledge
                            through industry-oriented learning and
                            experienced faculty support.
                        </p>

                        <div className="commerce-intro-buttons">
                            <a href="#admission" className="commerce-btn primary-btn">
                                Explore Admission
                            </a>

                            <a href="#program" className="commerce-btn secondary-btn">
                                Explore B.Com Program
                            </a>
                        </div>
                    </div>

                </div>
            </section>


            {/* PROGRAM OVERVIEW */}
            <section className="commerce-section" id="program">
                <div className="commerce-container">

                    <div className="section-heading">
                        <span className="section-tag">Program Overview</span>

                        <h2>
                            Bachelor of <span>Commerce (B.Com)</span>
                        </h2>

                        <p>
                            A three-year undergraduate program designed
                            to build a strong foundation in commerce and
                            business management.
                        </p>
                    </div>

                    <div className="program-overview glass-card">

                        <div className="program-overview-content">
                            <h3>
                                Learn. Analyse. Grow. Lead.
                            </h3>

                            <p>
                                The 3-year Bachelor of Commerce program at
                                IET College, affiliated with CCSU Meerut,
                                provides a strong foundation in commerce,
                                accounting, finance, taxation, business
                                management, and economics.
                            </p>

                            <p>
                                Designed for 10+2 graduates, the program
                                prepares students for careers in banking,
                                finance, corporate sectors, entrepreneurship,
                                and government services, along with higher
                                studies such as MBA, CA, CS, and CMA.
                            </p>

                            <p>
                                The curriculum focuses on practical learning,
                                skill development, and academic support to
                                help students understand the changing
                                business environment.
                            </p>
                        </div>

                        <div className="program-info-box">
                            <div>
                                <span>Program</span>
                                <strong>Bachelor of Commerce</strong>
                            </div>

                            <div>
                                <span>Duration</span>
                                <strong>3 Years</strong>
                            </div>

                            <div>
                                <span>Affiliation</span>
                                <strong>CCSU Meerut</strong>
                            </div>

                            <div>
                                <span>Seat Intake</span>
                                <strong>120 Seats</strong>
                            </div>

                            <div>
                                <span>Eligibility</span>
                                <strong>10+2 Passed</strong>
                            </div>
                        </div>

                    </div>

                </div>
            </section>


            {/* HIGHLIGHTS */}
            <section className="commerce-section highlights-section">
                <div className="commerce-container">

                    <div className="highlight-grid">
                        {highlights.map((item, index) => (
                            <div
                                className="highlight-card glass-card"
                                key={index}
                            >
                                <div className="highlight-icon">
                                    {item.icon}
                                </div>

                                <h3>{item.number}</h3>
                                <p>{item.label}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>


            {/* KEY FEATURES */}
            <section className="commerce-section">
                <div className="commerce-container">

                    <div className="section-heading">
                        <span className="section-tag">Academic Excellence</span>

                        <h2>
                            Key Features of Our <span>B.Com Program</span>
                        </h2>

                        <p>
                            Combining academic knowledge with practical
                            exposure to prepare students for professional
                            opportunities.
                        </p>
                    </div>

                    <div className="commerce-card-grid">
                        {programFeatures.map((item, index) => (
                            <div className="feature-card glass-card" key={index}>
                                <div className="card-icon">{item.icon}</div>

                                <h3>{item.title}</h3>

                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>


            {/* INFRASTRUCTURE */}
            <section className="commerce-section infrastructure-section">
                <div className="commerce-container">

                    <div className="section-heading">
                        <span className="section-tag">Campus Facilities</span>

                        <h2>
                            State-of-the-Art <span>Infrastructure</span>
                        </h2>

                        <p>
                            A modern learning environment designed to
                            support academic excellence and practical
                            commerce education.
                        </p>
                    </div>

                    <div className="commerce-card-grid">
                        {infrastructure.map((item, index) => (
                            <div
                                className="infrastructure-card glass-card"
                                key={index}
                            >
                                <div className="card-icon">{item.icon}</div>

                                <h3>{item.title}</h3>

                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>


            {/* STUDENT DEVELOPMENT */}
            <section className="commerce-section">
                <div className="commerce-container">

                    <div className="section-heading">
                        <span className="section-tag">Beyond Academics</span>

                        <h2>
                            Holistic Student <span>Development</span>
                        </h2>

                        <p>
                            Encouraging students to develop professional
                            skills, leadership qualities, confidence,
                            and personal interests.
                        </p>
                    </div>

                    <div className="development-grid">
                        {studentDevelopment.map((item, index) => (
                            <div className="development-card glass-card" key={index}>
                                <div className="card-icon">{item.icon}</div>

                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>


            {/* ELIGIBILITY AND SEATS */}
            <section className="commerce-section eligibility-section">
                <div className="commerce-container">

                    <div className="section-heading">
                        <span className="section-tag">Admission Requirements</span>

                        <h2>
                            B.Com Eligibility <span>Criteria</span>
                        </h2>
                    </div>

                    <div className="eligibility-grid">

                        <div className="eligibility-card glass-card">
                            <div className="card-icon">🎓</div>

                            <h3>Educational Qualification</h3>

                            <p>
                                Candidates must have completed the 12th
                                standard or an equivalent examination
                                from a recognized board in any stream:
                                Commerce, Science, or Arts.
                            </p>
                        </div>

                        <div className="eligibility-card glass-card">
                            <div className="card-icon">📋</div>

                            <h3>Minimum Marks</h3>

                            <p>
                                A minimum aggregate score of 40% in the
                                12th standard examination may be required,
                                subject to category and admission norms.
                            </p>
                        </div>

                        <div className="eligibility-card seat-card glass-card">
                            <div className="card-icon">🏛️</div>

                            <h3>Seat Intake</h3>

                            <strong>120</strong>

                            <p>Total Seats Available</p>
                        </div>

                    </div>

                </div>
            </section>


            {/* ADMISSION PROCESS */}
            <section className="commerce-section" id="admission">
                <div className="commerce-container">

                    <div className="section-heading">
                        <span className="section-tag">Start Your Journey</span>

                        <h2>
                            Admission Process at <span>IET College</span>
                        </h2>

                        <p>
                            Follow these simple steps to apply for the
                            Bachelor of Commerce program.
                        </p>
                    </div>

                    <div className="admission-timeline">
                        {admissionSteps.map((step, index) => (
                            <div className="admission-step glass-card" key={index}>
                                <div className="step-number">
                                    {step.number}
                                </div>

                                <div>
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="admission-note glass-card">
                        <span>📌</span>

                        <p>
                            <strong>Important:</strong> Admissions are
                            subject to eligibility, document verification,
                            university guidelines, and seat availability.
                        </p>
                    </div>

                </div>
            </section>


            {/* CAREER OPPORTUNITIES */}
            <section className="commerce-section career-section">
                <div className="commerce-container">

                    <div className="section-heading">
                        <span className="section-tag">Your Future Starts Here</span>

                        <h2>
                            Career Opportunities After <span>B.Com</span>
                        </h2>

                        <p>
                            A B.Com degree can open pathways to different
                            professional opportunities across commerce,
                            finance, banking, and business sectors.
                        </p>
                    </div>

                    <div className="career-grid">
                        {careerOptions.map((career, index) => (
                            <div className="career-card glass-card" key={index}>
                                <span>✓</span>
                                <h3>{career}</h3>
                            </div>
                        ))}
                    </div>

                    <div className="higher-studies glass-card">
                        <h3>Explore Higher Education Opportunities</h3>

                        <p>
                            Students can also pursue professional
                            qualifications and postgraduate education.
                        </p>

                        <div className="higher-studies-list">
                            {higherStudies.map((course, index) => (
                                <span key={index}>{course}</span>
                            ))}
                        </div>
                    </div>

                </div>
            </section>


            {/* WHY CHOOSE IET */}
            <section className="commerce-section why-commerce-section">
                <div className="commerce-container">

                    <div className="section-heading">
                        <span className="section-tag">Why IET College?</span>

                        <h2>
                            Why Choose IET College for <span>B.Com?</span>
                        </h2>

                        <p>
                            Discover the academic environment, facilities,
                            and career-oriented learning opportunities
                            available at IET College.
                        </p>
                    </div>

                    <div className="reasons-card glass-card">
                        {reasons.map((reason, index) => (
                            <div className="reason-item" key={index}>
                                <span className="reason-check">✓</span>
                                <p>{reason}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>


            {/* FAQ */}
            <section className="commerce-section faq-section">
                <div className="commerce-container">

                    <div className="section-heading">
                        <span className="section-tag">Need More Information?</span>

                        <h2>
                            Frequently Asked <span>Questions</span>
                        </h2>

                        <p>
                            Find answers to common questions about the
                            B.Com program and admission process.
                        </p>
                    </div>

                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <details className="faq-item glass-card" key={index}>
                                <summary>
                                    <span className="faq-number">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <span className="faq-question">
                                        {faq.question}
                                    </span>

                                    <span className="faq-plus">+</span>
                                </summary>

                                <div className="faq-answer">
                                    <p>{faq.answer}</p>
                                </div>
                            </details>
                        ))}
                    </div>

                </div>
            </section>


            {/* FINAL CTA */}
            <section className="commerce-section commerce-cta-section">
                <div className="commerce-container">

                    <div className="commerce-cta glass-card">
                        <div className="cta-content">
                            <span className="section-tag">
                                Shape Your Future
                            </span>

                            <h2>
                                Join the B.Com Program at{" "}
                                <span>IET College!</span>
                            </h2>

                            <p>
                                Begin your journey towards a successful
                                career in accounting, banking, finance,
                                taxation, and business management at TEMPL
                                Group of Institutions.
                            </p>

                            <a
                                href="https://www.templgroup.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="commerce-btn primary-btn"
                            >
                                Apply Now <span>→</span>
                            </a>
                        </div>

                        <div className="cta-decoration">
                            <div className="cta-circle">
                                <span>🎓</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </main>
    );
}