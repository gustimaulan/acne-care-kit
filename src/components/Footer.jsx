import React from "react";
import other from "../utils/other.js";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="mb-12 py-16 bg-black">
      <div className="w-11/12 mx-auto flex items-start justify-between border-b pb-8 gap-2">
        <div className="text-white text-xs">
          <p className="mb-6">Kurir Kita</p>
          <div className="flex gap-2">
            <img className="h-12" src={other.jnt.img} alt={other.jnt.title} />
            <img className="h-12" src={other.jne.img} alt={other.jne.title} />
          </div>
        </div>
      </div>
      <p className="text-xs text-center text-white mt-8">
        Copyright © 2024 Apotek Asakami
      </p>
    </footer>
  );
};

export default Footer;
