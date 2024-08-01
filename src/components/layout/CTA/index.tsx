import cta1 from "../../../assets/images/cta1.png";
import cta2 from "../../../assets/images/cta2.png";
import cta3 from "../../../assets/images/cta3.png";
import cta4 from "../../../assets/images/cta4.png";
import cta5 from "../../../assets/images/cta5.png";
import cta6 from "../../../assets/images/cta6.png";
import ctaImg1 from "../../../assets/images/ctaImg1.png";
import ctaImg2 from "../../../assets/images/ctaImg2.png";
import ctaImg3 from "../../../assets/images/ctaImg3.png";
import arrow from "../../../assets/images/arrow.png";
type Props = {};

export default function CTA({}: Props) {
  return (
    <section className="lg:mt-[100px] md:mt-[80px] mt-[60px] px-5 md:px-[30px] lg:px-[120px]">
      <div className="relative h-[560px] md:h-[482px] lg:h-[473px] bg-[#21283A] rounded-[40px] ">
        <div className="relative h-full overflow-hidden">
          <div className="absolute top-[40px] left-[40px] md:left-[105px] select-none">
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
              className="w-[157px] h-[130px] md:w-[255px] md:h-[210px]"
              alt=""
            />
          </div>
          <div className="absolute right-0  bottom-0 select-none">
            <img
              src={cta3}
              className="w-[157px] h-[130px] md:w-[255px] md:h-[210px]"
              alt=""
            />
          </div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2">
          <div className="flex justify-center items-center w-[295px] h-[120px] md:w-[844px] md:h-[108px] mx-auto ">
            <p className="text-white text-center mt-[120px] md:text-[18px] lg:text-[20px]  font-Be_Vietnam_Pro lg:px-20 font-medium">
              Bài trắc nghiệm tính cách{" "}
              <span className="text-[#EA635D]">D</span>
              <span className="text-secondary_color">I</span>
              <span className="text-[#57CE81]">S</span>
              <span className="text-[#5495DA]">C</span> không chỉ giúp bạn khai
              phá được sức mạnh của bản thân. Đây còn là công cụ hỗ trợ tuyển
              dụng và quản lý nhân sự hiệu quả.
            </p>
          </div>
          <div className="w-[295px] h-[226px] md:w-[729px] md:h-[173px] mx-auto mt-[90px] md:mt-[50px] lg:mt-[100px] z-10  ">
            <img src={cta5} alt="" className="object-cover hidden md:block" />
            <img src={cta6} alt="" className="object-cover md:hidden" />
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
            bản thân  và cách bạn có thể tận dụng thế mạnh của mình trong công
            việc và cuộc sống
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-y-6 md:gap-y-0 items-center justify-between md:gap-x-5 mt-10 lg:px-10">
          <div className="relative group cursor-pointer">
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center gap-x-4 bg-[#EA635D] rounded-[40px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500">
              <p className="text-white text-[20px] leading-[30px] font-[700] font-Be_Vietnam_Pro">
                Thực hiện ngay
              </p>
              <img src={arrow} alt="" />
            </div>
            <img src={ctaImg1} alt="" className="w-[341px] h-[250px]" />
          </div>
          <div className="relative group cursor-pointer">
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center gap-x-4 bg-[#57CE81] rounded-[40px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500">
              <p className="text-white text-[20px] leading-[30px] font-[700] font-Be_Vietnam_Pro">
                Thực hiện ngay
              </p>{" "}
              <img src={arrow} alt="" />
            </div>
            <img src={ctaImg2} alt="" className=" lg:w-[341px] h-[250px]" />
          </div>
          <div className="relative group cursor-pointer">
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center gap-x-4 bg-[#5495DA] rounded-[40px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500">
              <p className="text-white text-[20px] leading-[30px] font-[700] font-Be_Vietnam_Pro">
                Thực hiện ngay
              </p>{" "}
              <img src={arrow} alt="" />
            </div>
            <img src={ctaImg3} alt="" className="w-[341px] h-[250px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
