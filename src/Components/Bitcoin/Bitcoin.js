import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Bitcoin() {
  const [coins, setCoins] = useState([]);
  const [exchanges, setExchanges] = useState([]);

  useEffect(() => {
    const loadCoins = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API}/coins`);
        setCoins(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    const loadExchanges = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API}/exchanges`
        );
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
      {/* {JSON.stringify(exchanges.data)} */}

      {/* {exchanges.map((ex, index) => {
        return <div key={index}>{ex.exchange_id}</div>;
      })}    */}
      {/* {JSON.stringify(coins)} */}
      <h1 style={{ textAlign: "center", margin: "30px" }}>100 Most Popular Coins</h1>
      <table style={{
        width: "100%",
        border: "1px solid black",
      }}>
        <thead>
          <tr>
            <th
              style={{
                padding: "15px",
                backgroundColor: "lightgray",
                border: "1px solid black",
                textAlign: "center",
              }}
            >
              Symbol
            </th>
            <th
              style={{
                padding: "15px",
                backgroundColor: "lightgray",
                border: "1px solid black",
                textAlign: "center",
              }}
            >
              Name
            </th>
            <th
              style={{
                padding: "15px",
                backgroundColor: "lightgray",
                border: "1px solid black",
                textAlign: "center",
              }}
            >
              Current Price USD
            </th>
            <th
              style={{
                padding: "15px",
                backgroundColor: "lightgray",
                border: "1px solid black",
                textAlign: "center",
              }}
            >
              Marcet Cap USD
            </th>
            <th
              style={{
                padding: "15px",
                backgroundColor: "lightgray",
                border: "1px solid black",
                textAlign: "center",
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
                    border: "1px solid black",
                    textAlign: "center",
                  }}
                >
                  <img src={c.image} alt="" width={50} />
                </td>
                <td
                  style={{
                    padding: "8px",
                    border: "1px solid black",
                    textAlign: "center",
                  }}
                >
                  {c.name}
                </td>
                <td
                style={{
                  padding: "8px",
                    border: "1px solid black",
                    textAlign: "center",
                  }}
                >$ {c.current_price.toFixed(2)}</td>
                <td
                  style={{
                    padding: "8px",
                    border: "1px solid black",
                    textAlign: "center",
                  }}>{c.market_cap.toFixed(2)}</td>
                <td
                  style={{
                    padding: "8px",
                    border: "1px solid black",
                    textAlign: "center",
                  }}>{c.market_cap_change_24h.toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
