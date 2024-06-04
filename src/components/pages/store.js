import React from 'react';
import "./store.css";
export default function Store() {
    const items = [
        {
            title: "Motel Melati",
            imgSrc: "images/store1.png",
        },
        {
            title: "Maidaan",
            imgSrc: "images/store2.png",
        },
        {
            title: "",
            imgSrc: "images/store3.png",
        },
    ];

    return (
            <section className="store-section">
                <div className="store-cards">
                    {items.map((item, index) => (
                        <div key={index} className="store-card">
                            <div className="store-image">
                                <img src={item.imgSrc} alt={item.title} />
                                <button className="more-details-button">More details</button>
                            </div>
                            <div className="store-info">
                                <h4>{item.title}</h4>
                                <p>Available to rent</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
    );
}
