import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
// import Blog from "./components/Blog/Blog"
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
    console.log(bookmarks);
  };

  return (
    <>
      <Header></Header>
      <div className="flex container mx-auto mt-4">
        <Blogs handleBookmark={handleBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  );
}

export default App;
