import Image from "next/image";
import "./deled.css";

export const metadata = {
  title: "D.El.Ed (BTC) in Ghaziabad | TEMPL Group of Institutions",
  description:
    "D.El.Ed (BTC) - 2-year Diploma in Elementary Education at Institute for Education and Technical Sciences, TEMPL Group, Ghaziabad.",
};

const features = [
  {
    icon: "👩‍🏫",
    title: "Experienced and Qualified Faculty",
    text: "Our faculty members are well-qualified, experienced, and dedicated to nurturing future educators, providing students with the right tools to succeed in their teaching careers.",
  },
  {
    icon: "📚",
    title: "Comprehensive Curriculum",
    text: "Covers teaching methodologies, child psychology, classroom management, educational technologies, and hands-on teaching practice.",
  },
  {
    icon: "🏫",
    title: "State-of-the-art Infrastructure",
    text: "Spacious classrooms, well-equipped teaching labs, interactive multimedia classrooms, and a library with abundant resources.",
  },
  {
    icon: "🌱",
    title: "Focus on Holistic Development",
    text: "Along with academics, students take part in extracurricular activities, personality development programs, and group discussions.",
  },
];

const admissionSteps = [
  {
    title: "Fill Out the Online Application",
    text: "Visit the official website www.templgroup.in and fill out the online admission form for the D.El.Ed or BTC program.",
  },
  {
    title: "Enrolment / Registration with DIET",
    text: "Students must register themselves on the DIET portal for counselling, wherever applicable.",
  },
  {
    title: "Final Admission",
    text: "After the prescribed selection process, successful candidates complete admission formalities and fee payment.",
  },
];

const careers = [
  {
    title: "Primary School Teacher",
    text: "Government schools, private schools, international schools, and non-formal education centers.",
  },
  {
    title: "Special Education Teacher",
    text: "Special education schools, government and private schools, NGOs, and hospitals.",
  },
  {
    title: "Pre-School Educator",
    text: "Pre-schools, day-care centers, and early childhood education centers.",
  },
  {
    title: "Education Counsellor",
    text: "Primary and secondary schools, private counseling centers, and educational NGOs.",
  },
  {
    title: "Education Administrator",
    text: "Schools, educational institutions, training centers, and consultancy firms.",
  },
  {
    title: "Curriculum Developer",
    text: "Educational publishing companies, curriculum agencies, and online platforms.",
  },
  {
    title: "Child Care Worker",
    text: "Day-care centers, after-school programs, and community centers.",
  },
  {
    title: "Education Researcher",
    text: "Research institutes, universities, and government departments of education.",
  },
  {
    title: "Entrepreneur in Education",
    text: "Self-employment and private educational enterprises.",
  },
  {
    title: "Government Education Jobs",
    text: "Government schools, public educational programs, and government educational agencies.",
  },
];

const placement = [
  {
    title: "Pre-placement Training",
    text: "Resume-building workshops, mock interviews, group discussions, and personality development sessions.",
  },
  {
    title: "Industrial Visits",
    text: "Educational exposure programs providing insights into the challenges and best practices of the education sector.",
  },
  {
    title: "Guest Lectures and Seminars",
    text: "Educators, academicians, and professionals share knowledge and current educational trends.",
  },
];

const whyChoose = [
  {
    title: "Top Ranking in Ghaziabad and Delhi NCR",
    text: "Quality education in education, law, and technical sciences.",
  },
  {
    title: "World-class Infrastructure",
    text: "Wi-Fi connectivity, spacious classrooms, well-equipped libraries, and modern teaching labs.",
  },
  {
    title: "Holistic Development",
    text: "Academic excellence, extracurricular activities, leadership skills, and community involvement.",
  },
  {
    title: "Proximity to Major Locations",
    text: "Located on NH-58, close to Modinagar, Muradnagar, and Ghaziabad.",
  },
];

