import "./CourseCardSection.css";

import course1 from "../../assets/course-1.webp";
import course2 from "../../assets/course-2.webp";
import course3 from "../../assets/course-3.webp";
import course4 from "../../assets/course-4.webp";
import course5 from "../../assets/course-5.webp";
import course6 from "../../assets/course-6.webp";

import avatar1 from "../../assets/avatar-1.png";
import avatar2 from "../../assets/avatar-2.png";
import avatar3 from "../../assets/avatar-3.png";
import avatar4 from "../../assets/avatar-4.png";

import levelIcon from "../../assets/level-icon.svg";
const courses = [
  {
    image: course1,
    title: "Learn Figma from Basic",
  },
  {
    image: course2,
    title: "Build Digital Asset",
  },
  {
    image: course3,
    title: "the Power of Big Data",
  },
  {
    image: course4,
    title: "Balancing Productivity and...",
  },
  {
    image: course5,
    title: "Mastering Money Manage...",
  },
  {
    image: course6,
    title: "From Idea to Startup Succ...",
  },
];

const avatars = [avatar1, avatar2, avatar3, avatar4];

function AvatarGroup() {
  return (
    <div className="avatar-group">
      {avatars.map((avatar, index) => (
        <img
          key={index}
          src={avatar}
          alt=""
          className="course-avatar"
        />
      ))}

      <span className="avatar-more">26+</span>
    </div>
  );
}

function CourseCard({ course }) {
  return (
    <div className="course-card">
      <div className="course-image-wrapper">
        <img
          src={course.image}
          alt={course.title}
          className="course-image"
        />
      </div>

      <div className="course-card-content">
        <div className="course-title-row">
          <h3>{course.title}</h3>

          <span className="course-rating">
            4.5 <span>★</span>
          </span>
        </div>

        <p className="course-author">
          by <span>pureparl studio</span>
        </p>

        <div className="course-meta">
          <span className="beginner">
            <span className="level-icon">
              <img src={levelIcon} alt="" />
            </span>
            Beginner
          </span>

          <AvatarGroup />
        </div>

        <div className="course-price">
          <strong>$25</strong>
          <span>/Lifetime</span>
        </div>
      </div>
    </div>
  );
}

export default function CourseCardSection() {
  return (
    <section className="courses-section">
      <div className="courses-grid">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            course={course}
          />
        ))}
      </div>
    </section>
  );
}