import Image from "next/image";
import Link from "next/link";
import "./bcom.css";

export const metadata = {
    title: "Best B.Com College in Ghaziabad | Bachelor of Commerce at TEMPL Group",
    description:
        "B.Com (Bachelor of Commerce) at IET College, TEMPL Group of Institutions, Ghaziabad. CCSU affiliated, NAAC accredited, approved by UGC, AICTE, NCTE and SCERT.",
};

const introParagraphs = [
    "Welcome to TEMPL Group of Institutions, where academic excellence meets practical learning. Under the banner of our flagship institution, Institute for Education and Technical Sciences (IET College), we proudly offer a comprehensive Bachelor of Commerce (B.Com) program. This 3-year undergraduate course is affiliated to Chaudhary Charan Singh University (CCSU) Meerut, and the curriculum is designed for students who have completed their 12th standard and wish to pursue a career in the dynamic world of commerce, business, and finance.",
    "Institute for Education and Technical Sciences (IET College) is approved by AICTE, NCTE, SCERT, and University Grants Commission (UGC) and accredited by NAAC.",
];

const highlights = [
    "3-Year Undergraduate Program",
    "Six Semesters",
    "CCSU Meerut Affiliated",
    "NAAC Accredited",
    "UGC, AICTE, NCTE & SCERT Approved",
    "NEP Based Curriculum",
    "Only 120 Seats",
    "Affordable Fee Structure",
];

const featureParagraphs = [
    "At IET College, we believe in providing students with the best education in commerce that equips them with the necessary skills and knowledge to excel in the competitive world of business. If you're searching for the best college for B.Com in Ghaziabad, Modinagar, or Muradnagar, our Institute for Education and Technical Sciences offers a robust and dynamic curriculum that blends academic rigor with real-world applications.",
    "Our B.Com program ensures that you are not only well-versed in the theoretical aspects of commerce but also gain practical experience through internships, workshops, and industry exposure. Whether you aim to pursue a career in accounting, finance, taxation, or business management, the B.Com course at IET College will lay a solid foundation for your future.",
];

const curriculum = [
    "Financial Accounting",
    "Corporate Accounting",
    "Business Economics",
    "Business Law",
    "Income Tax Law and Practice",
    "Cost Accounting",
    "Auditing",
    "Financial Management",
    "Business Statistics",
    "Company Law",
    "Marketing Management",
    "Human Resource Management",
    "Banking and Insurance",
    "E-Commerce",
    "Entrepreneurship Development",
];

const skills = [
    "Financial Analysis and Reporting",
    "Accounting and Bookkeeping Skills",
    "Business Communication",
    "Analytical and Critical Thinking",
    "Tax Planning and Compliance",
    "Problem-Solving Abilities",
    "Leadership and Teamwork",
    "Decision-Making Skills",
    "Time Management",
    "Digital and Financial Literacy",
    "Entrepreneurial Mindset",
    "Data Interpretation and Business Analytics",
];

const careers = [
    "Accountant",
    "Financial Analyst",
    "Tax Consultant",
    "Banking Professional",
    "Investment Advisor",
    "Auditor",
    "Business Development Executive",
    "Insurance Advisor",
    "Finance Executive",
    "Human Resource Executive",
    "Marketing Executive",
    "Operations Manager",
];

const whyIet = [
    "Affiliated with CCS University, Meerut",
    "NAAC Accredited Institution",
    "Approved by UGC, AICTE, NCTE, and SCERT",
    "Industry-Oriented Curriculum Based on NEP Guidelines",
    "Highly Qualified and Experienced Faculty",
    "Modern Classrooms and Learning Facilities",
    "Practical Exposure Through Workshops and Industry Visits",
    "Internship and Placement Assistance",
    "Affordable Fee Structure",
    "Wi-Fi Enabled Smart Campus",
    "Focus on Skill Development and Employability",
    "Excellent Connectivity from Ghaziabad, Modinagar, Muradnagar, and Delhi NCR",
];

const eligibility = [
    "Applicants must have passed Class 12th or equivalent examination from a recognized board.",
    "Students from Commerce, Science, or Arts streams are eligible to apply.",
    "A minimum aggregate score of 40% marks is generally required, subject to university regulations.",
    "Admission is granted based on merit and applicable admission guidelines.",
    "Reserved category candidates may receive relaxation as per government norms.",
];

