import Image from "next/image";
import "./GreenCampus.css";

export default function GreenCampus() {
  return (
    <section className="green-campus">
      <Image
        src="/images/campusGreen.webp"
        alt="Green campus of TEMPL Group of Institutions"
        width={1200}
        height={480}
        sizes="100vw"
        priority
        className="green-campus-img"
      />
    </section>
  );
}