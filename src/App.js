import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
    AddCustomer,
    AddProducts,
    AdminProducts,
    Checkout,
    Customers,
    Dashboard,
    Home,
    Login,
    Orders,
    ProductDetails,
    Products,
    ProductView,
    Signup,
} from "./pages";

function App() {
    return (
        <BrowserRouter>
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
                <Route path="/admin/customers" element={<Customers />} />
                <Route path="/admin/customer/new" element={<AddCustomer />} />
                <Route path="/admin/products" element={<AdminProducts />} />
                <Route path="/admin/product/new" element={<AddProducts />} />
                <Route path="/admin/product/:id" element={<ProductView />} />
                <Route path="/admin/orders" element={<Orders />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
