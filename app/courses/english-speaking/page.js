"use client";

import { useState } from "react";
import "./english-speaking.css";

const challenges = [
  {
    icon: "💬",
    title: "Overcoming Hesitation",
    description:
      "Active speaking drills designed to build speech fluency and eliminate unnecessary pauses.",
  },
  {
    icon: "🤝",
    title: "Fear of Making Mistakes",
    description:
      "A friendly and supportive environment where students can practice English without hesitation.",
  },
  {
    icon: "🚀",
    title: "Lack of Confidence",
    description:
      "Confidence-building workshops, daily presentations and interactive debates.",
  },
  {
    icon: "📖",
    title: "Limited Vocabulary",
    description:
      "Focused training on vocabulary development, correct pronunciation and word usage.",
  },
  {
    icon: "✍️",
    title: "Weak Grammar Foundation",
    description:
      "Structured grammar lessons to improve sentence formation and everyday communication.",
  },
  {
    icon: "🎧",
    title: "Poor Listening Skills",
    description:
      "Audio exercises and real-life conversations to improve listening comprehension.",
  },
  {
    icon: "🎤",
    title: "Difficulty in Public Speaking",
    description:
      "Stage activities, group discussions and presentations to improve public speaking.",
  },
  {
    icon: "💼",
    title: "Interview Anxiety",
    description:
      "Mock interviews and professional communication training for placements.",
  },
  {
    icon: "🌍",
    title: "Limited Real-Life Practice",
    description:
      "Interactive role-plays and workplace simulations to improve practical communication.",
  },
  {
    icon: "🧠",
    title: "Thinking in Native Language",
    description:
      "Activities that encourage students to think and express themselves directly in English.",
  },
];

const modules = [
  {
    number: "01",
    title: "Foundations of English Grammar & Vocabulary",
    description:
      "Build a strong foundation through parts of speech, verb tenses, sentence construction, daily vocabulary and common grammatical errors.",
    topics: [
      "Parts of Speech",
      "Verb Tenses",
      "Sentence Formation",
      "Daily Vocabulary",
      "Grammar Fundamentals",
    ],
  },
  {
    number: "02",
    title: "Pronunciation & Spoken Fluency Drills",
    description:
      "Develop clear pronunciation, speaking confidence and natural fluency through daily speaking and listening exercises.",
    topics: [
      "Phonetics",
      "Syllable Stress",
      "Voice Modulation",
      "Reading Exercises",
      "Listening Comprehension",
    ],
  },
  {
    number: "03",
    title: "Situational Conversations & Role-Playing",
    description:
      "Learn to communicate confidently in everyday situations through practical conversations and role-playing activities.",
    topics: [
      "Self Introduction",
      "Customer Handling",
      "Restaurant Conversations",
      "Communicating with Professors",
      "Real-Life Conversations",
    ],
  },
  {
    number: "04",
    title: "Public Speaking & Debates",
    description:
      "Improve public speaking abilities, body language, eye contact and the ability to express opinions logically.",
    topics: [
      "Public Speaking",
      "Group Discussions",
      "Debate Sessions",
      "Body Language",
      "Analytical Thinking",
    ],
  },
  {
    number: "05",
    title: "Corporate Communication & Placement Prep",
    description:
      "Prepare for professional environments through corporate communication, resume writing and mock interviews.",
    topics: [
      "Professional Emails",
      "Resume Writing",
      "Telephone Etiquette",
      "Business Presentations",
      "Mock Interviews",
    ],
  },
];

const benefits = [
  {
    icon: "🗣️",
    title: "Improved Fluency & Coherence",
    description:
      "Speak English naturally and confidently without unnecessary pauses.",
  },
  {
    icon: "🎯",
    title: "Confidence in Campus Placements",
    description:
      "Perform better in interviews and present your projects professionally.",
  },
  {
    icon: "👥",
    title: "Better Group Discussions",
    description:
      "Express your ideas logically and confidently during group discussions.",
  },
  {
    icon: "🌟",
    title: "Enhanced Professional Personality",
    description:
      "Develop professional body language, communication etiquette and confidence.",
  },
];

