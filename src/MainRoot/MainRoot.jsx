import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Share/Footer/Footer";
import Header from "../Share/Header/Header";


const MainRoot = () => {


const loacation = useLocation();
console.log(loacation)

    return (
        <>
        {
            loacation.pathname !== "/" &&  <Header></Header>
        }
          
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default MainRoot;