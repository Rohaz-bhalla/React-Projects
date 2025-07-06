import { useEffect, useState } from "react";

function useCurrencyInfo() {
  const [data, setData] = useState(null); // ✅ Starts as NULL to track loading state

  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/EUR") // ✅ Using EUR as base
      .then((res) => res.json())
      .then((res) => {
        console.log("Fetched Currency Data:", res.rates); // ✅ Debug API response
        setData(res.rates); // ✅ Store rates directly
      })
      .catch((error) => console.error("API Fetch Error:", error));
  }, []);

  return data; // ✅ Now returns `null` initially and then currency data
}

export default useCurrencyInfo;
