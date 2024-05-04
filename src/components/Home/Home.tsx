import BookAndChapter from "../BookAndChapter/BookAndChapter";
import Main from "../Main/Main";
import Setting from "../Setting/Setting";
import Sidebar from "../Sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex w-full">
      <div className="flex items-center">
        <Sidebar />
      </div>
      <div className="flex gap-5 w-full bg-gray-100 rounded-xl p-4">
        <BookAndChapter />

        <div className="w-6/12">
          <Main />
        </div>

        <div className="w-3/12">
          <Setting />
        </div>
      </div>
    </div>
  );
};

export default Home;
