import "./LearningPaths.css";

import designIcon from "../../assets/design.svg";
import developmentIcon from "../../assets/development.svg";
import softwareIcon from "../../assets/software.svg";
import businessIcon from "../../assets/business.svg";
import marketingIcon from "../../assets/marketing.svg";
import photographyIcon from "../../assets/photography.svg";

const categories = [
  {
    title: "Design",
    icon: designIcon,
  },
  {
    title: "Development",
    icon: developmentIcon,
  },
  {
    title: "IT & Software",
    icon: softwareIcon,
  },
  {
    title: "Business",
    icon: businessIcon,
  },
  {
    title: "Marketing",
    icon: marketingIcon,
  },
  {
    title: "Photography",
    icon: photographyIcon,
  },
];

export default function LearningPaths() {
  return (
    <section className="learning-paths">
      <div className="learning-header">
        <h2>Explore Diverse Learning Paths at Bytespace</h2>

        <p>
          At Bytespace, we believe in empowering individuals through
          knowledge. Our diverse range of courses spans various fields,
          ensuring there's something for everyone. Unleash your potential
          and explore our carefully curated categories.
        </p>
      </div>

      <div className="category-grid">
        {categories.map((category) => (
          <button
            className="category-card"
            key={category.title}
          >
            <span className="category-icon">
              <img
                src={category.icon}
                alt=""
              />
            </span>

            <span className="category-title">
              {category.title}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}