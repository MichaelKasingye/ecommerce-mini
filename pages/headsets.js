import React from "react";
import Meta from "../components/Meta";
import Title from "../components/Title";

import ProductItem from "../components/ProductItem";
import home from "../styles/Home.module.css";

function headsets(props) {
  return (
    <div>
      <Meta title="product" />

      <Title title="Head sets" />
      <div className={home.cardsHome} id="products">
        <ProductItem />
      </div>
    </div>
  );
}

export default headsets;