const admissionSteps = [
    "Complete the online or offline application form.",
    "Submit required academic documents and photographs.",
    "Application review and eligibility verification.",
    "Merit-based selection as per university norms.",
    "Counseling and document verification.",
    "Confirmation of admission through fee submission.",
    "Enrollment and commencement of classes.",
];

const keyHighlights = [
    {
        title: "Industry-Relevant Curriculum",
        description:
            "The B.Com program at IET College is designed to provide students with an in-depth understanding of core commerce subjects such as accounting, finance, business law, taxation, and economics. We follow the new NEP curriculum prescribed by CCS University Meerut to match the evolving needs of the industry, ensuring that you are job-ready upon graduation.",
    },
    {
        title: "Practical Exposure",
        description:
            "We focus on bridging the gap between theory and practice. Through industry visits, live projects, internships, and guest lectures from industry experts, students gain hands-on experience that is crucial for their career development.",
    },
    {
        title: "World-Class Faculty",
        description:
            "Our faculty members are not only highly qualified but also come with substantial industry experience. Their expertise helps students gain a comprehensive understanding of commerce concepts and provides them with the right guidance for career progression.",
    },
    {
        title: "Affordable Fees",
        description:
            "Despite offering a high-quality education with state-of-the-art facilities, we ensure that our fee structure remains affordable. This makes our B.Com program an excellent choice for students from all backgrounds who wish to pursue a career in commerce without financial strain.",
    },
    {
        title: "World-Class Infrastructure at Nominal Fees",
        description:
            "With cutting-edge classrooms, advanced labs, and modern facilities, we provide a rich academic environment at a fee structure that makes quality education affordable to all.",
    },
    {
        title: "Technology-Driven Learning",
        description:
            "From multimedia interactive classrooms to Wi-Fi-enabled campuses, we leverage the latest technology to enhance learning and ensure our students are always at the forefront of innovation.",
    },
    {
        title: "Student-Centric Approach",
        description:
            "At TEMPL, the student experience is at the heart of everything we do. We offer personalized attention, practical exposure, and a host of support services to help students grow holistically.",
    },
    {
        title: "Global Connectivity",
        description:
            "Our Wi-Fi-enabled campus and access to digital resources make us a truly connected institution, enabling students to learn and collaborate from anywhere.",
    },
    {
        title: "Facilities That Foster Innovation",
        description:
            "From well-equipped labs to dynamic seminar halls and sports complexes, we offer everything needed to nurture creativity, intellectual curiosity, and physical well-being.",
    },
];

const infrastructure = [
    {
        title: "Multimedia Interactive Classrooms",
        description:
            "Designed to make learning engaging, interactive, and highly effective. With smartboards, interactive displays, and audio-visual systems, we offer a modern teaching environment that enhances the learning experience.",
    },
    {
        title: "Fully Equipped Labs",
        description:
            "Well-equipped labs cater to diverse disciplines such as computer science, commerce, and management. With high-speed internet access, state-of-the-art computers, and the latest software, students have all the tools they need.",
    },
    {
        title: "Wi-Fi Enabled Campus",
        description:
            "The entire campus is Wi-Fi-enabled, offering fast and secure internet to students and faculty. Students can access e-books, online journals, study materials, and participate in virtual classes from anywhere on campus.",
    },
    {
        title: "Library with Extensive Resources",
        description:
            "A hub of knowledge with a vast collection of books, journals, and digital resources to support every student's academic and research needs, including e-resources and online databases.",
    },
    {
        title: "Auditoriums & Seminar Halls",
        description:
            "Spacious halls host workshops, guest lectures, seminars, and cultural performances, equipped with modern audio-visual facilities.",
    },
    {
        title: "Affordable Education",
        description:
            "We believe that quality education should be within reach of every deserving student. While we offer state-of-the-art infrastructure, our fee structure remains nominal.",
    },
    {
        title: "Sports and Recreation",
        description:
            "Academic success is intertwined with physical and mental well-being. Our campus offers excellent sports facilities, including a Cricket Ground, basketball courts, and outdoor play areas.",
    },
];

