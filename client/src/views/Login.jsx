import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { signInSuccess } from "../redux/user/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post(`/api/auth/signin`, formData)
      .then(() => {
        navigate("/");
        console.log("User logged in successfully");
      })
      .catch((error) => {
        setErrorMessage(error.message);
        console.error("Error:", error);
      });
  };

  return (
    <div className="flex flex-col gap-5 py-20">
      <h1 className="text-center text-2xl font-semibold">Login</h1>
      <form
        className="flex flex-col w-96 mx-auto gap-3"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Username"
          className="border rounded-lg bg-slate-100 px-2 py-1"
          onChange={(e) => handleChange(e)}
          id="username"
        />
        <input
          type="password"
          placeholder="Password"
          className="border rounded-lg bg-slate-100 px-2 py-1"
          onChange={(e) => handleChange(e)}
          id="password"
        />
        <button type="submit" className="bg-slate-700 text-white py-1 rounded">
          Log In
        </button>
      </form>
      <h1 className="text-center text-red-600 font-semibold text-lg">
        {errorMessage && errorMessage}
      </h1>
      <div className="w-96 mx-auto flex gap-2">
        <div>Don't have an account?</div>
        <Link to="/register" className="text-blue-600">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
