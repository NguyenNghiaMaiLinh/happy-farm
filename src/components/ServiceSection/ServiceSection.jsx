import { Link } from "react-router-dom";
import { ArrowRight, Wrench } from "lucide-react";

function ServiceSection() {
  const services = [
    {
      id: 1,
      title: "Thi Công Ban Công Xanh",
      image:
        "https://images.openai.com/static-rsc-4/2ObWHsmB6Qk0JeJDcjMGjZulgQto3bETkLyQkd9IQrm2_wX5KzK2A4pwKQgVR12zr831hojHZCEVoZM0z-Jyxf8x0Euy7ft7X3UBWTEe3rtlbcOV1CVKnh7nruhokOP7c1EhDhFZG3Ttxdq2jOB1tlnxQTLjR4bJLdRKl1tRzlSW7tPY5p5gQP03d5kXZCBA?purpose=fullsize",
      description:
        "Happy Farm thiết kế và thi công ban công xanh theo diện tích thực tế. Chúng tôi lựa chọn đất trồng, giá thể, hệ thống thoát nước và cây trồng phù hợp tạo nên không gian sống xanh mát.",
    },
    {
      id: 2,
      title: "Thi Công Vườn Sân Thượng",
      image:
        "https://images.openai.com/static-rsc-4/FyNzFp2AhmtfXnqzIja4PhoAQTR5bKkvtGzl21N_HTxTF_1hXX1sjLt9Suw6eFR1cxg8yPVXGir1LQ5IxZbCcwABk71q2wJhHh4yDOLfXw3-19LK_ul2S53mP6mv3y2Nlej22LrJkUJKi7JDfgcTHTxIcHfMKRjnt_4I-A-8yv8Ux6vqFYwbeyV70YaEjFo7?purpose=fullsize",
      description:
        "Biến sân thượng thành khu vườn rau sạch gia đình hoặc khu thư giãn xanh với giải pháp thi công trọn gói. Tư vấn bố trí tối ưu ánh sáng và hệ thống tưới tự động.",
    },
    {
      id: 3,
      title: "Thiết Kế Vườn Rau Hữu Cơ",
      image:
        "https://images.openai.com/static-rsc-4/ZMP0GAMhJ8AmpkccE09uWon4xnYKINoYgHlhnQgEf7Nt0PnyV9qTYRkkhJXwAv4Y8qP-MTNCqu8ECcg6eIs5YsMN-bBn-_lEH60FXvy5WMOtgoqPWt35HWqZNIGcfkFXZ7N63mPlAR5JX1ItjmDGFMpcPxrpxXZ4gT7kxWEeqhN3egK-g62uZOOQmOsP7k8C?purpose=fullsize",
      description:
        "Thiết kế vườn rau gia đình, trường học và quán cà phê theo phong cách hiện đại. Cung cấp quy trình trồng hữu cơ an toàn cho sức khỏe gia đình.",
    },
    {
      id: 4,
      title: "Tư Vấn Kỹ Thuật Trồng Cây",
      image:
        "https://images.openai.com/static-rsc-4/Sf8dliXUUJwqN5iSSu2UsJKL_jVvTiv_Y2e7s7LylswvlRwLY6GUXDLjURVs7LE2bz87SSQ6qSXoTMfaMhAUtgizCR4yrfGge15A1cFQmvmHlqC4TEo1rLYDPn1wcDUKlYzmAiFwRiww4H3g4nw9nhOWnl_6TuO5zSDa1wdQ61RiBua4Fp1MR77kng0xE9o1?purpose=fullsize",
      description:
        "Đội ngũ kỹ sư Happy Farm hỗ trợ lựa chọn phân bón, đất sạch, giá thể, lịch tưới nước và kỹ thuật phòng trừ sâu bệnh sinh học hiệu quả nhất.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white via-green-50/50 to-[#f6f8f4] py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10">
        
        {/* HEADER */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-5 py-2 text-xs font-extrabold uppercase tracking-wider text-emerald-800 shadow-sm">
            <Wrench className="w-4 h-4 text-emerald-700" />
            Dịch Vụ Nông Nghiệp Đô Thị
          </span>

          <h2 className="mt-4 text-3xl font-black text-gray-900 sm:text-4xl lg:text-5xl">
            Giải Pháp Thi Công & Khảo Sát Tận Nơi
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Không chỉ bán vật tư, Happy Farm đồng hành trọn đời cùng khách hàng trong hành trình kiến tạo khu vườn mơ ước.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.id}
              className="group overflow-hidden rounded-3xl bg-white border border-green-100 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-900/10 flex flex-col"
            >
              <div className="relative h-72 overflow-hidden bg-gray-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <h3 className="absolute bottom-5 left-6 text-2xl font-black text-white">
                  {service.title}
                </h3>
              </div>

              <div className="p-8 flex flex-1 flex-col justify-between">
                <p className="leading-relaxed text-gray-600 text-sm sm:text-base">
                  {service.description}
                </p>

                <Link
                  to="/contact"
                  className="mt-8 inline-flex w-fit items-center gap-2 rounded-2xl bg-emerald-600 px-6 py-3.5 font-bold text-white shadow-md shadow-emerald-600/20 transition-all duration-200 hover:bg-emerald-700 hover:scale-105 active:scale-95 text-sm"
                >
                  Đăng ký khảo sát & tư vấn
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ServiceSection;