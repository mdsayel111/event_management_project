import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/Firebase";
import { AuthContext } from "../Contexts/AuthContext";
import { useContext } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate, Link } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";


const googleProvider = new GoogleAuthProvider();

const SignIn = ({handleClick}) => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const path = useLocation();

  console.log(handleClick);

  function socialLogin(provider) {
    signInWithPopup(auth, provider)
      .then((result) => {
        Swal.fire({
          title: "success",
          text: "LogIn successful",
          icon: "success",
          confirmButtonText: "Ok",
        });
        navigate(path.state ? path.state : "/");
      })
      .catch((error) => {
        Swal.fire({
          title: "error",
          text: "This email already use",
          icon: "success",
          confirmButtonText: "Ok",
        });
      });
  }

  function handleLogin(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        Swal.fire({
          title: "success",
          text: "LogIn successful",
          icon: "success",
          confirmButtonText: "Ok",
        });
        navigate(path.state ? path.state : "/");
      })
      .catch((error) => {
        console.dir(error);
        Swal.fire({
          title: "error",
          text: "Your email and password doesn't match",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  }

  return (
    <div className="mt-8 " data-aos="zoom-in">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-3xl text-center font-bold text-primary">Login</h1>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body h-fit">
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <p className="mt-4">
                New in this site?{" "}
                <a onClick={()=>handleClick("SignUp")} className="font-semibold text-primary cursor-pointer">
                  Signup
                </a>
              </p>
              <div className="form-control mt-6">
                <button className="btn bg-primary">Login</button>
              </div>
              <div
                onClick={() => socialLogin(googleProvider)}
                className="flex justify-evenly mt-4 border-secondary border-2 p-2 rounded-md cursor-pointer"
              >
                <span className="text-text text-base font-bold">
                  SignIn With Google
                </span>{" "}
                <FcGoogle className="text-2xl cursor-pointer"></FcGoogle>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
