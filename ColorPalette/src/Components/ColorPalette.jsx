import React, { useState } from "react";

const generateRandomColor = () => {
  // Generate a random hex color
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0");
};

const ColorPalette = () => {
  const [colors, setColors] = useState(
    Array.from({ length: 5 }, generateRandomColor)
  );
  const [copiedIndex, setCopiedIndex] = useState(null);

  const generateNewPalette = () => {
    setColors(Array.from({ length: 5 }, generateRandomColor));
    setCopiedIndex(null);
  };

  const copyToClipboard = (color, index) => {
    navigator.clipboard.writeText(color).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 1500);
    });
  };

  return (
    <div className="w-full max-w-xl">
      <div className="flex space-x-4 mb-6">
        {colors.map((color, index) => (
          <div
            key={index}
            className="flex-1 cursor-pointer rounded-md shadow-md flex flex-col items-center justify-center"
            style={{ backgroundColor: color, height: "120px" }}
            onClick={() => copyToClipboard(color, index)}
            title="Click to copy color"
          >
            <p
              className={`mt-2 text-white font-mono text-lg select-none ${
                copiedIndex === index ? "text-yellow-300" : "text-white"
              }`}
              style={{ textShadow: "0 0 4px rgba(0,0,0,0.7)" }}
            >
              {copiedIndex === index ? "Copied!" : color.toUpperCase()}
            </p>
          </div>
        ))}
      </div>
      <button
        onClick={generateNewPalette}
        className="bg-blue-400 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-md shadow-md transition"
      >
        Generate New Palette
      </button>
    </div>
  );
};

export default ColorPalette;
