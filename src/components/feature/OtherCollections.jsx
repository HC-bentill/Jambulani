import React from "react";
import Kids from "../../assets/images/other-collections/kids.jpg";
import Large from "../../assets/images/other-collections/large-sizes.jpg";
import Pro from "../../assets/images/other-collections/pro-player.jpg";
import Shorts from "../../assets/images/other-collections/shorts.jpg";
import Socks from "../../assets/images/other-collections/socks.jpg";
import Goal from "../../assets/images/other-collections/goalkeeper.jpg";

const OtherCollections = () => {
  const images = [
    {
      text: "Kids",
      image: Kids,
    },
    {
      text: "Large sizes",
      image: Large,
    },
    {
      text: "Goalkeeper",
      image: Goal,
    },
    {
      text: "Authentic/Pro Player",
      image: Pro,
    },
    {
      text: "Shorts",
      image: Shorts,
    },
    {
      text: "Socks",
      image: Socks,
    },
  ];

  return (
    <>
      <div className="flex items-start mt-10 mb-3">
        <h2 className="mr-6 uppercase text-2xl font-bold">Other collections</h2>
      </div>
      <div className="pt-8 pb-10 grid grid-cols-3 gap-6 md:px-0 px-2">
        {images?.map((item, index) => (
            <div key={index} className="bg-no-repeat bg-cover pt-40" style={{backgroundImage: `url(${item?.image})`}}>
              {/* <img src={Kids} alt="country league image" /> */}
              <div className="flex items-center justify-between bg-[#0000007d] bottom-0 backdrop-blur-sm">
                <small className="text-xs text-white font-medium pl-3">{item?.text}</small>
                <small className="bg-[#F9DC38] p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 6 10" size="8">
                    <path d="M5.64095 4.64463C5.83864 4.8403 5.83864 5.1597 5.64095 5.35537L1.60173 9.35316C1.28601 9.66564 0.75 9.442 0.75 8.99779L0.75 1.00221C0.75 0.557998 1.28601 0.334357 1.60173 0.646838L5.64095 4.64463Z" fill="#111112"></path>
                  </svg>
                </small>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default OtherCollections;
