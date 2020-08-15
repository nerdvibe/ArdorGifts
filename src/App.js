import React  from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./bulma.css";
import "./App.css";
import "./fa/css/fa.min.css";
import wave from "./singleWave.png";

import Header from "./modules/header/Header";
import Footer from "./modules/footer/Footer";
import Welcome from "./modules/welcome/Welcome";
import Wizard from "./modules/walletGenerator/components/Wizard";
import WalletInfo from "./modules/walletGenerator/components/generate/WalletInfo";
import How from "./modules/how/How";
import SmallScreenBlocker from "./modules/smallScreenBlocker/SmallScreen";

export default function App() {
  return (
    <Router>
      <div className="only-big-screen">
        <div>
          <section
            className="hero is-info is-fullheight"
            style={{
              background: "#3372A3"
            }}
          >

              <Header />

              <div className="hero-body " style={{background:'#ffffff',minHeight:'45vh', color:'black',paddingTop: '0px'}}>
              {/* <div className="hero-body" style={{background:'#ffffff', height:'45vh',minHeight:'45vh'}}> */}
                <Switch>
                  <Route exact path="/" component={Welcome} />
                  <Route exact path="/start" component={Wizard} />
                  <Route path="/create-wallet" component={WalletInfo} />
                  <Route path="/how-it-works" component={How} />
                  <Route component={Welcome} />
                </Switch>
              </div>
              <img  src={wave} alt="Logo" className="background-wave hide-print" height={window.innerHeight<750?'10px':null}
                // style={{position:'relative',top:'-14vh', zIndex:'1'}}
                />

            <Footer />
          </section>
        </div>
      </div>
      <SmallScreenBlocker/>
    </Router>
  );
};
