import Image from "next/image";
import "./dep-education.css";
export const metadata = {
    title: "Department of Education | TEMPL Group of Institutions",
    description:
        "Explore M.Ed, B.Ed and D.El.Ed programs at the Institute for Education and Technical Sciences, TEMPL Group of Institutions, Ghaziabad.",
};

const programs = [
    {
        id: "med",
        number: "01",
        shortName: "M.Ed",
        fullName: "Master of Education",
        duration: "2 Years",
        type: "Postgraduate",
        intake: "50 Seats",
        description:
            "An advanced postgraduate program designed for individuals who aspire to become educational leaders, researchers and academic professionals.",
    },
    {
        id: "bed",
        number: "02",
        shortName: "B.Ed",
        fullName: "Bachelor of Education",
        duration: "2 Years",
        type: "Undergraduate Professional",
        intake: "100 Seats",
        description:
            "A professional teacher-training program that develops teaching methodologies, educational psychology and practical classroom skills.",
    },
    {
        id: "deled",
        number: "03",
        shortName: "D.El.Ed",
        fullName: "Diploma in Elementary Education",
        duration: "2 Years",
        type: "Diploma",
        intake: "50 Seats",
        description:
            "A professional elementary teacher-training program that prepares aspiring educators to teach and support young learners.",
    },
];

const medReasons = [
    {
        title: "Top-Ranking Education Institution",
        text: "Recognized as one of the leading education institutions in Ghaziabad and Delhi NCR, committed to academic excellence.",
    },
    {
        title: "Comprehensive Curriculum",
        text: "Gain advanced knowledge of educational theory, research methodology, curriculum development, educational psychology and teaching strategies.",
    },
    {
        title: "World-Class Faculty",
        text: "Learn from qualified faculty members with academic and practical experience in the field of education.",
    },
    {
        title: "Modern Infrastructure",
        text: "Experience modern classrooms, multimedia teaching aids, a well-stocked library and research facilities.",
    },
    {
        title: "Global Exposure",
        text: "Explore global educational trends, international teaching practices and contemporary learning methodologies.",
    },
    {
        title: "Placement Assistance",
        text: "Receive career guidance, internship support and placement assistance to explore opportunities in education.",
    },
];

const bedReasons = [
    {
        title: "Convenient Location",
        text: "Our Ghaziabad campus is accessible to students from Modinagar, Muradnagar, Meerut and across Delhi NCR.",
    },
    {
        title: "Two-Year Professional Program",
        text: "The full-time B.Ed course combines theoretical knowledge with practical training in pedagogy and curriculum design.",
    },
    {
        title: "Experienced Faculty",
        text: "Learn from qualified faculty members through innovative teaching practices and interactive learning environments.",
    },
    {
        title: "Modern Infrastructure",
        text: "Study in a pollution-free, lush green campus with multimedia classrooms, libraries, seminar halls and laboratories.",
    },
];

const deledReasons = [
    {
        title: "Excellence in Teacher Education",
        text: "Develop the knowledge and professional skills required to become an effective elementary-level educator.",
    },
    {
        title: "Comprehensive Curriculum",
        text: "Study teaching methodologies, child psychology, classroom management, educational technologies and practical teaching.",
    },
    {
        title: "Qualified Faculty",
        text: "Receive personalized guidance from experienced faculty members who support your academic and professional development.",
    },
    {
        title: "Modern Infrastructure",
        text: "Access multimedia classrooms, well-stocked libraries and dedicated teaching laboratories.",
    },
    {
        title: "Holistic Development",
        text: "Participate in personality development programs, group discussions and leadership training.",
    },
];

const medAdmission = [
    "Complete the online application form available on the official TEMPL Group of Institutions website.",
    "Appear for the CCS University Meerut entrance examination or another recognized entrance examination, as applicable.",
    "The merit list is prepared based on entrance examination results, academic qualifications and other selection criteria.",
    "Selected candidates must complete the admission formalities within the prescribed time frame.",
];

const bedAdmission = [
    "Fill out the B.Ed admission application form available on the official website.",
    "Appear for the entrance test organized by CCS University Meerut.",
    "After selection, complete document verification and submit the prescribed admission fee.",
    "Classes commence according to the academic calendar prescribed by CCS University Meerut.",
];

