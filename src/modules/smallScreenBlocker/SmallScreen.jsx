import React  from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

export default function SmallScreenBlocker() {
  return (
    <div className="small-screen hide-print">
      <section
        className="hero is-info is-fullheight"
      >
        <Header />

        <div className="hero-body">
          <div className="container has-text-centered">
            <h1>In order to use Ardor.Gifts, please increase the width of this window to at least 1024px...</h1>

          </div>
        </div>

        <Footer />
      </section>
    </div>
  );
}