const faqs = [
  {
    question: "Who is eligible to join the Free English Speaking Classes?",
    answer:
      "All eligible students currently enrolled in undergraduate and postgraduate courses at TEMPL Group of Institutions, including BCA, BBA, B.Com, B.Ed, M.Ed, LL.B and BA LL.B, can participate. The classes are completely free.",
  },
  {
    question: "What is the duration of the communication program?",
    answer:
      "The program is integrated into regular academic semesters. Typically, the foundation module spans 3 to 6 months, while advanced corporate communication training can continue until graduation.",
  },
  {
    question: "I studied in a Hindi-medium school. Will I be able to follow the classes?",
    answer:
      "Absolutely! The program is specially designed for Hindi-medium and rural-background students. Training starts with basic grammar and vocabulary using a supportive bilingual teaching approach.",
  },
  {
    question: "Are certificates provided upon completion?",
    answer:
      "Yes. Students who regularly attend sessions and successfully complete the final oral assessment receive a Professional Communication & English Speaking Certificate from TEMPL Group of Institutions.",
  },
  {
    question: "What practical activities are included?",
    answer:
      "Activities include situational role-plays, impromptu speaking, group discussions, vocabulary quizzes, listening exercises and mock job interviews.",
  },
  {
    question: "How do these classes help in placement interviews?",
    answer:
      "The advanced modules prepare students for self-introductions, HR interviews, behavioral questions, technical project presentations and professional email writing.",
  },
];

