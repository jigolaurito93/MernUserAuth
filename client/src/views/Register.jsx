import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex flex-col gap-5 py-20">
      <h1 className="text-center text-2xl font-semibold">Register</h1>
      <form className="flex flex-col w-96 mx-auto gap-3" autocomplete="off">
        <input
          type="text"
          placeholder="Username"
          className="border rounded-lg bg-slate-100 px-2 py-1"
          autocomplete="off"
        />
        <input
          type="email"
          placeholder="Email"
          className="border rounded-lg bg-slate-100 px-2 py-1"
          autocomplete="off"
        />
        <input
          type="password"
          placeholder="Password"
          className="border rounded-lg bg-slate-100 px-2 py-1"
        />
        <button type="submit" className="bg-slate-700 text-white py-1 rounded">
          Register
        </button>
      </form>
      <div className="w-96 mx-auto flex gap-2">
        <div>Have an account?</div>
        <Link to="/login" className="text-blue-600">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Register;
