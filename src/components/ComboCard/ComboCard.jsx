import { Link } from "react-router-dom";
import { Sparkles, ShoppingBag, CheckCircle2 } from "lucide-react";

function ComboCard({ combo }) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white border border-green-100 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-900/10">
      
      {/* IMAGE CONTAINER */}
      <div className="relative h-60 overflow-hidden bg-gray-100">
        <img
          src={combo.image}
          alt={combo.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <span className="absolute left-3.5 top-3.5 inline-flex items-center gap-1 rounded-full bg-amber-500 px-3.5 py-1 text-xs font-black text-white shadow-md uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 fill-white" />
          Gói Tiết Kiệm
        </span>
      </div>

      {/* CARD CONTENT */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors">
          {combo.name}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-gray-600 line-clamp-3 min-h-[60px]">
          {combo.description}
        </p>

        <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg">
          <CheckCircle2 size={15} className="text-emerald-600" />
          <span>Tặng kèm hướng dẫn phối trộn chuẩn</span>
        </div>

        <Link
          to="/contact"
          className="mt-6 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-green-600 py-3.5 text-sm font-bold text-white shadow-md shadow-emerald-600/20 transition-all duration-200 hover:from-emerald-700 hover:to-green-700 hover:shadow-lg active:scale-95"
        >
          <ShoppingBag size={17} />
          Nhận tư vấn combo
        </Link>
      </div>
    </div>
  );
}

export default ComboCard;