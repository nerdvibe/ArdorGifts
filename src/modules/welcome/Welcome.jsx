import React, { useLayoutEffect, useState } from 'react';
import {Link} from "react-router-dom";
import wallet from "./wallet.svg";

export default function Welcome() {
    function useWindowSize() {
      const [size, setSize] = useState([0, 0]);
      useLayoutEffect(() => {
        function updateSize() {
          setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
      }, []);
      return size;
    }
    let width=useWindowSize()[0]
    
  return (
      <div className="container has-text-centered landing fade-in">
          <div className="columns is-mobile is-centered">
            <div className="column is-one-third" style={{marginTop:'6vh'}}>
              <div className="columns">
                <div className="column left-title ">
                    Ardor's Paper Wallet
                </div>
              </div>
              <div className="columns has-text-centered">
                <div className="column left-description">
                    Generate beautiful looking wallets in few seconds. Perfect for gifts or for safely storing your ARDR.
                </div>
              </div>
            </div>
            <div className="column is-one-third">
              <img width='370px' src={wallet} alt="Logo" className="hide-print" />
            </div>
          </div>

          <div className="columns is-centered" style={{marginTop:'5%'}}>
            <div className={"column " +(width<1408?"is-four-fifths":"is-three-fifths ")}>
              <div className="columns ">
                <div className="column big-button">
                <Link to="/start">
                  <div className="columns is-vcentered" style={{padding: '20px',paddingTop:(width>1215&&width<1408)?'50px':'20px',}}>
                    <div className="column is-one-fifths">
                      <i className="fa fa-wallet" style={{fontSize:'75px', marginLeft:'-10px'}}></i>
                    </div>
                    <div className="column is-four-fifths">
                      <div className="button-title-left">
                        Generate new wallet
                      </div>
                      <div className="button-description-left">
                        Create a brand new wallet
                      </div>
                    </div>
                  </div>
                  </Link>
                </div>
                <div className="column big-button-blue" style={{marginLeft:'30px'}}>
                <Link to="/create-wallet?blueprint=true">
                  <div className="columns is-vcentered" style={{padding: '20px',paddingTop:width<1408?'50px':'20px', height:width<1408?'100%':null}}>
                    <div className="column is-one-fifths">
                      <i className="fa fa-map"  style={{fontSize:'75px', marginLeft:'-10px'}}></i>
                    </div>
                    <div className="column is-four-fifths">
                      <div className="button-title-left">
                        Get the blueprint
                      </div>
                      <div className="button-description-left">
                        Get just the base
                      </div>
                    </div>
                  </div>
                  </Link>
                </div>
              </div >
            </div>
          </div>
      </div>
  );
}

