import React from "react";

const Input = ({ labelName, type, inputName, placeholder, className , labelClassName}) => {
  return (
    <>
      <label className={labelClassName}>{labelName}</label>
      <input
        type={type}
        name={inputName}
        placeholder={placeholder}
        className={className}
      />
    </>
  );
};

export default Input;
