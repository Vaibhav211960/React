import { useEffect, useState } from "react";

const useCurrencyInfo = (curr) => {
  const [currency, setCurrency] = useState({});
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      const apiKey = 'fca_live_1BZkxR3MgDTTUfyzyy39HxlFUspXINsoc1GzFB9d'
      try {
        const res = await fetch(
          `https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}`
        )
        const data = await res.json()
        setCurrency(data);
        console.log(data);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchRates();
  }, [curr]);

  return {currency}
};

export default useCurrencyInfo;
