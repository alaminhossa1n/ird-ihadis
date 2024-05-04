import { useState } from "react";

const Setting = () => {
  const [arabicValue, setArabicValue] = useState<number>(33);
  const [onubadValue, setOnubadValue] = useState<number>(19);

  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="">
      <div className=" bg-white rounded-lg p-3">
        <p className="text-center mb-2 font-bold">সেটিংস</p>

        <div>
          <p className="text-sm font-semibold">আরবি ফন্ট সিলেক্ট করুন</p>
          <select
            className="block appearance-none w-full bg-white border border-gray-300 px-4 py-3 pr-8 my-3 rounded-lg leading-tight focus:outline-none"
            defaultValue=""
          >
            <option value="option1">KFGQ</option>
            <option value="option2">Me Quran</option>
            <option value="option3">Al Mushaf</option>
            <option value="option3">Amiri</option>
            <option value="option3">Arial</option>
          </select>
        </div>

        <div className="mt-4">
          <p className="text-sm font-semibold">এরাবিক ফন্ট সাইজ</p>
          <div className="mt-1 flex gap-5 items-center">
            <input
              type="range"
              className="w-full h-2 accent-primary-color"
              min="0"
              max="40"
              defaultValue={23}
              onChange={(e) => setArabicValue(parseInt(e.target.value))}
            />
            <span>{arabicValue}</span>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-sm font-semibold">অনুবাদ ফন্ট সাইজ</p>
          <div className="mt-1 flex gap-5 items-center">
            <input
              type="range"
              className="w-full h-2 accent-primary-color"
              min="0"
              max="25"
              defaultValue={19}
              onChange={(e) => setOnubadValue(parseInt(e.target.value))}
            />
            <span>{onubadValue}</span>
          </div>
        </div>

        <div className="flex justify-between items-center mt-5">
          <p className="text-sm font-semibold">নাইট মোড</p>
          <div className="flex items-center">
            <label
              htmlFor="toggle"
              className="flex items-center cursor-pointer"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  id="toggle"
                  className="sr-only"
                  checked={isChecked}
                  onChange={handleToggle}
                />
                <div className="block bg-gray-200 w-8 h-5 rounded-full"></div>
                <div
                  className={`dot absolute left-1 top-1 w-3 h-3 rounded-full transition ${
                    isChecked
                      ? "transform translate-x-full bg-green-400"
                      : "bg-white"
                  }`}
                ></div>
              </div>
            </label>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#34AB82] text-white p-3 mt-5 rounded-lg">
        <h3 className="text-lg">আপনিও সদাকায়ে জারিয়াতে অংশ নিন</h3>
        <p className="text-sm mt-3">
          আপনার দান, সেটা ছোট হলেও, ইসলামের বার্তা ও হাদিস প্রচারে সহায়তা করবে।
          আমাদের কাজের অংশ হতে এবং এই গুরুত্বপূর্ণ কাজে সাহায্য করতে আমাদের
          প্রজেক্টে হাদিয়া দিন। ইনশাআল্লাহ এটি সদাকায়ে জারিয়াহ হিসেবে আল্লাহ্‌র
          কাছে কবুল হবে।
        </p>
        <div className="mt-3 flex justify-center ">
          <button className="bg-white rounded-lg text-primary-color px-5 py-2">
            সাপোর্ট করুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default Setting;
