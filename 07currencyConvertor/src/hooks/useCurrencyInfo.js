import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  // custom hook
  const [data, setData] = useState({}); // passing empty object to prevent error
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`,
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency])); // to access required key only
    //console.log(data);
  }, [currency]);
  console.log(typeof data);
  return data; // data return like hooks
  // if currency is changed call
}
export default useCurrencyInfo; // method return like hooks
