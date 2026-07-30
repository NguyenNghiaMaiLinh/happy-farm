import { Link } from "react-router-dom";

import {
  CalendarDays,
  Clock3,
  User,
  ArrowRight,
} from "lucide-react";


import { blogs } from "../data/blogs";



export default function Blog() {


  return (

    <main className="bg-gray-50 min-h-screen">


      {/* HERO */}

      <section
        className="
          bg-gradient-to-r
          from-green-700
          to-emerald-600
          py-16
        "
      >

        <div
          className="
            mx-auto
            max-w-[1400px]
            px-6
          "
        >

          <h1
            className="
              text-4xl
              font-black
              text-white
              md:text-5xl
            "
          >

            Kiến thức làm vườn

          </h1>


          <p
            className="
              mt-4
              max-w-3xl
              text-lg
              text-green-50
            "
          >

            Chia sẻ kinh nghiệm về đất sạch, giá thể,
            phân bón và thiết kế khu vườn xanh tại nhà.

          </p>


        </div>

      </section>








      {/* BLOG LIST */}

      <section
        className="
          mx-auto
          max-w-[1400px]
          px-6
          py-14
        "
      >



        <div
          className="
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-3
          "
        >



          {
            blogs.map((blog)=>(


              <article

                key={blog.id}

                className="
                  overflow-hidden
                  rounded-3xl
                  bg-white
                  shadow-sm
                  transition
                  hover:-translate-y-1
                  hover:shadow-xl
                "

              >




                {/* IMAGE */}

                <Link to={`/blog/${blog.slug}`}>

                  <div
                    className="
                      h-60
                      overflow-hidden
                      bg-gray-100
                    "
                  >

                    {
                      blog.image
                      ?

                      <img

                        src={blog.image}

                        alt={blog.title}

                        className="
                          h-full
                          w-full
                          object-cover
                          transition
                          duration-500
                          hover:scale-110
                        "

                        loading="lazy"

                      />

                      :

                      <div
                        className="
                          flex
                          h-full
                          items-center
                          justify-center
                          text-gray-400
                        "
                      >

                        Happy Farm

                      </div>

                    }


                  </div>


                </Link>









                {/* CONTENT */}

                <div
                  className="
                    p-6
                  "
                >



                  {/* CATEGORY */}

                  <span
                    className="
                      inline-block
                      rounded-full
                      bg-green-100
                      px-3
                      py-1
                      text-xs
                      font-bold
                      text-green-700
                    "
                  >

                    {blog.category}

                  </span>






                  <h2
                    className="
                      mt-4
                      line-clamp-2
                      text-xl
                      font-bold
                      leading-snug
                      text-gray-800
                    "
                  >

                    <Link

                      to={`/blog/${blog.slug}`}

                      className="
                        hover:text-green-700
                      "

                    >

                      {blog.title}

                    </Link>


                  </h2>






                  <p
                    className="
                      mt-3
                      line-clamp-3
                      text-sm
                      leading-6
                      text-gray-600
                    "
                  >

                    {blog.description}

                  </p>









                  {/* META */}

                  <div
                    className="
                      mt-5
                      flex
                      flex-wrap
                      gap-4
                      text-xs
                      text-gray-500
                    "
                  >



                    <div
                      className="
                        flex
                        items-center
                        gap-1
                      "
                    >

                      <CalendarDays size={14}/>

                      {blog.date}

                    </div>






                    <div
                      className="
                        flex
                        items-center
                        gap-1
                      "
                    >

                      <Clock3 size={14}/>

                      {blog.readTime}

                    </div>






                    <div
                      className="
                        flex
                        items-center
                        gap-1
                      "
                    >

                      <User size={14}/>

                      {blog.author}

                    </div>



                  </div>









                  {/* BUTTON */}

                  <Link

                    to={`/blog/${blog.slug}`}

                    className="
                      mt-6
                      inline-flex
                      items-center
                      gap-2
                      font-bold
                      text-green-700
                      hover:text-green-800
                    "

                  >

                    Đọc tiếp

                    <ArrowRight size={18}/>


                  </Link>



                </div>



              </article>



            ))
          }



        </div>




      </section>



    </main>


  );

}