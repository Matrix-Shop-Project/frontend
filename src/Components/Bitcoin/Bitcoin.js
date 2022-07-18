import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Bitcoin() {
  const [coins, setCoins] = useState([]);
  const [exchanges, setExchanges] = useState([]);

  // const loadCoins = async () =>
  //   await axios
  //     .get("http://localhost:4000/coins")
  //     .then(function (response) {
  //       // handle success
  //       console.log("Response coins", response);
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     })
  //     .then(function () {
  //       setCoins();
  //     });

  useEffect(() => {
    const loadCoins = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/coins`);
        setCoins(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    const loadExchanges = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/exchanges`);
        setExchanges(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    
    loadCoins();
    loadExchanges();
  }, []);
  
  return (
    <div style={{ width: "80%", margin: "auto" }}>
      {/* ,
      {exchanges.map((ex, index) => {
        return <div key={index}>{ex.exchange_id}</div>;
      })} */}
      {/* {JSON.stringify(coins)} */}
      <h1 style={{ textAlign: "center" }}>100 Most Popular Coins</h1>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th
              style={{
                padding: "15px",
                backgroundColor: "lightgray",
              }}
            >
              Name
            </th>
            <th
              style={{
                padding: "15px",
                backgroundColor: "lightgray",
              }}
            >
              Marcet Cap USD
            </th>
            <th
              style={{
                padding: "15px",
                backgroundColor: "lightgray",
              }}
            >
              Volume 24 H
            </th>
          </tr>
        </thead>
        <tbody>
          {coins.map((c, index) => {
            return (
              <tr key={index}>
                <td
                  style={{
                    padding: "8px",
                    "&:hover": {
                      backgroundColor: "lightgray",
                    },
                  }}
                >
                  {c.symbol}-{c.name}
                </td>
                <td>{c.marketCapUsd}</td>
                <td>{c.volumeUsd24Hr}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
