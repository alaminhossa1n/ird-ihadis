import { useEffect, useState } from "react";
import "./BookAndChapter.css";

const BookAndChapter = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [activeBook, setActiveBook] = useState(1);
  const [activeChapter, setActiveChapter] = useState(1);

  const [books, setBooks] = useState([]);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  const handleBookClick = (bookId: number) => {
    const activeBook = books.find((book) => book.id === bookId);

    setActiveBook(activeBook);

    console.log(activeBook);
  };

  const handleChapterClick = (chapterId: number) => {
    const activeChapter = activeBook.chapters.find(
      (chapter) => chapter.id === chapterId
    );

    setActiveChapter(activeChapter);

    console.log(activeChapter);
  };

  useEffect(() => {
    fetch("/book.json")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);

  return (
    <div className="w-3/12 bg-white rounded-lg">
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => handleTabClick(1)}
          className={`${
            activeTab === 1 ? "bg-primary-color text-white" : ""
          } flex-1 inline-block py-4 px-4 text-center focus:outline-none rounded-t-lg`}
        >
          বই
        </button>
        <button
          onClick={() => handleTabClick(2)}
          className={`${
            activeTab === 2 ? "bg-primary-color text-white" : ""
          } flex-1 inline-block py-4 px-4 text-center focus:outline-none rounded-t-lg`}
        >
          অধ্যায়
        </button>
      </div>
      <div className="p-4">
        {activeTab === 1 && (
          <div>
            <input
              className="w-full bg-gray-100 border-2 px-10 py-3 rounded-lg focus:outline-none icon-input"
              type="text"
              placeholder="Search For Filter"
            />
            {books &&
              books.map((book) => (
                <div
                  key={book.id}
                  onClick={() => handleBookClick(book.id)}
                  className={`w-full p-4 mt-5 hover:bg-[#EBFCF6] flex gap-5 items-center cursor-pointer space-y-2 rounded-lg ${
                    activeBook.id === book.id ? "bg-[#EBFCF6]" : ""
                  }`}
                >
                  <div>
                    <p className="border p-2">{book.icon}</p>
                  </div>
                  <div>
                    <p>{book.title}</p>
                    <p className="text-gray-400">{book.description}</p>
                  </div>
                </div>
              ))}
          </div>
        )}
        {activeTab === 2 && (
          <div>
            {activeBook &&
              activeBook?.chapters?.map((chapter) => (
                <div
                  key={chapter.id}
                  onClick={() => handleChapterClick(chapter.id)}
                  className={`w-full p-4 mt-5 hover:bg-[#EBFCF6] flex gap-5 items-center cursor-pointer space-y-2 rounded-lg ${
                    activeChapter.id === chapter.id ? "bg-[#EBFCF6]" : ""
                  }`}
                >
                  <div>
                    <p className="p-3 bg-gray-300 hover:bg-primary-color text-center rounded-lg text-white font-bold size-12">
                      {chapter.id}
                    </p>
                  </div>
                  <div>
                    <p>{chapter.title}</p>
                    <p className="text-gray-400">{chapter.description}</p>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookAndChapter;
