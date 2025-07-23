import React, { useState } from "react";
import BillDetails from "./components/BillDetails";
import ItemList from "./components/ItemList";
import TotalAmount from "./components/TotalAmount";
import { jsPDF } from "jspdf";

function App() {
  const [items, setItems] = useState([]);
  const handleAddItem = (item) => setItems([...items, item]);
  const handleDeleteItem = (index) => {
    const updated = [...items];
    updated.splice(index, 1);
    setItems(updated);
  };
  const calculateTotalAmount = () =>
    items.reduce((total, item) => total + item.quantity * item.price, 0);

  const handleDownloadPDF = () => {
    const pdf = new jsPDF();
    pdf.text("Invoice", 20, 20);
    items.forEach((item, index) => {
      const yPos = 30 + index * 10;
      pdf.text(
        `Item: ${item.item}, Quantity: ${item.quantity}, Price: ${item.price}`,
        20,
        yPos
      );
    });
    const totalAmount = calculateTotalAmount();
    pdf.text(`Total Amount: $${totalAmount.toFixed(2)}`, 20, 180);
    pdf.save("invoice.pdf");
  };

  return (

    <>
        <div className="max-w-lg mx-auto bg-white mt-10 p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Bill Generator</h1>
        <BillDetails onAddItem={handleAddItem} />
        <ItemList items={items} onDeleteItem={handleDeleteItem} />
        <TotalAmount total={calculateTotalAmount()} />
        <button
          className="mt-6 w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-800 transition"
          onClick={handleDownloadPDF}
        >
          Download PDF
        </button>
        </div>
     
    </>
    
  );
}

export default App;
