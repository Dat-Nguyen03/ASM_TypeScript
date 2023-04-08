import { Link } from "react-router-dom";

type Props = {};

const CartHeader = (props: Props) => {
  return (
    <header className="my-[15px] flex items-center gap-x-[188px] ">
      <Link
        to="/"
        className="back flex items-center justify-center gap-x-[5px] "
      >
        <img src="/back.svg" alt="" />
        <h2 className="text-lg text-[#D70018]">Trở về</h2>
      </Link>
      <h2 className="text-lg text-[#D70018]">Giỏ hàng</h2>
    </header>
  );
};

export default CartHeader;
