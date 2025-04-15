import React, { useEffect } from 'react';
import "../styles/dd.css";

function Dd() {
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

    const elements = document.querySelectorAll('.fade-element');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className='dmain'>
      <h4 className='fade-element'>"Every step tells a story, every gesture echoes tradition." -</h4>
      <div className='profile'>
        <div className='og'>
          <div className='ogin'></div>
        </div>
        <p className='name fade-element'>KKM Asha Pradeep</p>
      </div>
    </div>
  );
}

export default Dd;
