import React from "react";
import styles from "./Header.module.css";

const links = [
  {
    name: "Статьи",
  },
  {
    name: "Категории",
  },
];

const Header = () => {
  return (
    <header className="absolute w-full top-0 left-0 h-[60px] border-b">
      <div className="container h-full flex items-center">
        <div className="font-bold mr-40">Finance.pro</div>
        <nav className="flex gap-10 items-center">
          {links.map((link, idx) => (
            <div className="text-sm cursor-pointer hover:underline" key={idx}>
              {link.name}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;