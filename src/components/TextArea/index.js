import React from "react";

export const TextArea = ({
  label,
  type,
  icon,
  value,
  onChange,
  name,
  error,
}) => {
  return (
    <>
      <div className="bg-neutral-200 px-3 py-2 rounded-md">
        <div>
          <textarea
            placeholder={label}
            type={type}
            className="form-input h-10 bg-transparent placeholder:text-slate-700 placeholder:text-lg outline-none"
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
};