const deledAdmission = [
    "Visit the official TEMPL Group of Institutions website and complete the online D.El.Ed/BTC application form.",
    "Register on the DIET portal for counselling, according to the applicable guidelines.",
    "Complete the entrance examination or interview, if applicable, and follow the selection process.",
    "After receiving the admission offer, complete the fee payment and final admission formalities.",
];

const medFaqs = [
    {
        question: "What is the duration of the M.Ed program?",
        answer: "The Master of Education (M.Ed) program is a two-year postgraduate course.",
    },
    {
        question: "What is the eligibility for M.Ed admission?",
        answer: "Candidates must have completed B.Ed or an equivalent degree from a recognized university with a minimum of 55% marks.",
    },
    {
        question: "Is there an entrance examination for M.Ed?",
        answer: "Admission may require an entrance examination conducted by CCS University Meerut or another recognized authority.",
    },
    {
        question: "How many seats are available in the M.Ed program?",
        answer: "The M.Ed program has a limited intake of 50 seats.",
    },
    {
        question: "What career opportunities are available after M.Ed?",
        answer: "Graduates can explore opportunities in educational leadership, research, teacher education, academic administration and other advanced education roles.",
    },
];

const bedFaqs = [
    {
        question: "What is the duration of the B.Ed course?",
        answer: "The B.Ed program is a two-year full-time professional course.",
    },
    {
        question: "What are the eligibility criteria for B.Ed?",
        answer: "Candidates must have completed graduation or postgraduation in any stream with at least 50% marks for General/OBC candidates. SC/ST candidates must have passed, subject to applicable university and regulatory norms.",
    },
    {
        question: "Which university is the B.Ed program affiliated with?",
        answer: "The B.Ed program is affiliated with CCS University, Meerut, as stated by the institution.",
    },
    {
        question: "How many seats are available in B.Ed?",
        answer: "The B.Ed program has an intake of 100 seats per academic year.",
    },
    {
        question: "What career options are available after B.Ed?",
        answer: "Graduates can pursue teaching positions in schools and explore opportunities in educational administration, curriculum development and related education fields.",
    },
];

const deledFaqs = [
    {
        question: "What is D.El.Ed/BTC?",
        answer: "D.El.Ed, also known as Basic Teacher Training Course (BTC), is a two-year professional program focused on elementary teacher education.",
    },
    {
        question: "What is the eligibility for D.El.Ed admission?",
        answer: "Candidates must have completed graduation with a minimum of 50% marks from a recognized university.",
    },
    {
        question: "How many seats are available in D.El.Ed?",
        answer: "The D.El.Ed/BTC program has an intake of 50 seats per batch.",
    },
    {
        question: "Is DIET registration required?",
        answer: "Students must register on the DIET portal for counselling according to the applicable guidelines.",
    },
    {
        question: "What career opportunities are available after D.El.Ed?",
        answer: "Graduates can explore careers as primary school teachers, preschool teachers, special education teachers, education counsellors and NGO educators, subject to applicable recruitment requirements.",
    },
];

function SectionHeading({ eyebrow, title, description }) {
    return (
        <div className="education-section-heading">
            <span className="education-eyebrow">{eyebrow}</span>
            <h2>{title}</h2>
            {description && <p>{description}</p>}
        </div>
    );
}

