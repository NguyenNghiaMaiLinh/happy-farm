import { Link } from "react-router-dom";
import { ShoppingCart, Eye, Star, Heart } from "lucide-react";
import { useState } from "react";

function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white border border-green-100/80 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-900/10">
      
      {/* IMAGE CONTAINER */}
      <div className="relative overflow-hidden bg-gray-100/80 aspect-4/3">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* OVERLAY GRADIENT ON HOVER */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* BADGES (TOP LEFT) */}
        <div className="absolute left-3.5 top-3.5 flex flex-col gap-1.5 items-start">
          {product.badge && (
            <span className="rounded-full bg-gradient-to-r from-emerald-600 to-green-600 px-3.5 py-1 text-xs font-bold text-white shadow-md uppercase tracking-wider">
              {product.badge}
            </span>
          )}

          {product.discountPercent && (
            <span className="rounded-full bg-red-500 px-3 py-0.5 text-xs font-extrabold text-white shadow-md">
              -{product.discountPercent}%
            </span>
          )}
        </div>

        {/* QUICK LIKE BUTTON (TOP RIGHT) */}
        <button
          onClick={() => setLiked(!liked)}
          className="absolute right-3.5 top-3.5 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 backdrop-blur-md text-gray-700 shadow-md transition-transform duration-200 hover:scale-110 hover:bg-white active:scale-90"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              liked ? "fill-red-500 text-red-500" : "text-gray-600"
            }`}
          />
        </button>
      </div>

      {/* CARD CONTENT */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        
        {/* CATEGORY & RATING */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
            {product.category}
          </span>

          <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>{product.rating || "4.9"}</span>
            <span className="text-gray-400 font-medium">({product.reviewCount || "48"})</span>
          </div>
        </div>

        {/* PRODUCT NAME */}
        <h3 className="mt-3 text-base sm:text-lg font-extrabold text-gray-900 line-clamp-2 min-h-[50px] group-hover:text-emerald-700 transition-colors">
          {product.name}
        </h3>

        {/* DESCRIPTION */}
        {product.description && (
          <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-gray-500 min-h-[36px]">
            {product.description}
          </p>
        )}

        {/* PRICE SECTION */}
        <div className="mt-4 pt-3 border-t border-gray-100 flex items-baseline gap-2">
          <span className="text-xl sm:text-2xl font-black text-emerald-700">
            {product.price}
          </span>
          {product.oldPrice && (
            <span className="text-xs text-gray-400 line-through font-medium">
              {product.oldPrice}
            </span>
          )}
        </div>

        {/* ACTION BUTTONS */}
        <div className="mt-5 grid grid-cols-2 gap-2.5">
          <Link
            to={`/products/${product.id}`}
            className="flex items-center justify-center gap-1.5 rounded-xl border-2 border-emerald-600/80 py-2.5 text-xs font-bold text-emerald-700 transition-all duration-200 hover:bg-emerald-600 hover:text-white active:scale-95"
          >
            <Eye size={15} />
            Chi tiết
          </Link>

          <Link
            to="/contact"
            className="flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 py-2.5 text-xs font-bold text-white shadow-md shadow-emerald-600/20 transition-all duration-200 hover:from-emerald-700 hover:to-green-700 hover:shadow-lg active:scale-95"
          >
            <ShoppingCart size={15} />
            Mua ngay
          </Link>
        </div>

      </div>
    </div>
  );
}

export default ProductCard;