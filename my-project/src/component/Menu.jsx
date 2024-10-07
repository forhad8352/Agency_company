import React from "react";
import Logo from "../assets/logo.png";
import Container from "./Container";
import Call from "../assets/Call.png";
import Message from "../assets/message.png";
import Time from "../assets/time.png";
const Menu = () => {
  return (
    <div>
      <Container>
        <div className="flex justify-between items-center py-[30px]">
          <div className="w-[30%]">
            <img src={Logo} alt="" />
          </div>
          <div className="w-[60%] flex justify-between">
            <div className="flex items-center">
              <img src={Call} alt="" />
              <div className="pl-[18px]">
                <h6 className="text-[#5B5B5B] font-normal text-[14px] leading-3 font-nunito">
                  Phone Number
                </h6>
                <p className="font-nunito text-[18px] font-normal text-primary">
                  +8801602762283
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <img src={Message} alt="" />
              <div className="pl-[18px]">
                <h6 className="text-[#5B5B5B] font-normal text-[14px] leading-3 font-nunito">
                  Email
                </h6>
                <p className="font-nunito text-[18px] font-normal text-primary">
                  forhadhossen328@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <img src={Time} alt="" />
              <div className="pl-[18px]">
                <h6 className="text-[#5B5B5B] font-normal text-[14px] leading-3 font-nunito">
                  Weekend Hours
                </h6>
                <p className="font-nunito text-[18px] font-normal text-primary">
                  Weekend Sat & Sunday
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Menu;
