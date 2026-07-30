import { useState } from "react";

import ProductCard from "../components/ProductCard/ProductCard";
import products from "../data/products";



function Products() {


  const [category, setCategory] = useState("Tất cả");

  const [search, setSearch] = useState("");




  const categories = [

    "Tất cả",

    "Đất trồng",

    "Giá thể",

    "Phân hữu cơ",

    "Phân vô cơ",

    "Phân thủy canh",

    "Chế phẩm sinh học"

  ];







  const filteredProducts = products.filter((product)=>{


    const matchCategory =

      category === "Tất cả" ||

      product.category === category;





    const matchSearch =

      product.name

      .toLowerCase()

      .includes(

        search.toLowerCase()

      );





    return matchCategory && matchSearch;


  });








  return (


    <div className="min-h-screen bg-gray-50">







      {/* Banner */}

      <section className="bg-green-700 py-20 text-center text-white">


        <h1 className="text-4xl font-bold">

          Sản phẩm Happy Farm

        </h1>


        <p className="mx-auto mt-4 max-w-2xl text-green-100">

          Đất trồng, giá thể, phân bón và giải pháp
          dinh dưỡng cho mọi loại cây.

        </p>


      </section>









      <section className="container mx-auto px-4 py-16">





        {/* Search */}

        <div className="mb-10">


          <input

            type="text"

            placeholder="Tìm kiếm sản phẩm..."

            value={search}

            onChange={(e)=>setSearch(e.target.value)}

            className="w-full rounded-xl border px-5 py-4 outline-none focus:border-green-600"

          />


        </div>








        {/* Category */}

        <div className="mb-12 flex flex-wrap gap-3">


          {
            categories.map((item)=>(


              <button


                key={item}


                onClick={()=>setCategory(item)}


                className={

                  category === item

                  ?

                  "rounded-full bg-green-600 px-6 py-3 font-semibold text-white"

                  :

                  "rounded-full border px-6 py-3 hover:border-green-600 hover:text-green-700"

                }


              >

                {item}


              </button>


            ))
          }


        </div>









        {/* Product */}

        {

          filteredProducts.length > 0 ? (


            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">


              {
                filteredProducts.map((product)=>(


                  <ProductCard

                    key={product.id}

                    product={product}

                  />


                ))
              }


            </div>


          )

          :

          (

            <div className="py-20 text-center">


              <h2 className="text-2xl font-bold text-gray-700">

                Không tìm thấy sản phẩm

              </h2>


            </div>

          )


        }





      </section>




    </div>


  );


}



export default Products;