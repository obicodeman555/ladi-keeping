import React, { useReducer } from "react";
import { getWeek } from "../../utils/date-wrangler";
import reducer from "../../reducers/weekReducer";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MdOutlineToday } from "react-icons/md";
import "./week-picker.css";

const WeekPicker = ({ date }) => {
  const [week, dispatch] = useReducer(reducer, date, getWeek);
  return (
    <div className="datePicker">
      <div className="flex-container align-center j-sp-btw">
        <span className="flex-container direction-column">
          <strong className="flex-container align-center j-ctr">
            {week.start.toDateString()} - {week.end.toDateString()}
          </strong>
        </span>
        <span className="flex-container direction-column datePicker-button__block">
          <button
            type="button"
            onClick={() => dispatch({ type: "PREV_WEEK" })}
            className="flex-container align-center j-ctr"
          >
            <FaArrowLeft />
            <strong className="margin-inline-start-1">Previous</strong>
          </button>
        </span>
        <span className="flex-container direction-column datePicker-button__block">
          <button
            type="button"
            onClick={() => dispatch({ type: "TODAY" })}
            className="flex-container align-center j-ctr"
          >
            <MdOutlineToday />
            <strong className="margin-inline-start-1">Today</strong>
          </button>
        </span>
        <span className="flex-container direction-column datePicker-button__block">
          <button
            type="button"
            onClick={() => dispatch({ type: "NEXT_WEEK" })}
            className="flex-container align-center j-ctr"
          >
            <strong className="margin-inline-end-1">Next</strong>
            <FaArrowRight />
          </button>
        </span>
      </div>
    </div>
  );
};

export default WeekPicker;
