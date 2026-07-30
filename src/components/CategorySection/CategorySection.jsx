import { CATEGORY_IMAGES } from "../../data/images";
import { Link } from "react-router-dom";
import {
  Sprout,
  Leaf,
  Droplets,
  Flower2,
  FlaskConical,
  Wheat,
  ArrowRight,
} from "lucide-react";

function CategorySection() {
  const categories = [
    {
      name: "Đất sạch",
      image: CATEGORY_IMAGES.soil,
      icon: Sprout,
      count: "12+ Sản phẩm",
      description: "Đất sạch Tribat, đất phù sa hữu cơ giàu vi sinh vật.",
    },
    {
      name: "Giá thể trồng cây",
      image: CATEGORY_IMAGES.substrate,
      icon: Leaf,
      count: "8+ Sản phẩm",
      description: "Xơ dừa xử lý EC, trấu hun vỏ, đá Perlite tơi xốp.",
    },
    {
      name: "Phân hữu cơ",
      image: CATEGORY_IMAGES.organic,
      icon: Wheat,
      count: "15+ Sản phẩm",
      description: "Phân bò ủ hoai, phân gà viên Nhật, phân trùn hạ.",
    },
    {
      name: "Phân vô cơ",
      image: CATEGORY_IMAGES.fertilizer,
      icon: FlaskConical,
      count: "10+ Sản phẩm",
      description: "Phân Ure Phú Mỹ, NPK đa năng, Kali tím tan nhanh.",
    },
    {
      name: "Phân thủy canh",
      image: CATEGORY_IMAGES.hydroponic,
      icon: Droplets,
      count: "6+ Sản phẩm",
      description: "Dung dịch dinh dưỡng sinh học cho hệ thống thủy canh.",
    },
    {
      name: "Hạt giống",
      image: CATEGORY_IMAGES.seed,
      icon: Flower2,
      count: "20+ Loại",
      description: "Hạt giống rau ăn lá, củ quả và hoa cảnh nảy mầm cao.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#f6f8f4] to-white py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10">
        
        {/* SECTION HEADER */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-5 py-2 text-xs font-extrabold uppercase tracking-wider text-emerald-800 shadow-sm">
            🌱 Danh Mục Phân Bón & Giá Thể
          </span>

          <h2 className="mt-4 text-3xl font-black text-gray-900 sm:text-4xl lg:text-5xl">
            Giải Pháp Toàn Diện Cho Mọi Khu Vườn
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            Từ đất sạch trồng rau, giá thể thoáng khí đến phân bón hữu cơ cao cấp giúp nâng tầm năng suất cho vườn nhà bạn.
          </p>
        </div>

        {/* CATEGORY GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                to="/products"
                className="group relative overflow-hidden rounded-3xl bg-white border border-green-100/70 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-900/10"
              >
                {/* IMAGE CONTAINER */}
                <div className="relative h-60 overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* ICON BADGE */}
                  <div className="absolute bottom-4 left-5 flex items-center gap-3">
                    <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-lg shadow-emerald-600/40 transition-transform duration-300 group-hover:scale-110">
                      <Icon size={24} />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
                        {item.count}
                      </span>
                      <h3 className="text-xl font-extrabold text-white">
                        {item.name}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <p className="text-sm leading-relaxed text-gray-600">
                    {item.description}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-xs font-bold text-emerald-700 group-hover:text-emerald-800">
                    <span>Xem sản phẩm trong danh mục</span>
                    <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default CategorySection;