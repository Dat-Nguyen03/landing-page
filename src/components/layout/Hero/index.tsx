import heroImg1 from "../../../assets/images/hero-1.png";
import heroImg2 from "../../../assets/images/hero-2.png";
import disc from "../../../assets/images/disc.png";
type Props = {};

export default function Hero({}: Props) {
  return (
    <section className=" px-5 md:px-0 mt-[98px] w-full overflow-hidden">
      <div className="relative w-full flex flex-col md:flex-row items-center justify-between">
        <div className="hidden md:block">
          <img
            src={heroImg1}
            alt=""
            className="md:w-[183px] md:h-[165px] lg:w-[310px] lg:h-[280px] object-cover md:absolute lg:static -left-[10%] top-[60%]"
          />
        </div>
        <div className="lg:w-[759px] lg:h-[400px] text-center flex flex-col items-center">
          <div className="flex  md:w-[680px] md:h-[140px] lg:w-auto h-auto items-center justify-center">
            <h2 className="text-primary_color font-extrabold text-[26px] w-full md:text-[40px] lg:text-[55px] text-center px-3 md:px-0">
              Khám Phá Tính Cách Của Bạn Với Trắc Nghiệm{" "}
              <img
                src={disc}
                className="w-[100px] h-[26px] md:h-[35px] lg:h-[50px] inline-block"
              />
            </h2>
          </div>
          <p className="w-[420px] h-[52px] text-base mt-6 px-10 md:px-0">
            Bắt đầu hành trình khám phá ngay hôm nay và mở ra cánh cửa đến với
            sự hiểu biết sâu sắc hơn về bản thân
          </p>
          <button className="bg-secondary_color w-[192px] h-[56px] md:w-[220px] md:h-[64px] rounded-full px-2 py-6 font-semibold text-base md:text-xl flex items-center justify-center mt-[64px]">
            Khám phá ngay
          </button>
        </div>
        <div className="flex justify-between mt-12 md:mt-0">
          <img
            src={heroImg1}
            alt=""
            className="block md:hidden -ml-[22%] w-[183px] h-[165px] object-cover md:absolute lg:static -right-[13%] top-[60%]"
          />
          <img
            src={heroImg2}
            alt=""
            className="md:w-[183px] w-[183px] h-[165px] md:h-[165px] lg:w-[310px] lg:h-[280px] object-cover md:absolute lg:static -right-[13%] top-[60%] -mr-[25%] md:-mr-0"
          />
        </div>
      </div>
    </section>
  );
}
