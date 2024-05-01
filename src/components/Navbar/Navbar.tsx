import "./navbar.css";

const Navbar = () => {
  return (
    <div className="p-3 flex justify-between">
      <div className="flex items-center gap-5">
        <div>
          <img
            className="size-12"
            src="https://ihadis.com/assets/home-logo.png"
            alt=""
          />
        </div>
        <div className="font-SolaimanLipi">
          <div className="hidden md:inline-block">
            <h3 className="font-bold text-xl">হাদিস সমূহ</h3>
            <p className="text-sm text-gray-600">হাদিস পড়ুন শিখুন এবং জানুন</p>
          </div>

          <div className="md:hidden lg:hidden">
            <p className="text-primary-color text-xl font-semibold">আল হাদিস</p>
          </div>
        </div>
      </div>

      <div className="flex items-center md:gap-20 gap-5">
        <div>
          <input
            className="hidden md:inline-block border-2 px-10 py-3 rounded-lg focus:outline-none icon-input"
            type="text"
            placeholder="Search Hadith"
          />

          <div className="bg-gray-200 size-10 flex justify-center items-center rounded-md md:hidden lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 30 30"
            >
              <path
                fill="#777777"
                d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"
              ></path>
            </svg>
          </div>
        </div>
        <div>
          <img
            className="border p-2 rounded-md bg-gray-200"
            src="https://ihadis.com/assets/index/mode/night.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
