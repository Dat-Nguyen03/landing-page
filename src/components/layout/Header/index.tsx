type Props = {};
import { useEffect, useRef, useState } from "react";
import logo from "../../../assets/images/logo.png";
import bar from "../../../assets/images/bar.png";
import times from "../../../assets/images/times.png";
import "./styles.css";
export default function Header({}: Props) {
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);
  const handleToggleMenu = () => {
    menuRef.current?.classList.toggle("show_menu");

    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    if (openMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [openMenu]);
  return (
    <header className="px-5 md:px-10 flex items-center justify-between py-5 h-[80px]">
      <div className="header-left">
        <div className="logo">
          <img
            className="w-[148px] md:w-[210px] md:h-[34px] object-cover"
            src={logo}
            alt="logo"
          />
        </div>
      </div>
      <div className="header-center ">
        {/* {openMenu && ( */}
        <ul
          ref={menuRef}
          className="hidden lg:flex flex-col lg:flex-row lg:items-center gap-x-10  h-screen md:h-auto text-primary_color lg:static fixed z-50 w-full top-[80px] left-0 px-5 md:px-10 lg:px-0 bg-[#FFFBF2] lg:bg-none pb-10 lg:pb-0 border-b border-b-[#F7E8C5]"
        >
          <li>
            <a href="" className="text-base lg:py-2 inline-block py-2">
              Trang chủ
            </a>
          </li>
          <li>
            <a href="" className="text-base lg:py-2 inline-block py-2">
              Thần số
            </a>
          </li>
          <li>
            <a
              href=""
              className="text-base  lg:py-2 inline-block py-2 lg:font-[700] lg:border-b-[3px] border-primary_color"
            >
              DISC
            </a>
          </li>
          <li>
            <a href="" className="text-base lg:py-2 inline-block py-2">
              MBTI
            </a>
          </li>
          <li className="lg:hidden">
            <button className="border-2 border-[#1B1B1B] lg:px-5 lg:py-[10px] rounded-full lg:text-base font-[700] py-2 px-5 text-sm w-full mt-3">
              Đăng nhập
            </button>
          </li>
        </ul>
        {/* )} */}
      </div>
      <div className="header-right flex gap-x-4">
        {!openMenu && (
          <>
            <button className="border-2 border-[#1B1B1B] lg:px-5 lg:py-[10px] rounded-full hidden md:block lg:text-base font-[700] py-2 px-5 text-sm">
              Đăng nhập
            </button>
          </>
        )}
        <button onClick={handleToggleMenu} className="block lg:hidden">
          <img
            src={!openMenu ? bar : times}
            alt=""
            className={`${openMenu ? "p-2" : ""}`}
          />
        </button>
      </div>
    </header>
  );
}
