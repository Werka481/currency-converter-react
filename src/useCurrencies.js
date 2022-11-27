import { useState, useEffect } from "react";
import axios from "axios";

export const useCurrencies = () => {
    const [ratesData, setRatesData] = useState({
        date: null,
        rates: null,
        loading: "no",
    });

    useEffect(() => {
        const dataApi = async () => {
            try {
                const response = await axios.get("https://api.exchangerate.host/latest?base=PLN");
                setRatesData({
                    date: response.data.date,
                    rates: response.data.rates,
                    loading: "yes",
                });
            } catch (error) {
                setRatesData({
                    loading: "error"
                });
            };
        };
        setTimeout(dataApi, 2000);
    }, []);

    return ratesData;
};