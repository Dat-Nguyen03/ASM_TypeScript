import { IProduct } from "../interfaces/product";

// type Props = {
//   product: IProduct;
// };

const ProductInfo = ({ product }: any) => {
  return (
    <section>
      <div className="layout-container ">
        <div className="title border-b-2">
          <h1 className="text-lg p-[10px]">{product.name}</h1>
        </div>
        <div className="info flex mt-[44px] mb-[70px]">
          <div className="left-info flex-1 flex flex-col items-center">
            <div className="main-img mb-[48px]">
              <img
                src={product.images?.[0].base_url}
                className="w-[358px] h-[358px] max-w-[358px]"
                alt=""
              />
            </div>
            <div className="list-imgs flex gap-x-[10px]">
              <div className="feature flex flex-col w-[70px] h-[70px] items-center justify-center rounded-[10px] border-2 p-2 border-[#D70018]">
                <img src="/star.svg" className="w-[23px] h-[25px]" alt="" />
                <span className="text-[10px] text-center text-[#666666]">
                  Tính năng nổi bật
                </span>
              </div>
              <img
                src={product.images?.[0].base_url}
                className="w-[70px] h-[70px] max-w-[70px] object-cover border-2 border-[#D1D5DB] rounded-[10px] p-[6px]"
                alt=""
              />
              <img
                src={product.images?.[0].base_url}
                className="w-[70px] h-[70px] max-w-[70px] object-cover border-2 border-[#D1D5DB] rounded-[10px] p-[6px]"
                alt=""
              />
              <img
                src={product.images?.[0].base_url}
                className="w-[70px] h-[70px] max-w-[70px] object-cover border-2 border-[#D1D5DB] rounded-[10px] p-[6px]"
                alt=""
              />
              <img
                src={product.images?.[0].base_url}
                className="w-[70px] h-[70px] max-w-[70px] object-cover border-2 border-[#D1D5DB] rounded-[10px] p-[6px]"
                alt=""
              />
            </div>
          </div>

          <div className="right-info flex-1">
            <div className="price">
              <span className="new-price text-2xl text-[#D70018] mr-3">
                {Number(product.price).toLocaleString()} ₫
              </span>
              <span className="old-price text-sm text-[#707070]">
                {Number(product.original_price).toLocaleString()} ₫
              </span>
            </div>
            <div className="sub-desc text-[15px] text-[#444444] mt-[28px] mb-[202px]">
              <p>
                Mô tả ngắn: Trước khi mua bất kỳ chiếc điện thoại nào, người
                dùng cũng sẽ quan tâm đến thiết kế sản phẩm trước. Với phiên bản
                A73, Samsung đã tạo nên một chiếc smartphone với vẻ ngoài mang
                đến cảm giác sang trọng và tinh tế.
              </p>
            </div>
            <div className="buy-area flex gap-x-5">
              <button className="w-[233px] h-[48px] bg-[#FF3945] text-white text-sm rounded">
                Mua ngay
              </button>
              <div className="add-to-cart flex items-center gap-x-[10px]">
                <div className="w-[48px] h-[48px] flex items-center justify-center border-2 border-[#D70018] p-[14px] rounded">
                  <img src="/add-cart.svg" alt="" />
                </div>
                <span className="text-[16px] text-[#000000]">
                  Thêm vào <br />
                  giỏ hàng
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
