import Link from "next/link";
import "./med.css";

/* =========================================================
   CONSTANTS
========================================================= */

const SITE_URL = "https://www.templgroup.in";
const PAGE_URL = `${SITE_URL}/Med`;
const BANNER_IMAGE = "/images/med.webp";

/* =========================================================
   SEO METADATA
========================================================= */

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: "Best M.Ed College in Ghaziabad, Delhi NCR | TEMPL Group",

  description:
    "NCTE-approved M.Ed at IET College, Ghaziabad. CCSU-affiliated & NAAC-accredited. Research-focused, expert faculty. Admission 2026 open.",

  alternates: {
    canonical: "/Med",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Best M.Ed College in Ghaziabad, Delhi NCR | TEMPL Group",
    description:
      "NCTE-approved M.Ed at IET College, Ghaziabad. CCSU-affiliated & NAAC-accredited. Research-focused, expert faculty. Admission 2026 open.",
    url: PAGE_URL,
    siteName: "TEMPL Group of Institutions",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: BANNER_IMAGE,
        alt: "M.Ed Master of Education at IET College TEMPL Group Ghaziabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Best M.Ed College in Ghaziabad | TEMPL Group",
    description:
      "NCTE-approved M.Ed at IET College, Ghaziabad. Admission 2026 open.",
    images: [BANNER_IMAGE],
  },
};

/* =========================================================
   PAGE DATA
========================================================= */

const reasons = [
  {
    title: "Top-Ranking Education Institution",
    description:
      "As one of the top-ranking colleges in Ghaziabad and Delhi NCR, TEMPL Group is committed to providing world-class education that prepares you for the challenges of the modern educational landscape.",
  },
  {
    title: "Comprehensive Curriculum",
    description:
      "The M.Ed program is designed to offer deep insights into advanced educational theory, research, and practice. Students will be equipped with a strong foundation in educational leadership, curriculum design, educational psychology, and teaching methodologies.",
  },
  {
    title: "World-Class Faculty",
    description:
      "Our highly qualified and experienced faculty members, many of whom are renowned in the field of education, provide personalized mentoring and guidance, ensuring students receive the best possible learning experience.",
  },
  {
    title: "State-of-the-Art Infrastructure",
    description:
      "Our campus boasts modern classrooms equipped with multimedia teaching aids, a well-stocked library, and fully equipped research labs, creating an ideal environment for academic growth.",
  },
];

const eligibility = [
  {
    title: "Educational Qualification",
    description:
      "The candidate must have completed a Bachelor of Education (B.Ed) or an equivalent degree from a recognized university with a minimum of 55% marks.",
  },
  {
    title: "Age Limit",
    description:
      "There is no specific age limit for M.Ed admissions. However, students should have completed their B.Ed before applying.",
  },
  {
    title: "Entrance Exam (if applicable)",
    description:
      "Admission may require a valid score in the Institute's entrance exam or any other recognized entrance exam depending on the university guidelines.",
  },
];

const admissionSteps = [
  {
    number: "01",
    title: "Application Form",
    description:
      "Candidates are required to fill out the application form available on the official website of TEMPL Group of Institutions.",
  },
  {
    number: "02",
    title: "Entrance Exam",
    description:
      "Students are required to appear for an entrance test organised by CCS University Meerut. It is mandatory for students to appear for the entrance exam to get admission in Master of Education.",
  },
  {
    number: "03",
    title: "Merit List",
    description:
      "Based on the results of the entrance exam/interview and academic qualifications, a merit list will be prepared.",
  },
  {
    number: "04",
    title: "Final Admission",
    description:
      "Selected candidates will be informed through call letters. Candidates must complete the admission formalities within the given time frame to secure their seat.",
  },
];