export default function DElEdPage() {
  return (
    <main className="deled-page">

      {/* HERO IMAGE */}

      <section className="full-hero">

        <Image
          src="/images/deploma_in_elementry_education.webp"
          alt="D.El.Ed Department at TEMPL Group of Institutions"
          fill
          priority
          sizes="100vw"
          className="full-hero-img"
        />

      </section>


      <div className="deled-container">

        {/* INTRODUCTION */}

        <section id="details" className="glass intro-section">

          <span className="section-badge">
            WELCOME TO TEMPL GROUP
          </span>

          <h1 className="main-title">
            D.El.Ed (BTC) – Diploma in Elementary Education
          </h1>

          <p className="lead-text">
            The D.El.Ed (Diploma in Elementary Education), also known as
            BTC (Basic Teacher Training Course), is a professional
            training course for aspiring educators who wish to teach
            at the elementary level.
          </p>

          <p className="lead-text">
            Offered under the Institute for Education and Technical
            Sciences, a premier institution in Ghaziabad (Delhi NCR),
            the program provides essential pedagogical skills,
            knowledge, and practical experience to become an effective
            and responsible educator.
          </p>

          <div className="stats-grid">

            <div className="stat-card">
              <strong>2 Years</strong>
              <span>Course Duration</span>
            </div>

            <div className="stat-card">
              <strong>50</strong>
              <span>Seats per Batch</span>
            </div>

            <div className="stat-card">
              <strong>50%</strong>
              <span>Minimum Graduation Marks</span>
            </div>

          </div>

        </section>


        {/* ABOUT TEMPL */}

        <section className="glass content-section">

          <span className="section-badge">ABOUT OUR INSTITUTION</span>

          <h2 className="section-heading">
            Why Choose TEMPL Group of Institutions for D.El.Ed / BTC?
          </h2>

          <p className="section-text">
            TEMPL Group of Institutions is a leading name in education
            in Ghaziabad and Delhi NCR. Renowned for its academic
            environment, infrastructure, and educational programs,
            TEMPL provides students with opportunities to develop
            their professional teaching skills.
          </p>

        </section>


        {/* FEATURES */}

        <section className="content-section">

          <div className="section-header">
            <span>ACADEMIC EXCELLENCE</span>
            <h2>Key Features of D.El.Ed / BTC Program</h2>
          </div>

          <div className="grid-2">

            {features.map((feature) => (

              <article className="glass feature-card" key={feature.title}>

                <div className="feature-icon">
                  {feature.icon}
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.text}</p>

              </article>

            ))}

          </div>

        </section>


        {/* ELIGIBILITY AND SEATS */}

        <section className="grid-2 content-section">

          <div className="glass content-card">

            <span className="section-badge">ELIGIBILITY</span>

            <h2 className="section-heading">
              Eligibility for D.El.Ed / BTC
            </h2>

            <p className="section-text">
              To be eligible for the D.El.Ed or BTC program,
              candidates must fulfil the applicable admission criteria.
            </p>

            <ul className="custom-list">
              <li>
                <strong>Educational Qualification:</strong>
                Graduation from a recognized university with the
                prescribed minimum marks.
              </li>
            </ul>

          </div>


          <div className="glass content-card">

            <span className="section-badge">SEAT INTAKE</span>

            <h2 className="section-heading">
              Seat Intake and Reservation
            </h2>

            <p className="section-text">
              The seat intake for the D.El.Ed / BTC course is subject
              to the approved institutional intake and applicable
              admission regulations.
            </p>

            <div className="big-number">
              50 Seats
            </div>

          </div>

        </section>


        {/* ADMISSION PROCESS */}

        <section className="glass content-section">

          <span className="section-badge">JOIN OUR INSTITUTION</span>

          <h2 className="section-heading">
            Admission Process
          </h2>

          <p className="section-text">
            Follow these steps to complete the D.El.Ed / BTC admission
            process.
          </p>

          <div className="steps-list">

            {admissionSteps.map((step, index) => (

              <div className="step-item" key={step.title}>

                <div className="step-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>

              </div>

            ))}

          </div>

        </section>


        {/* CAREERS */}

        <section className="content-section">

          <div className="section-header">
            <span>FUTURE OPPORTUNITIES</span>
            <h2>Career Opportunities After D.El.Ed / BTC</h2>
          </div>

          <p className="center-text">
            The D.El.Ed program develops essential teaching skills,
            classroom management techniques, and practical knowledge
            required for elementary education.
          </p>

          <div className="grid-3">

            {careers.map((career) => (

              <article className="glass career-card" key={career.title}>

                <div className="card-check">✓</div>

                <h3>{career.title}</h3>

                <p>{career.text}</p>

              </article>

            ))}

          </div>

        </section>


        {/* PLACEMENT */}

        <section className="content-section">

          <div className="section-header">
            <span>CAREER DEVELOPMENT</span>
            <h2>Placement Assistance and Career Support</h2>
          </div>

          <p className="center-text">
            Our Placement Cell works to help students develop
            professional skills and explore opportunities in
            educational institutions.
          </p>

          <div className="grid-3">

            {placement.map((item) => (

              <article className="glass placement-card" key={item.title}>

                <div className="feature-icon">🎓</div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </article>

            ))}

          </div>

        </section>


        {/* WHY CHOOSE TEMPL */}

        <section className="glass content-section">

          <span className="section-badge">WHY TEMPL GROUP?</span>

          <h2 className="section-heading">
            Why Choose TEMPL Group of Institutions?
          </h2>

          <div className="grid-2">

            {whyChoose.map((item) => (

              <div className="why-card" key={item.title}>

                <div className="card-check">✓</div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>

              </div>

            ))}

          </div>

        </section>


        {/* FINAL CTA */}

        <footer className="glass footer-section">

          <span className="section-badge">
            START YOUR JOURNEY
          </span>

          <h2>
            Start Your Teaching Career Today
          </h2>

          <p>
            Admissions open for D.El.Ed / BTC at TEMPL Group,
            Ghaziabad. Take your first step toward becoming
            an inspiring educator.
          </p>

          <a
            href="https://www.templgroup.in"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button"
          >
            Visit Official Website →
          </a>

        </footer>

      </div>

    </main>
  );
}