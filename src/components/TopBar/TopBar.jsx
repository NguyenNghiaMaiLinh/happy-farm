import {
  Phone,
  Mail,
  Clock3,
  Truck,
} from "lucide-react";

function TopBar() {
  return (
    <div className="hidden bg-green-800 text-white lg:block">
      <div className="container mx-auto flex h-10 items-center justify-between px-4">

        <div className="flex items-center gap-6 text-sm">

          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>0934 073 275</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>support@happyfarm.vn</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock3 size={16} />
            <span>07:30 - 17:30</span>
          </div>

        </div>

        <div className="flex items-center gap-2 text-sm">

          <Truck size={16} />

          <span>
            Miễn phí giao hàng cho đơn từ 500.000₫
          </span>

        </div>

      </div>
    </div>
  );
}

export default TopBar;