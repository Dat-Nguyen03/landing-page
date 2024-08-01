import cta1 from "../../../assets/images/cta1.png";
import cta2 from "../../../assets/images/cta2.png";
import cta3 from "../../../assets/images/cta3.png";
import cta4 from "../../../assets/images/cta4.png";
import ctaImg1 from "../../../assets/images/ctaImg1.png";
import ctaImg2 from "../../../assets/images/ctaImg2.png";
import ctaImg3 from "../../../assets/images/ctaImg3.png";
import ctaImg1_2 from "../../../assets/images/ctaImg1-2.png";
import ctaImg2_2 from "../../../assets/images/ctaImg2-2.png";
import ctaImg3_2 from "../../../assets/images/ctaImg3-2.png";
import arrow from "../../../assets/images/arrow.png";
type Props = {};

export default function CTA({}: Props) {
  return (
    <section className="lg:mt-[100px] md:mt-[80px] mt-[60px] px-5 md:px-[30px] lg:px-[120px]">
      <div className="relative h-[560px] md:h-[482px] lg:h-[473px] bg-[#21283A] rounded-[40px] overflow-hidden">
        <div className="relative h-full overflow-hidden">
          <div className="absolute top-[40px] left-[40px] md:left-[40px] md:top-[20px]  lg:left-[114px] lg:top-[40px] select-none">
            <img
              src={cta4}
              className="w-[47px] h-[47px]  md:w-[110px] md:h-[102px]"
              alt=""
            />
          </div>
          <div className="absolute -left-[40%] md:left-[10px] bottom-[20%] md:bottom-0 select-none z-[0]">
            <img
              src={cta1}
              className="w-[506px] h-[240px] md:w-[1014px] md:h-[320px]"
              alt=""
            />
          </div>
          <div className="absolute left-0  bottom-0 select-none">
            <img
              src={cta2}
              className="w-[157px] h-[130px] md:w-[194px] md:h-[159px]"
              alt=""
            />
          </div>
          <div className="absolute right-0  bottom-0 select-none">
            <img
              src={cta3}
              className="w-[157px] h-[130px] md:w-[194px] md:h-[159px]"
              alt=""
            />
          </div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2">
          <div className="flex justify-center items-center h-[120px] md:w-[611px] lg:w-[844px] md:h-[108px] mx-auto ">
            <p className="text-white text-center mt-[120px] md:text-[18px] lg:text-[20px]  font-Be_Vietnam_Pro lg:px-20 font-medium ">
              Bài trắc nghiệm tính cách{" "}
              <span className="text-[#EA635D]">D</span>
              <span className="text-secondary_color">I</span>
              <span className="text-[#57CE81]">S</span>
              <span className="text-[#5495DA]">C</span> không chỉ giúp bạn{" "}
              <br /> khai phá được sức mạnh của bản thân. Đây còn là công cụ hỗ
              trợ tuyển dụng và quản lý nhân sự hiệu quả.
            </p>
          </div>
          <div className="w-[310px] h-[226px] md:w-[729px] md:h-[173px] mx-auto mt-[110px] md:mt-[50px] lg:mt-[100px] z-10 items-center justify-center flex flex-col md:flex-row gap-x-6 ">
            <div className="flex flex-col items-center p-[16px]">
              <h5 className="font-Anton font-normal text-[36px] md:text-[40px] lg:text-[56px] text-[#FFCD65]">
                &gt; 50 triệu
              </h5>
              <p className="text-white text-center font-Be_Vietnam_Pro text-[15px] md:text-base font-normal mt-4 md:px-10 lg:px-0">
                Người thực hiện bài trắc nghiệm
              </p>
            </div>
            <div className="flex flex-col items-center p-[16px] ">
              <h5 className="font-Anton font-normal text-[36px] md:text-[40px] lg:text-[56px] text-[#FFCD65]">
                350+
              </h5>
              <p className="text-white text-center font-Be_Vietnam_Pro text-[15px] md:text-base font-normal mt-4 md:px-10 lg:px-0">
                Công ty lớn nhất của Hoa Kỳ sử dụng
              </p>
            </div>
            {/* <img src={cta5} alt="" className="object-cover hidden md:block" /> */}
            {/* <img src={cta6} alt="" className="object-cover md:hidden" /> */}
          </div>
        </div>
      </div>

      <div className="lg:mt-[100px] md:mt-[80px] mt-[60px] md:h-[560px] bg-secondary_color rounded-[40px] md:p-10 lg:p-[64px] px-5 pt-10 pb-5">
        <div className="text-center">
          <h3 className=" text-[30px] md:text-[48px] lg:text-[52px] text-primary_color   md:leading-[60px] lg:leading-[78px] pl:px-10 font-Anton font-normal">
            Sẵn Sàng Khám Phá Tính Cách Của Bạn?
          </h3>
          <p className="mt-4 text-sm md:text-base leading-[24px] text-primary_color text-center font-Be_Vietnam_Pro font-normal lg:w-[55%] mx-auto">
            Hãy thực hiện bài trắc nghiệm DISC ngay hôm nay để hiểu rõ hơn về
            bản thân và cách bạn có thể tận dụng thế mạnh của mình trong công
            việc và cuộc sống
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-y-6 md:gap-y-0 items-center justify-between md:gap-x-5 mt-10 lg:px-10 shrink-0">
          <div className="relative group cursor-pointer bg-[#EA635D] rounded-[40px] px-6 pt-6 h-[250px] overflow-hidden flex-1">
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center gap-x-4 bg-[#EA635D] rounded-[40px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500">
              <p className="text-white text-[20px] leading-[30px] font-[700] font-Be_Vietnam_Pro">
                Thực hiện ngay
              </p>
              <img src={arrow} alt="" />
            </div>
            <div>
              <h5 className="font-Be_Vietnam_Pro font-[700] text-[20px] text-white text-center mb-6 md:px-5 lg:px-0">
                Trong đời sống
              </h5>
              <img src={ctaImg1} alt="" className="w-[267px] md:hidden lg:block" />
              <img src={ctaImg1_2} alt="" className="w-[147px] hidden md:block lg:hidden" />
            </div>
          </div>
          <div className="relative group cursor-pointer bg-[#57CE81] rounded-[40px] px-6 pt-6 h-[250px] overflow-hidden flex-1">
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center gap-x-4 bg-[#57CE81] rounded-[40px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500">
              <p className="text-white text-[20px] leading-[30px] font-[700] font-Be_Vietnam_Pro">
                Thực hiện ngay
              </p>{" "}
              <img src={arrow} alt=""  />
            </div>
            <div>
              <h5 className="font-Be_Vietnam_Pro font-[700] text-[20px] text-white text-center mb-6 md:px-5 lg:px-0">
              Trong công việc
              </h5>
              <img src={ctaImg2} alt="" className="w-[267px] h-[180px] md:hidden lg:block "/>
              <img src={ctaImg2_2} alt="" className="w-[147px] hidden md:block lg:hidden"/>
            </div>
          </div>
          <div className="relative group cursor-pointer bg-[#5495DA] rounded-[40px] px-6 pt-6  h-[250px] overflow-hidden flex-1">
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center gap-x-4 bg-[#5495DA] rounded-[40px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500">
              <p className="text-white text-[20px] leading-[30px] font-[700] font-Be_Vietnam_Pro">
                Thực hiện ngay
              </p>{" "}
              <img src={arrow} alt="" />
            </div>
            <div>
              <h5 className="font-Be_Vietnam_Pro font-[700] text-[20px] text-white text-center mb-6 md:px-5 lg:px-0">
              Cha mẹ làm cho con
              </h5>
              <img src={ctaImg3} alt="" className="w-[267px] md:hidden lg:block" />
              <img src={ctaImg3_2} alt="" className="w-[147px] hidden md:block lg:hidden" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
