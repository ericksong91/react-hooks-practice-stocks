import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, filter, onStock }) {
  const which = "stockContainer";

  const filteredStocks = stocks.filter((stock) => {
    return stock.type === filter
  })

  const stockList = filteredStocks.map((stock) => {
    return <Stock key={stock.id} stock={stock} onStock={onStock} which={which} />
  })

  return (
    <div>
      <h2>Stocks</h2>
      {stockList}
    </div>
  );
}

export default StockContainer;
