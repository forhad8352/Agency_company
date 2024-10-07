import React from "react";
import Container from "./Container";
import Buisnes from "../assets/buisness.png";
const Buisness = () => {
  return (
    <div className="py-[120px]">
      <Container>
        <div className="flex justify-between">
          <div className="w-[40%]">
            <h5 className="font-dm font-medium text-[20px]  text-orange-400 pb-[18px] pt-[52px]">
              Bringing Action To Brands
            </h5>
            <h3 className="font-nunito text-[46px] text-primary font-bold pb-[28px]">
              Business Indices, Visitor Traffic Latest Analytic Tools
            </h3>
            <p className="font-dm text-[16px] font-normal text-grayy">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised word which don't look even sligh
              believable.
            </p>
            <div className="py-[33px] px-[40px] bg-[#fff5ed] rounded-[25px] mt-[39px]">
              <h4 className="font-dm font-medium text-[18px] text-primary leading-6 pb-[23px]">
                Get Started With a Dynamic Web Optimization Campaign.
              </h4>
              <div>
                <span className="font-nunito text-[25px] font-bold text-[#3661FC] pr-[123px]">
                  10.95%
                </span>
                <span className="font-nunito text-[25px] font-bold text-[#3661FC]">
                  6.50%
                </span>
              </div>
              <div>
                <span className="font-dm font-normal text-[16px] text-grayy leading-[26px] pr-[70px]">
                  Increase In Monthly
                </span>
                <span className="font-dm font-normal text-[16px] text-grayy leading-[26px]">
                  Increase In Monthly
                </span>
              </div>
            </div>
          </div>
          <div className="w-[40%] justify-end">
            <img className="w-full" src={Buisnes} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Buisness;
