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
    <section className="relative overflow-hidden bg-[base-100] px-5 py-14 sm:px-8 sm:py-16 lg:px-20 lg:py-20">

      {/* Background */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          bg-[radial-gradient(circle_at_15%_25%,rgba(210,255,0,0.25),transparent_55%),radial-gradient(circle_at_85%_35%,rgba(220,225,255,0.6),transparent_35%),radial-gradient(circle_at_15%_85%,rgba(210,255,0,0.2),transparent_45%)]
        "
      />

      <div className="relative mx-auto w-[92%] max-w-300 sm:w-[90%] lg:w-[70%]">
        <div className="grid min-h-125 items-center lg:grid-cols-2">

          {/* Text */}
          <div className="max-w-md lg:pl-10">

            <h2 className="text-2xl font-semibold leading-tight text-base-content sm:text-3xl">
              Your Path to Professional
              <br />
              Growth Starts Here!
            </h2>

            <p className="mt-4 text-sm leading-6 text-base-content/60 sm:mt-5">
              Explore our curated selection of courses tailored to enhance
              your capabilities and accelerate your career journey. Whether
              you are looking to sharpen specific skills, gain industry
              expertise, or embark on a new career path entirely, we have
              the resources you need.
            </p>

            {/* Statistics */}
            <div className="mt-6 flex gap-6 sm:mt-7 sm:gap-8">

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

          {/* Visual */}
          <div className="relative h-100 sm:h-110 lg:h-125">

            {/* Course Card */}
            <img
              src={growthCourseCard}
              alt=""
              className="
                absolute
                left-[5%] top-[8%]
                z-10
                w-44
                sm:left-[12%] sm:w-52
                lg:left-[22%] lg:w-60
              "
            />

            {/* Man */}
            <img
              src={growthMan}
              alt=""
              className="
                absolute
                bottom-0 left-[12%]
                z-20
                w-80
                sm:left-[18%] sm:w-96
                lg:left-[25%] lg:w-120
              "
            />

            {/* Learning Progress Card */}
            <img
              src={learningProgressCard}
              alt=""
              className="
                absolute
                right-[2%] top-[40%]
                z-30
                w-30
                sm:right-[3%] sm:w-36
                lg:w-40
              "
            />

            {/* Squiggle */}
            <img
              src={squiggle1}
              alt=""
              className="
                absolute
                right-[2%] top-[20%]
                z-40
                w-20
                sm:w-24
                lg:w-30
              "
            />

          </div>
        </div>

        <div className="grid min-h-125 items-center lg:grid-cols-2">

          {/* Visual */}
          <div className="relative order-2 h-100 sm:h-110 lg:order-1 lg:h-125">

            {/* Total Revenue Card */}
            <img
              src={totalRevenueCard}
              alt=""
              className="
                absolute
                left-[5%] top-[6%]
                z-30
                w-40
                sm:left-[12%] sm:w-44
                lg:left-28 lg:w-50
              "
            />

            {/* Year To Date Card */}
            <img
              src={yearToDateCard}
              alt=""
              className="
                absolute
                left-[7%] top-[32%]
                z-30
                w-22
                sm:left-[14%] sm:w-24
                lg:left-25 lg:w-27
              "
            />

            {/* Woman */}
            <img
              src={growthWoman}
              alt=""
              className="
                absolute
                bottom-0 left-[15%]
                z-35
                w-72
                sm:left-[20%] sm:w-80
                lg:left-[25%] lg:w-100
              "
            />

            {/* Happy Students Card */}
            <img
              src={happyStudentsCard}
              alt=""
              className="
                absolute
                bottom-[20%] right-[2%]
                z-40
                w-36
                sm:right-[4%] sm:w-40
                lg:bottom-[25%] lg:right-[5%] lg:w-45
              "
            />

            {/* Squiggle */}
            <img
              src={squiggle2}
              alt=""
              className="
                absolute
                left-[65%] top-[20%]
                z-40
                w-20
                sm:w-24
                lg:w-30
              "
            />

          </div>


          {/* Text */}
          <div className="order-1 max-w-107.5 lg:order-2 lg:pl-10">

            <h2 className="text-2xl font-semibold leading-tight text-base-content sm:text-3xl">
              Create & Manage
              <br />
              Courses Easily.
            </h2>

            <p className="mt-4 text-sm leading-6 text-base-content/60 sm:mt-5">
              ByteSpace supports individuals or entities in the creation,
              publication, and administration of educational courses.
            </p>

            {/* Checklist */}
            <ul className="mt-5 space-y-3 text-sm sm:mt-6">

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