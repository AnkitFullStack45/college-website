import Link from "next/link";
import "./head-administration-finance-message.css";

export const metadata = {
    title: "Head of Administration & Finance Message | TEMPL Group",
    description:
        "Read the message from Ms. Manju Bisht, Head of Administration & Finance at TEMPL Group of Institutions, about holistic education, personal growth and student development.",
};

export default function HeadAdministrationFinanceMessage() {
    return (
        <main className="haf-page">

            {/* HERO SECTION */}
            <section className="haf-hero">
                <div className="haf-hero-content">
                    <span className="haf-hero-label">
                        OUR LEADERSHIP
                    </span>

                    <h1>
                        Head of Administration <br />
                        <span>& Finance Message</span>
                    </h1>

                    <p>
                        A message of guidance, holistic development and
                        commitment to student success.
                    </p>

                    <div className="haf-breadcrumb">
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <Link href="/about">About TEMPL</Link>
                        <span>/</span>
                        <span>Head of Administration & Finance</span>
                    </div>
                </div>
            </section>


            {/* MESSAGE SECTION */}
            <section className="haf-message-section">
                <div className="haf-message-container">

                    {/* PROFILE CARD */}
                    <aside className="haf-profile">

                        <div className="haf-profile-image">
                            <img
                                src="/images/Manju Bisht.webp"
                                alt="Ms. Manju Bisht, Head of Administration and Finance, TEMPL Group of Institutions"
                            />
                        </div>

                        <span className="haf-profile-label">
                            OUR LEADERSHIP
                        </span>

                        <h2>Ms. Manju Bisht</h2>

                        <p className="haf-designation">
                            Head of Administration & Finance
                        </p>

                        <div className="haf-profile-divider"></div>

                        <div className="haf-profile-quote">
                            <span>“</span>
                            <p>
                                Education is not just about building a career;
                                it is about building character and becoming a
                                better human being.
                            </p>
                        </div>

                        <div className="haf-profile-footer">
                            TEMPL Group of Institutions
                        </div>

                    </aside>


                    {/* MESSAGE CONTENT */}
                    <article className="haf-message-content">

                        <div className="haf-message-heading">
                            <span className="haf-section-label">
                                A WORD OF WELCOME
                            </span>

                            <h2>
                                Message from Head of Administration
                                <span> & Finance</span>
                            </h2>

                            <div className="haf-heading-line"></div>
                        </div>


                        <div className="haf-message-text">

                            <p className="haf-greeting">
                                Dear Students,
                            </p>

                            <p>
                                It gives me immense pleasure to welcome you
                                to TEMPL Group of Institutions, where we
                                nurture not just academic excellence but
                                also holistic growth for each of you. As the
                                Head of Administration and Finance, I
                                believe that our responsibility goes beyond
                                providing top-tier education – it’s about
                                shaping your future in every sense, both
                                professionally and personally.
                            </p>

                            <p>
                                At TEMPL, we firmly believe that true
                                success isn’t defined only by academic
                                achievements or career milestones, but by
                                how well you grow as an individual. Our
                                commitment is to guide and mentor you,
                                helping you excel in your chosen field while
                                ensuring that you also evolve as
                                compassionate, responsible, and spiritually
                                enlightened individuals. In today’s
                                fast-paced world, balancing professional
                                success with spiritual well-being is
                                crucial, and it is this unique approach
                                that sets TEMPL Group apart.
                            </p>

                            <p>
                                Our efforts to provide you with the best
                                education are complemented by programs and
                                initiatives aimed at your spiritual
                                development. Through yoga, meditation,
                                heartfulness, and other mindful practices,
                                we help foster inner peace, self-discipline,
                                and emotional intelligence. These aspects
                                are integral to building a well-rounded
                                personality capable of handling the
                                complexities of life with grace and
                                integrity.
                            </p>

                            <p>
                                We are not just preparing you for your
                                career – we are preparing you for life. We
                                envision you not only as professionals
                                excelling in your respective fields but as
                                individuals who lead with ethics,
                                compassion, and a deep sense of
                                responsibility.
                            </p>

                            <p>
                                I assure you that at TEMPL, you are in safe
                                hands. We have designed a nurturing
                                environment where you will find the perfect
                                balance of academic rigor, career readiness,
                                and personal growth. Our dedicated faculty,
                                administrative team, and support staff are
                                always here to guide you every step of the
                                way. Together, we will make sure you realize
                                your full potential.
                            </p>

                            <p>
                                Your journey here will be a transformative
                                experience, one that shapes you into not
                                only a successful professional but also a
                                better human being. I wish you all the very
                                best as you embark on this remarkable
                                journey of learning, growth, and success.
                            </p>

                        </div>


                        {/* CLOSING QUOTE */}
                        <div className="haf-highlight">
                            <span className="haf-highlight-icon">“</span>

                            <p>
                                At TEMPL, we are preparing you not just
                                for a successful career, but for a
                                meaningful and fulfilling life.
                            </p>
                        </div>


                        {/* SIGNATURE */}
                        <div className="haf-signature">
                            <span className="haf-warm-regards">
                                Warm regards,
                            </span>

                            <h3>Ms. Manju Bisht</h3>

                            <p>Head of Administration & Finance</p>

                            <span className="haf-institution-name">
                                TEMPL Group of Institutions
                            </span>
                        </div>

                    </article>

                </div>
            </section>


            {/* CLOSING SECTION */}
            <section className="haf-closing">
                <div className="haf-closing-content">
                    <span>YOUR FUTURE, OUR COMMITMENT</span>

                    <h2>
                        Learn, Grow & Make a Difference
                    </h2>

                    <p>
                        Begin your journey with TEMPL Group of Institutions
                        and take a step towards academic excellence,
                        professional success and personal growth.
                    </p>

                    <Link href="/contact" className="haf-contact-btn">
                        Connect With Us
                        <span> → </span>
                    </Link>
                </div>
            </section>

        </main>
    );
}