import Image from "next/image";
import "./ScholarshipSection.css";

const scholarships = [
  {
    id: 1,
    bg: "#3B82F6",
    icon: "/images/1icon.webp",
    alt: "Scholarship Icon 1",
    value: "UPTO 40%",
    title: (
      <>
        ACADEMIC EXCELLENCE <br /> SCHOLARSHIP
      </>
    ),
    info: (
      <>
        BASED ON 10<sup>TH</sup> AND 12<sup>TH</sup> MARKS OBTAINED
      </>
    ),
  },
  {
    id: 2,
    bg: "#166534",
    icon: "/images/2icon.webp",
    alt: "Scholarship Icon 2",
    value: "EARN 20%",
    title: (
      <>
        ADDITIONAL CO-CURRICULAR
        <br /> ACHIEVEMENT AWARD
      </>
    ),
    infoClass: "small",
    info: (
      <>
        For Student with certificates of Participation in Sports / Cultural /
        NCC / SCOUT / Science Exibition <span className="or-text">OR</span>{" "}
        Spl. Scl. for Girls
      </>
    ),
  },
  {
    id: 3,
    bg: "#5B50C6",
    icon: "/images/3icon.webp",
    alt: "Scholarship Icon 3",
    valueClass: "large",
    titleClass: "large",
    value: "OFFERS",
    title: (
      <>
        ENGLISH SPEAKING <br /> CLASSES
      </>
    ),
    infoClass: "price",
    info: "WORTH 10,000/-",
  },
  {
    id: 4,
    bg: "#EF4444",
    icon: "/images/4icon.webp",
    alt: "Scholarship Icon 4",
    valueClass: "large",
    value: "FREE",
    title: (
      <>
        SKILL DEVELOPMENT <br /> CERTIFICATION COURSES
      </>
    ),
    infoClass: "price",
    info: "VALUE OF 35,000/-",
  },
];

export default function ScholarshipSection() {
  return (
    <section className="scholarship-section">
      <div className="scholarship-grid">
        {scholarships.map((item) => (
          <div
            key={item.id}
            className="scholarship-card"
            style={{ backgroundColor: item.bg }}
          >
            <div className="scholarship-icon">
              <Image src={item.icon} alt={item.alt} width={78} height={78} />
            </div>

            <div className="scholarship-content">
              <div className={`scholarship-value ${item.valueClass || ""}`}>
                {item.value}
              </div>
              <div className={`scholarship-title ${item.titleClass || ""}`}>
                {item.title}
              </div>
              <div className={`scholarship-info ${item.infoClass || ""}`}>
                {item.info}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}