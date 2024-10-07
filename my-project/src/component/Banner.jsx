import React from "react";
import Container from "./Container";
import Bann from "../assets/ban.png";
const Banner = () => {
  return (
    <div>
      <Container>
        <div className="flex justify-between py-[78px]">
          <div className="w-[50%] py-[85px]">
            <h4 className="text-[25px] text-[#3661FC] font-normal leading-6 font-dm ">
              Get Started With Ortencey
            </h4>
            <h1 className="font-bold text-[60px] text-primary leading-[70px] font-nunito py-[20px]">
              We Are The Best Digital{" "}
              <span className="text-transparent bg-gradient-to-r from-grad to-ent bg-clip-text  ">
                Marketing{" "}
              </span>{" "}
              Agency.
            </h1>
            <div className="w-[590px]">
              <p className="text-[20px] font-normal text-[#6B6161] font-dm pb-[50px]">
                The 3 golden rules professional Digital Marketing Agency don’t
                want you to know about.
              </p>
            </div>

            <div className="">
              <button class="bg-gradient-to-r from-grad to-ent  text-[18px] font-dm text-white px-6 py-2 rounded-full duration-500 ease-in-out hover:bg-[#FFFFFF] active:bg-[#FFFF] hover:text-primary focus:outline-none mr-[25px]">
                Discover Me
              </button>{" "}
              <button class="bg-gradient-to-r from-grad to-ent  text-[18px] font-dm text-white px-6 py-2 rounded-full duration-500 ease-in-out hover:bg-[#FFFFFF] active:bg-[#FFFF] hover:text-primary focus:outline-none">
                Free Quote
              </button>
            </div>
          </div>
          <div className="">
            <img src={Bann} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
