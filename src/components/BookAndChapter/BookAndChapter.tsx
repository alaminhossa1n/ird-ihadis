import { useEffect, useState } from "react";
import "./BookAndChapter.css";

interface Book {
  id: number;
  icon: string;
  title: string;
  description: string;
  chapters: Chapter[];
}

interface Chapter {
  id: number;
  title: string;
  description: string;
}

const BookAndChapter = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [activeBook, setActiveBook] = useState<Book | null>(null);
  const [activeChapter, setActiveChapter] = useState<Chapter | null>(null);
  const [books, setBooks] = useState<Book[]>([]);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  const handleBookClick = (bookId: number) => {
    const selectedBook = books.find((book) => book.id === bookId);

    if (selectedBook) {
      setActiveBook(selectedBook);
      setActiveChapter(null);
    }
  };

  const handleChapterClick = (chapterId: number) => {
    if (activeBook) {
      const selectedChapter = activeBook.chapters.find(
        (chapter) => chapter.id === chapterId
      );

      if (selectedChapter) {
        setActiveChapter(selectedChapter);
        console.log(selectedChapter);
      }
    }
  };

  useEffect(() => {
    fetch("/book.json")
      .then((res) => res.json())
      .then((data: Book[]) => {
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
            {books.map((book) => (
              <div
                key={book.id}
                onClick={() => handleBookClick(book.id)}
                className={`w-full p-4 mt-5 hover:bg-[#EBFCF6] flex gap-5 items-center cursor-pointer space-y-2 rounded-lg ${
                  activeBook?.id === book.id ? "bg-[#EBFCF6]" : ""
                }`}
              >
                <div>
                  <p
                    className={`p-3 bg-gray-300 hover:bg-primary-color text-center rounded-lg text-white font-bold size-12 ${
                      activeBook?.id === book.id ? "bg-primary-color" : ""
                    }`}
                  >
                    {book.icon}
                  </p>
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
            {activeBook?.chapters.map((chapter) => (
              <div
                key={chapter.id}
                onClick={() => handleChapterClick(chapter.id)}
                className={`w-full p-4 mt-5 hover:bg-[#EBFCF6] flex gap-5 items-center cursor-pointer space-y-2 rounded-lg ${
                  activeChapter?.id === chapter.id ? "bg-[#EBFCF6]" : ""
                }`}
              >
                <div>
                  <p
                    className={`p-3 bg-gray-300 hover:bg-primary-color text-center rounded-lg text-white font-bold size-12 ${
                      activeChapter?.id === chapter.id ? "bg-primary-color" : ""
                    }`}
                  >
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
