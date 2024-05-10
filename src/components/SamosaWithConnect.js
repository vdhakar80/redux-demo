import React from "react";
import { connect } from "react-redux";
import { buySamosa, makeSamosa } from "../redux/samosa/samosaAction";

function SamosaWithConnect(props) {
  return (
    <div>
      <div>
        Number of Samosas: <b>{props.number_of_samosas}</b>
      </div>
      <button onClick={() => props.buy_samosa()}>Buy</button>
      <button onClick={() => props.make_samosa()}>Make</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    number_of_samosas: state.samosa.number_of_samosas,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buy_samosa: () => dispatch(buySamosa()),
    make_samosa: () => dispatch(makeSamosa()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SamosaWithConnect);
