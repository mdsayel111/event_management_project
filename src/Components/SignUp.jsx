import { FcGoogle } from "react-icons/fc";
import { FaGithubSquare } from "react-icons/fa";
import { AiFillTwitterSquare } from "react-icons/ai";
import auth from "../Firebase/Firebase";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import {
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
const googleProvider = new GoogleAuthProvider();

const SignUp = ({handleClick}) => {
  const navigate = useNavigate();
  const path = useLocation();
  const {user, setUser} = useContext(AuthContext)
  console.log(handleClick);

  function socialLogin(provider) {
    signInWithPopup(auth, provider)
      .then((result) => {
        Swal.fire({
          title: "success",
          text: "Your account creat successful",
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

  function handleSubmit(e) {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (
      /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[a-zA-Z!@#$%^&*()_+0-9]{6,}$/.test(
        password
      )
    ) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            setUser({...auth.currentUser})
            Swal.fire({
              title: "success",
              text: "Account creat successful",
              icon: "success",
              confirmButtonText: "Ok",
            });
            navigate(path.state ? path.state : "/");
          })
        })
        .catch((error) => {
          Swal.fire({
            title: "error",
            text: "This email already use",
            icon: "error",
            confirmButtonText: "Ok",
          });
        });
    } else {
      Swal.fire({
        title: "error",
        text: "Password must be : more than 6 characters, have a capital letter, have a special character",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  }

  return (
    <div className="mt-8" data-aos="zoom-in">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-3xl text-center font-bold text-primary">Signup</h1>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body h-fit">
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  required
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <p className="mt-4">
                Already have an account?{" "}
                <a onClick={()=>handleClick("SignIn")} className="cursor-pointer font-semibold text-primary">
                  SignIn
                </a>
              </p>
              <div className="form-control mt-6">
                <button className="btn bg-primary">Signup</button>
              </div>
            </form>
            <div
              onClick={() => socialLogin(googleProvider)}
              className="flex justify-evenly mt-4 border-secondary border-2 p-2 rounded-md cursor-pointer"
            >
              <span className="text-text text-base font-bold">
                SignUp With Google
              </span>{" "}
              <FcGoogle className="text-2xl cursor-pointer"></FcGoogle>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
