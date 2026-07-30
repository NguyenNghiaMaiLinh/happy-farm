import { useState } from "react";
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  Search,
  ShoppingCart,
  Heart,
  User,
  Truck,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";
import MegaMenu from "./MegaMenu";

import logo from "../../assets/logo.svg";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header
      className="
        sticky
        top-0
        z-50
        bg-white/95
        backdrop-blur-md
        shadow-sm
      "
    >

      {/* ================= TOP BAR ================= */}

      <div
        className="
          hidden
          lg:block
          border-b
          border-green-100
          bg-green-50
        "
      >
        <div
          className="
            mx-auto
            flex
            h-11
            max-w-[1400px]
            items-center
            justify-between
            px-6
            xl:px-14
          "
        >
          <div className="flex items-center gap-8 text-sm text-gray-600">

            <div className="flex items-center gap-2">
              <Truck size={16} className="text-green-600" />
              <span>Giao hàng toàn quốc</span>
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-green-600" />
              <span>Đại lý • Bán sỉ • Giá tốt</span>
            </div>

          </div>

          <div className="flex items-center gap-5">

            <a
              href="tel:0934073275"
              className="
                flex
                items-center
                gap-2
                text-sm
                font-semibold
                text-green-700
                hover:text-green-600
              "
            >
              <Phone size={15} />
              0934 073 275
            </a>

            <a
              href="https://zalo.me/0934073275"
              target="_blank"
              rel="noreferrer"
              className="
                flex
                items-center
                gap-2
                rounded-lg
                bg-green-600
                px-4
                py-2
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-green-700
              "
            >
              <MessageCircle size={16} />
              Zalo
            </a>

          </div>
        </div>
      </div>

      {/* ================= MAIN HEADER ================= */}

      <div className="border-b border-gray-100 bg-white">

        <div
          className="
            mx-auto
            grid
            h-24
            max-w-[1400px]
            grid-cols-[260px_1fr_170px]
            items-center
            gap-8
            px-6
            xl:px-14
          "
        >

          {/* LOGO */}

          <Link
            to="/"
            className="
              flex
              items-center
              gap-4
            "
          >
            <img
              src={logo}
              alt="Happy Farm"
              className="h-14 w-14"
            />

            <div>

              <h1
                className="
                  text-3xl
                  font-black
                  leading-none
                  text-green-700
                "
              >
                Happy Farm
              </h1>

              <p
                className="
                  mt-1
                  text-sm
                  text-gray-500
                "
              >
                Đất trồng • Giá thể • Phân bón
              </p>

            </div>

          </Link>

          {/* SEARCH */}

          <div className="relative hidden lg:block">

            <Search
              size={20}
              className="
                absolute
                left-5
                top-1/2
                -translate-y-1/2
                text-gray-400
              "
            />

            <input
              type="text"
              placeholder="Tìm kiếm đất trồng, phân bón, giá thể..."
              className="
                h-14
                w-full
                rounded-2xl
                border
                border-gray-200
                bg-gray-50
                pl-14
                pr-40
                text-[15px]
                outline-none
                transition
                focus:border-green-500
                focus:bg-white
              "
            />

            <button
              className="
                absolute
                right-2
                top-2
                rounded-xl
                bg-green-600
                px-7
                py-3
                font-semibold
                text-white
                transition
                hover:bg-green-700
              "
            >
              Tìm kiếm
            </button>

          </div>

          {/* ACTION */}

          <div
            className="
              hidden
              justify-end
              gap-3
              lg:flex
            "
          >

            <button className="rounded-xl border p-3 hover:bg-green-50">
              <Heart size={20}/>
            </button>

            <button className="rounded-xl border p-3 hover:bg-green-50">
              <ShoppingCart size={20}/>
            </button>

            <button className="rounded-xl border p-3 hover:bg-green-50">
              <User size={20}/>
            </button>

          </div>          {/* MOBILE BUTTON */}

          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="
              flex
              items-center
              justify-center
              rounded-xl
              border
              border-green-200
              bg-green-50
              p-3
              text-green-700
              lg:hidden
            "
          >
            {openMenu ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>

      {/* ================= NAVIGATION ================= */}

      <div
        className="
          hidden
          border-t
          border-gray-100
          bg-white
          lg:block
        "
      >
        <div
          className="
            mx-auto
            flex
            h-16
            max-w-[1400px]
            items-center
            justify-between
            px-6
            xl:px-14
          "
        >
          <div className="flex items-center gap-8">

            {/* CATEGORY */}

            <div className="group relative">

              <button
                className="
                  flex
                  h-12
                  items-center
                  gap-3
                  rounded-2xl
                  bg-green-600
                  px-6
                  font-semibold
                  text-white
                  transition
                  hover:bg-green-700
                "
              >
                <Menu size={20} />
                Danh mục sản phẩm
              </button>

              <MegaMenu />

            </div>

            {/* NAVBAR */}

            <Navbar />

          </div>

          {/* RIGHT */}

          <div
            className="
              rounded-xl
              bg-orange-50
              px-5
              py-2
              text-sm
              font-semibold
              text-orange-600
            "
          >
            🎉 Miễn phí giao hàng nội thành
          </div>

        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}

      {openMenu && (
        <div
          className="
            border-t
            bg-white
            px-5
            py-5
            lg:hidden
          "
        >
          <div className="space-y-3">

            <input
              type="text"
              placeholder="Tìm sản phẩm..."
              className="
                w-full
                rounded-xl
                border
                border-gray-200
                px-4
                py-3
                outline-none
                focus:border-green-500
              "
            />

            <Navbar />

            <div className="flex flex-col gap-3 pt-4">

              <a
                href="tel:0934073275"
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-green-600
                  px-5
                  py-3
                  font-semibold
                  text-white
                "
              >
                <Phone size={18} />
                0934 073 275
              </a>

              <a
                href="https://zalo.me/0934073275"
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border-2
                  border-green-600
                  px-5
                  py-3
                  font-semibold
                  text-green-700
                "
              >
                <MessageCircle size={18} />
                Zalo
              </a>

            </div>
          </div>
        </div>
      )}

    </header>
  );
}

export default Header;