import { createBrowserRouter } from "react-router-dom";
import MainRoot from "../MainRoot/MainRoot";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import About from "../Pages/About/About";
import ErrorPage from "../Pages/errorPage/errorPage";
import Properties from "../Pages/Properties/Properties";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";



  
  const router = createBrowserRouter([
    {
      path: "/",
  errorElement: <ErrorPage></ErrorPage>,
      element: <MainRoot></MainRoot>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/properties",
            element: <Properties></Properties>
        },
        {
            path: "/blog",
            element: <Blog></Blog>
        },
        {
            path :"/about",
            element: <About></About>
        },

        {
          path: "/contact",
          element: <Contact></Contact>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        }
      ]
    },

  ]);
  
  export default router

