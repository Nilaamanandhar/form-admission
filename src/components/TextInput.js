import React from "react";
import { useField, ErrorMessage } from "formik";
import { LabelText } from "./Text";
export const TextField = ({ ...props }) => {
  const [field, meta] = useField(props);
  // console.log("field",field)
  return (
    <div>
      {props.title && <LabelText title={props.title} />}

      <input
        {...props}
        type={props.type}
        id={props.name}
        autoComplete={props.autoComplete}
        name={props.name}
        placeholder={props.placeholder}
        className={`form-control ${meta.error && "is-invalid"}`}
        // className="form-control"
        {...field}
      />
      {meta.error && (
        <div name={field.name} style={{ color: "red", fontSize: "12px" }}>
          {meta.error}
        </div>
      )}
      {/* <ErrorMessage
        component="div"
        name={field.name}
        style={{ color: "red", fontSize: "12px" }}

      /> */}
    </div>
  );
};
