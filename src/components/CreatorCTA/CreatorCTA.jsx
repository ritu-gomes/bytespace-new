import ornament from "../../assets/3d-ornament-Hero.svg";

export default function CreatorCTA() {
  return (
    <section className="relative min-h-105 overflow-hidden bg-[#003BE2]">

      {/* Grid background */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)]
          bg-size-[80px_80px]
        "
      />

      {/* Reused ornaments */}
      <img
        src={ornament}
        alt=""
        className="
          pointer-events-none
          absolute inset-0
          z-10
          h-content w-full
          object-fill
        "
      />

      {/* Content */}
      <div
        className="
          relative z-50
          mx-auto flex min-h-105
          w-[92%] max-w-225
          flex-col items-center
          justify-center
          text-center
        "
      >

        {/* Heading */}
        <h2
          className="
            font-['Poppins']
            text-[30px]
            font-semibold
            leading-[1.15]
            text-[#F5F5F6]
            sm:text-[36px]
            md:text-[44px]
          "
        >
          Unlock Your Potential as a
          <br />
          Creator with ByteSpace
        </h2>

        {/* Description */}
        <p
          className="
            mt-5
            max-w-212.5
            font-['Satoshi']
            text-[14px]
            font-normal
            leading-5
            text-[#F5F5F6]
            sm:text-[15px]
            md:text-[16px]
          "
        >
          Experience the collaboration of numerous creators and an
          expanding selection of courses. Register now and become a
          part of a community comprising over 10,000 local and
          international creators. Utilize our shared knowledge and
          showcase your expertise by publishing your finest course
          on the ByteSpace Course Library.
        </p>

        {/* DaisyUI Button */}
        <button
          className="
            btn
            mt-5
            h-10.5
            min-h-10.5
            rounded-full
            border-0
            bg-[#D4FB20]
            px-6
            font-['Satoshi']
            text-[15px]
            font-medium
            text-[#242528]
            shadow-none
            hover:bg-[#e4ff6d]
            hover:text-black
            sm:text-[16px]
          "
        >
          Join as Creator
        </button>

      </div>
    </section>
  );
}