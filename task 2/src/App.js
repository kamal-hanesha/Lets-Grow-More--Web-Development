import React, { useState, useEffect } from "react";
import "./styles.css";
import Axios from "axios";
function App() {
  const [page1, setpage1] = useState(null);
  const [page2, setpage2] = useState(null);
  const fetchUsers = () => {
    Axios.get("https://reqres.in/api/users?page=1").then((response) => {
      console.log("Page 1 Fetched");
      setpage1(response.data.data);
    });
    Axios.get("https://reqres.in/api/users?page=2").then((response) => {
      console.log("Page 2 Fetched");
      setpage2(response.data.data);
    });
  };
  return (
    <div>
      <div className="nav">
        <button onClick={fetchUsers} type="button">
          Get Users
        </button>
        <a href="https://letsgrowmore.in" target="_blank">
          Lets Grow More
        </a>
      </div>
      <br />
      <br />
      <br />
      <br />
      <h1>Users:-</h1>
      {page1 &&
        page1.map((item) => {
          return (
            <blockquote>
              <div className="al">
                <div>
                  <p>
                    <b>Name :-</b> {item.first_name + " " + item.last_name}
                  </p>
                  <p>
                    <b>Email ID:- </b>
                    {item.email}
                  </p>
                  <br />
                </div>
                <img src={item.avatar} alt="user card" />
              </div>
            </blockquote>
          );
        })}
      {page2 &&
        page2.map((item) => {
          return (
            <blockquote>
              <div className="al">
                <div>
                  <p>
                    <b>Name :- </b>
                    {item.first_name + " " + item.last_name}
                  </p>
                  <p>
                    <b>Email ID:- </b>
                    {item.email}
                  </p>
                </div>
                <img src={item.avatar} alt="user details" />
              </div>
              <br />
            </blockquote>
          );
        })}
    </div>
  );
}
export default App;
