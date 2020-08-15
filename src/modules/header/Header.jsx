import React  from "react";
import {Link} from "react-router-dom";
import logo from "./logo_w.png";
import {Offline, Online} from "react-detect-offline";

export default function Header() {

  var userAgent = navigator.userAgent.toLowerCase();
  const electron = userAgent.indexOf(' electron/') > -1
  
  return (
    <div className="hero-head" style={{ color:'black', background:'white'}}>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <img src={logo} alt="Logo" className="hide-print" />
            </Link>
          </div>
          <div id="navbarMenuHeroB" className="navbar-menu">
            <div className="navbar-end">
              <Link to="/how-it-works" className="navbar-item">
                What is a paper wallet? 
              </Link>
              <span className="navbar-item">
                  <Offline>
                    <p className="has-text-success">
                      <strong>Offline</strong>
                    </p>
                  </Offline>
                  <Online>
                    {electron
                      ?
                      <p className="has-text-success">
                        <strong>Online</strong>
                      </p>
                      :
                      <a
                        href="https://github.com/tomyum-code/ArdorGifts/releases"
                        className="button is-info is-inverted"
                      >
                        <span>Download and use it offline</span>
                      </a>
                    }
                      </Online>
                </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
