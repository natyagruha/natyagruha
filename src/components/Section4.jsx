import React, { useEffect } from 'react';
import "../styles/section4.css";

function Section4() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.2 }
    );

    const locations = document.querySelectorAll('.location');
    locations.forEach((location) => observer.observe(location));

    return () => {
      locations.forEach((location) => observer.unobserve(location));
    };
  }, []);

  return (
    <div className="s4main">
      <h1 className="main-heading">Classes :</h1>
      <h2 className='sub'>Bharathanatyam, Mohiniyattam & Kuchupudi</h2>
      <div className="schedule">
        <div className="location">
          <h2 className="location-name">Ettumanoor</h2>
          <p className="time"> NSS Karayogam choorakulangara</p>
          <p className="time"> Sun: 4:30 PM - 6:30 PM</p>
        </div>

        <div className="location">
          <h2 className="location-name">Chingavanam</h2>
          <p className="time"> SNDP Auditorium</p>
          <p className="time"> Sat: 3:30 PM - 5:30 PM</p>
          <p className="time"> Sun: 10:00 AM - 12:30 PM</p>
        </div>

        <div className="location">
          <h2 className="location-name">Kidangoor</h2>
          <p className="time">  PKV Library</p>
          <p className="time"> Sun: 2:30 PM - 4:00 PM</p>
        </div>
      </div>
    </div>
  );
}

export default Section4;
