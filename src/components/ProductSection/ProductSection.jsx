import { useState } from "react";
import { Link } from "react-router-dom";

import ProductCard from "../ProductCard/ProductCard";

import products from "../../data/products";



function ProductSection() {


  const [category, setCategory] = useState("Tất cả");



  const categories = [

    "Tất cả",

    "Đất trồng",

    "Giá thể",

    "Phân hữu cơ",

    "Phân vô cơ",

  ];






  const filteredProducts =

    category === "Tất cả"

      ?

      products.slice(0, 8)

      :

      products.filter(

        (product) =>

          product.category === category

      );








  return (


    <section className="bg-gray-50 section-padding">



      <div className="container">






        {/* HEADER */}

        <div

          className="
            mb-12
            flex
            flex-col
            gap-6
            lg:flex-row
            lg:items-end
            lg:justify-between
          "

        >



          <div>


            <span

              className="
                inline-flex
                rounded-full
                bg-green-100
                px-5
                py-2
                text-sm
                font-bold
                text-green-700
              "

            >

              Sản phẩm nổi bật

            </span>







            <h2

              className="
                mt-5
                text-3xl
                font-extrabold
                text-green-700
                lg:text-4xl
              "

            >

              Sản phẩm Happy Farm

            </h2>








            <p

              className="
                mt-4
                max-w-2xl
                leading-7
                text-gray-600
              "

            >

              Các sản phẩm đất trồng, giá thể,
              phân hữu cơ, phân vô cơ và dinh dưỡng
              cây trồng được nhiều khách hàng tin dùng.

            </p>



          </div>









          <Link

            to="/products"

            className="
              inline-flex
              w-fit
              rounded-xl
              border-2
              border-green-600
              px-6
              py-3
              font-bold
              text-green-700
              transition
              hover:bg-green-600
              hover:text-white
            "

          >

            Xem tất cả

          </Link>




        </div>









        {/* FILTER */}

        <div

          className="
            mb-10
            flex
            flex-wrap
            gap-3
          "

        >



          {
            categories.map((item)=>(


              <button


                key={item}


                onClick={()=>setCategory(item)}



                className={

                  `

                  rounded-full

                  px-6

                  py-3

                  text-sm

                  font-bold

                  transition

                  duration-300


                  ${

                    category === item

                    ?

                    "bg-green-600 text-white shadow-md"

                    :

                    "border border-gray-200 bg-white text-gray-700 hover:border-green-600 hover:text-green-700"

                  }


                  `

                }


              >

                {item}


              </button>


            ))
          }


        </div>









        {/* PRODUCT GRID */}

        <div

          className="
            grid
            gap-8
            sm:grid-cols-2
            lg:grid-cols-4
          "

        >


          {
            filteredProducts.map((product)=>(


              <ProductCard

                key={product.id}

                product={product}

              />


            ))
          }


        </div>









        {/* MORE BUTTON */}

        <div className="mt-14 text-center">


          <Link

            to="/products"

            className="
              inline-flex
              rounded-xl
              bg-green-600
              px-8
              py-4
              font-bold
              text-white
              shadow-md
              transition
              hover:bg-green-700
            "

          >

            Xem thêm sản phẩm

          </Link>



        </div>




      </div>


    </section>


  );


}


export default ProductSection;