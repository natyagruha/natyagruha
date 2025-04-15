import React, { useEffect } from 'react';
import "../styles/section3.css";

function Section3() {
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

    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach((member) => observer.observe(member));

    return () => {
      teamMembers.forEach((member) => observer.unobserve(member));
    };
  }, []);

  return (
    <div className='s3main'>
      <h1>Meet Our Team</h1>

      <div className="team-member">
        <div className='pic pic1'></div>
        <h4><span>DIRECTOR:</span> KKM Asha Pradeep</h4>
      </div>

      <div className="team-member">
        <div className='pic pic2'></div>
        <h4><span>CHAIRMAN:</span> Mohan D Kurichy</h4>
      </div>

      <div className="team-member">
        <div className='pic pic3'></div>
        <h4><span>General Secretary:</span> TS Vijayakumar</h4>
      </div>

      <div className="team-member">
        <div className='pic pic4'></div>
        <h4><span>VICE CHAIRMAN:</span> Pradeep PR</h4>
      </div>
    </div>
  );
}

export default Section3;
