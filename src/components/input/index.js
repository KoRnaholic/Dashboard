import React from "react";

const Input = ({ inputData }) => {
  return (
    <>
      <p>Inputs go here</p>
      <h1>Inputs</h1>
      {inputData.map((input) => (
        <div
          key={input.id}
          style={
            input.id % 2 === 0
              ? { backgroundColor: "lightgray" }
              : { backgroundColor: "lightblue" }
          }
        >
          <label htmlFor={input.label}>{input.label}</label>
          {input.type === "textarea" ? (
            <textarea
              id={input.label}
              placeholder={input.placeholder}
              defaultValue={input.defaultValue}
              required={input.required}
            />
          ) : (
            <input
              type={input.type}
              id={input.label}
              placeholder={input.placeholder}
              defaultValue={input.defaultValue}
              required={input.required}
            />
          )}
        </div>
      ))}
    </>
  );
};

export default Input;
