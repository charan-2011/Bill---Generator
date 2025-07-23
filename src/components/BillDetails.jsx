import React, { useState } from "react";

const BillDetails = ({ onAddItem }) => {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const handleAdd = () => {
    if (!item.trim()) {
      setErrorMessage("Please input data in the Item section.");
      return;
    }
    if (!/^[a-zA-Z]+$/.test(item)) {
      setErrorMessage("Item should only contain alphabetical characters.");
      return;
    }
    onAddItem({ item, quantity, price });
    setItem("");
    setQuantity(1);
    setPrice(0);
    setErrorMessage("");
  };

  return (
    <div className="mb-8">
      <div className="mb-3">
        <label className="block mb-1 font-medium text-gray-700">Item Name</label>
        <input
          className="w-full border border-gray-300 rounded p-2 focus:ring focus:ring-blue-300"
          type="text"
          value={item}
          onChange={e => setItem(e.target.value)}
          placeholder="Item"
        />
      </div>
      <div className="mb-3 flex space-x-4">
        <div className="flex-1">
          <label className="block mb-1 font-medium text-gray-700">Quantity</label>
          <input
            className="w-full border border-gray-300 rounded p-2 focus:ring focus:ring-blue-300"
            type="number"
            min="1"
            value={quantity}
            onChange={e => setQuantity(Number(e.target.value))}
          />
        </div>
        <div className="flex-1">
          <label className="block mb-1 font-medium text-gray-700">Price</label>
          <input
            className="w-full border border-gray-300 rounded p-2 focus:ring focus:ring-blue-300"
            type="number"
            min="0"
            value={price}
            onChange={e => setPrice(Number(e.target.value))}
          />
        </div>
      </div>
      {errorMessage && (
        <div className="text-red-600 text-sm mb-2">{errorMessage}</div>
      )}
      <button
        className="mt-2 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition"
        onClick={handleAdd}
      >
        Add Item
      </button>
    </div>
  );
};

export default BillDetails;
