import { IoHomeOutline, IoPaperPlane } from "react-icons/io5";
import { GiBookshelf } from "react-icons/gi";
import { FaBookOpen, FaRegBookmark } from "react-icons/fa";
import { TbGridDots } from "react-icons/tb";

const Sidebar = () => {
  return (
    <div className="p-3 space-y-3">
      <IoHomeOutline className="hover:bg-primary-color text-gray-500 hover:text-white size-12 rounded-lg p-2" />
      <GiBookshelf className="bg-primary-color text-white size-12 rounded-lg p-2" />
      <FaBookOpen className="hover:bg-primary-color text-gray-500 hover:text-white size-12 rounded-lg p-2" />
      <FaRegBookmark className="hover:bg-primary-color text-gray-500 hover:text-white size-12 rounded-lg p-2" />
      <TbGridDots className="hover:bg-primary-color text-gray-500 hover:text-white size-12 rounded-lg p-2" />
      <IoPaperPlane className="hover:bg-primary-color text-gray-500 hover:text-white size-12 rounded-lg p-2" />
    </div>
  );
};

export default Sidebar;
