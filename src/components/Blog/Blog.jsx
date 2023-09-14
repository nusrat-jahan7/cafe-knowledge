import { PropTypes } from "prop-types";
import {  BiBookmarkHeart } from "react-icons/bi";

const Blog = ({ blog }) => {
  const { title, cover_img, author_name, author_img, read_time } = blog;

  return (
    <div className="my-4 border-b-2 pb-6">
      <img src={cover_img} alt="" />
      <div className="flex justify-between items-center">
        <div className="flex items-center mt-2 gap-4">
          <img
            className="w-14 text-gray-500 font-semibold"
            src={author_img}
            alt=""
          />
          <div>
            <h1> {author_name} </h1>
            <h1>June 15, 2016</h1>
          </div>
        </div>
        <div className="flex gap-4">
            <h1> {read_time} read  </h1>
            <button className="text-2xl"><BiBookmarkHeart/></button>
        </div>
      </div>
      <h1 className="text-3xl font-semibold mt-4">{title}</h1>
      <div className=" flex gap-4 my-4 text-gray-500 font-semibold">
        <h1>#beginners </h1>
        <h1>#programming</h1>
      </div>
      <a className=" text-blue-500 text-xl font-semibold underline" href="">Mark as read</a>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
