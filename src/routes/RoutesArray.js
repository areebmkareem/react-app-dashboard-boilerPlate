import AddProduct from "../components/products/addProduct/AddProduct";
import Login from "../components/auth/Login";
import Home from "../components/home/Home";
import Users from "../components/users/Users";

const RoutesArray = [
  {
    path: "/login",

    component: Login
  },
  {
    path: "/",
    exact: true,
    component: AddProduct
  },

  {
    path: "/users",

    component: Users
  }
];

export default RoutesArray;
