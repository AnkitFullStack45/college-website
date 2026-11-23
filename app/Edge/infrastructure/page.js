import "./infrastructure.css";

export const metadata = {
    title: "Infrastructure | TEMPL Group of Institutions",
    description:
        "Explore the modern infrastructure at TEMPL Group of Institutions, including smart classrooms, advanced laboratories, libraries, sports facilities, a green campus and placement support.",
};

const infrastructureFacilities = [
    {
        number: "01",
        title: "Wi-Fi Enabled Campus",
        description:
            "High-speed internet available 24/7 for research, studying, online learning and seamless digital connectivity across the campus.",
    },
    {
        number: "02",
        title: "Multimedia Digital Interactive Classrooms",
        description:
            "Smart boards, interactive displays, projectors and advanced audio-visual systems create an engaging and technology-driven learning environment.",
    },
    {
        number: "03",
        title: "Ultramodern Computer Lab",
        description:
            "Equipped with the latest-generation computers, licensed software and high-speed internet to support practical learning, programming and technical skill development.",
    },
    {
        number: "04",
        title: "Well-Stocked Library",
        description:
            "A rich collection of textbooks, reference books, journals, periodicals, e-books and research publications supports academic excellence and independent learning.",
    },
    {
        number: "05",
        title: "Advanced Science Laboratories",
        description:
            "Well-equipped laboratories provide students with hands-on practical experience and opportunities for scientific exploration and experimentation.",
    },
    {
        number: "06",
        title: "Seminar and Conference Halls",
        description:
            "Modern seminar halls with audio-visual facilities are regularly used for workshops, guest lectures, conferences and academic events.",
    },
    {
        number: "07",
        title: "Dedicated Moot Court Facility",
        description:
            "Law students gain practical exposure to courtroom procedures, legal arguments and advocacy skills through simulated court sessions.",
    },
    {
        number: "08",
        title: "Sports and Fitness Facilities",
        description:
            "Indoor and outdoor sports facilities encourage physical fitness, teamwork, leadership development and overall well-being.",
    },
    {
        number: "09",
        title: "Skill Development and Training Centers",
        description:
            "Specialized training facilities support communication skills, personality development, aptitude preparation and career readiness.",
    },
    {
        number: "10",
        title: "Student Activity and Recreation Areas",
        description:
            "Dedicated spaces for cultural activities, student clubs, group discussions and collaborative learning experiences.",
    },
    {
        number: "11",
        title: "Safe and Secure Campus",
        description:
            "The campus is monitored through security systems and maintained to provide a safe, comfortable and student-friendly learning environment.",
    },
    {
        number: "12",
        title: "Green and Eco-Friendly Environment",
        description:
            "Lush green surroundings, landscaped gardens and sustainable campus practices create a peaceful atmosphere conducive to learning and personal growth.",
    },
    {
        number: "13",
        title: "Career Guidance and Placement Support",
        description:
            "Dedicated resources for career counselling, placement preparation, interview training and professional development.",
    },
    {
        number: "14",
        title: "Transport Connectivity",
        description:
            "Convenient accessibility from Ghaziabad, Modinagar, Muradnagar, Meerut and Delhi NCR ensures hassle-free commuting for students.",
    },
];

const recreationalFacilities = [
    {
        number: "01",
        title: "Sports and Recreational Facilities",
        description:
            "Outdoor and indoor activities, including basketball, volleyball, gym and yoga center.",
    },
    {
        number: "02",
        title: "Spacious Auditorium and Seminar Halls",
        description:
            "Advanced venues for events, workshops and cultural programs.",
    },
    {
        number: "03",
        title: "Webinars and Seminars",
        description:
            "Interactive sessions with industry experts and academicians to enhance professional skills.",
    },
    {
        number: "04",
        title: "Moot Court & Practical Training",
        description:
            "Simulated court proceedings and workshops at LSR Law Academy to bridge theory and practice.",
    },
];

const placementFeatures = [
    {
        number: "01",
        title: "Dedicated Training & Placement Cell",
        description:
            "A specialized team actively works to connect students with leading recruiters and career opportunities across various industries.",
    },
    {
        number: "02",
        title: "Career Counseling & Guidance",
        description:
            "Personalized career guidance sessions help students identify suitable career paths based on their interests, skills and aspirations.",
    },
    {
        number: "03",
        title: "Resume Building Workshops",
        description:
            "Professional resume development sessions assist students in creating impactful resumes that meet industry standards.",
    },
    {
        number: "04",
        title: "Mock Interviews & Group Discussions",
        description:
            "Regular interview simulations and group discussion exercises help students build confidence and improve communication skills.",
    },
    {
        number: "05",
        title: "Industry-Oriented Skill Development",
        description:
            "Training programs focus on enhancing technical, analytical, leadership and problem-solving skills required by employers.",
    },
    {
        number: "06",
        title: "Corporate Interaction Programs",
        description:
            "Guest lectures, seminars and industry interaction sessions provide valuable insights into current market trends and professional expectations.",
    },
    {
        number: "07",
        title: "Internship Assistance",
        description:
            "Students are guided towards internship opportunities that provide practical exposure and real-world industry experience.",
    },
    {
        number: "08",
        title: "Campus Recruitment Drives",
        description:
            "Regular campus placement drives are organized with reputed companies, enabling students to explore diverse career opportunities.",
    },
    {
        number: "09",
        title: "Soft Skills & Personality Development",
        description:
            "Specialized training in communication, teamwork, leadership, presentation skills and workplace etiquette prepares students for professional success.",
    },
    {
        number: "10",
        title: "Comprehensive Placement Support",
        description:
            "From career preparation to final placement, students receive continuous support to maximize their employability and achieve their career goals.",
    },
];

