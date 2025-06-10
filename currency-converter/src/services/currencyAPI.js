import axios from 'axios';

const BASE_URL = "https://v6.exchangerate-api.com/v6";
const API_KEY = import.meta.env.VITE_CURRENCY_API_KEY;

export const fetchRates = async (baseCurrency) => {
  const response = await axios.get(`${BASE_URL}/${API_KEY}/latest/${baseCurrency}`);
  return response.data.conversion_rates;
};