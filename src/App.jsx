import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Combo from "./pages/Combo";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import FloatingContact from "./components/FloatingContact/FloatingContact";

function App() {
  return (
    <>
      <Routes>
        {/* Trang chủ */}
        <Route path="/" element={<Home />} />

        {/* Danh sách sản phẩm */}
        <Route path="/products" element={<Products />} />

        {/* Chi tiết sản phẩm */}
        <Route path="/products/:id" element={<ProductDetail />} />

        {/* Combo */}
        <Route path="/combo" element={<Combo />} />

        {/* Blog */}
        <Route path="/blog" element={<Blog />} />

        {/* Liên hệ */}
        <Route path="/contact" element={<Contact />} />

        {/* Không tìm thấy */}
        <Route
          path="*"
          element={
            <div className="flex min-h-screen items-center justify-center">
              <h1 className="text-4xl font-bold text-green-700">
                404 - Không tìm thấy trang
              </h1>
            </div>
          }
        />
      </Routes>

      {/* Floating Contact Widget */}
      <FloatingContact />
    </>
  );
}

export default App;