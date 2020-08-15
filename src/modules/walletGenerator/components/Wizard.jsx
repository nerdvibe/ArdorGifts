import React, { useLayoutEffect, useState } from 'react';
import { Link } from "react-router-dom";
import AnimationsWrapper from "../../animationWrapper/AnimationWrapper";

export default function Wizard() {
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
  const smallScreen = width<1215
  return (
    <div className="container has-text-centered fade-in">
      <span className="custom-title">
        Great! <br/>
        Do you want a new wallet?
      </span>

      <div className="columns is-centered" style={{marginTop:'5%'}}>
        <div className="column is-four-fifths ">
          <div className="columns ">
            <div className="column big-button">
            <Link to="/create-wallet">
              <div className="columns is-vcentered" style={{padding: '20px',height:smallScreen?'100%':null, paddingTop:smallScreen?'50px':'20px'}}>
                <div className="column is-one-quarter">
                  <i className="fa fa-wallet" style={{fontSize:'75px'}}></i>
                </div>
                <div className="column is-three-quarter">
                  <div className="button-title-left">
                    Create new 
                  </div>
                  <div className="button-description-left">
                    Get a brand new account
                  </div>
                </div>
              </div>
              </Link>
            </div>
            <div className="column big-button" style={{marginLeft:'30px'}}>
            <Link to="/create-wallet?created=true">
              <div className="columns is-vcentered" style={{padding: '20px'}}>
                <div className="column is-one-quarter">
                  <i className="fa fa-lock" style={{fontSize:'75px'}}></i>
                </div>
                <div className="column is-three-quarter">
                  <div className="button-title-left">
                    Existing passphrase 
                  </div>
                  <div className="button-description-left">
                    Create a paper wallet with pre-made credentials
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
