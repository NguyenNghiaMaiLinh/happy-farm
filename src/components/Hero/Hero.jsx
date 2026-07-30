import { ArrowRight, Phone, ShoppingCart, ShieldCheck, Sprout, Star, Flame } from "lucide-react";
import { Link } from "react-router-dom";
import { HERO_IMAGES } from "../../data/images";

function Hero() {
  return (
    <section className="bg-gradient-to-b from-green-50/50 via-[#f6f8f4] to-[#f6f8f4] py-8 lg:py-12">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          
          {/* BANNER CHÍNH CỰC ĐẸP */}
          <div
            className="group relative overflow-hidden rounded-3xl lg:col-span-2 shadow-2xl transition-all duration-500 hover:shadow-green-900/20"
            style={{
              backgroundImage: `url(${HERO_IMAGES.hero1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "560px",
            }}
          >
            {/* OVERLAY GRADIENT NÂNG CẤP */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-transparent" />

            <div className="relative flex h-full flex-col justify-between p-8 lg:p-14">
              
              {/* HEADER BADGE */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/90 backdrop-blur-md px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-emerald-500/30">
                  <Sprout className="w-4 h-4 text-emerald-200" />
                  Nông Nghiệp Xanh Happy Farm
                </span>
                
                <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-md px-3 py-1.5 text-xs font-semibold text-white">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  100% Chuẩn Hữu Cơ
                </span>
              </div>

              {/* HEADING CONTENT */}
              <div className="my-auto py-6">
                <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl drop-shadow-md">
                  Đất Sạch Sạch Bệnh
                  <br />
                  <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-teal-200 bg-clip-text text-transparent">
                    Giá Thể & Phân Bón
                  </span>
                  <br />
                  Chất Lượng Cao
                </h1>

                <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-gray-200">
                  Giải pháp dinh dưỡng toàn diện giúp cây trồng phát triển rễ khỏe, tán lá xanh mướt, tăng năng suất rau sạch & hoa trái nhà bạn.
                </p>

                {/* CALL TO ACTION BUTTONS */}
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    to="/products"
                    className="group/btn inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-green-600 px-8 py-4 font-bold text-white shadow-xl shadow-emerald-600/30 transition-all duration-300 hover:scale-105 hover:from-emerald-500 hover:to-green-500 active:scale-95"
                  >
                    Khám phá ngay
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-2xl bg-white/90 backdrop-blur-md px-7 py-4 font-bold text-gray-900 shadow-xl transition-all duration-300 hover:bg-white hover:scale-105 active:scale-95"
                  >
                    <Phone className="w-5 h-5 text-emerald-600" />
                    Tư vấn miễn phí
                  </Link>
                </div>
              </div>

              {/* FLOATING STATS FOOTER */}
              <div className="grid grid-cols-3 gap-4 border-t border-white/20 pt-6">
                <div>
                  <div className="text-2xl font-black text-white">10.000+</div>
                  <div className="text-xs text-gray-300 font-medium">Khách hàng tin dùng</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-emerald-400">100%</div>
                  <div className="text-xs text-gray-300 font-medium">Sạch mầm bệnh</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-amber-400 flex items-center gap-1">
                    4.9 <Star className="w-4 h-4 fill-amber-400 inline" />
                  </div>
                  <div className="text-xs text-gray-300 font-medium">Đánh giá tốt nhất</div>
                </div>
              </div>

            </div>
          </div>

          {/* CỘT PHẢI - 2 BANNER PHỤ NỔI BẬT */}
          <div className="flex flex-col gap-6">

            {/* BANNER PHỤ 1 */}
            <div
              className="group relative overflow-hidden rounded-3xl shadow-xl transition-all duration-300 hover:shadow-2xl"
              style={{
                backgroundImage: `url(${HERO_IMAGES.hero2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "265px",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent" />

              <div className="relative flex h-full flex-col justify-end p-7">
                <span className="w-fit rounded-full bg-emerald-500/90 backdrop-blur-md px-3 py-1 text-xs font-bold text-white uppercase tracking-wider mb-2">
                  Dinh dưỡng hữu cơ
                </span>

                <h2 className="text-2xl font-extrabold text-white">
                  Phân Hữu Cơ Sinh Học
                </h2>

                <p className="mt-2 text-sm text-gray-200 line-clamp-2">
                  Bổ sung vi sinh vật có lợi, cải tạo đất bạc màu và kích thích ra rễ tơ mạnh mẽ.
                </p>

                <Link
                  to="/products"
                  className="mt-4 inline-flex w-fit items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-emerald-700 shadow-md transition-all duration-200 hover:bg-emerald-50 hover:scale-105"
                >
                  Xem bộ sưu tập
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* BANNER PHỤ 2 */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-800 via-green-900 to-teal-900 p-7 text-white shadow-xl transition-all duration-300 hover:shadow-2xl">
              
              {/* DECORATIVE BACKGROUND LIGHT */}
              <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-emerald-500/20 blur-2xl pointer-events-none" />

              <div className="relative z-10">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/90 px-3.5 py-1 text-xs font-extrabold text-white uppercase tracking-wider shadow-md">
                  <Flame className="w-4 h-4 fill-white" />
                  Sản phẩm Bán Chạy #1
                </span>

                <h2 className="mt-4 text-2xl font-black text-white">
                  Đất Sạch Tribat Cao Cấp
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-emerald-100/90">
                  Phối trộn sẵn xơ dừa, vỏ trấu & vi sinh. Mua về sử dụng ngay không cần trộn thêm!
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-amber-500/30 transition-all duration-300 hover:bg-amber-600 hover:scale-105 active:scale-95"
                  >
                    <ShoppingCart size={16} />
                    Đặt mua ngay
                  </Link>

                  <Link
                    to="/products/1"
                    className="inline-flex items-center rounded-xl border border-white/30 bg-white/10 backdrop-blur-md px-4 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-emerald-900"
                  >
                    Chi tiết
                  </Link>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;