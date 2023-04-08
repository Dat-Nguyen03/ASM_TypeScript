import { Link } from "react-router-dom";
import { useLocalStorage } from "../hook";
import { useState } from "react";

const HeaderUser = () => {
  const [user, setUser] = useLocalStorage("user", null);
  const onHandleLogout = () => {
    setUser("");
  };
  return (
    <header className="bg-[#D70018] h-[64px]">
      <div className="layout-container flex items-center justify-center gap-x-[115px]">
        <div className="logo h-[64px] leading-[64px] py-[3px]">
          <Link to="/">
            <img
              src="/logo.png"
              alt=""
              className="w-[65px] h-full max-w-[57px] object-cover"
            />
          </Link>
        </div>
        <div className="search-area w-[560px] h-[34px] relative">
          <input
            type="text"
            placeholder="Tìm kiếm"
            className="w-full h-full rounded-[10px] border-none outline-none pl-10"
          />
          <i className="fa-solid fa-magnifying-glass absolute left-[10px] top-[10px]"></i>
        </div>
        <div className="action flex items-center  gap-x-[30px]">
          <div className="call flex ">
            <span className="text-[12px] text-white">
              Gọi mua hàng <br /> 1800.2097
            </span>
          </div>

          <Link to="" className="location flex   gap-x-2">
            <img src="/location.svg" alt="" />
            <span className="text-[12px] text-white">
              Cửa hàng <br />
              gần bạn
            </span>
          </Link>

          <Link to="" className="order flex  gap-x-2">
            <img src="/order.svg" alt="" />
            <span className="text-[12px] text-white">
              Tra cứu <br /> đơn hàng
            </span>
          </Link>

          <Link to="cart" className="cart flex  gap-x-2">
            <img src="/cart.png" alt="" />
            <span className="text-[12px] text-white">Giỏ hàng</span>
          </Link>

          {user ? (
            <Link
              to=""
              className="login relative flex flex-col items-center  justify-center w-[130px] max-w-[130px] px-2 py-1  bg-[#ffffff33] rounded-[10px] group"
            >
              <i className="fa-regular fa-user text-white"></i>

              <span className="text-sm text-white">{user.name}</span>
              <button
                className="bg-[#D70018] text-[#fff] px-4 py-2 absolute bottom-[-90%] z-[5] transition-all ease-in duration-300 invisible group-hover:visible "
                onClick={() => onHandleLogout()}
              >
                Đăng xuất
              </button>
            </Link>
          ) : (
            <Link
              to="/login"
              className="login flex flex-col items-center justify-center bg-[#ffffff33] px-2 py-4 rounded-[10px]"
            >
              <i className="fa-regular fa-user text-white"></i>

              <span className="text-sm text-white">Đăng nhập</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderUser;
