import "./navbar.css";

const Navbar = () => {
  return (
    <div className="p-3 flex justify-between">
      <div className="flex items-center gap-5">
        <div>
          <img src="https://ihadis.com/assets/home-logo.png" alt="" />
        </div>
        <div>
          <h3 className="font-bold">সূচিপত্র</h3>
          <p>হাদিস পড়ুন শিখুন এবং জানুন</p>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div>
          <input
            className="border p-3 rounded-lg focus:outline-none icon-input"
            type="text"
            placeholder="Search Hadith"
          />
        </div>
        <div>
          <img src="https://ihadis.com/assets/index/mode/night.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
