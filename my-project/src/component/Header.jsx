import React from "react";
import Container from "./Container";
import Facebok from "../assets/Facebook.png"
import Twitter from "../assets/Twitter.png"
import Linkdin from "../assets/Linkdin.png";
import Youtube from "../assets/Youtube.png";

const Header = () => {
  return (
    <div className="bg-[#3661FC] rounded-b-[100px]">
      <Container>
        <div className="flex justify-between py-[12px] items-center">
          <div className="">
            <h4 className=" font-nunito text-[#FFFFFF] font-normal text-[14px]">
              Welcome to Ortencey Digital Market Agency
            </h4>
          </div>
          <div className="flex">
            <div className="pr-[46px]">
              <p className="font-nunito text-[#FFFFFF] font-normal text-[14px] leading-6">
                English
              </p>
            </div>
            <div className="flex gap-x-8">
              <div>
                <img src={Facebok} alt="" />
              </div>
              <div>
                <img src={Twitter} alt="" />
              </div>
              <div>
                <img src={Linkdin} alt="" />
              </div>
              <div>
                <img src={Youtube} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
