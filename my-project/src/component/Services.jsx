import React from "react";
import Container from "./Container";
import Email from "../assets/email.jpg"
import WEb from "../assets/web.jpg"
import Search from "../assets/search.jpg"
import Net from "../assets/network.jpg"
const Services = () => {
  return (
    <div className="bg-[#F4F4FF] py-[120px]">
      <Container>
        <div className="text-center">
          <h4 className="font-dm font-medium text-[20px] text-transparent bg-gradient-to-r from-grad to-ent bg-clip-text ">
            {" "}
            Our Services
          </h4>
          <h2 className="font-nunito font-bold text-[46px] text-primary leading-[56px]">
            Best Quality Services
          </h2>
        </div>
        <div className="flex justify-between items-center py-[20px] pl-[20px] pr-[60px] bg-[#FFFFFF] rounded-[35px] mt-[40px]">
          <div className="w-[30%]">
            <div className="">
              <img
                className="w-[390px] h-[197px] rounded-[25px]"
                src={Search}
                alt=""
              />
            </div>
          </div>
          <div className="w-[50%]">
            <h3 className="font-bold font-nunito text-primary text-[#25px] pb-[20px]">
              Search Engine Optimization
            </h3>
            <p className="font-dm font-normal text-[#6B6161] text-[16px] leading-6">
              There are many variations of passages of Lorem Ipsusm available,
              but the majority our as have suffered alteration in some form, by
              injected humour, or randomised word which don't worry a look even
              sligh believable. If you are going to use a passage.
            </p>
          </div>
          <div className="w-[20%] text-end">
            <button class="bg-[transparent] border-[1px] border-[#FE651B] text-primary hover:bg-[#FE651B] hover:text-white duration-300 ease-in-out px-8 py-4 rounded-full ">
              <a href="">Read More</a>
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center py-[20px] pl-[20px] pr-[60px] bg-[#FFFFFF] rounded-[35px] mt-[30px]">
          <div className="w-[30%]">
            <div className="">
              <img
                className="w-[390px] h-[197px] rounded-[25px]"
                src={WEb}
                alt=""
              />
            </div>
          </div>
          <div className="w-[50%]">
            <h3 className="font-bold font-nunito text-primary text-[#25px] pb-[20px]">
              Web Design & Development
            </h3>
            <p className="font-dm font-normal text-[#6B6161] text-[16px] leading-6">
              There are many variations of passages of Lorem Ipsusm available,
              but the majority our as have suffered alteration in some form, by
              injected humour, or randomised word which don't worry a look even
              sligh believable. If you are going to use a passage.
            </p>
          </div>
          <div className="w-[20%] text-end">
            <button class="bg-[transparent] border-[1px] border-[#FE651B] text-primary hover:bg-[#FE651B] hover:text-white duration-300 ease-in-out px-8 py-4 rounded-full ">
              <a href="">Read More</a>
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center py-[20px] pl-[20px] pr-[60px] bg-[#FFFFFF] rounded-[35px] mt-[30px]">
          <div className="w-[30%]">
            <div className="">
              <img
                className="w-[390px] h-[197px] rounded-[25px]"
                src={Email}
                alt=""
              />
            </div>
          </div>
          <div className="w-[50%]">
            <h3 className="font-bold font-nunito text-primary text-[#25px] pb-[20px]">
              Email and Content Marketing
            </h3>
            <p className="font-dm font-normal text-[#6B6161] text-[16px] leading-6">
              There are many variations of passages of Lorem Ipsusm available,
              but the majority our as have suffered alteration in some form, by
              injected humour, or randomised word which don't worry a look even
              sligh believable. If you are going to use a passage.
            </p>
          </div>
          <div className="w-[20%] text-end">
            <button class="bg-[transparent] border-[1px] border-[#FE651B] text-primary hover:bg-[#FE651B] hover:text-white duration-300 ease-in-out px-8 py-4 rounded-full ">
              <a href="">Read More</a>
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center py-[20px] pl-[20px] pr-[60px] bg-[#FFFFFF] rounded-[35px] mt-[30px]">
          <div className="w-[30%]">
            <div className="">
              <img
                className="w-[390px] h-[197px] rounded-[25px]"
                src={Net}
                alt=""
              />
            </div>
          </div>
          <div className="w-[50%]">
            <h3 className="font-bold font-nunito text-primary text-[#25px] pb-[20px]">
              Social Media Network Marketing
            </h3>
            <p className="font-dm font-normal text-[#6B6161] text-[16px] leading-6">
              There are many variations of passages of Lorem Ipsusm available,
              but the majority our as have suffered alteration in some form, by
              injected humour, or randomised word which don't worry a look even
              sligh believable. If you are going to use a passage.
            </p>
          </div>
          <div className="w-[20%] text-end">
            <button class="bg-[transparent] border-[1px] border-[#FE651B] text-primary hover:bg-[#FE651B] hover:text-white duration-300 ease-in-out px-8 py-4 rounded-full ">
              <a href="">Read More</a>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
