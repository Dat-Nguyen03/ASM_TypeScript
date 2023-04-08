import React from "react";
import { ISpecification } from "../interfaces/product";

type Props = {
  feature: ISpecification[];
};

const Feature = ({ feature }: Props) => {
  // console.log("feature", feature?.[0].attributes);
  if (!Array.isArray(feature?.[0].attributes)) {
    return <div>Loading...</div>;
  }
  return (
    <section className="mb-[13px] mt-[75px]">
      <div className="layout-container bg-[#F2F2F2] pl-[23px] pt-2 pb-[11px]">
        <div className="title text-center mb-[7px]">
          <h2 className="text-lg text-[#D70018]">ĐẶC ĐIỂM NỔI BẬT</h2>
        </div>
        <div className="features">
          {feature?.[0].attributes.map((item, index) => (
            <div className="flex gap-x-4" key={index}>
              <p className="text-sm text-[#444444] mb-[5px]">{item.name}: </p>
              <p className="text-sm text-[#444444] mb-[5px]">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
