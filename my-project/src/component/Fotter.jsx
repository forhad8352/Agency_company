import React from "react";
import Container from "./Container";
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoYoutube,
} from "react-icons/io5";
import Call from "../assets/bluecall.png";
import Msg from "../assets/bluemasg.png";
import location from "../assets/location.png";
import Say from "../assets/say2.png";
import Date from "../assets/date.png";
const Fotter = () => {
  return (
    <div className="bg-[#F4F4FF] py-[70px]">
      <Container>
        <div className="flex justify-between items-center border-[#D7DFFE] border-b-[1px] pb-[60px]">
          <div className="">
            <h6 className="text-[16px] font-dm text-grayy font-normal">
              For Digital Marketing Agency
            </h6>
            <h3 className="font-nunito text-[25px] text-primary font-bold">
              Join Our Agency Community
            </h3>
          </div>
          <div className="">
            <div class="relative w-[480px] bg-[#FFFFFF] rounded-[50px] shadow-md p-1.5 transition-all duration-150 ease-in-out hover:shadow-lg">
              <input
                type="text"
                class="w-full pl-8 pr-24 py-3 text-base text-gray-700 bg-transparent  focus:outline-none"
                placeholder="Enter your email address"
              />
              <button class="absolute right-1 top-1 bottom-1 px-8 bg-orange-400 text-white font-medium rounded-[50px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fb923c]">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-[93px]">
          <div className="w-[23%]">
            <h4 className="font-nunito text-[25px] font-bold text-primary">
              About Company
            </h4>
            <p className="text-grayy font-dm font-normal text-[16px] pt-[27px]">
              There are many variations of passages of Lore Ipsum availab but
              the majority have suffereds alteration in some form, by injected
              humour a randomised words which
            </p>
            <div className="flex pt-[22px]">
              <span className="p-3 bg-white rounded-[50%] ">
                <IoLogoFacebook className="text-[25px] text-[#3661FC] "/>
              </span>
              <span className="p-3 bg-white rounded-[50%] mx-[17px]">
                <IoLogoTwitter className="text-[25px] text-[#3661FC] "/>
              </span>
              <span className="p-3 bg-white rounded-[50%] ">
                <IoLogoLinkedin className="text-[25px] text-[#3661FC] " />
              </span>
              <span className="p-3 bg-white rounded-[50%] ml-[17px]">
                <IoLogoYoutube className="text-[25px] text-[#3661FC] "/>
              </span>
            </div>
          </div>
          <div className="w-[23%]">
            <h4 className="font-nunito text-[25px] font-bold text-primary">
              Featured Services
            </h4>
            <h6 className="text-[16px] font-normal font-dm text-grayy">
              Social Media Marketing
            </h6>
            <h6 className="text-[16px] font-normal font-dm text-grayy">
              Pay Per Click Management
            </h6>
            <h6 className="text-[16px] font-normal font-dm text-grayy">
              Search Engine Optimization
            </h6>
            <h6 className="text-[16px] font-normal font-dm text-grayy">
              Free SEO Analysis
            </h6>
            <h6 className="text-[16px] font-normal font-dm text-grayy">
              Case Studies
            </h6>
          </div>
          <div className="w-[23%]">
            <h4 className="font-nunito text-[25px] font-bold text-primary">
              Recent Post
            </h4>
            <div className="flex pt-[30px]">
              <div className="">
                <img className="w-[70px]" src={Say} alt="" />
              </div>
              <div className="pl-[20px]">
                <p className="w-[180px] text-[16px] font-medium font-dm text-grayy">
                  Thoughtful man using laptop pondering{" "}
                </p>
                <div className="flex items-center pt-[11px]">
                  <span>
                    <img src={Date} alt="" />
                  </span>
                  <span className="text-[14px] font-poppins text-grayy font-normal pl-[10px]">
                    {" "}
                    09 Dec 2022
                  </span>
                </div>
              </div>
            </div>
            <div className="flex pt-[30px]">
              <div className="">
                <img className="w-[70px]" src={Say} alt="" />
              </div>
              <div className="pl-[20px]">
                <p className="w-[180px] text-[16px] font-medium font-dm text-grayy">
                  Thoughtful man using laptop pondering{" "}
                </p>
                <div className="flex items-center pt-[11px]">
                  <span>
                    <img src={Date} alt="" />
                  </span>
                  <span className="text-[14px] font-poppins text-grayy font-normal pl-[10px]">
                    {" "}
                    09 Dec 2022
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[23%]">
            <h4 className="font-nunito text-[25px] font-bold text-primary">
              Contact Us
            </h4>
            <div className="flex mt-[27px]">
              <img src={Call} alt="" />
              <span className="text-[16px] font-normal font-dm text-grayy pl-[20px]">
                +88001602762283
              </span>
            </div>
            <div className="flex my-[18px]">
              <img src={Msg} alt="" />
              <span className="text-[16px] font-normal font-dm text-grayy pl-[20px]">
                forhadhossen328@gmail.com
              </span>
            </div>
            <div className="flex">
              <img src={location} alt="" />
              <span className="text-[16px] font-normal font-dm text-grayy pl-[20px]">
                middle Badda Dhaka/Bangladesh
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Fotter;
