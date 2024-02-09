import React from 'react'
import logo from "../image/logo.png"
import { RiYoutubeFill, RiInstagramFill, RiTelegramFill, RiFacebookCircleFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="title">
          <h2>Contact</h2>
        </div>
        <div className="logo">
          <img src={logo} alt="log" />
        </div>
        <h3>Social Media</h3>
        <div className="social">
          <a href="https://instagram.com/rasuljon_rasulovv"><RiInstagramFill /></a>
          <a href="https://youtube.com/@rasuljonrasulov7751"><RiYoutubeFill /></a>
          <a href="https://t.me/rasuljon_rasulov"><RiTelegramFill /></a>
          <a href="https://facebook.com/profile.php?id=100092925330187"><RiFacebookCircleFill /></a>
        </div>
        <div className="description">
          <p>Copyright © 2024 | <a href="https://Shoxruxasadov.uz">Powered by</a></p>
        </div>
      </div>
    </footer>
  )
}
