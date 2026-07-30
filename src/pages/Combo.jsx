import { Link } from "react-router-dom";
import {
  Check,
  Phone,
} from "lucide-react";

import combos from "../data/combo";



function Combo() {


  return (

    <div className="min-h-screen bg-gray-50">





      {/* Banner */}

      <section className="bg-green-700 py-20 text-center text-white">


        <h1 className="text-4xl font-bold">

          Combo trồng cây Happy Farm

        </h1>


        <p className="mx-auto mt-4 max-w-2xl text-lg text-green-100">

          Giải pháp trọn gói cho ban công,
          sân thượng, vườn rau gia đình và cây ăn trái.

        </p>


      </section>








      {/* Combo */}

      <section className="container mx-auto px-4 py-16">



        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">



          {
            combos.map((combo)=>(


              <div

                key={combo.id}

                className="group overflow-hidden rounded-3xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"

              >



                <div className="overflow-hidden">


                  <img

                    src={combo.image}

                    alt={combo.name}

                    className="h-60 w-full object-cover transition duration-500 group-hover:scale-110"

                  />


                </div>







                <div className="p-6">



                  <h2 className="text-2xl font-bold text-gray-800">

                    {combo.name}

                  </h2>





                  <div className="mt-3 text-xl font-bold text-green-700">

                    {combo.price}

                  </div>






                  <p className="mt-4 text-gray-600">

                    {combo.description}

                  </p>








                  {/* Features */}

                  <div className="mt-5 space-y-2">


                    {
                      combo.features?.map((item,index)=>(


                        <div

                          key={index}

                          className="flex items-center gap-2 text-sm"

                        >

                          <Check

                            size={18}

                            className="text-green-600"

                          />


                          {item}


                        </div>


                      ))
                    }


                  </div>








                  <Link

                    to="/contact"

                    className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700"

                  >

                    <Phone size={18}/>

                    Tư vấn combo


                  </Link>



                </div>



              </div>


            ))
          }



        </div>


      </section>



    </div>

  );

}


export default Combo;