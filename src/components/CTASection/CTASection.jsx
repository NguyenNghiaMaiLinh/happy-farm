import { Phone, MessageCircle, ArrowRight } from "lucide-react";

function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-green-700 to-green-600 py-20">

      <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-white/10"></div>

      <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-white/10"></div>

      <div className="container relative mx-auto px-4">

        <div className="mx-auto max-w-5xl rounded-3xl bg-white/10 p-10 backdrop-blur">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>

              <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-green-700">
                HAPPY FARM
              </span>

              <h2 className="mt-6 text-4xl font-bold leading-tight text-white">
                Bạn cần tư vấn
                <br />
                đất trồng hoặc phân bón?
              </h2>

              <p className="mt-6 text-lg leading-8 text-green-100">
                Đội ngũ Happy Farm luôn sẵn sàng hỗ trợ lựa chọn đất trồng,
                giá thể, phân bón và giải pháp phù hợp cho ban công,
                sân thượng, vườn rau gia đình hoặc cây ăn trái.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">

                <button className="flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-green-700 transition hover:scale-105">

                  <Phone size={20} />

                  0934 073 275

                </button>

                <button className="flex items-center gap-3 rounded-xl border border-white px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-green-700">

                  <MessageCircle size={20} />

                  Chat Zalo

                </button>

              </div>

            </div>

            <div>

              <div className="rounded-3xl bg-white p-8 shadow-xl">

                <h3 className="text-3xl font-bold text-green-700">
                  Vì sao chọn Happy Farm?
                </h3>

                <div className="mt-8 space-y-5">

                  <div className="flex items-start gap-3">
                    <ArrowRight className="mt-1 text-green-600" />
                    <p>Đất sạch và giá thể chất lượng cao.</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <ArrowRight className="mt-1 text-green-600" />
                    <p>Phân bón chính hãng từ các thương hiệu uy tín.</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <ArrowRight className="mt-1 text-green-600" />
                    <p>Tư vấn miễn phí theo từng loại cây.</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <ArrowRight className="mt-1 text-green-600" />
                    <p>Giao hàng nhanh tại Bình Dương và TP.HCM.</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <ArrowRight className="mt-1 text-green-600" />
                    <p>Hỗ trợ kỹ thuật sau khi mua hàng.</p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CTASection;