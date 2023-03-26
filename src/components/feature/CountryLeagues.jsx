import React from "react";
import country from "../../assets/images/country-leagues/caf.jpg";

const CountryLeagues = () => {
  return (
    <>
      <div className="flex items-start mt-10 mb-3">
        <h2 className="mr-6 uppercase text-2xl font-bold">Country Leagues</h2>
      </div>
      <div className="pt-8 pb-10 grid grid-cols-5 gap-5 md:px-0 px-2">
        {Array(6)
          .fill()
          .map((_) => (
            <div>
              <img src={country} alt="country league image" />
              <p className="mt-2 font-bold text-sm">Europa League</p>
            </div>
          ))}
      </div>
    </>
  );
};

export default CountryLeagues;
