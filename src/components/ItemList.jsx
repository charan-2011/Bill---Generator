import React from "react";

const ItemList = ({ items, onDeleteItem }) => (
  <div className="mb-8">
    <h2 className="text-lg font-semibold mb-2">Items</h2>
    <div>
      {items.length === 0 && (
        <div className="text-gray-500">No items added yet.</div>
      )}
      {items.map((item, index) => (
        <div
          className="flex justify-between bg-gray-100 rounded px-4 py-2 mb-2 items-center"
          key={index}
        >
          <div>
            <span className="font-medium">{item.item}</span> — 
            <span className="ml-2">Qty: {item.quantity}</span> — 
            <span className="ml-2">Price: ${item.price}</span>
          </div>
          <button
            className="text-red-600 hover:text-red-800 font-semibold"
            onClick={() => onDeleteItem(index)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default ItemList;
