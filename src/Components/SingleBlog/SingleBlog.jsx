import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchLike } from "../../Features/likeSlice";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import { fetchSaved, savedFilter } from "../../Features/savedSlice";
import { Tooltip } from "react-tooltip";

const SingleBlog = ({ blog }) => {
  const { id, title, description, image, tags, likes, isSaved, createdAt } =
    blog || {};
  const [like, setLike] = useState(likes);

  const dispatch = useDispatch();
  const { message, isLoading, isError, error } = useSelector(
    (state) => state.like
  );
  const handelUpdate = useCallback(
    (id) => {
      setLike((prv) => prv + 1);

      dispatch(fetchLike({ id, like: like + 1 }));
    },
    [like, dispatch]
  );

  const handelSaved = useCallback(
    (id, data) => {
      id && data === true
        ? dispatch(fetchSaved({ id, saved: true }))
        : dispatch(fetchSaved({ id, saved: false }));
    },
    [dispatch]
  );

  return (
    <div className="lws-card">
      <Link to={`/blog/${id}`}>
        <img
          src={image && image}
          className="lws-card-image"
          alt="Top Github Alternatives"
        />
      </Link>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{createdAt}</p>

          <SnackbarProvider autoHideDuration={1000} />

          <p
            data-tooltip-id="my-tooltip"
            className="lws-likeCount"
            style={{ cursor: "pointer" }}
            onClick={() => {
              handelUpdate(id, like);
              enqueueSnackbar(`Updated To Like`);
            }}
          >
            <i className="fa-regular fa-thumbs-up"></i>
            {like}
          </p>
          <Tooltip id="my-tooltip" place="top">
            Click TO LIKE
          </Tooltip>
        </div>
        <Link to={`/blog/${id}`} className="lws-postTitle">
          {" "}
          {title}
        </Link>
        <div className="lws-tags">
          {tags?.map((tag, index) => (
            <span key={index}>#{tag},</span>
          ))}
        </div>
        {/* <!-- Show this element if post is saved --> */}
        <div className="flex gap-2 mt-4">
          {isSaved ? (
            <span
              onClick={() => {
                handelSaved(id, false);
                enqueueSnackbar(`Unsaved`);
              }}
              className="lws-badge"
              style={{
                color: isSaved === true && "red",
              }}
            >
              {" "}
              unsaved{" "}
            </span>
          ) : (
            <span
              onClick={() => {
                handelSaved(id, true);
                enqueueSnackbar(`Saved`);
              }}
              className="lws-badge"
              style={{
                color: isSaved === true && "red",
              }}
            >
              {" "}
              Saved{" "}
            </span>
          )}
        </div>
        {/* <!-- Show this element if post is saved Ends --> */}
      </div>
    </div>
  );
};

export default SingleBlog;
