import Image from "next/image";
import "./dep-law.css";

export const metadata = {
    title: "Department of Law | BA LLB & LLB | LSR Law Academy Ghaziabad",
    description:
        "Explore BA LLB and LLB programs at LSR Law Academy, TEMPL Group of Institutions, Ghaziabad. Discover eligibility, admission, moot court facilities, career opportunities, and legal education.",
};

const baReasons = [
    {
        number: "01",
        title: "Dual Degree Advantage: Save One Year!",
        description:
            "Our 5-year BA LLB integrated program allows you to earn two degrees – Bachelor of Arts and Bachelor of Laws – in just five years. This streamlined path saves you a year compared to pursuing the two degrees separately. Graduating earlier gives you a competitive advantage in entering the legal profession.",
    },
    {
        number: "02",
        title: "Top Law College in Ghaziabad & Delhi NCR",
        description:
            "LSR Law Academy offers an innovative curriculum aligned with the modern legal landscape. Our BA LLB program prepares students for careers in law, business, governance, and public policy through legal resources, moot courts, and practical internships.",
    },
    {
        number: "03",
        title: "Convenient Location for Modinagar & Muradnagar",
        description:
            "For students from Modinagar, Muradnagar, and surrounding areas, LSR Law Academy provides an accessible location for pursuing legal education. The program combines theoretical learning with practical application in corporate law, criminal law, intellectual property, and human rights.",
    },
    {
        number: "04",
        title: "Unique Teaching and Grooming Methodology",
        description:
            "Our teaching approach focuses on innovative pedagogy, practical exposure, critical thinking, problem-solving, and effective communication. Interactive lectures, workshops, seminars, live case studies, and hands-on training help students develop into well-rounded professionals.",
    },
    {
        number: "05",
        title: "Expert Faculty and Industry Exposure",
        description:
            "Students learn from experienced legal academicians and professionals. Guest lectures, seminars, and workshops provide opportunities to interact with legal experts and understand developments in the legal field.",
    },
    {
        number: "06",
        title: "Comprehensive Curriculum & Skill Development",
        description:
            "The BA LLB curriculum covers constitutional law, criminal law, contract law, cyber law, and international law. Students also develop legal writing, research, oral advocacy, and negotiation skills.",
    },
    {
        number: "07",
        title: "Moot Court and Practical Training",
        description:
            "Moot court facilities provide opportunities to participate in simulated court proceedings and develop advocacy skills. Internships, live projects, and legal workshops provide practical exposure to real-world legal challenges.",
    },
    {
        number: "08",
        title: "Strong Alumni Network",
        description:
            "Students become part of a professional network of alumni working in law firms, government agencies, corporate legal departments, and other organizations, with opportunities for mentorship and career guidance.",
    },
];

const llbReasons = [
    {
        number: "01",
        title: "Legal Education in Ghaziabad & Delhi NCR",
        description:
            "The LLB program combines theoretical knowledge, practical training, and industry exposure to prepare students for modern legal practice in corporate law, criminal law, family law, civil law, and other areas.",
    },
    {
        number: "02",
        title: "Expert Faculty and Mentorship",
        description:
            "Experienced academicians and practicing lawyers bring academic knowledge and professional expertise into the classroom while guiding students through their academic and career development.",
    },
    {
        number: "03",
        title: "Comprehensive Curriculum and Skill Development",
        description:
            "Students study Constitutional Law, Criminal Law, Contract Law, Family Law, Civil Procedure, Taxation, and other core subjects while developing legal research, writing, oral advocacy, and critical-thinking skills.",
    },
    {
        number: "04",
        title: "Moot Court & Practical Training",
        description:
            "Moot court activities, simulated court proceedings, legal workshops, internships, and live projects help students develop advocacy, public speaking, and practical legal skills.",
    },
    {
        number: "05",
        title: "Modern Infrastructure & Facilities",
        description:
            "The campus provides smart classrooms, moot courtrooms, Wi-Fi connectivity, legal research resources, and library facilities to support an interactive learning experience.",
    },
    {
        number: "06",
        title: "Industry Connections and Internships",
        description:
            "The academy's location in the Delhi NCR region offers opportunities to explore internships with law firms, government agencies, corporate legal departments, and NGOs.",
    },
];

