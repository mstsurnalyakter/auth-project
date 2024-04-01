import { useContext } from "react";
import {  Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";



const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);
  const handleLoggedOut = ()=>{
    logOut()
    .then(()=>console.log("User logged out"))
    .catch(error=>{
      console.error(error)
    })
  }

  const navLink = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? "underline bg-purple-600 text-white px-3 py-2" : ""
        }
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "underline bg-purple-600 text-white px-3 py-2" : ""
        }
        to={"/register"}
      >
        Register
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "underline bg-purple-600 text-white px-3 py-2" : ""
        }
        to={"/login"}
      >
        Login
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "underline bg-purple-600 text-white px-3 py-2" : ""
        }
        to={"/order"}
      >
        Order
      </NavLink>
      {user &&
        <>
          <NavLink
            className={({ isActive }) =>
              isActive ? "underline bg-purple-600 text-white px-3 py-2" : ""
            }
            to={"/profile"}
          >
            Profile
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "underline bg-purple-600 text-white px-3 py-2" : ""
            }
            to={"/dashboard"}
          >
            Dashboard
          </NavLink>
        </>
      }
      <NavLink
        className={({ isActive }) =>
          isActive ? "underline bg-purple-600 text-white px-3 py-2" : ""
        }
        to={"/contact"}
      >
        Contact
      </NavLink>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-200">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-5"
            >
              {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-6">{navLink}</ul>
        </div>
        <div className="navbar-end">
          {user ?
            <>
              <span>{user.email}</span>
              <a onClick={handleLoggedOut} className="btn btn-sm">
            Sing Out
          </a>
            </>
            :
            <Link className="btn bg-slate-300" to={'/login'}>Login</Link>
          }

        </div>
      </div>
    </div>
  );
}

export default Navbar