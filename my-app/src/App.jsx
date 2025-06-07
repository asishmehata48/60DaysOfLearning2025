import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('olive');
  const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'black', 'orange'];

  return (
    <div className="app" style={{ backgroundColor: color }}>
      <div className="buttons">
        {colors.map((color) => (
          <button
          key={color}
          onClick={() => setColor(color)}
          style={{backgroundColor: color }}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
