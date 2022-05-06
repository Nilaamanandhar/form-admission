import React from "react";

export default function AcademicTable() {
  return (
    <div className="row">
      <div className="col-md-offset-1 col-md-11">
        <div className="form-group">
          <label htmlFor="previousacademic" className="col-sm-12 control-label">
            <span className="text-danger text-req">*</span>Previous Academic
            Performances
          </label>
          <div className="table-responsive">
            <table className="table table-bordered">
              <tr>
                <th>
                  <span className="text-danger text-req">*</span>Name of School
                </th>
                <th colSpan="6">
                  <input
                    type="text"
                    name="schoolname"
                    id="schoolname"
                    className="form-control"
                    placeholder="Name Of School"
                    autoFocus
                  />
                </th>
              </tr>
              <tr>
                <td rowSpan="3">Class IX Results</td>
                <td colSpan="2">First Term Exam</td>
                <td colSpan="2">Second Term Exam</td>
                <td colSpan="2">Final Examination</td>
              </tr>
              <tr>
                <td>GPA</td>
                <td>%</td>
                <td>GPA</td>
                <td>%</td>
                <td>GPA</td>
                <td>%</td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    name="ninefirstgpa"
                    id="ninefirstgpa"
                    className="form-control"
                    autoFocus
                  />
                </td>
                <td>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    name="ninefirstepercent"
                    id="ninefirstepercent"
                    className="form-control"
                    autoFocus
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="ninesecondgpa"
                    id="ninesecondgpa"
                    className="form-control"
                    autoFocus
                  />
                </td>
                <td>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    name="ninesecondpercent"
                    id="nicondpercent"
                    className="form-control"
                    autoFocus
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="ninefinalgpa"
                    id="ninefinalgpa"
                    className="form-col"
                    autoFocus
                  />
                </td>
                <td>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    name="ninefinalpercent"
                    id="ninalpercent"
                    className="form-control"
                    autoFocus
                  />
                </td>
              </tr>
              <tr>
                <td rowSpan="3">Class X Results </td>
                <td colSpan="2">First Term Exam </td>
                <td colSpan="2">Second Term Exam</td>
                <td colSpan="2">Send Up Examination</td>
              </tr>
              <tr>
                <td>GPA</td>
                <td>%</td>
                <td>GPA</td>
                <td>%</td>
                <td>GPA</td>
                <td>%</td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    name="tenfirstgpa"
                    id="tenfirstgpa"
                    className="form-control"
                    autoFocus
                  />
                </td>
                <td>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    name="tenfirstepercent"
                    id="tenfirstepercent"
                    className="form-control"
                    autoFocus
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="tensecondgpa"
                    id="tensecondgpa"
                    className="form-control"
                    autoFocus
                  />
                </td>
                <td>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    name="tensecondpercent"
                    id="tensecondpercent"
                    className="form-control"
                    autoFocus
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="tensendupgpa"
                    id="tensendupgpa"
                    className="form-control"
                    autoFocus
                  />
                </td>
                <td>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    name="tensenduppercent"
                    id="tensenduppercent"
                    className="form-control"
                    autoFocus
                  />
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
