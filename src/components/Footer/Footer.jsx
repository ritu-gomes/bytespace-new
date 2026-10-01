import logo from "../../assets/FooterLogo.svg";

export default function Footer() {
  return (
    <footer className="bg-white">

      <div className="mx-auto w-[90%] max-w-319.5 pt-10">

        <div className="grid grid-cols-1 gap-5 md:grid-cols-[1.5fr_1fr_1fr_1fr]">

          {/* Newsletter */}
          <div>
            <img
              src={logo}
              alt="ByteSpace"
              className="h-5.5 w-auto object-contain object-left"
            />

            <p
              className="
                mt-3.5
                max-w-82.5
                font-['Satoshi']
                text-[10px]
                leading-3.5
                text-[#555]
              "
            >
              Stay Up to date with our latest features and releases by joining our
              newsletter.
            </p>

            {/* Email */}
            <div className="mt-6.25 flex max-w-75 items-center gap-3.25">

              <input
                type="email"
                placeholder="Enter your email"
                className="
                  h-9.5
                  w-full
                  rounded-full
                  border
                  border-[#ddd]
                  bg-white
                  px-3.75
                  font-['Satoshi']
                  text-[11px]
                  outline-none
                  placeholder:text-[#777]
                  focus:border-[#C8FF00]
                "
              />

              <button
                className="
                  btn
                  h-9.5
                  min-h-9.5
                  rounded-full
                  border-0
                  bg-[#C8FF00]
                  px-6
                  font-['Satoshi']
                  text-[11px]
                  font-medium
                  text-black
                  shadow-none
                  hover:bg-[#D8FF32]
                  hover:text-black
                "
              >
                Search
              </button>

            </div>

            <p
              className="
                mt-3.5
                max-w-75
                font-['Satoshi']
                text-[10px]
                leading-4
                text-[#777]
              "
            >
              By subscribing, you agree to our Privacy Policy and consent to receive
              updates from our company.
            </p>
          </div>

          {/* Column 1 */}
          <div>
            <FooterColumn
              links={[
                "Featured Courses",
                "Featured Categories",
                "Business",
                "IT",
                "Design",
              ]}
            />
          </div>

          {/* Column 2 */}
          <div>
            <FooterColumn
              links={[
                "Development",
                "Marketing",
                "Photography",
                "Finance",
                "Sport",
              ]}
            />
          </div>

          {/* Column 3 */}
          <div>
            <FooterColumn
              links={[
                "Become a Creator",
                "Affiliate Program",
                "Contact",
                "Help",
                "About",
              ]}
            />
          </div>

        </div>

        {/* Bottom */}
        <div
          className="
            mt-18
            flex
            flex-col
            gap-5
            border-t
            border-[#ddd]
            py-3.75
            md:flex-row
            md:items-center
            md:justify-between
          "
        >

          <p
            className="
              font-['Satoshi']
              text-[9px]
              text-[#777]
            "
          >
            © 2023 ByteSpace. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a
              href="#"
              className="
                font-['Satoshi']
                text-[9px]
                text-[#555]
                transition-colors
                hover:text-[#003BE2]
              "
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="
                font-['Satoshi']
                text-[8px]
                text-[#555]
                transition-colors
                hover:text-[#003BE2]
              "
            >
              Terms of Service
            </a>

            <a
              href="#"
              className="
                font-['Satoshi']
                text-[10px]
                text-[#555]
                transition-colors
                hover:text-[#003BE2]
              "
            >
              Cookies Settings
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}


/* Footer column component */

function FooterColumn({ links }) {
  return (
    <div className="flex flex-col gap-3.5">
      {links.map((link) => (
        <a
          key={link}
          href="#"
          className="
            font-['Satoshi']
            text-[11px]
            font-normal
            text-[#242528]
            transition-colors
            hover:text-[#003BE2]
          "
        >
          {link}
        </a>
      ))}
    </div>
  );
}