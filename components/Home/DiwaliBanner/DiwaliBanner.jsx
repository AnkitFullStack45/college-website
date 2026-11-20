import Image from "next/image";
import "./DiwaliBanner.css";

export default function DiwaliBanner() {
  return (
    <section className="dw-banner">
      <Image
        src="/images/diwali-banner1.webp"
        alt="Happy Diwali"
        width={1920}
        height={600}
        sizes="100vw"
        priority
        className="dw-banner-img"
      />
    </section>
  );
}