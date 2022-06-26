import React, { useReducer, useRef, useEffect } from "react";
import data from "../../static.json";
import { FaArrowRight } from "react-icons/fa";
import { getUniqueValues } from "../../utils/get-unqiue-values";
import reducer from "../../reducers/bookableReducer";
import getData from "../../utils/api";
import Loading from "../loading/Loading";

const { sessions, days } = data;

const initialState = {
  group: "Rooms",
  bookableIndex: 0,
  hasDetails: true,
  bookables: [],
  isLoading: true,
  error: false,
  isPresenting: false,
};
const BookablesList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //unchanged variable setup
  //useRef import
  //assign ref to variable
  const timeRef = useRef(null);

  const {
    group,
    bookableIndex,
    bookables,
    hasDetails,
    isLoading,
    error,
    isPresenting,
  } = state;

  const groups = getUniqueValues(bookables, "group");

  const bookablesInGroup = bookables.filter((b) => b.group === group);

  const bookable = bookablesInGroup[bookableIndex];

  //load data
  useEffect(() => {
    dispatch({ type: "FETCH_BOOKABLES_REQUEST" });

    getData("http://localhost:3001/bookables")
      .then((bookables) =>
        dispatch({
          type: "FETCH_BOOKABLES_SUCCESS",
          payload: bookables,
        })
      )
      .catch((error) =>
        dispatch({ type: "FETCH_BOOKABLES_ERROR", payload: error })
      );
  }, []);

  //run after every render to manage presentation mode
  useEffect(() => {
    if (isPresenting) {
      scheduleNext();
    } else {
      clearNextTimeout();
    }
  });

  const toggleDetails = () => {
    dispatch({
      type: "TOGGLE_HAS_DETAILS",
    });
  };

  const nextBookable = () => {
    dispatch({ type: "NEXT_BOOKABLE", payload: false });
  };

  const changeBookable = (selectedIndex) => {
    dispatch({
      type: "SET_BOOKABLE",
      payload: selectedIndex,
    });
  };

  function scheduleNext() {
    if (timeRef.current === null) {
      //assign timer id to the ref's timerRef.current property
      timeRef.current = setTimeout(() => {
        timeRef.current = null;

        dispatch({ type: "NEXT_BOOKABLE", payload: true });
      }, 3000);
    }
  }

  function clearNextTimeout() {
    //clear the timer for the id held in the ref
    clearTimeout(timeRef.current);

    //set the value held in the ref to null
    timeRef.current = null;
  }

  const changeGroup = (event) => {
    dispatch({
      type: "SET_GROUP",
      payload: event.target.value,
    });

    //restart timer if a user switches groups in presentation mode
    if (isPresenting) {
      clearNextTimeout();
      scheduleNext();
    }
  };

  if (error) {
    return <p>{error.message}</p>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main className="flex-container">
      <div>
        <select value={group} onChange={changeGroup}>
          {groups.map((g) => (
            <option value={g} key={g}>
              {g}
            </option>
          ))}
        </select>
        <ul className="bookable-list flex-container direction-column align-center">
          {bookablesInGroup.map((b, i) => (
            <li key={b.title} className={i === bookableIndex ? "selected" : ""}>
              <button
                className="btn"
                type="button"
                onClick={() => changeBookable(i)}
              >
                {b.title}
              </button>
            </li>
          ))}
          <div>
            <button type="button" onClick={nextBookable} autoFocus>
              <span>
                <FaArrowRight />
                <span>Next</span>
              </span>
            </button>
          </div>
        </ul>
      </div>
      {bookable && (
        <div className="bookable-details margin-left-3 w-100">
          <div className="item">
            <div className="item-header flex-container align-center bg-color-blue padding-md">
              <h2 className="color-white">{bookable.title}</h2>
              <span className="controls margin-left-auto">
                <label className="color-white">
                  <input
                    type="checkbox"
                    checked={false}
                    onChange={toggleDetails}
                  />
                  Show Details
                </label>
              </span>
            </div>
            <p>{bookable.notes}</p>
            {hasDetails && (
              <div className="item-details">
                <h3>Availability</h3>
                <div className="bookable-availability">
                  <ul>
                    {bookable.days.sort().map((d) => (
                      <li key={d}>{days[d]}</li>
                    ))}
                  </ul>
                  <ul>
                    {bookable.sessions.map((s) => (
                      <li key={s}>{sessions[s]}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
};

export default BookablesList;
