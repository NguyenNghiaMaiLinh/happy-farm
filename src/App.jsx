import { Routes, Route } from "react-router-dom";


// Layout
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Combo from "./pages/Combo";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/Contact";


// Floating
import FloatingContact from "./components/FloatingContact/FloatingContact";



function App() {


  return (

    <div className="min-h-screen flex flex-col">


      {/* Header */}

      <Header />





      {/* Content */}

      <main className="flex-1">


        <Routes>


          {/* Home */}

          <Route

            path="/"

            element={
              <Home />
            }

          />







          {/* Products */}

          <Route

            path="/products"

            element={
              <Products />
            }

          />





          <Route

            path="/products/:id"

            element={
              <ProductDetail />
            }

          />








          {/* Combo */}

          <Route

            path="/combo"

            element={
              <Combo />
            }

          />








          {/* Blog */}

          <Route

            path="/blog"

            element={
              <Blog />
            }

          />





          <Route

            path="/blog/:slug"

            element={
              <BlogDetail />
            }

          />








          {/* Contact */}

          <Route

            path="/contact"

            element={
              <Contact />
            }

          />








          {/* 404 */}

          <Route

            path="*"

            element={


              <div
                className="
                  min-h-screen
                  flex
                  items-center
                  justify-center
                  bg-gray-50
                "
              >


                <div
                  className="
                    text-center
                  "
                >


                  <h1
                    className="
                      text-6xl
                      font-bold
                      text-green-700
                    "
                  >

                    404

                  </h1>




                  <p
                    className="
                      mt-4
                      text-gray-600
                    "
                  >

                    Trang bạn tìm kiếm không tồn tại.

                  </p>





                  <a

                    href="/"

                    className="
                      mt-6
                      inline-block
                      rounded-xl
                      bg-green-700
                      px-6
                      py-3
                      text-white
                      hover:bg-green-800
                    "

                  >

                    Về trang chủ

                  </a>



                </div>



              </div>


            }

          />



        </Routes>


      </main>








      {/* Footer */}

      <Footer />







      {/* Floating Button */}

      <FloatingContact />



    </div>

  );

}


export default App;