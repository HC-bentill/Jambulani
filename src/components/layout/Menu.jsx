import React from "react";
import {Link} from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="md:flex item-center w-full hidden">
        <div className="w-[145px] bg-[#F9DC38] animate-left"></div>
        <div className="flex-[1] animate-right">
          <div className="flex gap-px bg-gray border-b border-gray">
            <div className="flex items-center border-r-slate-100 border-r-[0.5px] px-8 py-2">
              <p className="mr-2 text-[12px] ">All Collections</p>
              <svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.36728 3.60241C3.16932 3.81671 2.83068 3.81671 2.63272 3.60241L0.311188 1.08928C0.0153625 0.769035 0.242499 0.25 0.678465 0.25L5.32154 0.25C5.7575 0.25 5.98464 0.769036 5.68881 1.08928L3.36728 3.60241Z" fill="#111112" />
              </svg>
            </div>
            <div className="px-2 bg-white flex-grow flex items-center py-2 border-r-slate-100 border-r-[0.5px]">
              <input className="outline-none border-0 w-full placeholder:text-sm" type="search" placeholder="What are you looking for?" />
              <div className="flex">
                <button className="bg-[#F9DC38] p-2 px-4 text-[11px]">Search</button>
                <div className="bg-black p-2 px-3 grid place-items-center mr-9">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.2907 10.3433C12.2088 9.24903 12.7616 7.83803 12.7616 6.2979C12.7616 2.81967 9.94191 5.9873e-07 6.46368 0C2.98544 1.52039e-07 0.165771 2.81967 0.165771 6.2979C0.165771 9.77614 2.98544 12.5958 6.46368 12.5958C7.83398 12.5958 9.10207 12.1582 10.1358 11.415L12.7208 14L13.8341 12.8867L11.2907 10.3433ZM11.1871 6.2979C11.1871 8.90658 9.07235 11.0213 6.46368 11.0213C3.855 11.0213 1.74025 8.90658 1.74025 6.2979C1.74025 3.68923 3.855 1.57448 6.46368 1.57448C9.07235 1.57448 11.1871 3.68923 11.1871 6.2979Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="border-r-slate-100 border-r-[0.5px] py-2 grid place-items-center px-7 hover:bg-slate-100">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 16C4.9 16 4.01 16.9 4.01 18C4.01 19.1 4.9 20 6 20C7.1 20 8 19.1 8 18C8 16.9 7.1 16 6 16ZM0 0V2H2L5.6 9.59L4.25 12.04C4.09 12.32 4 12.65 4 13C4 14.1 4.9 15 6 15H18V13H6.42C6.28 13 6.17 12.89 6.17 12.75L6.2 12.63L7.1 11H14.55C15.3 11 15.96 10.59 16.3 9.97L19.88 3.48C19.96 3.34 20 3.17 20 3C20 2.45 19.55 2 19 2H4.21L3.27 0H0ZM16 16C14.9 16 14.01 16.9 14.01 18C14.01 19.1 14.9 20 16 20C17.1 20 18 19.1 18 18C18 16.9 17.1 16 16 16Z" fill="#111112" />
              </svg>
            </div>
            <div className="flex items-center px-7 hover:bg-slate-100">
              <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z" fill="#111112" />
              </svg>
              <svg width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.36728 3.60241C3.16932 3.81671 2.83068 3.81671 2.63272 3.60241L0.311188 1.08928C0.0153625 0.769035 0.242499 0.25 0.678465 0.25L5.32154 0.25C5.7575 0.25 5.98464 0.769036 5.68881 1.08928L3.36728 3.60241Z" fill="#111112" />
              </svg>
            </div>
          </div>
          <div className="flex items-center font-medium text-[12px] text-gray-700 pl-9 pt-1 cursor-pointer border-b-slate-100 border-b-[0.5px]">
            <Link to="/" className="mr-14 text-black font-bold border-b-[#F9DC38] border-b-[2px] py-1">
              Home
            </Link>
            <div className="flex items-center mr-14 hover:font-bold hover:text-black">
              <p>T-Shirts</p>
              <svg className="ml-2" width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.36728 3.60241C3.16932 3.81671 2.83068 3.81671 2.63272 3.60241L0.311188 1.08928C0.0153625 0.769035 0.242499 0.25 0.678465 0.25L5.32154 0.25C5.7575 0.25 5.98464 0.769036 5.68881 1.08928L3.36728 3.60241Z" fill="gray" />
              </svg>
            </div>
            <div className="flex items-center mr-14 hover:font-bold hover:text-black">
              <p>NBA</p>
              <svg className="ml-2" width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.36728 3.60241C3.16932 3.81671 2.83068 3.81671 2.63272 3.60241L0.311188 1.08928C0.0153625 0.769035 0.242499 0.25 0.678465 0.25L5.32154 0.25C5.7575 0.25 5.98464 0.769036 5.68881 1.08928L3.36728 3.60241Z" fill="gray" />
              </svg>
            </div>
            <div className="flex items-center mr-14 hover:font-bold hover:text-black">
              <p>Tracksuits</p>
              <svg className="ml-2" width="6" height="4" viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.36728 3.60241C3.16932 3.81671 2.83068 3.81671 2.63272 3.60241L0.311188 1.08928C0.0153625 0.769035 0.242499 0.25 0.678465 0.25L5.32154 0.25C5.7575 0.25 5.98464 0.769036 5.68881 1.08928L3.36728 3.60241Z" fill="gray" />
              </svg>
            </div>
            <p className="mr-14 hover:font-bold hover:text-black">Products Delivery • 1 – 2 days</p>
            <p className="mr-14 hover:font-bold hover:text-black">Contact</p>
            <p className="mr-14 hover:font-bold hover:text-black">Reviews</p>
          </div>
        </div>
      </div>

      <div className="md:hidden flex items-center justify-between p-5 pb-0">
        <div className="flex items-center">
          <svg className="mr-6" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 17H20M4 12H20M4 7H20" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.2907 10.3433C12.2088 9.24903 12.7616 7.83803 12.7616 6.2979C12.7616 2.81967 9.94191 5.9873e-07 6.46368 0C2.98544 1.52039e-07 0.165771 2.81967 0.165771 6.2979C0.165771 9.77614 2.98544 12.5958 6.46368 12.5958C7.83398 12.5958 9.10207 12.1582 10.1358 11.415L12.7208 14L13.8341 12.8867L11.2907 10.3433ZM11.1871 6.2979C11.1871 8.90658 9.07235 11.0213 6.46368 11.0213C3.855 11.0213 1.74025 8.90658 1.74025 6.2979C1.74025 3.68923 3.855 1.57448 6.46368 1.57448C9.07235 1.57448 11.1871 3.68923 11.1871 6.2979Z"
              fill="black"
            />
          </svg>
        </div>

        <div className="flex items-center">
          <svg className="mr-6" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 16C4.9 16 4.01 16.9 4.01 18C4.01 19.1 4.9 20 6 20C7.1 20 8 19.1 8 18C8 16.9 7.1 16 6 16ZM0 0V2H2L5.6 9.59L4.25 12.04C4.09 12.32 4 12.65 4 13C4 14.1 4.9 15 6 15H18V13H6.42C6.28 13 6.17 12.89 6.17 12.75L6.2 12.63L7.1 11H14.55C15.3 11 15.96 10.59 16.3 9.97L19.88 3.48C19.96 3.34 20 3.17 20 3C20 2.45 19.55 2 19 2H4.21L3.27 0H0ZM16 16C14.9 16 14.01 16.9 14.01 18C14.01 19.1 14.9 20 16 20C17.1 20 18 19.1 18 18C18 16.9 17.1 16 16 16Z" fill="#111112" />
          </svg>

          <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 3C11.66 3 13 4.34 13 6C13 7.66 11.66 9 10 9C8.34 9 7 7.66 7 6C7 4.34 8.34 3 10 3ZM10 17.2C7.5 17.2 5.29 15.92 4 13.98C4.03 11.99 8 10.9 10 10.9C11.99 10.9 15.97 11.99 16 13.98C14.71 15.92 12.5 17.2 10 17.2Z" fill="#111112" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Menu;

// F5F5F6
