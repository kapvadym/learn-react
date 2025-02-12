import React from "react";
import "../styles/App.css";

const App = () => {
  return(
    <main>
     <div className="wrapper">
        <section className="hero">
          <div className="hero-head">
            <div className="company">
              <img src={`${process.env.PUBLIC_URL}/logo.svg`} className="logo"/>
              <h2>FASION</h2>
            </div>

            <nav>
              <button>CATALOGUE</button>
              <button>FASION</button>
              <button>FAVOURITE</button>
              <button>LIFESTYLE</button>
              <button className="action">SIGN UP</button>
            </nav>
          </div>

          <div className="hero-main">
            <div className="text">
              <div className="title">
                <h1>LET’S EXPLORE UNIQUE CLOTHES.</h1>
              </div>

              <div className="sub-title">
                Live for Influential and Innovative fashion!
              </div>

              <div>
                <button className="action">Shop Now</button>
              </div>
            </div>

            
            
            <div className="picture">
              <img src={`${process.env.PUBLIC_URL}/assets/hero-women.png`} className="img" />
            </div>
          </div>
        </section>
     </div>
    </main>
  );
}

export default App;