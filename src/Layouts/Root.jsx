import { Outlet } from "react-router-dom";
import NavBar from "../Shared/Navbar/NavBar";
import Footer from "../Shared/Footer/Footer";


const Root = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;