import "./placement-facility.css";

export const metadata = {
    title: "Placement Facility | TEMPL Group of Institutions",
    description:
        "Explore placement assistance at TEMPL Group of Institutions, including career counselling, interview preparation, industry interaction, internships and professional skill development.",
};

const groomingPrograms = [
    {
        number: "01",
        title: "Presentation Practices",
        description:
            "We conduct regular presentation practices where students learn to articulate their thoughts clearly, structure their arguments, and present confidently. This prepares them for interviews and client meetings they will encounter in the corporate world.",
    },
    {
        number: "02",
        title: "Industry Visits",
        description:
            "Our industry visits provide real-world exposure, bridging the gap between theoretical learning and practical applications. These visits help students enhance their industry knowledge and build professional networks.",
    },
    {
        number: "03",
        title: "Seminars and Workshops",
        description:
            "We organize seminars, workshops, and guest lectures with industry leaders to provide valuable insights into industry trends, technological advancements, and job opportunities.",
    },
    {
        number: "04",
        title: "Interview Skill Development Programs",
        description:
            "Mock interviews help students gain confidence, refine their answers, and prepare for real interviews with personalized feedback and guidance.",
    },
    {
        number: "05",
        title: "Group Discussions and Debates",
        description:
            "Critical thinking, communication, and teamwork are emphasized through regular group discussions and debates, helping students excel in professional settings.",
    },
];

const placementFeatures = [
    {
        number: "01",
        title: "Personalized Career Counseling and Support",
        description:
            "One-on-one career guidance helps students choose the right career path, identify strengths, and achieve their goals.",
    },
    {
        number: "02",
        title: "Resume Building and Interview Preparation",
        description:
            "Workshops and training sessions prepare students to confidently tackle interviews and build professional resumes.",
    },
    {
        number: "03",
        title: "Internships and Practical Exposure",
        description:
            "Internships provide real-world experience, ensuring students are industry-ready before graduation.",
    },
    {
        number: "04",
        title: "Regular Recruitment Drives",
        description:
            "Frequent recruitment drives connect students with companies across various industries.",
    },
    {
        number: "05",
        title: "Alumni Network for Career Growth",
        description:
            "Our alumni network guides and mentors current students, offering career advice, internships, and job referrals.",
    },
];

const careerBenefits = [
    "Comprehensive Skill Development",
    "Dedicated Placement Cell",
    "Industry Partnerships",
    "Holistic Grooming",
    "Career Counseling and Mentorship",
    "Internship Opportunities",
    "Resume Building Support",
    "Mock Interviews and Group Discussions",
    "Industry Expert Sessions",
    "Technology-Enabled Learning",
    "Entrepreneurship Development",
    "Soft Skills Training",
    "Professional Networking Opportunities",
    "Competitive Examination Support",
    "Strong Alumni Network",
    "Career-Focused Learning Environment",
    "Placement Assistance Across Multiple Sectors",
    "Commitment to Student Success",
];

function SectionHeading({ label, title, highlight }) {
    return (
        <div className="placement-heading">
            <span className="placement-label">{label}</span>

            <h2>
                {title} <span>{highlight}</span>
            </h2>

            <div className="placement-heading-line"></div>
        </div>
    );
}

function PlacementCard({ item }) {
    return (
        <article className="placement-card">
            <div className="placement-card-number">
                {item.number}
            </div>

            <div className="placement-card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
            </div>
        </article>
    );
}

export default function PlacementFacilityPage() {
    return (
        <main className="placement-page">

            {/* FULL WIDTH BANNER */}

            <section className="placement-banner">
                <img
                    src="/images/placement.webp"
                    alt="Placement Facility at TEMPL Group of Institutions, Ghaziabad"
                />
            </section>


            {/* INTRODUCTION */}

            <section className="placement-intro">
                <div className="placement-container">

                    <SectionHeading
                        label="BUILDING CAREERS"
                        title="Placement Facility at"
                        highlight="TEMPL Group of Institutions"
                    />

                    <h3 className="placement-subheading">
                        Your Gateway to a Successful Career
                    </h3>

                    <p>
                        At TEMPL Group of Institutions, we are deeply committed
                        to not only imparting academic knowledge but also
                        ensuring that our students possess the skills,
                        confidence, and industry-readiness to excel in their
                        careers. We believe that with the right preparation and
                        grooming, our students can secure placements in
                        reputed companies and feel privileged to be selected
                        by prestigious employers.
                    </p>

                    <p>
                        Our placement cell works relentlessly to create
                        opportunities for our students and provides continuous
                        support to ensure they stand out in a competitive job
                        market. We are determined to equip students with the
                        tools and expertise they need to confidently step into
                        the professional world, pursue placement opportunities,
                        and succeed with pride.
                    </p>

                </div>
            </section>


            {/* GROOMING STUDENTS */}

            <section className="placement-grooming">
                <div className="placement-container">

                    <SectionHeading
                        label="PREPARING STUDENTS FOR THE FUTURE"
                        title="Grooming Students"
                        highlight="for Success"
                    />

                    <div className="placement-grooming-intro">
                        <p>
                            We don't just focus on getting our students a job;
                            we focus on ensuring that they are prepared for a
                            successful career. At TEMPL Group of Institutions,
                            we understand the importance of comprehensive
                            personality development.
                        </p>

                        <p>
                            Our dedicated placement cell works tirelessly to
                            ensure that every student is polished and equipped
                            to impress recruiters, whether they are
                            interviewing for global organizations or emerging
                            startups. Here is how we do it:
                        </p>
                    </div>

                    <div className="placement-grooming-grid">
                        {groomingPrograms.map((item) => (
                            <PlacementCard
                                item={item}
                                key={item.number}
                            />
                        ))}
                    </div>

                </div>
            </section>


            {/* INDUSTRY CONNECT */}

            <section className="placement-industry">
                <div className="placement-container">

                    <SectionHeading
                        label="CONNECTING EDUCATION WITH INDUSTRY"
                        title="Placement Success and"
                        highlight="Industry Connect"
                    />

                    <div className="placement-industry-content">

                        <div className="placement-industry-icon">
                            ↗
                        </div>

                        <div>
                            <p>
                                Our placement cell plays a pivotal role in
                                ensuring that every student receives placement
                                opportunities. We work towards building
                                connections with reputed companies spanning
                                multiple industries, including IT, engineering,
                                management, finance, and more.
                            </p>

                            <p>
                                Our placement team organizes recruitment
                                drives, campus interviews, and job fairs to
                                help students explore suitable career
                                opportunities.
                            </p>

                            <p>
                                As we continue to strengthen our institutional
                                capabilities, our placement cell continually
                                improves its strategies and practices to help
                                students prepare for and excel in the
                                competitive job market.
                            </p>
                        </div>

                    </div>

                </div>
            </section>


            {/* PLACEMENT FEATURES */}

            <section className="placement-features">
                <div className="placement-container">

                    <SectionHeading
                        label="CAREER DEVELOPMENT SUPPORT"
                        title="Key Features of the"
                        highlight="Placement Facility"
                    />

                    <p className="placement-section-description">
                        We provide career guidance, practical exposure and
                        professional development support to help students
                        prepare for opportunities in the corporate world.
                    </p>

                    <div className="placement-features-grid">
                        {placementFeatures.map((item) => (
                            <PlacementCard
                                item={item}
                                key={item.number}
                            />
                        ))}
                    </div>

                </div>
            </section>


            {/* PATH FORWARD */}

            <section className="placement-future">
                <div className="placement-container">

                    <div className="placement-future-content">

                        <span className="placement-label">
                            PREPARING FOR BIGGER OPPORTUNITIES
                        </span>

                        <h2>
                            The Path Forward:
                            <span> Preparing Students for Leading Companies</span>
                        </h2>

                        <p>
                            TEMPL Group of Institutions is committed to
                            strengthening placement opportunities for its
                            students. Our long-term goal is to help students
                            prepare for opportunities with leading Fortune 500
                            companies, enabling them to become part of the
                            global workforce and take on meaningful, impactful
                            roles.
                        </p>

                        <p>
                            Our placement cell continually strives to improve
                            placement strategies, engage with recruiters, and
                            offer comprehensive career services to help
                            students meet corporate expectations.
                        </p>

                    </div>

                </div>
            </section>


            {/* WHY CHOOSE TEMPL */}

            <section className="placement-why">
                <div className="placement-container">

                    <SectionHeading
                        label="YOUR CAREER, OUR COMMITMENT"
                        title="Why Choose TEMPL Group"
                        highlight="for Career Development?"
                    />

                    <p className="placement-section-description">
                        Our career development initiatives focus on building
                        professional skills, improving employability and
                        preparing students for opportunities across different
                        industries.
                    </p>

                    <div className="placement-benefits-grid">

                        {careerBenefits.map((benefit, index) => (
                            <div
                                className="placement-benefit"
                                key={index}
                            >
                                <span className="placement-benefit-check">
                                    ✓
                                </span>

                                <span>{benefit}</span>
                            </div>
                        ))}

                    </div>

                </div>
            </section>


            {/* CLOSING SECTION */}

            <section className="placement-closing">
                <div className="placement-container">

                    <span className="placement-closing-label">
                        YOUR CAREER JOURNEY STARTS HERE
                    </span>

                    <h2>
                        Empowering Students for
                        <span> Professional Success</span>
                    </h2>

                    <p>
                        At our college, student success is at the heart of
                        everything we do. Through a dedicated Training and
                        Placement Cell, comprehensive career development
                        programs, and industry-focused learning initiatives,
                        we strive to equip students with the knowledge, skills,
                        and confidence required to excel in today's competitive
                        job market.
                    </p>

                    <p>
                        From career counseling and skill enhancement workshops
                        to internship opportunities, resume-building sessions,
                        and interview preparation, every effort is made to
                        ensure that students are prepared for long-term
                        professional success rather than just securing their
                        first job.
                    </p>

                    <p>
                        Our commitment to academic excellence, practical
                        exposure, industry interaction, and holistic
                        personality development empowers learners to become
                        capable professionals, innovative thinkers, and
                        responsible leaders.
                    </p>

                    <p>
                        With continuous guidance, strong industry connections,
                        and a student-centric approach, we provide the ideal
                        platform for aspiring individuals to achieve their
                        career aspirations, unlock their full potential, and
                        build a rewarding future filled with growth,
                        opportunities, and success.
                    </p>

                    <a
                        href="/contact"
                        className="placement-cta-button"
                    >
                        Connect With Us
                        <span> → </span>
                    </a>

                </div>
            </section>

        </main>
    );
}