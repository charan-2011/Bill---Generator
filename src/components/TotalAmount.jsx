import React from "react";

const TotalAmount = ({ total }) => (
  <div className="mt-4 text-lg font-bold text-right text-blue-700">
    Total Amount: ${total.toFixed(2)}
  </div>
);

export default TotalAmount;
