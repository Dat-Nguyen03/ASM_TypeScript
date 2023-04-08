import { Link } from "react-router-dom";

type Props = {};

const ListCart = (props: Props) => {
  return (
    <section>
      <div className="layout-container">
        <div className="list-prds shadow-lg relative mt-4 flex gap-x-4 w-[570px] rounded-[15px] p-[10px]">
          <i className="fa-solid fa-xmark absolute right-[10px] "></i>
          <div className="left flex items-center justify-center">
            <img
              src="/prd-cart.png"
              className="w-[193px] h-[193px] object-contain"
              alt=""
            />
          </div>
          <div className="right flex flex-col gap-y-[10px]">
            <div className="title">
              <h3 className="text-[15px] text-[#0E2431]">
                Samsung Galaxy S22-Đen
              </h3>
            </div>
            <div className="price flex gap-x-[10px]">
              <div className="new-price text-[15px] text-[#D70018]">
                16.090.000 ₫
              </div>
              <div className="old-price text-sm text-[#777777]">
                21.990.000 ₫
              </div>
              <div className="discount w-[67px] h-6 leading-6 bg-[#D70018] rounded-[5px] text-[12px] text-white text-center">
                Giảm 27%
              </div>
            </div>
            <div className="quantity flex gap-x-2">
              <span className="text-[16px] text-[#0E2431]">Chọn số lượng:</span>
              <div className="input-group flex items-center">
                <button
                  id="minus"
                  className="w-[30px] h-[30px] text-center rounded p-1 border-[1px] flex items-center justify-center"
                >
                  <img className="object-contain" src="/minus.svg" />
                </button>
                <input
                  id="quantity"
                  type="text"
                  value=""
                  readOnly
                  className="w-10 h-[30px] text-center border-[1px] outline-none"
                />
                <button
                  id="plus"
                  className="w-[30px] h-[30px] text-center rounded p-1 border-[1px] flex items-center justify-center"
                >
                  <img className="object-contain" src="/plus.svg" />
                </button>
              </div>
            </div>
            <div className="promotion bg-[#F6F6F6] w-[358px] h-[140px] rounded-[10px] p-[10px]">
              <h3 className="text-[16px] text-[#383D41]">
                - Chương trình khuyến mại:
              </h3>
              <p className="pl-[18px] text-[15px] text-[#0E2431]">
                Dịch vụ phòng chờ hạng thương gia tại sân bay Ưu đãi Galaxy gift
                lên đến 1.700.000đ (VieON VIP HBO GO, Zing MP3, Phúc Long,
                Galaxy Play)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListCart;
