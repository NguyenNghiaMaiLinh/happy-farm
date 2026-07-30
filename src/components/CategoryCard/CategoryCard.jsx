import { ArrowRight } from "lucide-react";

function CategoryCard({ category }) {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-md hover:shadow-2xl transition duration-300">

      <div className="overflow-hidden h-60">

        <img
          src={category.image}
          alt={category.name}
          className="h-full w-full object-cover group-hover:scale-110 transition duration-500"
        />

      </div>

      <div className="p-6">

        <h3 className="text-2xl font-bold text-green-800">
          {category.name}
        </h3>

        <p className="text-gray-500 mt-2">
          {category.total} sản phẩm
        </p>

        <button className="mt-6 flex items-center gap-2 text-green-700 font-semibold">

          Xem sản phẩm

          <ArrowRight size={18} />

        </button>

      </div>

    </div>
  );
}

export default CategoryCard;