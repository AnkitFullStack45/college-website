import "./spiritual-guides.css";

export const metadata = {
  title: "Our Spiritual Guides | TEMPL Group of Institutions",
  description:
    "Meet the spiritual guides of TEMPL Group of Institutions and discover the values of truth, sincerity, compassion, mindfulness and selfless service.",
};

const spiritualGuides = [
  {
    id: 1,
    name: "Samarth Sadguru Dr. Jai Dayal (Babu)",
    description: [
      "A revered spiritual mentor, Samarth Sadguru Dr. Jai Dayal (Babu) is a dedicated disciple of Samarth Sadguru Mahatma Bhawani Shankar of Orai, a follower of Shri Ram Chandra of Fatehpur. His life and teachings inspire us to walk the righteous path, irrespective of the challenges that life may throw our way. A divine personality, Dr. Jai Dayal (Babu) helped us understand the value of truth, sincerity, and selflessness. His guidance encourages us to rise above adversities and pursue our goals with integrity and purpose. His powerful spiritual presence continuously reminds us that only the brave can walk the path of truth, and through dedication and devotion, we can achieve excellence in every sphere of life.",

      "Under his guidance, we have learned the importance of being truthful, dedicated, and sincere in all our endeavors. His teachings instill within us the core values of honesty, selflessness, and compassion, ensuring that we develop not only as successful professionals but also as responsible, virtuous individuals. His spiritual wisdom continues to be a source of inspiration and strength for the entire TEMPL Group of Institutions family. Today Samarth Sadguru Dr. Vishu Prakash is taking his divine light forward to help complete humankind.",
    ],
  },
  {
    id: 2,
    name: "Master Kamlesh Patel (Heartfulness)",
    description: [
      "We are also fortunate to be guided by Master Kamlesh Patel, the spiritual leader and global guide of the Heartfulness tradition. Heartfulness is a spiritual practice that promotes inner peace, self-realization, and emotional well-being through meditation and mindfulness. Master Kamlesh Patel’s teachings emphasize the importance of connecting with our inner selves, understanding our true purpose in life, and following a path of compassion and service to humanity.",

      "Through Heartfulness, Master Kamlesh Patel encourages us to cultivate an inner balance, which is essential for personal growth and professional success. His guidance teaches us to be mindful, not only in our personal lives but also in our educational and career journeys. It helps us develop the clarity of mind and mental resilience required to face challenges with grace and perseverance. As students, we are encouraged to practice self-awareness, meditative techniques, and spiritual mindfulness, all of which support our holistic development.",

      "Master Kamlesh Patel’s teachings empower us to integrate spirituality with everyday life, ensuring that we lead a life of purpose, peace, and self-improvement. His presence reminds us that true success is not just measured by professional achievements but by the peace, love, and service we extend to others.",
    ],
  },
];

export default function SpiritualGuidesPage() {
  return (
    <main className="spiritual-page">
      {/* HERO SECTION */}
      <section className="spiritual-hero">
        <div className="spiritual-hero-image">
          <img
            src="/images/spritual.webp"
            alt="Spiritual guidance at TEMPL Group of Institutions"
          />
        </div>
      </section>

      {/* INTRODUCTION SECTION */}

      <section className="spiritual-intro spiritual-section">
        <div className="spiritual-container">
          <div className="spiritual-intro-content">
            <span className="spiritual-label">OUR SPIRITUAL FOUNDATION</span>

            <h2>
              Education Beyond <span>Academics</span>
            </h2>

            <p>
              At <strong>TEMPL Group of Institutions</strong>, we are not just
              dedicated to academic excellence but also deeply committed to
              nurturing the
              <strong> moral and spiritual growth</strong> of our students. We
              believe that education is a holistic process, and to truly succeed
              in life, it is essential to develop both intellectual and
              spiritual qualities.
            </p>

            <p>
              Our <strong>Spiritual Guides</strong> play a crucial role in
              shaping the character and guiding us toward truth, sincerity, and
              dedication in our service to society.
            </p>

            <div className="spiritual-values">
              <div className="spiritual-value-card">
                <i className="fa-solid fa-heart"></i>
                <span>Compassion</span>
              </div>

              <div className="spiritual-value-card">
                <i className="fa-solid fa-scale-balanced"></i>
                <span>Integrity</span>
              </div>

              <div className="spiritual-value-card">
                <i className="fa-solid fa-hands-holding-circle"></i>
                <span>Selflessness</span>
              </div>

              <div className="spiritual-value-card">
                <i className="fa-solid fa-brain"></i>
                <span>Mindfulness</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPIRITUAL GUIDES */}

      <section className="spiritual-guides-section spiritual-section">
        <div className="spiritual-container">
          <div className="spiritual-section-heading">
            <span className="spiritual-label">GUIDING LIGHTS</span>

            <h2>
              The People Who <span>Inspire Us</span>
            </h2>

            <p>
              Their wisdom and teachings encourage us to develop strong values,
              discover our purpose and contribute positively to society.
            </p>
          </div>

          <div className="spiritual-guides-list">
            {spiritualGuides.map((guide, index) => (
              <article
                className={`spiritual-guide-card ${
                  index % 2 !== 0 ? "reverse" : ""
                }`}
                key={guide.id}
              >
                <div className="spiritual-guide-number">0{guide.id}</div>

                <div className="spiritual-guide-content">
                  <span className="spiritual-guide-tag">SPIRITUAL GUIDE</span>

                  <h3>{guide.name}</h3>

                  {guide.description.map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING SECTION */}

      <section className="spiritual-closing">
        <div className="spiritual-container">
          <i className="fa-solid fa-quote-left"></i>

          <h2>
            True Education Nurtures Both
            <span> Mind and Soul</span>
          </h2>

          <p>
            At TEMPL, we believe that knowledge builds capability, while values
            build character. Together, they shape individuals who can make a
            meaningful difference in society.
          </p>
        </div>
      </section>
    </main>
  );
}
