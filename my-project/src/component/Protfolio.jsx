import React from "react";
import Container from "./Container";
import Plus from "../assets/Plus.png";
import Team from "../assets/team.jpg";
import Slider from "react-slick";
const Protfolio = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="py-[150px]">
      <Container>
        <div className="">
          <div className="text-center">
            <h5 className="text-[20px] font-medium text-transparent bg-gradient-to-r from-grad to-ent bg-clip-text  font-dm">
              Our Portfolio
            </h5>
            <h3 className="text-[46px] font-bold font-nunito text-primary">
              Our Impressive Portfolio
            </h3>
          </div>
        </div>
        <div className="mt-[46px] flex justify-between">
          <div className="w-[24%]">
            <div className="relative">
              <img
                className=" rounded-b-[30px] rounded-t-[10px] w-full"
                src={Team}
                alt=""
              />
              <div className="flex justify-between items-center absolute bottom-[-70px] -z-10 right-0 rounded-b-[30px] px-[40px] py-[25px] bg-[#F4F4F4]  w-full h-[100px]">
                <div className="">
                  <p className="font-dm text-[20px] text-primary font-medium pt-[20px]">
                    Monthly Design Magazine
                  </p>
                  <p className="font-normal text-[#6B6161] text-[16px] font-dm">
                    Print, Books
                  </p>
                </div>
                <div className="">
                  <img className="w-[30px]" src={Plus} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[24%]">
            <div className="relative">
              <img
                className=" rounded-b-[30px] rounded-t-[10px] w-full"
                src={Team}
                alt=""
              />
              <div className="flex justify-between items-center absolute bottom-[-70px] -z-10 right-0 rounded-b-[30px] px-[40px] py-[25px] bg-[#F4F4F4]  w-full h-[100px]">
                <div className="">
                  <p className="font-dm text-[20px] text-primary font-medium pt-[20px]">
                    Monthly Design Magazine
                  </p>
                  <p className="font-normal text-[#6B6161] text-[16px] font-dm">
                    Print, Books
                  </p>
                </div>
                <div className="">
                  <img className="w-[30px]" src={Plus} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[24%]">
            <div className="relative">
              <img
                className=" rounded-b-[30px] rounded-t-[10px] w-full"
                src={Team}
                alt=""
              />
              <div className="flex justify-between items-center absolute bottom-[-70px] -z-10 right-0 rounded-b-[30px] px-[40px] py-[25px] bg-[#F4F4F4]  w-full h-[100px]">
                <div className="">
                  <p className="font-dm text-[20px] text-primary font-medium pt-[20px]">
                    Monthly Design Magazine
                  </p>
                  <p className="font-normal text-[#6B6161] text-[16px] font-dm">
                    Print, Books
                  </p>
                </div>
                <div className="">
                  <img className="w-[30px]" src={Plus} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[24%]">
            <div className="relative">
              <img
                className=" rounded-b-[30px] rounded-t-[10px] w-full"
                src={Team}
                alt=""
              />
              <div className="flex justify-between items-center absolute bottom-[-70px] -z-10 right-0 rounded-b-[30px] px-[40px] py-[25px] bg-[#F4F4F4]  w-full h-[100px]">
                <div className="">
                  <p className="font-dm text-[20px] text-primary font-medium pt-[20px]">
                    Monthly Design Magazine
                  </p>
                  <p className="font-normal text-[#6B6161] text-[16px] font-dm">
                    Print, Books
                  </p>
                </div>
                <div className="">
                  <img className="w-[30px]" src={Plus} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Protfolio;
