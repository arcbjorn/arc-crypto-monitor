import subsArray from "./subsHelper";

const apiKey =
  "35c7ef71c64f11a95f1b0ee0c58f6218af91236d8c30bd3133f9a30811dc00a3";

const openConnection = (): void => {
  const connection = new WebSocket(
    "wss://streamer.cryptocompare.com/v2?api_key=" + apiKey
  );

  connection.onopen = function (): void {
    console.log("Connected! :)");
    const subRequest = {
      action: "SubAdd",
      subs: subsArray ?? ["2~Coinbase~BTC~USD"],
    };
    connection.send(JSON.stringify(subRequest));
  };

  connection.onmessage = function (event: MessageEvent): void {
    const message = event.data;
    console.log("Received from Cryptocompare: " + message);
  };
};

export default openConnection;