const reasons = [
    "Solar-powered Green Campus",
    "Wi-Fi Enabled Campus",
    "Multimedia Digital Interactive Classrooms",
    "Ultramodern Computer Lab",
    "Well-Stocked Library",
    "Sports and Recreational Facilities",
    "Spacious Auditorium & Seminar Halls",
    "Webinars and Seminars",
    "Training and Placement Cell",
];

function SectionHeading({ label, title, highlight }) {
    return (
        <div className="infra-heading">
            <span className="infra-label">{label}</span>

            <h2>
                {title} <span>{highlight}</span>
            </h2>

            <div className="infra-heading-line"></div>
        </div>
    );
}

function FacilityCard({ item }) {
    return (
        <article className="infra-facility-card">
            <div className="infra-card-number">
                {item.number}
            </div>

            <div className="infra-card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
            </div>
        </article>
    );
}

export default function InfrastructurePage() {
    return (
        <main className="infrastructure-page">

            {/* FULL WIDTH BANNER */}

            <section className="infra-banner">
                <img
                    src="/images/infrastructure.webp"
                    alt="Infrastructure at TEMPL Group of Institutions"
                />
            </section>


            {/* INTRODUCTION */}

            <section className="infra-intro">
                <div className="infra-container">

                    <SectionHeading
                        label="LEARNING BEYOND LIMITS"
                        title="Welcome to TEMPL Group"
                        highlight="of Institutions"
                    />

                    <div className="infra-intro-content">

                        <h3>Our Premier Institutions</h3>
                        <p>
                            At TEMPL Group of Institutions, our two premier
                            institutions—Institute for Education and Technical
                            Sciences (IET) and LSR Law Academy—provide a dynamic
                            learning environment that promotes academic
                            excellence, innovation, creativity, and holistic
                            student development.
                        </p>

                        <p>
                            Our modern campus is equipped with technology-enabled
                            classrooms, advanced computer laboratories,
                            well-stocked libraries, seminar halls, and
                            contemporary learning facilities designed to enhance
                            both theoretical understanding and practical
                            knowledge.
                        </p>

                        <p>
                            By integrating industry-oriented education with
                            modern teaching methodologies, we empower students
                            to develop critical thinking, problem-solving
                            abilities, leadership qualities, and professional
                            skills essential for success in today's competitive
                            world.
                        </p>

                        <p>
                            Beyond academics, students benefit from workshops,
                            seminars, cultural activities, sports programs, and
                            skill development initiatives that contribute to
                            their personal and professional growth. Supported
                            by experienced faculty, a student-centric approach,
                            and a commitment to quality education, the
                            institution provides an inspiring environment where
                            learners can achieve their academic goals, build
                            rewarding careers, and emerge as confident,
                            responsible, and future-ready professionals.
                        </p>

                    </div>
                </div>
            </section>


            {/* SOLAR CAMPUS */}

            <section className="infra-solar">
                <div className="infra-container">

                    <div className="infra-solar-card">

                        <div className="infra-solar-icon">
                            ☀
                        </div>

                        <div className="infra-solar-content">

                            <span className="infra-small-label">
                                COMMITMENT TO SUSTAINABILITY
                            </span>

                            <h2>
                                Solar-Powered Green Campus:
                                <span> Leading the Way in Sustainability</span>
                            </h2>

                            <p>
                                Our campus is powered by solar energy, making
                                it not only environmentally friendly but also
                                cost-efficient. By using renewable energy, we
                                are committed to reducing our carbon footprint
                                and promoting sustainability. The solar-powered
                                green campus ensures that students enjoy an
                                eco-conscious environment, making learning more
                                aligned with global efforts for a better,
                                greener tomorrow.
                            </p>

                        </div>
                    </div>

                </div>
            </section>


            {/* NATURE SECTION */}

            <section className="infra-nature">
                <div className="infra-container">

                    <SectionHeading
                        label="A PEACEFUL LEARNING ENVIRONMENT"
                        title="Nestled in the Lap"
                        highlight="of Nature"
                    />

                    <h3 className="infra-nature-subtitle">
                        A Perfect Blend of Learning and Tranquillity
                    </h3>

                    <p>
                        Nestled amidst a serene and lush green environment,
                        the Knowledge & Innovation Campus of TEMPL Group of
                        Institutions provides an ideal setting for academic
                        excellence, personal growth, and holistic development.
                        Away from the distractions of urban congestion, the
                        campus offers a peaceful and inspiring atmosphere that
                        enables students to focus on their studies, enhance
                        their creativity, and achieve their educational
                        aspirations.
                    </p>

                    <p>
                        Surrounded by natural beauty, open spaces, and a
                        pollution-free environment, students experience a
                        refreshing balance between learning and well-being,
                        creating the perfect foundation for intellectual and
                        professional development.
                    </p>

                    <p>
                        The tranquil surroundings complement modern educational
                        facilities, technology-enabled classrooms, advanced
                        laboratories, library resources, and collaborative
                        learning spaces, ensuring a productive and engaging
                        academic experience.
                    </p>

                    <p>
                        In addition to supporting academic success, the campus
                        encourages students to participate in cultural
                        activities, sports, leadership programs, and skill
                        development initiatives that foster confidence,
                        teamwork, and personal excellence.
                    </p>

                    <p>
                        By combining the advantages of a nature-rich environment
                        with contemporary infrastructure and career-oriented
                        education, TEMPL Group of Institutions creates a unique
                        learning ecosystem where students can thrive
                        academically, develop essential life skills, and
                        prepare themselves for successful careers in an
                        ever-evolving global landscape.
                    </p>

                </div>
            </section>


            {/* MODERN INFRASTRUCTURE */}

            <section className="infra-facilities">
                <div className="infra-container">

                    <SectionHeading
                        label="BUILT FOR BETTER LEARNING"
                        title="Modern Learning"
                        highlight="Infrastructure"
                    />

                    <p className="infra-section-description">
                        Our campus provides modern facilities and learning
                        resources that support academic excellence, practical
                        education and the overall development of students.
                    </p>

                    <div className="infra-facility-grid">
                        {infrastructureFacilities.map((item) => (
                            <FacilityCard
                                item={item}
                                key={item.number}
                            />
                        ))}
                    </div>

                </div>
            </section>


            {/* RECREATIONAL FACILITIES */}

            <section className="infra-recreation">
                <div className="infra-container">

                    <SectionHeading
                        label="LEARNING THROUGH EXPERIENCE"
                        title="Recreational and"
                        highlight="Developmental Facilities"
                    />

                    <div className="infra-recreation-grid">
                        {recreationalFacilities.map((item) => (
                            <FacilityCard
                                item={item}
                                key={item.number}
                            />
                        ))}
                    </div>

                </div>
            </section>


            {/* TRAINING AND PLACEMENT */}

            <section className="infra-placement">
                <div className="infra-container">

                    <SectionHeading
                        label="BUILDING FUTURE CAREERS"
                        title="Training and"
                        highlight="Placement Cell"
                    />

                    <p className="infra-section-description">
                        Our Training and Placement Cell works tirelessly to
                        provide students with the tools, guidance, and
                        opportunities needed to land a successful job. From
                        resume building and interview preparation to arranging
                        campus placements with top companies, our placement
                        cell ensures that students have access to career
                        opportunities.
                    </p>

                    <div className="infra-placement-grid">
                        {placementFeatures.map((item) => (
                            <FacilityCard
                                item={item}
                                key={item.number}
                            />
                        ))}
                    </div>

                </div>
            </section>


            {/* WHY CHOOSE TEMPL */}

            <section className="infra-why">
                <div className="infra-container">

                    <SectionHeading
                        label="THE TEMPL ADVANTAGE"
                        title="Why Choose TEMPL"
                        highlight="Group of Institutions?"
                    />

                    <div className="infra-why-grid">

                        {reasons.map((reason, index) => (
                            <div
                                className="infra-why-item"
                                key={index}
                            >
                                <span className="infra-check">✓</span>
                                <span>{reason}</span>
                            </div>
                        ))}

                    </div>

                </div>
            </section>


            {/* CLOSING SECTION */}

            <section className="infra-closing">
                <div className="infra-container">

                    <span className="infra-small-label">
                        YOUR FUTURE STARTS HERE
                    </span>

                    <h2>
                        Experience the TEMPL
                        <span> Advantage</span>
                    </h2>

                    <p>
                        Join TEMPL Group of Institutions for an unparalleled
                        educational experience where academic excellence meets
                        innovation, sustainability, and holistic personal
                        development. Our institutions are dedicated to
                        nurturing future-ready professionals through a perfect
                        blend of quality education, practical learning, modern
                        infrastructure, and industry-oriented training.
                    </p>

                    <p>
                        Students benefit from experienced faculty,
                        technology-enabled classrooms, advanced laboratories,
                        comprehensive library resources, skill development
                        programs, and a vibrant campus environment that
                        encourages creativity, leadership, and critical
                        thinking. Beyond academics, we emphasize character
                        building, communication skills, professional ethics,
                        and lifelong learning to help every student prepare
                        for a rapidly evolving global landscape.
                    </p>

                    <p>
                        With a strong commitment to student success, career
                        growth, and continuous innovation, TEMPL Group of
                        Institutions provides the ideal platform for aspiring
                        learners to achieve their goals, unlock their potential,
                        and build successful careers while making meaningful
                        contributions to society.
                    </p>

                    <a
                        href="/contact"
                        className="infra-cta-button"
                    >
                        Connect With Us
                        <span> → </span>
                    </a>

                </div>
            </section>

        </main>
    );
}