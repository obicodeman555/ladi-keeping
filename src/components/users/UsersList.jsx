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
    <section className="flex-container">
      <ul>
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
        <div className="user-details w-100 margin-left-3">
          <div className="header">
            <h2>{user.name}</h2>
          </div>
          <div>
            <h4>{user.title}</h4>
            <p>{user.notes}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default UsersList;
