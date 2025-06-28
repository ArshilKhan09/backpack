import React, { useState } from 'react';
import './App.css';

function BackpackItem({ item, togglePacked }) {
  return (
    <li
      className={item.packed ? 'packed' : ''}
      onClick={() => togglePacked(item.id)}
    >
      {item.name} {item.packed ? '✔️' : '❌'}
    </li>
  );
}

function App() {
  const [items, setItems] = useState([
    { id: 1, name: 'Toothbrush', packed: true },
    { id: 2, name: 'Passport', packed: false },
    { id: 3, name: 'T-shirt', packed: true },
  ]);

  const [newItem, setNewItem] = useState('');

  const togglePacked = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const addItem = (e) => {
    e.preventDefault();
    if (!newItem.trim()) return;
    const newItemObj = {
      id: Date.now(),
      name: newItem,
      packed: false,
    };
    setItems([...items, newItemObj]);
    setNewItem('');
  };

  return (
    <div className="App">
      <h1>🎒 My Travel Backpack</h1>
      <form onSubmit={addItem}>
        <input
          type="text"
          placeholder="Add item..."
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {items.map((item) => (
          <BackpackItem
            key={item.id}
            item={item}
            togglePacked={togglePacked}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
