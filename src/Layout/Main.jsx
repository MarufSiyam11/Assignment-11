import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import NavBar from "../Pages/shared/NavBar/NavBar";
const Main = () => {
    return (
        <div>
           <NavBar></NavBar>
           
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;