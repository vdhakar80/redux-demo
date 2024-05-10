import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserAsyncAction } from "../redux/AsyncActions/AsyncAction";

function AsyncActionDemo() {
  const data = useSelector((state) => state.user.data);
  const loading = useSelector((state) => state.user.loading);
  const dispatch = useDispatch();
  return (
    <div>
      <div>{loading ? "Loading..." : JSON.stringify(data)}</div>
      <button onClick={() => dispatch(fetchUserAsyncAction())}>fetch</button>
    </div>
  );
}

export default AsyncActionDemo;
