import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import {
    AddCustomer,
    AddProducts,
    AdminProducts,
    Checkout,
    Customers,
    CustomerView,
    Dashboard,
    Home,
    Login,
    Orders,
    OrderView,
    ProductDetails,
    Products,
    ProductView,
    Signup,
} from "./pages";
import { ToastContainer } from "react-toastify";

function App() {
    return (
        <BrowserRouter>
            <ToastContainer />
            <Routes>
                <Route path="/" element={<Home />} />
                {/* auth */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                {/* product */}
                <Route path="/products" element={<Products />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                {/* cart  */}
                <Route path="/checkout" element={<Checkout />} />
                {/* admin */}
                <Route path="/admin" element={<Dashboard />} />
                {/* customer  */}
                <Route path="/admin/customers" element={<Customers />} />
                <Route path="/admin/customer/new" element={<AddCustomer />} />
                <Route path="/admin/customer/:id" element={<CustomerView />} />
                {/* product  */}
                <Route path="/admin/products" element={<AdminProducts />} />
                <Route path="/admin/product/new" element={<AddProducts />} />
                <Route path="/admin/product/:id" element={<ProductView />} />
                {/* order  */}
                <Route path="/admin/orders" element={<Orders />} />
                <Route path="/admin/order/:id" element={<OrderView />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
