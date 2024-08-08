import React from "react";
import productItems from "../utils/productItems.js";

const ProductDetail = () => {
  return (
    <>
      <div className="p-4 text-gray-800">
      <h2 className="text-xl font-semibold">Terdiri dari:</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-4 gap-4">
        <div className="border rounded-lg p-2">
          <p>Paket 1</p>
          <ul className="py-4">
            {productItems1.map((item, index) => (
              <li key={index} className="font-light">
                ✅ {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="border rounded-lg p-2">
          <p>Paket 2</p>
          <ul className="py-4">
            {productItems2.map((item, index) => (
              <li key={index} className="font-light">
                ✅ {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="border rounded-lg p-2">
          <p>Paket 3</p>
          <ul className="py-4">
            {productItems3.map((item, index) => (
              <li key={index} className="font-light">
                ✅ {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>
    </>
  );
};

export default ProductDetail;
