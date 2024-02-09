import React from 'react'

import vector from "../image/Background Elements/Vector1.png"
import vecrotGreen from "../image/Overlay/Vector.png"
import vecrotGray from "../image/Overlay/Vector2.png"
import overlay from "../image/Overlay/overlay.png"

import user from "../image/User/user.png"


export default function Hero() {
    return (
        <section id="hero">
            <div className="container">
                <div className="title">
                    <h1>
                        <span className='hola'>Assalomu aleykum! Men</span><br />
                        <span className='name'>Rasuljon Rasulov</span>
                    </h1>
                    <h2>
                        <span className='frontend'>Frontend</span><br />
                        <span className='developer'>&nbsp;&nbsp;Dasturchi</span>
                    </h2>
                    <p>Men Rasuljon Rasulov, Frontend dasturchi, Grafik dizayner, Buxgalterlik tajribasiga egaman.</p>
                    <div className="contacts">
                        <a className="telegram" href='https://t.me/Rasuljon_Rasulov'>
                            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 4C10.4178 4 8.87103 4.46919 7.55544 5.34824C6.23985 6.22729 5.21447 7.47672 4.60897 8.93853C4.00347 10.4003 3.84504 12.0089 4.15372 13.5607C4.4624 15.1126 5.22433 16.538 6.34315 17.6569C7.46197 18.7757 8.88743 19.5376 10.4393 19.8463C11.9911 20.155 13.5997 19.9965 15.0615 19.391C16.5233 18.7855 17.7727 17.7602 18.6518 16.4446C19.5308 15.129 20 13.5823 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4ZM15.93 9.48L14.62 15.67C14.52 16.11 14.26 16.21 13.89 16.01L11.89 14.53L10.89 15.46C10.8429 15.5215 10.7824 15.5715 10.7131 15.6062C10.6438 15.6408 10.5675 15.6592 10.49 15.66L10.63 13.66L14.33 10.31C14.5 10.17 14.33 10.09 14.09 10.23L9.55 13.08L7.55 12.46C7.12 12.33 7.11 12.03 7.64 11.83L15.35 8.83C15.73 8.72 16.05 8.94 15.93 9.48Z" fill="#000000" />
                            </svg>
                            <span>Telegram</span>
                        </a>
                        <a className="email" href='mailto:rasulovrasuljon@gmail.com'>
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                    <path d="M655 4440 c-242 -36 -453 -185 -564 -400 -33 -64 -76 -180 -68 -185 156 -101 2526 -1539 2537 -1539 11 0 2381 1438 2537 1539 8 5 -35 121 -68 185 -95 184 -258 317 -469 382 l-75 23 -1890 1 c-1039 1 -1913 -2 -1940 -6z" />
                                    <path d="M0 2370 c0 -881 2 -1021 16 -1088 32 -155 92 -268 204 -383 122 -124 269 -197 441 -218 116 -15 3682 -15 3798 0 270 33 505 214 606 466 56 139 56 131 53 1226 l-3 1007 -1200 -731 c-660 -403 -1220 -741 -1243 -751 -59 -27 -165 -27 -224 0 -23 10 -576 344 -1227 741 -650 397 -1192 726 -1202 732 -19 9 -19 -12 -19 -1001z" />
                                </g>
                            </svg>
                            <span>Email</span>
                        </a>
                    </div>
                    <button>CV Resume</button>
                </div>

                <div className="image">
                    <img className='vectorGreen' src={vecrotGreen} alt="vector" />
                    <img className='vecrotGray' src={vecrotGray} alt="vector" />
                    <div className='userPhoto'>
                        <img src={user} alt="user" />
                    </div>
                    <img className='overlay' src={overlay} alt="overlay" />
                </div>
                <img className='vector' src={vector} alt="vector" />
            </div>
        </section>
    )
}
