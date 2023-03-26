import React from "react";

function SliderContent({activeIndex, sliderImage}) {
  return (
    <section>
      {sliderImage.map((slide, index) => (
        <div key={index} className={index === activeIndex ? "slides active" : "inactive"}>
          <img className="slide-image" src={slide.urls} alt="" />

          <div className="border-[1px] border-white slide-text flex items-center">
            <p className="text-[12px] px-4 py-2 bg-[#00000082]">{slide.description}</p>
            <div className="bg-white p-3">
              <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.9999 3.57143H10.5713C10.5713 1.6 8.97129 0 6.99986 0C5.02843 0 3.42843 1.6 3.42843 3.57143H1.99986C1.21415 3.57143 0.578432 4.21429 0.578432 5L0.571289 13.5714C0.571289 14.3571 1.21415 15 1.99986 15H11.9999C12.7856 15 13.4284 14.3571 13.4284 13.5714V5C13.4284 4.21429 12.7856 3.57143 11.9999 3.57143ZM6.99986 1.42857C8.18557 1.42857 9.14272 2.38571 9.14272 3.57143H4.857C4.857 2.38571 5.81415 1.42857 6.99986 1.42857ZM6.99986 8.57143C5.02843 8.57143 3.42843 6.97143 3.42843 5H4.857C4.857 6.18571 5.81415 7.14286 6.99986 7.14286C8.18557 7.14286 9.14272 6.18571 9.14272 5H10.5713C10.5713 6.97143 8.97129 8.57143 6.99986 8.57143Z"
                  fill="#111112"
                />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
