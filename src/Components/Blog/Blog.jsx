import React, { useEffect } from "react";
import RelatedBlog from "../RelatedBlog/RelatedBlog";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlog } from "../../Features/SingleBlogSlice";

const Blog = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLoading, isError, error, blog } = useSelector(
    (state) => state.blog
  );

  useEffect(() => {
    dispatch(fetchBlog(id));
  }, [id, dispatch]);

  const {
    id: blogId,
    title,
    description,
    image,
    tags,
    likes,
    isSaved,
    createAt,
  } = blog || {};

  // *** decided render ***
  let content;
  if (isLoading) {
    content = (
      <div>
        <p>Loading ....</p>
      </div>
    );
  } else if (!isLoading && isError) {
    content = (
      <div>
        <p>Error:{error}</p>
      </div>
    );
  } else if (!isLoading && !isError && !blog?.id) {
    content = (
      <div>
        <p>Not Found Blog</p>
      </div>
    );
  } else if (!isLoading && !isError && blog?.id) {
    content = (
      <main className="post">
        <img
          src={image}
          alt="githum"
          className="w-full rounded-md"
          id="lws-megaThumb"
        />
        <div>
          <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
            {title}
          </h1>
          <div className="tags" id="lws-singleTags">
            {tags?.map((tag) => (
              <span>#{tag},</span>
            ))}
          </div>
          <div className="btn-group">
            {/* <!-- handle like on button click --> */}
            <button className="like-btn" id="lws-singleLinks">
              <i className="fa-regular fa-thumbs-up"></i> {likes}
            </button>
            {/* <!-- handle save on button click --> */}
            {/* <!-- use ".active" className and "Saved" text  if a post is saved, other wise "Save" --> */}
            <button
              className="active save-btn"
              id="lws-singleSavedBtn"
              style={{
                color: isSaved === true && "red",
              }}
            >
              <i className="fa-regular fa-bookmark"></i> Saved
            </button>
          </div>
          <div className="mt-6">
            <p>{description}</p>
          </div>
        </div>
      </main>
    );
  }
  return (
    <div>
      {/* <!-- Go Home / Go Back --> */}
      <div className="container mt-8">
        <Link
          to="/"
          className="inline-block text-gray-600 home-btn"
          id="lws-goHome"
        >
          <i className="mr-2 fa-solid fa-house"></i>Go Home
        </Link>
      </div>

      <section className="post-page-container">
        {/* <!-- detailed post  --> */}
        {content}
        {/* <!-- detailed post ends --> */}
        {/* <!-- related posts --> */}
        <RelatedBlog id={id} tags={tags} />
        {/* <!-- related posts ends --> */}
      </section>
    </div>
  );
};

export default Blog;
