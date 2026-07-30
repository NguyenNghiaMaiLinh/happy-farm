import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Send,
} from "lucide-react";


function Contact() {


  return (

    <div className="bg-gray-50">


      {/* Banner */}

      <section className="bg-green-700 py-20 text-center text-white">


        <h1 className="text-4xl font-bold">

          Liên hệ Happy Farm

        </h1>


        <p className="mx-auto mt-4 max-w-2xl text-lg text-green-100">

          Tư vấn đất trồng, giá thể, phân bón và giải pháp chăm sóc cây phù hợp.

        </p>


      </section>






      {/* Contact Content */}

      <section className="container mx-auto px-4 py-16">


        <div className="grid gap-10 lg:grid-cols-2">





          {/* Information */}

          <div className="rounded-3xl bg-white p-8 shadow-lg">


            <h2 className="text-3xl font-bold text-green-700">

              Thông tin Happy Farm

            </h2>



            <div className="mt-8 space-y-6">



              <div className="flex items-start gap-4">


                <Phone className="text-green-600" size={28}/>


                <div>

                  <h3 className="font-bold">

                    Hotline

                  </h3>


                  <a

                    href="tel:0934073275"

                    className="text-lg text-green-700"

                  >

                    0934 073 275

                  </a>


                </div>


              </div>






              <div className="flex items-start gap-4">


                <MessageCircle className="text-green-600" size={28}/>


                <div>

                  <h3 className="font-bold">

                    Zalo

                  </h3>


                  <p>

                    Chat tư vấn nhanh về sản phẩm và báo giá.

                  </p>


                </div>


              </div>







              <div className="flex items-start gap-4">


                <MapPin className="text-green-600" size={28}/>


                <div>

                  <h3 className="font-bold">

                    Khu vực giao hàng

                  </h3>


                  <p>

                    Bình Dương - TP.HCM

                  </p>


                </div>


              </div>







              <div className="flex items-start gap-4">


                <Clock className="text-green-600" size={28}/>


                <div>

                  <h3 className="font-bold">

                    Thời gian hỗ trợ

                  </h3>


                  <p>

                    Thứ 2 - Chủ nhật

                  </p>


                </div>


              </div>




            </div>



          </div>








          {/* Form */}

          <div className="rounded-3xl bg-white p-8 shadow-lg">


            <h2 className="text-3xl font-bold text-green-700">

              Nhận báo giá

            </h2>



            <p className="mt-3 text-gray-600">

              Để lại thông tin, Happy Farm sẽ liên hệ tư vấn sản phẩm phù hợp.

            </p>





            <form className="mt-8 space-y-5">



              <input

                type="text"

                placeholder="Họ và tên"

                className="w-full rounded-xl border px-4 py-3 outline-none focus:border-green-600"

              />




              <input

                type="tel"

                placeholder="Số điện thoại"

                className="w-full rounded-xl border px-4 py-3 outline-none focus:border-green-600"

              />





              <textarea

                placeholder="Bạn cần tư vấn sản phẩm nào?"

                rows="5"

                className="w-full rounded-xl border px-4 py-3 outline-none focus:border-green-600"

              />






              <button

                type="button"

                className="flex w-full items-center justify-center gap-3 rounded-xl bg-green-600 py-4 font-bold text-white transition hover:bg-green-700"

              >

                <Send size={20}/>

                Gửi yêu cầu báo giá

              </button>




            </form>



          </div>




        </div>


      </section>



    </div>

  );


}


export default Contact;