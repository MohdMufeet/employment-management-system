import React from "react";

const Input = ({ labelName, type, inputName, placeholder, className }) => {
  return (
    <>
      <label>{labelName}</label>
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
