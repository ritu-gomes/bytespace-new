import "./partners.css";

import partner1 from "../../assets/partner-1.svg";
import partner2 from "../../assets/partner-2.svg";
import partner3 from "../../assets/partner-3.svg";
import partner4 from "../../assets/partner-4.svg";
import partner5 from "../../assets/partner-5.svg";

export default function Partners() {
  const partners = [
    partner1,
    partner2,
    partner3,
    partner4,
    partner5,
  ];

  return (
    <section className="partners bg-[#F5F5F6]">
      <div className="partners-logos">
        {partners.map((partner, index) => (
          <img
            key={index}
            src={partner}
            alt={`Partner ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}