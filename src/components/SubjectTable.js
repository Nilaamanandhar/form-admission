import React, { useState } from "react";

export default function SubjectTable() {
  var cols = ["Groups/Subjects", "1", "2", "3", "4", "5", "6"];

  var rows = [
    ["A", "EGP", "Maths", "Physics", "Chemistry", "Computers", ""],
    ["B", "EGP", "Maths", "Physics", "Chemistry", "Biology", ""],
    ["C", "EGP", "Maths", "Physics", "Chemistry", "	F. Maths", ""],
    ["D1", "EGP", "Maths", "Accounting", "Chemistry", "	Biology/Computer", ""],
    ["D2", "EGP", "Maths", "Physics", "Business", "	Biology/Computer", ""],
    ["D3", "EGP", "Maths", "Physics", "Chemistry", "Economics", ""],
    ["E", "EGP", "Maths", "Accounting", "Business", "Economics", "Computers"],
    ["F", "EGP", "Maths", "Psychology", "Business", "Sociology", ""],
  ];

  const [headItem, setHeadItem] = useState(cols);
  const [bodyItem, setBodyItem] = useState(rows);

  const head = () => {
    return (
      <tr>
        {headItem.map((item, index) => {
          return <th key={index}>{item}</th>;
        })}
      </tr>
    );
  };
  const tableBody = () => {
    return bodyItem.map((item, index) => {
      return (
        <tr key={index}>
          {item.map((innerItem, index) => {
            return <td key={index}>{innerItem}</td>;
          })}
        </tr>
      );
    });
  };
  return (
    <div className="table-responsive">
      <div className="col-md-offset-1 col-md-11">
        <span className="help-block">
          (English General Paper and Maths are compulsory for all students in
          the first year. All students take 5 subjects in the first year.)
        </span>
      </div>

      <table className="table table-responsive table-bordered subject">
        <thead>{head()}</thead>
        <tbody>{tableBody()}</tbody>
      </table>
    </div>
  );
}
