import React,{useState,useEffect} from "react";
import Header from "./Header";
import About from "./About";
import CarouselComp from "./CarouselComp";
import Services from "./Services";



import "../css/Home.css";

const Home = () => {

  
  const [MovetoTop, setMovetoTop] = useState(false)
  
  const [pageVisible, setpageVisible] = useState("");

  const [offsetY, setoffsetY] = useState(0);
  
  
  const handleScroll = () => setoffsetY(window.pageYOffset)
  
  const waveColor = "white";




  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])



  
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) setMovetoTop(true);
    else if (scrolled <= 200) setMovetoTop(false);
  };

  const scrollToTop = () => { 

    
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    

  };

  window.addEventListener("scroll", toggleVisible);

  const pageSelector = (selected) =>{
    console.log(pageVisible);
      setpageVisible(selected);
  }
  

  return (
    <div>
      {MovetoTop && <div className="movetop" onClick={scrollToTop}></div>}

      <div className="header-comp">
        <Header pageSelector={pageSelector} />
      </div>

      <div className="top-heading">
        <h1>#1 Event Planners</h1>
        <button className="main-btn">Try Us</button>
      </div>

      <div
        className="image-slider"
        style={{ transform: `translateY(-${offsetY * 0.3}px)` }}
      >
        <CarouselComp />
      </div>

      <div className="content">
        <div className="waves">
          <svg
            id="back-wave"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{
                  "stop-color": `rgb(
                ${((offsetY + 150) % 250) * 2},
                ${((offsetY + 20) % 250) * 1},
                ${((offsetY + 33) % 250) * 10}
                )`,
                  "stop-opacity": "1",
                }}
              />
              <stop
                offset="100%"
                style={{
                  "stop-color": `rgb(
                ${((offsetY + 150) % 230) * 10},
                ${((offsetY + 100) % 230) * 2},
                ${((offsetY + 1) % 230) * 5}
                )`,
                  "stop-opacity": "1",
                }}
              />
            </linearGradient>
            <path
              fill="url(#grad1)"
              fillOpacity="1"
              d="M0,224L48,208C96,192,192,160,288,160C384,160,480,192,576,213.3C672,235,768,245,864,250.7C960,256,1056,256,1152,234.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill={waveColor}
              fillOpacity="1"
              d="M0,224L48,208C96,192,192,160,288,160C384,160,480,192,576,213.3C672,235,768,245,864,250.7C960,256,1056,256,1152,234.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="about-comp" >
          <About />
        </div>

        <div className="service-comp">
          <Services />
        </div>
        <div className="footer">
          <footer>
                  <h1>rapto</h1>
                  <div className="contactus">
                    <h3>Contact US</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, soluta!</p>
                  </div>

                 {/* <div className="servicesprovided">
                    <h3>Services</h3>
                    <div className="service-items"></div>
                    <p>Wedding</p>
                    <p>Corporate</p>
              </div>*/}
          </footer>
        </div>
      </div>


    </div>
  );
};

export default Home;
