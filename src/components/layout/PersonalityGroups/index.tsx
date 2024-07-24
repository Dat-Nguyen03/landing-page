import { useEffect, useRef, useState } from "react";
import disc from "../../../assets/images/disc.png";
import img1 from "../../../assets/images/img1.png";
import img2 from "../../../assets/images/img2.png";
import img3 from "../../../assets/images/img3.png";
import img4 from "../../../assets/images/img4.png";
type Props = {};

export default function PersonalityGroups({}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const itemsRefs = useRef<(HTMLDivElement | null)[]>([]);
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
    },
    {
      id: 2,
      title: "Influence",
      subTitle: "Sự ảnh hưởng",
      content:
        "Đặc điểm chung của người thuộc nhóm I là sự nhiệt huyết, cởi mở, lạc quan, thích sáng tạo những cái mới và hướng đến sự nhân văn. Họ có khả năng thuyết phục cao, gắn với hoạt động sáng tạo nghệ thuật, thích trải nghiệm điều mới.",
      image: img2,
      color: "#FFCD65",
    },
    {
      id: 3,
      title: "Steadiness",
      subTitle: "Sự kiên định",
      content:
        "Những người kiên định thường có điểm chung là điềm đạm, từ tốn, chín chắn. Thay vì năng nổ đưa ra quan điểm từ lúc đầu, họ có thể yên lặng để quan sát và lắng nghe người khác, từ đó đưa ra kết luận đúng đắn nhất. Bởi thế, những người kiên định sống có kế hoạch, thích lắng nghe và tâm sự, rất đáng tin cậy.",
      image: img3,
      color: "#57CE81",
    },
    {
      id: 4,
      title: "Compliance",
      subTitle: "Sự tuân thủ",
      content:
        "Những đặc điểm chính của nhóm này là sự chính xác, bình tĩnh, cầu toàn, rõ ràng, thận trọng, và logic. Họ thường thích hành động hơn là giao tiếp, nên đôi khi họ có thể gặp khó khăn trong giao tiếp. Họ cũng thường bị nhận xét là nói chậm và diễn đạt khó hiểu. ",
      image: img4,
      color: "#5495DA",
    },
  ];
  const [imageActive, setImageActive] = useState(data[0].image);
  const handleClick = (index: number, item: any) => {
    console.log(index, item);
    // return;
    setOpenIndex(openIndex === index ? null : index);
    setImageActive(item.image);
  };

  useEffect(() => {
    if (openIndex !== null) {
      const height = itemsRefs?.current[openIndex]?.scrollHeight;
      setContentHeight(height || 0);
    }
  }, [openIndex]);
  return (
    <section className="mt-[100px] px-5 md:px-[30px] lg:px-[120px]">
      <div className="mb-[60px]">
        <h2 className="md:text-[38px] lg:text-[52px] leading-[78px] font-extrabold text-primary_color flex items-center gap-2 justify-center">
          Các nhóm tính cách{" "}
          <img
            src={disc}
            className="w-[100px] md:h-[35px] lg:h-[50px]"
            alt=""
          />
        </h2>
      </div>
      <div className="flex justify-between gap-x-[72px]">
        <div className="flex-1 flex flex-col gap-y-6">
          {data.map((item, index) => (
            <div key={item.id}>
              <div
                ref={(el) => {
                  itemsRefs.current[index] = el;
                }}
                onClick={() => {
                  handleClick(index, item);
                }}
                className={`border border-[${item.color}] p-6 rounded-3xl cursor-pointer overflow-hidden transition-all duration-500 select-none`}
                style={{
                  height: openIndex === index ? contentHeight : 80,
                }}
              >
                <div className="flex items-center justify-between mb-[18px]">
                  <div className="flex gap-x-2 ">
                    <h5
                      className={`text-[${item.color}] font-bold text-[24px]`}
                    >
                      {item.title}
                    </h5>
                    {"  "}
                    <p className="text-primary_color  font-bold text-[24px]">
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
                <p className="text-base leading-[24px] text-primary_color font-normal">
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
        <div className="flex-1 hidden lg:block">
          <img
            src={imageActive}
            className="w-full object-cover -mt-[46px]"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
