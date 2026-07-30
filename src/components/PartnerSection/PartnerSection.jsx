function PartnerSection() {


  const partners = [

    {
      id:1,
      name:"Tribat",
      description:"Đất sạch & giá thể",
      logo:"T"
    },

    {
      id:2,
      name:"Đầu Trâu",
      description:"Phân bón",
      logo:"Đ"
    },

    {
      id:3,
      name:"Phú Mỹ",
      description:"Phân Ure",
      logo:"P"
    },

    {
      id:4,
      name:"Trichoderma",
      description:"Vi sinh cải tạo đất",
      logo:"T"
    },

    {
      id:5,
      name:"Happy Farm",
      description:"Giải pháp làm vườn",
      logo:"H"
    },

    {
      id:6,
      name:"Organic",
      description:"Phân hữu cơ",
      logo:"O"
    },

  ];




  return (

    <section className="bg-gray-50 section-padding">


      <div className="container">


        {/* TITLE */}

        <div className="mx-auto mb-14 max-w-3xl text-center">


          <h2
            className="
              text-3xl
              font-extrabold
              text-green-700
              lg:text-4xl
            "
          >

            Thương hiệu đồng hành

          </h2>



          <p
            className="
              mt-4
              text-gray-600
              leading-7
            "
          >

            Happy Farm hợp tác cùng các thương hiệu uy tín
            trong lĩnh vực đất trồng, giá thể, phân bón
            và giải pháp dinh dưỡng cho cây trồng.

          </p>


        </div>









        {/* PARTNER GRID */}

        <div
          className="
            grid
            grid-cols-2
            gap-5
            md:grid-cols-3
            lg:grid-cols-6
          "
        >



          {
            partners.map((partner)=>(


              <div

                key={partner.id}

                className="
                  group
                  rounded-3xl
                  bg-white
                  p-6
                  text-center
                  shadow-sm
                  transition
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                "

              >




                <div
                  className="
                    mx-auto
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-2xl
                    bg-green-100
                    text-3xl
                    font-extrabold
                    text-green-700
                    transition
                    group-hover:bg-green-600
                    group-hover:text-white
                  "
                >

                  {partner.logo}


                </div>





                <h3
                  className="
                    mt-5
                    font-bold
                    text-gray-800
                  "
                >

                  {partner.name}


                </h3>




                <p
                  className="
                    mt-2
                    text-sm
                    leading-6
                    text-gray-500
                  "
                >

                  {partner.description}


                </p>




              </div>


            ))
          }



        </div>


      </div>


    </section>

  );


}


export default PartnerSection;