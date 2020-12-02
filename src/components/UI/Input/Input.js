import React from "react";

import classes from "./Input.css"

const input = (props) => {
<<<<<<< HEAD
  let inputElement = null;
  const inputClasses = [classes.InputElement];

  if (props.invalid && props.shouldValidate && props.touched) {
      inputClasses.push(classes.Invalid);
  }
  
  let validationError = null;
  if (props.invalid && props.touched) {
    validationError = <p>Please enter a value into the field!</p>;
}

  switch (props.elementType) {
    case "input ":
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputElement = (
        <select className={inputClasses.join(" ")} 
        value={props.value}
        onChange={props.changed}>
          {props.elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>{option.displayValue}</option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }
=======
    let inputElement = null;

    switch (props.elementType) {
        case ( "input "):
            inputElement = <input 
            className={classes.InputElement} 
            {...props.elementConfig} 
            value={props.value} />;
            break;
        case ( "textarea" ):
            inputElement = <textarea 
            className={classes.InputElement} 
            {...props.elementConfig} 
            value={props.value} />;
            break;
        case ( "select" ):
            inputElement = (
                
            <select 
            className={classes.InputElement}
            value={props.value}>
            {props.elementConfig.options.map(option => (
                <option value={option.value}>
                    {option.displayValue}
                </option>
            ))}
            </select>
            );
            break;
        default:
            inputElement = <input 
            className={classes.InputElement} 
            {...props.elementConfig} 
            value={props.value}/>;
    }

    return (
>>>>>>> parent of 62f2d668... added logic for user's input to form elements

    <div className={classes.Input}>
<<<<<<< HEAD
      <label className={classes.label}>{props.label}</label>
      {inputElement}
      {validationError}
=======
        <label className={classes.label}>{props.label}</label>
        {inputElement}
>>>>>>> parent of 62f2d668... added logic for user's input to form elements
    </div>
    )
};

export default input;