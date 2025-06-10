import { useEffect, useState } from 'react';
import CurrencyInput from './components/CurrencyInput';
import CurrencySelector from './components/CurrencySelector';
import ResultDisplay from './components/ResultDisplay';
import { fetchRates } from './services/currencyAPI';

const App = () => {
  const [amount, setAmount] = useState(1);
  const [base, setBase] = useState('USD');
  const [target, setTarget] = useState('EUR');
  const [currencies, setCurrencies] = useState([]);
  const [rate, setRate] = useState(1);

  useEffect(() => {
    const loadRates = async () => {
      try {
        const rates = await fetchRates(base);
        setCurrencies(Object.keys(rates));
        setRate(rates[target]);
      } catch (err) {
        alert('Failed to load exchange rates');
        console.error(err);
      }
    };
    loadRates();
  }, [base, target]);

  const converted = amount * rate;

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-200 via-purple-100 to-pink-200 flex flex-col justify-center items-center px-4">
      <div className="bg-white shadow-xl rounded-3xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-purple-700">Currency Converter</h1>

        <CurrencyInput amount={amount} onAmountChange={setAmount} />

        <div className="flex items-center justify-center gap-4 my-4">
          <CurrencySelector currency={base} currencies={currencies} onChange={setBase} />
          <span className="text-lg font-semibold text-gray-600">to</span>
          <CurrencySelector currency={target} currencies={currencies} onChange={setTarget} />
        </div>

        <ResultDisplay amount={amount} base={base} target={target} converted={converted} />
      </div>
    </div>
  );
};

export default App;
