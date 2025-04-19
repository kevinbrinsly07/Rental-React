import React from "react";
import "./carBrandList.css";

const CarBrandsList = () => {
  const carBrands = 
  [
    "Thank you very much for the service. It was perfect. The car was in a good condition.",
    "Very professional and timely service. Highly recommended!",
    "The car was clean and well-maintained. Will rent again.",
    "Great experience overall, no issues at all.",
    "Friendly staff and smooth process. Loved it!"
  ];

  return (
    <div className="text-2xl w-full bg-white h-[90px] overflow-hidden">
      <div className="bg-red-500 h-[10px]"></div>
      <div className="bg-[#242424] h-[10px]"></div>

      <div className="animateCarBrandList flex justify-center items-center text-center gap-50 w-auto h-[50px] text-black overflow-x-hidden">
        {carBrands.map((brand, index) => (
          <div key={index} className="transition">
            <p className="text-sm italic">{brand}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#242424] h-[10px]"></div>
      <div className="bg-red-500 h-[10px]"></div>
    </div>
  );
};

export default CarBrandsList;
