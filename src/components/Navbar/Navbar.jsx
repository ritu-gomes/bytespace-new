function Navbar() {
  return (
    <nav className="w-full">
      <div
        className="
          navbar
          min-h-15
          w-full
          bg-[#003BE2]
          px-4
          sm:min-h-22
          sm:px-6
          md:px-10
          lg:min-h-30
          lg:px-16
          xl:px-30
        "
      >
        {/* LEFT - LOGO + MOBILE MENU */}
        <div className="navbar-start gap-1 sm:gap-2">

          {/* MOBILE MENU */}
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="
                btn
                btn-ghost
                btn-sm
                px-2
                text-[#F5F5F6]
              "
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="
                menu
                menu-sm
                dropdown-content
                z-50
                mt-3
                w-52
                rounded-box
                bg-base-100
                p-2
                text-black
                shadow
              "
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Courses</a>
              </li>
              <li>
                <a>Creators</a>
              </li>
            </ul>
          </div>

          {/* LOGO */}
          <a className="btn btn-ghost h-auto min-h-0 p-0">
            <img
              src="/src/assets/Header_Logo.svg"
              alt="ByteSpace"
              className="
                h-auto
                w-31.25
                sm:w-36.25
                md:w-38.75
                lg:w-42.75
              "
            />
          </a>
        </div>

        {/* CENTER NAVIGATION - DESKTOP */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 p-0">
            <li>
              <a
                className="
                  font-['Satoshi']
                  text-[16px]
                  font-medium
                  leading-[120%]
                  text-[#F5F5F6]
                "
              >
                Home
              </a>
            </li>

            <li>
              <a
                className="
                  font-['Satoshi']
                  text-[16px]
                  font-medium
                  leading-[120%]
                  text-[#F5F5F6]
                "
              >
                Courses
              </a>
            </li>

            <li>
              <a
                className="
                  font-['Satoshi']
                  text-[16px]
                  font-medium
                  leading-[120%]
                  text-[#F5F5F6]
                "
              >
                Creators
              </a>
            </li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end">
          <ul className="menu menu-horizontal items-center gap-1 p-0 sm:gap-2">

            {/* SIGN IN */}
            <li className="hidden sm:block">
              <a
                className="
                  px-2
                  font-['Satoshi']
                  text-[14px]
                  font-normal
                  leading-6
                  text-[#CED0D3]

                  md:px-3
                  md:text-[16px]
                "
              >
                Sign In
              </a>
            </li>

            {/* JOIN US */}
            <li className="hidden sm:block">
              <a
                className="
                  px-2
                  font-['Satoshi']
                  text-[14px]
                  font-normal
                  leading-6
                  text-[#CED0D3]

                  md:px-3
                  md:text-[16px]
                "
              >
                Join Us
              </a>
            </li>

            {/* SHOPPING ICON */}
            <li>
              <a className="p-2">
                <img
                  src="/src/assets/shop-icon.svg"
                  alt="Shopping"
                  className="
                    h-5
                    w-5
                    sm:h-6
                    sm:w-6
                  "
                />
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;