const advantages = [
  {
    title: "Top College in Ghaziabad",
    description:
      "As one of the top colleges in Ghaziabad (Delhi NCR), we offer a blend of academic excellence, modern infrastructure, and a holistic approach to education.",
  },
  {
    title: "Experienced Faculty",
    description:
      "Our faculty members have vast experience and are recognized experts in the field of education, guiding students to achieve their full potential.",
  },
  {
    title: "Modern Learning Environment",
    description:
      "Our state-of-the-art facilities such as smart classrooms, fully stocked libraries, and multimedia resources create the ideal environment for post-graduate education.",
  },
  {
    title: "Global Exposure",
    description:
      "With a curriculum that integrates global trends in education and collaboration with international institutions, students at TEMPL Group are exposed to international teaching practices.",
  },
  {
    title: "Outstanding Placement Assistance",
    description:
      "Our placement cell provides robust career guidance, internships, and placement opportunities, ensuring that you are well-prepared for your career in education after completing the M.Ed program.",
  },
  {
    title: "Co-curricular Activities",
    description:
      "We believe in the overall development of our students. Our campus offers a variety of co-curricular and extracurricular activities, including sports, yoga, debates, cultural programs, and more.",
  },
  {
    title: "Proximity to Delhi NCR",
    description:
      "Our campus, located in the heart of Ghaziabad, offers easy access to Delhi and nearby cities, making it ideal for students across the Delhi NCR region, including Modinagar, Muradnagar, and surrounding areas.",
  },
];

const careerResponsibilities = [
  "Conducting workshops and training sessions for prospective teachers.",
  "Developing and updating training modules and materials.",
  "Evaluating and providing feedback to trainee teachers.",
  "Mentoring teachers in their professional development.",
];

const faqs = [
  {
    question: "What is the duration of the M.Ed program?",
    answer:
      "The Master of Education (M.Ed) program is a 2-year postgraduate course designed for advanced study in education, teaching methodologies, and educational research.",
  },
  {
    question: "What is the eligibility for M.Ed admission?",
    answer:
      "Candidates must have completed B.Ed or an equivalent teacher education degree from a recognized university with a minimum of 55% marks, as per university guidelines.",
  },
  {
    question: "Is there any entrance exam for M.Ed admission?",
    answer:
      "Yes, admission to the M.Ed program is generally based on the entrance exam conducted by CCS University or as per the admission policy of the institution.",
  },
  {
    question: "What are the career opportunities after M.Ed?",
    answer:
      "M.Ed graduates can work as teacher educators, academic coordinators, school administrators, education consultants, curriculum developers, and researchers in the education sector.",
  },
  {
    question: "Is the M.Ed program at TEMPL Group NCTE recognized?",
    answer:
      "Yes, the M.Ed program offered by TEMPL Group of Institutions is NCTE-recognized and affiliated with CCS University, ensuring valid and quality higher education in the field of teacher training.",
  },
  {
    question: "What is the fee structure for M.Ed course?",
    answer:
      "The fee structure for the M.Ed program may vary each academic year. Students are advised to contact the admission office of TEMPL Group for the latest and updated fee details and scholarship options.",
  },
  {
    question: "Does TEMPL Group provide internship or practical training?",
    answer:
      "Yes, students enrolled in the M.Ed program receive practical training, teaching exposure, school internships, and research-based learning opportunities to enhance real-world teaching skills.",
  },
  {
    question: "What skills will I gain during the M.Ed program?",
    answer:
      "Students will gain advanced skills in teaching methodology, educational research, curriculum design, classroom management, leadership, and academic planning.",
  },
  {
    question: "Is M.Ed necessary to become a teacher educator?",
    answer:
      "Yes, M.Ed is a required qualification for becoming a teacher educator or joining teacher training institutes in India.",
  },
  {
    question: "Does TEMPL Group provide placement support after M.Ed?",
    answer:
      "Yes, the institution provides career guidance, placement assistance, and support for students seeking jobs in schools, colleges, and educational organizations.",
  },
  {
    question: "How can I apply for M.Ed admission 2026?",
    answer:
      "Students can apply online through the official website of TEMPL Group of Institutions or visit the campus admission office for direct admission assistance.",
  },
];

