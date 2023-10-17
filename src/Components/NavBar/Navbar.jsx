import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import auth from "../../Firebase/Firebase";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const path = useLocation();
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate()

  function logOut() {
    signOut(auth)
      .then(() => {
        setUser(null);
        navigate("/")
      })
      .catch((error) => {
        // An error happened.
      });
  }

  const li = user ? (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/booked"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Booked
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contactus"
          end
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Contact Us
        </NavLink>
      </li>
    </>
  ) : (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/booked"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Booked
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contactus"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/signuporsignin"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          SignUp Or SignIn
        </NavLink>
      </li>
    </>
  );

  return (
    <div
      className={`navbar p-0 ${
        path.pathname == "/" ? "bg-[#D5E0E3]" : "bg-white"
      }  px-8 sticky top-0 z-10`}
    >
      <div className="navbar-start w-full lg:w-[50%] justify-between lg:justify-start">
        <div className="dropdown order-2">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box right-0 w-max"
          >
            {user ? (
              <li>
                <div className="block bg-primary">
                  <div className="flex flex-col items-center gap-4 text-white hover:text-text">
                    <div className="avatar">
                      <div className="w-6 rounded-xl">
                        <img
                          src={
                            user?.photoURL ||
                            "https://i.ibb.co/Q64yrv1/user-128.png"
                          }
                        />
                      </div>
                    </div>
                    <h1 className="text-sm font-bold text-white">
                      {user?.displayName || "User"}
                    </h1>
                  </div>
                </div>
              </li>
            ) : (
              <></>
            )}
            {li}
            {user ? (
              <li>
                <div className=" bg-primary flex justify-center py-2">
                  <a onClick={logOut} className="hover:text-text text-white">
                    Log Out
                  </a>
                </div>
              </li>
            ) : (
              <></>
            )}
          </ul>
        </div>
        <Link
          to={"/"}
          className="flex cursor-pointer text-secondary items-center normal-case text-lg lg:text-xl font-extrabold"
        >
          <img
            className="lg:w-[50px] w-[30px] mr-2 lg:mr-4 lg"
            src="https://i.ibb.co/dfKFQkL/45e47e7e-d9cc-4eed-a286-af13a0e2c8b6-20231008-233905-0000.png"
            alt="logo"
          />
          <span className="hidden md:inline">Event Manager</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{li}</ul>
      </div>
      {user ? (
        <div className="navbar-end lg:inline-flex hidden">
          <div className="hidden lg:block">
            <div className="flex flex-row-reverse items-center gap-4">
              <div className="avatar">
                <div className="w-10 rounded-xl mr-4">
                  <img
                    src={
                      user?.photoURL || "https://i.ibb.co/Q64yrv1/user-128.png"
                    }
                  />
                </div>
              </div>
              <h1 className="text-sm font-bold text-primary">
                {user ? user.displayName : "User"}
              </h1>
            </div>
          </div>
          <a
            onClick={logOut}
            className="btn bg-primary hover:text-text text-white"
          >
            Log Out
          </a>
        </div>
      ) : (
        <div className="navbar-end lg:inline-flex hidden">
          <Link
            to={"/signuporsignin"}
            className="btn bg-primary hover:text-text text-white"
          >
            SignUP Or SignIn
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
