"use client";

import { useState } from "react";
import "./free-courses.css";
const whyChooseUs = [
  "Industry-focused curriculum aligned with current market needs",
  "Hands-on training with practical learning experiences",
  "Experienced trainers and industry professionals",
  "Live projects and real-world exposure",
  "Certification upon successful completion",
  "Placement assistance and career guidance",
  "Communication and personality development support",
  "Affordable fee structure with quality education",
  "Modern learning environment with updated resources",
  "Skill-based training to enhance employability",
  "Internship opportunities and professional exposure",
  "Workshops, seminars, and guest lectures",
  "Career-focused mentoring and job preparation",
];

const programs = [
  {
    number: "01",
    title: "Sales & Marketing",
    description:
      "Learn marketing strategies, customer engagement, and real campaigns.",
    icon: "📈",
  },
  {
    number: "02",
    title: "Accounting & Finance",
    description:
      "Master financial concepts, accounting principles, and operations.",
    icon: "💰",
  },
  {
    number: "03",
    title: "Data Analytics",
    description:
      "Develop Excel analysis, data tools, and real-world data handling skills.",
    icon: "📊",
  },
  {
    number: "04",
    title: "Software Development",
    description:
      "Learn programming basics, development tools, and real-time project experience.",
    icon: "💻",
  },
  {
    number: "05",
    title: "Corporate Law & Taxation",
    description:
      "Understand corporate laws, taxation, and practical legal case studies.",
    icon: "⚖️",
  },
];

const overview = [
  {
    number: "15",
    title: "Expert Lectures",
    description: "Learn from experienced trainers and industry professionals.",
  },
  {
    number: "15 Days",
    title: "Indoor Training",
    description: "Optional classroom-based practical training.",
  },
  {
    number: "6 Months",
    title: "Field Training",
    description: "Gain practical exposure through real-world experience.",
  },
  {
    number: "100%",
    title: "Certification",
    description: "Receive certification after successful completion.",
  },
];

const courses = [
  {
    title: "BBA",
    subtitle: "Bachelor of Business Administration",
    icon: "📊",
  },
  {
    title: "BCA",
    subtitle: "Bachelor of Computer Applications",
    icon: "💻",
  },
  {
    title: "B.Com",
    subtitle: "Bachelor of Commerce",
    icon: "📚",
  },
  {
    title: "BA LL.B",
    subtitle: "Bachelor of Arts and Bachelor of Laws",
    icon: "⚖️",
  },
];

const faqs = [
  {
    question:
      "What are the Free Skill Development & Live Experience Certification Programs?",
    answer:
      "TEMPL Group of Institutions offers free skill development and live experience certification programs worth ₹35,000 for students enrolled in BBA, BCA, B.Com, and BA LL.B courses. These programs enhance practical skills, industry knowledge, and career readiness.",
  },
  {
    question: "Who can enroll in these free certification programs?",
    answer:
      "Students taking admission in undergraduate programs such as BBA, BCA, B.Com, and BA LL.B at TEMPL Group of Institutions are eligible to participate in these free certification and skill development programs.",
  },
  {
    question: "What skills will students learn through these programs?",
    answer:
      "Students will develop communication skills, leadership abilities, teamwork, problem-solving skills, digital literacy, professional etiquette, and industry-relevant knowledge through practical training and hands-on learning.",
  },
  {
    question: "Are live projects and practical training included?",
    answer:
      "Yes. The certification programs include live projects, real-world case studies, practical assignments, workshops, and industry-focused activities that help students gain valuable professional experience.",
  },
  {
    question: "Will students receive a certificate after completing the program?",
    answer:
      "Yes. Students who successfully complete the training program and meet the required criteria will receive a certification that can strengthen their resume and improve their career prospects.",
  },
  {
    question: "How do these programs help with placements and career growth?",
    answer:
      "These programs improve employability through job-ready skills, industry exposure, interview preparation, communication training, and career guidance. Students become better prepared for internships, placements, and future career opportunities.",
  },
];

