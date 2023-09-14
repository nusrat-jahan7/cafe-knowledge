import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold">
        Bookmarked Blogs : {bookmarks.length}
      </h1>

      {bookmarks.map((bookmark, i) => (
        <Bookmark i={i} key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
};

export default Bookmarks;
