import React, { useEffect, useState } from "react";
import country from "../../assets/images/country-leagues/caf.jpg";
import { GetProductCategory } from "../../services/category.service";

const CountryLeagues = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = () => {
    GetProductCategory()
      .then((res) => {
        if (res) {
          setCategories(res?.data?.categories?.data);
        }
      })
      .catch((err) => console.log("err", err));
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <>
      <div className="flex items-start mt-10 mb-3">
        <h2 className="mr-6 uppercase text-2xl font-bold">Country Leagues</h2>
      </div>
      <div className="pt-8 pb-10 grid md:grid-cols-5 grid-cols-2 gap-3 md:gap-5 md:px-0 px-2">
        {categories?.map((category, index) => (
            <div key={index}>
              <img src={category?.image ? category?.image : country} alt="country league image" />
              <p className="mt-2 font-bold text-sm">{category?.title}</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default CountryLeagues;
