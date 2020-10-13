import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = (props) => {
  const [state, setState] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", state)
      .then((res) => {
        console.log("login res", res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/bubblepage");
      })
      .catch((err) => {
        console.log("login information is incorrect");
      });
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>

      <form onSubmit={login}>
        <h2>Login</h2>
        <input
          name="username"
          type="text"
          placeholder="username"
          value={state.username}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          value={state.password}
          onChange={handleChange}
        />
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;

// make a post request to retrieve a token from the api
// when you have handled the token, navigate to the BubblePage route
