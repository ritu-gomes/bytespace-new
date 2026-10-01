import ornament from "../../assets/3d-ornament-Hero.svg";
import greenRound from "../../assets/Ellipse.svg";
import person from "../../assets/Image.png";
import uiUxCard from "../../assets/Auto Layout Vertical.svg";
import courseCard from "../../assets/learning-purpose.svg";
import marketingCard from "../../assets/happy-students.svg";
import searchIcon from "../../assets/searchLogo.svg";

export default function Hero() {
  return (
    <section
      className="
        hero
        relative
        w-full
        overflow-hidden
        bg-[#003BE2]

        min-h-140
        sm:min-h-150
        md:min-h-160
        lg:min-h-180
        xl:min-h-200
      "
      style={{
        backgroundImage: `url(${ornament})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* GRID */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]
          bg-size-[80px_80px]
        "
      />

      <div
        className="
          absolute
          left-0
          top-0
          z-40
          flex
          w-full
          justify-center
          px-5
          pt-5
          text-center
          text-white

          sm:px-8
          sm:pt-14

          md:pt-16

          lg:pt-20

          xl:pt-10
        "
      >
        <div className="w-full max-w-225">

          {/* HEADING */}
          <h1
            className="
              mx-auto
              max-w-187.5
              font-['Satoshi']
              text-3xl
              font-bold
              leading-[1.1]

              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            "
          >
            Get Access to Hundreds
            <br className="hidden sm:block" />
            Courses Available
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mx-auto
              mt-4
              max-w-150
              font-['Satoshi']
              text-xs
              leading-5
              text-white/90

              sm:mt-5
              sm:text-sm
              sm:leading-6

              md:text-base
            "
          >
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>

          {/* SEARCH */}
          <div
            className="
              mx-auto
              mt-5
              flex
              w-full
              max-w-117.5
              items-center
              gap-2

              sm:mt-6
            "
          >
            <label
              className="
                input
                flex-1
                rounded-full
                border-0
                bg-white
                text-black
                shadow-none
              "
            >
              <img
                src={searchIcon}
                alt="Search"
                className="h-[1em] w-[1em] opacity-50"
              />

              <input
                type="text"
                placeholder="Course, topic, creator"
                className="min-w-0"
              />
            </label>

            <button
              className="
                btn
                min-h-11
                rounded-full
                border-0
                bg-[#D4FB20]
                px-5
                text-black
                shadow-none
                hover:bg-[#D4FB20]

                sm:min-h-12
                sm:px-6
              "
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* GREEN CIRCLE */}
      <img
        src={greenRound}
        alt=""
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          z-10
          h-auto
          max-w-none
          -translate-x-1/2

          w-87.5

          sm:w-112.5

          md:w-140

          lg:w-170

          xl:w-185
        "
      />

      {/* PERSON */}
      <img
        src={person}
        alt=""
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          z-20
          h-auto
          max-w-none
          -translate-x-1/2
          object-contain

          w-55

          sm:w-67.5

          md:w-82.5

          lg:w-92.5

          xl:w-100
        "
      />

      {/* UI/UX CARD */}
      <img
        src={uiUxCard}
        alt=""
        className="
          pointer-events-none
          absolute
          z-30
          max-w-none

          bottom-26.25
          left-[calc(50%-155px)]
          w-28.75

          sm:bottom-31.25
          sm:left-[calc(50%-205px)]
          sm:w-36.25

          md:bottom-38.75
          md:left-[calc(50%-260px)]
          md:w-45

          lg:bottom-47.5
          lg:left-[calc(50%-330px)]
          lg:w-53.75

          xl:bottom-52.5
          xl:left-[calc(50%-370px)]
          xl:w-58.75
        "
      />

      {/* COURSE CARD */}
      <img
        src={courseCard}
        alt=""
        className="
          pointer-events-none
          absolute
          z-30
          max-w-none

          bottom-25
          left-[calc(50%+45px)]
          w-28.75

          sm:bottom-28.75
          sm:left-[calc(50%+65px)]
          sm:w-36.25

          md:bottom-36.25
          md:left-[calc(50%+80px)]
          md:w-45

          lg:bottom-43.75
          lg:left-[calc(50%+55px)]
          lg:w-53.75

          xl:bottom-47.5
          xl:left-[calc(50%+60px)]
          xl:w-58.75
        "
      />

      {/* MARKETING CARD */}
      <img
        src={marketingCard}
        alt=""
        className="
          pointer-events-none
          absolute
          z-30
          max-w-none

          bottom-5
          right-[calc(50%+55px)]
          w-28.75

          sm:bottom-6.25
          sm:right-[calc(50%+75px)]
          sm:w-36.25

          md:bottom-7.5
          md:right-[calc(50%+105px)]
          md:w-45

          lg:bottom-10
          lg:right-[calc(50%+135px)]
          lg:w-53.75

          xl:bottom-11.25
          xl:right-[calc(50%+160px)]
          xl:w-58.75
        "
      />

      {/* BOTTOM DEPTH LAYER */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          z-5
          h-45
          w-full
        "
      />
    </section>
  );
}