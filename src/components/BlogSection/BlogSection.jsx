import { Link } from "react-router-dom";
import BlogCard from "../BlogCard/BlogCard";
import "./BlogSection.css";

function BlogSection() {
  const blogs = [
    {
      id: 1,
      slug: "trong-rau-sach-tai-nha",
      category: "Trồng rau",
      title: "Hướng dẫn trồng rau sạch tại nhà cho người mới bắt đầu",
      image:
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80",
      date: "18/07/2026",
      readTime: "8 phút đọc",
      description:
        "Hướng dẫn chuẩn bị đất trồng, chọn hạt giống, sử dụng phân bón và chăm sóc để có vườn rau sạch xanh tốt tại nhà.",
    },
    {
      id: 2,
      slug: "chon-dat-trong-cay-ban-cong",
      category: "Đất sạch",
      title: "Cách chọn đất trồng cây phù hợp cho ban công và sân thượng",
      image:
        "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80",
      date: "15/07/2026",
      readTime: "6 phút đọc",
      description:
        "Tìm hiểu cách lựa chọn đất sạch, giá thể và cách phối trộn dinh dưỡng giúp cây phát triển khỏe mạnh trong không gian nhỏ.",
    },
    {
      id: 3,
      slug: "phan-huu-co-va-phan-vo-co",
      category: "Phân bón",
      title: "Phân hữu cơ và phân vô cơ: Sử dụng đúng cách cho cây trồng",
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5c?auto=format&fit=crop&w=900&q=80",
      date: "10/07/2026",
      readTime: "10 phút đọc",
      description:
        "Hướng dẫn sử dụng phân bón đúng liều lượng, đúng thời điểm giúp cây khỏe mạnh, tăng năng suất và bảo vệ đất trồng.",
    },
  ];

  const featured = blogs[0];

  return (
    <section className="blog-section">
      <div className="blog-container">
        {/* Header */}
        <div className="blog-header">
          <span className="blog-tag">🌿 Happy Farm Academy</span>

          <h2>Kiến thức làm vườn mỗi ngày</h2>

          <p>
            Cập nhật kiến thức về đất sạch, giá thể, phân bón và kỹ thuật trồng
            cây giúp bạn tạo nên khu vườn xanh ngay tại nhà.
          </p>
        </div>

        {/* Featured */}
        <div className="blog-featured">
          <div className="featured-image">
            <img src={featured.image} alt={featured.title} />
          </div>

          <div className="featured-content">
            <span className="featured-category">
              {featured.category}
            </span>

            <h3>{featured.title}</h3>

            <p>{featured.description}</p>

            <Link
              to={`/blog/${featured.slug}`}
              className="featured-button"
            >
              Đọc bài viết
            </Link>
          </div>
        </div>

        {/* Title */}
        <div className="blog-list-header">
          <h3>Bài viết mới nhất</h3>

          <Link to="/blog">Xem tất cả →</Link>
        </div>

        {/* Grid */}
        <div className="blog-grid">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;