export default function FreeCoursesPage() {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <main className="english-page">

      {/* HERO SECTION */}
      <section className="english-hero">
        <div className="hero-content">
          <span className="hero-badge">
            Skill Development & Live Experience Certification
          </span>

          <h1>
            Free Courses Worth{" "}
            <span className="highlight-text">₹35,000</span>
          </h1>

          <p>
            Learn industry-relevant skills, gain practical experience,
            and build a successful professional career with TEMPL
            Group of Institutions.
          </p>

          <div className="hero-buttons">
            <a
              href="https://www.templgroup.in/#dv_registration"
              className="primary-btn"
            >
              Apply Now →
            </a>

            <a href="#programs" className="secondary-btn">
              Explore Programs
            </a>
          </div>

          <div className="hero-note">
            🎓 Available for BBA, BCA, B.Com & BA LL.B Students
          </div>
        </div>
      </section>

      {/* ABOUT PROGRAM */}
      <section className="about-section section-padding">
        <div className="section-heading">
          <span className="section-label">ABOUT THE PROGRAM</span>
          <h2>
            Education Beyond <span>Classrooms</span>
          </h2>
          <p>
            Transform your academic journey with practical learning
            and industry-focused skill development.
          </p>
        </div>

        <div className="about-content">
          <div className="about-card">
            <h3>Build Skills. Gain Experience. Get Certified.</h3>

            <p>
              TEMPL Group of Institutions enhances student success by
              offering free skill development and live experience
              certification programs worth ₹35,000 to students enrolled
              in BBA, BCA, B.Com, and BA LL.B courses.
            </p>

            <p>
              These career-focused certifications provide practical
              training, industry exposure, digital skills, communication
              development, and hands-on project experience aligned with
              current market demands.
            </p>

            <p>
              By integrating academic learning with real-world applications,
              TEMPL equips students with job-ready skills, strengthens
              employability, and prepares them for successful careers.
            </p>
          </div>
        </div>
      </section>

      {/* PROGRAM OVERVIEW */}
      <section className="challenges-section section-padding">
        <div className="section-heading">
          <span className="section-label">PROGRAM OVERVIEW</span>
          <h2>
            Your Journey to <span>Professional Excellence</span>
          </h2>
          <p>
            A structured learning experience designed to connect
            education with real industry requirements.
          </p>
        </div>

        <div className="challenge-grid">
          {overview.map((item, index) => (
            <div className="challenge-card" key={index}>
              <span className="card-number">
                0{index + 1}
              </span>

              <h3>{item.number}</h3>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="section-heading overview-extra">
          <h3>Complete Training Structure</h3>
          <p>
            15 expert lectures + optional 15 days indoor training
            + 6 months field training + experience certificate.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="unique-section section-padding">
        <div className="section-heading">
          <span className="section-label">WHY CHOOSE US?</span>
          <h2>
            More Than Just <span>Education</span>
          </h2>
          <p>
            Get the right combination of knowledge, practical exposure,
            and professional development.
          </p>
        </div>

        <div className="unique-grid">
          {whyChooseUs.map((item, index) => (
            <div className="unique-card" key={index}>
              <div className="challenge-icon">✦</div>
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* SKILL DEVELOPMENT PROGRAMS */}
      <section
        className="curriculum-section section-padding"
        id="programs"
      >
        <div className="section-heading">
          <span className="section-label">SKILL DEVELOPMENT PROGRAMS</span>
          <h2>
            Learn Skills That <span>Build Your Future</span>
          </h2>
          <p>
            Explore career-oriented programs designed to develop
            practical and professional capabilities.
          </p>
        </div>

        <div className="module-list">
          {programs.map((program) => (
            <div className="module-card" key={program.number}>
              <div className="module-number">
                {program.number}
              </div>

              <div className="module-content">
                <div className="program-icon">
                  {program.icon}
                </div>

                <h3>{program.title}</h3>
                <p>{program.description}</p>
              </div>

              <span className="module-arrow">↗</span>
            </div>
          ))}
        </div>
      </section>

      {/* REAL EXPERIENCE */}
      <section className="special-section section-padding">
        <div className="special-content">
          <span className="section-label">
            REAL EXPERIENCE THAT MATTERS
          </span>

          <h2>
            Turn Your Knowledge Into <span>Real Experience</span>
          </h2>

          <p>
            Students gain valuable real-world exposure through a
            6-month field training program designed to bridge the
            gap between academic learning and industry requirements.
          </p>

          <p>
            This hands-on training enables students to work on
            practical assignments, understand professional workflows,
            and develop essential workplace skills.
          </p>

          <p>
            Through direct industry exposure, students strengthen
            their communication, teamwork, leadership, and
            problem-solving abilities while building confidence
            in real business environments.
          </p>

          <p>
            TEMPL Group of Institutions focuses on providing
            career-oriented education that combines academic
            excellence with practical experience.
          </p>

          <div className="special-points">
            <div>✓ Practical Assignments</div>
            <div>✓ Professional Workflows</div>
            <div>✓ Industry Exposure</div>
            <div>✓ Workplace Skills</div>
          </div>

          <div className="special-highlight">
            <div className="highlight-circle">6</div>
            <div>
              <h3>Months of Field Training</h3>
              <p>Experience beyond traditional classroom learning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COURSES OFFERED */}
      <section className="benefits-section section-padding">
        <div className="section-heading">
          <span className="section-label">COURSES OFFERED</span>
          <h2>
            Choose Your <span>Academic Path</span>
          </h2>
          <p>
            Students enrolled in the following undergraduate
            programs can participate.
          </p>
        </div>

        <div className="benefits-grid">
          {courses.map((course, index) => (
            <div className="benefit-card" key={index}>
              <div className="benefit-icon">
                {course.icon}
              </div>

              <h3>{course.title}</h3>
              <p>{course.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section section-padding">
        <div className="section-heading">
          <span className="section-label">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2>
            Got <span>Questions?</span>
          </h2>
          <p>
            Find answers to common questions about our
            free certification programs.
          </p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${
                activeFaq === index ? "active" : ""
              }`}
              key={index}
            >
              <button
                className="faq-question"
                onClick={() =>
                  setActiveFaq(activeFaq === index ? -1 : index)
                }
                aria-expanded={activeFaq === index}
              >
                <span>
                  {faq.question}
                </span>

                <span className="faq-icon">
                  {activeFaq === index ? "−" : "+"}
                </span>
              </button>

              {activeFaq === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="cta-content">
          <span className="section-label">
            YOUR FUTURE STARTS HERE
          </span>

          <h2>
            Build Your Future <span>with TEMPL</span>
          </h2>

          <p>
            Get free training, certification & real industry experience.
          </p>

          <a
            href="https://www.templgroup.in/#dv_registration"
            className="cta-button"
          >
            Apply Now →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="page-footer">
        <p>
          © 2026 TEMPL Group of Institutions | www.templgroup.in
        </p>
      </footer>

    </main>
  );
}