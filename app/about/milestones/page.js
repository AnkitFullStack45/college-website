import "./milestones.css";
import Link from "next/link";

const milestones = [
    {
        year: "1998",
        title: "The Beginning of an Educational Revolution",
        description: (
            <>
                The journey of TEMPL Group of Institutions began in 1998
                with the establishment of SIMPL Computers Management System,
                a franchise of CMC Ltd., a Government of India enterprise.
                Specializing in computer education, SIMPL became a training
                hub in Ghaziabad and Delhi NCR, attracting over 500 students
                pursuing computer science courses.
            </>
        ),
    },
    {
        year: "2000",
        title: "Expansion to Saharanpur & Distance Education",
        description: (
            <>
                In 2000, we expanded to Saharanpur by establishing a new
                computer education centre. We also introduced distance
                education programs in collaboration with Allahabad Deemed
                University, offering courses such as B.Tech, M.Tech and MBA.
            </>
        ),
    },
    {
        year: "2001",
        title: "Partnership with Punjab Technical University",
        description: (
            <>
                We further extended our educational reach through a
                partnership with Punjab Technical University to offer
                distance learning programs. This initiative made graduate
                and postgraduate education more accessible to students
                from different backgrounds.
            </>
        ),
    },
    {
        year: "2003",
        title: "Birth of TEMPL Group of Institutions",
        description: (
            <>
                The year 2003 marked the official formation of TEMPL Group
                of Institutions with the establishment of the Institute
                for Education and Technical Sciences. The Department of
                Education was launched with the Bachelor of Education
                (B.Ed) program, affiliated with CCS University Meerut
                and approved by NCTE.
            </>
        ),
    },
    {
        year: "2011",
        title: "New Departments, New Opportunities",
        description: (
            <>
                We expanded our academic offerings with the introduction
                of the Department of Management, offering BBA, and the
                Department of Commerce, offering B.Com. Both programs
                were affiliated with CCS University Meerut.
            </>
        ),
    },
    {
        year: "2015",
        title: "Strengthening the Education Sector",
        description: (
            <>
                In 2015, we introduced the Basic Teachers Training (BTC)
                program, now known as D.El.Ed (Diploma in Elementary
                Education). With an initial intake of 50 students and
                SCERT approval, this initiative strengthened our
                commitment to teacher education.
            </>
        ),
    },
    {
        year: "2016",
        title: "Expansion into Computer Science",
        description: (
            <>
                The{" "}
                <Link href="/dep_of_computer">
                    Department of Computer Science
                </Link>{" "}
                was established in 2016. We introduced the Bachelor of
                Computer Applications (BCA), a three-year undergraduate
                program affiliated with CCS University Meerut.
            </>
        ),
    },
    {
        year: "2018",
        title: "The Launch of LSR Law Academy",
        description: (
            <>
                TEMPL Group entered the field of legal education with
                the establishment of LSR Law Academy. The Bachelor of
                Laws (LL.B) program was introduced with an initial
                intake of 120 seats and approval from the Bar Council
                of India.{" "}
                <Link href="/Llb">Explore LL.B</Link>
            </>
        ),
    },
    {
        year: "2019",
        title: "Postgraduate Education in Education",
        description: (
            <>
                The Institute for Education and Technical Sciences
                introduced the Master of Education (M.Ed) program,
                becoming a postgraduate college. This two-year program
                was introduced under the Department of Education,
                affiliated with CCS University Meerut and approved
                by NCTE.{" "}
                <Link href="/Med">Explore M.Ed</Link>
            </>
        ),
    },
    {
        year: "2022",
        title: "New Heights for Law Programs",
        description: (
            <>
                LSR Law Academy introduced the five-year integrated
                BA LL.B program, combining Bachelor of Arts and
                Bachelor of Legislative Law. Approved by the Bar
                Council of India and affiliated with CCS University
                Meerut, the program started with 60 seats. The LL.B
                intake was also increased to 180 seats.{" "}
                <Link href="/BaLlb">Explore BA LL.B</Link>
            </>
        ),
    },
    {
        year: "2023",
        title: "A Refreshing Campus Experience",
        description: (
            <>
                We introduced KI Bites, a campus canteen-cum-cafe
                offering a variety of food and refreshments. It
                provides students with a welcoming space to relax,
                connect and enjoy campus life between classes.
            </>
        ),
    },
    {
        year: "2024",
        title: "Growth, Digital Transformation & Student Empowerment",
        description: (
            <>
                In 2024, we increased the intake for BA LL.B to
                120 seats and LL.B to 240 seats. We also established
                student-driven clubs, including the Academic Club,
                Literature & Media Club, Cultural Club and Sports Club.
                Additionally, classrooms were transformed into
                Digital Multimedia Interactive Classrooms to
                enhance the learning experience.
            </>
        ),
    },
];

export default function MilestonesPage() {
    return (
        <main className="milestones-page">

            {/* Hero Section */}
            <section className="milestone-hero">
                <div className="milestone-hero-overlay"></div>

                <div className="milestone-hero-content">
                    <span className="milestone-subtitle">
                        OUR JOURNEY OF EXCELLENCE
                    </span>

                    <h1>Our Milestones</h1>

                    <p>
                        Celebrating the journey, achievements and
                        defining moments that have shaped TEMPL
                        Group of Institutions.
                    </p>

                    <div className="milestone-breadcrumb">
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <span>Milestones</span>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="milestone-intro container">
                <span className="milestone-label">
                    OUR HISTORY
                </span>

                <h2>
                    Milestones of Progress: The Journey of{" "}
                    <span>TEMPL Group of Institutions</span>
                </h2>

                <p>
                    The evolution of TEMPL Group of Institutions is
                    a testament to our continuous pursuit of
                    excellence in education. From our humble
                    beginnings in 1998, we have steadily progressed
                    into a multidisciplinary educational institution
                    offering diverse academic programs. Every
                    milestone represents our commitment to quality
                    education, student development and a brighter
                    future.
                </p>
            </section>

            {/* Timeline Section */}
            <section className="milestone-timeline-section">
                <div className="container">

                    <div className="timeline-heading">
                        <span>1998 — PRESENT</span>

                        <h2>Our Journey Through the Years</h2>

                        <p>
                            Every year marks another step forward
                            in our journey of educational excellence.
                        </p>
                    </div>

                    <div className="milestone-timeline">

                        {milestones.map((item) => (
                            <div
                                className="timeline-item"
                                key={item.year}
                            >
                                <div className="timeline-dot">
                                    <span></span>
                                </div>

                                <div className="timeline-card">

                                    <div className="timeline-year">
                                        {item.year}
                                    </div>

                                    <h3>{item.title}</h3>

                                    <p>{item.description}</p>

                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* Future Section */}
            <section className="milestone-future container">

                <span className="milestone-label">
                    LOOKING AHEAD
                </span>

                <h2>
                    Building the Future Through{" "}
                    <span>Education & Innovation</span>
                </h2>

                <p>
                    As we continue to grow and evolve, TEMPL Group
                    of Institutions remains dedicated to shaping
                    the leaders of tomorrow. What began as a small
                    computer education venture in 1998 has grown
                    into a multidisciplinary educational institution
                    offering opportunities across multiple fields.
                    Each milestone reflects our commitment to
                    academic excellence, student empowerment
                    and meaningful progress.
                </p>

                <h3>
                    The future is bright, and we are excited to
                    continue this journey of growth, excellence
                    and empowerment!
                </h3>

                <Link href="/" className="milestone-button">
                    Explore TEMPL <span>→</span>
                </Link>

            </section>

        </main>
    );
}