import { NavLink } from "react-router-dom";

function Navbar() {
  const menu = [
    {
      name: "Trang chủ",
      path: "/",
    },
    {
      name: "Sản phẩm",
      path: "/products",
    },
    {
      name: "Combo",
      path: "/combo",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Tư vấn thiết kế",
      path: "/contact",
    },
  ];

  return (
    <nav>
      <ul
        className="
          flex
          items-center
          gap-2
          xl:gap-4
        "
      >
        {menu.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `
                  group
                  relative
                  flex
                  items-center
                  rounded-xl
                  px-4
                  py-3
                  text-[15px]
                  font-semibold
                  transition-all
                  duration-300

                  ${
                    isActive
                      ? "bg-green-50 text-green-700"
                      : "text-gray-700 hover:bg-green-50 hover:text-green-700"
                  }
                `
              }
            >
              {item.name}

              {/* ACTIVE LINE */}
              <span
                className="
                  absolute
                  bottom-2
                  left-1/2
                  h-[2px]
                  w-0
                  -translate-x-1/2
                  rounded-full
                  bg-green-600
                  transition-all
                  duration-300
                  group-hover:w-3/4
                "
              />

              {/* ACTIVE DOT */}
              <span
                className="
                  absolute
                  -bottom-[5px]
                  left-1/2
                  h-1.5
                  w-1.5
                  -translate-x-1/2
                  rounded-full
                  bg-green-600
                  opacity-0
                  transition-all
                  duration-300
                  group-hover:opacity-100
                "
              />
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;