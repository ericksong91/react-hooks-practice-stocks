import React from "react";

function Stock({ stock, onStock, which }) {
  const { id, ticker, name, type, price } = stock

  function handleClick() {

    const stockObj = {
      "id": id,
      "ticker": ticker,
      "name": name,
      "type": type,
      "price": price,
    }

    onStock(stockObj, which)
  }

  return (
    <div>
      <div className="card" onClick={handleClick}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
