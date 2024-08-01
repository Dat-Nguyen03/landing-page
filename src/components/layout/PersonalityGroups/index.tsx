import { useEffect, useRef, useState } from "react";
import img1 from "../../../assets/images/img1.png";
import img2 from "../../../assets/images/img2.png";
import img3 from "../../../assets/images/img3.png";
import img4 from "../../../assets/images/img4.png";
type Props = {};

export default function PersonalityGroups({}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const itemsRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ref = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const data = [
    {
      id: 1,
      title: "Dominace",
      subTitle: "Sự thống trị",
      content:
        "Người thuộc nhóm này thường có tính cách nhanh nhẹn, chủ động trong công việc. Họ sẵn sàng dấn thân để đạt được những giá trị cao hơn trong cuộc sống. Nhìn chung, họ là những người mang tính hướng ngoại điển hình.",
      image: img1,
      color: "#EA635D",
      textColor: "text-[#EA635D]",
      borderColor: "border-[#EA635D]",
    },
    {
      id: 2,
      title: "Influence",
      subTitle: "Sự ảnh hưởng",
      content:
        "Đặc điểm chung của người thuộc nhóm I là sự nhiệt huyết, cởi mở, lạc quan, thích sáng tạo những cái mới và hướng đến sự nhân văn. Họ có khả năng thuyết phục cao, gắn với hoạt động sáng tạo nghệ thuật, thích trải nghiệm điều mới.",
      image: img2,
      color: "#FFCD65",
      textColor: "text-[#FFCD65]",
      borderColor: "border-[#FFCD65]",
    },
    {
      id: 3,
      title: "Steadiness",
      subTitle: "Sự kiên định",
      content:
        "Những người kiên định thường có điểm chung là điềm đạm, từ tốn, chín chắn. Thay vì năng nổ đưa ra quan điểm từ lúc đầu, họ có thể yên lặng để quan sát và lắng nghe người khác, từ đó đưa ra kết luận đúng đắn nhất. Bởi thế, những người kiên định sống có kế hoạch, thích lắng nghe và tâm sự, rất đáng tin cậy.",
      image: img3,
      color: "#57CE81",
      textColor: "text-[#57CE81]",
      borderColor: "border-[#57CE81]",
    },
    {
      id: 4,
      title: "Compliance",
      subTitle: "Sự tuân thủ",
      content:
        "Những đặc điểm chính của nhóm này là sự chính xác, bình tĩnh, cầu toàn, rõ ràng, thận trọng, và logic. Họ thường thích hành động hơn là giao tiếp, nên đôi khi họ có thể gặp khó khăn trong giao tiếp. Họ cũng thường bị nhận xét là nói chậm và diễn đạt khó hiểu. ",
      image: img4,
      color: "#5495DA",
      textColor: "text-[#5495DA]",
      borderColor: "border-[#5495DA]",
    },
  ];
  const [imageActive, setImageActive] = useState(data[0].image);
  const handleClick = (index: number, item: any) => {
    // return;
    
    setOpenIndex(openIndex === index ? index : index);
    setImageActive(item.image);
  };

  useEffect(() => {
    if (openIndex !== null) {
      const height = itemsRefs?.current[openIndex]?.scrollHeight;
      setContentHeight(height || 0);
    }
   
  }, [openIndex]);
  
  return (
    <section className="mt-[42px] md:mt-[80px] lg:mt-[100px] px-5 md:px-[30px] lg:px-[120px]">
      <div className="lg:mb-[60px] mb-10">
        <h2 className="text-[28px] md:text-[38px] lg:text-[52px] md:leading-[78px] text-primary_color text-center font-Anton font-normal">
          Các nhóm tính cách{"  "}

          <span className="text-[#EA635D]">D</span>
              <span className="text-[#FFCD65]">I</span>
              <span className="text-[#57CE81]">S</span>
              <span className="text-[#5495DA]">C</span>
          {/* <img
            src={disc}
            className="w-[50px] md:w-[100px] md:h-[35px] lg:h-[50px]"
            alt=""
          /> */}
        </h2>
      </div>
      <div className="flex justify-between gap-x-[72px]">
        <div className="w-full lg:w-[60%]  flex flex-col items-start justify-start gap-y-6 h-max" ref={ref}>
          {data.map((item, index) => (
            <div key={item.id}>
              <div
                ref={(el) => {
                  itemsRefs.current[index] = el;
                }}
                onClick={() => {
                  handleClick(index, item);
                }}
                className={`border ${item.borderColor} p-6 rounded-3xl cursor-pointer overflow-hidden transition-all duration-500 select-none`}
                style={{
                  height: openIndex === index ? contentHeight : 77,
                }}
              >
                <div className="flex items-center justify-between mb-[18px]">
                  <div className="flex gap-x-2 font-Anton">
                    <h5
                      className={`${item.textColor} font-normal text-[20px] md:text-[24px]`}
                    >
                      {item.title}
                    </h5>
                    {"  "}
                    <p className="text-primary_color  font-normal text-[20px] md:text-[24px]">
                      ({item.subTitle})
                    </p>
                  </div>
                  <i
                    className={`fa-solid fa-angle-up text-[${
                      item.color
                    }] text-base transition-all duration-500 ${
                      openIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  ></i>
                </div>
                <p className="text-base leading-[24px] text-primary_color font-normal font-Be_Vietnam_Pro ">
                  {item.content}
                </p>
              </div>
              {openIndex === index && (
                <div className=" flex lg:hidden items-center justify-center p-8">
                  <img
                    src={imageActive}
                    alt=""
                    className="w-full md:w-[278px] -mr-[10%]"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="w-[40%] text-center hidden lg:block">
          <img
            src={imageActive}
            className={` h-[calc(100%-10px)] ${openIndex === 0 || openIndex === 3 ? "-mt-[35px]" :""}`}
            alt=""
              // style={{
              //   height: height +50,
              // }}
          />
        </div>
      </div>
    </section>
  );
}
