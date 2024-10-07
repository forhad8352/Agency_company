import React from "react";
import Container from "./Container";
import Search from "../assets/search.png"
import Bag from "../assets/bag.png"

const Navbar = () => {
  return (
    <div>
      <Container>
        <div className="flex justify-between py-[28px] px-[80px] bg-[#FFFFFF] rounded-[100px] items-center">
          <div className="w-[40%] flex justify-around">
            <div className="">
              <a
                href="#"
                className="font-poppins text-[#1A1A1A] text-[16px] font-normal hover:bg-gradient-to-r from-grad to-ent  duration-300 ease-in-out"
              >
                Home
              </a>
            </div>
            <div className="">
              <a
                href="#"
                className="font-poppins text-[#1A1A1A] text-[16px] font-normal hover:bg-gradient-to-r from-grad to-ent  duration-300 ease-in-out"
              >
                About
              </a>
            </div>
            <div className="">
              <a
                href="#"
                className="font-poppins text-[#1A1A1A] text-[16px] font-normal hover:bg-gradient-to-r from-grad to-ent  duration-300 ease-in-out"
              >
                Services
              </a>
            </div>
            <div className="">
              <a
                href="#"
                className="font-poppins text-[#1A1A1A] text-[16px] font-normal hover:bg-gradient-to-r from-grad to-ent  duration-300 ease-in-out"
              >
                Pages
              </a>
            </div>
            <div className="">
              <a
                href="#"
                className="font-poppins text-[#1A1A1A] text-[16px] font-normal hover:bg-gradient-to-r from-grad to-ent  duration-300 ease-in-out"
              >
                Shop
              </a>
            </div>
            <div className="">
              <a
                href="#"
                className="font-poppins text-[#1A1A1A] text-[16px] font-normal hover:bg-gradient-to-r from-grad to-ent  duration-300 ease-in-out"
              >
                News
              </a>
            </div>
            <div className="">
              <a
                href="#"
                className="font-poppins text-[#1A1A1A] text-[16px] font-normal hover:bg-gradient-to-r from-grad to-ent  duration-300 ease-in-out"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="w-[30%] flex justify-end gap-x-8 items-center">
            <div className="border-[1px] border-[#FE651B] p-[10px] bg-[#F4F4FF] rounded-[50%] hover:bg-transparent duration-300 ease-in-out">
              <img src={Search} alt="" />
            </div>
            <div className="border-[1px] border-[#FE651B] p-[10px] bg-[#F4F4FF] rounded-[50%] hover:bg-transparent duration-300 ease-in-out">
              <img src={Bag} alt="" />
            </div>
            <button class="bg-gradient-to-r from-[#FE651B] to-[#FFAA52] text-white px-6 py-2 rounded-full ">
              Free Quote
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
