const CurrencySelector = ({ currency, currencies, onChange }) => (
  <select
    value={currency}
    onChange={(e) => onChange(e.target.value)}
    className="border-2 border-purple-300 rounded-xl px-3 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
  >
    {currencies.map((cur) => (
      <option key={cur} value={cur}>
        {cur}
      </option>
    ))}
  </select>
);

export default CurrencySelector; 