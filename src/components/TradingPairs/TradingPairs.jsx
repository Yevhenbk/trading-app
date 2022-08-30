import React, { useEffect, useState } from 'react';
import GJNumberLabel from '../GJNumberLabel/GJNumberLabel';
import GJNumbersView from '../GJNumbersView/GJNumbersView';
import "./TradingPairs.scss";


function TradingPairs() {

  const [data, setData] = useState([]);
  const [display, setDisplay] = useState(false);
  const [displayData, setDisplayData] = useState([]);
  const [currencyPair, setCurrencyPair] = useState([]);
  
  useEffect(() => {
    getData()
  })

  async function getData() {
    try {
      const response = await fetch('https://www.bitstamp.net/api/v2/trading-pairs-info/', {
        method: 'GET',
        headers: {
          accept: 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
  
      const result = await response.json();
      return setData(result);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getCleanData();
  })
  const BASE_URL = `https://www.bitstamp.net/api/v2/ticker/${currencyPair}`
  async function getCleanData() {
    try {
      const response = await fetch(BASE_URL, {
        method: 'GET',
        headers: {
          accept: 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
  
      const result = await response.json();
      return setDisplayData(result);
    } catch (err) {
      console.log(err);
    }
  }


  return (
    <div className='pairs__holder'>
    <div className="pairs__container">{data.map((pair, index) => {
        return (
            <GJNumberLabel key={index} onClick={() => {
                setCurrencyPair(pair.url_symbol);
                setDisplay(true)
                }}>
                <GJNumbersView number={pair.url_symbol} />
            </GJNumberLabel>
        )
    })}</div>
    {display ? 
        <div className="displayed__data">
            <p>{JSON.stringify(displayData, null, 2)}</p>
        </div> 
    : <div className="displayed__data">
        <p>*Choose the trading pair from above to generate the values</p>
      </div>}
    </div>
  )
}

export default TradingPairs