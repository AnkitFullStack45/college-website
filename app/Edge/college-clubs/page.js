import "./college-clubs.css";

export const metadata = {
    title: "College Clubs | Student Activities at TEMPL Group of Institutions",
    description:
        "Explore student-led clubs at TEMPL Group of Institutions, including Academic, Literature and Media, Cultural and Sports Clubs. Discover opportunities for leadership, creativity and holistic development.",
    alternates: {
        canonical: "https://www.templgroup.in/Edge/college-clubs",
    },
    openGraph: {
        title: "College Clubs | TEMPL Group of Institutions",
        description:
            "Discover academic, literary, cultural and sports clubs that encourage student participation, leadership and holistic development at TEMPL.",
        images: ["/contentImg/club.webp"],
    },
};

const clubs = [
    {
        number: "01",
        icon: "fa-solid fa-graduation-cap",
        title: "Academic Club",
        subtitle: "Where Ideas Meet Innovation",
        description:
            "The Academic Club encourages intellectual growth, knowledge-sharing and academic excellence. It provides students with opportunities to exchange ideas, develop critical thinking and improve their communication skills.",
        activities: [
            {
                icon: "fa-solid fa-comments",
                title: "Debates",
                description:
                    "Thought-provoking discussions that develop public speaking, critical thinking and argumentation skills.",
            },
            {
                icon: "fa-solid fa-person-chalkboard",
                title: "Seminars & Webinars",
                description:
                    "Learning sessions featuring guest speakers, industry experts and thought leaders.",
            },
            {
                icon: "fa-solid fa-people-group",
                title: "Group Discussions",
                description:
                    "Interactive discussions that strengthen communication, teamwork and confidence.",
            },
        ],
        members: "10",
        leadership: "Convener & Co-Convener",
        theme: "academic",
    },
    {
        number: "02",
        icon: "fa-solid fa-book-open",
        title: "Literature & Media Club",
        subtitle: "Celebrating Creativity & Expression",
        description:
            "The Literature and Media Club provides a platform for students to express their creativity, develop literary skills and participate in social media activities that keep the TEMPL community connected.",
        activities: [
            {
                icon: "fa-solid fa-pen-nib",
                title: "Literary Events",
                description:
                    "Writing competitions, poetry recitals, book discussions and creative writing workshops.",
            },
            {
                icon: "fa-solid fa-hashtag",
                title: "Social Media Management",
                description:
                    "Managing student event promotions, engaging posts and social media updates.",
            },
            {
                icon: "fa-solid fa-lightbulb",
                title: "Creative Expression",
                description:
                    "Opportunities to improve storytelling, writing and communication abilities.",
            },
        ],
        members: "10",
        leadership: "Convener & Co-Convener",
        theme: "literature",
    },
    {
        number: "03",
        icon: "fa-solid fa-masks-theater",
        title: "Cultural Club",
        subtitle: "Celebrating Diversity Through Arts & Music",
        description:
            "The Cultural Club brings together students who share a passion for music, dance, drama and artistic expression. It organizes cultural activities that celebrate creativity and the diversity of student talent.",
        activities: [
            {
                icon: "fa-solid fa-calendar-days",
                title: "Cultural Festivals",
                description:
                    "Annual cultural festivals, talent shows and traditional celebrations.",
            },
            {
                icon: "fa-solid fa-music",
                title: "Music Events",
                description:
                    "Live performances, music competitions and opportunities for solo and group artists.",
            },
            {
                icon: "fa-solid fa-palette",
                title: "Creative Workshops",
                description:
                    "Workshops that encourage students to develop their skills in music, dance, drama and arts.",
            },
        ],
        members: "10",
        leadership: "Convener & Co-Convener",
        theme: "cultural",
    },
    {
        number: "04",
        icon: "fa-solid fa-trophy",
        title: "Sports Club",
        subtitle: "Fueling Competition & Fitness",
        description:
            "The Sports Club promotes physical fitness, sportsmanship and healthy competition. It encourages students to participate in sporting activities and maintain a balanced lifestyle.",
        activities: [
            {
                icon: "fa-solid fa-baseball",
                title: "Sports Tournaments",
                description:
                    "Inter-college competitions in cricket, football, basketball and athletics.",
            },
            {
                icon: "fa-solid fa-heart-pulse",
                title: "Fitness Programs",
                description:
                    "Yoga sessions, fitness challenges and activities promoting a healthy lifestyle.",
            },
            {
                icon: "fa-solid fa-person-running",
                title: "Sports Workshops",
                description:
                    "Skill-development workshops conducted with guidance from experts and coaches.",
            },
        ],
        members: "10",
        leadership: "Convener & Co-Convener",
        theme: "sports",
    },
];

