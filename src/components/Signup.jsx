import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const location = useLocation();
  const redirect = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  console.log(redirect);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = async () => {
    const errors = {};
    if (!form.name) errors.name = "Name is required";
    if (!form.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = "Email is invalid";
    }
    if (!form.password) {
      errors.password = "Password is required";
    } else if (form.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = await validate();
    if (Object.keys(validationErrors).length === 0) {
      const userData = {
        name: form.name,
        email: form.email,
        password: form.password,
      };
      try {
        const res = await axios.post(
          "http://localhost:4001/book_store/users/sign_up",
          userData
        );
        if (res.data) {
          toast.success("Signup successful!");
          setTimeout(() => {
            navigate(redirect, { replace: true });
          }, 2000);
        }
      } catch (err) {
        toast.error(err.response.data.message);
      }
      setForm({
        name: "",
        email: "",
        password: "",
      });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="modal-box">
        <form method="dialog" onSubmit={handleSubmit}>
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </Link>
          <h3 className="font-bold text-lg">Signup</h3>
          <div className="form-control mt-4">
            <span className="mb-2">Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your Name"
              className="input input-bordered"
            />
            {errors.name && (
              <p className="text-red-600 text-sm">{errors.name}</p>
            )}
          </div>
          <div className="form-control mt-4">
            <span className="mb-2">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="input input-bordered"
            />
            {errors.email && (
              <p className="text-red-600 text-sm">{errors.email}</p>
            )}
          </div>
          <div className="form-control mt-4">
            <span className="mb-2">Password</span>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="input input-bordered"
            />
            {errors.password && (
              <p className="text-red-600 text-sm">{errors.password}</p>
            )}
          </div>
          <div className="modal-action">
            <button className="modal-action mt-4 bg-blue-600 text-white px-3 py-2 rounded-md border hover:bg-blue-800 duration-300 cursor-pointer">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
