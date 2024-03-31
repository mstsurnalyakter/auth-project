import { Outlet } from "react-router"
import Navbar from "../components/Navbar/Navbar"


const Main = () => {
  return (
    <div className="flex items-center justify-center mb-10 space-x-5 flex-col">
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Main