const lawInfrastructure = [
    {
        icon: "🖥️",
        title: "Multimedia Interactive Classrooms",
        description:
            "Smartboards and interactive technology make classroom learning engaging, effective, and collaborative.",
    },
    {
        icon: "⚖️",
        title: "Moot Court & Practical Training",
        description:
            "Simulated court proceedings, legal internships, and practical activities help students develop courtroom skills.",
    },
    {
        icon: "💻",
        title: "Modern Labs & Technology",
        description:
            "Modern labs and research facilities support academic activities and technology-enabled learning.",
    },
    {
        icon: "📚",
        title: "Library and Research Resources",
        description:
            "A well-stocked physical and digital library provides resources for legal research, reading, and academic study.",
    },
    {
        icon: "📶",
        title: "Wi-Fi Enabled Campus",
        description:
            "Fast and secure internet connectivity supports access to online learning resources and digital research materials.",
    },
    {
        icon: "🏀",
        title: "Sports & Recreational Facilities",
        description:
            "Sports fields, gymnasiums, and recreational facilities encourage physical fitness and student well-being.",
    },
];

const baEligibility = [
    {
        category: "General",
        marks: "45%",
    },
    {
        category: "BC",
        marks: "42%",
    },
    {
        category: "SC / ST",
        marks: "40%",
    },
];

const llbEligibility = [
    {
        category: "General",
        marks: "45%",
    },
    {
        category: "OBC",
        marks: "42%",
    },
    {
        category: "SC / ST",
        marks: "40%",
    },
];

const baAdmissionSteps = [
    {
        number: "01",
        title: "Online Application",
        description:
            "Complete the online application form available on the college website and prepare the required academic documents.",
    },
    {
        number: "02",
        title: "Merit-Based Admission",
        description:
            "Candidates are shortlisted based on their performance in the 12th standard or equivalent examination.",
    },
    {
        number: "03",
        title: "Counselling & Verification",
        description:
            "Shortlisted candidates attend counselling sessions for document verification and admission confirmation.",
    },
    {
        number: "04",
        title: "Fee Payment",
        description:
            "After admission approval and verification, candidates complete the fee payment to secure their seats.",
    },
];

const llbAdmissionSteps = [
    {
        number: "01",
        title: "Online Application",
        description:
            "Complete the online application form on the official website or visit the campus for in-person registration.",
    },
    {
        number: "02",
        title: "Merit-Based Admission",
        description:
            "Admission is considered on the basis of the candidate's undergraduate degree examination performance.",
    },
    {
        number: "03",
        title: "Counselling & Verification",
        description:
            "Shortlisted candidates attend counselling and submit the necessary documents for verification.",
    },
    {
        number: "04",
        title: "Fee Payment",
        description:
            "After completing the admission formalities, candidates pay the prescribed fees to confirm admission.",
    },
];

