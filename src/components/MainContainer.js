import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [filter, setFilter] = useState("Tech")

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((r) => r.json())
      .then((d) => setStocks(d))
  }, [])

  function handleFilter(e) {
    const filterType = e.target.value;
    console.log(filterType);
    setFilter(filterType);
  }

  function handleSort(e) {
    console.log(e.target.value);
    const sortType = e.target.value;

    const sortedStocks = () => {
      switch (sortType) {
        case "Alphabetically":
          return [...stocks].sort((a, b) => {
            if (a.name < b.name) {
              return -1
            } else {
              return 1
            }
          })
        case "Price":
          return [...stocks].sort((a, b) => {
            return a.price - b.price
          })
        default:
          return stocks
      }
    }
    setStocks(sortedStocks())
  }

  function handleStocks(stockItem, which) {
    const checkPortfolio = portfolio.filter((port) => {
      return port.name === stockItem.name
    })

    console.log("Checking Portfolio:", checkPortfolio)
    console.log("Which type?:", which)

    if (which === "stockContainer") {
      if (checkPortfolio.length > 0) {
        console.log("You already added this!")
        return
      } else {
        setPortfolio([...portfolio, stockItem])
      }
    } else {
      console.log("You sold your stock!")
      const adjustPortfolio = portfolio.filter((port) => {
        return port.name !== stockItem.name
      })

      console.log(adjustPortfolio)

      setPortfolio(adjustPortfolio)
    }
  }


  return (
    <div>
      <SearchBar onSort={handleSort} onFilter={handleFilter} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} filter={filter} onStock={handleStocks} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} onStock={handleStocks} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
