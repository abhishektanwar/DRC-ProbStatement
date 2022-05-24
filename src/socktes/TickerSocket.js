const initSocket = ({setSt,st}) => {
  const ws = new WebSocket("wss://api-pub.bitfinex.com/ws/2");

  const handleClose = () => {
    ws.send(
      JSON.stringify({
        event: "subscribe",
        channel: "ticker",
        symbol: "tBTCUSD",
      })
    );
  };
  let msg = JSON.stringify({
    event: "subscribe",
    channel: "ticker",
    symbol: "tBTCUSD",
  });

  ws.onopen = (event) => {
    ws.send(msg);
    console.log("on open", event);
  };
  ws.onclose = (event) => {
    console.log("CLOSED", event);
  };
  let timeStamp = 0;
  ws.onmessage = function (message) {
    const json = JSON.parse(message.data);
    
    try {
      if (json[1] !== "hb") {
        console.log("ws data", json);
        setSt(json[1])
      }
    } catch (err) {
      console.log(err);
    }
  };
  return {handleClose}
};

export {initSocket}