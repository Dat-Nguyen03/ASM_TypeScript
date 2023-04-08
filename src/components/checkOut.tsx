import React from "react";

type Props = {};

const CheckOut = (props: Props) => {
  return (
    <div className="w-[570px] p-[10px] mt-[16px] shadow-lg rounded-[15px]">
      <div className="total flex items-center justify-between mb-[10px]">
        <h3 className="text-[16px] text-[#0E2431]">Tổng tiền tạm tính:</h3>
        <span className="text-[16px] text[#D70018]">17.820.000 ₫</span>
      </div>
      <div className="check-out flex flex-col gap-y-[10px]">
        <button className="w-[550px] h-[60px] bg-[#D70018] rounded text-white text-[16px]">
          TIẾN HÀNH ĐẶT HÀNG
        </button>
        <button className="w-[550px] h-[60px] border border-[#DC3545] rounded text-[16px] text-[#DC3545]">
          CHỌN THÊM SẢN PHẨM KHÁC
        </button>
      </div>
    </div>
  );
};

export default CheckOut;
