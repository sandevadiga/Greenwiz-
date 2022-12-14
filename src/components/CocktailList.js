import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { loading, cocktail } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }

  if (!cocktail) {
    return <h2 class="section-title">Nothing matched</h2>;
  }

  return (
    <section className="section">
      <h2 className="section-title">Cocktails</h2>
      <div className="cocktails-center">
        {cocktail.map((item, index) => {
          return <Cocktail key={index} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
