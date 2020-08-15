import React  from "react";

export default function Footer() {
  return (
    <nav className="is-fullwidth has-text-centered">
      <div style={{height:'50px'}}></div>
      <div className="container" >
        <p className="footer-text">
          Built with <i className="fa fa-heart" /> by{" "}
          Tom Yum & friends. Proudly running on Ardor.
        </p>
      </div>
    </nav>
  );
}
