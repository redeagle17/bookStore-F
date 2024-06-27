import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const [form, setForm] = useState({
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
    if (!form.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errors.email = "Email is invalid";
    }
    if (!form.password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = await validate();
    if (Object.keys(validationErrors).length === 0) {
      const userData = {
        email: form.email,
        password: form.password,
      };
      try {
        const res = await axios.post(
          "http://localhost:4001/book_store/users/sign_in",
          userData
        );
        if (res.data) {
          toast.success("Login successful!");
          document.getElementById("my_modal_3").close();
          localStorage.setItem("Users", JSON.stringify(res.data.user));
          setInterval(() => {
            window.location.reload();
          }, 1000);
        }
      } catch (err) {
        toast.error(err.response.data.message);
        setInterval(() => {}, 2000);
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
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit}>
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login</h3>
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
            <div className="form-control mt-4">
              <p className="label-text-alt">
                Don't have an account?
                <a
                  href="/signup"
                  className="label-text-alt link link-hover text-blue-600 underline cursor-pointer ml-3"
                >
                  Register
                </a>
              </p>
            </div>
            <div className="modal-action">
              <button className="modal-action mt-4 bg-blue-600 text-white px-3 py-2 rounded-md border hover:bg-blue-800 duration-300 cursor-pointer">
                Submit
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
