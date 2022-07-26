import React from 'react'
import '../css/About.css'


const About = (props) => {
const [offsetY, setoffsetY] = React.useState(0);

const handleScroll = () => setoffsetY(window.pageYOffset);
React.useEffect(() => {
  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

    const colorChanger = {
      color: `rgb(
                ${(offsetY * 0.2 + 150) % 255},
                ${(offsetY * 0.3)  % 255},
                ${(offsetY * 0.5)%255}
                )`,
    };
    const bgcolorChanger = {
      'background-color': `rgb(
                ${(offsetY * 0.2 + 150) % 255},
                ${(offsetY * 0.3)  % 255},
                ${(offsetY * 0.5)%255},0.09
                )`,
    };



  return (
    <div className="about">
      <h1 style={colorChanger}>About Us </h1>
      <div className="about-content" 
      style={{ bgcolorChanger,transform: `translateY(-${offsetY * 0.3}px)` }}>
        <p >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
          mollitia soluta inventore vel minus beatae consectetur quas, tempore
          tempora debitis. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Sequi minus mollitia est, beatae consequatur hic nostrum
          repudiandae accusamus quae quo, reiciendis eum, sed quam eveniet rem
          asperiores. Beatae eum eius vitae velit reiciendis minus non,
          consectetur, veniam quae sapiente ipsum illo nihil, numquam doloribus
          culpa soluta nemo blanditiis officiis labore!
        </p>
      </div>
    </div>
  );
}

export default About