import testimonial1 from "../../assets/testimonial-1.png";
import testimonial2 from "../../assets/testimonial-2.png";
import testimonial3 from "../../assets/testimonial-3.png";

const testimonials = [
  {
    image: testimonial1,
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    text: `"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."`,
  },
  {
    image: testimonial2,
    name: "James L.",
    role: "Lifelong Learner",
    text: `"I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."`,
  },
  {
    image: testimonial3,
    name: "Alex B.",
    role: "Inspired Creator",
    text: `"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally."`,
  },
];

export default function Testimonials() {
  return (
    <section className="relative min-h-122 overflow-hidden bg-white">
      
      {/* Background gradient */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_52%_35%,rgba(200,255,0,0.55),transparent_32%),radial-gradient(circle_at_5%_100%,rgba(194,207,255,0.85),transparent_35%),linear-gradient(110deg,#ffffff_20%,#f8f8f8_100%)]
        "
      />

      <div className="relative z-10 mx-auto w-[90%] max-w-319.5 pt-17">

        {/* Heading + description */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_1.15fr]">

          <div>
            <h2
              className="
                max-w-90
                font-['Poppins']
                text-[32px]
                font-semibold
                leading-[1.15]
                tracking-[-0.5px]
                text-black
                md:text-[34px]
              "
            >
              Discover What Our
              <br />
              Community Is Saying
            </h2>
          </div>

          <div>
            <p
              className="
                max-w-130
                font-['Satoshi']
                text-[16px]
                font-normal
                leading-6
                text-[#666]
              "
            >
              At ByteSpace, our vibrant community of learners and creators is at the
              heart of what we do. Hear directly from those who have experienced the
              transformative journey of learning and creating on our platform. Explore
              testimonials that reflect the diverse perspectives of enthusiastic learners
              and accomplished creators.
            </p>
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="mt-10.5 grid grid-cols-1 gap-10 md:grid-cols-3 pb-15">

          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="
                min-h-63.75
                rounded-2xl
                bg-white
                p-3.75
                shadow-[0_8px_30px_rgba(0,0,0,0.02)]
              "
            >
              {/* Avatar */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="h-12 w-12 rounded-full object-cover"
              />

              {/* Name */}
              <h3
                className="
                  mt-3.25
                  font-['Satoshi']
                  text-[13px]
                  font-semibold
                  leading-none
                  text-black
                "
              >
                {testimonial.name}
              </h3>

              {/* Role */}
              <p
                className="
                  mt-1.25
                  font-['Satoshi']
                  text-[11px]
                  font-normal
                  leading-none
                  text-[#003BE2]
                "
              >
                {testimonial.role}
              </p>

              {/* Testimonial */}
              <p
                className="
                  mt-5
                  font-['Satoshi']
                  text-[14px]
                  font-normal
                  leading-5.5
                  text-[#4F4F4F]
                "
              >
                {testimonial.text}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}