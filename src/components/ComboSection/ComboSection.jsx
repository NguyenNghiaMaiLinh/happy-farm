import ComboCard from "../ComboCard/ComboCard";

import combos from "../../data/combo";


function ComboSection() {


  return (

    <section className="bg-white py-20">


      <div className="container mx-auto px-4">



        {/* Title */}

        <div className="mb-12 text-center">


          <h2 className="text-4xl font-bold text-green-700">

            Combo trồng cây

          </h2>


          <p className="mx-auto mt-4 max-w-2xl text-gray-600">

            Giải pháp trọn gói cho ban công, sân thượng,
            vườn rau gia đình và cây ăn trái.

          </p>


        </div>







        {/* Combo Grid */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">


          {
            combos.map((combo)=>(


              <ComboCard

                key={combo.id}

                combo={combo}

              />


            ))
          }


        </div>





      </div>


    </section>

  );

}


export default ComboSection;