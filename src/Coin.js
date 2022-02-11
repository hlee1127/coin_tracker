import React from "react";
import "./Coin.css";

function Coin({
  name,
  symbol,
  image,
  price,
  marketCap,
  priceChange,
  volume,
  circulatingSupply,
}) {
  return (
    <div className="coin__row">
      <div className="crypto__name">
        <img src={image} alt="crypto"></img>
        <p className="name">{name}</p>
        <p className="symbol">{symbol.toUpperCase()}</p>
      </div>
      <div className="crypto__price">
        <p className="price">${price}</p>
      </div>
      <div className="crypto__price__change">
        {priceChange < 0 ? (
          <p className="price__change_red">{priceChange}%</p>
        ) : (
          <p className="price__change_green">{priceChange}%</p>
        )}
      </div>
      <div className="crypto__market__cap">
        <p className="market__cap">${marketCap.toLocaleString()}</p>
      </div>
      <div className="crpyto__volume">
        <p className="volume">${volume.toLocaleString()}</p>
      </div>
      <div className="crypto__supply">
        <p className="supply">${circulatingSupply.toLocaleString()}</p>
      </div>
    </div>
  );
}

export default Coin;
