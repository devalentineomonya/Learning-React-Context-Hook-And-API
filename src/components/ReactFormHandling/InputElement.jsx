import React, { useState } from "react";

const inputElement = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const { label, onChange, id, errorText, ...inputProps } = props;
  const handleFocus = (e) => {
    setIsFocused(true);
  };
  return (
    <div className="form-element">
      <label htmlFor="username">{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={()=>inputProps.name === "confirmPassword"  && setIsFocused(true)}
       
        focused={isFocused.toString()}
      />
      <span>{errorText}</span>
    </div>
  );
};

export default inputElement;
