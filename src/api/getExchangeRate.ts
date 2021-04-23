//https://github.com/fawazahmed0/currency-api
import { store } from "@/store";
import { ActionType } from "@/types";

interface rateObject {
  [key: string]: number;
}

// Default: USD to RUB
const getExchangeRate = async (from = "usd", to = "rub"): Promise<void> => {
  try {
    const res = await fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}/${to}.json`
    );

    if (res.status !== 200) {
      console.log(
        `Can't fetch USD to RUB exchange rate. Status Code: ${res.status}. Using default.`
      );
    } else {
      res.json().then((rate: rateObject) => {
        store.dispatch(ActionType.setUsdToRub, rate[to]);
      });
    }
  } catch (err) {
    console.log("Can't fetch USD to RUB exchange rate. Using default.", err);
  }
};

export default getExchangeRate;
