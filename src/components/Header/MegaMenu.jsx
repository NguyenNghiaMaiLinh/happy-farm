import { Link } from "react-router-dom";
import categories from "../../data/categories";

function MegaMenu() {
  return (
    <div
      className="
        absolute
        left-0
        top-full
        mt-4
        hidden
        w-[1100px]
        overflow-hidden
        rounded-[28px]
        border
        border-gray-200
        bg-white
        shadow-[0_20px_60px_rgba(0,0,0,0.12)]
        group-hover:block
      "
    >
      <div
        className="
          grid
          grid-cols-[280px_1fr]
          min-h-[560px]
        "
      >
        {/* LEFT MENU */}
        <aside
          className="
            flex
            flex-col
            border-r
            border-gray-200
            bg-gradient-to-b
            from-green-50
            to-white
          "
        >
          <div className="border-b px-6 py-6">
            <h3 className="text-xl font-bold text-green-700">
              Danh mục sản phẩm
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Chọn nhanh theo từng nhóm sản phẩm
            </p>
          </div>

          <div className="flex-1">
            {categories.map((item) => (
              <Link
                key={item.id}
                to={`/category/${item.slug}`}
                className="
                  group
                  flex
                  items-center
                  gap-4
                  border-b
                  border-gray-100
                  px-6
                  py-4
                  transition-all
                  duration-300
                  hover:bg-green-100
                  hover:pl-8
                "
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-white
                    shadow-sm
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                >
                  <span className="text-2xl">
                    {item.icon}
                  </span>
                </div>

                <div className="flex-1">
                  <p className="font-semibold text-gray-800">
                    {item.name}
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    {item.total} sản phẩm
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </aside>

        {/* RIGHT CONTENT */}
        <section className="flex flex-col bg-white p-8">

          {/* Banner */}
          <div
            className="
              overflow-hidden
              rounded-3xl
              bg-gradient-to-r
              from-green-700
              via-green-600
              to-green-500
              p-8
              text-white
            "
          >
            <div className="max-w-xl">
              <p className="text-sm uppercase tracking-[4px] text-green-100">
                HAPPY FARM
              </p>

              <h2 className="mt-3 text-4xl font-black leading-tight">
                Giải pháp trồng cây
                <br />
                cho mọi không gian
              </h2>

              <p className="mt-5 text-green-50 leading-7">
                Chuyên cung cấp đất trồng, giá thể, phân bón,
                hạt giống và vật tư nông nghiệp chất lượng cao
                dành cho hộ gia đình, nhà vườn và đại lý.
              </p>

              <div className="mt-8 flex gap-4">
                <Link
                  to="/products"
                  className="
                    rounded-xl
                    bg-white
                    px-6
                    py-3
                    font-bold
                    text-green-700
                    transition
                    hover:-translate-y-1
                  "
                >
                  Xem sản phẩm
                </Link>

                <Link
                  to="/combo"
                  className="
                    rounded-xl
                    border
                    border-white/40
                    px-6
                    py-3
                    font-bold
                    transition
                    hover:bg-white/10
                  "
                >
                  Combo nổi bật
                </Link>
              </div>
            </div>
          </div>          {/* Category Cards */}
          <div className="mt-8">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Danh mục nổi bật
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Khám phá nhanh các nhóm sản phẩm bán chạy
                </p>
              </div>

              <Link
                to="/products"
                className="
                  rounded-xl
                  bg-green-600
                  px-5
                  py-3
                  text-sm
                  font-bold
                  text-white
                  transition
                  hover:bg-green-700
                "
              >
                Xem tất cả
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {categories.slice(0, 6).map((item) => (
                <Link
                  key={item.id}
                  to={`/category/${item.slug}`}
                  className="
                    group
                    overflow-hidden
                    rounded-3xl
                    border
                    border-gray-200
                    bg-white
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:shadow-xl
                  "
                >
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="
                        h-40
                        w-full
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-110
                      "
                    />
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-3">
                      <div
                        className="
                          flex
                          h-11
                          w-11
                          items-center
                          justify-center
                          rounded-2xl
                          bg-green-100
                          text-xl
                        "
                      >
                        {item.icon}
                      </div>

                      <div>
                        <h4 className="font-bold text-gray-800">
                          {item.name}
                        </h4>

                        <p className="text-xs text-gray-400">
                          {item.total} sản phẩm
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-500">
                      {item.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between">
                      <span
                        className="
                          text-sm
                          font-semibold
                          text-green-700
                        "
                      >
                        Xem chi tiết
                      </span>

                      <div
                        className="
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-full
                          bg-green-100
                          transition
                          group-hover:bg-green-600
                          group-hover:text-white
                        "
                      >
                        →
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default MegaMenu;