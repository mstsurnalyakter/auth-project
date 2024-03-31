import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div className="space-x-5 mt-5 mb-28">
        <Link className="bg-purple-500 text-white px-3 py-2" to={"/"}>Home</Link>
        <Link className="bg-purple-500 text-white px-3 py-2" to={"/login"}>Login</Link>
        <Link className="bg-purple-500 text-white px-3 py-2" to={"/contact"}>Contact</Link>
    </div>
  )
}

export default Navbar