const llbCareers = [
    {
        icon: "⚖️",
        title: "Advocate",
        description:
            "Represent clients in courts, tribunals, and legal proceedings after the required Bar Council enrollment.",
    },
    {
        icon: "🏢",
        title: "Corporate Lawyer",
        description:
            "Work with organizations on contracts, mergers, employment law, compliance, and corporate governance.",
    },
    {
        icon: "📋",
        title: "Legal Advisor",
        description:
            "Provide legal guidance to businesses, institutions, government departments, and private organizations.",
    },
    {
        icon: "🏛️",
        title: "Judicial Services",
        description:
            "Prepare for Judicial Service Examinations and pursue opportunities in the judicial system.",
    },
    {
        icon: "⚖️",
        title: "Public Prosecutor",
        description:
            "Represent the government in criminal cases and contribute to the administration of justice.",
    },
    {
        icon: "💼",
        title: "Legal Consultant",
        description:
            "Provide specialized legal advice to individuals, startups, corporations, and public organizations.",
    },
    {
        icon: "📑",
        title: "Compliance Officer",
        description:
            "Help organizations comply with applicable laws, regulations, industry standards, and governance requirements.",
    },
    {
        icon: "🤝",
        title: "Arbitrator and Mediator",
        description:
            "Help resolve disputes through alternative dispute resolution mechanisms.",
    },
    {
        icon: "🔍",
        title: "Legal Researcher",
        description:
            "Conduct legal research, policy analysis, and case studies for institutions and organizations.",
    },
    {
        icon: "🌍",
        title: "Human Rights Advocate",
        description:
            "Work on human rights, constitutional rights, legal aid, social justice, environmental law, and related areas.",
    },
    {
        icon: "🏢",
        title: "Government Legal Officer",
        description:
            "Work as a legal professional in government departments, ministries, regulatory bodies, and public organizations.",
    },
    {
        icon: "💰",
        title: "Tax and Financial Law Specialist",
        description:
            "Develop expertise in taxation, financial regulations, banking laws, and business law.",
    },
    {
        icon: "🎓",
        title: "Academics and Higher Education",
        description:
            "Pursue LL.M., doctoral studies, legal research, and teaching careers.",
    },
    {
        icon: "🌐",
        title: "Legal Process Outsourcing",
        description:
            "Work with legal service providers on contract management, legal documentation, and compliance services.",
    },
    {
        icon: "🏆",
        title: "Civil Services",
        description:
            "Use legal knowledge as a foundation for UPSC, State Civil Services, and other competitive examinations.",
    },
];

const whyChooseLaw = [
    "Modern infrastructure, advanced labs, and well-stocked libraries create an effective learning environment.",
    "Technology-enabled classrooms and labs provide access to modern learning tools.",
    "Affordable education with modern facilities makes quality legal learning accessible.",
    "Comprehensive facilities include Wi-Fi connectivity, sports, recreation, and academic resources.",
    "Programs affiliated with CCS University, Meerut, and approved by the Bar Council of India, as stated by the institution.",
    "Experienced academicians, legal experts, and practicing professionals support academic learning.",
    "Moot court training helps develop advocacy, legal reasoning, and courtroom skills.",
    "Internship opportunities provide exposure to law firms, courts, corporate organizations, and legal institutions.",
    "Career guidance, professional mentoring, and skill enhancement programs support student development.",
    "Legal research databases, digital resources, smart classrooms, and library facilities support learning.",
    "Seminars, guest lectures, workshops, and professional interactions provide industry exposure.",
    "Legal research, drafting, advocacy, communication, negotiation, and analytical thinking are emphasized.",
    "Leadership, cultural activities, personality development, and extracurricular opportunities encourage holistic growth.",
];

const faqs = [
    {
        question:
            "What is the duration of the BA LL.B program at LSR Law Academy?",
        answer:
            "The BA LL.B is a 5-year integrated law degree program that combines Bachelor of Arts (BA) and Bachelor of Laws (LL.B) into a single course.",
    },
    {
        question:
            "Is the BA LL.B course approved by the Bar Council of India?",
        answer:
            "According to the information provided by the institution, the BA LL.B program is approved by the Bar Council of India (BCI) and affiliated with CCS University, Meerut.",
    },
    {
        question:
            "What are the eligibility criteria for BA LL.B admission?",
        answer:
            "Candidates must have completed 10+2 in any stream. The stated minimum marks are 45% for General, 42% for BC, and 40% for SC/ST candidates, subject to applicable university and regulatory guidelines.",
    },
    {
        question:
            "Why choose an integrated BA LL.B program?",
        answer:
            "The integrated BA LL.B program combines arts and law education, allowing students to earn both qualifications in five years instead of pursuing separate degrees.",
    },
    {
        question:
            "What is the admission process for BA LL.B?",
        answer:
            "The process includes online application, merit-based shortlisting, counselling, document verification, and fee payment.",
    },
    {
        question:
            "Who can apply for the LL.B program?",
        answer:
            "Graduates with a bachelor's degree from a recognized university can apply, subject to the prescribed eligibility criteria.",
    },
    {
        question:
            "What is the duration of the LL.B course?",
        answer:
            "The LL.B course is a 3-year law program divided into six semesters.",
    },
    {
        question:
            "Is the LL.B course approved by the Bar Council of India?",
        answer:
            "According to the information provided by the institution, the LL.B program is approved by the Bar Council of India and follows the prescribed legal education standards.",
    },
    {
        question:
            "Does the LL.B program provide practical legal training?",
        answer:
            "Yes. Students gain practical exposure through moot courts, legal workshops, case studies, internships, and skill-development activities.",
    },
    {
        question:
            "What career opportunities are available after LL.B?",
        answer:
            "Graduates can explore careers as advocates, legal advisors, corporate lawyers, legal consultants, compliance professionals, judicial service aspirants, legal researchers, and other legal professionals.",
    },
];

