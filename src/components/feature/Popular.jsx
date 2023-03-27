import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import {GetPopularProducts} from "../../services/product.service";
import ProductCard from "./ProductCard";

const Popular = () => {
  const [popularProducts, setPopularProducts] = useState([]);
  const navigate = useNavigate();
  
  const fetchProducts = () => {
    GetPopularProducts()
      .then((res) => {
        if (res) {
          setPopularProducts(res?.data?.products?.data);
        }
      })
      .catch((err) => console.log("err", err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const NextArrow = (props) => {
    const {className, style, onClick} = props;
    return (
      <span className="md:absolute right-[20px] cursor-pointer top-[30%] hidden md:block" onClick={onClick}>
        {">"}
      </span>
    );
  };
  const PrevArrow = (props) => {
    const {className, style, onClick} = props;
    return (
      <span className="md:absolute right-[20px] cursor-pointer top-[30%] hidden md:block bg-red-400" onClick={onClick}>
        {"<"}
      </span>
    );
  };
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="flex items-center mt-10 mb-6">
        <h2 className="mr-6 uppercase text-2xl font-bold">MOST POPULAR T-SHIRTS</h2>
        <div className="flex items-center ml-auto">
          <button className="border-gray-200 border-[1px] p-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 6 10" size="8">
              <path d="M0.359054 4.64463C0.161356 4.8403 0.161356 5.1597 0.359054 5.35537L4.39827 9.35316C4.71399 9.66564 5.25 9.442 5.25 8.99779L5.25 1.00221C5.25 0.557998 4.71399 0.334357 4.39827 0.646838L0.359054 4.64463Z" fill="#111112"></path>
            </svg>
          </button>
          <button className="ml-2 border-gray-200 border-[1px] p-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 6 10" size="8">
              <path d="M5.64095 4.64463C5.83864 4.8403 5.83864 5.1597 5.64095 5.35537L1.60173 9.35316C1.28601 9.66564 0.75 9.442 0.75 8.99779L0.75 1.00221C0.75 0.557998 1.28601 0.334357 1.60173 0.646838L5.64095 4.64463Z" fill="#111112"></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="pt-8 pb-10  md:px-0 px-2">
        <div className="md:px-8 px-1 slider-container">
          <Slider {...settings}>
            {popularProducts &&
              popularProducts.map((item, index) => (
                <div key={index} onClick={() => navigate(`/product-description/${item?.slug}`)}>
                  <ProductCard product={item} />
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Popular;
