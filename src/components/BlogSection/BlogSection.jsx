import BlogCard from "../BlogCard/BlogCard";
import "./BlogSection.css";


function BlogSection() {


  const blogs = [

    {
      id: 1,

      title:
        "Hướng dẫn trồng rau sạch tại nhà cho người mới bắt đầu",

      image:
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80",

      date:
        "18/07/2026",

      description:
        "Hướng dẫn chuẩn bị đất trồng, chọn hạt giống, sử dụng phân bón và chăm sóc để có vườn rau sạch xanh tốt tại nhà."
    },


    {
      id: 2,

      title:
        "Cách chọn đất trồng cây phù hợp cho ban công và sân thượng",

      image:
        "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80",

      date:
        "15/07/2026",

      description:
        "Tìm hiểu cách lựa chọn đất sạch, giá thể và cách phối trộn dinh dưỡng giúp cây phát triển khỏe mạnh trong không gian nhỏ."
    },


    {
      id: 3,

      title:
        "Phân hữu cơ và phân vô cơ: Sử dụng đúng cách cho cây trồng",

      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5c?auto=format&fit=crop&w=900&q=80",

      date:
        "10/07/2026",

      description:
        "Hướng dẫn sử dụng phân bón đúng liều lượng, đúng thời điểm giúp cây khỏe mạnh, tăng năng suất và bảo vệ đất trồng."
    }

  ];





  return (

    <section className="blog-section">


      <div className="blog-container">



        {/* HEADER */}

        <div className="blog-header">


          <span className="blog-tag">

            Kiến thức làm vườn

          </span>



          <h2>

            Blog Happy Farm

          </h2>



          <p>

            Chia sẻ kinh nghiệm về đất trồng,
            giá thể, phân bón và kỹ thuật chăm sóc cây.

          </p>


        </div>






        {/* BLOG LIST */}

        <div className="blog-grid">


          {
            blogs.map((blog) => (

              <BlogCard

                key={blog.id}

                blog={blog}

              />

            ))
          }


        </div>



      </div>


    </section>

  );

}


export default BlogSection;