import React from "react";
import UsersList from "./UsersList";
import "./user-page.css";

const Users = () => {
  return (
    <section className="ladi-keeping__users-block">
      <div className="container">
        <UsersList />
      </div>
    </section>
  );
};

export default Users;
