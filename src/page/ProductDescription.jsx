import React, {useState} from "react";
import {Link} from "react-router-dom";
import productImage from "../assets/images/product-medium.jpg";

const ProductDescription = () => {
  const [selectedImage, setSelectedImage] = useState(productImage); //default product image will be loaded here

  const handleImageSelection = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
      <div className="px-[120px] py-6 pb-32 max-w-7xl w-full mx-auto ">
        <div>
          <nav className="w-full rounded-md">
            <ol className="list-reset flex text-[10px]">
              <li className="text-[#1256DB] hover:underline">
                <Link to="/" className="base-light-color">
                  Home
                </Link>
              </li>
              <li>
                <span className="mx-2 base-color">{">"}</span>
              </li>
              <li className="text-[#1256DB] hover:underline">England — Premier League</li>
              <li>
                <span className="mx-2 base-color">{">"}</span>
              </li>
              <li className="text-gray-400">Manchester United 21-22 Home Shirt</li>
            </ol>
          </nav>
        </div>
        <div className="md:grid grid-cols-2 flex flex-col py-5">
          <div className="">
            <div>
              <img alt="image" src={selectedImage} width={480} height={450} className="block object-contain" />
              <div className="flex justify-end w-full ml-auto relative bottom-[50px] right-[50px]">
                <button className="border-gray-200 border-[1px] p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 6 10" size="8">
                    <path d="M0.359054 4.64463C0.161356 4.8403 0.161356 5.1597 0.359054 5.35537L4.39827 9.35316C4.71399 9.66564 5.25 9.442 5.25 8.99779L5.25 1.00221C5.25 0.557998 4.71399 0.334357 4.39827 0.646838L0.359054 4.64463Z" fill="white"></path>
                  </svg>
                </button>
                <button className="ml-2 border-gray-200 border-[1px] p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 6 10" size="8">
                    <path d="M5.64095 4.64463C5.83864 4.8403 5.83864 5.1597 5.64095 5.35537L1.60173 9.35316C1.28601 9.66564 0.75 9.442 0.75 8.99779L0.75 1.00221C0.75 0.557998 1.28601 0.334357 1.60173 0.646838L5.64095 4.64463Z" fill="white"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex mt-[-22px]">
              {Array(6)
                .fill()
                .map((item) => (
                  // <img alt="image" onClick={() => handleImageSelection(item)} key={index} src={productImage} width={70} height={70} className={`${selectedImage === item ? "" : ""} block cursor-pointer mb-3 rounded-md`} />
                  <img alt="image" src={productImage} width={70} height={70} className="mr-3 opacity-50" />
                ))}
            </div>
          </div>
          <div>
            <p className="text-xl font-bold">Manchester United 21-22 Home Shirt</p>
            <div className="mt-2 flex items-center">
              <small className="font-bold text-[30px] mr-3">€30.00</small>
              <small className="text-[#EE503E] line-through ml-1 text-[14px] mr-4">€89.95</small>
              <div className="bg-[#23C353] text-white text-[12px] p-1 font-semibold px-3">Save 67%</div>
              <button className="flex items-center ml-20 border-gray-300 text-gray-400 border-[1px] px-3">
                <svg className="" width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.46642 9.83883L5.4657 9.83817C3.91064 8.42933 2.66051 7.29555 1.79313 6.23606C0.931485 5.18357 0.5 4.26558 0.5 3.297C0.5 1.72725 1.72771 0.5 3.3 0.5C4.19278 0.5 5.05732 0.917668 5.61947 1.5772L6 2.02366L6.38053 1.5772C6.94268 0.917668 7.80722 0.5 8.7 0.5C10.2723 0.5 11.5 1.72725 11.5 3.297C11.5 4.26559 11.0685 5.1836 10.2068 6.23694C9.33938 7.29715 8.08942 8.43225 6.53453 9.84396C6.53432 9.84415 6.53411 9.84434 6.5339 9.84453L6.00128 10.3253L5.46642 9.83883Z"
                    stroke="#393A38"
                  />
                </svg>
                <p className="p-2 text-[11px]">Add to Favorites</p>
              </button>
            </div>
            <p className="text-[#111112] text-[12px] mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod lacinia aliquam. Morbi est nis, at lacus. Donec ornare, dui vel facilisis luctus, metus mi ttitor erat sapien scelerisque nunc. Pellentesque ornare elit tellus... <b>Read More</b>
            </p>

            <div className="flex items-center mt-10">
              <label for="size" className="w-[10ch] lg:w-[16ch] shrink-0 text-xs font-bold">
                Size
                <span class="text-red-500 text-sm">*</span>
              </label>
              <div className="flex items-center w-full">
                <select className="text-[12px] flex-grow text-gray-400 border-gray-300 border-[1px] p-2  mr-2 outline-none">
                  <option>Select a shirt size</option>
                </select>
                <button className="flex items-center border-gray-300 text-black border-[1px] px-3 bg-[#F5F5F6] text-[12px] font-bold p-2">View size cart</button>
              </div>
            </div>

            <div className="flex items-center mt-6">
              <label for="size" className="w-[10ch] lg:w-[16ch] shrink-0 text-xs font-bold">
                Name
              </label>
              <div className="flex-grow">
                <input type="text" className="text-gray-400 border-gray-300 border-[1px] w-full p-2 px-5 mr-2 outline-none placeholder:text-[12px] text-[12px]" placeholder="What name would you want on the shirt ?" />
              </div>
            </div>

            <div className="flex items-center mt-6">
              <label for="size" className="w-[10ch] lg:w-[16ch] shrink-0 text-xs font-bold">
                Number on Shirt
              </label>
              <div className="flex-grow">
                <input type="text" className="text-gray-400 border-gray-300 border-[1px] w-full p-2 px-5 mr-2 outline-none placeholder:text-[12px] text-[12px]" placeholder="Enter a number betweeb 0 and 99" />
              </div>
            </div>

            <div className="flex items-center mt-6">
              <label for="size" className="w-[10ch] lg:w-[16ch] shrink-0 text-xs font-bold">
                Patch
              </label>
              <select className="text-[12px] flex-grow text-gray-400 border-gray-300 border-[1px] p-2  mr-2 outline-none">
                <option>Select a patch</option>
              </select>
            </div>

            <div className="flex items-center mt-6">
              <label for="size" className="w-[10ch] lg:w-[16ch] shrink-0 text-xs font-bold">
                Quantity
              </label>
              <div className="">
                <input type="number" className="text-gray-400 border-gray-300 max-w-[70px] border-[1px] text-[12px] p-2 mr-2 outline-none" />
              </div>
            </div>

            <div className="flex items-center mt-10 w-full cursor-pointer">
              <div className="bg-yellow text-black text-[15px] flex-grow font-semibold pl-5 p-3">Add to Cart</div>
              <div className="bg-black p-4 mr-2">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 16C4.9 16 4.01 16.9 4.01 18C4.01 19.1 4.9 20 6 20C7.1 20 8 19.1 8 18C8 16.9 7.1 16 6 16ZM0 0V2H2L5.6 9.59L4.25 12.04C4.09 12.32 4 12.65 4 13C4 14.1 4.9 15 6 15H18V13H6.42C6.28 13 6.17 12.89 6.17 12.75L6.2 12.63L7.1 11H14.55C15.3 11 15.96 10.59 16.3 9.97L19.88 3.48C19.96 3.34 20 3.17 20 3C20 2.45 19.55 2 19 2H4.21L3.27 0H0ZM16 16C14.9 16 14.01 16.9 14.01 18C14.01 19.1 14.9 20 16 20C17.1 20 18 19.1 18 18C18 16.9 17.1 16 16 16Z" fill="white" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDescription;
