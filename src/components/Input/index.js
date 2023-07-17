import React from "react";

export function Input({ label, type, icon, value, onChange, name, error }) {
  return (
    <>
      <div className="bg-neutral-200 px-3 py-2 rounded-md flex items-center">
        <div className="pr-3">
          <img src={icon} />
        </div>

        <div>
          <input
            placeholder={label}
            type={type}
            className="form-input  bg-transparent placeholder:text-slate-700 outline-none"
            value={value}
            onChange={onChange}
            name={name}
          />
        </div>
      </div>
      {error && (
        <div className="text-rose-600 text-center pt-3 font-medium">
          {error}
        </div>
      )}
    </>
  );
}
