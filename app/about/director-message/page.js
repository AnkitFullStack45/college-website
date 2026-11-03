import Image from "next/image";
import Link from "next/link";
import "./director-message.css";

export const metadata = {
    title: "Director's Message | TEMPL Group of Institutions",
    description:
        "Read the Director's Message from Dr. Amit Singh Rohila, Director of TEMPL Group of Institutions, sharing his vision for academic excellence and holistic development."
};

export default function DirectorMessage() {
    return (
        <main className="director-page">

            {/* HERO SECTION */}
            <section className="director-hero">
                <div className="director-hero-overlay"></div>

                <div className="director-hero-content">
                    <span className="director-hero-label">
                        OUR LEADERSHIP
                    </span>

                    <h1>Director’s Message</h1>

                    <div className="director-hero-divider"></div>

                    <p>
                        A Vision for Excellence, Leadership and Holistic Growth
                    </p>

                    <div className="director-breadcrumb">
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <Link href="/about-templ">About TEMPL</Link>
                        <span>/</span>
                        <span>Director’s Message</span>
                    </div>
                </div>
            </section>


            {/* INTRODUCTION */}
            <section className="director-intro">
                <div className="director-container">
                    <span className="director-section-label">
                        A MESSAGE FROM OUR DIRECTOR
                    </span>

                    <h2>
                        Guiding Students Towards a
                        <span> Brighter Future</span>
                    </h2>

                    <p>
                        Leadership in education is about inspiring minds,
                        nurturing potential and preparing students to make
                        meaningful contributions to society.
                    </p>
                </div>
            </section>


            {/* DIRECTOR MESSAGE SECTION */}
            <section className="director-message-section">
                <div className="director-container">
                    <div className="director-message-grid">

                        {/* DIRECTOR PROFILE CARD */}
                        <aside className="director-profile">

                            <div className="director-profile-image">
                                <Image
                                    src="/images/amitsir.webp"
                                    alt="Dr. Amit Singh Rohila - Director, TEMPL Group of Institutions"
                                    width={400}
                                    height={480}
                                    priority
                                />
                            </div>

                            <span className="director-profile-label">
                                OUR LEADERSHIP
                            </span>

                            <h3>Dr. Amit Singh Rohila</h3>

                            <p className="director-designation">
                                Director, TEMPL Group of Institutions
                            </p>

                            <div className="director-profile-divider"></div>

                            <div className="director-qualifications">
                                <span>ACADEMIC QUALIFICATIONS</span>

                                <p>
                                    B.Pharm, M.Tech, MBA, LLB, PhD
                                </p>
                            </div>

                            <div className="director-profile-quote">
                                <p>
                                    Empowering students with knowledge,
                                    skills and values to create a
                                    successful and meaningful future.
                                </p>
                            </div>

                        </aside>


                        {/* MESSAGE CONTENT */}
                        <div className="director-message-content">

                            <div className="director-message-heading">
                                <span>LEADERSHIP & VISION</span>
                                <h2>Director’s Message</h2>
                            </div>

                            <div className="director-message-text">

                                <p>
                                    <strong>
                                        Welcome to the TEMPL Group of Institutions,
                                    </strong>
                                    one of the best educational institutions
                                    in Ghaziabad and the Delhi NCR region.
                                    It gives me immense pleasure to extend
                                    my best wishes to all aspiring students
                                    embarking on this journey of academic
                                    excellence and personal growth. Over
                                    the years, TEMPL has earned a reputation
                                    for excellence by attracting the best
                                    and brightest students across a wide
                                    range of disciplines. Our constant
                                    commitment to quality education and
                                    holistic development has positioned
                                    us as a leading name among top
                                    educational institutes in Ghaziabad
                                    and Delhi NCR.
                                </p>

                                <p>
                                    At TEMPL Group of Institutions, our
                                    vision is clear: we strive to nurture
                                    future leaders equipped with both
                                    professional expertise and personal
                                    wisdom. Education is not just about
                                    bookish knowledge; it is about
                                    empowering students to face the
                                    real-world challenges with confidence
                                    and competence. Our meticulously
                                    designed academic programs focus on
                                    developing not only intellectual
                                    abilities but also fostering life
                                    skills, leadership qualities, and
                                    spiritual growth.
                                </p>

                                <p>
                                    Our diverse range of courses, including
                                    BBA, BCA, B.Com, B.Ed, M.Ed, D.El.Ed,
                                    LLB, and BALLB, are tailored to provide
                                    national and international exposure,
                                    ensuring that our students are
                                    well-prepared for the dynamic global
                                    landscape. The programs combine
                                    theoretical learning with practical
                                    application, offering a rich mix of
                                    academic sophistication and real-world
                                    expertise. We believe that this balance
                                    is crucial for producing professionals
                                    who will not only excel in their chosen
                                    fields but will also contribute
                                    meaningfully to the advancement of society.
                                </p>

                                <p>
                                    The faculty at TEMPL are trendsetters
                                    in education, providing students with
                                    a unique opportunity to engage with
                                    cutting-edge concepts in business
                                    practice, social sciences, and law.
                                    Their commitment to student success
                                    and innovative teaching methods
                                    ensures that students receive the
                                    best education in a supportive,
                                    student-centered environment. Along
                                    with this, our non-teaching staff
                                    plays an equally important role by
                                    providing guidance and support in
                                    every aspect of student life,
                                    ensuring that every student achieves
                                    their highest potential.
                                </p>

                                <p>
                                    We take great pride in offering an
                                    environment where spiritual development
                                    is integrated with academic learning.
                                    At TEMPL, we recognize that holistic
                                    growth involves not just intellectual
                                    development but also the nurturing
                                    of one's spiritual and emotional
                                    well-being. Through various spiritual
                                    elevation programs, we ensure that
                                    our students graduate as well-rounded
                                    individuals prepared to succeed in
                                    both their careers and personal lives.
                                </p>

                                <p>
                                    As we continue to grow, we are committed
                                    to making TEMPL Group of Institutions
                                    the top-ranked college in Ghaziabad
                                    and Delhi NCR, known for producing
                                    exceptional graduates who lead in
                                    their fields. Whether you're pursuing
                                    a career in business, education, law,
                                    or any other field, TEMPL provides
                                    the right platform for you to excel.
                                </p>

                                <p>
                                    I sincerely wish all of you the best
                                    in your educational journey and career
                                    ahead. May you scale new heights,
                                    armed with the knowledge, skills,
                                    and values imparted at TEMPL Group
                                    of Institutions. Together, let's
                                    create a future that is both
                                    successful and meaningful.
                                </p>

                            </div>


                            {/* HIGHLIGHTED QUOTE */}
                            <div className="director-highlight">
                                <span className="director-quote-mark">
                                    “
                                </span>

                                <p>
                                    Education is not just about bookish
                                    knowledge; it is about empowering
                                    students to face real-world challenges
                                    with confidence and competence.
                                </p>
                            </div>


                            {/* SIGNATURE */}
                            <div className="director-signature">
                                <p>With warm regards and blessings,</p>

                                <h3>Dr. Amit Singh Rohila</h3>

                                <span>
                                    B.Pharm, M.Tech, MBA, LLB, PhD
                                </span>

                                <strong>
                                    Director, TEMPL Group of Institutions
                                </strong>
                            </div>

                        </div>

                    </div>
                </div>
            </section>


            {/* CLOSING SECTION */}
            <section className="director-closing">
                <div className="director-container">
                    <span>YOUR FUTURE STARTS HERE</span>

                    <h2>
                        Learn Today. Lead Tomorrow.
                    </h2>

                    <p>
                        Discover opportunities to learn, grow and build
                        a meaningful future with TEMPL Group of Institutions.
                    </p>

                    <Link
                        href="/contact"
                        className="director-button"
                    >
                        Connect With Us
                        <span> →</span>
                    </Link>
                </div>
            </section>

        </main>
    );
}