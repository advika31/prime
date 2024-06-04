import React from 'react';
export default function TVshows() {
    const items = [
        {
            title: "Watch Now",
            imgSrc: "images/tv1.png",
        },
        {
            title: "Watch Now",
            imgSrc: "images/tv2.png",
        },
        {
            title: "Watch Now",
            imgSrc: "images/tv3.png",
        },
    ];

    return (
        <div className='heading'>
            <h1>TV Shows</h1>
            <section className="store-section">
                <div className="store-cards">
                    {items.map((item, index) => (
                        <div key={index} className="store-card">
                            <div className="store-image">
                                <img src={item.imgSrc} alt={item.title} />
                                <button className="play-button"> &#9654;</button>
                            </div>
                            <div className="store-info">
                                <h4>{item.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

 