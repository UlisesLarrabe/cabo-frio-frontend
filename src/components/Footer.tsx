import dayjs from "dayjs";
import React from "react";

const Footer = () => {
  return (
    <footer className="bottom-0 absolute w-full p-4 ">
      <p className="text-center text-gray-500 ">
        Cabo frio {dayjs().get("year")}
      </p>
    </footer>
  );
};

export default Footer;
