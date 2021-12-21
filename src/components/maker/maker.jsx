import React from "react";
import Cards from "../cards/cards";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";

const Maker = (props) => (
  <>
    <Header />
    <section>
      <Cards />
      <Preview />
    </section>
    <Footer />
  </>
);

export default Maker;
