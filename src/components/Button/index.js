import React from "react";

export const Button = ({ label, type }) => {
  return (
    <div>
      <button
        type={type}
        className="submit-btn bg-slate-700 text-neutral-200 px-6 py-2 rounded-md mt-3"
      >
        {label}
      </button>
    </div>
  );
};
