import React from 'react'
import abstract from "../image/Background Elements/abstract.png"
import vector from "../image/Background Elements/Vector2.png"
import ornament from "../image/Background Elements/Ornament1.png"

import isft from "../image/edu/images-Photoroom.png-Photoroom.png"
import regular from "../image/edu/regular.png"
import xmedia from "../image/edu/xmedia.jpg"


import overlay from "../image/Overlay/overlay.png"
import user from "../image/User/user-regular.png"

export default function About() {
    return (
        <section id="about">
            <div className="container">
                <div className="title">
                    <h2>Men Haqimda</h2>
                    <p>Juda ham izlanuvchan, yosh bo‘lishiga qaramasdan bir necha yutuqlar egasi. “Tadbirkorlar maktabi” ni hamda “Tizimlashtirish” sohasini ham tugallagan. Shuningdek, O‘zDJTU Akademik litseyining eng namunali bitiruvchisi va hozirda ISFT Universitet talabsi hisoblanadi. Front-end dasturchisi. Xorijiy filmlarni ko‘rishni, Sog'lom turmush tarziga amal qilishni shuningdek ochiq tabiatda yurishni yaxshi ko‘radi, Chunki uning ilg’or g’oya va fikrlarini shu jarayonda keladi. Ko‘proq vaqtini oila davrasida o‘tkazishni yaxshi ko‘radi.</p>
                </div>
                <div className="educations">
                    <div className="education">
                        <p>Ta'lim</p>
                        <div className="edu isft">
                            <img src={isft} />
                            <div className="edu-title">
                                <h1>International School of Finance Technology</h1>
                                <h2>Buxgalteriya hisobi va moliya</h2>
                                <h3>Sentyabr 2023 - May 2028</h3>
                            </div>
                        </div>
                        <div className="edu uzjtu">
                            <img src={"https://regularschool.uz/static/media/uzswlu.a0b5aac3e32624b68c09.png"} />
                            <div className="edu-title">
                                <h1>O'zbekiston Davlat Jahon tillari Universiteti</h1>
                                <h2>Xorijiy filologiya iqdisod</h2>
                                <h3>Sentyabr 2021 - May 2023</h3>
                            </div>
                        </div>
                        <div className="edu progress-pro">
                            <img src={"https://proweb.uz/apple-touch-icon.png"} />
                            <div className="edu-title">
                                <h1>Progress pro</h1>
                                <h2>Frontend</h2>
                                <h3>Sentyabr 2021</h3>
                            </div>
                        </div>
                        <div className="edu proweb">
                            <img src={"https://proweb.uz/apple-touch-icon.png"} />
                            <div className="edu-title">
                                <h1>ProWeb</h1>
                                <h2>Frontend</h2>
                                <h3>Mart 2020</h3>
                            </div>
                        </div>
                    </div>
                    <div className="experience">
                        <p>Tahriba</p>
                        <div className="exp regular">
                            <img src={regular} />
                            <div className="exp-title">
                                <h1>Regular IT School</h1>
                                <h2>Asoschi | Grafik dizayner</h2>
                                <h3>Dekabr 2022</h3>
                            </div>
                        </div>
                        <div className="exp real-white">
                            <img src={""} />
                            <div className="exp-title">
                                <h1>Real White MChJ</h1>
                                <h2>Buxgalter</h2>
                                <h3>Iyun 2022</h3>
                            </div>
                        </div>
                        <div className="exp real-white">
                            <img src={""} />
                            <div className="exp-title">
                                <h1>Regular AR SIM</h1>
                                <h2>Buxgalter</h2>
                                <h3>Dekabr 2022</h3>
                            </div>
                        </div>
                        <div className="exp real-white">
                            <img src={xmedia} />
                            <div className="exp-title">
                                <h1>Xmedia</h1>
                                <h2>Grafik dizayner</h2>
                                <h3>Avgust 2022</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <img className='ornament' src={ornament} alt="ornament" />
                <div className="image">
                    <img className='vector' src={vector} alt="vector" />
                    <div className='back-element'>
                        <img className='user' src={user} alt="user" />
                        <img className='abstract' src={abstract} alt="abstract" />
                    </div>
                    <img className='overlay' src={overlay} alt="overlay" />
                </div>
                <div className="dot" />
            </div>
        </section>
    )
}