export default function EnglishSpeakingPage() {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <main className="english-page">

      {/* HERO SECTION */}

      <section className="english-hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <span className="hero-badge">
            ✨ Free Value-Added Program
          </span>

          <h1>
            Speak English.
            <br />
            <span>Build Confidence.</span>
            <br />
            Shape Your Future.
          </h1>

          <p>
            Transform your communication skills with professional
            English speaking classes at TEMPL Group of Institutions.
          </p>

          <div className="hero-buttons">
            <a
              href="https://www.templgroup.in/#dv_registration"
              className="primary-btn"
            >
              Apply Now →
            </a>

            <a href="#curriculum" className="secondary-btn">
              Explore Curriculum
            </a>
          </div>

          <div className="hero-note">
            ✓ Completely Free &nbsp; ✓ Beginner Friendly
            &nbsp; ✓ Placement Focused
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}

      <section className="about-section section-padding">
        <div className="section-heading">
          <span className="section-label">ABOUT THE PROGRAM</span>

          <h2>
            Communication Skills Are the
            <span> Foundation of Success</span>
          </h2>

          <p>
            Professional competency alone is not enough in today's
            competitive world. Your ability to communicate ideas,
            express thoughts and interact confidently makes a
            significant difference in your career.
          </p>
        </div>

        <div className="about-content">
          <div className="about-card">
            <span>🎓</span>
            <h3>Academic Excellence</h3>
            <p>
              Integrated communication training alongside regular
              academic education.
            </p>
          </div>

          <div className="about-card">
            <span>💬</span>
            <h3>Communication Skills</h3>
            <p>
              Practical English speaking exercises to develop
              fluency and confidence.
            </p>
          </div>

          <div className="about-card">
            <span>💼</span>
            <h3>Career Readiness</h3>
            <p>
              Professional communication training for interviews
              and corporate opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* WHY COMMUNICATION MATTERS */}

      <section className="challenges-section section-padding">
        <div className="section-heading">
          <span className="section-label">WHY IT MATTERS</span>

          <h2>
            Break Your Communication
            <span> Barriers</span>
          </h2>

          <p>
            Our training systematically addresses the challenges
            commonly faced by college students.
          </p>
        </div>

        <div className="challenge-grid">
          {challenges.map((item, index) => (
            <div className="challenge-card" key={index}>
              <div className="challenge-icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <span className="card-number">
                {(index + 1).toString().padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CURRICULUM SECTION */}

      <section
        className="curriculum-section section-padding"
        id="curriculum"
      >
        <div className="section-heading">
          <span className="section-label">OUR LEARNING JOURNEY</span>

          <h2>
            Five Modules.
            <span> One Confident You.</span>
          </h2>

          <p>
            A structured learning journey from basic English
            communication to advanced corporate standards.
          </p>
        </div>

        <div className="module-list">
          {modules.map((module) => (
            <article className="module-card" key={module.number}>
              <div className="module-number">
                {module.number}
              </div>

              <div className="module-content">
                <h3>{module.title}</h3>

                <p>{module.description}</p>

                <div className="module-topics">
                  {module.topics.map((topic, index) => (
                    <span key={index}>{topic}</span>
                  ))}
                </div>
              </div>

              <div className="module-arrow">→</div>
            </article>
          ))}
        </div>
      </section>

      {/* SPECIAL FOCUS */}

      <section className="special-section section-padding">
        <div className="special-content">
          <span className="section-label">
            EVERY STUDENT DESERVES AN OPPORTUNITY
          </span>

          <h2>
            Your Background Doesn't
            <span> Define Your Future.</span>
          </h2>

          <p>
            At TEMPL Group, we understand that many students from
            Hindi-medium schools and rural backgrounds have strong
            academic and technical capabilities but limited exposure
            to spoken English.
          </p>

          <p>
            Our specially designed program starts from absolute
            basics and uses a bilingual approach during initial
            sessions. Experienced trainers provide individual
            guidance in a friendly and supportive environment.
          </p>

          <div className="special-points">
            <div>✓ Basic-to-Advanced Learning</div>
            <div>✓ Bilingual Teaching Approach</div>
            <div>✓ Individual Mentorship</div>
            <div>✓ Supportive Learning Environment</div>
          </div>
        </div>

        <div className="special-highlight">
          <div className="highlight-circle">100%</div>
          <h3>Beginner Friendly</h3>
          <p>
            Start speaking English confidently, regardless of
            your previous schooling background.
          </p>
        </div>
      </section>

      {/* UNIQUE FEATURES */}

      <section className="unique-section section-padding">
        <div className="section-heading">
          <span className="section-label">THE TEMPL ADVANTAGE</span>

          <h2>
            What Makes Our Program
            <span> Unique?</span>
          </h2>
        </div>

        <div className="unique-grid">
          <div className="unique-card">
            <span>📚</span>
            <h3>Beginner Friendly</h3>
            <p>
              Start from basic grammar, verbs and sentence
              structures with step-by-step guidance.
            </p>
          </div>

          <div className="unique-card">
            <span>🔥</span>
            <h3>Confidence Building</h3>
            <p>
              Daily speaking activities, stage practice and
              interactive games to reduce hesitation.
            </p>
          </div>

          <div className="unique-card">
            <span>🎯</span>
            <h3>Practical Skills</h3>
            <p>
              Experience real-life group discussions, debates,
              presentations and placement interviews.
            </p>
          </div>

          <div className="unique-card">
            <span>🌟</span>
            <h3>Personality Development</h3>
            <p>
              Learn professional body language, dressing etiquette,
              greetings and active listening.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}

      <section className="benefits-section section-padding">
        <div className="section-heading">
          <span className="section-label">YOUR FUTURE ADVANTAGE</span>

          <h2>
            Benefits That Go
            <span> Beyond English</span>
          </h2>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div className="benefit-card" key={index}>
              <div className="benefit-icon">{benefit.icon}</div>

              <h3>{benefit.title}</h3>

              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}

      <section className="faq-section section-padding">
        <div className="section-heading">
          <span className="section-label">GOT QUESTIONS?</span>

          <h2>
            Frequently Asked
            <span> Questions</span>
          </h2>

          <p>
            Everything you need to know about our English
            Speaking and Communication Skills Program.
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
                <span>{faq.question}</span>

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
          <span>YOUR JOURNEY STARTS HERE</span>

          <h2>
            Your Voice Can Change
            <br />
            Your Future.
          </h2>

          <p>
            Take the first step towards confident communication
            and professional success.
          </p>

          <a
            href="https://www.templgroup.in/#dv_registration"
            className="cta-button"
          >
            Join TEMPL Group Today →
          </a>
        </div>
      </section>

    </main>
  );
}