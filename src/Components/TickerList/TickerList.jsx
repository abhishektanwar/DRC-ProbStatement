import React, { useEffect, useState } from 'react'
import axios from 'axios'

const TickerList = () => {
  const [tickerList,setTickerList] = useState([]);
  const getTickerList = async () => {
    const res = await axios.request({url:'https://api-pub.bitfinex.com/v2/tickers'.method:"GET",params:{symbols:"ALL"}})
    console.log("res",res.data);
    setTickerList(res.data)
  }
  useEffect(()=>{
    getTickerList();
  },[])
  return (
    <div>
      {tickerList && tickerList.map((ticker)=>{
        return (
          <h2>{ticker[0]}</h2> 
        )
      })}
    </div>
  )
}

export default TickerList