/* =========================================================
   STRUCTURED DATA (JSON-LD)
========================================================= */

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Master of Education (M.Ed)",
  description:
    "2-year postgraduate M.Ed programme at IET College, TEMPL Group, Ghaziabad. CCSU-affiliated, NCTE-recognised, NAAC-accredited. Advanced teacher training, education research and leadership.",
  provider: {
    "@type": "EducationalOrganization",
    name: "IET College — TEMPL Group of Institutions",
    url: SITE_URL,
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "onsite",
    duration: "P2Y",
  },
  educationalLevel: "Postgraduate",
  url: PAGE_URL,
};

// Built from the same `faqs` array that is shown on the page,
// so the schema always matches the visible content.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${SITE_URL}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "M.Ed — Master of Education",
      item: PAGE_URL,
    },
  ],
};

const structuredData = [courseSchema, faqSchema, breadcrumbSchema];

/* =========================================================
   PAGE
========================================================= */

export default function MedPage() {
  return (
    <main className="med-page">
      {/* Structured data */}
      {structuredData.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      ))}

      {/* Full-width banner image */}
      <section className="med-banner">
        <img
          src={BANNER_IMAGE}
          alt="M.Ed Master of Education at IET College TEMPL Group Ghaziabad"
          className="med-banner-image"
        />
      </section>

      <div className="med-container">
        {/* Page heading */}
        <header className="med-heading">
          <span className="med-eyebrow">
            IET College | TEMPL Group of Institutions
          </span>

          <h1>
            M.Ed — Master of Education in Ghaziabad
            <span className="med-heading-highlight">
              NCTE-recognised, IET College TEMPL Group
            </span>
          </h1>

          <div className="med-heading-line"></div>
        </header>

        {/* Introduction */}
        <section className="med-section med-intro">
          <h2>
            Master of Education (M.Ed) Program at TEMPL Group of Institutions
          </h2>

          <p>
            Welcome to the Institute for Education and Technical Sciences (IET)
            under the prestigious TEMPL Group of Institutions, where we offer
            the highly regarded Master of Education (M.Ed) program. This 2-year
            Post Graduate course is designed for students who are passionate
            about advancing their career in education and aspire to become
            leaders, researchers, and educators at higher levels. Our M.Ed
            program is crafted to meet the highest academic standards and is
            structured to provide comprehensive knowledge in the field of
            education.
          </p>
        </section>

        {/* Why choose TEMPL */}
        <section className="med-section">
          <div className="med-section-heading">
            <span>WHY CHOOSE US</span>
            <h2>Why Choose TEMPL Group of Institutions for M.Ed?</h2>
          </div>

          <div className="med-highlight-box">
            <p>
              <Link href="/" className="med-inline-link">
                TEMPL Group of Institutions
              </Link>{" "}
              is widely recognized as one of the best colleges in Delhi NCR and
              the top colleges in Ghaziabad, including the areas of Modinagar
              and Muradnagar. With a track record of academic excellence and
              state-of-the-art facilities, TEMPL Group offers the perfect
              environment for pursuing an M.Ed course. Here&apos;s why our M.Ed
              program stands out:
            </p>
          </div>

          <div className="med-card-grid med-grid-two">
            {reasons.map((item, index) => (
              <article className="med-glass-card" key={item.title}>
                <div className="med-card-number">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Eligibility */}
        <section className="med-section med-soft-section">
          <div className="med-section-heading">
            <span>ADMISSION REQUIREMENTS</span>
            <h2>Eligibility Criteria for M.Ed Admission</h2>
          </div>

          <div className="med-card-grid med-grid-three">
            {eligibility.map((item, index) => (
              <article
                className="med-glass-card med-eligibility-card"
                key={item.title}
              >
                <div className="med-card-number">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Admission process */}
        <section className="med-section">
          <div className="med-section-heading">
            <span>YOUR JOURNEY STARTS HERE</span>
            <h2>Admission Process for M.Ed Course</h2>
          </div>

          <p className="med-section-description">
            At TEMPL Group of Institutions, we follow a streamlined and
            transparent admission process that ensures a smooth journey for
            prospective students:
          </p>

          <div className="med-process-grid">
            {admissionSteps.map((step) => (
              <article className="med-process-card" key={step.number}>
                <span className="med-process-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Seat intake */}
        <section className="med-section">
          <div className="med-seat-box">
            <div>
              <span className="med-seat-label">M.Ed PROGRAM</span>
              <h2>Seat Intake for M.Ed Course</h2>
              <p>
                The M.Ed course offered by TEMPL Group of Institutions has a
                limited intake of seats to ensure quality education and
                personalized attention for each student.
              </p>
              <p>
                We recommend prospective students to apply early, as the seats
                tend to fill up quickly due to the popularity of the program
                and our reputation as one of the best colleges in Ghaziabad and
                Delhi NCR.
              </p>
            </div>

            <div className="med-seat-count">
              <strong>50</strong>
              <span>Total Seats</span>
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="med-section med-soft-section">
          <div className="med-section-heading">
            <span>THE TEMPL ADVANTAGE</span>
            <h2>
              Why M.Ed at TEMPL Group of Institutions is the Best Choice for
              You?
            </h2>
          </div>

          <div className="med-card-grid med-grid-two">
            {advantages.map((item, index) => (
              <article
                className="med-glass-card med-advantage-card"
                key={item.title}
              >
                <div className="med-card-number">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Career prospects */}
        <section className="med-section">
          <div className="med-section-heading">
            <span>BUILD YOUR FUTURE</span>
            <h2>
              Career Prospects After Completing a Master of Education (M.Ed)
              Degree
            </h2>
          </div>

          <p>
            The Master of Education (M.Ed) program at{" "}
            <Link href="/" className="med-inline-link">
              TEMPL Group of Institutions
            </Link>{" "}
            is designed to equip students with advanced knowledge, research
            skills, and practical expertise in the field of education.
            Graduates of this 2-year course have a wide range of career
            opportunities across various educational sectors. Whether you
            aspire to become a leader in educational management, a teacher
            educator, a researcher, or a policymaker, the M.Ed program opens
            numerous avenues for professional growth.
          </p>

          <div className="med-career-card">
            <div className="med-career-header">
              <span className="med-career-icon">01</span>
              <div>
                <h3>Teacher Educator / Trainer</h3>
                <span className="med-career-subtitle">
                  Career opportunity after M.Ed
                </span>
              </div>
            </div>

            <h4>Overview</h4>
            <p>
              As an education trainer or teacher educator, you will play a
              crucial role in training and mentoring future teachers. Teacher
              educators are employed in teacher training institutes, colleges
              of education, or private training centers. They help aspiring
              teachers hone their teaching skills and pedagogical strategies.
            </p>

            <h4>Key Responsibilities</h4>
            <ul className="med-check-list">
              {careerResponsibilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h4>Workplaces</h4>
            <p>
              Government and private teacher training institutes, national and
              state education bodies such as NCERT and SCERT, and online
              education platforms offering teacher certification programs.
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="med-section med-soft-section">
          <div className="med-section-heading">
            <span>HAVE QUESTIONS?</span>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="med-faq-list">
            {faqs.map((faq, index) => (
              <details className="med-faq-item" key={faq.question}>
                <summary>
                  <span className="med-faq-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="med-faq-question">{faq.question}</span>
                  <span className="med-faq-toggle">+</span>
                </summary>

                <div className="med-faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Admission CTA */}
        <section className="med-admission-cta">
          <span className="med-cta-eyebrow">TAKE THE NEXT STEP</span>
          <h2>Take Admission in M.Ed Program</h2>

          <p>
            Admissions are open for the M.Ed program at TEMPL Group of
            Institutions. Eligible candidates can apply online and begin their
            journey toward a successful career in education and academic
            leadership.
          </p>

          <Link href="/register" className="med-cta-button">
            Apply for Admission <span>→</span>
          </Link>
        </section>
      </div>
    </main>
  );
}