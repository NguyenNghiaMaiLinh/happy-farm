import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Check,
  Phone,
  MessageCircle,
  Leaf,
} from "lucide-react";

import products from "../data/products";


function ProductDetail() {


  const { id } = useParams();


  const product = products.find(
    (item) => item.id === Number(id)
  );



  if (!product) {

    return (

      <div className="flex min-h-screen items-center justify-center">

        <h1 className="text-3xl font-bold text-red-600">

          Không tìm thấy sản phẩm

        </h1>

      </div>

    );

  }





  return (

    <div className="bg-gray-50 py-16">


      <div className="container mx-auto px-4">



        <Link

          to="/products"

          className="mb-8 flex items-center gap-2 text-green-700"

        >

          <ArrowLeft size={20}/>

          Quay lại sản phẩm

        </Link>







        <div className="rounded-3xl bg-white p-8 shadow-xl">





          <div className="grid gap-10 lg:grid-cols-2">





            {/* Image */}

            <div>


              <img

                src={product.image}

                alt={product.name}

                className="h-[500px] w-full rounded-3xl object-cover"

              />


            </div>








            {/* Info */}

            <div>



              <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">

                {product.category}

              </span>





              <h1 className="mt-6 text-4xl font-bold text-gray-800">

                {product.name}

              </h1>







              <div className="mt-5 flex gap-4">


                <span className="text-3xl font-bold text-green-700">

                  {product.price}

                </span>



                {
                  product.oldPrice && (

                    <span className="text-xl text-gray-400 line-through">

                      {product.oldPrice}

                    </span>

                  )
                }


              </div>







              <p className="mt-6 leading-8 text-gray-600">

                {product.description}

              </p>








              <div className="mt-8 grid gap-4 sm:grid-cols-2">


                <a

                  href="tel:0934073275"

                  className="flex items-center justify-center gap-3 rounded-xl bg-green-600 py-4 font-bold text-white hover:bg-green-700"

                >

                  <Phone size={20}/>

                  Gọi tư vấn

                </a>





                <a

                  href="#"

                  className="flex items-center justify-center gap-3 rounded-xl border-2 border-green-600 py-4 font-bold text-green-700 hover:bg-green-600 hover:text-white"

                >

                  <MessageCircle size={20}/>

                  Chat Zalo

                </a>



              </div>


            </div>



          </div>









          {/* Detail */}

          <div className="mt-16 grid gap-8 md:grid-cols-2">






            {/* Benefits */}

            <div className="rounded-3xl bg-green-50 p-8">


              <h2 className="flex items-center gap-2 text-2xl font-bold text-green-700">

                <Leaf/>

                Công dụng nổi bật

              </h2>


              <ul className="mt-5 space-y-3">


                {
                  product.benefits?.map((item,index)=>(

                    <li

                      key={index}

                      className="flex gap-3"

                    >

                      <Check className="text-green-600"/>

                      {item}

                    </li>

                  ))
                }


              </ul>


            </div>








            {/* Ingredients */}

            <div className="rounded-3xl bg-gray-100 p-8">


              <h2 className="text-2xl font-bold text-gray-800">

                Thành phần

              </h2>


              <ul className="mt-5 space-y-3">


                {
                  product.ingredients?.map((item,index)=>(

                    <li

                      key={index}

                      className="flex gap-3"

                    >

                      <Check className="text-green-600"/>

                      {item}

                    </li>

                  ))
                }


              </ul>


            </div>



          </div>









          {/* Usage */}

          <div className="mt-8 rounded-3xl bg-white border p-8">


            <h2 className="text-2xl font-bold text-green-700">

              Hướng dẫn sử dụng

            </h2>


            <p className="mt-4 leading-8 text-gray-600">

              {product.usage}

            </p>


          </div>









          {/* Suitable */}

          <div className="mt-8 rounded-3xl bg-green-700 p-8 text-white">


            <h2 className="text-2xl font-bold">

              Phù hợp cho

            </h2>


            <div className="mt-5 flex flex-wrap gap-3">


              {
                product.suitableFor?.map((item,index)=>(

                  <span

                    key={index}

                    className="rounded-full bg-white/20 px-5 py-2"

                  >

                    {item}

                  </span>


                ))
              }


            </div>


          </div>



        </div>


      </div>


    </div>

  );

}


export default ProductDetail;