function ReasonCards({ items }) {
    return (
        <div className="education-reason-grid">
            {items.map((item, index) => (
                <article className="education-reason-card" key={item.title}>
                    <span className="education-card-number">
                        {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                </article>
            ))}
        </div>
    );
}

function AdmissionSteps({ steps }) {
    return (
        <div className="education-steps">
            {steps.map((step, index) => (
                <div className="education-step" key={index}>
                    <span className="education-step-number">
                        {String(index + 1).padStart(2, "0")}
                    </span>
                    <p>{step}</p>
                </div>
            ))}
        </div>
    );
}

function FaqSection({ items }) {
    return (
        <div className="education-faq-list">
            {items.map((item, index) => (
                <details className="education-faq-item" key={item.question}>
                    <summary>
                        <span>{item.question}</span>
                        <span className="education-faq-icon">+</span>
                    </summary>
                    <p>{item.answer}</p>
                </details>
            ))}
        </div>
    );
}

export default function DepartmentOfEducation() {
    return (
        <main className="education-page">

            {/* HERO IMAGE */}
            <section className="education-hero">
                <Image
                    src="/images/department_of_education.webp"
                    alt="Department of Education at TEMPL Group of Institutions"
                    fill
                    priority
                    unoptimized
                    sizes="100vw"
                    className="education-hero-image"
                />
            </section>

            {/* INTRODUCTION */}
            <section className="education-intro education-container">
                <div className="education-intro-content">
                    <span className="education-eyebrow">
                        INSTITUTE FOR EDUCATION AND TECHNICAL SCIENCES
                    </span>

                    <h1>
                        Department of <span>Education</span>
                    </h1>

                    <p className="education-intro-lead">
                        Your Pathway to Success in Education
                    </p>

                    <p>
                        Welcome to the Institute for Education and Technical
                        Sciences (IET), under the esteemed TEMPL Group of
                        Institutions. We are committed to developing skilled,
                        knowledgeable and innovative educators who can shape
                        the future of education.
                    </p>

                    <p>
                        Our Department of Education offers three professional
                        programs: Master of Education (M.Ed), Bachelor of
                        Education (B.Ed) and Diploma in Elementary Education
                        (D.El.Ed/BTC). Each program combines academic learning,
                        practical experience and professional development to
                        prepare students for rewarding careers in education.
                    </p>

                    <div className="education-intro-tags">
                        <span>Academic Excellence</span>
                        <span>Experienced Faculty</span>
                        <span>Modern Infrastructure</span>
                    </div>
                </div>

                <div className="education-intro-side">
                    <div className="education-highlight-card">
                        <span className="education-highlight-icon">01</span>
                        <h3>Learn</h3>
                        <p>Build a strong foundation in educational knowledge.</p>
                    </div>

                    <div className="education-highlight-card">
                        <span className="education-highlight-icon">02</span>
                        <h3>Practice</h3>
                        <p>Develop practical teaching and classroom skills.</p>
                    </div>

                    <div className="education-highlight-card">
                        <span className="education-highlight-icon">03</span>
                        <h3>Lead</h3>
                        <p>Become a confident and capable education professional.</p>
                    </div>
                </div>
            </section>

            {/* QUICK COURSE NAVIGATION */}
            <nav className="education-course-nav education-container">
                <span>Explore Our Programs</span>
                {programs.map((program) => (
                    <a href={`#${program.id}`} key={program.id}>
                        {program.shortName}
                        <span>↗</span>
                    </a>
                ))}
                <a href="#education-faq">FAQs <span>↗</span></a>
            </nav>

            {/* PROGRAM OVERVIEW */}
            <section className="education-program-overview education-container">
                <SectionHeading
                    eyebrow="OUR ACADEMIC PROGRAMS"
                    title="Choose Your Path in Education"
                    description="Explore our professional education programs designed to develop the next generation of teachers, researchers and educational leaders."
                />

                <div className="education-program-grid">
                    {programs.map((program) => (
                        <a
                            href={`#${program.id}`}
                            className="education-program-card"
                            key={program.id}
                        >
                            <div className="education-program-top">
                                <span>{program.number}</span>
                                <span className="education-program-arrow">↗</span>
                            </div>

                            <h3>{program.shortName}</h3>
                            <h4>{program.fullName}</h4>
                            <p>{program.description}</p>

                            <div className="education-program-meta">
                                <span>{program.duration}</span>
                                <span>{program.intake}</span>
                            </div>

                            <div className="education-program-link">
                                Explore Program <span>→</span>
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            {/* M.ED SECTION */}
            <section className="education-course-section education-med-section" id="med">
                <div className="education-container">

                    <div className="education-course-header">
                        <div>
                            <span className="education-eyebrow">POSTGRADUATE PROGRAM</span>
                            <h2>
                                Master of <span>Education</span>
                            </h2>
                            <p className="education-course-subtitle">M.Ed — Advance Your Career in Education</p>
                        </div>

                        <span className="education-course-badge">02 YEARS</span>
                    </div>

                    <div className="education-course-intro">
                        <div>
                            <p>
                                The Master of Education (M.Ed) program at TEMPL
                                Group of Institutions is a highly regarded
                                two-year postgraduate course designed for
                                individuals passionate about advancing their
                                careers in education.
                            </p>

                            <p>
                                If you aspire to become an educational leader,
                                researcher or educator at higher levels, this
                                program offers a pathway to professional growth.
                                It is designed to provide a comprehensive
                                understanding of educational theory, research
                                methods and advanced teaching methodologies.
                            </p>

                            <p>
                                The program combines academic rigour with
                                practical learning experiences, preparing
                                graduates to contribute to the evolving
                                landscape of education.
                            </p>
                        </div>

                        <div className="education-course-facts">
                            <div>
                                <span>Duration</span>
                                <strong>2 Years</strong>
                            </div>
                            <div>
                                <span>Program Level</span>
                                <strong>Postgraduate</strong>
                            </div>
                            <div>
                                <span>Seat Intake</span>
                                <strong>50 Seats</strong>
                            </div>
                        </div>
                    </div>

                    <SectionHeading
                        eyebrow="WHY CHOOSE US"
                        title="Why Choose TEMPL for M.Ed?"
                        description="Experience a learning environment that supports academic excellence, research and professional development."
                    />

                    <ReasonCards items={medReasons} />

                    <div className="education-info-grid">
                        <article className="education-info-card">
                            <span className="education-eyebrow">ADMISSION REQUIREMENTS</span>
                            <h3>Eligibility Criteria</h3>

                            <ul className="education-check-list">
                                <li>
                                    <strong>Educational Qualification:</strong>{" "}
                                    B.Ed or an equivalent degree from a
                                    recognized university.
                                </li>
                                <li>
                                    <strong>Minimum Marks:</strong> 55% marks
                                    in the qualifying degree.
                                </li>
                                <li>
                                    <strong>Age Limit:</strong> No specific
                                    age limit has been stated for M.Ed
                                    admissions.
                                </li>
                                <li>
                                    <strong>Entrance Exam:</strong> Admission
                                    may require the CCS University Meerut
                                    entrance examination or another recognized
                                    test.
                                </li>
                            </ul>
                        </article>

                        <article className="education-info-card">
                            <span className="education-eyebrow">HOW TO APPLY</span>
                            <h3>M.Ed Admission Process</h3>
                            <AdmissionSteps steps={medAdmission} />
                        </article>
                    </div>

                    <div className="education-seat-banner">
                        <div>
                            <span>LIMITED SEAT INTAKE</span>
                            <h3>50 Seats for M.Ed</h3>
                            <p>
                                Apply early and take the next step towards
                                becoming an educational professional.
                            </p>
                        </div>
                        <a href="#education-contact" className="education-button">
                            Apply Now <span>→</span>
                        </a>
                    </div>

                    <div className="education-why-list">
                        <h3>Why M.Ed at TEMPL Group of Institutions?</h3>
                        <div>
                            <span>Top College in Ghaziabad</span>
                            <span>Experienced Faculty</span>
                            <span>Modern Learning Environment</span>
                            <span>Co-curricular Activities</span>
                            <span>Delhi NCR Connectivity</span>
                            <span>Global Exposure</span>
                            <span>Placement Assistance</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* B.ED SECTION */}
            <section className="education-course-section education-bed-section" id="bed">
                <div className="education-container">

                    <div className="education-course-header">
                        <div>
                            <span className="education-eyebrow">PROFESSIONAL TEACHER EDUCATION</span>
                            <h2>
                                Bachelor of <span>Education</span>
                            </h2>
                            <p className="education-course-subtitle">
                                B.Ed — Shape the Future of Education
                            </p>
                        </div>

                        <span className="education-course-badge">02 YEARS</span>
                    </div>

                    <div className="education-course-intro">
                        <div>
                            <p>
                                Welcome to the Institute for Education and
                                Technical Sciences (IET), one of the leading
                                education institutions in Ghaziabad and the
                                Delhi NCR region.
                            </p>

                            <p>
                                Our Bachelor of Education (B.Ed) program is
                                designed for passionate individuals who aspire
                                to shape the future of education and make a
                                lasting impact on society.
                            </p>

                            <p>
                                This two-year full-time course provides
                                students with a strong understanding of
                                teaching methodologies, educational psychology
                                and practical classroom skills. The curriculum
                                combines theoretical learning with modern
                                teaching strategies to prepare confident,
                                capable and innovative educators.
                            </p>
                        </div>

                        <div className="education-course-facts">
                            <div>
                                <span>Duration</span>
                                <strong>2 Years</strong>
                            </div>
                            <div>
                                <span>Study Mode</span>
                                <strong>Full-Time</strong>
                            </div>
                            <div>
                                <span>Seat Intake</span>
                                <strong>100 Seats</strong>
                            </div>
                            <div>
                                <span>Affiliation</span>
                                <strong>CCS University</strong>
                            </div>
                        </div>
                    </div>

                    <SectionHeading
                        eyebrow="LEARN WITH EXCELLENCE"
                        title="Why Choose TEMPL for B.Ed?"
                        description="Build your teaching career with academic guidance, practical training and a supportive learning environment."
                    />

                    <ReasonCards items={bedReasons} />

                    <div className="education-info-grid">
                        <article className="education-info-card">
                            <span className="education-eyebrow">COURSE DETAILS</span>
                            <h3>B.Ed Eligibility Criteria</h3>

                            <ul className="education-check-list">
                                <li>
                                    <strong>Qualification:</strong> Graduation
                                    or postgraduation in any stream from a
                                    recognized university.
                                </li>
                                <li>
                                    <strong>General/OBC:</strong> Minimum 50%
                                    marks.
                                </li>
                                <li>
                                    <strong>SC/ST:</strong> Must have passed
                                    the qualifying examination, subject to
                                    applicable regulations.
                                </li>
                                <li>
                                    <strong>Regulations:</strong> Admission is
                                    subject to CCS University Meerut and NCTE
                                    norms.
                                </li>
                            </ul>

                            <div className="education-affiliation">
                                <span>University Affiliation</span>
                                <strong>CCS University, Meerut</strong>
                            </div>
                        </article>

                        <article className="education-info-card">
                            <span className="education-eyebrow">HOW TO APPLY</span>
                            <h3>B.Ed Admission Process</h3>
                            <AdmissionSteps steps={bedAdmission} />
                        </article>
                    </div>

                    <div className="education-why-list">
                        <h3>Why TEMPL is a Preferred Choice for B.Ed</h3>
                        <div>
                            <span>Academic Excellence</span>
                            <span>Holistic Development</span>
                            <span>Industry Collaboration</span>
                            <span>Modern Infrastructure</span>
                            <span>Placement Assistance</span>
                            <span>Convenient NH-58 Location</span>
                        </div>
                    </div>

                    <div className="education-seat-banner">
                        <div>
                            <span>ADMISSIONS OPEN</span>
                            <h3>100 Seats for B.Ed</h3>
                            <p>
                                Begin your professional journey and become
                                an inspiring educator.
                            </p>
                        </div>
                        <a href="#education-contact" className="education-button">
                            Apply Now <span>→</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* D.EL.ED SECTION */}
            <section className="education-course-section education-deled-section" id="deled">
                <div className="education-container">

                    <div className="education-course-header">
                        <div>
                            <span className="education-eyebrow">ELEMENTARY TEACHER TRAINING</span>
                            <h2>
                                Diploma in <span>Elementary Education</span>
                            </h2>
                            <p className="education-course-subtitle">
                                D.El.Ed / BTC — Build the Foundation of Young Minds
                            </p>
                        </div>

                        <span className="education-course-badge">02 YEARS</span>
                    </div>

                    <div className="education-course-intro">
                        <div>
                            <p>
                                The Institute for Education and Technical
                                Sciences under TEMPL Group of Institutions
                                proudly offers D.El.Ed (Diploma in Elementary
                                Education), also known as BTC (Basic Teacher
                                Training Course).
                            </p>

                            <p>
                                This two-year professional training program
                                is designed for individuals passionate about
                                becoming effective educators at the elementary
                                school level.
                            </p>

                            <p>
                                The course equips aspiring teachers with
                                foundational pedagogical skills, knowledge of
                                child development and practical teaching
                                experience required to succeed in the classroom.
                                Located in Ghaziabad, Delhi NCR, the institution
                                provides a supportive environment for future
                                educators.
                            </p>
                        </div>

                        <div className="education-course-facts">
                            <div>
                                <span>Duration</span>
                                <strong>2 Years</strong>
                            </div>
                            <div>
                                <span>Program Type</span>
                                <strong>Diploma</strong>
                            </div>
                            <div>
                                <span>Seat Intake</span>
                                <strong>50 Seats</strong>
                            </div>
                            <div>
                                <span>Course Name</span>
                                <strong>D.El.Ed / BTC</strong>
                            </div>
                        </div>
                    </div>

                    <SectionHeading
                        eyebrow="WHY STUDY D.EL.ED"
                        title="Why Choose TEMPL for D.El.Ed / BTC?"
                        description="Develop the teaching skills, subject knowledge and professional confidence required to support elementary education."
                    />

                    <ReasonCards items={deledReasons} />

                    <div className="education-info-grid">
                        <article className="education-info-card">
                            <span className="education-eyebrow">ADMISSION REQUIREMENTS</span>
                            <h3>D.El.Ed Eligibility</h3>

                            <ul className="education-check-list">
                                <li>
                                    <strong>Educational Qualification:</strong>{" "}
                                    Graduation from a recognized university.
                                </li>
                                <li>
                                    <strong>Minimum Marks:</strong> 50% marks
                                    in the qualifying examination.
                                </li>
                                <li>
                                    <strong>Reservation:</strong> Admission
                                    and seat allocation are subject to
                                    applicable government and regulatory norms.
                                </li>
                            </ul>
                        </article>

                        <article className="education-info-card">
                            <span className="education-eyebrow">HOW TO APPLY</span>
                            <h3>D.El.Ed Admission Process</h3>
                            <AdmissionSteps steps={deledAdmission} />
                        </article>
                    </div>

                    <div className="education-seat-banner">
                        <div>
                            <span>SEAT INTAKE</span>
                            <h3>50 Seats for D.El.Ed / BTC</h3>
                            <p>
                                Seat allocation and reservation are subject
                                to government norms and applicable NCTE policies.
                            </p>
                        </div>
                        <a href="#education-contact" className="education-button">
                            Apply Now <span>→</span>
                        </a>
                    </div>

                    {/* CURRICULUM */}
                    <div className="education-curriculum">
                        <SectionHeading
                            eyebrow="WHAT YOU WILL LEARN"
                            title="D.El.Ed Learning Areas"
                            description="Build essential knowledge and practical skills for elementary classroom teaching."
                        />

                        <div className="education-curriculum-grid">
                            {[
                                "Teaching Methodologies",
                                "Child Psychology",
                                "Classroom Management",
                                "Educational Technologies",
                                "Hands-on Teaching Practices",
                            ].map((item, index) => (
                                <div className="education-curriculum-item" key={item}>
                                    <span>0{index + 1}</span>
                                    <h3>{item}</h3>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CAREER OPPORTUNITIES */}
                    <div className="education-career-section">
                        <SectionHeading
                            eyebrow="YOUR FUTURE CAREER"
                            title="Career Opportunities After D.El.Ed / BTC"
                            description="The program opens doors to different professional opportunities in the education sector, subject to applicable recruitment requirements."
                        />

                        <div className="education-career-grid">
                            <article>
                                <span>01</span>
                                <h3>Primary School Teacher</h3>
                                <p>
                                    Work in government and private primary
                                    schools across India.
                                </p>
                            </article>

                            <article>
                                <span>02</span>
                                <h3>Special Education Teacher</h3>
                                <p>
                                    Support students with learning disabilities
                                    through personalized teaching.
                                </p>
                            </article>

                            <article>
                                <span>03</span>
                                <h3>Pre-School Teacher</h3>
                                <p>
                                    Work as an educator in early childhood
                                    education institutions.
                                </p>
                            </article>

                            <article>
                                <span>04</span>
                                <h3>Education Counsellor</h3>
                                <p>
                                    Guide students in their academic journeys
                                    and provide educational support.
                                </p>
                            </article>

                            <article>
                                <span>05</span>
                                <h3>Education Coordinator</h3>
                                <p>
                                    Assist with curriculum planning, teacher
                                    coordination and school administration.
                                </p>
                            </article>

                            <article>
                                <span>06</span>
                                <h3>NGO Educator and Trainer</h3>
                                <p>
                                    Contribute to educational initiatives and
                                    child development programs.
                                </p>
                            </article>
                        </div>
                    </div>

                    {/* PLACEMENT SUPPORT */}
                    <div className="education-placement">
                        <SectionHeading
                            eyebrow="CAREER DEVELOPMENT"
                            title="Placement Assistance and Career Support"
                            description="We support students in preparing for professional opportunities through career-oriented activities."
                        />

                        <div className="education-placement-grid">
                            <article>
                                <h3>Pre-Placement Training</h3>
                                <p>
                                    Workshops on resume building, mock
                                    interviews, group discussions and
                                    personality development.
                                </p>
                            </article>

                            <article>
                                <h3>Industrial Visits</h3>
                                <p>
                                    Gain practical exposure and insights into
                                    the education sector.
                                </p>
                            </article>

                            <article>
                                <h3>Guest Lectures & Seminars</h3>
                                <p>
                                    Interact with educators and professionals
                                    to understand current educational trends.
                                </p>
                            </article>
                        </div>
                    </div>

                    <div className="education-why-list">
                        <h3>Why Choose TEMPL for D.El.Ed / BTC?</h3>
                        <div>
                            <span>Top Ranking in Ghaziabad</span>
                            <span>World-Class Infrastructure</span>
                            <span>Holistic Development</span>
                            <span>Modern Laboratories</span>
                            <span>Wi-Fi Enabled Campus</span>
                            <span>Convenient NH-58 Location</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* SHARED INFRASTRUCTURE */}
            <section className="education-infrastructure education-container" id="infrastructure">
                <SectionHeading
                    eyebrow="CAMPUS FACILITIES"
                    title="A Modern Environment for Learning"
                    description="TEMPL Group of Institutions provides a supportive academic environment with facilities designed to enhance learning and professional development."
                />

                <div className="education-facility-grid">
                    <article>
                        <span>01</span>
                        <h3>Modern Classrooms</h3>
                        <p>
                            Spacious classrooms equipped with multimedia
                            teaching aids and modern learning facilities.
                        </p>
                    </article>

                    <article>
                        <span>02</span>
                        <h3>Well-Stocked Library</h3>
                        <p>
                            Access academic resources, reference books and
                            learning materials to support your studies.
                        </p>
                    </article>

                    <article>
                        <span>03</span>
                        <h3>Teaching & Research Labs</h3>
                        <p>
                            Dedicated facilities that support practical
                            learning, research and teaching activities.
                        </p>
                    </article>

                    <article>
                        <span>04</span>
                        <h3>Seminar Halls</h3>
                        <p>
                            Participate in academic discussions, workshops,
                            seminars and educational activities.
                        </p>
                    </article>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="education-faq-section" id="education-faq">
                <div className="education-container">
                    <SectionHeading
                        eyebrow="FREQUENTLY ASKED QUESTIONS"
                        title="Everything You Need to Know"
                        description="Find answers to common questions about our education programs."
                    />

                    <div className="education-faq-course">
                        <h3>M.Ed — Master of Education</h3>
                        <FaqSection items={medFaqs} />
                    </div>

                    <div className="education-faq-course">
                        <h3>B.Ed — Bachelor of Education</h3>
                        <FaqSection items={bedFaqs} />
                    </div>

                    <div className="education-faq-course">
                        <h3>D.El.Ed / BTC</h3>
                        <FaqSection items={deledFaqs} />
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="education-contact-section" id="education-contact">
                <div className="education-contact-content">
                    <span>YOUR FUTURE STARTS HERE</span>

                    <h2>
                        Ready to Shape the Future of <strong>Education?</strong>
                    </h2>

                    <p>
                        Join the Institute for Education and Technical Sciences
                        under TEMPL Group of Institutions. Choose your program
                        and begin a rewarding journey towards becoming a
                        skilled, confident and inspiring educator.
                    </p>

                    <div className="education-contact-actions">
                        <a href="https://www.templgroup.in/" className="education-button">
                            Visit Official Website <span>↗</span>
                        </a>

                        <a href="#med" className="education-outline-button">
                            Explore Programs
                        </a>
                    </div>

                    <small>
                        For information about admissions, course structure
                        and fees, contact the admissions team or visit the
                        campus in Ghaziabad, Delhi NCR.
                    </small>
                </div>
            </section>

        </main>
    );
}