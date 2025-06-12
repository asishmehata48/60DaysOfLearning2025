import React from "react";
import ColorPalette from "./Components/ColorPalette";

const App = () => (
  <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-8 font-sans text-gray-800">
    <h1 className="text-3xl font-semibold mb-8">Color Palette Generator</h1>
    <ColorPalette />
  </div>
);

export default App;
