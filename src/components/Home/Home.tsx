import BookAndChapter from "../BookAndChapter/BookAndChapter";

const Home = () => {
  return (
    <div className="flex w-full">
      <div className="">Side bar</div>
      <div className="flex gap-5 w-full bg-gray-100 rounded-xl p-4">
        <BookAndChapter />

        <div className="w-6/12 bg-white">Main</div>

        <div className="w-3/12 bg-white">setting</div>
      </div>
    </div>
  );
};

export default Home;
