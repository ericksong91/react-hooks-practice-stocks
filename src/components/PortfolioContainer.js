import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, onStock }) {
  
  const which = "portfolioContainer"

  const portfolioList = portfolio.map((port)=>{
    return <Stock key={port.id} stock={port} which={which} onStock={onStock} />
  })

  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioList}
    </div>
  );
}

export default PortfolioContainer;
