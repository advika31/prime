import React from 'react';
export default function Store() {
    const items = [
        {
            title: "Madgaon Express",
            imgSrc: "images/movie1.png",
        },
        {
            title: "Oppenheimer",
            imgSrc: "images/movie2.png",
        },
        {
            title: "Aavesham",
            imgSrc: "images/movie3.png",
        },
    ];

    return (
        <div className="heading">
            <h1>Movies</h1>
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
                                <p>Watch with a Prime membership</p>
                            </div>
                        </div>
                    
                    ))}
                </div>
            </section>
        </div>
    );
}
