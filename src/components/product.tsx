import { Link } from "react-router-dom";
import { IProduct } from "../interfaces/product";

type Props = {
  products: IProduct[];
};
const Products = ({ products }: Props) => {
  return (
    <>
      {products.map((product) => {
        return (
          <Link
            to={`product-detail/${product.id}`}
            className="block"
            key={product.id}
          >
            <div className="img mb-[10px]">
              <img
                src={product.images?.[0].base_url}
                alt=""
                className="w-full "
              />
            </div>
            <div className="title mb-[27px] min-h-[40px]">
              <h2 className="text-sm break-word">{product.name}</h2>
            </div>
            <div className="price mb-[13px] flex items-center gap-x-4">
              <span className="new-price text-[16px] text-[#D70018] font-semibold">
                {Number(product.price).toLocaleString()} ₫
              </span>
              <span className="old-price text-sm text-[#707070]">
                {Number(product.original_price).toLocaleString()}₫
              </span>
            </div>
            <div className="rating flex items-center gap-x-[10px] ">
              <div className="listStar text-[12px] text-yellow-400">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <span className="evaluate text-[12px]">72 đánh giá</span>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default Products;
