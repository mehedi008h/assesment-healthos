import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
    Checkout,
    Home,
    Login,
    ProductDetails,
    Products,
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
                {/* order  */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
