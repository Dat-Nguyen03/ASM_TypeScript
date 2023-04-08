import { Link } from "react-router-dom";
import ListCart from "../components/listCart";
import CartHeader from "../components/cartHeader";
import CheckOut from "../components/checkOut";

type Props = {};

const CartPage = (props: Props) => {
  return (
    <div className="w-[60%] mx-auto mb-[187px] flex items-center justify-center">
      <div className="layout-container ">
        <CartHeader />
        <div className="flex flex-col gap-y-4">
          <ListCart />
          <ListCart />
          <ListCart />
          <ListCart />
        </div>
        <CheckOut />
      </div>
    </div>
  );
};

export default CartPage;
