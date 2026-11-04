import Link from "next/link";
import "./bed.css";

export const metadata = {
    title: "Best B.Ed College in Ghaziabad | TEMPL Group of Institutions",
    description:
        "Explore the 2-year B.Ed course at TEMPL Group of Institutions, Ghaziabad. Learn about eligibility, admission process, faculty, infrastructure and career opportunities.",
};

const reasons = [
    {
        title: "Best College for B.Ed in Ghaziabad & Delhi NCR",
        description:
            "At TEMPL Group of Institutions, we strive to provide an educational experience that goes beyond just textbooks. As a leading B.Ed college in Ghaziabad, we offer a world-class learning environment equipped with the latest teaching methodologies, excellent faculty, and modern infrastructure. Located conveniently in the heart of Ghaziabad, we are easily accessible to students from Modinagar, Muradnagar, and nearby regions, making us the best B.Ed college in ghaziabad, Delhi NCR.",
    },
    {
        title: "2-Year B.Ed Program",
        description:
            "The B.Ed course is a 2-year program that prepares students to be effective educators. It’s the perfect choice for those who have completed their Graduation and wish to pursue a career in teaching at schools, colleges, and other educational institutions. With a carefully crafted curriculum, Institute for Education and Technical Sciences ensures that students receive practical training and academic excellence.",
    },
    {
        title: "Top-Ranking Faculty",
        description:
            "Our experienced and highly qualified faculty are experts in their fields and bring a combination of theoretical knowledge and practical teaching methods to the classroom. Students are trained to be visionary educators capable of adapting to the rapidly evolving education landscape. As part of the best college for B.Ed in Ghaziabad, students gain exposure to modern teaching tools, technology, and real-world educational challenges.",
    },
    {
        title: "State-of-the-Art Infrastructure",
        description:
            "TEMPL Group of Institutions offers a pollution-free lush green campus with modern facilities, including multimedia classrooms, seminar halls, a well-stocked library, and well-equipped labs. Our infrastructure supports the overall development of students, ensuring they receive the best possible environment for their educational journey.",
    },
];

const courseDetails = [
    { label: "Course Duration", value: "2 Years" },
    { label: "Mode of Study", value: "Full-Time" },
    { label: "Affiliation", value: "CCS University, Meerut" },
    { label: "Intake", value: "100 Seats" },
];

const admissionSteps = [
    {
        title: "Online Application",
        description:
            "Interested candidates can apply online through our official website. Simply fill out the B.Ed admission form, providing details such as personal information, academic qualifications, and other required documents.",
    },
    {
        title: "Entrance Test",
        description:
            "Students are required to appear for an entrance test organised by CCS University Meerut. It is mandatory for students to appear for the entrance exam to get admission in Bachelor of Education.",
    },
    {
        title: "Document Verification & Fee Submission",
        description:
            "After successfully clearing the entrance test and interview, candidates will need to submit relevant documents for verification and pay the prescribed admission fee.",
    },
    {
        title: "Commencement of Classes",
        description:
            "After the admission process, the classes for the B.Ed program begin in line with the academic calendar set by CCS University, Meerut.",
    },
];

const advantages = [
    {
        title: "Academic Excellence",
        description:
            "TEMPL Group of Institutions is recognized as one of the top-ranking colleges in Ghaziabad and Delhi NCR for its academic rigor. Our B.Ed program offers students in-depth knowledge, practical teaching experience, and personal development, preparing them to excel in their teaching careers.",
    },
    {
        title: "Holistic Development",
        description:
            "Our students undergo a well-rounded educational experience that emphasizes personality development, leadership skills, and empathy. We encourage students to engage in various co-curricular activities, workshops, and seminars, ensuring they are well-prepared for the challenges of modern education.",
    },
    {
        title: "Industry Collaboration",
        description:
            "TEMPL Group of Institutions believes in staying ahead of the curve by providing students with industry exposure through guest lectures, seminars, workshops, and educational tours. This exposure helps students understand the practical aspects of teaching and stay updated with the latest trends in education.",
    },
    {
        title: "Best-in-Class Infrastructure",
        description:
            "Our pollution-free lush green campus offers state-of-the-art facilities, including spacious classrooms, modern computer labs, and a well-documented library. These resources ensure that students receive a top-tier education in the best environment possible.",
    },
    {
        title: "Placement Assistance",
        description:
            "As part of our commitment to student success, TEMPL Group of Institutions provides placement assistance to B.Ed students through our dedicated Placement Cell. Our strong industry connections help students secure placements in prestigious schools and educational institutions.",
    },
    {
        title: "Convenient Location",
        description:
            "Easily accessible from Modinagar, Muradnagar, Meerut, and the entire Delhi NCR region, our campus is situated on NH-58, providing easy connectivity through public transport and RRTS RapidX metro services.",
    },
];

