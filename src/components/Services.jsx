import React from 'react';

import wedding_service from '../media/wedding_service.jpg'
import corporate_service from '../media/corporate_service.jpg'
import social_event from '../media/social_event.jpg'

import '../css/Services.css';

const Services = () => {
  const [offsetY, setoffsetY] = React.useState(0);

  const handleScroll = () => setoffsetY(window.pageYOffset);
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    const image_size = "250rem";



  return (
    <div className="Services">
      <div
        className="service_heading"
        style={{ transform: `translateY(-${offsetY * 0.3}px)` }}
      >
        <h1>SELECT SERVICES</h1>
      </div>
      <div
        className="service_component"
        style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
      >
        <div className="wedding">
          <img
            src={wedding_service}
            alt="wedding"
            width={image_size}
            height={image_size}
          />
        </div>

        <div className="corporate">
          <img
            src={corporate_service}
            alt="corporate"
            width={image_size}
            height={image_size}
          />
        </div>

        <div className="social">
          <img
            src={social_event}
            alt="social"
            width={image_size}
            height={image_size}
          />
        </div>
      </div>
    </div>
  );
}

export default Services