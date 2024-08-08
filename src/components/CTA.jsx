import React from "react";
import CTACard from "./CTACard";

const CTA = () => {
  return (
    <div className="p-4 border-t-2">
      <div className="flex flex-col gap-2 items-center justify-center">
        <h1 className="p-2 text-lg font-bold text-gray-800 text-center">
          Order sekarang untuk sembuhkan dan cegah jerawat datang lagi!
        </h1>
      </div>
      <div className="flex items-center justify-center pb-4">
        <img src="../guarantee.png" alt="bank" />
        <img src="../lock.png" alt="lock" />
      </div>
      <div className="flex items-center justify-center">
        <img src="../panah-gif.gif" alt="panah gif" />
      </div>
      <CTACard />
    </div>
  );
};

export default CTA;
