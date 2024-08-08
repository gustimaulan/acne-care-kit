import React, { useRef } from "react";
import other from "../utils/other.js";
import packages from "../utils/packages.js";

const CTACard = () => {
  const bottomRef = useRef(null);

  const scrollToAnchor = () => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };
  

  return (
    <div>
      <div className="grid grid-cols-1 gap-2">
        {packages.map((pkg, index) => (
          <div className="mt-4 p-2 border border-gray-100 shadow shadow-slate-300 rounded-lg" key={index}>
            <img className="mb-2 w-full" src={pkg.img} alt={pkg.alt} />
            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
              {pkg.packageLabel}
            </h3>
            <p className="text-md">{pkg.title}</p>
            <div className="flex flex-wrap gap-2">
              <div className="flex flex-col">
                <p className="text-xs text-red-600 line-through">
                  {pkg.oldPrice}
                </p>
                <p className="text-purple-800 font-bold">{pkg.newPrice}</p>
              </div>
            </div>
            <button
              onClick={pkg.onClick}
              className="flex items-center justify-center w-full my-4 py-4 px-4 text-sm rounded-md shadow-md bg-green-700 text-white hover:bg-green-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="#FFFFFF"
                className="mr-2"
              >
                <path d="M20.52 3.5A11.43 11.43 0 0 0 2.69 17.63L1.5 22.5l4.96-1.18a11.42 11.42 0 0 0 5.57 1.42h.05A11.44 11.44 0 0 0 20.52 3.5zM12 20.24a9.44 9.44 0 0 1-4.8-1.3l-.34-.2-2.95.7.63-2.88-.22-.3a9.43 9.43 0 1 1 17.1-5.5 9.43 9.43 0 0 1-9.42 9.48zm5.25-7.16c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.64.07a7.62 7.62 0 0 1-2.24-1.4 8.37 8.37 0 0 1-1.55-1.93c-.17-.3 0-.44.14-.6.14-.15.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.24-.25-.6-.5-.52-.67-.52-.17 0-.37 0-.57 0-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5s1.08 2.88 1.24 3.07c.15.2 2.12 3.25 5.13 4.55.72.3 1.28.47 1.72.6.72.23 1.37.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.07-.1-.27-.17-.57-.3z" />
              </svg>
              <span>PESAN SEKARANG</span>
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <img
          ref={bottomRef}
          className="h-8 my-8"
          src={other.allBank.img}
          alt={other.allBank.title}
        />
      </div>

      <div className="p-2 fixed bottom-0 left-0 w-full bg-white">
        <button
          onClick={scrollToAnchor}
          className="w-full py-3 px-4 text-sm rounded-md shadow-md bg-purple-800 text-white hover:bg-purple-950"
        >
          AMBIL PROMO SEKARANG JUGA
        </button>
      </div>
    </div>
  );
};

export default CTACard;
