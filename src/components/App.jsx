import React from "react";
import "../styles/hero.css";
import "../styles/arrivals.css";

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
                <h1><span>LET’S</span> EXPLORE <span>UNIQUE</span> CLOTHES.</h1>
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

        <div className="brands">
            <div className="brands-handler">
              <img src={`${process.env.PUBLIC_URL}/assets/HnM.png`} alt="H&M" />
              <img src={`${process.env.PUBLIC_URL}/assets/OBEY.png`} alt="OBEY" />
              <img src={`${process.env.PUBLIC_URL}/assets/shopify.png`} alt="shopify" />
              <img src={`${process.env.PUBLIC_URL}/assets/LACOSTE.png`} alt="LACOSTE" />
              <img src={`${process.env.PUBLIC_URL}/assets/LEVIS.png`} alt="LEVIS" />
              <img src={`${process.env.PUBLIC_URL}/assets/amazon.png`} alt="amazon" />
            </div>
        </div>

        <section className="arrivals">
          <div className="arrivals-head">
            <div className="title">
              <h2>NEW AR<span>RIVALS</span></h2>
            </div>
          </div>

          <div className="arrivals-main">
            <div className="cards-holder">
              <div className="card">
                <div className="card-photo">

                </div>

                <div className="card-info">

                </div>
              </div>
            </div>
          </div>
        </section>
     </div>
    </main>
  );
}

export default App;