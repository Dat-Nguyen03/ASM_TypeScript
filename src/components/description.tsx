// import { Parser } from "html-to-react";

import { IProduct } from "../interfaces/product";

type Props = {
  description: string;
};
// Parser;

const Description = ({ description }: Props) => {
  return (
    <section>
      <div className="layout-container">
        {/* <p className="text-[15px] text-[#444444] mb-[29px]"> */}
        <div
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        ></div>
        {/* </p> */}
        <div className="btn-read-more text-center ">
          <button className="text-sm text-[#212529] w-[335px] h-[34px] border-2 border-[#000000] rounded-[10px]">
            Xem thêm
          </button>
        </div>
      </div>
    </section>
  );
};

export default Description;
