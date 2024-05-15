import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isSaveFun, sortFun } from "../../Features/SortSlice";

const Sidebar = () => {
  const [sortValue, setSortValue] = useState("");
  const [filterAll, setFilterAll] = useState("");
  const dispatch = useDispatch();
  const { isSaved, sort } = useSelector((state) => state.filter);

  if (sortValue.length > 0) {
    dispatch(sortFun(sortValue));
  } else {
    dispatch(sortFun(sortValue));
  }

  if (filterAll.length > 0) {
    dispatch(isSaveFun(filterAll));
  }
  return (
    <div>
      <aside>
        <div className="sidebar-items">
          <div className="sidebar-content">
            <h4>Sort</h4>
            <select
              onChange={(e) => setSortValue(e.target.value)}
              name="sort"
              id="lws-sort"
              className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
            >
              <option value="">Default</option>
              <option value="newest">Newest</option>
              <option value="most_liked">Most Liked</option>
            </select>
          </div>
          <div className="sidebar-content">
            <h4>Filter</h4>
            <div className="radio-group">
              {/* <!-- handle filter on button click --> */}
              <div onChange={() => setFilterAll("all")}>
                <input
                  type="radio"
                  name="filter"
                  id="lws-all"
                  className="radio"
                  checked={isSaved == "all"}
                />
                <label htmlFor="lws-all">All</label>
              </div>
              <div onChange={() => setFilterAll("saved")}>
                <input
                  type="radio"
                  name="filter"
                  id="lws-saved"
                  className="radio"
                  checked={isSaved == "saved"}
                />
                <label htmlFor="lws-saved">Saved</label>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
