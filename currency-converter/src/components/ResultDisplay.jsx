const ResultDisplay = ({ amount, base, target, converted }) => (
  <p className="text-center mt-6 text-xl font-semibold text-gray-700">
    {amount} <span className="text-purple-700">{base}</span> = 
    <span className="text-purple-900 font-bold mx-2">{converted.toFixed(2)} {target}</span>
  </p>
);

export default ResultDisplay;