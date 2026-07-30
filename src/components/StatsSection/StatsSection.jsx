import {
  Users,
  PackageCheck,
  Truck,
  Award,
} from "lucide-react";

function StatsSection() {
  const stats = [
    {
      id: 1,
      icon: <Users size={42} />,
      number: "5.000+",
      title: "Khách hàng",
      description: "Đã tin tưởng Happy Farm",
    },
    {
      id: 2,
      icon: <PackageCheck size={42} />,
      number: "300+",
      title: "Sản phẩm",
      description: "Đất, giá thể, phân bón...",
    },
    {
      id: 3,
      icon: <Truck size={42} />,
      number: "63",
      title: "Tỉnh thành",
      description: "Giao hàng toàn quốc",
    },
    {
      id: 4,
      icon: <Award size={42} />,
      number: "100%",
      title: "Cam kết",
      description: "Sản phẩm chất lượng",
    },
  ];

  return (
    <section className="bg-green-700 py-20 text-white">
      <div className="container mx-auto px-4">

        <div className="mb-14 text-center">

          <h2 className="text-4xl font-bold">
            Happy Farm Trong Những Con Số
          </h2>

          <p className="mt-4 text-green-100">
            Chúng tôi luôn nỗ lực mang đến những sản phẩm và dịch vụ
            tốt nhất cho khách hàng trên toàn quốc.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => (

            <div
              key={item.id}
              className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur transition hover:bg-white/20"
            >

              <div className="mb-5 flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-5xl font-bold">
                {item.number}
              </h3>

              <h4 className="mt-4 text-xl font-semibold">
                {item.title}
              </h4>

              <p className="mt-2 text-green-100">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default StatsSection;