import Link from "next/link";
import "./about.css";

export const metadata = {
  title: "About TEMPL Group of Institutions | Ghaziabad",
  description:
    "Discover TEMPL Group of Institutions, established in 1998, comprising IET College and LSR Law Academy. Explore our academic journey, courses, scholarships and campus life.",
  alternates: {
    canonical: "https://www.templgroup.in/about-templ",
  },
  openGraph: {
    title: "About TEMPL Group of Institutions",
    description:
      "Discover our educational journey, academic excellence and commitment to student development.",
    url: "https://www.templgroup.in/about-templ",
    type: "website",
  },
};

const ietCourses = [
  {
    year: "2003",
    title: "Bachelor of Education",
    short: "B.Ed",
    description:
      "Preparing future educators with the knowledge and skills to shape young minds.",
  },
  {
    year: "2011",
    title: "Management & Commerce",
    short: "BBA & B.Com",
    description:
      "Developing business, management, financial and professional skills.",
  },
  {
    year: "2016",
    title: "Bachelor of Computer Applications",
    short: "BCA",
    description:
      "Building a foundation in computer science, programming and technology.",
  },
  {
    year: "2019",
    title: "Master of Education",
    short: "M.Ed",
    description:
      "Advancing knowledge and professional expertise in teacher education.",
  },
];

const highlights = [
  {
    icon: "fa-chalkboard-user",
    title: "Experienced Faculty",
    description:
      "Dedicated faculty members combine academic knowledge and professional experience to support student learning.",
  },
  {
    icon: "fa-building",
    title: "Modern Infrastructure",
    description:
      "Modern classrooms, computer laboratories and multimedia learning facilities create an engaging academic environment.",
  },
  {
    icon: "fa-book-open",
    title: "Industry-Relevant Programs",
    description:
      "Academic programs focus on developing knowledge, practical skills and professional readiness.",
  },
  {
    icon: "fa-handshake",
    title: "Career Development",
    description:
      "Students receive opportunities for internships, industry visits and career guidance.",
  },
];

const clubs = [
  "Academic Club",
  "Cultural Club",
  "Literature & Media Club",
  "Sports Club",
];

export default function AboutTempl() {
  return (
    <main className="about-page">
      {/* HERO SECTION */}
<section className="about-hero">

    <div className="templ-image">
        <img
            src="/images/templ_campus.webp"
            alt="TEMPL Group of Institutions campus"
        />
    </div>

    <div className="about-hero-overlay"></div>

    <div className="about-container about-hero-content">
        <span className="about-eyebrow">OUR INSTITUTION</span>

        <h1>
            About TEMPL Group <span>of Institutions</span>
        </h1>

        <p>
            Building knowledge, nurturing talent and empowering future
            generations through quality education since 1998.
        </p>

        <div className="about-breadcrumb">
            <a href="/">Home</a>
            <span><i className="fa-solid fa-chevron-left"></i></span>
            <span>About TEMPL</span>
        </div>
    </div>

</section>

      {/* INTRODUCTION */}
      <section className="about-intro about-section">
        <div className="about-container about-intro-grid">
          <div className="about-intro-content">
            <span className="about-label">WHO WE ARE</span>

            <h2>
              Pioneering Excellence
              <span> in Education</span>
            </h2>

            <p>
              Welcome to TEMPL Group of Institutions, where education meets
              innovation, excellence and empowerment. Established in 1998, we
              have evolved from a computer education venture into a group of
              educational institutions committed to academic growth, leadership
              and professional development.
            </p>

            <p>
              With a legacy of over two decades, TEMPL Group encompasses two
              premier institutions: Institute for Education & Technical Sciences
              (IET COLLEGE) and LSR Law Academy.
            </p>

            <p>
              We offer undergraduate and postgraduate programs in Education,
              Management, Commerce, Computer Science and Law. Through academic
              learning, experienced faculty and modern infrastructure, we aim to
              help students achieve their academic and professional goals.
            </p>

            <Link
              href="/about-templ/vision-mission"
              className="about-primary-btn"
            >
              Explore Our Vision
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>

          <div className="about-intro-visual">
            <div className="about-year-card">
              <span>ESTABLISHED</span>
              <strong>1998</strong>
              <p>A Journey of Learning & Growth</p>
            </div>

            <div className="about-visual-caption">
              <i className="fa-solid fa-graduation-cap"></i>
              <div>
                <strong>Education with Purpose</strong>
                <span>Knowledge • Skills • Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSTITUTIONS */}
      <section className="about-institutions about-section">
        <div className="about-container">
          <div className="about-section-heading">
            <span className="about-label">OUR INSTITUTIONS</span>

            <h2>
              Two Institutions.
              <span> One Vision.</span>
            </h2>

            <p>
              Explore the institutions that form the foundation of TEMPL Group
              of Institutions.
            </p>
          </div>

          <div className="about-institution-grid">
            {/* IET COLLEGE */}
            <article className="about-institution-card">
              <div className="institution-icon">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>

              <span className="institution-tag">
                ESTABLISHED ACADEMIC LEGACY
              </span>

              <h3>Institute for Education & Technical Sciences</h3>

              <h4>IET COLLEGE</h4>

              <p>
                IET College has been providing education in Education,
                Management, Commerce and Computer Science. Its academic programs
                are designed to develop subject knowledge, professional skills
                and practical understanding.
              </p>

              <ul>
                <li>Bachelor of Education (B.Ed)</li>
                <li>Bachelor of Business Administration (BBA)</li>
                <li>Bachelor of Commerce (B.Com)</li>
                <li>Bachelor of Computer Applications (BCA)</li>
                <li>Master of Education (M.Ed)</li>
                <li>Diploma in Elementary Education (D.El.Ed)</li>
              </ul>

              <p className="institution-affiliation">
                Affiliated with CCS University, Meerut, with relevant regulatory
                approvals including NCTE and SCERT.
              </p>

              <Link href="/colleges/iet-college" className="about-text-link">
                Explore IET College
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </article>

            {/* LSR LAW ACADEMY */}
            <article className="about-institution-card lsr-card">
              <div className="institution-icon">
                <i className="fa-solid fa-scale-balanced"></i>
              </div>

              <span className="institution-tag">LEGAL EDUCATION</span>

              <h3>LSR Law Academy</h3>

              <h4>Redefining Legal Education</h4>

              <p>
                Established in 2018, LSR Law Academy provides academically
                rigorous and professionally focused legal education. Its
                programs aim to develop ethical, knowledgeable and skilled legal
                professionals.
              </p>

              <ul>
                <li>Bachelor of Law (LL.B) – 3 Years</li>
                <li>Bachelor of Arts & Bachelor of Law (BA LL.B) – 5 Years</li>
              </ul>

              <p className="institution-affiliation">
                Approved by the Bar Council of India and affiliated with CCS
                University, Meerut.
              </p>

              <Link
                href="/colleges/lsr-law-academy"
                className="about-text-link"
              >
                Explore LSR Law Academy
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* ACADEMIC JOURNEY */}
      <section className="about-journey about-section">
        <div className="about-container">
          <div className="about-section-heading">
            <span className="about-label">OUR ACADEMIC JOURNEY</span>

            <h2>
              Growing Through
              <span> Education</span>
            </h2>

            <p>
              Our academic journey reflects our commitment to expanding
              educational opportunities.
            </p>
          </div>

          <div className="about-timeline">
            {ietCourses.map((course, index) => (
              <div className="timeline-item" key={course.year}>
                <div className="timeline-number">{course.year}</div>

                <div className="timeline-content">
                  <span>{course.short}</span>
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                </div>
              </div>
            ))}

            <div className="timeline-item">
              <div className="timeline-number">2018</div>

              <div className="timeline-content">
                <span>LSR LAW ACADEMY</span>
                <h3>Introduction of Legal Education</h3>
                <p>
                  LSR Law Academy was established to provide professional legal
                  education.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-number">2022</div>

              <div className="timeline-content">
                <span>BA LL.B</span>
                <h3>Five-Year Integrated Law Program</h3>
                <p>
                  Introduction of an integrated program combining legal studies
                  with a Bachelor of Arts degree.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE TEMPL */}
      <section className="about-why about-section">
        <div className="about-container">
          <div className="about-section-heading">
            <span className="about-label">THE TEMPL ADVANTAGE</span>

            <h2>
              Why Choose
              <span> TEMPL?</span>
            </h2>

            <p>
              An educational environment focused on academic learning, practical
              exposure and personal growth.
            </p>
          </div>

          <div className="about-highlights-grid">
            {highlights.map((item) => (
              <article className="about-highlight-card" key={item.title}>
                <div className="highlight-icon">
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <div className="about-infrastructure-link">
            <div>
              <h3>Explore Our Campus Infrastructure</h3>
              <p>Discover the facilities and learning environment at TEMPL.</p>
            </div>

            <Link href="/Edge#infrastructure">
              Explore Infrastructure
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* SCHOLARSHIPS */}
      <section className="about-scholarship about-section">
        <div className="about-container about-scholarship-grid">
          <div>
            <span className="about-label">STUDENT EMPOWERMENT</span>

            <h2>
              Recognising Talent.
              <span> Supporting Dreams.</span>
            </h2>

            <p>
              At TEMPL Group, we believe that talent and dedication deserve
              recognition. Our scholarship opportunities support deserving
              students across academics, sports and cultural activities.
            </p>

            <p>
              We aim to encourage students to pursue their educational goals and
              participate in activities that support their overall development.
            </p>

            <Link href="/scholarship" className="about-primary-btn">
              Know More About Scholarships
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>

          <div className="scholarship-visual">
            <i className="fa-solid fa-award"></i>
            <h3>Every Talent Deserves an Opportunity</h3>
            <p>
              Encouraging academic achievement, sports and cultural excellence.
            </p>
          </div>
        </div>
      </section>

      {/* CAMPUS LIFE */}
      <section className="about-campus about-section">
        <div className="about-container">
          <div className="about-section-heading">
            <span className="about-label">BEYOND CLASSROOMS</span>

            <h2>
              Experience a Vibrant
              <span> Campus Life</span>
            </h2>

            <p>
              Learning extends beyond textbooks. We encourage students to
              explore their interests, build friendships and develop confidence.
            </p>
          </div>

          <div className="about-campus-grid">
            <article className="campus-card">
              <div className="campus-card-icon">
                <i className="fa-solid fa-users"></i>
              </div>

              <h3>Student Clubs</h3>

              <p>
                Our student clubs provide opportunities to participate,
                collaborate and develop leadership skills.
              </p>

              <ul>
                {clubs.map((club) => (
                  <li key={club}>
                    <i className="fa-solid fa-check"></i>
                    {club}
                  </li>
                ))}
              </ul>
            </article>

            <article className="campus-card cafe-card">
              <div className="campus-card-icon">
                <i className="fa-solid fa-mug-hot"></i>
              </div>

              <h3>KI Bites Cafe</h3>

              <p>
                KI Bites Cafe offers students a welcoming space to relax,
                connect and enjoy a variety of food options on campus.
              </p>
            </article>

            <article className="campus-card">
              <div className="campus-card-icon">
                <i className="fa-solid fa-trophy"></i>
              </div>

              <h3>Sports & Cultural Events</h3>

              <p>
                Sports competitions and cultural events encourage participation,
                teamwork and a balanced student experience.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* FUTURE VISION */}
      <section className="about-future about-section">
        <div className="about-container about-future-content">
          <span className="about-label">LOOKING AHEAD</span>

          <h2>
            Shaping the Future of
            <span> Higher Education</span>
          </h2>

          <p>
            As we look ahead, TEMPL Group of Institutions remains committed to
            innovation, academic excellence and global outreach. Our focus
            includes further expansion, digital transformation and the
            introduction of programs that respond to evolving educational and
            professional needs.
          </p>

          <p>
            Join a learning community that encourages ambition, knowledge and
            personal growth. At TEMPL, we aim to prepare students not just for
            careers, but for meaningful and fulfilling futures.
          </p>

          <Link href="/courses" className="about-light-btn">
            Explore Our Courses
            <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </section>

      {/* FINAL TAGLINE */}
      <section className="about-tagline">
        <div className="about-container">
          <i className="fa-solid fa-graduation-cap"></i>

          <h2>TEMPL Group of Institutions</h2>

          <p>Where Ambition Meets Opportunity.</p>
        </div>
      </section>
    </main>
  );
}
