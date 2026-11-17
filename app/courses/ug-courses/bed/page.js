import Link from "next/link";
import Image from "next/image";
import "./bed.css";

/* =========================================================
   SEO METADATA
========================================================= */

export const metadata = {
    metadataBase: new URL("https://www.templgroup.in"),

    title: "B.Ed College in Ghaziabad | Admission 2026 | IET College",

    description:
        "Explore the 2-year B.Ed programme at IET College, TEMPL Group, Ghaziabad. Discover course details, eligibility, admission guidance, teaching facilities and career opportunities.",

    alternates: {
        canonical: "/Bed",
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },

    openGraph: {
        title: "B.Ed College in Ghaziabad | IET College – TEMPL Group",

        description:
            "Explore the Bachelor of Education programme at IET College, TEMPL Group of Institutions, Ghaziabad. Learn about eligibility, admission and teaching career opportunities.",

        url: "https://www.templgroup.in/Bed",

        siteName: "TEMPL Group of Institutions",

        locale: "en_IN",

        type: "website",

        images: [
            {
                url: "/images/bed.webp",
                width: 1200,
                height: 630,
                alt: "B.Ed programme at IET College, TEMPL Group of Institutions",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",

        title: "B.Ed College in Ghaziabad | IET College",

        description:
            "Explore B.Ed admission at IET College, Ghaziabad. Discover course details, eligibility and teaching career opportunities.",

        images: ["/images/bed.webp"],
    },
};


/* =========================================================
   COURSE DETAILS
========================================================= */

const courseDetails = [
    {
        label: "Course Duration",
        value: "2 Years",
    },
    {
        label: "Degree",
        value: "Bachelor of Education",
    },
    {
        label: "Study Mode",
        value: "Full-Time",
    },
    {
        label: "Course Level",
        value: "Professional Teacher Education",
    },
    {
        label: "Institution",
        value: "IET College",
    },
    {
        label: "Location",
        value: "Muradnagar, Ghaziabad",
    },
];


/* =========================================================
   WHY CHOOSE TEMPL
========================================================= */

const reasons = [
    {
        title: "Experienced Faculty",
        description:
            "Learn from faculty members who guide students in understanding educational concepts, teaching methodologies and classroom practices.",
    },
    {
        title: "Teaching-Focused Curriculum",
        description:
            "Develop knowledge of educational psychology, pedagogy, curriculum planning, assessment and effective teaching methods.",
    },
    {
        title: "Practical Learning",
        description:
            "Gain exposure to teaching practice, lesson planning, classroom activities and other practical aspects of teacher education.",
    },
    {
        title: "Learning Infrastructure",
        description:
            "Access an academic environment designed to support classroom learning, collaborative activities and professional development.",
    },
    {
        title: "Student Development",
        description:
            "Participate in academic and co-curricular activities that encourage communication, confidence and leadership skills.",
    },
    {
        title: "Admission Guidance",
        description:
            "Receive assistance from the admission team regarding course information, eligibility requirements and application procedures.",
    },
];


/* =========================================================
   ADMISSION STEPS
========================================================= */

const admissionSteps = [
    {
        title: "Enquire About the Programme",
        description:
            "Contact the admission team to understand the B.Ed programme, eligibility conditions, available seats and admission requirements.",
    },
    {
        title: "Check Eligibility",
        description:
            "Review the academic qualifications and minimum marks required under the applicable university and NCTE admission regulations.",
    },
    {
        title: "Complete the Application",
        description:
            "Follow the prescribed application procedure and submit the required personal and academic information.",
    },
    {
        title: "Document Verification",
        description:
            "Submit the necessary educational certificates, identity documents and other documents required for admission.",
    },
    {
        title: "Complete Admission Formalities",
        description:
            "Follow the applicable admission procedure and complete the required formalities after confirmation of eligibility and selection.",
    },
];


/* =========================================================
   INSTITUTION ADVANTAGES
========================================================= */

const advantages = [
    {
        title: "Established Educational Institution",
        description:
            "TEMPL Group of Institutions has a long-standing presence in the education sector, with its institutional journey beginning in 1998.",
    },
    {
        title: "Academic Learning Environment",
        description:
            "Students can develop subject knowledge, communication skills and professional abilities through structured academic activities.",
    },
    {
        title: "Practical Teaching Exposure",
        description:
            "Teaching practice and related academic activities help students understand the responsibilities and challenges of the teaching profession.",
    },
    {
        title: "Convenient Campus Location",
        description:
            "The IET College campus is situated on NH-58, Abupur Road, Muradnagar, Ghaziabad, Uttar Pradesh.",
    },
    {
        title: "Student Support",
        description:
            "Students can seek guidance regarding academic matters, admission procedures and institutional activities.",
    },
    {
        title: "Overall Development",
        description:
            "Academic and co-curricular opportunities encourage confidence, teamwork, communication and personal growth.",
    },
];


/* =========================================================
   CAREER OPPORTUNITIES
========================================================= */

const careers = [
    {
        title: "School Teacher",
        description:
            "Explore teaching opportunities in schools, subject to the recruitment and eligibility requirements of the respective institution.",
    },
    {
        title: "Private Tutor",
        description:
            "Provide individual or group academic support to school students through private tutoring.",
    },
    {
        title: "Educational Content Developer",
        description:
            "Contribute to the development of educational resources, worksheets, lesson materials and learning content.",
    },
    {
        title: "Academic Coordinator",
        description:
            "Explore academic coordination opportunities with schools and educational organisations, subject to relevant experience and requirements.",
    },
    {
        title: "Online Educator",
        description:
            "Use digital learning platforms to support students through online lessons, tutorials and educational sessions.",
    },
    {
        title: "Education Sector Opportunities",
        description:
            "Explore other education-related roles with additional qualifications, experience and relevant professional skills.",
    },
];


/* =========================================================
   REGISTRATION BENEFITS
========================================================= */

const registrationBenefits = [
    "Get information about B.Ed admission requirements.",
    "Understand eligibility and application procedures.",
    "Receive guidance about required documents.",
    "Learn about programme structure and course duration.",
    "Get information about applicable fees and scholarships.",
    "Connect with the admission team for assistance.",
];


/* =========================================================
   FAQ DATA
========================================================= */

const faqs = [
    {
        question: "What is the duration of the B.Ed course?",

        answer:
            "The Bachelor of Education (B.Ed) is generally a two-year professional teacher education programme.",
    },
    {
        question: "What is the eligibility for B.Ed admission?",

        answer:
            "Candidates generally need a bachelor's or master's degree with the minimum marks prescribed by the applicable university and NCTE regulations. Eligibility and relaxation conditions should be checked in the current admission notification.",
    },
    {
        question: "Is the B.Ed programme recognised by NCTE?",

        answer:
            "Candidates should verify the current NCTE recognition status of the B.Ed programme at IET College for the relevant academic session before applying.",
    },
    {
        question: "Is IET College affiliated with CCS University for B.Ed?",

        answer:
            "Please confirm the current B.Ed affiliation and admission details with IET College or the relevant university before applying.",
    },
    {
        question: "How many seats are available in the B.Ed programme?",

        answer:
            "The previously stated intake is 100 seats. The approved intake for the relevant academic session should be confirmed with the institution and applicable regulatory records.",
    },
    {
        question: "What career opportunities are available after B.Ed?",

        answer:
            "Graduates can explore school teaching, private tutoring, online education and other education-related opportunities. Government and many other school teaching positions may require qualifying examinations such as CTET or the relevant State TET, along with applicable recruitment conditions.",
    },
    {
        question: "Does IET College provide admission assistance?",

        answer:
            "Students can contact the admission team for information about eligibility, application procedures, documents, fees and admission requirements.",
    },
    {
        question: "Where is IET College located?",

        answer:
            "IET College is located at NH-58, Abupur Road, Muradnagar, Ghaziabad, Uttar Pradesh 201206.",
    },
];


/* =========================================================
   COURSE STRUCTURED DATA
========================================================= */

const courseSchema = {
    "@context": "https://schema.org",

    "@type": "Course",

    name: "Bachelor of Education (B.Ed)",

    description:
        "The Bachelor of Education programme is a professional teacher education course focusing on educational psychology, teaching methodologies, pedagogy, classroom management, assessment and practical teaching skills.",

    url: "https://www.templgroup.in/Bed",

    courseCode: "B.Ed",

    educationalLevel: "Undergraduate",

    teaches: [
        "Teaching Methodology",
        "Educational Psychology",
        "Classroom Management",
        "Pedagogy",
        "Educational Technology",
        "Curriculum Development",
        "Assessment and Evaluation",
        "Inclusive Education",
        "School Internship",
        "Teaching Practice",
    ],

    provider: {
        "@type": "CollegeOrUniversity",

        name: "Institute for Education and Technical Sciences (IET College)",

        parentOrganization: {
            "@type": "EducationalOrganization",

            name: "TEMPL Group of Institutions",

            url: "https://www.templgroup.in",
        },

        url: "https://www.templgroup.in",

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

        courseMode: "Onsite",

        duration: "P2Y",
    },
};


/* =========================================================
   FAQ STRUCTURED DATA
========================================================= */

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


/* =========================================================
   BREADCRUMB STRUCTURED DATA
========================================================= */

const breadcrumbSchema = {
    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement: [
        {
            "@type": "ListItem",

            position: 1,

            name: "Home",

            item: "https://www.templgroup.in/",
        },
        {
            "@type": "ListItem",

            position: 2,

            name: "B.Ed",

            item: "https://www.templgroup.in/Bed",
        },
    ],
};


/* =========================================================
   JSON-LD HELPER
========================================================= */

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


/* =========================================================
   MAIN PAGE
========================================================= */

export default function BedPage() {
    return (
        <main className="bed-page">

            {/* STRUCTURED DATA */}

            <JsonLd data={courseSchema} />
            <JsonLd data={faqSchema} />
            <JsonLd data={breadcrumbSchema} />


            {/* FULL-WIDTH BANNER IMAGE */}

            <section className="bed-banner">
                <Image
                    src="/images/department_of_education.webp"
                    alt="Bachelor of Education B.Ed programme at IET College, TEMPL Group of Institutions"
                    fill
                    priority
                    sizes="100vw"
                    className="bed-banner-img"
                />
            </section>


            {/* INTRODUCTION */}

            <section className="bed-top-section">
                <div className="bed-container">

                    <div className="bed-hero-content">

                        <span className="bed-label">
                            IET COLLEGE | TEMPL GROUP OF INSTITUTIONS
                        </span>

                        <h1>
                            B.Ed – Bachelor of Education in Ghaziabad
                        </h1>

                        <div className="bed-title-line"></div>

                        <h2>
                            Prepare for a Meaningful Career in Education
                        </h2>

                        <p>
                            The Bachelor of Education (B.Ed) is a
                            professional teacher education programme
                            designed for graduates who aspire to work
                            in the field of education. At IET College,
                            TEMPL Group of Institutions, students can
                            explore the academic foundations of teaching,
                            educational psychology, pedagogy and classroom
                            practices.
                        </p>

                        <p>
                            The programme focuses on developing the
                            knowledge, communication abilities and
                            practical skills required to understand
                            modern teaching environments. Students
                            learn about lesson planning, assessment,
                            classroom management and the responsibilities
                            of an educator.
                        </p>

                        <Link
                            href="#bed-admission"
                            className="bed-primary-btn"
                        >
                            Explore Admission <span>→</span>
                        </Link>

                    </div>


                    {/* COURSE HIGHLIGHTS */}

                    <div className="bed-course-grid">

                        {courseDetails.map((item, index) => (
                            <article
                                className="bed-glass bed-course-card"
                                key={item.label}
                            >
                                <span className="bed-card-number">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <h3>{item.label}</h3>

                                <p>{item.value}</p>
                            </article>
                        ))}

                    </div>

                </div>
            </section>


            {/* WHY CHOOSE TEMPL */}

            <section className="bed-section">
                <div className="bed-container">

                    <div className="bed-heading">

                        <span className="bed-label">
                            WHY CHOOSE US
                        </span>

                        <h2>
                            Why Choose IET College for Your B.Ed?
                        </h2>

                        <div className="bed-title-line"></div>

                    </div>


                    <div className="bed-reasons-grid">

                        {reasons.map((item, index) => (
                            <article
                                className="bed-glass bed-reason-card"
                                key={item.title}
                            >
                                <span className="bed-card-number">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <h3>{item.title}</h3>

                                <p>{item.description}</p>
                            </article>
                        ))}

                    </div>

                </div>
            </section>


            {/* COURSE DETAILS */}

            <section className="bed-section bed-section-dark">
                <div className="bed-container">

                    <div className="bed-heading">

                        <span className="bed-label">
                            PROGRAMME OVERVIEW
                        </span>

                        <h2>
                            B.Ed Course Details
                        </h2>

                        <div className="bed-title-line"></div>

                    </div>


                    <div className="bed-details-layout">

                        <div className="bed-glass bed-details-card">

                            <h3>Course Information</h3>

                            <div className="bed-detail-row">
                                <span>Course Name</span>
                                <strong>Bachelor of Education</strong>
                            </div>

                            <div className="bed-detail-row">
                                <span>Course Duration</span>
                                <strong>2 Years</strong>
                            </div>

                            <div className="bed-detail-row">
                                <span>Mode of Study</span>
                                <strong>Full-Time</strong>
                            </div>

                            <div className="bed-detail-row">
                                <span>Course Level</span>
                                <strong>Professional Teacher Education</strong>
                            </div>

                            <div className="bed-detail-row">
                                <span>Institution</span>
                                <strong>IET College</strong>
                            </div>

                            <div className="bed-detail-row">
                                <span>Location</span>
                                <strong>Ghaziabad, Uttar Pradesh</strong>
                            </div>

                        </div>


                        <div className="bed-glass bed-eligibility-card">

                            <span className="bed-label">
                                ELIGIBILITY CRITERIA
                            </span>

                            <h3>
                                Who Can Apply for B.Ed?
                            </h3>

                            <p>
                                Candidates interested in B.Ed admission
                                should generally fulfil the following
                                academic requirements:
                            </p>

                            <ul>
                                <li>
                                    A bachelor's degree or master's degree
                                    from a recognised university.
                                </li>

                                <li>
                                    Minimum qualifying marks as prescribed
                                    by the applicable university and
                                    NCTE regulations.
                                </li>

                                <li>
                                    Applicable relaxation in minimum marks
                                    for reserved categories, wherever
                                    permitted by the admission rules.
                                </li>

                                <li>
                                    Fulfilment of the current admission
                                    and counselling requirements.
                                </li>
                            </ul>

                            <p>
                                Final eligibility is subject to the
                                applicable university admission
                                notification and regulatory guidelines.
                            </p>

                        </div>

                    </div>

                </div>
            </section>


            {/* ADMISSION PROCESS */}

            <section
                className="bed-section"
                id="bed-admission"
            >
                <div className="bed-container">

                    <div className="bed-heading">

                        <span className="bed-label">
                            ADMISSIONS
                        </span>

                        <h2>
                            B.Ed Admission Process
                        </h2>

                        <div className="bed-title-line"></div>

                    </div>


                    <p className="bed-center-text">
                        Start your journey towards a career in education.
                        Contact the admission team to understand the
                        current application process and eligibility
                        requirements.
                    </p>


                    <div className="bed-admission-grid">

                        {admissionSteps.map((item, index) => (
                            <article
                                className="bed-glass bed-admission-card"
                                key={item.title}
                            >
                                <span className="bed-step-number">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <h3>{item.title}</h3>

                                <p>{item.description}</p>
                            </article>
                        ))}

                    </div>

                </div>
            </section>


            {/* INSTITUTION ADVANTAGES */}

            <section className="bed-section bed-section-dark">
                <div className="bed-container">

                    <div className="bed-heading">

                        <span className="bed-label">
                            TEMPL ADVANTAGE
                        </span>

                        <h2>
                            Learning at TEMPL Group of Institutions
                        </h2>

                        <div className="bed-title-line"></div>

                    </div>


                    <div className="bed-advantages-grid">

                        {advantages.map((item, index) => (
                            <article
                                className="bed-glass bed-advantage-card"
                                key={item.title}
                            >
                                <span className="bed-card-number">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <h3>{item.title}</h3>

                                <p>{item.description}</p>
                            </article>
                        ))}

                    </div>

                </div>
            </section>


            {/* CAREER OPPORTUNITIES */}

            <section className="bed-section">
                <div className="bed-container">

                    <div className="bed-heading">

                        <span className="bed-label">
                            CAREER OPPORTUNITIES
                        </span>

                        <h2>
                            Career Opportunities After B.Ed
                        </h2>

                        <div className="bed-title-line"></div>

                    </div>


                    <p className="bed-center-text">
                        A Bachelor of Education can help graduates
                        pursue opportunities in the education sector.
                        Depending on their qualifications and applicable
                        recruitment requirements, graduates can explore
                        different teaching and education-related roles.
                    </p>


                    <div className="bed-career-grid">

                        {careers.map((item, index) => (
                            <article
                                className="bed-glass bed-career-card"
                                key={item.title}
                            >
                                <span className="bed-card-number">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <h3>{item.title}</h3>

                                <p>{item.description}</p>
                            </article>
                        ))}

                    </div>

                    <p className="bed-center-text">
                        <strong>Important:</strong> A B.Ed degree alone
                        does not guarantee eligibility for every teaching
                        post. CTET, State TET or other recruitment
                        examinations may be required depending on the
                        position and applicable rules.
                    </p>

                </div>
            </section>


            {/* FAQ SECTION */}

            <section className="bed-section bed-section-dark">
                <div className="bed-container">

                    <div className="bed-heading">

                        <span className="bed-label">
                            FREQUENTLY ASKED QUESTIONS
                        </span>

                        <h2>
                            B.Ed Admission FAQs
                        </h2>

                        <div className="bed-title-line"></div>

                    </div>


                    <div className="bed-faq-grid">

                        {faqs.map((faq, index) => (
                            <article
                                className="bed-glass bed-faq-card"
                                key={faq.question}
                            >
                                <h3>
                                    {String(index + 1).padStart(2, "0")}.{" "}
                                    {faq.question}
                                </h3>

                                <p>{faq.answer}</p>
                            </article>
                        ))}

                    </div>

                </div>
            </section>


            {/* FINAL CTA */}

            <section className="bed-cta-section">
                <div className="bed-container">

                    <div className="bed-glass bed-cta-card">

                        <div>

                            <span className="bed-label">
                                YOUR FUTURE STARTS HERE
                            </span>

                            <h2>
                                Take the First Step Towards a Career in Education
                            </h2>

                            <p>
                                A career in education begins with the
                                right academic foundation. Explore the
                                B.Ed programme at IET College, TEMPL Group
                                of Institutions, and learn more about the
                                academic opportunities available to
                                aspiring educators.
                            </p>

                            <p>
                                Students from Muradnagar, Modinagar,
                                Ghaziabad and nearby areas can contact
                                the institution for information about
                                the programme, eligibility and admission
                                procedures.
                            </p>

                        </div>


                        <Link
                            href="/register"
                            className="bed-primary-btn"
                        >
                            Enquire for Admission <span>→</span>
                        </Link>

                    </div>

                </div>
            </section>


            {/* REGISTRATION */}

            <section
                className="bed-section bed-registration-section"
                id="register-interest"
            >
                <div className="bed-container">

                    <div className="bed-heading">

                        <span className="bed-label">
                            TAKE THE FIRST STEP
                        </span>

                        <h2>
                            Register Your Interest
                        </h2>

                        <div className="bed-title-line"></div>

                    </div>


                    <div className="bed-glass bed-registration-card">

                        <h3>
                            Build Your Future with TEMPL Group of Institutions
                        </h3>

                        <p>
                            Interested in pursuing a Bachelor of Education?
                            Contact our admission team to learn about
                            programme details, eligibility requirements,
                            application procedures, fees and available
                            scholarship opportunities.
                        </p>


                        <h3>
                            How We Can Help
                        </h3>


                        <div className="bed-benefits-grid">

                            {registrationBenefits.map((item) => (
                                <div
                                    className="bed-benefit-item"
                                    key={item}
                                >
                                    <span>✓</span>
                                    <p>{item}</p>
                                </div>
                            ))}

                        </div>


                        <div className="bed-registration-footer">

                            <p>
                                <strong>
                                    Ready to begin your journey?
                                </strong>{" "}
                                Register your interest to connect with
                                the admission team and receive information
                                about the B.Ed programme.
                            </p>

                            <Link
                                href="/register"
                                className="bed-primary-btn"
                            >
                                Register Your Interest <span>→</span>
                            </Link>

                        </div>

                    </div>

                </div>
            </section>

        </main>
    );
}