const benefits = [
    {
        icon: "fa-solid fa-user-tie",
        title: "Leadership Development",
        description:
            "Student-managed clubs provide opportunities to take leadership roles, develop organizational abilities and gain experience in event management.",
    },
    {
        icon: "fa-solid fa-network-wired",
        title: "Networking Opportunities",
        description:
            "Collaborate with like-minded students and connect with guest speakers, industry experts and professionals.",
    },
    {
        icon: "fa-solid fa-brain",
        title: "Skill Enhancement",
        description:
            "Develop communication, public speaking, teamwork, creativity and event-planning skills.",
    },
    {
        icon: "fa-solid fa-people-group",
        title: "Vibrant Campus Life",
        description:
            "Participate in exciting events, explore personal interests and create memorable college experiences.",
    },
];

const faqs = [
    {
        question: "How many student clubs are available at TEMPL Group of Institutions?",
        answer:
            "TEMPL Group of Institutions has four student-driven clubs: Academic Club, Literature and Media Club, Cultural Club and Sports Club.",
    },
    {
        question: "Are the college clubs managed by students?",
        answer:
            "Yes. All four clubs are completely managed by students, encouraging responsibility, teamwork, creativity and leadership.",
    },
    {
        question: "How many members manage each club?",
        answer:
            "Each club is managed by a team of 10 student members, including a Convener and a Co-Convener.",
    },
    {
        question: "What activities are organized by the Academic Club?",
        answer:
            "The Academic Club organizes debates, seminars, webinars and group discussions to promote academic excellence and communication skills.",
    },
    {
        question: "What does the Literature and Media Club do?",
        answer:
            "The club organizes writing competitions, poetry recitals, book discussions and creative writing workshops. It also manages social media activities related to student events.",
    },
    {
        question: "What activities are organized by the Cultural Club?",
        answer:
            "The Cultural Club organizes cultural festivals, talent shows, traditional celebrations, music events and workshops related to dance, drama and other art forms.",
    },
    {
        question: "What sports activities are available?",
        answer:
            "The Sports Club organizes inter-college tournaments in cricket, football, basketball and athletics, along with yoga sessions, fitness challenges and sports workshops.",
    },
    {
        question: "What are the benefits of joining student clubs?",
        answer:
            "Students develop leadership, teamwork, communication, creativity, organizational and networking skills while participating in extracurricular activities.",
    },
];

function SectionHeading({ label, title, highlight }) {
    return (
        <div className="clubs-heading">
            <span>{label}</span>

            <h2>
                {title} <strong>{highlight}</strong>
            </h2>

            <div className="clubs-heading-line"></div>
        </div>
    );
}

