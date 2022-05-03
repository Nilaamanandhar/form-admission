import React from "react";
import { LabelText } from "./Text";
export const TextField = (props) => {

  return (
    <div>
        {props.title &&  <LabelText title={props.title}/>}

        <input
        {...props}
          type={props.type}
          id={props.name}
          autocomplete={props.autocomplete}
          name={props.name}
          placeholder={props.placeholder}
          className="form-control"
          required
        />
    </div>
  );
};

