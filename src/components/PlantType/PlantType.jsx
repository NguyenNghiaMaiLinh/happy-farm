function PlantType() {


  const items = [

    {
      title: "Rau sạch",
      description:
        "Đất trồng, giá thể và dinh dưỡng phù hợp cho rau ăn lá, rau gia vị tại nhà.",
      image: "/images/types/vegetable.jpg",
    },


    {
      title: "Hoa",
      description:
        "Giải pháp đất trồng và phân bón giúp hoa phát triển khỏe, nhiều màu sắc.",
      image: "/images/types/flower.jpg",
    },


    {
      title: "Cây ăn trái",
      description:
        "Dinh dưỡng chuyên biệt giúp cây ăn trái sinh trưởng mạnh, sai quả.",
      image: "/images/types/fruit.jpg",
    },


    {
      title: "Thủy canh",
      description:
        "Dung dịch dinh dưỡng và vật tư cho mô hình thủy canh tại nhà.",
      image: "/images/types/hydroponic.jpg",
    },

  ];





  return (


    <section className="bg-white section-padding">


      <div className="container">



        {/* HEADER */}

        <div className="mx-auto mb-14 max-w-3xl text-center">


          <h2
            className="
              text-3xl
              font-extrabold
              text-green-700
              lg:text-4xl
            "
          >

            Bạn muốn trồng gì?

          </h2>



          <p
            className="
              mt-4
              text-gray-600
              leading-7
            "
          >

            Chọn nhu cầu trồng cây,
            Happy Farm sẽ gợi ý sản phẩm phù hợp
            cho từng loại cây và không gian vườn.

          </p>


        </div>









        {/* CARD */}

        <div
          className="
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-4
          "
        >


          {
            items.map((item)=>(


              <div

                key={item.title}

                className="
                  group
                  overflow-hidden
                  rounded-3xl
                  bg-white
                  shadow-md
                  transition
                  duration-300
                  hover:-translate-y-3
                  hover:shadow-2xl
                "

              >



                {/* IMAGE */}

                <div className="relative overflow-hidden">


                  <img

                    src={item.image}

                    alt={item.title}

                    className="
                      h-64
                      w-full
                      object-cover
                      transition
                      duration-500
                      group-hover:scale-110
                    "

                  />



                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/40
                      to-transparent
                    "
                  />


                </div>









                {/* CONTENT */}

                <div className="p-6">


                  <h3
                    className="
                      text-xl
                      font-bold
                      text-gray-900
                    "
                  >

                    {item.title}

                  </h3>



                  <p
                    className="
                      mt-3
                      text-sm
                      leading-6
                      text-gray-600
                    "
                  >

                    {item.description}

                  </p>



                </div>




              </div>


            ))
          }



        </div>



      </div>


    </section>


  );

}


export default PlantType;