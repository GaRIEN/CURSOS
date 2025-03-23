import React from "react";

const Message = ({ message }) => {
  return (
    <div className="bg-red-600 text-white px-6 py-3 rounded-lg border border-red-800">
      <strong>⚠ Error:</strong> {message}
    </div>
  );
};

export default Message;
