import React from "react";

const RelatedCart = ({ blog }) => {
  const { id, title, description, image, tags, likes, isSaved, createdAt } =
    blog || {};
  return (
    <div className="card">
      <a href="post.html">
        <img src={image} className="card-image" alt="" />
      </a>
      <div className="p-4">
        <a href="post.html" className="text-lg post-title lws-RelatedPostTitle">
          {title}
        </a>
        <div className="mb-0 tags">
          {tags?.map((tag) => (
            <span>#{tag},</span>
          ))}
        </div>
        <p>{createdAt}</p>
      </div>
    </div>
  );
};

export default RelatedCart;
