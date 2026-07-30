import { Link, useParams } from "react-router-dom";
import {
  CalendarDays,
  Clock3,
  User,
  ChevronRight,
} from "lucide-react";

import { blogs } from "../data/blogs";


export default function BlogDetail() {

  const { slug } = useParams();


  const blog = blogs.find(
    (item) => item.slug === slug
  );



  if (!blog) {

    return (
      <main className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-gray-50
      ">

        <div className="text-center">

          <h1 className="
            text-3xl
            font-bold
            text-gray-800
          ">
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
              hover:bg-green-800
            "
          >
            Quay lại Blog
          </Link>


        </div>


      </main>
    );

  }



  return (

    <main className="
      min-h-screen
      bg-white
    ">


      {/* Breadcrumb */}
      <section className="
        container
        mx-auto
        px-4
        py-6
      ">

        <div className="
          flex
          flex-wrap
          items-center
          gap-2
          text-sm
          text-gray-500
        ">


          <Link
            to="/"
            className="hover:text-green-700"
          >
            Trang chủ
          </Link>


          <ChevronRight size={16}/>


          <Link
            to="/blog"
            className="hover:text-green-700"
          >
            Blog
          </Link>


          <ChevronRight size={16}/>


          <span className="line-clamp-1">
            {blog.title}
          </span>


        </div>

      </section>





      {/* Article */}
      <article className="
        container
        mx-auto
        max-w-4xl
        px-4
        pb-16
      ">



        <span className="
          inline-block
          rounded-full
          bg-green-100
          px-4
          py-1
          text-sm
          font-medium
          text-green-700
        ">
          {blog.category}
        </span>




        <h1 className="
          mt-5
          text-3xl
          font-bold
          leading-tight
          text-gray-800
          md:text-5xl
        ">
          {blog.title}
        </h1>





        {/* Info */}
        <div className="
          mt-5
          flex
          flex-wrap
          gap-5
          text-sm
          text-gray-500
        ">


          <div className="
            flex
            items-center
            gap-2
          ">
            <CalendarDays size={17}/>
            {blog.date}
          </div>



          <div className="
            flex
            items-center
            gap-2
          ">
            <Clock3 size={17}/>
            {blog.readTime}
          </div>



          <div className="
            flex
            items-center
            gap-2
          ">
            <User size={17}/>
            {blog.author}
          </div>


        </div>






        {/* Image */}
        {blog.image && (

          <img
            src={blog.image}
            alt={blog.title}
            className="
              mt-8
              h-auto
              max-h-[520px]
              w-full
              rounded-2xl
              object-cover
            "
          />

        )}







        {/* Content */}
        <div className="
          mt-10
          text-lg
          leading-8
          text-gray-700
        ">


          <p>
            {blog.description}
          </p>



          <h2 className="
            mt-10
            text-2xl
            font-bold
            text-green-700
          ">
            Giới thiệu
          </h2>


          <p className="mt-4">
            Happy Farm cung cấp các giải pháp về đất sạch,
            phân bón, giá thể và vật tư làm vườn cho gia đình,
            ban công và sân thượng.
          </p>



          <h2 className="
            mt-10
            text-2xl
            font-bold
            text-green-700
          ">
            Kinh nghiệm áp dụng thực tế
          </h2>


          <p className="mt-4">
            Khi trồng cây tại nhà, việc lựa chọn đúng loại đất,
            dinh dưỡng và phương pháp chăm sóc sẽ quyết định
            khả năng sinh trưởng của cây.
          </p>



          <p className="mt-4">
            Người trồng nên kết hợp đất sạch,
            phân hữu cơ và chế độ bổ sung dinh dưỡng
            phù hợp theo từng giai đoạn phát triển.
          </p>


        </div>






        {/* Back */}
        <div className="
          mt-12
          border-t
          pt-8
        ">

          <Link
            to="/blog"
            className="
              inline-flex
              items-center
              gap-2
              font-semibold
              text-green-700
              hover:text-green-800
            "
          >

            <ChevronRight
              size={18}
              className="rotate-180"
            />

            Xem thêm bài viết

          </Link>


        </div>



      </article>


    </main>

  );

}