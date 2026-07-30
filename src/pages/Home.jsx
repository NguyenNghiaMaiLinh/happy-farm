import TopBar from "../components/TopBar/TopBar";
import Header from "../components/Header/Header";

import Hero from "../components/Hero/Hero";

import CategorySection from "../components/CategorySection/CategorySection";
import ProductSection from "../components/ProductSection/ProductSection";

import ComboSection from "../components/ComboSection/ComboSection";

import ServiceSection from "../components/ServiceSection/ServiceSection";

import PartnerSection from "../components/PartnerSection/PartnerSection";

import ReviewSection from "../components/ReviewSection/ReviewSection";

import CTASection from "../components/CTASection/CTASection";

import BlogSection from "../components/BlogSection/BlogSection";

import Footer from "../components/Footer/Footer";



function Home() {


  return (


    <div className="home-page">


      {/* TOP

      <TopBar />


      {/* HEADER */}

      {/* <Header /> */}
 



      <main>


        {/* HERO */}

        <Hero />



        {/* DANH MỤC */}

        <CategorySection />



        {/* SẢN PHẨM */}

        <ProductSection />



        {/* COMBO */}

        <ComboSection />



        {/* DỊCH VỤ */}

        <ServiceSection />



        {/* ĐỐI TÁC

        <PartnerSection /> */}



        {/* ĐÁNH GIÁ */}

        <ReviewSection />



        {/* CTA */}

        <CTASection />



        {/* BLOG */}

        <BlogSection />


      </main>





      {/* FOOTER */}

      <Footer />



    </div>


  );


}


export default Home;