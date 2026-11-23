import Link from "next/link";
import Image from "next/image";
import "./dep-management.css";

export const metadata = {
  title:
    "Best BBA College in Ghaziabad, Delhi-NCR | Department of Management at TEMPL Group of Institutions",
};

const delay = (i, step = 90) => ({
  "--delay": `${i * step}ms`,
});

const whyChooseUs = [
  {
    icon: "📊",
    title: "Industry-Driven Curriculum",
    description:
      "Combines theoretical knowledge with practical applications in management, marketing, and entrepreneurship.",
  },
  {
    icon: "🎓",
    title: "University Affiliation",
    description:
      "Affiliated with CCS University, Meerut, with AICTE approval as stated in the program information.",
  },
  {
    icon: "👨‍🏫",
    title: "Experienced Faculty",
    description:
      "Learn through experienced faculty, innovative teaching methods, and personalized mentoring.",
  },
  {
    icon: "🏢",
    title: "Strategic NCR Location",
    description:
      "Benefit from proximity to business hubs and opportunities for internships and industry exposure.",
  },
  {
    icon: "🏫",
    title: "Modern Infrastructure",
    description:
      "Experience modern classrooms, business labs, and Wi-Fi-enabled learning facilities.",
  },
  {
    icon: "🤝",
    title: "Placement Support",
    description:
      "Access industry connections, internships, live projects, and career development assistance.",
  },
  {
    icon: "🚀",
    title: "Holistic Development",
    description:
      "Develop teamwork, leadership, communication, and problem-solving abilities.",
  },
  {
    icon: "🌱",
    title: "Sustainable Business",
    description:
      "Understand corporate social responsibility and environmentally responsible business practices.",
  },
];

const keyFeatures = [
  "Comprehensive curriculum covering management, marketing, and finance.",
  "Industry exposure through internships and live projects.",
  "Interactive learning with smart classrooms and business simulations.",
  "Career-ready graduates with placement support and leadership skills.",
  "Global business perspective with a focus on sustainability.",
];

const infrastructure = [
  {
    icon: "🏢",
    title: "Modern Business Labs",
    description:
      "Advanced facilities supporting practical business learning and professional skill development.",
  },
  {
    icon: "🖥️",
    title: "Interactive Classrooms",
    description:
      "Technology-enabled classrooms promoting engagement, collaboration, and effective learning.",
  },
  {
    icon: "📚",
    title: "Comprehensive E-Library",
    description:
      "Access digital books, journals, research materials, and academic resources.",
  },
  {
    icon: "📈",
    title: "Industry-Relevant Tools",
    description:
      "Exposure to professional applications used in modern business environments.",
  },
  {
    icon: "💹",
    title: "Financial Modeling",
    description:
      "Develop financial analysis and decision-making skills through specialized software.",
  },
  {
    icon: "📊",
    title: "Market Analysis Platforms",
    description:
      "Understand market trends, consumer behavior, and business opportunities.",
  },
  {
    icon: "🌐",
    title: "Digital Learning Resources",
    description:
      "Access online learning materials that support continuous academic development.",
  },
  {
    icon: "🎥",
    title: "Multimedia Learning",
    description:
      "Use audio-visual learning facilities to understand management concepts.",
  },
  {
    icon: "🧠",
    title: "Case Study Discussions",
    description:
      "Analyze real-world business challenges and develop problem-solving abilities.",
  },
  {
    icon: "🎯",
    title: "Business Simulations",
    description:
      "Gain practical experience through business decision-making simulations.",
  },
  {
    icon: "🔬",
    title: "Research Support",
    description:
      "Explore academic research, innovation, and analytical thinking.",
  },
  {
    icon: "👥",
    title: "Collaborative Learning",
    description:
      "Develop teamwork and knowledge-sharing abilities through group activities.",
  },
  {
    icon: "🎤",
    title: "Professional Skill Development",
    description:
      "Improve communication, leadership, and managerial capabilities.",
  },
  {
    icon: "📖",
    title: "Specialized Management Learning",
    description:
      "Build a foundation in finance, marketing, HR, entrepreneurship, and business strategy.",
  },
  {
    icon: "💼",
    title: "Corporate Readiness",
    description:
      "Prepare for evolving business challenges and competitive corporate careers.",
  },
];

