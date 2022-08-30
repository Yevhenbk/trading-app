import React, { useState, useEffect } from 'react';
import './TickerValue.scss';


function TickerValue() {
    
    const [dataOne, setDataOne] = useState([]);
    const [dataTwo, setDataTwo] = useState([]);
    const [dataThree, setDataThree] = useState([]);
    const [switchVisual, setSwitchVisual] = useState(false);
    const averageTickerValue = (dataOne + dataTwo + dataThree) / 3;


    const getDataOne = () => {
      fetch('dataOne.json',
      {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setDataOne(parseInt(myJson.open));
      });
    }

    const getDataTwo = () => {
      fetch('dataTwo.json',
      {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setDataTwo(parseInt(myJson.data.rates.USD));
      });
    }

    const getDataThree = () => {
      fetch('dataThree.json',
      {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setDataThree(myJson[0][1]);
      });
    }
    
    useEffect(() => {
      getDataOne();
      getDataTwo();
      getDataThree();
    }, [])


    return (
        <div className="tickerv__holder">
            <button className="tickerv__button" onClick={() => setSwitchVisual(!switchVisual) }>
              {
                !switchVisual ? <span className="generator">Generate Average Ticker Value</span>
                :
                <p className="average__value">
                  {switchVisual ? <span>{averageTickerValue}</span> : false}
                </p>
              }
            </button>
        </div>
  )
}

export default TickerValue