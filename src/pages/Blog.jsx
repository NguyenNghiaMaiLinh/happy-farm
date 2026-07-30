import { Link } from "react-router-dom";
import {
  Leaf,
  Sprout,
  Flower2,
} from "lucide-react";


function Blog() {


  const posts = [

    {
      id: 1,

      title: "Cách chọn đất trồng rau sạch tại nhà",

      description:
        "Hướng dẫn lựa chọn đất sạch, giá thể phù hợp giúp rau phát triển khỏe mạnh.",

      icon: Leaf,

    },


    {
      id: 2,

      title: "Phân hữu cơ và cách sử dụng hiệu quả",

      description:
        "Tìm hiểu cách dùng phân bò, phân gà, phân cá để cải tạo đất và nuôi cây.",

      icon: Sprout,

    },


    {
      id: 3,

      title: "Kỹ thuật chăm sóc cây ăn trái",

      description:
        "Các bước bón phân, chăm sóc giúp cây sinh trưởng tốt và cho năng suất cao.",

      icon: Flower2,

    },

  ];



  return (

    <div className="bg-gray-50 min-h-screen">


      {/* Banner */}

      <section className="bg-green-700 py-20 text-center text-white">


        <h1 className="text-4xl font-bold">

          Kiến thức nông nghiệp

        </h1>


        <p className="mx-auto mt-4 max-w-2xl text-green-100">

          Chia sẻ kinh nghiệm trồng cây, sử dụng đất và phân bón từ Happy Farm.

        </p>


      </section>







      {/* Blog list */}

      <section className="container mx-auto px-4 py-16">


        <div className="grid gap-8 md:grid-cols-3">



          {
            posts.map((post) => {


              const Icon = post.icon;



              return (

                <article

                  key={post.id}

                  className="rounded-3xl bg-white p-8 shadow-md transition hover:-translate-y-2 hover:shadow-xl"

                >


                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-700">

                    <Icon size={28}/>

                  </div>




                  <h2 className="mt-6 text-2xl font-bold">

                    {post.title}

                  </h2>




                  <p className="mt-4 text-gray-600">

                    {post.description}

                  </p>





                  <Link

                    to="/contact"

                    className="mt-6 inline-block font-semibold text-green-700 hover:text-green-900"

                  >

                    Tư vấn thêm →

                  </Link>



                </article>

              );


            })
          }



        </div>


      </section>



    </div>

  );


}


export default Blog;