const placementFeatures = [
  "Career guidance and counseling",
  "Training and Placement Cell support",
  "Communication and leadership training",
  "Aptitude and soft skills development",
  "Resume building and interview preparation",
  "Internship opportunities",
  "Industry exposure and corporate interaction",
  "Live projects and case studies",
  "Entrepreneurship development support",
  "Higher education and MBA guidance",
  "Professional certification opportunities",
  "Corporate readiness development",
];

const careerOptions = [
  {
    icon: "💰",
    title: "Finance",
    roles:
      "Financial Analyst, Investment Advisor, Banking Executive, Accounts Manager",
  },
  {
    icon: "📢",
    title: "Marketing",
    roles: "Digital Marketer, Sales Manager, Brand Manager, Market Researcher",
  },
  {
    icon: "👥",
    title: "Human Resources",
    roles: "HR Executive, Talent Acquisition Specialist, Training Coordinator",
  },
  {
    icon: "🏢",
    title: "Business Administration",
    roles:
      "Operations Manager, Business Development Executive, Corporate Strategist",
  },
];

const admissionSteps = [
  {
    title: "Online Application",
    description:
      "Complete the online application form and submit the required documents.",
  },
  {
    title: "Merit-Based Selection",
    description: "Selection is based on 12th standard marks.",
  },
  {
    title: "Counseling & Verification",
    description:
      "Shortlisted candidates participate in counseling and document verification.",
  },
  {
    title: "Fee Payment",
    description: "Complete the required fee payment to secure admission.",
  },
];

const faqs = [
  {
    question: "Why should I choose the BBA program at IET College, Ghaziabad?",
    answer:
      "The BBA program combines academic learning, industry-oriented education, experienced faculty, practical exposure, and placement support to help students build successful careers in business and management.",
  },
  {
    question: "What is the duration of the BBA course?",
    answer:
      "The Bachelor of Business Administration (BBA) is a three-year undergraduate degree course divided into six semesters.",
  },
  {
    question: "What is the eligibility criteria for BBA admission?",
    answer:
      "Candidates must have completed 10+2 or an equivalent examination from a recognized board. The stated eligibility is 45% for General/OBC and 40% for SC/ST students. Admission remains subject to applicable university and institutional guidelines.",
  },
  {
    question: "What subjects are covered in the BBA curriculum?",
    answer:
      "The curriculum includes management principles, marketing, finance, human resource management, business communication, entrepreneurship, organizational behavior, and business strategy.",
  },
  {
    question: "Does the BBA program provide industry exposure?",
    answer:
      "Yes. Students benefit from internships, live projects, case studies, workshops, guest lectures, and industry interaction programs.",
  },
  {
    question: "What career opportunities are available after BBA?",
    answer:
      "Graduates can explore opportunities in marketing, finance, human resources, operations, business development, sales management, entrepreneurship, and corporate administration.",
  },
  {
    question: "Does IET College provide placement assistance?",
    answer:
      "Yes. The Training and Placement Cell provides career counseling, aptitude training, interview preparation, resume-building support, and placement assistance.",
  },
  {
    question: "Can BBA students pursue higher education?",
    answer:
      "Yes. Students can pursue MBA programs, postgraduate diplomas, professional certifications, and other higher education opportunities.",
  },
  {
    question: "What skills can students develop through BBA?",
    answer:
      "Students develop leadership, communication, analytical thinking, decision-making, teamwork, problem-solving, and managerial skills.",
  },
  {
    question: "How can I apply for BBA admission?",
    answer:
      "Students can apply through the official admission process by completing the application form, submitting the required documents, and participating in counseling and document verification.",
  },
];