const careers = [
    {
        title: "School Teaching Careers",
        description:
            "Primary, Secondary, and Senior Secondary Schools: Teachers in primary, secondary, and senior secondary schools help students develop skills and knowledge in various subjects. A B.Ed degree allows graduates to teach in government, private, and international schools.",
    },
    {
        title: "Private Tutoring and Coaching Centers",
        description:
            "Build a career by teaching students through private tutoring, coaching institutes, and academic support centres.",
    },
    {
        title: "Educational Content Developer",
        description:
            "Create educational resources, digital learning materials, lesson plans, and academic content.",
    },
    {
        title: "Education Counselling and Guidance",
        description:
            "Guide students in their academic journey through counselling, mentoring, and educational support.",
    },
    {
        title: "Corporate Sector & HR Roles in Education",
        description:
            "Explore opportunities in educational organisations, training departments, and human resource management.",
    },
    {
        title: "Education Administration and Management",
        description:
            "Work in academic administration, school management, educational planning, and institutional coordination.",
    },
    {
        title: "Research and Academia",
        description:
            "Pursue opportunities in educational research, academic development, and higher education.",
    },
    {
        title: "NGOs and Social Work in Education",
        description:
            "Contribute to educational development, community learning initiatives, and social welfare programmes.",
    },
    {
        title: "Entrepreneurship in Education",
        description:
            "Establish educational ventures, coaching centres, tutoring services, and other learning initiatives.",
    },
    {
        title: "Government Jobs in Education",
        description:
            "Explore opportunities in government educational institutions and other public-sector education departments.",
    },
];

const registrationBenefits = [
    "Get personalized admission guidance",
    "Receive course and eligibility information",
    "Stay updated on admissions and important dates",
    "Learn about scholarships and financial assistance",
    "Explore career opportunities and placement support",
];

