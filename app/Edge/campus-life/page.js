import Link from "next/link";
import "./campus-life.css";

export const metadata = {
    title: "Campus Life | TEMPL Group of Institutions, Ghaziabad",
    description:
        "Explore campus life at TEMPL Group of Institutions, including student activities, cultural events, sports, modern facilities, a supportive learning environment and convenient campus connectivity.",
};

const locationAdvantages = [
    {
        number: "01",
        title: "Prime Connectivity",
        description:
            "The campus's location on NH-58 and its proximity to key transportation hubs like the Muradnagar RRTS metro station make it convenient for students, faculty, and visitors to travel from surrounding areas, including Ghaziabad, Meerut, and New Delhi.",
    },
    {
        number: "02",
        title: "Ease of Commute",
        description:
            "With approximately 15–25 minutes of travel time from major locations, such as Ghaziabad, Meerut, and New Delhi, TEMPL Group of Institutions offers convenient accessibility.",
    },
    {
        number: "03",
        title: "Student Convenience",
        description:
            "Students can enjoy access to the campus from different directions, including walking distance from NH-58, dedicated transport services, and quick metro access.",
    },
    {
        number: "04",
        title: "Future-Ready Connectivity",
        description:
            "As RapidX RRTS Metro continues to expand its coverage, connectivity from TEMPL Group of Institutions to other parts of the region is expected to improve further.",
    },
];

const studentActivities = [
    {
        number: "01",
        title: "Cultural Festivals",
        description:
            "Annual celebrations, talent showcases, and cultural programs that encourage creativity and bring students together.",
        icon: "✦",
    },
    {
        number: "02",
        title: "Technical Events",
        description:
            "Coding competitions, quizzes, and innovation challenges that encourage technical knowledge and problem-solving.",
        icon: "</>",
    },
    {
        number: "03",
        title: "Leadership Programs",
        description:
            "Activities designed to develop confidence, communication, teamwork, and decision-making skills.",
        icon: "↗",
    },
    {
        number: "04",
        title: "Community Outreach",
        description:
            "Social awareness campaigns and volunteer initiatives that encourage responsibility and community participation.",
        icon: "♡",
    },
    {
        number: "05",
        title: "Annual Sports Meets",
        description:
            "Regular sports events encourage physical fitness, teamwork, discipline, and sportsmanship among students.",
        icon: "⚽",
    },
];

const campusFacilities = [
    {
        number: "01",
        title: "Technology-Enabled Classrooms",
        description:
            "Learning spaces designed to support interactive and engaging classroom experiences.",
        icon: "▣",
    },
    {
        number: "02",
        title: "Advanced Computer Laboratories",
        description:
            "Laboratory facilities that support practical learning and hands-on technical experience.",
        icon: "⌘",
    },
    {
        number: "03",
        title: "Library and Learning Resources",
        description:
            "Academic resources that encourage reading, research, independent learning, and knowledge development.",
        icon: "▤",
    },
    {
        number: "04",
        title: "Seminar and Conference Halls",
        description:
            "Dedicated spaces for seminars, workshops, presentations, and academic discussions.",
        icon: "▥",
    },
    {
        number: "05",
        title: "Wi-Fi Enabled Campus",
        description:
            "Connectivity that supports digital learning and access to online educational resources.",
        icon: "⌁",
    },
    {
        number: "06",
        title: "Student Recreation Spaces",
        description:
            "Spaces where students can relax, interact, and enjoy their time beyond academic activities.",
        icon: "♧",
    },
];

function SectionHeading({ label, title, highlight }) {
    return (
        <div className="campus-heading">
            <span className="campus-label">{label}</span>

            <h2>
                {title} <span>{highlight}</span>
            </h2>

            <div className="campus-heading-line"></div>
        </div>
    );
}

