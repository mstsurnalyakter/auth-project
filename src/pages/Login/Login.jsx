import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import  { AuthContext } from '../../provider/AuthProvider'


const Login = () => {
  const { singInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleSubmit = e =>{
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password);
    singInUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate("/")
      })
      .catch(error=>{
        console.error(error);
      });

  }

  const handleGoogleSignIn = () =>{
    signInWithGoogle()
    .then(result=>{
      console.log(result.user);
      navigate("/");
    })
    .catch(error=>console.error(error))
  }

  return (
    <div className="hero min-h-[500px] mb-20 bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
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
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <p>
              New here ? Please
              <Link to={"/register"}>
                <button className="btn btn-link">Register</button>
              </Link>
            </p>
            <p>
              <button onClick={handleGoogleSignIn} className="btn btn-ghost">
                Google
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login