import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import UserLayout from "./components/layout/user";
import AdminLayout from "./components/layout/admin";
import HomePage from "./pages/homePage";
import Login from "./pages/login";
import SignUp from "./pages/signUp";
import DetailPage from "./pages/detailPage";
import CartPage from "./pages/cartPage";
import DashBoard from "./pages/admin/dashboard";
import UpdateProduct from "./pages/admin/products/updateProduct";
import AddProduct from "./pages/admin/products/addProduct";
import ListUsers from "./pages/admin/users/listUsers";
import UpdateUser from "./pages/admin/users/updateUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<UserLayout />}>
          <Route index element={<HomePage />} />
          <Route path="product-detail/:id" element={<DetailPage />} />
          <Route path="cart" element={<CartPage />} />
        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="product/add" element={<AddProduct />} />
          <Route path="product/update/:id" element={<UpdateProduct />} />
          <Route path="user" element={<ListUsers />} />
          <Route path="user/update/:id" element={<UpdateUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
