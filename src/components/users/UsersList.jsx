import React, { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import userReducer from "../../reducers/userReducer";

import "./user-list.css";
import { useReducer } from "react";
import getData from "../../utils/api";

const initialState = {
  isLoading: true,
  error: false,
  users: [],
};

const UsersList = () => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const { isLoading, error, users } = state;

  const [userIndex, setUserIndex] = useState(0);

  useEffect(() => {
    dispatch({ type: "FETCH_USERS_REQUEST" });

    getData("http://localhost:3001/users")
      .then((users) => {
        dispatch({ type: "FETCH_USERS_SUCCESS", payload: users });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_USERS_ERROR", payload: error });
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <p>
        <h3>{error.message}</h3>
      </p>
    );
  }

  const user = users[userIndex];

  return (
    <section className="flex-container algn-start ladi-keeping__users-list-block">
      <ul className="flex-30">
        {users.map((user, index) => (
          <li className={index === userIndex ? "selected" : ""} key={user.id}>
            <button
              className="btn"
              type="button"
              onClick={() => setUserIndex(index)}
            >
              {user.name}
            </button>
          </li>
        ))}
      </ul>
      {user && (
        <div className="ladi-keeping__users-details flex-70">
          <div className="user-details__name">
            <h2>{user.name}</h2>
          </div>
          <div className="user-details__more-info">
            <h4>{user.title}</h4>
            <p>{user.notes}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default UsersList;
