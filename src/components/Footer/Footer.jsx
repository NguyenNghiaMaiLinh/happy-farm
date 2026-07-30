import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  Leaf,
  MessageCircle,
  ShieldCheck,
  Truck,
  RotateCcw,
  Send,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput("");
    }
  };

  const categories = [
    "Đất sạch đóng bao",
    "Giá thể trồng cây",
    "Phân hữu cơ sinh học",
    "Phân vô cơ NPK - Ure",
    "Phân thủy canh",
    "Chế phẩm sinh học Trichoderma",
  ];

  const services = [
    "Tư vấn phối trộn đất trồng",
    "Tư vấn lịch bón phân chuẩn",
    "Thi công vườn ban công xanh",
    "Thi công sân thượng trọn gói",
    "Khảo sát tận nơi tại HCM & BD",
  ];

  return (
    <footer className="mt-20 bg-gradient-to-b from-green-900 via-emerald-950 to-gray-950 text-white relative">
      {/* TRUST BADGES BAR */}
      <div className="border-b border-white/10 bg-white/5 backdrop-blur-md">
        <div className="mx-auto w-full max-w-[1400px] px-6 py-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex items-center justify-center sm:justify-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-white">
                  Giao Hàng Tận Nơi
                </h4>
                <p className="text-xs text-gray-300">
                  Nhanh chóng tại HCM & Bình Dương
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-500/20 text-amber-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-white">
                  Cam Kết Chất Lượng
                </h4>
                <p className="text-xs text-gray-300">
                  100% chính hãng, sạch mầm bệnh
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-400">
                <RotateCcw className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-white">
                  Tư Vấn Trọn Đời
                </h4>
                <p className="text-xs text-gray-300">
                  Kỹ sư nông nghiệp hỗ trợ 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER CONTENT */}
      <div className="mx-auto w-full max-w-[1400px] px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* ABOUT BRAND */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-emerald-500 to-green-600 shadow-lg shadow-emerald-500/30">
                <Leaf size={26} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-black tracking-tight text-white">
                  Happy Farm
                </h2>
                <p className="text-xs font-semibold text-emerald-400 tracking-wider uppercase">
                  Nông Nghiệp Xanh Mỗi Ngày
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-gray-300">
              Happy Farm chuyên cung cấp đất sạch, giá thể tơi xốp, phân hữu cơ
              sinh học và các giải pháp chăm sóc khu vườn xanh tươi cho hộ gia
              đình và trang trại.
            </p>

            {/* NEWSLETTER */}
            <div className="mt-6">
              <h4 className="text-xs font-bold text-gray-200 uppercase tracking-wider mb-2">
                Đăng ký nhận mẹo làm vườn
              </h4>
              {subscribed ? (
                <div className="p-3 bg-emerald-900/60 border border-emerald-500/50 rounded-xl text-xs font-bold text-emerald-200">
                  ✓ Đăng ký thành công! Cảm ơn bạn.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Nhập email của bạn..."
                    className="w-full rounded-xl bg-white/10 border border-white/15 px-3.5 py-2.5 text-xs text-white placeholder-gray-400 outline-none focus:border-emerald-500"
                  />
                  <button
                    type="submit"
                    className="flex shrink-0 items-center justify-center rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white transition hover:bg-emerald-500 active:scale-95"
                  >
                    <Send size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* PRODUCTS CATEGORY */}
          <div>
            <h3 className="mb-6 text-lg font-extrabold text-white border-l-4 border-emerald-500 pl-3">
              Danh Mục Sản Phẩm
            </h3>
            <ul className="space-y-3 text-sm">
              {categories.map((item) => (
                <li key={item}>
                  <Link
                    to="/products"
                    className="flex items-center gap-2 text-gray-300 transition duration-200 hover:text-emerald-400 hover:translate-x-1"
                  >
                    <ChevronRight size={14} className="text-emerald-500" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="mb-6 text-lg font-extrabold text-white border-l-4 border-emerald-500 pl-3">
              Dịch Vụ & Tư Vấn
            </h3>
            <ul className="space-y-3 text-sm">
              {services.map((item) => (
                <li key={item}>
                  <Link
                    to="/contact"
                    className="flex items-center gap-2 text-gray-300 transition duration-200 hover:text-emerald-400 hover:translate-x-1"
                  >
                    <ChevronRight size={14} className="text-emerald-500" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h3 className="mb-6 text-lg font-extrabold text-white border-l-4 border-emerald-500 pl-3">
              Liên Hệ & Báo Giá
            </h3>
            <div className="space-y-4 text-sm text-gray-300">
              <a
                href="tel:0934073275"
                className="flex items-center gap-3 hover:text-emerald-400 transition-colors"
              >
                <Phone size={18} className="text-emerald-500 shrink-0" />
                <div>
                  <p className="font-bold text-white text-xs">
                    Hotline Đặt Hàng
                  </p>
                  <p className="font-extrabold text-emerald-400">
                    0934 073 275
                  </p>
                </div>
              </a>

              <a
                href="https://zalo.me/0934073275"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-emerald-400 transition-colors"
              >
                <MessageCircle
                  size={18}
                  className="text-emerald-500 shrink-0"
                />
                <div>
                  <p className="font-bold text-white text-xs">
                    Tư Vấn Trực Tuyến
                  </p>
                  <p className="text-xs text-gray-300">Zalo: 0934 073 275</p>
                </div>
              </a>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-emerald-500 shrink-0" />
                <div>
                  <p className="font-bold text-white text-xs">Email</p>
                  <p className="text-xs">support@happyfarm.vn</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-emerald-500 shrink-0" />
                <div>
                  <p className="font-bold text-white text-xs">
                    Phạm Vi Giao Hàng
                  </p>
                  <p className="text-xs">Bình Dương & TP. Hồ Chí Minh</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock size={18} className="text-emerald-500 shrink-0" />
                <div>
                  <p className="font-bold text-white text-xs">Giờ Làm Việc</p>
                  <p className="text-xs">07:30 - 17:30 (Thứ 2 - Chủ Nhật)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT BOTTOM BAR */}
      <div className="border-t border-white/10 bg-black/40 py-6">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center justify-between gap-4 px-6 sm:flex-row text-xs text-gray-400">
          <p>© 2026 Happy Farm. Nông Nghiệp Xanh Cho Mọi Nhà.</p>
          <div className="flex items-center gap-6 font-semibold">
            <Link to="/contact" className="hover:text-emerald-400 transition">
              Báo Giá Sỉ
            </Link>
            <Link to="/contact" className="hover:text-emerald-400 transition">
              Chính Sách Đổi Trả
            </Link>
            <Link to="/contact" className="hover:text-emerald-400 transition">
              Liên Hệ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;