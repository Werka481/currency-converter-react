import { useState } from "react";

const [currencies, setCurrencies] = useState([
    { id: 1, name: "EUR", rate: 4.86 },
    { id: 2, name: "USD", rate: 4.95 },
    { id: 3, name: "GBP", rate: 5.52 },
]);

export default Currency;