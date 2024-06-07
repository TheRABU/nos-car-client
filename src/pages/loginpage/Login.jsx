import { Link, useLocation, useNavigate } from "react-router-dom";
import imgOfLogin from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../context-providers/AuthProvider";
import axios from "axios";
const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const loggedInUser = result.loggedInUser;
        const user = { email };
        navigate(location?.state ? location?.state : "/");
        // get jwt access token
        axios.post("http://localhost:5000/jwt", user).then((res) => {
          console.log(res.data);
        });
      })
      .catch((error) => {
        console.log("Error occurred", error);
      });
  };
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <p className="py-6">Login na korle hobe naki bhai bolen ?!</p>
            <img src={imgOfLogin} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <h1 className="text-3xl text-center font-bold">Login now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
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
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                {/* <button className="btn bg-orange-700 hover:bg-red-100 text-white">
                  Login
                </button> */}

                <button
                  type="submit"
                  className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
                >
                  <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                  <span className="relative px-6 py-3 transition-all ease-out rounded-md group-hover:bg-opacity-0 duration-400">
                    <span className=" relative text-white">Log In</span>
                  </span>
                </button>
              </div>
            </form>
            <p className="my-4 text-center">
              New to Nos Car?{" "}
              <Link className="text-orange-600 font-bold" to="/sign-up">
                Sign Up
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
