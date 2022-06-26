import React, { useReducer } from "react";
import { getWeek } from "../../utils/date-wrangler";
import reducer from "../../reducers/weekReducer";

const WeekPicker = ({ date }) => {
  const [week, dispatch] = useReducer(reducer, date, getWeek);
  return (
    <div className="datePicker">
      <button type="button" onClick={() => dispatch({ type: "PREV_WEEK" })}>
        Previous
      </button>
      <button type="button" onClick={() => dispatch({ type: "TODAY" })}>
        Today
      </button>
      <button type="button" onClick={() => dispatch({ type: "NEXT_WEEK" })}>
        Next
      </button>
      <span>
        {week.start.toDateString()} - {week.end.toDateString()}
      </span>
    </div>
  );
};

export default WeekPicker;