const whyIetShort = [
    [
        "Top Choice for Commerce Students",
        "IET College is one of the top-ranking commerce colleges in Ghaziabad and Modinagar.",
    ],
    [
        "Affordable and Accessible",
        "Our nominal fee structure makes it the best choice for students from various financial backgrounds.",
    ],
    [
        "Strong Industry Connections",
        "We maintain strong ties with leading companies and institutions to help secure internships and job placements.",
    ],
    [
        "Holistic Development",
        "We offer various extracurricular activities, leadership programs, and skill development workshops.",
    ],
];

const location = [
    [
        "Prime Location on NH-58",
        "Situated on the Delhi–Meerut Highway (NH-58), providing seamless connectivity to major cities and educational hubs.",
    ],
    [
        "Near SRM University Ghaziabad",
        "Located close to SRM University, placing students in a thriving educational environment.",
    ],
    [
        "Easy Access from Ghaziabad",
        "Conveniently reachable for students residing in Ghaziabad and nearby localities.",
    ],
    [
        "Well Connected to Modinagar",
        "Just a short distance from Modinagar, making daily travel easy and time-efficient.",
    ],
    [
        "Accessible from Meerut",
        "Students from Meerut can comfortably commute to the campus via NH-58 and public transportation.",
    ],
    [
        "Rapid Metro and Road Connectivity",
        "The campus is well connected through Rapid Metro routes, local transport services, and major road networks.",
    ],
    [
        "Gateway to Delhi NCR",
        "Its strategic location provides students with easy access to educational, industrial, and employment opportunities across the Delhi NCR region.",
    ],
];

const faqs = [
    {
        question: "What is the duration of the B.Com course?",
        answer: "The B.Com program is a three-year undergraduate degree divided into six semesters.",
    },
    {
        question: "Is the B.Com course affiliated with CCS University?",
        answer: "Yes, the B.Com program at IET College is affiliated with Chaudhary Charan Singh University (CCSU), Meerut.",
    },
    {
        question: "Who can apply for B.Com admission?",
        answer: "Students who have completed Class 12th from a recognized board in any stream can apply.",
    },
    {
        question: "What are the career opportunities after B.Com?",
        answer: "B.Com graduates can pursue careers in accounting, finance, banking, taxation, auditing, marketing, and business management.",
    },
    {
        question: "Can I pursue CA after completing B.Com?",
        answer: "Yes, B.Com provides a strong academic foundation for professional courses such as CA, CS, CMA, and CFA.",
    },
    {
        question: "Does IET College provide placement assistance?",
        answer: "Yes, the college offers career guidance, internship opportunities, skill development programs, and placement support.",
    },
    {
        question: "What subjects are taught in the B.Com program?",
        answer: "Major subjects include Accounting, Economics, Taxation, Business Law, Finance, Auditing, and Management.",
    },
    {
        question: "Is scholarship assistance available?",
        answer: "Eligible students may avail scholarships as per government policies and institutional guidelines.",
    },
    {
        question: "Why should I choose IET College for B.Com?",
        answer: "IET College offers quality education, experienced faculty, modern infrastructure, industry exposure, and strong academic support at an affordable fee structure.",
    },
    {
        question: "How can I apply for B.Com Admission 2026?",
        answer: "You can apply through the official admission portal of IET College or visit the campus admission office for assistance.",
    },
];

/* ---------- small helpers ---------- */

function Heading({ label, title, sub }) {
    return (
        <div className="bcom-centered-heading">
            <span className="bcom-label">{label}</span>
            <h2>{title}</h2>
            {sub && <h3>{sub}</h3>}
            <div className="bcom-heading-line"></div>
        </div>
    );
}

