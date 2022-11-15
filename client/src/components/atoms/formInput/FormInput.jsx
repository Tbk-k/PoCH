import React from "react";

const FormInput = ({ ...props }) => {
  const { label, onChange, value, ...others } = props;
  return (
    <>
      <label htmlFor={others.name}>{label}</label>
      <input {...props} onChange={onChange} value={value} />
    </>
  );
};

export default FormInput;
