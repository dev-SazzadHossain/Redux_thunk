import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBlogs } from "../../Features/BlogSlice";
import SingleBlog from "../SingleBlog/SingleBlog";
import Particles from "react-tsparticles";
import { particlesConfig } from "../../Utils/config/partical.config";

const Blogs = () => {
  const { isLoading, isError, error, blogs } = useSelector(
    (state) => state.blogs
  );
  const dispatch = useDispatch();
  const { isSaved, sort } = useSelector((state) => state.filter);

  // ** sort filter ****
  let sortFilter = [...blogs];
  if (sort == "newest") {
    sortFilter?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  } else if (sort == "most_liked") {
    sortFilter?.sort((a, b) => b.likes - a.likes);
  } else if (sort == "") {
    sortFilter?.sort((a, b) => a - b);
  }
  // ** sort filter ****
  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  // ******** decide render *****
  let content;
  if (isLoading) {
    content = (
      <div>
        <p>Loading ...</p>
      </div>
    );
  } else if (!isLoading && isError) {
    content = (
      <div>
        <p>Error:{error && error}</p>
      </div>
    );
  } else if (!isLoading && !isError && blogs.length === 0) {
    content = (
      <div>
        <p>Blogs is Empty</p>
      </div>
    );
  } else if (!isLoading && !isError && blogs?.length > 0) {
    content = !sort.length
      ? blogs
          ?.filter((blog) =>
            isSaved == "saved" ? blog.isSaved === true : blog
          )
          .map((blog) => <SingleBlog key={blog?.id} blog={blog} />)
      : sortFilter
          ?.filter((blog) =>
            isSaved == "saved" ? blog.isSaved === true : blog
          )
          .map((blog) => <SingleBlog key={blog?.id} blog={blog} />);
  }

  return (
    <div>
      {/* <!-- posts container  --> */}

      {/* <!-- posts container ends --> */}
      <main className="post-container" id="lws-postContainer">
        {/* <!-- single post --> */}
        {content}
        {/* <!-- Single Post Ends --> */}
      </main>
    </div>
  );
};

export default Blogs;
