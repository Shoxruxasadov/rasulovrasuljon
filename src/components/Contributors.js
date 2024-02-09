import React from 'react'
import companies from "../image/Overlay/companies.png"

export default function Contributors() {
    return (
        <section id='contributors'>
            <div className="container">
                <div className="title">
                    <h2>Contributors</h2>
                    <p>They support products that simplify and automate decent mechanic processes saving time for activities.</p>
                </div>
                <div className="companies">
                    <img src={companies} alt="companies" />
                </div>
            </div>
        </section>
    )
}
