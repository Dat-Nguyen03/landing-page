import footerLogo from "../../../assets/images/footerLogi.png";
import footerImg1 from "../../../assets/images/footerImg.png";
import footerImg2 from "../../../assets/images/footerImg2.png";
import fb from "../../../assets/images/fb.svg";
import x from "../../../assets/images/x.svg";
import insta from "../../../assets/images/insta.svg";
type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="lg:mt-[100px] md:mt-[80px] mt-[60px]  relative bg-[#21283A] lg:px-[120px]">
      <div className="md:pt-10 lg:pt-[64px] md:px-[30px] lg:px-[80px] flex justify-between flex-col md:flex-row px-5 pt-10">
        <div className="md:w-[60%] lg:w-[40%] md:pr-20 ">
          <img
            src={footerLogo}
            className="w-[210px] h-[30px] object-cover"
            alt=""
          />
          <p className="text-[#C3C6CD] text-sm leading-[20px] text-justify mt-5">
            Với sự kết hợp giữa khoa học và chiêm tinh học, Numerologist mang
            đến những phân tích chính xác và những lời khuyên hữu ích, giúp bạn
            định hướng cuộc sống và sự nghiệp một cách hiệu quả.
          </p>
        </div>

        <div className="md:w-[40%] lg:w-[60%] flex flex-wrap md:flex-col md:gap-y-10 lg:flex-row justify-between mt-14">
          <div className="w-1/2 md:w-auto">
            <h5 className="text-[#EAECF0] font-semibold md:text-sm lg:text-lg leading-[20px]">
              Dịch vụ
            </h5>
            <ul className="text-[#C3C6CD] text-sm leading-[20px] mt-5 flex flex-col gap-y-4">
              <li>Thần số</li>
              <li>DISC</li>
              <li>MBTI</li>
            </ul>
          </div>
          <div className="w-1/2 md:w-auto">
            <h5 className="text-[#EAECF0] font-semibold md:text-sm lg:text-lg leading-[20px]">
              Hỗ trợ
            </h5>
            <ul className="text-[#C3C6CD] text-sm leading-[20px] mt-5 flex flex-col gap-y-4">
              <li>Chính sách và Điều khoản</li>
              <li>Chính sách bảo mật</li>
              <li>Chính sách sử dụng dịch vụ</li>
              <li>Chính sách thanh toán</li>
            </ul>
          </div>
          <div className="mt-14 md:-ml-[150%] md:-mt-[40%] lg:-ml-0 lg:-mt-0">
            <h5 className="text-[#EAECF0] font-semibold md:text-sm lg:text-lg leading-[20px]">
              Liên hệ
            </h5>
            <ul className="text-[#C3C6CD] text-sm leading-[20px] mt-5 flex gap-x-3 ">
              <li>
                <a href="">
                  <img src={fb} alt="" className="size-9 object-cover" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={x} alt="" className="size-9 object-cover" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src={insta} alt="" className="size-9 object-cover" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="py-6 mt-14 lg:mt-5 md:mt-20">
        <p className="text-[#98A2B3] text-center text-base leading-[24px]">
          © 2024 Numerologist. All rights reserved.
        </p>
      </div>
      <img src={footerImg1} alt="" className="absolute bottom-0 left-0" />
      <img
        src={footerImg2}
        alt=""
        className="absolute right-0 top-0 w-[100px] h-[98px] md:w-auto md:h-auto"
      />
    </footer>
  );
}
