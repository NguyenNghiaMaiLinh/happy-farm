import { Link } from "react-router-dom";

import "./BlogCard.css";


function BlogCard({ blog }) {


  return (

    <article className="blog-card">


      {/* IMAGE */}

      <div className="blog-image">


        <img

          src={blog.image}

          alt={blog.title}

        />


      </div>






      {/* CONTENT */}

      <div className="blog-content">



        {/* META */}

        <div className="blog-meta">


          <span>

            Happy Farm

          </span>



          <span>

            {blog.date}

          </span>


        </div>







        {/* TITLE */}

        <h3>

          {blog.title}

        </h3>








        {/* DESCRIPTION */}

        <p className="blog-description">

          {blog.description}

        </p>







        {/* BUTTON */}

        <Link

          to={`/blog/${blog.id}`}

          className="blog-button"

        >

          Đọc tiếp

        </Link>



      </div>



    </article>

  );


}


export default BlogCard;