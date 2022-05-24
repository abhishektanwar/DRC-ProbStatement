const initSocket = ({setSt,tickerToSubscribe}) => {
  const ws = new WebSocket("wss://api-pub.bitfinex.com/ws/2");

  const handleSocketConnectionClose = () => {
    ws.send(
      JSON.stringify({
        event: "unsubscribe",
        channel: "ticker",
        symbol: tickerToSubscribe,
      })
    );
  };
  
  let msg = JSON.stringify({
    event: "subscribe",
    channel: "ticker",
    symbol: tickerToSubscribe,
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
  return {handleSocketConnectionClose,ws}
};

export {initSocket}