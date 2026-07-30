import { Phone, MessageCircle } from "lucide-react";

function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3.5">
      {/* ZALO BUTTON */}
      <a
        href="https://zalo.me/0934073275"
        target="_blank"
        rel="noreferrer"
        title="Tư vấn qua Zalo"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-blue-600 text-white shadow-xl shadow-blue-600/30 transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <span className="absolute -left-36 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg pointer-events-none whitespace-nowrap">
          Chat Zalo ngay
        </span>
        <MessageCircle className="w-7 h-7" />
        <span className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-20 pointer-events-none"></span>
      </a>

      {/* PHONE BUTTON */}
      <a
        href="tel:0934073275"
        title="Gọi hotline ngay"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 text-white shadow-xl shadow-emerald-600/40 animate-pulse-glow transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <span className="absolute -left-36 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-gray-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg pointer-events-none whitespace-nowrap">
          Gọi 0934 073 275
        </span>
        <Phone className="w-7 h-7" />
      </a>
    </div>
  );
}

export default FloatingContact;
