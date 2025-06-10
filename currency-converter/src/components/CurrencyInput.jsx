
const CurrencyInput = ({ amount, onAmountChange }) => (
  <input
    type="number"
    value={amount}
    onChange={(e) => onAmountChange(e.target.value)}
    placeholder="Enter amount"
    className="w-full border-2 border-purple-300 rounded-xl px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
  />
);

export default CurrencyInput;