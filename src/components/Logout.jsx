import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import toast from "react-hot-toast";

function Logout() {
  const { authUser, setAuthUser } = useContext(AuthContext);
  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logout successfully");
      setInterval(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      toast.error(error.message);
      setInterval(() => {}, 2000);
    }
  };

  return (
    <div>
      <a
        className="bg-blue-600 text-white px-3 py-2 rounded-md border hover:bg-blue-800 duration-300 cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </a>
    </div>
  );
}

export default Logout;