export default function CampusLifePage() {
    return (
        <main className="campus-page">

            {/* FULL WIDTH BANNER */}

            <section className="campus-banner">
                <img
                    src="/images/campus_life.webp"
                    alt="Campus Life at TEMPL Group of Institutions"
                />
            </section>


            {/* INTRODUCTION */}

            <section className="campus-intro">
                <div className="campus-container">

                    <SectionHeading
                        label="LIFE BEYOND CLASSROOMS"
                        title="Experience the"
                        highlight="Campus Life"
                    />

                    <p>
                        Campus life at TEMPL Group of Institutions extends
                        beyond academics. It offers students opportunities
                        to participate in cultural events, leadership
                        activities, workshops, seminars, and extracurricular
                        programs.
                    </p>

                    <p>
                        We promote a balanced educational experience that
                        encourages creativity, collaboration, innovation,
                        and personal growth while helping students build
                        meaningful friendships and lifelong memories.
                    </p>

                </div>
            </section>


            {/* LOCATION ADVANTAGE */}

            <section className="campus-location">
                <div className="campus-container">

                    <SectionHeading
                        label="ACCESSIBILITY AND CONNECTIVITY"
                        title="TEMPL's"
                        highlight="Location Advantage"
                    />

                    <p className="campus-section-description">
                        Convenient connectivity and accessibility make
                        travelling to the TEMPL campus easier for students,
                        faculty members, and visitors from surrounding areas.
                    </p>

                    <div className="campus-location-grid">

                        {locationAdvantages.map((item) => (
                            <article
                                className="campus-location-card"
                                key={item.number}
                            >
                                <span className="campus-card-number">
                                    {item.number}
                                </span>

                                <h3>{item.title}</h3>

                                <p>{item.description}</p>
                            </article>
                        ))}

                    </div>

                </div>
            </section>


            {/* VIBRANT STUDENT LIFE */}

            <section className="campus-vibrant">
                <div className="campus-container">

                    <SectionHeading
                        label="LEARN • PARTICIPATE • GROW"
                        title="Vibrant Student Life and"
                        highlight="Holistic Development"
                    />

                    <div className="campus-vibrant-content">
                        <p>
                            Campus life extends beyond academics, offering
                            students numerous opportunities to participate
                            in cultural events, leadership activities,
                            workshops, seminars, and extracurricular programs.
                        </p>

                        <p>
                            The institution promotes a balanced educational
                            experience that encourages creativity,
                            collaboration, innovation, and personal growth
                            while helping students build meaningful
                            friendships and lifelong memories.
                        </p>
                    </div>

                    <h3 className="campus-subheading">
                        Student Activities and Engagement
                    </h3>

                    <div className="campus-activities-grid">

                        {studentActivities.map((activity) => (
                            <article
                                className="campus-activity-card"
                                key={activity.number}
                            >
                                <div className="campus-activity-top">
                                    <span className="campus-activity-icon">
                                        {activity.icon}
                                    </span>

                                    <span className="campus-activity-number">
                                        {activity.number}
                                    </span>
                                </div>

                                <h3>{activity.title}</h3>

                                <p>{activity.description}</p>

                                <div className="campus-activity-bottom"></div>
                            </article>
                        ))}

                    </div>

                </div>
            </section>


            {/* SAFE AND SUPPORTIVE ENVIRONMENT */}

            <section className="campus-environment">
                <div className="campus-container">

                    <div className="campus-environment-box">

                        <div className="campus-environment-heading">
                            <span className="campus-label">
                                A PLACE TO LEARN AND THRIVE
                            </span>

                            <h2>
                                Safe and Supportive
                                <span> Learning Environment</span>
                            </h2>

                            <div className="campus-heading-line"></div>
                        </div>

                        <p>
                            A secure campus atmosphere, dedicated faculty
                            support, and student-focused services ensure
                            that learners can concentrate on their academic
                            and personal development with confidence.
                        </p>

                        <p>
                            Surrounded by lush greenery and open spaces,
                            the campus offers a peaceful, pollution-free
                            environment that promotes focus, well-being,
                            and productive learning.
                        </p>

                        <p>
                            The abundance of fresh air, natural surroundings,
                            and a noise-free atmosphere creates an ideal
                            setting for academic excellence, critical
                            thinking, and personal growth.
                        </p>

                        <p>
                            Away from the distractions of crowded urban areas,
                            students benefit from a calm and refreshing
                            environment that supports both educational
                            achievement and a healthy lifestyle, making the
                            campus an ideal destination for quality higher
                            education and holistic development.
                        </p>

                        <div className="campus-environment-highlight">
                            <span>✦</span>
                            A peaceful campus environment for learning,
                            well-being, and personal growth.
                        </div>

                    </div>

                </div>
            </section>


            {/* CAMPUS FACILITIES */}

            <section className="campus-facilities">
                <div className="campus-container">

                    <SectionHeading
                        label="SUPPORTING YOUR LEARNING JOURNEY"
                        title="Modern Campus"
                        highlight="Facilities"
                    />

                    <p className="campus-section-description">
                        Our campus facilities support academic activities,
                        practical learning, knowledge development, and
                        student interaction.
                    </p>

                    <div className="campus-facilities-grid">

                        {campusFacilities.map((facility) => (
                            <article
                                className="campus-facility-card"
                                key={facility.number}
                            >
                                <div className="campus-facility-icon">
                                    {facility.icon}
                                </div>

                                <span className="campus-facility-number">
                                    {facility.number}
                                </span>

                                <h3>{facility.title}</h3>

                                <p>{facility.description}</p>
                            </article>
                        ))}

                    </div>

                </div>
            </section>


            {/* CAMPUS CONNECTIVITY MESSAGE */}

            <section className="campus-connectivity">
                <div className="campus-container">

                    <div className="campus-connectivity-content">

                        <span className="campus-label">
                            CONNECTIVITY MEETS OPPORTUNITY
                        </span>

                        <h2>
                            A Convenient Campus for
                            <span> a Better Learning Experience</span>
                        </h2>

                        <p>
                            At TEMPL Group of Institutions, we ensure that
                            our campus is not only academically superior
                            but also conveniently accessible. This enables
                            our students to focus on their education,
                            career development, and overall growth without
                            worrying about the challenges of commuting.
                        </p>

                        <p>
                            We invite you to be part of our vibrant and
                            future-ready campus, where connectivity meets
                            opportunity!
                        </p>

                    </div>

                </div>
            </section>


            {/* ADMISSION CTA */}

            <section className="campus-cta">
                <div className="campus-container">

                    <span className="campus-cta-label">
                        BEGIN YOUR JOURNEY WITH TEMPL
                    </span>

                    <h2>
                        Interested in Joining Our
                        <span> Academic Community?</span>
                    </h2>

                    <p>
                        Discover quality education, experienced faculty,
                        modern infrastructure, placement support, and
                        a vibrant campus life.
                    </p>

                    <p>
                        Register today to receive admission guidance,
                        course information, scholarship details, and
                        career counseling support.
                    </p>

                    <div className="campus-cta-actions">

                        <Link
                            href="/register"
                            className="campus-primary-button"
                        >
                            Register Now
                            <span>→</span>
                        </Link>

                        <Link
                            href="/contact"
                            className="campus-secondary-button"
                        >
                            Contact Us
                        </Link>

                    </div>

                </div>
            </section>

        </main>
    );
}