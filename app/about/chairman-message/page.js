import Link from "next/link";
import Image from "next/image";
import "./chairman-message.css";

export const metadata = {
    title: "Chairman's Message | TEMPL Group of Institutions",
    description:
        "Read the message from Dr. Mahavir Singh, Chairman of TEMPL Group of Institutions, on academic excellence, personal growth, leadership and the future of education."
};

export default function ChairmanMessage() {
    return (
        <main className="chairman-page">

            {/* HERO SECTION */}
            <section className="chairman-hero">
                <div className="chairman-hero-overlay"></div>

                <div className="chairman-hero-content">
                    <span className="chairman-hero-label">
                        Leadership & Vision
                    </span>

                    <h1>
                        Chairman&apos;s <span>Message</span>
                    </h1>

                    <p>
                        A message of vision, values and commitment
                        towards shaping tomorrow&apos;s leaders.
                    </p>

                    <div className="chairman-breadcrumb">
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <Link href="/about-templ">About TEMPL</Link>
                        <span>/</span>
                        <span>Chairman&apos;s Message</span>
                    </div>
                </div>
            </section>


            {/* INTRODUCTION */}
            <section className="chairman-intro">
                <span className="chairman-section-label">
                    A MESSAGE FROM OUR CHAIRMAN
                </span>

                <h2>
                    A Vision That Continues to{" "}
                    <span>Inspire Generations</span>
                </h2>

                <p>
                    Welcome to TEMPL Group of Institutions, where
                    education is not just about acquiring knowledge
                    but about building character, developing skills
                    and preparing individuals for a meaningful future.
                </p>
            </section>


            {/* CHAIRMAN MESSAGE */}
            <section className="chairman-message-section">

                <div className="chairman-message-image">
                    <div className="chairman-image-frame">
                        <Image
                            src="/images/drsir.webp"
                            alt="Chairman's Message - TEMPL Group of Institutions"
                            width={650}
                            height={750}
                            priority
                        />
                    </div>

                    <div className="chairman-image-caption">
                        <span>Dr. Mahavir Singh</span>
                        <p>Chairman, TEMPL Group of Institutions</p>
                    </div>
                </div>


                <div className="chairman-message-content">

                    <span className="chairman-section-label">
                        CHAIRMAN&apos;S MESSAGE
                    </span>

                    <h2>
                        Welcome to TEMPL Group of Institutions
                    </h2>

                    <p>
                        At TEMPL Group of Institutions, we believe that
                        academic excellence goes far beyond mastering
                        theoretical knowledge—it is the preparation for
                        life itself. True education encompasses not only
                        academic proficiency but also the development
                        of critical problem-solving skills, effective
                        communication, and social and emotional
                        intelligence. We strive to shape well-rounded
                        leaders who are equipped with both intellectual
                        and inner excellence.
                    </p>

                    <p>
                        At TEMPL, we see education as a balanced blend
                        of two vital components—academic brilliance and
                        personal growth. Just as a bird requires both
                        wings to soar, a successful life demands that
                        we nurture both academic and inner strength.
                        Our goal is to guide students on this path of
                        balance, fostering an environment where they
                        can flourish in every aspect of life, preparing
                        them to become the leaders of tomorrow.
                    </p>

                    <div className="chairman-highlight">
                        <span className="chairman-quote-mark">“</span>

                        <p>
                            A successful life demands a balance of
                            academic brilliance and personal growth.
                        </p>
                    </div>

                    <p>
                        Our dedicated faculty members continue to set
                        the standard for excellence, blending
                        innovative teaching methods with research-driven
                        insights. With their commitment to student-centered
                        learning, TEMPL Group offers an educational
                        experience where personal attention, active
                        engagement, and practical knowledge come together
                        in a way that empowers students to succeed.
                    </p>

                    <p>
                        I am confident that you will soon realize that
                        TEMPL Group of Institutions is the right choice
                        for your higher education journey. Here, you
                        will be part of a supportive and nurturing
                        community of faculty, staff, and management,
                        all committed to your success. Our teaching
                        methods are tailored to equip you with the
                        latest techniques, ensuring effective
                        communication, critical thinking, and the
                        ability to lead with confidence. Voice
                        modulation, ideal body language, and empathy
                        are just a few of the tools we use to make
                        your learning experience truly exceptional.
                    </p>

                    <p>
                        As you embark on this transformative journey,
                        we are determined to ensure that every student
                        who walks through our doors emerges as a highly
                        skilled professional ready to take on the world.
                        I look forward to celebrating your success at
                        the graduation ceremony as you complete your
                        program at the Institute for Education &amp;
                        Technical Sciences or LSR Law Academy and take
                        the next step in your bright future.
                    </p>

                    <p>
                        Together, we aim to establish TEMPL Group of
                        Institutions as a top-ranking educational hub
                        in Delhi NCR, Ghaziabad, and eventually across
                        India. Join us, and let&apos;s create a future
                        that shines bright with academic achievement,
                        personal growth, and global leadership.
                    </p>

                    {/* SIGNATURE */}
                    <div className="chairman-signature">
                        <div className="chairman-signature-line"></div>

                        <h3>Dr. Mahavir Singh</h3>

                        <span>
                            Chairman, TEMPL Group of Institutions
                        </span>
                    </div>

                </div>

            </section>


            {/* CLOSING SECTION */}
            <section className="chairman-closing">

                <div className="chairman-closing-content">
                    <span>OUR COMMITMENT</span>

                    <h2>
                        Building Leaders. Inspiring Excellence.
                        Transforming Futures.
                    </h2>

                    <p>
                        At TEMPL, we believe every student has the
                        potential to achieve greatness. Our commitment
                        is to provide the knowledge, guidance and
                        opportunities that help turn that potential
                        into success.
                    </p>

                    <Link href="/about-templ" className="chairman-button">
                        Explore TEMPL
                        <span>→</span>
                    </Link>
                </div>

            </section>

        </main>
    );
}