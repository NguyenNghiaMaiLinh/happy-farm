import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import {
  CalendarDays,
  Clock3,
  User,
  ChevronRight,
  Share2,
  Copy,
} from "lucide-react";

import { blogs } from "../data/blogs";



export default function BlogDetail() {


  const { slug } = useParams();


  const [copied, setCopied] = useState(false);



  // chống lỗi data
  const blogList = Array.isArray(blogs)
    ? blogs.filter(Boolean)
    : [];



  const blog = blogList.find(
    (item) =>
      item.slug === slug
  );




  if (!blog) {

    return (

      <div
        className="
          min-h-screen
          flex
          items-center
          justify-center
          bg-gray-50
        "
      >

        <div className="text-center">


          <h1
            className="
              text-3xl
              font-bold
              text-gray-800
            "
          >
            Không tìm thấy bài viết
          </h1>



          <Link
            to="/blog"
            className="
              mt-6
              inline-block
              rounded-xl
              bg-green-700
              px-6
              py-3
              text-white
            "
          >
            Quay lại Blog
          </Link>


        </div>


      </div>

    );

  }






  const copyLink = async () => {


    try {

      await navigator.clipboard.writeText(
        window.location.href
      );


      setCopied(true);


      setTimeout(() => {

        setCopied(false);

      },2000);


    } catch(error){

      console.log(error);

    }


  };







  const shareFacebook = () => {


    window.open(

      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        window.location.href
      )}`,

      "_blank"

    );


  };







  const relatedBlogs = blogList
    .filter(
      (item)=>
        item.slug !== blog.slug
    )
    .slice(0,3);







  return (

    <main
      className="
        min-h-screen
        bg-white
      "
    >





      {/* Breadcrumb */}

      <section
        className="
          container
          mx-auto
          px-4
          py-6
        "
      >

        <div
          className="
            flex
            items-center
            gap-2
            text-sm
            text-gray-500
          "
        >

          <Link to="/">
            Trang chủ
          </Link>


          <ChevronRight size={16}/>


          <Link to="/blog">
            Blog
          </Link>


          <ChevronRight size={16}/>


          <span className="line-clamp-1">
            {blog.title}
          </span>


        </div>


      </section>









      <article
        className="
          container
          mx-auto
          max-w-4xl
          px-4
          pb-20
        "
      >





        <div
          className="
            text-sm
            font-semibold
            text-green-700
          "
        >
          {blog.category}
        </div>






        <h1
          className="
            mt-4
            text-3xl
            md:text-5xl
            font-bold
            leading-tight
            text-gray-800
          "
        >
          {blog.title}
        </h1>








        {/* Meta */}

        <div
          className="
            mt-5
            flex
            flex-wrap
            gap-5
            text-sm
            text-gray-500
          "
        >


          <div className="flex items-center gap-2">

            <CalendarDays size={17}/>

            {blog.date}

          </div>



          <div className="flex items-center gap-2">

            <Clock3 size={17}/>

            {blog.readTime}

          </div>



          <div className="flex items-center gap-2">

            <User size={17}/>

            {blog.author}

          </div>


        </div>








        {/* Share */}

        <div
          className="
            mt-6
            flex
            gap-3
          "
        >


          <button

            onClick={shareFacebook}

            className="
              flex
              items-center
              gap-2
              rounded-xl
              bg-blue-600
              px-4
              py-2
              text-white
              hover:bg-blue-700
            "

          >

            <Share2 size={18}/>

            Facebook

          </button>





          <button

            onClick={copyLink}

            className="
              flex
              items-center
              gap-2
              rounded-xl
              bg-gray-700
              px-4
              py-2
              text-white
              hover:bg-gray-800
            "

          >

            <Copy size={18}/>


            {
              copied
              ? "Đã copy"
              : "Copy link"
            }


          </button>


        </div>









        {/* Image */}

        {
          blog.image &&

          <img

            src={blog.image}

            alt={blog.title}

            className="
              mt-8
              w-full
              max-h-[520px]
              rounded-2xl
              object-cover
            "

          />

        }








        {/* Description */}

        <p
          className="
            mt-8
            text-lg
            leading-8
            text-gray-700
          "
        >

          {blog.description}

        </p>








        {/* Content */}

        <div className="mt-10">


          {
            blog.content?.map(

              (item,index)=>(


                <section

                  key={index}

                  className="
                    mb-10
                  "

                >


                  <h2

                    className="
                      text-2xl
                      font-bold
                      text-green-700
                    "

                  >

                    {item.heading}

                  </h2>




                  <p

                    className="
                      mt-4
                      whitespace-pre-line
                      leading-8
                      text-gray-700
                    "

                  >

                    {item.text}

                  </p>



                </section>


              )

            )
          }


        </div>








        {/* Contact */}

        <div
          className="
            mt-12
            rounded-2xl
            bg-green-50
            p-6
          "
        >


          <h3
            className="
              text-xl
              font-bold
              text-green-700
            "
          >

            Happy Farm - Giải pháp làm vườn xanh

          </h3>



          <p
            className="
              mt-3
              text-gray-700
            "
          >

            Cung cấp đất sạch, giá thể,
            phân hữu cơ, phân vô cơ,
            vật tư trồng cây cho ban công,
            sân thượng và nhà vườn.

          </p>




          <Link

            to="/contact"

            className="
              mt-5
              inline-block
              rounded-xl
              bg-green-700
              px-6
              py-3
              text-white
            "

          >

            Liên hệ tư vấn

          </Link>



        </div>









        {/* Related */}

        <section

          className="
            mt-16
            border-t
            pt-10
          "

        >


          <h2

            className="
              mb-6
              text-2xl
              font-bold
              text-gray-800
            "

          >

            Bài viết liên quan

          </h2>





          <div

            className="
              grid
              gap-6
              md:grid-cols-3
            "

          >



            {
              relatedBlogs.map(

                (item)=>(


                  <article

                    key={item.id}

                    className="
                      overflow-hidden
                      rounded-2xl
                      bg-gray-50
                    "

                  >



                    <img

                      src={item.image}

                      alt={item.title}

                      className="
                        h-40
                        w-full
                        object-cover
                      "

                    />



                    <div className="p-4">


                      <Link

                        to={`/blog/${item.slug}`}

                      >


                        <h3

                          className="
                            font-bold
                            text-gray-800
                            hover:text-green-700
                          "

                        >

                          {item.title}

                        </h3>


                      </Link>


                    </div>


                  </article>


                )

              )
            }



          </div>


        </section>





      </article>



    </main>

  );

}