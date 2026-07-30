import { Star } from "lucide-react";

function ReviewSection() {
  const reviews = [
    {
      id: 1,
      name: "Nguyễn Văn Minh",
      location: "Thủ Dầu Một, Bình Dương",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      content:
        "Đất sạch rất tơi xốp, cây phát triển nhanh. Đóng gói cẩn thận và giao hàng đúng hẹn.",
    },
    {
      id: 2,
      name: "Trần Thị Lan",
      location: "TP. Hồ Chí Minh",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      content:
        "Mình mua combo trồng rau ban công. Hướng dẫn rất chi tiết, chỉ sau vài tuần đã thu hoạch được.",
    },
    {
      id: 3,
      name: "Lê Quốc Huy",
      location: "Biên Hòa, Đồng Nai",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
      rating: 5,
      content:
        "Phân hữu cơ chất lượng tốt, cây xanh hơn rõ rệt. Sẽ tiếp tục ủng hộ Happy Farm.",
    },
  ];

  return (
    <section className="bg-green-50 py-20">
      <div className="container mx-auto px-4">

        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-green-700">
            Khách Hàng Nói Gì?
          </h2>

          <p className="mt-3 text-gray-600">
            Hàng nghìn khách hàng đã tin tưởng lựa chọn Happy Farm.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 flex items-center gap-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="h-16 w-16 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-bold text-lg">
                    {review.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {review.location}
                  </p>
                </div>
              </div>

              <div className="mb-5 flex">
                {[...Array(review.rating)].map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    fill="#FACC15"
                    color="#FACC15"
                  />
                ))}
              </div>

              <p className="leading-8 text-gray-600">
                "{review.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReviewSection;