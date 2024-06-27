import React from 'react'
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="modal-box">
        <form method="dialog">
          <h3 className="font-bold text-lg">Contact Us</h3>
          <div className="form-control mt-4">
            <span className="mb-2">Name</span>
            <input
              type="text"
              placeholder="Enter your Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-4">
            <span className="mb-2">Email</span>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-4">
            <span className="mb-2">Message</span>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Type your message here"
            ></textarea>
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

export default Contact;