export default function ManagementPage() {
  return (
    <main className="management-page">
      {/* FULL-SCREEN HERO */}
      <section className="management-hero">
        <Image
          className="management-hero-image"
          src="https://www.templgroup.in/contentImg/bachelor_of_bussiness_admistration1.webp"
          alt="Department of Management at IET College, Ghaziabad"
          fill
          priority
          unoptimized
          sizes="100vw"
        />
      </section>

      {/* ABOUT DEPARTMENT */}
      <section className="management-section" id="about-bba">
        <div className="management-container">
          <div className="management-section-heading mg-reveal">
            <span className="management-label">ABOUT THE DEPARTMENT</span>

            <h2>
              Department of <span>Management</span>
            </h2>

            <p>
              Shaping the next generation of business professionals through
              academic excellence and practical learning.
            </p>
          </div>

          <div className="management-about-grid">
            <div className="management-about-image mg-reveal">
              <Image
                src="/images/management.webp"
                alt="Department of Management at IET College"
                width={600}
                height={1000}
                unoptimized
                sizes="(max-width: 992px) 100vw, 50vw"
              />
            </div>

            <div
              className="management-about-content mg-reveal"
              style={delay(1, 150)}
            >
              <span className="management-label">SHAPING FUTURE LEADERS</span>

              <h3>Learn Business. Develop Leadership. Build Your Future.</h3>

              <p>
                Welcome to the Department of Management at IET College, where
                our BBA program equips students with strong business,
                management, leadership, and entrepreneurial skills for
                successful careers in the corporate world.
              </p>

              <p>
                Affiliated with CCS University, Meerut, the BBA program provides
                students with a strong foundation in business management,
                marketing, finance, human resource management, and
                entrepreneurship.
              </p>

              <div className="management-about-points">
                <span>✓ Business Management</span>
                <span>✓ Marketing & Finance</span>
                <span>✓ Leadership Development</span>
                <span>✓ Entrepreneurship</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="management-section management-dark-section">
        <div className="management-container">
          <div className="management-section-heading mg-reveal">
            <span className="management-label">WHY CHOOSE US</span>

            <h2>
              Why Choose Our <span>BBA Program?</span>
            </h2>

            <p>
              An education experience designed to prepare you for modern
              business challenges.
            </p>
          </div>

          <div className="management-why-grid">
            {whyChooseUs.map((item, index) => (
              <article
                className="management-glass-card mg-reveal"
                style={delay(index % 4)}
                key={index}
              >
                <div className="management-card-icon">{item.icon}</div>

                <span className="management-card-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="management-section">
        <div className="management-container">
          <div className="management-section-heading mg-reveal">
            <span className="management-label">PROGRAM HIGHLIGHTS</span>

            <h2>
              Key Features of the <span>BBA Program</span>
            </h2>
          </div>

          <div className="management-features-wrapper mg-reveal">
            {keyFeatures.map((feature, index) => (
              <div className="management-feature-item" key={index}>
                <div className="management-feature-check">✓</div>

                <p>{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE */}
      <section className="management-section management-dark-section">
        <div className="management-container">
          <div className="management-section-heading mg-reveal">
            <span className="management-label">CAMPUS FACILITIES</span>

            <h2>
              World-Class <span>Infrastructure</span>
            </h2>

            <p>
              A modern learning environment designed to support professional
              development and practical business education.
            </p>
          </div>

          <div className="management-infrastructure-grid">
            {infrastructure.map((item, index) => (
              <article
                className="management-infrastructure-card mg-reveal"
                style={delay(index % 3)}
                key={index}
              >
                <div className="management-infrastructure-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ADMISSION PROCESS */}
      <section className="management-section" id="admission">
        <div className="management-container">
          <div className="management-section-heading mg-reveal">
            <span className="management-label">ADMISSIONS 2026</span>

            <h2>
              Begin Your <span>BBA Journey</span>
            </h2>

            <p>
              Understand the eligibility requirements and complete your
              admission process.
            </p>
          </div>

          <div className="management-admission-grid">
            <article className="management-eligibility-card mg-reveal">
              <div className="management-card-icon">🎓</div>

              <h3>Eligibility Criteria</h3>

              <p>
                Candidates must have completed 10+2 from any recognized stream.
              </p>

              <div className="management-marks">
                <div>
                  <strong>45%</strong>
                  <span>GEN / OBC</span>
                </div>

                <div>
                  <strong>40%</strong>
                  <span>SC / ST</span>
                </div>
              </div>

              <div className="management-intake">
                <span>Total Intake</span>
                <strong>120 Seats</strong>
              </div>
            </article>

            <article
              className="management-admission-steps mg-reveal"
              style={delay(1, 150)}
            >
              <h3>Step-by-Step Admission Process</h3>

              {admissionSteps.map((step, index) => (
                <div className="management-step" key={index}>
                  <div className="management-step-number">{index + 1}</div>

                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}

              <Link href="/register/enquiry" className="management-primary-btn">
                Apply Now <span>→</span>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* CAREER AND PLACEMENT */}
      <section className="management-section management-dark-section">
        <div className="management-container">
          <div className="management-section-heading mg-reveal">
            <span className="management-label">CAREER & PLACEMENT</span>

            <h2>
              Your Career. <span>Our Guidance.</span>
            </h2>

            <p>
              Develop professional capabilities and prepare yourself for
              opportunities across the business world.
            </p>
          </div>

          <div className="management-placement-grid">
            <article className="management-placement-card mg-reveal">
              <h3>Career Development Support</h3>

              <p>
                Structured career development initiatives to help students
                identify opportunities and prepare for professional challenges.
              </p>

              <div className="management-placement-list">
                {placementFeatures.map((item, index) => (
                  <div key={index}>
                    <span>✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </article>

            <article
              className="management-career-card mg-reveal"
              style={delay(1, 150)}
            >
              <h3>Explore Career Opportunities</h3>

              <p>
                A BBA degree can open pathways across multiple business and
                management domains.
              </p>

              {careerOptions.map((career, index) => (
                <div className="management-career-item" key={index}>
                  <div className="management-career-icon">{career.icon}</div>

                  <div>
                    <h4>{career.title}</h4>
                    <p>{career.roles}</p>
                  </div>
                </div>
              ))}

              <div className="management-higher-education">
                <span>🎯</span>

                <div>
                  <h4>Higher Education</h4>

                  <p>
                    Explore MBA programs, postgraduate diplomas, and
                    professional certifications.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="management-section">
        <div className="management-container">
          <div className="management-section-heading mg-reveal">
            <span className="management-label">FREQUENTLY ASKED QUESTIONS</span>

            <h2>
              Everything About <span>BBA Admissions</span>
            </h2>

            <p>
              Find answers to common questions about our Bachelor of Business
              Administration program.
            </p>
          </div>

          <div className="management-faq-container">
            {faqs.map((faq, index) => (
              <details
                className="management-faq-item mg-reveal"
                style={delay(index % 3, 70)}
                key={index}
                open={index === 0}
              >
                <summary>
                  <span>{faq.question}</span>

                  <span className="management-faq-icon">+</span>
                </summary>

                <div className="management-faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="management-final-cta">
        <div className="management-cta-content mg-reveal">
          <span className="management-label">
            YOUR BUSINESS JOURNEY STARTS HERE
          </span>

          <h2>
            Build Your Future with <span>IET College</span>
          </h2>

          <p>
            Develop business knowledge, strengthen leadership skills, and
            prepare for a successful corporate career.
          </p>

          <Link
            href="https://www.templgroup.in/#dv_registration"
            className="management-primary-btn"
          >
            Apply for BBA Admission <span>→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