function SectionHeading({ tag, title, description }) {
    return (
        <div className="law-section-heading">
            <span className="law-section-tag">{tag}</span>
            <h2>{title}</h2>
            {description && <p>{description}</p>}
        </div>
    );
}

function ReasonCards({ items }) {
    return (
        <div className="law-reasons-grid">
            {items.map((item) => (
                <article className="law-reason-card law-glass" key={item.number}>
                    <span className="law-reason-number">{item.number}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </article>
            ))}
        </div>
    );
}

function EligibilityCard({ course, qualification, criteria }) {
    return (
        <div className="law-eligibility-card law-glass">
            <div className="law-card-icon">🎓</div>

            <h3>{course} Eligibility</h3>

            <p className="law-qualification">{qualification}</p>

            <div className="law-marks-list">
                {criteria.map((item) => (
                    <div className="law-marks-row" key={item.category}>
                        <span>{item.category}</span>
                        <strong>{item.marks}</strong>
                    </div>
                ))}
            </div>

            <p className="law-small-note">
                Eligibility is subject to applicable university and
                regulatory guidelines.
            </p>
        </div>
    );
}

function AdmissionProcess({ steps }) {
    return (
        <div className="law-admission-grid">
            {steps.map((step) => (
                <article className="law-admission-card law-glass" key={step.number}>
                    <div className="law-step-number">{step.number}</div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                </article>
            ))}
        </div>
    );
}

