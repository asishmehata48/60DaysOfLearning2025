import { useState } from 'react';

export default function Example() {
  const [items, setItems] = useState([]);

  // Adding an item
  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  // Removing an item
  const removeItem = (indexToRemove) => {
    setItems(items.filter((_, index) => index !== indexToRemove));
  };

  // Updating an item
  const updateItem = (indexToUpdate, newValue) => {
    setItems(items.map((item, index) =>
      index === indexToUpdate ? newValue : item
    ));
  };

  return (
    <div>
      <button onClick={() => addItem('New item')}>Add Item</button>
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            {item} <button onClick={() => removeItem(i)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