export default function BedPage() {
    return (
        <main className="bed-page">

            {/* FULL-WIDTH BANNER IMAGE */}
            <section className="bed-banner">
                <img
                    src="/images/bed.webp"
                    alt="B.Ed Bachelor of Education at IET College, TEMPL Group of Institutions"
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
                            B.Ed — Bachelor of Education at the Best B.Ed
                            College in Ghaziabad
                        </h1>

                        <div className="bed-title-line"></div>

                        <h2>
                            B.Ed Course at TEMPL Group of Institutions:
                            Shape the Future of Education
                        </h2>

                        <p>
                            Welcome to TEMPL Group of Institutions, home to
                            Institute for Education and Technical Sciences
                            (IET), one of the best colleges in Ghaziabad and
                            a leading institution in the Delhi NCR region.
                            Our Bachelor of Education (B.Ed) course is
                            designed for students who are passionate about
                            shaping the future of education and making a
                            positive impact on society. As one of the top
                            B.Ed colleges in Ghaziabad and Delhi NCR, we
                            provide a comprehensive, industry-aligned
                            curriculum that empowers future educators with
                            the necessary knowledge and skills to succeed.
                        </p>

                        <Link href="#bed-admission" className="bed-primary-btn">
                            Explore Admission <span>→</span>
                        </Link>
                    </div>

                    <div className="bed-course-grid">
                        {courseDetails.map((item, index) => (
                            <article className="bed-glass bed-course-card" key={index}>
                                <span className="bed-card-number">
                                    0{index + 1}
                                </span>
                                <h3>{item.label}</h3>
                                <p>{item.value}</p>
                            </article>
                        ))}
                    </div>

                </div>
            </section>

            {/* WHY CHOOSE */}
            <section className="bed-section">
                <div className="bed-container">

                    <div className="bed-heading">
                        <span className="bed-label">WHY CHOOSE US</span>
                        <h2>
                            Why Choose TEMPL Group of Institutions for Your B.Ed?
                        </h2>
                        <div className="bed-title-line"></div>
                    </div>

                    <div className="bed-reasons-grid">
                        {reasons.map((item, index) => (
                            <article className="bed-glass bed-reason-card" key={index}>
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
                        <span className="bed-label">PROGRAM OVERVIEW</span>
                        <h2>
                            Course Details for B.Ed at TEMPL Group of Institutions
                        </h2>
                        <div className="bed-title-line"></div>
                    </div>

                    <div className="bed-details-layout">

                        <div className="bed-glass bed-details-card">
                            <h3>Course Information</h3>

                            <div className="bed-detail-row">
                                <span>Course Duration</span>
                                <strong>2 Years</strong>
                            </div>

                            <div className="bed-detail-row">
                                <span>Mode of Study</span>
                                <strong>Full-Time</strong>
                            </div>

                            <div className="bed-detail-row">
                                <span>Affiliation</span>
                                <strong>CCS University, Meerut</strong>
                            </div>

                            <div className="bed-detail-row">
                                <span>Intake</span>
                                <strong>100 Seats per Academic Year</strong>
                            </div>
                        </div>

                        <div className="bed-glass bed-eligibility-card">
                            <span className="bed-label">ELIGIBILITY CRITERIA</span>

                            <h3>Who Can Apply for B.Ed?</h3>

                            <p>
                                The candidate must have completed Graduation
                                or Post Graduation in any stream with the
                                following minimum marks:
                            </p>

                            <ul>
                                <li>
                                    Minimum 50% marks for GEN/OBC candidates.
                                </li>
                                <li>
                                    Passed for SC/ST candidates.
                                </li>
                                <li>
                                    Admission is subject to the norms set by
                                    CCS University, Meerut, and the NCTE
                                    (National Council for Teacher Education).
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* ADMISSION PROCESS */}
            <section className="bed-section" id="bed-admission">
                <div className="bed-container">

                    <div className="bed-heading">
                        <span className="bed-label">ADMISSIONS</span>
                        <h2>Admission Process for B.Ed</h2>
                        <div className="bed-title-line"></div>
                    </div>

                    <p className="bed-center-text">
                        Follow these steps to begin your journey towards
                        becoming an educator.
                    </p>

                    <div className="bed-admission-grid">
                        {admissionSteps.map((item, index) => (
                            <article className="bed-glass bed-admission-card" key={index}>
                                <span className="bed-step-number">
                                    0{index + 1}
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
                        <span className="bed-label">TEMPL ADVANTAGE</span>
                        <h2>
                            Why TEMPL Group of Institutions is the Best
                            College for B.Ed in Ghaziabad, Delhi NCR
                        </h2>
                        <div className="bed-title-line"></div>
                    </div>

                    <div className="bed-advantages-grid">
                        {advantages.map((item, index) => (
                            <article className="bed-glass bed-advantage-card" key={index}>
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
                        <span className="bed-label">CAREER PATHS</span>
                        <h2>
                            Career Prospects After Completing the Bachelor
                            of Education (B.Ed) Course
                        </h2>
                        <div className="bed-title-line"></div>
                    </div>

                    <p className="bed-center-text">
                        Completing the Bachelor of Education (B.Ed) course
                        from TEMPL Group of Institutions opens a wide range
                        of career opportunities for students. The B.Ed
                        degree is the foundation for aspiring teachers,
                        and graduates can explore diverse career paths
                        across the education sector.
                    </p>

                    <div className="bed-career-grid">
                        {careers.map((item, index) => (
                            <article className="bed-glass bed-career-card" key={index}>
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

            {/* FINAL CTA */}
            <section className="bed-cta-section">
                <div className="bed-container">

                    <div className="bed-glass bed-cta-card">
                        <div>
                            <span className="bed-label">
                                YOUR FUTURE STARTS HERE
                            </span>

                            <h2>
                                Be Part of the Best B.Ed College in Ghaziabad
                                & Delhi NCR
                            </h2>

                            <p>
                                At TEMPL Group of Institutions, we believe
                                that the best teachers shape the future of
                                the world. Our B.Ed course is designed to
                                equip you with the tools, knowledge, and
                                experience to become an influential and
                                successful educator. With our exceptional
                                faculty, world-class infrastructure, and
                                industry connections, we are one of the best
                                B.Ed colleges in Ghaziabad and Delhi NCR.
                            </p>

                            <p>
                                Whether you are from Modinagar, Muradnagar,
                                Meerut, or New Delhi, TEMPL Group of
                                Institutions offers the ideal learning
                                environment to launch your career in
                                education.
                            </p>
                        </div>

                        <Link href="#register-interest" className="bed-primary-btn">
                            Enrol Today <span>→</span>
                        </Link>
                    </div>

                </div>
            </section>

            {/* REGISTRATION */}
            <section className="bed-section bed-registration-section" id="register-interest">
                <div className="bed-container">

                    <div className="bed-heading">
                        <span className="bed-label">TAKE THE FIRST STEP</span>
                        <h2>Register Your Interest Today</h2>
                        <div className="bed-title-line"></div>
                    </div>

                    <div className="bed-glass bed-registration-card">

                        <h3>
                            Build a Successful Future with TEMPL Group of Institutions
                        </h3>

                        <p>
                            Are you interested in joining TEMPL Group of
                            Institutions and building a successful future?
                            Take the first step toward your academic and
                            professional goals by registering your interest
                            today. Our admissions team will guide you
                            through course selection, eligibility
                            requirements, admission procedures,
                            scholarships, and career opportunities.
                        </p>

                        <h3>Why Register?</h3>

                        <div className="bed-benefits-grid">
                            {registrationBenefits.map((item, index) => (
                                <div className="bed-benefit-item" key={index}>
                                    <span>✓</span>
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bed-registration-footer">
                            <p>
                                <strong>Ready to begin your journey?</strong>{" "}
                                Fill out the registration form or contact
                                our admissions team to receive detailed
                                information about your preferred program.
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