import "./library.css";

export const metadata = {
    title: "Library Facility | TEMPL Group of Institutions",
    description:
        "Explore the library facility at TEMPL Group of Institutions, featuring extensive books, national and international journals, digital learning resources, and spacious reading areas.",
    alternates: {
        canonical: "https://www.templgroup.in/Edge/library",
    },
    openGraph: {
        title: "Library Facility | TEMPL Group of Institutions",
        description:
            "Discover a modern learning environment with extensive books, journals, research resources and e-library facilities at TEMPL Group of Institutions.",
        images: ["/image/library.webp"],
    },
};

const libraryFeatures = [
    {
        icon: "fa-solid fa-book-open",
        title: "Extensive Book Collection",
        description:
            "Access a diverse collection of textbooks, reference materials and academic publications covering engineering, law, management, science, arts and social sciences.",
    },
    {
        icon: "fa-solid fa-book-bookmark",
        title: "National & International Journals",
        description:
            "Explore academic journals, research papers, scholarly articles and periodicals to stay updated with developments across different fields.",
    },
    {
        icon: "fa-solid fa-laptop",
        title: "Advanced E-Library",
        description:
            "Access digital books, online journals, databases and academic resources through our e-library facility for flexible learning and research.",
    },
    {
        icon: "fa-solid fa-desktop",
        title: "Computerized Library System",
        description:
            "A modern computerized cataloguing and management system helps students locate, access and borrow learning resources conveniently.",
    },
    {
        icon: "fa-solid fa-users",
        title: "Comfortable Reading Spaces",
        description:
            "Dedicated reading zones, individual study spaces and group learning areas create an environment suitable for different learning preferences.",
    },
    {
        icon: "fa-solid fa-graduation-cap",
        title: "Academic Research Support",
        description:
            "Students receive assistance with reference materials, research methodologies, information literacy and academic writing.",
    },
];

const libraryServices = [
    {
        icon: "fa-solid fa-headset",
        title: "Reference & Consultation",
        description:
            "Our library staff assists students with reference queries, research methodologies and locating relevant academic resources.",
    },
    {
        icon: "fa-solid fa-book-reader",
        title: "Book Lending & Reservation",
        description:
            "Students can borrow books for designated periods and reserve popular titles to ensure convenient access to essential study materials.",
    },
    {
        icon: "fa-solid fa-computer",
        title: "Reading Zones & Study Areas",
        description:
            "Dedicated reading spaces equipped with desktop computers support individual learning, research and group discussions.",
    },
    {
        icon: "fa-solid fa-chalkboard-user",
        title: "Workshops & Seminars",
        description:
            "Library workshops and seminars encourage research skills, information literacy and effective academic writing.",
    },
];

const libraryAdvantages = [
    {
        number: "01",
        title: "Student-Centric Infrastructure",
        description:
            "Spacious and well-ventilated surroundings with seating capacity for over 100 students.",
    },
    {
        number: "02",
        title: "Diverse Learning Resources",
        description:
            "A comprehensive collection of books, reference materials, journals and research publications.",
    },
    {
        number: "03",
        title: "Digital Learning Access",
        description:
            "An e-library facility that extends learning beyond traditional physical resources.",
    },
    {
        number: "04",
        title: "Research-Oriented Environment",
        description:
            "Academic resources and guidance that encourage independent research and knowledge development.",
    },
];

function SectionHeading({ label, title, highlight }) {
    return (
        <div className="library-heading">
            <span className="library-heading-label">{label}</span>
            <h2>
                {title} <span>{highlight}</span>
            </h2>
            <div className="library-heading-line"></div>
        </div>
    );
}

