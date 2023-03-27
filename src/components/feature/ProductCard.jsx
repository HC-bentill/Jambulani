import React from "react";
import productImage from "../../assets/images/product-medium.jpg";
import {truncateText} from "../../utils";

const ProductCard = (props) => {
  return (
    <>
      {/* <div className='hover:shadow-xl mr-3 pt-60 bg-contain bg-no-repeat' style={{backgroundImage: `url(${props?.product?.gallery[0]?.image})`}}> */}
      <div className="hover:shadow-xl mr-3">
        <img src={props?.product?.gallery[0]?.image} alt="product image" />
        <div className="border-[1px] border-slate-300 p-3 bg-white">
          <p className="text-[#393A38] text-sm">{truncateText(props?.product?.product_name, 45)}</p>
          <div className="mt-2">
            <small className="font-bold text-[18px]">€{props?.product?.total}</small>
            <small className="text-[#EE503E] line-through ml-1 text-[11px] font-light">€89.95</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
