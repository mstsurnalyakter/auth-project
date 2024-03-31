import { Outlet } from "react-router"
import Navbar from "../components/Navbar/Navbar"


const Main = () => {
  return (
    <div className="">
      <Navbar />
      <div className="flex items-center justify-center mt-40">
        <Outlet />
      </div>
    </div>
  );
}

export default Main