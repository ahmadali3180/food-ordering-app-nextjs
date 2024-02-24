import React from "react";

function MenuItem() {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white transition-all hover:shadow-md hover:shadow-black/25">
      <div className="text-center">
        <img
          src="/pizza.png"
          alt="pizza"
          className="max-h-auto max-h-24  block mx-auto"
        />
      </div>
      <h4 className="font-semibold my-3 text-xl">Pepperoni Pizza</h4>
      <p className="text-gray-500 text-sm">
        Lorem ipsum dolor sit amet, consectetuner elit
      </p>
      <button className="bg-primary text-white rounded-full px-8 py-2 mt-4">
        Add to cart Rs.1899
      </button>
    </div>
  );
}

export default MenuItem;
