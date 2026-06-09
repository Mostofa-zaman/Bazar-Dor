import React from "react";
import Bredcrumb from "../components/common/Bredcrumb";
import MarketLocationForm from "../components/marketPrice/marketLocationForm/Index";
import FilterPanel from "../components/marketPrice/filterPanel/Index";
const MarketPrice = () => {
  return (
    <>
      <Bredcrumb />
      <MarketLocationFrom />
      <FilterPanel />
    </>
  );
};

export default MarketPrice;
