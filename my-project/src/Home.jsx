import React from "react";
import Header from "./component/Header";
import Menu from "./component/Menu";
import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import About from "./component/About";
import Company from "./component/Company";
import Services from "./component/Services";
import Protfolio from "./component/Protfolio";
import Buisness from "./component/Buisness";
import Testimonial from "./component/Testimonial";
import Faq from "./component/Faq";
import Blog from "./component/Blog";
import Fotter from "./component/Fotter";


const Home = () => {
  return (
    <>
      <div class="bg-[url('./src/assets/banner.png')] bg-cover bg-[#F4F4FF]">
        <Header />
        <Menu />
        <Navbar />
        <Banner />
      </div>
      <About />
      <div className="bg-[url('./src/assets/company.png')] bg-cover">
        <Company />
      </div>
      <Services />
      <Protfolio />
      <Buisness />
      <Testimonial />
      <Faq />
      <Blog />
      <Fotter/>
    </>
  );
};

export default Home;
