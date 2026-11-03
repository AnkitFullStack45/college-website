import Link from "next/link";
import "./vice-chairperson-message.css";

export const metadata = {
  title: "Vice Chairperson's Message | TEMPL Group of Institutions",
  description:
    "Read the message from Dr. Priyanka Rohila, Secretary of TEMPL Group of Institutions, sharing her vision for academic excellence, holistic development and student success.",
};

export default function ViceChairpersonMessage() {
  return (
    <main className="vice-page">
      {/* HERO SECTION */}
      <section className="vice-hero">
        <div className="vice-hero-overlay"></div>

        <div className="vice-hero-content">
          <span className="vice-hero-label">Leadership & Guidance</span>

          <h1>
            Vice Chairperson&apos;s <span>Message</span>
          </h1>

          <p>
            Inspiring students to pursue excellence, embrace opportunities and
            build a brighter future.
          </p>

          <div className="vice-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/about-templ">About TEMPL</Link>
            <span>/</span>
            <span>Vice Chairperson&apos;s Message</span>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="vice-intro">
        <span className="vice-section-label">
          A MESSAGE FROM OUR VICE CHAIRPERSON
        </span>

        <h2>
          Nurturing Excellence, <span>Inspiring Success</span>
        </h2>

        <p>
          At TEMPL Group of Institutions, we believe that education is the
          foundation of personal growth, professional success and responsible
          citizenship. Every student deserves an environment where knowledge,
          values and opportunities come together.
        </p>
      </section>

      {/* MESSAGE SECTION */}
      <section className="vice-message-section">
        {/* PROFILE CARD */}
        <aside className="vice-profile">
          <div className="vice-profile-image">
            <img
              src="/images/priyanka.webp"
              alt="Dr. Priyanka Rohila - Secretary, TEMPL Group of Institutions"
            />
          </div>

          <span className="vice-profile-label">OUR LEADERSHIP</span>

          <h3>Dr. Priyanka Rohila</h3>

          <p>Secretary, TEMPL Group of Institutions</p>

          <div className="vice-profile-divider"></div>

          <div className="vice-profile-quote">
            <p>
              Strive for excellence, embrace opportunities and become
              responsible citizens who make a meaningful difference.
            </p>
          </div>
        </aside>

        {/* MESSAGE CONTENT */}
        <article className="vice-message-content">
          <span className="vice-section-label">
            VICE CHAIRPERSON&apos;S MESSAGE
          </span>

          <h2>Message from the Vice Chairperson</h2>

          <p>
            It is with great pleasure and enthusiasm that I welcome all new
            students to the TEMPL Group of Institutions, a dynamic and vibrant
            academic community. On behalf of the entire TEMPL educational
            family, I extend a warm and heartfelt greeting to each of you.
          </p>

          <p>
            As part of the IET (Institute for Education and Technical Sciences),
            we bring with us 14 years of rich educational experience, dedicated
            to delivering high-quality education in a nurturing and inspiring
            environment. Over the years, TEMPL Group has earned its reputation
            as one of the top-ranking educational institutions in Ghaziabad and
            Delhi NCR, a place where academic excellence meets holistic growth.
            Our relentless commitment to providing world-class education in an
            environment that fosters both tradition and innovation is the
            foundation of our success.
          </p>

          <p>
            At IET, the pursuit of academic excellence in an ever-evolving and
            competitive landscape has always been our benchmark. Our faculty and
            curriculum are designed to challenge and inspire, ensuring that our
            students not only excel in their respective fields but also become
            responsible, global citizens. I invite you to immerse yourself in
            the unique campus culture, where modern facilities seamlessly
            integrate with time-honored traditions, creating an environment
            conducive to learning, growth, and personal development.
          </p>

          {/* HIGHLIGHT QUOTE */}
          <div className="vice-highlight">
            <span className="vice-quote-mark">“</span>

            <p>
              Strive for excellence, both academically and personally, and aim
              to become world-class professionals who contribute meaningfully to
              society.
            </p>
          </div>

          <p>
            In just over a decade, IET has produced outstanding graduates who
            have made remarkable contributions in various sectors, both
            nationally and internationally. Our alumni network is strong, with
            many former students achieving great success in their careers and
            bringing honor to both themselves and our institution. We take
            immense pride in their accomplishments, which continue to inspire
            and guide the current generation of students.
          </p>

          <p>
            Beyond academics, we place a significant emphasis on co-curricular
            activities, including sports, adventure, cultural events, and social
            service initiatives, all of which form an integral part of the
            student experience at TEMPL. The state-of-the-art facilities on our
            campus are designed to nurture all-round development, ensuring that
            students grow not only in their intellectual pursuits but also in
            their personal, physical, and social well-being.
          </p>

          <p>
            As you embark on this exciting educational journey, I encourage you
            to make the most of the opportunities available to you. Strive for
            excellence, both academically and personally, and aim to become
            world-class professionals who will contribute meaningfully to
            society. I urge you to uphold the values of integrity,
            responsibility, and compassion as you navigate through your studies,
            preparing to become leaders in your chosen fields and proud citizens
            of India.
          </p>

          <p>
            I extend my best wishes for your time here at TEMPL Group of
            Institutions and look forward to seeing you evolve into well-rounded
            individuals, ready to make a lasting impact on the world.
          </p>

          {/* SIGNATURE */}
          <div className="vice-signature">
            <div className="vice-signature-line"></div>

            <span className="vice-signature-greeting">
              With my warm blessings and best wishes for your future success,
            </span>

            <h3>Dr. Priyanka Rohila</h3>

            <p>Secretary, TEMPL Group of Institutions</p>
          </div>
        </article>
      </section>

      {/* CLOSING SECTION */}
      <section className="vice-closing">
        <div className="vice-closing-content">
          <span>YOUR JOURNEY, OUR COMMITMENT</span>

          <h2>Learn. Grow. Lead. Make a Difference.</h2>

          <p>
            At TEMPL Group of Institutions, we encourage every student to
            discover their potential, develop their abilities and become a
            responsible leader of tomorrow.
          </p>

          <Link href="/about-templ" className="vice-button">
            Explore TEMPL
            <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
