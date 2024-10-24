import { Outlet } from "react-router-dom";
import Footer from "../Routes/Shared/Footer/Footer";
import NavBar from "../Routes/Shared/Navbar/NavBar";


const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;