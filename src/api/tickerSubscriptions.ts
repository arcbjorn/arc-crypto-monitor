import { subsArray } from "./subs.helpers";

const apiKey =
  "35c7ef71c64f11a95f1b0ee0c58f6218af91236d8c30bd3133f9a30811dc00a3";

export const openConnection = (): WebSocket => {
  try {
    const connection = new WebSocket(
      "wss://streamer.cryptocompare.com/v2?api_key=" + apiKey
    );

    connection.onopen = function (): void {
      console.log("Successfully connected to the CryptoCompare server...");
      const subRequest = {
        action: "SubAdd",
        subs: subsArray ?? ["2~Coinbase~BTC~USD"],
      };
      connection.send(JSON.stringify(subRequest));
    };

    return connection;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const closeConnection = (ws: WebSocket): boolean => {
  try {
    ws.close();
    console.log("Successfully closed connection to the CryptoCompare.");

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const unsubscribeFromAllTickers = (ws: WebSocket): boolean => {
  try {
    const subRequest = {
      action: "SubRemove",
      subs: subsArray ?? ["2~Coinbase~BTC~USD"],
    };
    ws.send(JSON.stringify(subRequest));

    console.log(
      "Successfully unsubscribed from all tickers on CryptoCompare server."
    );

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default openConnection;
