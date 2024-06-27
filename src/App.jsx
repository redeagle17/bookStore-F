import React, { useContext } from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import Contacts from "./contacts/Contacts";
import { Toaster } from "react-hot-toast";
import AuthContext from "./context/AuthContext";

function App() {
  const { authUser } = useContext(AuthContext);
  return (
    <>
      <div className="dark:bg-white dark:text-black">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/contact"
            element={authUser ? <Contacts /> : <Navigate to="/signup" />}
          />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
