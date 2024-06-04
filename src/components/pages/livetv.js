import React from 'react';
import "./livetv.css";
export default function Livetv() {
    const events = [
        {
            title: "DP World Tour Golf-European Open",
            time: "Live at 4:25 PM",
            imgSrc: "images/image1.png",            
        },
        {
            title: "DP World Tour Golf-European Open",
            time: "Tomorrow 4:25 PM",
            imgSrc: "images/image2.png",            
        },
        {
            title: "FIFA World Cup 2026 Qualifiers",
            time: "Thu, Jun 6 9:25 PM",
            imgSrc: "images/image3.png",            
        },
        {
            title: "FIFA World Cup 2026 Qualifiers",
            time: "Fri, Jun 7 12:25 AM",
            imgSrc: "images/image4.png",            
        },
        {
            title: "FIFA World Cup 2026 Qualifiers",
            time: "Fri, Jun 7 12:25 AM",
            imgSrc: "images/image5.png",            
        },
        {
            title: "FIFA World Cup 2026 Qualifiers",
            time: "Fri, Jun 7 12:25 AM",
            imgSrc: "images/image6.png",            
        },
    ];

    return (
        <div className="heading">
            <h1>Live TV</h1>
            <section>
                <h3>FanCode: Live and upcoming events</h3>
                <div className="event-cards">
                    {events.map((event, index) => (
                        <div key={index} className="event-card">
                            <div className="event-image">
                                <img src={event.imgSrc} alt={event.title} />
                               
                            </div>
                            <div className="event-info">
                                <h4>{event.title}</h4>
                                <p>{event.time}</p>
                                <button className="subscribe-button">Subscribe</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
