import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedBlogs } from "../../Features/RelatedBlogSlice";
import RelatedCart from "./RelatedCart";

const RelatedBlog = ({ id, tags }) => {
  const dispatch = useDispatch();
  const { isLoading, isError, error, relatedBlog } = useSelector(
    (state) => state.relatedBlog
  );

  useEffect(() => {
    dispatch(fetchRelatedBlogs({ id, tags }));
  }, [id, tags, dispatch]);

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
        <p>Error:{error}</p>
      </div>
    );
  } else if (!isLoading && !isError && relatedBlog.length === 0) {
    content = (
      <div>
        <p>Blogs is Empty</p>
      </div>
    );
  } else if (!isLoading && !isError && relatedBlog?.length > 0) {
    content = relatedBlog?.map((blog) => (
      <RelatedCart key={blog?.id} blog={blog} />
    ));
  }

  return (
    <div>
      {" "}
      <aside>
        <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
          Related Posts
        </h4>
        <div className="space-y-4 related-post-container">
          {/* <!-- related post  --> */}
          {content}
          {/* <!-- related post ends --> */}
        </div>
      </aside>
    </div>
  );
};

export default RelatedBlog;
