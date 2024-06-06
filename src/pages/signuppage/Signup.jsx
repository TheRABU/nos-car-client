import { Link } from "react-router-dom";
import imgOfLogin from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../context-providers/AuthProvider";
const Signup = () => {
  const { createUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;

    createUser(name, email, password)
      .then((result) => {
        const user = result.user;
      })
      .then((err) => {
        console.log("Error occured: ", err);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <p className="py-6">Ashen amra Sign up kori...</p>
          <img src={imgOfLogin} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <h1 className="text-3xl text-center font-bold">Sign up now</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
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
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Confirm password"
                className="input input-bordered"
                required
              />
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
                  <span className=" relative text-white">Sign Up</span>
                </span>
              </button>
            </div>
          </form>
          <p className="my-4 text-center">
            Already have an account?{" "}
            <Link className="text-orange-600 font-bold" to="/login">
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