export default function CollegeClubsPage() {
    return (
        <main className="college-clubs-page">

            {/* HERO SECTION */}
            <section className="clubs-hero">
                <img
                    src="/images/club.webp"
                    alt="College clubs and student activities at TEMPL Group of Institutions"
                    className="clubs-hero-image"
                />
            </section>

            {/* INTRODUCTION */}
            <section className="clubs-intro clubs-container">

                <SectionHeading
                    label="LIFE BEYOND CLASSROOMS"
                    title="Explore Our Unique"
                    highlight="Student Clubs"
                />

                <p>
                    At TEMPL Group of Institutions, we believe that
                    holistic development goes beyond academics. Our
                    vibrant campus life provides students with
                    opportunities to explore their interests, showcase
                    their talents and develop essential leadership skills.
                </p>

                <p>
                    We have four dynamic student-driven clubs: Academic
                    Club, Literature and Media Club, Cultural Club and
                    Sports Club. Completely managed by students, these
                    clubs encourage responsibility, teamwork, creativity
                    and active participation.
                </p>

                <div className="clubs-intro-stats">

                    <div>
                        <i className="fa-solid fa-users"></i>
                        <h3>4</h3>
                        <p>Student Clubs</p>
                    </div>

                    <div>
                        <i className="fa-solid fa-user-group"></i>
                        <h3>10</h3>
                        <p>Members Per Club</p>
                    </div>

                    <div>
                        <i className="fa-solid fa-star"></i>
                        <h3>100%</h3>
                        <p>Student Managed</p>
                    </div>

                </div>

            </section>

            {/* CLUBS OVERVIEW */}
            <section className="clubs-overview">

                <div className="clubs-container">

                    <SectionHeading
                        label="DISCOVER YOUR INTERESTS"
                        title="Four Clubs, Endless"
                        highlight="Opportunities"
                    />

                    <p className="clubs-section-desc">
                        Every club offers a different platform for students
                        to explore their passions, develop new abilities
                        and contribute to campus life.
                    </p>

                    <div className="clubs-overview-grid">

                        {clubs.map((club, index) => (
                            <a
                                href={`#${club.theme}-club`}
                                className={`clubs-overview-card ${club.theme}`}
                                key={index}
                            >
                                <span className="clubs-card-number">
                                    {club.number}
                                </span>

                                <div className="clubs-overview-icon">
                                    <i className={club.icon}></i>
                                </div>

                                <h3>{club.title}</h3>

                                <p>{club.subtitle}</p>

                                <span className="clubs-explore">
                                    Explore Club
                                    <i className="fa-solid fa-arrow-right"></i>
                                </span>
                            </a>
                        ))}

                    </div>

                </div>

            </section>

            {/* INDIVIDUAL CLUB SECTIONS */}
            <section className="clubs-details clubs-container">

                <SectionHeading
                    label="EXPLORE OUR CLUBS"
                    title="Discover What Each Club"
                    highlight="Offers"
                />

                <div className="clubs-details-list">

                    {clubs.map((club, index) => (
                        <article
                            className={`club-detail-card ${club.theme}`}
                            id={`${club.theme}-club`}
                            key={index}
                        >

                            <div className="club-detail-header">

                                <div className="club-detail-icon">
                                    <i className={club.icon}></i>
                                </div>

                                <div>
                                    <span>CLUB {club.number}</span>
                                    <h3>{club.title}</h3>
                                    <p>{club.subtitle}</p>
                                </div>

                            </div>

                            <p className="club-detail-description">
                                {club.description}
                            </p>

                            <h4 className="club-activities-heading">
                                Key Activities
                            </h4>

                            <div className="club-activities-grid">

                                {club.activities.map((activity, i) => (
                                    <div
                                        className="club-activity"
                                        key={i}
                                    >
                                        <i className={activity.icon}></i>

                                        <div>
                                            <h5>{activity.title}</h5>
                                            <p>{activity.description}</p>
                                        </div>
                                    </div>
                                ))}

                            </div>

                            <div className="club-management">

                                <div>
                                    <i className="fa-solid fa-users"></i>
                                    <span>
                                        <strong>{club.members} Members</strong>
                                        Student Management Team
                                    </span>
                                </div>

                                <div>
                                    <i className="fa-solid fa-user-tie"></i>
                                    <span>
                                        <strong>Club Leadership</strong>
                                        {club.leadership}
                                    </span>
                                </div>

                            </div>

                        </article>
                    ))}

                </div>

            </section>

            {/* BENEFITS */}
            <section className="clubs-benefits">

                <div className="clubs-container">

                    <SectionHeading
                        label="GROW BEYOND ACADEMICS"
                        title="Why Join Our"
                        highlight="Clubs?"
                    />

                    <p className="clubs-section-desc">
                        Being part of a student club provides valuable
                        opportunities to develop personal, professional
                        and interpersonal skills.
                    </p>

                    <div className="clubs-benefits-grid">

                        {benefits.map((benefit, index) => (
                            <div className="clubs-benefit-card" key={index}>

                                <div className="clubs-benefit-icon">
                                    <i className={benefit.icon}></i>
                                </div>

                                <h3>{benefit.title}</h3>

                                <p>{benefit.description}</p>

                            </div>
                        ))}

                    </div>

                </div>

            </section>

            {/* HOLISTIC DEVELOPMENT */}
            <section className="clubs-holistic clubs-container">

                <div className="clubs-holistic-content">

                    <span>THE TEMPL CAMPUS EXPERIENCE</span>

                    <h2>
                        More Than Academics.
                        <strong> A Journey of Growth.</strong>
                    </h2>

                    <p>
                        At TEMPL Group of Institutions, we believe that
                        education is about developing confident,
                        responsible and well-rounded individuals.
                        Our student-led clubs provide an environment
                        where academic interests, creative expression
                        and physical fitness come together.
                    </p>

                    <p>
                        Through active participation, students discover
                        their potential, build meaningful connections
                        and create lasting memories throughout their
                        college journey.
                    </p>

                </div>

                <div className="clubs-holistic-icons">

                    <div>
                        <i className="fa-solid fa-book-open"></i>
                        <span>Learn</span>
                    </div>

                    <div>
                        <i className="fa-solid fa-lightbulb"></i>
                        <span>Create</span>
                    </div>

                    <div>
                        <i className="fa-solid fa-users"></i>
                        <span>Connect</span>
                    </div>

                    <div>
                        <i className="fa-solid fa-trophy"></i>
                        <span>Excel</span>
                    </div>

                </div>

            </section>

            {/* FAQ */}
            <section className="clubs-faq">

                <div className="clubs-container">

                    <SectionHeading
                        label="NEED TO KNOW MORE?"
                        title="Frequently Asked"
                        highlight="Questions"
                    />

                    <div className="clubs-faq-list">

                        {faqs.map((faq, index) => (
                            <details
                                className="clubs-faq-item"
                                key={index}
                            >
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
            <section className="clubs-conclusion">

                <div className="clubs-container">

                    <span>DISCOVER • PARTICIPATE • GROW</span>

                    <h2>
                        Make Your College Journey
                        <strong> More Meaningful</strong>
                    </h2>

                    <p>
                        Explore your interests, discover your talents
                        and become an active part of the TEMPL campus
                        community. Our student-driven clubs provide
                        opportunities to learn, collaborate and grow
                        beyond the classroom.
                    </p>

                </div>

            </section>

        </main>
    );
}