function CardGrid({ items, grid, card }) {
    return (
        <div className={grid}>
            {items.map((item, i) => (
                <article className={card} key={item.title}>
                    <span className="bcom-card-number">
                        {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </article>
            ))}
        </div>
    );
}

function PillGrid({ items }) {
    return (
        <div className="bcom-pill-grid">
            {items.map((item) => (
                <span className="bcom-pill" key={item}>
                    {item}
                </span>
            ))}
        </div>
    );
}

// items can be plain strings or [title, text] pairs
function ReasonGrid({ items }) {
    return (
        <div className="bcom-reasons-grid">
            {items.map((item) => {
                const isPair = Array.isArray(item);
                return (
                    <div
                        className="bcom-reason-card"
                        key={isPair ? item[0] : item}
                    >
                        <span className="bcom-check">✓</span>
                        <p>
                            {isPair ? (
                                <>
                                    <strong>{item[0]}:</strong> {item[1]}
                                </>
                            ) : (
                                item
                            )}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}

export default function BcomPage() {
    return (
        <main className="bcom-page">

            {/* TOP BANNER IMAGE */}
            <section className="bcom-banner">
                <Image
                    src="/images/offer's B.COM.webp"
                    alt="B.Com — Bachelor of Commerce at IET College TEMPL Group Ghaziabad"
                    width={0}
                    height={0}
                    sizes="100vw"
                    priority
                />
            </section>

            {/* HERO TEXT */}
            <section className="bcom-top-text">
                <div className="bcom-container">
                    <span className="bcom-eyebrow">TEMPL GROUP OF INSTITUTIONS</span>
                    <h1>B.Com (BCom) — Bachelor of Commerce in Ghaziabad | TEMPL Group</h1>
                    <h2>
                        B.Com Course at TEMPL Group of Institutions: Your
                        Pathway to Success in Commerce
                    </h2>
                    <p>Bachelor of Commerce (B.Com)</p>
                    <Link href="#admission" className="bcom-primary-btn">
                        Apply Now <span>→</span>
                    </Link>
                </div>
            </section>

            {/* INTRODUCTION */}
            <section className="bcom-section">
                <div className="bcom-container">
                    <div className="bcom-intro-grid">
                        <div className="bcom-section-heading">
                            <span className="bcom-label">B.COM PROGRAM</span>
                            <h2>Bachelor of Commerce (B.Com)</h2>
                            <div className="bcom-heading-line"></div>
                        </div>

                        <div className="bcom-intro-text">
                            {introParagraphs.map((text, i) => (
                                <p key={i}>{text}</p>
                            ))}
                        </div>
                    </div>

                    <div className="bcom-highlight-grid">
                        {highlights.map((item, index) => (
                            <div className="bcom-highlight-card" key={item}>
                                <span className="bcom-highlight-icon">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <h3>{item}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* KEY FEATURES + CURRICULUM */}
            <section className="bcom-section bcom-light-section">
                <div className="bcom-container">
                    <Heading
                        label="PROGRAM FEATURES"
                        title="Key Features of Our B.Com Program"
                    />

                    <div className="bcom-content-width">
                        {featureParagraphs.map((text, i) => (
                            <p key={i}>{text}</p>
                        ))}
                    </div>

                    <div className="bcom-sub-block">
                        <h3 className="bcom-sub-title">
                            B.Com Curriculum and Subjects
                        </h3>
                        <div className="bcom-content-width">
                            <p>
                                The B.Com curriculum at IET College is carefully
                                structured to provide students with both
                                theoretical understanding and practical insights
                                into various aspects of commerce and business.
                                The course covers core subjects that help
                                students develop analytical, financial, and
                                managerial competencies essential for
                                professional success.
                            </p>
                        </div>
                        <PillGrid items={curriculum} />
                        <div className="bcom-content-width bcom-bottom-text">
                            <p>
                                The curriculum is regularly updated in
                                accordance with CCS University guidelines and
                                industry requirements to ensure students remain
                                competitive in the evolving business landscape.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SKILLS */}
            <section className="bcom-section">
                <div className="bcom-container">
                    <Heading
                        label="SKILL DEVELOPMENT"
                        title="Skills Developed Through B.Com"
                    />

                    <div className="bcom-content-width">
                        <p>
                            The B.Com program is designed not only to impart
                            academic knowledge but also to develop professional
                            and practical skills that are highly valued by
                            employers across industries. Students gain exposure
                            to real-world business scenarios, enabling them to
                            become competent professionals and future business
                            leaders.
                        </p>
                    </div>

                    <PillGrid items={skills} />
                </div>
            </section>

            {/* CAREERS */}
            <section className="bcom-section bcom-light-section">
                <div className="bcom-container">
                    <Heading
                        label="CAREER PATHS"
                        title="Career Opportunities After B.Com"
                    />

                    <div className="bcom-content-width">
                        <p>
                            A Bachelor of Commerce degree opens the door to a
                            wide range of career opportunities in the corporate,
                            financial, banking, and public sectors. The
                            versatile nature of the B.Com program enables
                            graduates to pursue diverse career paths based on
                            their interests and professional goals.
                        </p>
                        <p>
                            Popular career options after completing B.Com
                            include:
                        </p>
                    </div>

                    <PillGrid items={careers} />

                    <div className="bcom-content-width bcom-bottom-text">
                        <p>
                            Students can also pursue higher education and
                            professional qualifications such as M.Com, MBA,
                            Chartered Accountancy (CA), Company Secretary (CS),
                            Cost and Management Accountancy (CMA), CFA, and
                            various banking and government examinations.
                        </p>
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE IET */}
            <section className="bcom-section">
                <div className="bcom-container">
                    <Heading
                        label="WHY IET COLLEGE"
                        title="Why Choose IET College for B.Com?"
                    />

                    <div className="bcom-content-width">
                        <p>
                            IET College, under the TEMPL Group of Institutions,
                            is committed to providing quality education that
                            empowers students with the knowledge, skills, and
                            confidence needed to succeed in today's competitive
                            world. Our B.Com program combines academic
                            excellence with practical learning opportunities,
                            ensuring holistic student development.
                        </p>
                    </div>

                    <ReasonGrid items={whyIet} />

                    <div className="bcom-content-width bcom-bottom-text">
                        <p>
                            Our student-centric approach ensures that learners
                            receive personalized guidance, academic support, and
                            career mentoring throughout their educational
                            journey.
                        </p>
                    </div>
                </div>
            </section>

            {/* ADMISSION */}
            <section className="bcom-section bcom-admission-section" id="admission">
                <div className="bcom-container">
                    <Heading
                        label="JOIN TEMPL"
                        title="B.Com Admission Process 2026"
                        sub="Eligibility, Admission Process & Seat Intake"
                    />

                    <div className="bcom-content-width">
                        <p>
                            Admission to the B.Com program at IET College is
                            conducted in accordance with CCS University and
                            Uttar Pradesh Government guidelines. Interested
                            candidates are encouraged to apply early due to
                            limited seat availability.
                        </p>
                    </div>

                    <div className="bcom-admission-grid">
                        <article className="bcom-admission-card">
                            <div className="bcom-admission-icon">01</div>
                            <h3>B.Com Eligibility Criteria</h3>
                            <ul>
                                {eligibility.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </article>

                        <article className="bcom-admission-card">
                            <div className="bcom-admission-icon">02</div>
                            <h3>Admission Process</h3>
                            <ol>
                                {admissionSteps.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ol>
                        </article>

                        <article className="bcom-seats-card">
                            <span>SEAT INTAKE</span>
                            <strong>120</strong>
                            <h3>Total Seats Available</h3>
                        </article>
                    </div>

                    <div className="bcom-admission-cta">
                        <div>
                            <h3>Apply Now</h3>
                            <p>
                                Admissions are on a first-come, first-served
                                basis, subject to merit. Apply early to secure
                                your place in the B.Com program.
                            </p>
                        </div>
                        <Link href="#admission" className="bcom-primary-btn">
                            Apply Now <span>→</span>
                        </Link>
                    </div>

                    <p className="bcom-admission-note">
                        Students seeking admission assistance can contact our
                        admission counselors for detailed guidance regarding
                        eligibility, fee structure, scholarships, and course
                        information.
                    </p>
                </div>
            </section>

            {/* KEY HIGHLIGHTS */}
            <section className="bcom-section bcom-light-section">
                <div className="bcom-container">
                    <Heading
                        label="WHY TEMPL"
                        title="Key Highlights of TEMPL Group of Institutions"
                    />
                    <CardGrid
                        items={keyHighlights}
                        grid="bcom-careers-grid"
                        card="bcom-career-card"
                    />
                </div>
            </section>

            {/* INFRASTRUCTURE */}
            <section className="bcom-section">
                <div className="bcom-container">
                    <Heading
                        label="CAMPUS FACILITIES"
                        title="State-of-the-Art Infrastructure at TEMPL Group of Institutions, Ghaziabad"
                        sub="A Modern Learning Experience at an Affordable Fee"
                    />
                    <CardGrid
                        items={infrastructure}
                        grid="bcom-facilities-grid"
                        card="bcom-facility-card"
                    />

                    <div className="bcom-content-width bcom-bottom-text">
                        <p>
                            At TEMPL Group of Institutions, we don't just focus
                            on teaching; we focus on transforming. Our
                            state-of-the-art infrastructure, combined with our
                            innovative teaching methodologies, ensures that
                            students receive an education that is not only
                            relevant today but also prepares them for the
                            challenges of tomorrow.
                        </p>
                        <p>
                            With a nominal fee structure, we provide an
                            opportunity for every student to benefit from an
                            advanced learning environment without the financial
                            burden. Whether you're interested in engineering,
                            commerce, management, or any other field, TEMPL
                            Group of Institutions is the place to shape your
                            future.
                        </p>
                    </div>
                </div>
            </section>

            {/* WHY IET SHORT */}
            <section className="bcom-section bcom-light-section">
                <div className="bcom-container">
                    <Heading
                        label="WHY IET COLLEGE"
                        title="Why IET College for B.Com?"
                    />
                    <ReasonGrid items={whyIetShort} />

                    <div className="bcom-content-width bcom-bottom-text">
                        <p>
                            <strong>Join the Best B.Com college IET in Ghaziabad.</strong>{" "}
                            If you are ready to embark on a successful career in
                            commerce, IET College provides you with the ideal
                            platform. Apply now to secure your spot in the best
                            B.Com course in Ghaziabad, Modinagar, and
                            Muradnagar at IET College under TEMPL Group of
                            Institutions.
                        </p>
                    </div>
                </div>
            </section>

            {/* LOCATION */}
            <section className="bcom-section">
                <div className="bcom-container">
                    <Heading
                        label="LOCATION"
                        title="Location Advantage of IET College Ghaziabad"
                    />

                    <div className="bcom-content-width">
                        <p>
                            IET College, a part of TEMPL Group of Institutions,
                            enjoys a strategic location on NH-58, Muradnagar,
                            making it one of the most accessible colleges for
                            students across Ghaziabad, Modinagar, Meerut, and
                            Delhi NCR. The campus offers excellent connectivity
                            through major road networks and public
                            transportation, ensuring a convenient and
                            hassle-free commute for students.
                        </p>
                    </div>

                    <ReasonGrid items={location} />

                    <div className="bcom-content-width bcom-bottom-text">
                        <p>
                            With its central location and excellent
                            transportation links, IET College offers students
                            the perfect combination of academic excellence,
                            convenience, and access to opportunities throughout
                            the Delhi NCR region.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="bcom-section bcom-light-section">
                <div className="bcom-container">
                    <Heading
                        label="HAVE QUESTIONS?"
                        title="Frequently Asked Questions (FAQs)"
                    />

                    <div className="bcom-faq-list">
                        {faqs.map((faq) => (
                            <details className="bcom-faq-item" key={faq.question}>
                                <summary>
                                    <span>{faq.question}</span>
                                    <span className="bcom-faq-plus">+</span>
                                </summary>
                                <div className="bcom-faq-answer">
                                    <p>{faq.answer}</p>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="bcom-final-cta">
                <div className="bcom-container bcom-final-cta-content">
                    <div>
                        <span className="bcom-label">BEGIN YOUR JOURNEY</span>
                        <h2>Join IET College and Start Your B.Com Journey Today</h2>
                        <p>
                            Looking for the best B.Com college in Ghaziabad? IET
                            College offers a comprehensive Bachelor of Commerce
                            program with experienced faculty, modern learning
                            facilities, industry exposure, and placement
                            support. Begin your journey toward a successful
                            career in commerce and business.
                        </p>
                    </div>

                    <Link href="#admission" className="bcom-primary-btn">
                        Apply Now <span>→</span>
                    </Link>
                </div>
            </section>

        </main>
    );
}