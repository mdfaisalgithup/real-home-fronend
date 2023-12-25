import { NavLink } from "react-router-dom";
import "./NavBar.css"
import { RxAvatar } from "react-icons/rx";

const NavBar = () => {
    return (
     

<div className="mainNavbar">


        <div>
        <img src="https://www.demoapus-wp1.com/homeo/wp-content/uploads/2020/02/logo-1.png" alt="" />
        </div>

<div>

<div className="rightMenuStyle">
<div className="rightMenu">
<NavLink to="/">Home</NavLink>
<NavLink to="/properties">Properties</NavLink>
<NavLink to="/blog">Blog</NavLink>
<NavLink to="/contact">Contact</NavLink>
</div>


    <div className="leftBorderStyle"></div>
<div className="rightZero">

<RxAvatar className="iconStyle"></RxAvatar>
<div className="linkStyle">
<NavLink to="/login">Login</NavLink> / <NavLink to="/register">Register</NavLink>
</div>
</div></div>

</div>

</div>







      
    );
};

export default NavBar;