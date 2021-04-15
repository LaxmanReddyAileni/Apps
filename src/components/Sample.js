import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  sampleSelector,
  sampleUpdateAdd,
  sampleUpdateSubtract,
} from "../store/sample/sampleSlice";
function Sample() {
  const dispatch = useDispatch();
  const sample = useSelector(sampleSelector);
  const addhandler = () => {
    dispatch(sampleUpdateAdd(sample));
  };
  const substracthandler = () => {
    if (sample > 0) {
      dispatch(sampleUpdateSubtract(sample));
    }
  };
  return (
    <div>
      <button onClick={addhandler}>+</button>
      <button onClick={substracthandler}>-</button>
      <h4>{sample < 0 ? "0" : sample}</h4>
    </div>
  );
}

export default Sample;
