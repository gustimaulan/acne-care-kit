import React from "react";
import faqs from "../utils/faq";

const FAQ = () => {
  return (
    <div className="py-4 px-2 border-t-2">
      <h1 className="text-xl text-center font-bold text-black-900">
        FAQ <br />
        Pertanyaan Yang Sering Ditanyakan
      </h1>
      
      <div className="px-2 my-8 flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <div key={index} className="p-2 rounded-md bg-gray-100 shadow-md">
            <h1 className="text-lg text-purple-900 mb-2">{faq.q}</h1>
            <p className="text-sm font-light">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default FAQ;