export default function LawPage() {
    return (
        <main className="law-page">

            {/* =================================
                HERO IMAGE
            ================================= */}

            <section className="law-hero">
                <Image
                    className="law-hero-image"
                    src="https://www.templgroup.in/image/Dep/dl.webp"
                    alt="Department of Law at LSR Law Academy"
                    fill
                    priority
                    unoptimized
                    sizes="100vw"
                />
            </section>


            {/* =================================
                INTRODUCTION
            ================================= */}

            <section className="law-section law-intro-section">
                <div className="law-container">

                    <div className="law-intro-card law-glass">
                        <span className="law-section-tag">
                            Department of Law
                        </span>

                        <h1>
                            Department of Law at{" "}
                            <span>LSR Law Academy</span>
                        </h1>

                        <h2>
                            Your Gateway to a Successful Career in Law
                        </h2>

                        <p>
                            Welcome to LSR Law Academy, a premier
                            institution under the aegis of TEMPL Group
                            of Institutions, where legal education meets
                            academic excellence and practical learning.
                        </p>

                        <p>
                            We offer two career-oriented law programs:
                            the 5-year integrated BA LL.B program for
                            students after 10+2 and the 3-year LL.B
                            program for graduates. Our mission is to
                            develop legal knowledge, professional ethics,
                            critical thinking, and practical skills
                            required for the legal profession.
                        </p>

                        <p>
                            Located in Ghaziabad, Delhi NCR, LSR Law
                            Academy welcomes aspiring legal professionals
                            from Ghaziabad, Modinagar, Muradnagar, Delhi,
                            and surrounding regions.
                        </p>

                        <div className="law-intro-buttons">
                            <a href="/courses/ug-courses/ballb" className="law-btn law-primary-btn">
                                Explore BA LL.B
                            </a>

                            <a href="/courses/ug-courses/llb" className="law-btn law-secondary-btn">
                                Explore LL.B
                            </a>
                        </div>
                    </div>

                </div>
            </section>


            {/* =================================
                COURSE OVERVIEW
            ================================= */}

            <section className="law-section">
                <div className="law-container">

                    <SectionHeading
                        tag="Our Law Programs"
                        title={
                            <>
                                Choose Your Path in <span>Legal Education</span>
                            </>
                        }
                        description="LSR Law Academy offers integrated and graduate-level law programs designed to build strong legal foundations and professional capabilities."
                    />

                    <div className="law-course-overview-grid">

                        <article className="law-course-card law-glass">
                            <div className="law-course-icon">⚖️</div>

                            <span className="law-course-label">
                                Integrated Law Program
                            </span>

                            <h3>B.A. LL.B</h3>

                            <p>
                                A five-year integrated program combining
                                Bachelor of Arts and Bachelor of Laws for
                                students who have completed their 10+2.
                            </p>

                            <div className="law-course-meta">
                                <span>5 Years</span>
                                <span>120 Seats</span>
                                <span>After 10+2</span>
                            </div>

                            <a href="/courses/ug-courses/ballb" className="law-text-link">
                                Explore BA LL.B <span>→</span>
                            </a>
                        </article>

                        <article className="law-course-card law-glass">
                            <div className="law-course-icon">📚</div>

                            <span className="law-course-label">
                                Graduate Law Program
                            </span>

                            <h3>LL.B</h3>

                            <p>
                                A three-year Bachelor of Laws program
                                designed for graduates seeking to enter
                                the legal profession.
                            </p>

                            <div className="law-course-meta">
                                <span>3 Years</span>
                                <span>240 Seats*</span>
                                <span>After Graduation</span>
                            </div>

                            <a href="/courses/ug-courses/llb" className="law-text-link">
                                Explore LL.B <span>→</span>
                            </a>
                        </article>

                    </div>

                    <p className="law-disclaimer">
                        *Seat intake figures are reproduced from the
                        supplied institutional content. Please confirm
                        current approved intake before publishing.
                    </p>

                </div>
            </section>


            {/* =================================
                BA LLB SECTION
            ================================= */}

            <section className="law-section law-course-section" id="ba-llb">
                <div className="law-container">

                    <div className="law-course-header law-glass">
                        <div>
                            <span className="law-section-tag">
                                Five-Year Integrated Program
                            </span>

                            <h2>
                                Bachelor of Arts and{" "}
                                <span>Bachelor of Laws</span>
                            </h2>

                            <p>
                                BA LL.B at LSR Law Academy – A Path to
                                Excellence in Legal Education.
                            </p>
                        </div>

                        <div className="law-course-duration">
                            <strong>05</strong>
                            <span>Years</span>
                        </div>
                    </div>


                    {/* BA LLB INTRO */}

                    <div className="law-content-card law-glass">
                        <h3>About the BA LL.B Program</h3>

                        <p>
                            Our five-year BA LL.B integrated program
                            combines arts education with professional
                            legal studies. It provides a strong
                            foundation in law and equips students with
                            knowledge, skills, and practical exposure
                            required to pursue a legal career.
                        </p>

                        <p>
                            The program prepares students for
                            opportunities in litigation, corporate law,
                            criminal law, governance, public policy,
                            intellectual property, and human rights.
                            Students develop an understanding of legal
                            principles alongside communication,
                            analytical, and problem-solving abilities.
                        </p>

                        <div className="law-info-strip">
                            <div>
                                <span>Course</span>
                                <strong>BA LL.B</strong>
                            </div>

                            <div>
                                <span>Duration</span>
                                <strong>5 Years</strong>
                            </div>

                            <div>
                                <span>Eligibility</span>
                                <strong>10+2</strong>
                            </div>

                            <div>
                                <span>Seat Intake</span>
                                <strong>120</strong>
                            </div>
                        </div>
                    </div>


                    {/* BA LLB WHY CHOOSE */}

                    <SectionHeading
                        tag="Why Choose BA LL.B?"
                        title={
                            <>
                                Your Journey Towards <span>Legal Excellence</span>
                            </>
                        }
                        description="Discover the academic approach, practical learning opportunities, and professional development offered through the BA LL.B program."
                    />

                    <ReasonCards items={baReasons} />


                    {/* BA LLB ELIGIBILITY */}

                    <div className="law-subsection">
                        <SectionHeading
                            tag="Admission Requirements"
                            title={
                                <>
                                    BA LL.B <span>Eligibility Criteria</span>
                                </>
                            }
                            description="Candidates must have completed their 12th standard or equivalent qualification from a recognized board."
                        />

                        <div className="law-eligibility-grid">
                            <EligibilityCard
                                course="BA LL.B"
                                qualification="10+2 in any stream – Arts, Commerce, or Science."
                                criteria={baEligibility}
                            />

                            <div className="law-seat-card law-glass">
                                <div className="law-card-icon">🏛️</div>
                                <h3>BA LL.B Seat Intake</h3>
                                <strong>120</strong>
                                <p>Total Seats</p>
                                <span>
                                    Admissions are subject to merit,
                                    eligibility, and seat availability.
                                </span>
                            </div>
                        </div>
                    </div>


                    {/* BA LLB ADMISSION */}

                    <div className="law-subsection" id="ba-admission">
                        <SectionHeading
                            tag="How to Apply"
                            title={
                                <>
                                    BA LL.B <span>Admission Process</span>
                                </>
                            }
                            description="Follow these steps to apply for admission to the integrated law program."
                        />

                        <AdmissionProcess steps={baAdmissionSteps} />
                    </div>

                </div>
            </section>


            {/* =================================
                LLB SECTION
            ================================= */}

            <section className="law-section law-llb-section" id="llb">
                <div className="law-container">

                    <div className="law-course-header law-glass">
                        <div>
                            <span className="law-section-tag">
                                Three-Year Law Program
                            </span>

                            <h2>
                                Bachelor of <span>Laws (LL.B)</span>
                            </h2>

                            <p>
                                LLB Program at LSR Law Academy – The Gateway
                                to a Prestigious Legal Career.
                            </p>
                        </div>

                        <div className="law-course-duration">
                            <strong>03</strong>
                            <span>Years</span>
                        </div>
                    </div>


                    {/* LLB INTRO */}

                    <div className="law-content-card law-glass">
                        <h3>About the LL.B Program</h3>

                        <p>
                            Welcome to LSR Law Academy, where excellence
                            in legal education meets real-world relevance.
                            As part of TEMPL Group of Institutions, we
                            offer a three-year LL.B program designed for
                            graduates who wish to pursue a career in law.
                        </p>

                        <p>
                            The program provides a comprehensive
                            understanding of legal principles, develops
                            professional ethics, and builds practical
                            skills required in today's competitive
                            legal environment.
                        </p>

                        <p>
                            Located in Ghaziabad, Delhi NCR, LSR Law
                            Academy offers academic learning, modern
                            infrastructure, moot court activities, and
                            opportunities for professional interaction.
                        </p>

                        <div className="law-info-strip">
                            <div>
                                <span>Course</span>
                                <strong>LL.B</strong>
                            </div>

                            <div>
                                <span>Duration</span>
                                <strong>3 Years</strong>
                            </div>

                            <div>
                                <span>Eligibility</span>
                                <strong>Graduation</strong>
                            </div>

                            <div>
                                <span>Seat Intake</span>
                                <strong>240*</strong>
                            </div>
                        </div>
                    </div>


                    {/* LLB WHY CHOOSE */}

                    <SectionHeading
                        tag="Why Choose LL.B?"
                        title={
                            <>
                                Build Your Future in <span>Legal Practice</span>
                            </>
                        }
                        description="The LL.B program combines legal theory, professional mentorship, practical training, and industry exposure."
                    />

                    <ReasonCards items={llbReasons} />


                    {/* LLB ELIGIBILITY */}

                    <div className="law-subsection">
                        <SectionHeading
                            tag="Admission Requirements"
                            title={
                                <>
                                    LL.B <span>Eligibility Criteria</span>
                                </>
                            }
                            description="Candidates must have completed graduation from a recognized university."
                        />

                        <div className="law-eligibility-grid">
                            <EligibilityCard
                                course="LL.B"
                                qualification="Bachelor's degree in any stream from a recognized university."
                                criteria={llbEligibility}
                            />

                            <div className="law-seat-card law-glass">
                                <div className="law-card-icon">🏛️</div>
                                <h3>LL.B Seat Intake</h3>
                                <strong>240</strong>
                                <p>Total Seats</p>
                                <span>
                                    Admission is subject to eligibility,
                                    university guidelines, and approved
                                    intake.
                                </span>
                            </div>
                        </div>
                    </div>


                    {/* LLB ADMISSION */}

                    <div className="law-subsection">
                        <SectionHeading
                            tag="How to Apply"
                            title={
                                <>
                                    LL.B <span>Admission Process</span>
                                </>
                            }
                            description="Complete the application and admission formalities to begin your legal education."
                        />

                        <AdmissionProcess steps={llbAdmissionSteps} />
                    </div>


                    {/* LLB CAREERS */}

                    <div className="law-subsection law-career-section">
                        <SectionHeading
                            tag="Professional Opportunities"
                            title={
                                <>
                                    Career Opportunities <span>After LL.B</span>
                                </>
                            }
                            description="An LL.B degree can open opportunities across litigation, corporate law, government, public administration, research, and legal consultancy."
                        />

                        <div className="law-career-grid">
                            {llbCareers.map((career, index) => (
                                <article
                                    className="law-career-card law-glass"
                                    key={index}
                                >
                                    <div className="law-card-icon">
                                        {career.icon}
                                    </div>

                                    <h3>{career.title}</h3>

                                    <p>{career.description}</p>
                                </article>
                            ))}
                        </div>

                        <div className="law-higher-study law-glass">
                            <h3>Higher Education Opportunities</h3>

                            <p>
                                After LL.B, graduates can pursue advanced
                                legal education and research opportunities.
                            </p>

                            <div className="law-higher-tags">
                                <span>LL.M.</span>
                                <span>Ph.D. in Law</span>
                                <span>Legal Research</span>
                                <span>Academics</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


            {/* =================================
                AFFILIATION
            ================================= */}

            <section className="law-section law-affiliation-section">
                <div className="law-container">

                    <SectionHeading
                        tag="Academic Recognition"
                        title={
                            <>
                                Affiliations, Accreditations <span>& Approvals</span>
                            </>
                        }
                        description="Institutional affiliations and regulatory approvals are important considerations when choosing a legal education program."
                    />

                    <div className="law-affiliation-card law-glass">
                        <div className="law-affiliation-icon">🏛️</div>

                        <h3>LSR Law Academy</h3>

                        <p>
                            According to the institutional information
                            provided, LSR Law Academy is affiliated with
                            Chaudhary Charan Singh University (CCSU),
                            Meerut, and its law programs are approved by
                            the Bar Council of India (BCI) and recognized
                            by the University Grants Commission (UGC).
                        </p>

                        <div className="law-affiliation-tags">
                            <span>CCSU Meerut</span>
                            <span>Bar Council of India</span>
                            <span>UGC</span>
                        </div>

                        <p className="law-small-note">
                            Please verify current program-specific
                            approvals and affiliation status with the
                            institution and relevant regulatory bodies
                            before admission.
                        </p>
                    </div>

                </div>
            </section>


            {/* =================================
                INFRASTRUCTURE
            ================================= */}

            <section className="law-section">
                <div className="law-container">

                    <SectionHeading
                        tag="Campus Facilities"
                        title={
                            <>
                                State-of-the-Art <span>Infrastructure</span>
                            </>
                        }
                        description="TEMPL Group of Institutions provides facilities intended to support academic learning, legal research, practical training, and student development."
                    />

                    <div className="law-infrastructure-grid">
                        {lawInfrastructure.map((item, index) => (
                            <article
                                className="law-infrastructure-card law-glass"
                                key={index}
                            >
                                <div className="law-card-icon">
                                    {item.icon}
                                </div>

                                <h3>{item.title}</h3>

                                <p>{item.description}</p>
                            </article>
                        ))}
                    </div>

                </div>
            </section>


            {/* =================================
                WHY CHOOSE LSR
            ================================= */}

            <section className="law-section law-why-section">
                <div className="law-container">

                    <SectionHeading
                        tag="Why LSR Law Academy?"
                        title={
                            <>
                                Why Choose <span>LSR Law Academy?</span>
                            </>
                        }
                        description="Explore the facilities, learning environment, and professional development opportunities available at LSR Law Academy."
                    />

                    <div className="law-why-card law-glass">
                        {whyChooseLaw.map((reason, index) => (
                            <div className="law-why-item" key={index}>
                                <span>✓</span>
                                <p>{reason}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>


            {/* =================================
                ADMISSION REGULATIONS
            ================================= */}

            <section className="law-section">
                <div className="law-container">

                    <div className="law-regulation-card law-glass">
                        <div className="law-card-icon">📜</div>

                        <h2>
                            Admission Guidelines & Regulations
                        </h2>

                        <p>
                            Admissions to the BA LL.B and LL.B programs
                            at LSR Law Academy are stated to be conducted
                            in accordance with the guidelines and
                            regulations prescribed by the U.P. State
                            Government, Chaudhary Charan Singh University,
                            Meerut, and the Bar Council of India.
                        </p>

                        <p>
                            Candidates must satisfy the prescribed
                            eligibility requirements and complete the
                            admission formalities, including application,
                            counselling, document verification, and fee
                            payment, as applicable.
                        </p>

                    </div>

                </div>
            </section>


            {/* =================================
                FAQ
            ================================= */}

            <section className="law-section law-faq-section">
                <div className="law-container">

                    <SectionHeading
                        tag="Frequently Asked Questions"
                        title={
                            <>
                                BA LL.B & LL.B <span>FAQs</span>
                            </>
                        }
                        description="Find answers to common questions about law courses, eligibility, admission, and career opportunities at LSR Law Academy."
                    />

                    <div className="law-faq-list">
                        {faqs.map((faq, index) => (
                            <details className="law-faq-item law-glass" key={index}>
                                <summary>
                                    <span className="law-faq-number">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <span className="law-faq-question">
                                        {faq.question}
                                    </span>

                                    <span className="law-faq-plus">+</span>
                                </summary>

                                <div className="law-faq-answer">
                                    <p>{faq.answer}</p>
                                </div>
                            </details>
                        ))}
                    </div>

                </div>
            </section>


            {/* =================================
                FINAL CTA
            ================================= */}

            <section className="law-section law-cta-section">
                <div className="law-container">

                    <div className="law-cta-card law-glass">

                        <div className="law-cta-content">
                            <span className="law-section-tag">
                                Your Legal Career Starts Here
                            </span>

                            <h2>
                                Apply Now to{" "}
                                <span>LSR Law Academy!</span>
                            </h2>

                            <p>
                                If you are passionate about law and
                                determined to make a mark in the legal
                                profession, LSR Law Academy provides a
                                platform to pursue your ambitions.
                            </p>

                            <p>
                                Choose the five-year integrated BA LL.B
                                program after 10+2 or the three-year LL.B
                                program after graduation. Take the next
                                step towards your legal career under
                                TEMPL Group of Institutions.
                            </p>

                            <div className="law-cta-buttons">
                                <a
                                    href="/courses/ug-courses/ballb"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="law-btn law-primary-btn"
                                >
                                    Apply for BA LL.B →
                                </a>

                                <a
                                    href="/courses/ug-courses/llb"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="law-btn law-secondary-btn"
                                >
                                    Apply for LL.B →
                                </a>
                            </div>
                        </div>

                        <div className="law-cta-decoration">
                            <div className="law-cta-circle">
                                ⚖️
                            </div>
                        </div>

                    </div>

                </div>
            </section>

        </main>
    );
}