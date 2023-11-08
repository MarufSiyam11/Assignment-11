import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import NavBar from "../Pages/shared/NavBar/NavBar";
import Services from "../Pages/Home/Services/Services";
const Main = () => {
    return (
        <div>
           <NavBar></NavBar>
           <Services></Services>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;