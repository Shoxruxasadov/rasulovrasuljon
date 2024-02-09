import React from "react";
import logo from "../image/logo.png";

export default function Header() {
  return (
    <header>
      <div className="container">
        <nav><ul>
          <li>Asosiy</li>
          <li>Men haqimda</li>
        </ul></nav>
        <img src={logo} alt="logo" />
        <nav><ul>
          <li>Loyihalarim</li>
          <li>Bog'lanish</li>
        </ul></nav>
      </div>
    </header>
  );
}