export default function LibraryPage() {
    return (
        <main className="library-page">

            {/* Hero Banner */}
            <section className="library-hero">
                <img
                    src="/images/library.webp"
                    alt="Smart library facility at TEMPL Group of Institutions"
                    className="library-hero-image"
                />
            </section>

            {/* Introduction */}
            <section className="library-intro library-container">

                <SectionHeading
                    label="LEARNING BEYOND CLASSROOMS"
                    title="Library Facility at TEMPL Group of"
                    highlight="Institutions"
                />

                <p>
                    At TEMPL Group of Institutions, we believe that a great
                    library is the cornerstone of academic excellence. Our
                    library provides an enriching learning environment that
                    encourages intellectual curiosity and supports students'
                    academic and professional growth.
                </p>

                <p>
                    With an extensive collection of books, academic journals,
                    digital resources and modern facilities, our library
                    serves as an important knowledge hub for students.
                </p>

                <div className="library-capacity">
                    <div className="capacity-icon">
                        <i className="fa-solid fa-users"></i>
                    </div>

                    <div>
                        <h3>100+ Students</h3>
                        <p>Seating capacity in a spacious learning environment</p>
                    </div>
                </div>

            </section>

            {/* Spacious Library */}
            <section className="library-spacious">
                <div className="library-container spacious-grid">

                    <div className="spacious-content">
                        <span className="library-subtitle">
                            A COMFORTABLE LEARNING SPACE
                        </span>

                        <h2>
                            Spacious & Well-Equipped
                            <span> Library</span>
                        </h2>

                        <p>
                            Our library features a large, open and well-ventilated
                            space designed to provide a comfortable atmosphere
                            for reading, studying and research.
                        </p>

                        <p>
                            With seating arrangements for over 100 students,
                            it offers an ideal setting for examination
                            preparation, assignments, independent learning
                            and academic discussions.
                        </p>

                        <div className="spacious-points">
                            <div>
                                <i className="fa-solid fa-check-circle"></i>
                                Comfortable seating arrangements
                            </div>

                            <div>
                                <i className="fa-solid fa-check-circle"></i>
                                Quiet and peaceful study environment
                            </div>

                            <div>
                                <i className="fa-solid fa-check-circle"></i>
                                Dedicated reading and study spaces
                            </div>
                        </div>
                    </div>

                    <div className="spacious-highlight">
                        <i className="fa-solid fa-book-open-reader"></i>
                        <h3>A Space to Learn, Explore & Grow</h3>
                        <p>
                            Encouraging curiosity, independent thinking
                            and lifelong learning.
                        </p>
                    </div>

                </div>
            </section>

            {/* Library Features */}
            <section className="library-features library-container">

                <SectionHeading
                    label="EXPLORE OUR RESOURCES"
                    title="A Complete Learning"
                    highlight="Experience"
                />

                <p className="library-section-description">
                    Our library brings together traditional academic resources
                    and modern digital facilities to support diverse learning
                    and research requirements.
                </p>

                <div className="library-feature-grid">

                    {libraryFeatures.map((feature, index) => (
                        <div className="library-feature-card" key={index}>

                            <div className="library-feature-icon">
                                <i className={feature.icon}></i>
                            </div>

                            <h3>{feature.title}</h3>

                            <p>{feature.description}</p>

                        </div>
                    ))}

                </div>
            </section>

            {/* Library Services */}
            <section className="library-services">

                <div className="library-container">

                    <SectionHeading
                        label="STUDENT SUPPORT"
                        title="Special Services Offered by the"
                        highlight="Library"
                    />

                    <p className="library-section-description">
                        We provide a range of library services to make
                        learning, research and access to academic resources
                        easier for our students.
                    </p>

                    <div className="library-service-grid">

                        {libraryServices.map((service, index) => (
                            <div className="library-service-card" key={index}>

                                <div className="library-service-icon">
                                    <i className={service.icon}></i>
                                </div>

                                <div>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </section>

            {/* Why Choose Our Library */}
            <section className="library-advantages library-container">

                <SectionHeading
                    label="OUR LEARNING ADVANTAGE"
                    title="Why Our Library is a Key"
                    highlight="USP"
                />

                <p className="library-section-description">
                    Our library combines quality academic resources,
                    modern infrastructure and a student-focused
                    learning environment.
                </p>

                <div className="library-advantage-grid">

                    {libraryAdvantages.map((item, index) => (
                        <div className="library-advantage-card" key={index}>

                            <span className="advantage-number">
                                {item.number}
                            </span>

                            <h3>{item.title}</h3>

                            <p>{item.description}</p>

                        </div>
                    ))}

                </div>

            </section>

            {/* Conclusion */}
            <section className="library-conclusion">

                <div className="library-container">

                    <div className="library-conclusion-content">

                        <span>DISCOVER THE POWER OF KNOWLEDGE</span>

                        <h2>
                            Your Gateway to Knowledge,
                            Learning & Academic Excellence
                        </h2>

                        <p>
                            At TEMPL Group of Institutions, our library is
                            more than just a place for books. It is a dynamic
                            learning hub that encourages students to explore
                            new ideas, strengthen their knowledge and achieve
                            their academic goals.
                        </p>

                        <p>
                            Whether you are preparing for examinations,
                            conducting research or exploring new subjects,
                            our library provides an environment that supports
                            your journey towards academic and professional growth.
                        </p>

                    </div>

                </div>

            </section>

        </main>
    );
}