import React, { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import "./user-picker.css";

const UserPicker = () => {
  //set an empty list of users as initial value
  const [users, setUsers] = useState(null);

  //calls effect functions after rendering
  useEffect(() => {
    //browser api to retrieve the list of users from the database
    fetch("http://localhost:3001/users")
      //convert returned string to json object
      .then((res) => res.json())

      //update state with loaded users
      .then((data) => setUsers(data));
  }, []);

  if (users === null) {
    return <Loading />;
  }
  return (
    <div className="user-select__block">
      <select name="" id="">
        {users.map((user) => (
          <option key={user.id}>{user.name}</option>
        ))}
      </select>
    </div>
  );
};

export default UserPicker;
