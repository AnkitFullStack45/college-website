import "./templ-edge.css";

export const metadata = {
    title: "TEMPL EDGE | Holistic Development",
    description:
        "Discover TEMPL EDGE, a holistic educational experience combining academic excellence, spiritual development, modern infrastructure and practical learning.",
};

const highlights = [
    {
        title: "Highly Qualified and Experienced Faculties",
        description: "A team of dedicated educators offering quality education and mentorship.",
    },
    {
        title: "Lush Green, Pollution-Free Campus",
        description: "Over 10 acres of serene surroundings with parks and gardens.",
    },
    {
        title: "Spacious Classrooms",
        description: "Modern multimedia teaching methods for interactive learning.",
    },
    {
        title: "Wi-Fi Internet Campus",
        description: "Internet access for research and online learning.",
    },
    {
        title: "Well-Documented Library",
        description: "A collection of books and journals supporting academic growth.",
    },
    {
        title: "State-of-the-Art Labs",
        description: "Modern tools and technologies for hands-on learning.",
    },
    {
        title: "Computer Lab",
        description: "Branded desktop PCs with high-speed internet and a 1:1 student-to-PC ratio.",
    },
    {
        title: "Seminars & Workshops",
        description: "Regular events with industry experts and academicians.",
    },
    {
        title: "Guest Lectures",
        description: "Insights from experienced faculty members and professionals.",
    },
    {
        title: "Industrial Visits",
        description: "Practical exposure through industry visits and internships.",
    },
    {
        title: "Placement Assistance",
        description: "Dedicated placement support to help students explore career opportunities.",
    },
    {
        title: "Personality Development",
        description: "Personality development classes and group discussions.",
    },
    {
        title: "Educational Tours",
        description: "Real-world learning experiences through educational trips.",
    },
    {
        title: "Scout Guide and Social Training Programs",
        description: "Activities promoting community service and leadership.",
    },
    {
        title: "Hygienic Facilities",
        description: "Clean washrooms and safe drinking water.",
    },
    {
        title: "Sports Facilities",
        description: "Cricket, football, basketball and other sports activities.",
    },
    {
        title: "Co-Curricular Activities",
        description: "Debates, drama, poetry and aptitude tests.",
    },
    {
        title: "Extra-Curricular Activities",
        description: "Arts, cultural events, yoga, meditation and fitness programs.",
    },
];

export default function TemplEdgePage() {
    return (
        <main className="templ-edge-page">

            {/* FULL-WIDTH IMAGE - NO OVERLAY */}
            <section className="templ-edge-banner">
                <img
                    src="/images/templ_edge.webp"
                    alt="TEMPL EDGE - The Path to Holistic Development"
                />
            </section>


            {/* INTRODUCTION */}
            <section className="templ-edge-intro">
                <div className="templ-edge-container">

                    <div className="templ-edge-heading">
                        <span className="templ-edge-label">
                            THE TEMPL ADVANTAGE
                        </span>

                        <h1>
                            TEMPL <span>EDGE</span>
                        </h1>

                        <h2>
                            The Path to Holistic Development
                        </h2>

                        <div className="templ-edge-line"></div>
                    </div>

                    <p>
                        At TEMPL Group of Institutions, we recognize that
                        our academic pursuits must be accompanied by
                        spiritual enlightenment. Under the guidance of
                        Samarth Sadguru Dr. Jai Dayal (Babu) and Master
                        Kamlesh Patel, we strive to foster a learning
                        environment that encourages students to evolve
                        into not only knowledgeable professionals but also
                        empathetic, ethical, and compassionate individuals.
                    </p>

                    <p>
                        Their teachings and spiritual practices are
                        integrated into our daily routines, offering our
                        students a balanced approach to life that embraces
                        both intellectual development and inner peace.
                        We firmly believe that with their guidance, our
                        students will rise to become not just successful
                        leaders but also inspiring human beings who
                        contribute positively to society and the world.
                    </p>

                </div>
            </section>


            {/* COMPREHENSIVE EDUCATIONAL EXPERIENCE */}
            <section className="templ-edge-experience">
                <div className="templ-edge-container">

                    <div className="templ-edge-heading">
                        <span className="templ-edge-label">
                            BEYOND CLASSROOM LEARNING
                        </span>

                        <h2>
                            A Comprehensive Educational
                            <span> Experience</span>
                        </h2>

                        <div className="templ-edge-line"></div>
                    </div>

                    <p>
                        At our student-centric campus, we believe that
                        academic excellence is just the beginning of a
                        holistic educational journey. We provide our
                        students with a unique TEMPL EDGE—a powerful
                        combination of modern infrastructure, experienced
                        faculty, industry exposure, and extracurricular
                        activities designed to foster intellectual,
                        physical, and emotional growth. Here, we ensure
                        that every student is not only prepared to excel
                        in their academic career but also equipped to
                        take on the challenges of the real world.
                    </p>

                </div>
            </section>


            {/* HIGHLIGHTS */}
            <section className="templ-edge-highlights">
                <div className="templ-edge-container">

                    <div className="templ-edge-heading">
                        <span className="templ-edge-label">
                            WHAT MAKES US DIFFERENT
                        </span>

                        <h2>
                            Highlights of TEMPL Group
                            <span> of Institutions</span>
                        </h2>

                        <div className="templ-edge-line"></div>
                    </div>


                    <div className="templ-edge-grid">
                        {highlights.map((item, index) => (
                            <div
                                className="templ-edge-card"
                                key={index}
                            >
                                <div className="templ-edge-card-number">
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>


            {/* CLOSING CONTENT */}
            <section className="templ-edge-closing">
                <div className="templ-edge-container">

                    <h2>
                        Education Beyond <span>Boundaries</span>
                    </h2>

                    <p>
                        At our institution, we believe that education
                        should extend far beyond textbooks and traditional
                        classroom learning. We are committed to nurturing
                        future-ready professionals by providing a balanced
                        blend of academic excellence, practical exposure,
                        skill development, and personal growth opportunities.
                        Through innovative teaching methodologies,
                        industry-oriented training, modern learning
                        facilities, and a student-centric approach, learners
                        are empowered to develop critical thinking,
                        leadership abilities, communication skills and
                        professional competence.
                    </p>

                    <p>
                        Our vibrant campus environment encourages
                        participation in cultural activities, sports,
                        workshops, seminars, and community engagement
                        initiatives, helping students discover their true
                        potential while building confidence and character.
                        Connect with us to experience an enriching
                        educational journey where knowledge meets innovation,
                        talent is transformed into success, and every student
                        is inspired to embrace lifelong learning and build
                        a successful future in an ever-evolving global
                        landscape.
                    </p>

                </div>
            </section>

        </main>
    );
}