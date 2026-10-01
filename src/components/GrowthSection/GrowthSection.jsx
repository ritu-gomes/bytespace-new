import growthMan from "../../assets/growth-man.png";
import growthWoman from "../../assets/growth-woman.png";

import growthCourseCard from "../../assets/Course_Card.svg";
import learningProgressCard from "../../assets/learning-purpose.svg";
import totalRevenueCard from "../../assets/total-revenue-card.svg";
import yearToDateCard from "../../assets/year-to-date-card.svg";
import happyStudentsCard from "../../assets/happy-students.svg";

import squiggle1 from "../../assets/green-squiggle-1.svg";
import squiggle2 from "../../assets/green-squiggle-2.svg";

export default function GrowthSection() {
  return (
    <section className="relative overflow-hidden bg-[base-100]">

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(210,255,0,0.25),transparent_55%),radial-gradient(circle_at_85%_35%,rgba(220,225,255,0.6),transparent_35%),radial-gradient(circle_at_15%_85%,rgba(210,255,0,0.2),transparent_45%)]" />

      <div className="relative mx-auto w-[70%] max-w-300">

        <div className="grid min-h-125 items-center lg:grid-cols-2">

          <div className="max-w-md lg:pl-10">
            <h2 className="text-3xl font-semibold leading-tight text-base-content">
              Your Path to Professional
              <br />
              Growth Starts Here!
            </h2>

            <p className="mt-5 text-sm leading-6 text-base-content/60">
              Explore our curated selection of courses tailored to enhance
              your capabilities and accelerate your career journey. Whether
              you are looking to sharpen specific skills, gain industry
              expertise, or embark on a new career path entirely, we have
              the resources you need.
            </p>

            <div className="mt-7 flex gap-8">
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-primary">
                  12K
                </span>
                <span className="text-xs text-base-content/50">
                  Students
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-lg font-semibold text-primary">
                  70+
                </span>
                <span className="text-xs text-base-content/50">
                  Courses
                </span>
              </div>

              <div className="flex flex-col">
                <span className="text-lg font-semibold text-primary">
                  16
                </span>
                <span className="text-xs text-base-content/50">
                  Creators
                </span>
              </div>

            </div>
          </div>

          <div className="relative h-125">

            <img
              src={growthCourseCard}
              alt=""
              className="absolute left-[22%] top-[10%] z-10 w-60"
            />

            <img
              src={growthMan}
              alt=""
              className="absolute bottom-0 left-[25%] z-20 w-120"
            />

            <img
              src={learningProgressCard}
              alt=""
              className="absolute right-[3%] top-[42%] z-30 w-40"
            />

            <img
              src={squiggle1}
              alt=""
              className="absolute right-[1%] top-[25%] z-40 w-30"
            />

          </div>
        </div>

        <div className="grid min-h-125 items-center lg:grid-cols-2">
          <div className="relative order-2 h-125 lg:order-1">
            <img
              src={totalRevenueCard}
              alt=""
              className="absolute left-28 top-[6%] z-30 w-50"
            />

            <img
              src={yearToDateCard}
              alt=""
              className="absolute left-25 top-[32%] z-30 w-27"
            />

            <img
              src={growthWoman}
              alt=""
              className="absolute bottom-0 left-[25%] z-35 w-100"
            />

            <img
              src={happyStudentsCard}
              alt=""
              className="absolute bottom-[25%] right-[5%] z-40 w-45"
            />

            <img
              src={squiggle2}
              alt=""
              className="absolute left-[65%] top-[22%] z-40 w-30"
            />

          </div>


          {/* Text */}
          <div className="order-1 max-w-107.5 lg:order-2 lg:pl-10">

            <h2 className="text-3xl font-semibold leading-tight text-base-content">
              Create & Manage
              <br />
              Courses Easily.
            </h2>

            <p className="mt-5 text-sm leading-6 text-base-content/60">
              ByteSpace supports individuals or entities in the creation,
              publication, and administration of educational courses.
            </p>


            {/* DaisyUI checklist */}
            <ul className="mt-6 space-y-3 text-sm">

              <li className="flex items-center gap-2">
                <span className="badge badge-primary badge-sm">
                  ✓
                </span>
                <span>Share Your Expertise</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="badge badge-primary badge-sm">
                  ✓
                </span>
                <span>Monetize Your Passion</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="badge badge-primary badge-sm">
                  ✓
                </span>
                <span>Flexibility and Autonomy</span>
              </li>

              <li className="flex items-center gap-2">
                <span className="badge badge-primary badge-sm">
                  ✓
                </span>
                <span>Build a Community</span>
              </li>

            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}