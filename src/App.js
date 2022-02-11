import React, { useState, useEffect } from "react";
import axios from "axios";
import "./img.jpeg";
import "./Header.css";
import Header from "./Header";
import "./App.css";
import Coin from "./Coin";
import Search from "./search.png";

function App() {
  const [cryptos, setCrypto] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCrypto(res.data);
      })
      .catch(() => alert("There is an error"));
  }, []);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredCryptos = cryptos.filter((crypto) =>
    crypto.name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div className="App">
      {/* Header */}
      <div className="app__header">
        <Header />
      </div>
      <div className="app__body">
        {/* Search */}
        <div className="app__search">
          <form>
            <input
              placeholder="Search your favorite coin!"
              type="text"
              onChange={handleChange}
            />
            <div className="icons">
              <div>
                <img src={Search}></img>
              </div>
            </div>
          </form>
        </div>
        <div className="title__row">
          <p className="title__name">Name</p>
          <p className="title__price">Price</p>
          <p className="title__price__change">24h % Change</p>
          <p className="title__market__cap">Market Cap</p>
          <p className="title__volume">Total Volume</p>
          <p className="title__supply">Circulating Supply</p>
        </div>
        <div className="coin__container">
          {filteredCryptos.map((crypto) => (
            <Coin
              key={crypto.id}
              name={crypto.name}
              symbol={crypto.symbol}
              image={crypto.image}
              price={crypto.current_price}
              marketCap={crypto.market_cap}
              priceChange={crypto.price_change_percentage_24h}
              volume={crypto.total_volume}
              circulatingSupply={crypto.circulating_supply}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
