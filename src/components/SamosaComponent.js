import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buySamosa, makeSamosa } from "../redux/samosa/samosaAction";

function SamosaComponent() {
  const count = useSelector((state) => state.samosa.number_of_samosas);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        Number of Samosas: <b>{count}</b>
      </div>
      <button onClick={() => dispatch(buySamosa())}>Buy</button>
      <button onClick={() => dispatch(makeSamosa())}>Make</button>
    </div>
  );
}

export default SamosaComponent;
