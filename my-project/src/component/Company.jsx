import React from "react";
import Container from "./Container";
import Illustration from "../assets/Illustration.png";
const Company = () => {
  return (
    <div cla>
      <Container>
        <div className="flex justify-between py-[150px]">
          <div className="w-[50%]">
            <img src={Illustration} alt="" />
          </div>
          <div className="w-[50%] pr-[70px] pt-[100px]">
            <h5 className="text-[20px] font-dm font-medium text-[#FE651B]">
              Aboute our company
            </h5>
            <h2 className="text-[46px] font-nunito font-bold leading-[56px] text-primary pb-[27px] pt-[15px]">
              Learn How to Grow your Business in Days
            </h2>
            <p className="text-[16px] font-dm font-normal text-[#6B6161] leading-6 pb-[32px]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised word which don't look even sligh
              believable. If you are going to use a passage of Lorem Ipsum, you
              need to be sure there isn't anything embarrassing.
            </p>
            <div>
              <input type="checkbox" />
              <span className="text-[16px] font-dm text-primary leading-7 pl-[10px]">
                01. Best market Research Policy.
              </span>
            </div>
            <div className="pb-[48px]">
              <input type="checkbox" />
              <span className="text-[16px] font-dm text-primary leading-7 pl-[10px]">
                02. 24/7 Days super Support.
              </span>
            </div>
            <button class="bg-gradient-to-r from-[#FE651B] to-[#FFAA52] text-white hover:text-primary duration-300 ease-in-out px-8 py-4 rounded-full ">
              <a href="">Read More</a>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Company;
