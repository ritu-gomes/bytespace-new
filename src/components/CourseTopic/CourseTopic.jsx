import "./CourseTopic.css";

const topics = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

export default function CourseTopic() {
  return (
    <section className="course-topic-section">
      <div className="course-topics">

        {/* Row 1 */}
        <div className="course-topic-row">
          {topics.slice(0, 8).map((topic) => (
            <button type="button" key={topic} className="course-topic">
              {topic}
            </button>
          ))}
        </div>

        {/* Row 2 */}
        <div className="course-topic-row">
          {topics.slice(8, 14).map((topic) => (
            <button type="button" key={topic} className="course-topic">
              {topic}
            </button>
          ))}
        </div>

        {/* Row 3 */}
        <div className="course-topic-row">
          {topics.slice(14).map((topic) => (
            <button type="button" key={topic} className="course-topic">
              {topic}
            </button>
          ))}

          <button type="button" className="course-topic more-button">
            + More
          </button>
        </div>

      </div>
    </section>
  );
}