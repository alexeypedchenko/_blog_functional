import React from "react";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <header className="absolute w-full top-0 left-0 h-[60px] border-b">
      <div className="container h-full flex items-center">
        <div className="text-bold">finance.pro</div>
      </div>
    </header>
  );
};

export default Header;
