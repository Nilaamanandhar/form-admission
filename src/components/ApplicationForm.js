import React, { useEffect, useState } from "react";
import { TextField } from "./TextInput";
import { Formik, Form, Field } from "formik";
import { AdmissionValidation } from "../validation/AdmissionValidation";
import SubjectTable from "./SubjectTable";
import AcademicTable from "./AcademicTable";

export default function ApplicationForm() {
  const [isCheckedD1, setIsCheckedD1] = useState(false);
  const [isCheckedD2, setIsCheckedD2] = useState(false);
  const [isCheckedE, setIsCheckedE] = useState(false);

  // const [firstName, setFirstName] = useState("");
  // const [middleName, setMiddleName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [engDateBirth, setEngDateBirth] = useState("");
  // const [nepDateBirth, setNepDateBirth] = useState("");

  // const [religion, setReligion] = useState("");
  // const [bloodGroup, setBloodGroup] = useState("");
  // const [studentNumber, setStudentNumber] = useState("");
  // const [placeOfBirth, setPlaceOfBirth] = useState("");
  // const [nationality, setNationality] = useState("");
  // const [fatherName, setFatherName] = useState("");
  // const [fatherOccupation, setFatherOccupation] = useState("");
  // const [fatherNumber, setFatherNumber] = useState("");
  // const [motherName, setMotherName] = useState("");
  // const [motherNumber, setMotherNumber] = useState("");
  // const [motherOccupation, setMotherOccupation] = useState("");
  // const [permanentCity, setPermanentCity] = useState("");
  // const [permanentCountry, setPermanentCountry] = useState("");
  // const [localCity, setLocalCity] = useState("");
  // const [localCountry, setLocalCountry] = useState("");
  // const [studentEmail, setStudentEmail] = useState("");
  // const [familyPhoneNumber, setFamilyPhoneNumber] = useState("");
  // const [localPhoneNumber, setLocalPhoneNumber] = useState("");

  const religionList = [
    "Hinduism",
    "Budhism",
    "Islam",
    "Christianity",
    "Kirat",
    "Others",
  ];
  const ethnicGroupList = [
    "Brahmin/chhetri",
    "Indigenous",
    "Madhesi",
    "Dalit",
    "Others",
  ];
  let initialValues = {
    firstName: "",
    middleName: "",
    lastName: "",
    engDateBirth: "",
    nepDateBirth: "",
    religion: "",
    bloodGroup: "",
    studentNumber: "",
    nationality: "",
    ethnicGroup: "",
    fatherName: "",
    fatherOccupation: "",
    gender: "",
    studentEmail: "",
  };
  const handleSubmit = (e) => {
    console.log("e", e);

    let isTickedGroup = document.getElementById("ARadio").checked;
    console.log("ticked", isTickedGroup);
  };
  useEffect(() => {
    setIsCheckedD1(document.getElementById("DRadio").checked);
    setIsCheckedD2(document.getElementById("ERadio").checked);
    setIsCheckedE(document.getElementById("GRadio").checked);
    if (isCheckedD1) {
      console.log("nilaa checked");
    }
  }, [isCheckedD1, isCheckedD2, isCheckedE]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 text-center">logo</div>
        <div className="col-md-6 text-center">
          <h2>
            <b>ST. XAVIER’S COLLEGE</b>
          </h2>
          <p>MAITIGHAR, KATHMANDU</p>
          <h3>GCE A LEVEL Online Admission</h3>
          <p>CAMBRIDGE INTERNATIONAL SCHOOL</p>
          <h3>APPLICATION FORM</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 d-flex justify-content-end">
          <div className="btn btn-success mr-2">Make Your Payment</div>
          <div className="btn btn-warning">Resend Admit Card</div>
        </div>
      </div>
      <div className="mt-2">
        <Formik
          initialValues={initialValues}
          validationSchema={AdmissionValidation}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="form-horizontal">
              <div className="row">
                <div className="col-md-6 offset-md-3">
                  <div className="panel panel-danger">
                    <div className="panel-body">
                      <span className="danger-text">*Required fields</span> |{" "}
                      <span className="danger-text">
                        *Image should be in JPEG or PNG format
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <label className="control-label col-md-3 col-sm-12 ">
                  <span className="text-danger text-req">*</span> Name of the
                  Student
                  {/* <br /> <small>(IN BLOCK LETTERS)</small> */}
                </label>
                <div className="col-md-3 col-sm-12 textfield">
                  <TextField
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    autoComplete="on"
                  />
                </div>
                <div className="col-md-3 col-sm-12 textfield">
                  <TextField
                    type="text"
                    name="middleName"
                    placeholder="Middle Name"
                    autoComplete="on"
                  />
                </div>
                <div className="col-md-3 col-sm-12 textfield">
                  <TextField
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    autoComplete="on"
                  />
                </div>
              </div>
              <div className="row">
                <label className="control-label col-md-3 col-sm-12 ">
                  <span className="text-danger text-req">*</span>Student's
                  Photo:
                </label>
                <div className="col-md-6 col-sm-12 textfield"></div>
              </div>
              <div className="row">
                <label className="control-label col-md-3 col-sm-12 ">
                  <span className="text-danger text-req">*</span> Gender
                </label>
                <div className="col-md-3 col-sm-12 textfield">
                  <label className="radio-inline ml-4">
                    <input
                      name="gender"
                      type="radio"
                      id="maleRadio"
                      value="1"
                    />
                    Male
                  </label>
                  <label className="radio-inline">
                    <input
                      name="gender"
                      type="radio"
                      id="femaleRadio"
                      value="1"
                    />
                    Female
                  </label>
                </div>

                <label
                  htmlFor="password"
                  className="col-md-3 second-column control-label"
                >
                  {" "}
                  <span className="text-danger text-req">*</span>Religion
                </label>

                <div className="col-md-3">
                  <select name="religion" className="form-control">
                    {religionList.map((item, index) => {
                      return (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="row">
                <label className="control-label col-md-3 col-sm-12 ">
                  <span className="text-danger text-req">*</span>Date of
                  Birth(In A.D.)
                </label>
                <div className="col-md-3 col-sm-12 textfield">
                  <TextField
                    type="date"
                    name="engDateBirth"
                    placeholder="YYYY-MM-DD"
                    autoComplete="off"
                  />
                </div>
                <label className="control-label col-md-3 col-sm-12 second-column">
                  <span className="text-danger text-req">*</span>(In B.S.)
                </label>
                <div className="col-md-3 col-sm-12 textfield">
                  <TextField
                    type="date"
                    name="nepDateBirth"
                    placeholder="YYYY-MM-DD"
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="row">
                <label className="control-label col-md-3 col-sm-12 ">
                  <span className="text-danger text-req">*</span>Blood Group
                </label>
                <div className="col-md-3 col-sm-12 textfield">
                  <TextField
                    type="text"
                    name="bloodGroup"
                    placeholder="Blood Group"
                    autoComplete="on"
                  />
                </div>
                <label className="control-label col-md-3 col-sm-12 second-column ">
                  <span className="text-danger text-req">*</span>Student’s
                  Personal Cell No
                </label>
                <div className="col-md-3 col-sm-12 textfield">
                  <TextField
                    name="studentNumber"
                    placeholder="Student Phone Number"
                    autoComplete="on"
                    maxLength="10"
                    type="number"
                  />
                </div>
              </div>
              <div className="row">
                <label className="control-label col-md-3 col-sm-12 ">
                  <span className="text-danger text-req">*</span>Place of Birth
                </label>
                <div className="col-md-6 col-sm-12 textfield">
                  <TextField
                    type="text"
                    name="placeOfBirth"
                    id="placeOfBirth"
                    placeholder="Place of Birth"
                  />
                </div>
              </div>

              <div className="row">
                <label className="control-label col-md-3 col-sm-12 ">
                  <span className="text-danger text-req">*</span>Nationality
                </label>
                <div className="col-md-3 col-sm-12 textfield">
                  <TextField
                    type="text"
                    name="nationality"
                    placeholder="Nationality"
                  />
                </div>
                <label className="control-label col-md-3 col-sm-12 second-column">
                  <span className="text-danger text-req">*</span>Ethnic Group
                </label>
                <div className="col-md-3 col-sm-12 textfield">
                  <select name="ethnicgroup" className="form-control">
                    {ethnicGroupList.map((item, index) => {
                      return (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="row">
                <label className="control-label col-md-3 col-sm-12 ">
                  <span className="text-danger text-req">*</span>Father's Name
                </label>
                <div className="col-md-3 col-sm-12 textfield">
                  <TextField
                    type="text"
                    name="fatherName"
                    placeholder="Father's Name"
                    // autoFocus
                  />
                </div>
                <label className="control-label col-md-3 col-sm-12 second-column ">
                  <span className="text-danger text-req">*</span>Living
                </label>
                <div className="col-md-3 col-sm-12 textfield">
                  <input
                    type="radio"
                    name="fatherliving"
                    id="fatherLiving1"
                    // checked="checked"
                    value="yes"
                  />
                  Yes
                  <input
                    type="radio"
                    name="fatherliving"
                    id="fatherLiving2"
                    value="no"
                  />
                  No
                </div>
              </div>
              <div className="row">
                <label className="control-label col-md-3 col-sm-12 ">
                  <span className="text-danger text-req">*</span>Father's
                  Occupation
                </label>
                <div className="col-md-3 col-sm-12 textfield">
                  <TextField
                    type="text"
                    name="fatherOccupation"
                    placeholder="Father's Occupation"
                  />
                </div>
                <label className="control-label col-md-3 col-sm-12 second-column ">
                  <span className="text-danger text-req">*</span>Phone/Cell No
                </label>
                <div className="col-md-3 col-sm-12 textfield">
                  <TextField
                    type="phoneNumber"
                    name="fatherNumber"
                    id="fatherPhoneNumber"
                    placeholder="Father Phone/Cell No"
                    className="form-control"
                    maxLength="10"
                  />
                </div>
              </div>
              <div className="row">
                <label className="control-label col-md-3 col-sm-12 ">
                  <span className="text-danger text-req">*</span>Mother's Name
                </label>
                <div className="col-md-3 col-sm-12 textfield">
                  <TextField
                    type="text"
                    name="motherName"
                    id="mothersname"
                    placeholder="Mother's Name"
                    className="form-control"
                  />
                </div>
                <label className="control-label col-md-3 col-sm-12 second-column ">
                  <span className="text-danger text-req">*</span>Living
                </label>
                <div className="col-md-3 col-sm-12 textfield">
                  <input
                    type="radio"
                    name="fatherliving"
                    id="fatherLiving1"
                    // checked="checked"
                    value="yes"
                  />
                  <input
                    type="radio"
                    name="fatherliving"
                    id="fatherLiving2"
                    value="no"
                  />
                </div>
              </div>
              <div className="row">
                <label className="control-label col-md-3 col-sm-12 ">
                  <span className="text-danger text-req">*</span>Mother's
                  Occupation
                </label>
                <div className="col-md-3 col-sm-12 textfield">
                  <TextField
                    type="text"
                    name="motherOccupation"
                    id="mothersoccupation"
                    placeholder="Mother's Occupation"
                    className="form-control"
                  />
                </div>
                <label className="control-label col-md-3 col-sm-12 second-column ">
                  <span className="text-danger text-req">*</span>Phone/Cell No
                </label>
                <div className="col-md-3 col-sm-12 textfield">
                  <TextField
                    title="Phone/Cell No"
                    type="phoneNumber"
                    name="motherNumber"
                    id="motherPhoneNumber"
                    placeholder="Mother Phone/Cell No"
                    className="form-control"
                    maxLength="10"
                  />
                </div>
              </div>
              <div className="row">
                <label className="control-label col-md-3 col-sm-12 ">
                  <span className="text-danger text-req">*</span>Address
                  (Permanent)
                </label>
                <div className="col-md-3 col-sm-12 textfield">
                  <TextField
                    type="text"
                    name="permanentCity"
                    id="permanentCity"
                    placeholder="City"
                    className="form-control"
                    maxLength="100"
                    // autoFocus
                  />
                </div>

                <div className="col-md-5 col-sm-12 textfield">
                  <TextField
                    type="text"
                    name="permanentCountry"
                    id="permanentCountry"
                    placeholder="Country"
                    className="form-control"
                    maxLength="100"
                    // autoFocus
                  />
                </div>
              </div>
              <div className="row">
                <label className="control-label col-md-3 col-sm-12 ">
                  <span className="text-danger text-req">*</span>Local (if
                  different)
                </label>
                <div className="col-md-3 col-sm-12 textfield">
                  <TextField
                    type="text"
                    name="localCity"
                    id="localCity"
                    placeholder="City"
                    className="form-control"
                    maxLength="100"
                    // autoFocus
                  />
                </div>

                <div className="col-md-5 col-sm-12 textfield">
                  <TextField
                    type="text"
                    name="localCountry"
                    id="localCountry"
                    placeholder="Country"
                    className="form-control"
                    maxLength="100"
                    // autoFocus
                  />
                </div>
              </div>
              <div className="row">
                <label className="control-label col-md-3 col-sm-12 ">
                  <span className="text-danger text-req">*</span>Student's Email
                  Address (Gmail Only)
                </label>
                <div className="col-md-6 col-sm-12 textfield">
                  <TextField
                    type="email"
                    id="studentemail"
                    placeholder="Gmail ID"
                    className="form-control"
                    name="studentEmail"
                    // autoFocus
                    onBlur="checkEmail();"
                  />
                </div>
              </div>
              <div className="row">
                <label className="control-label col-md-3 col-sm-12 ">
                  <span className="text-danger text-req">*</span>Family Phone
                </label>
                <div className="col-md-3 col-sm-12 textfield">
                  <TextField
                    type="text"
                    name="familyNumber"
                    id="familyNumber"
                    placeholder="Family Phone"
                    className="form-control"
                    maxLength="10"
                    // autoFocus
                  />
                </div>
                <label className="control-label col-md-3 col-sm-12 second-column ">
                  <span className="text-danger text-req">*</span>Local Phone No
                </label>
                <div className="col-md-3 col-sm-12 textfield">
                  <TextField
                    type="text"
                    name="localNumber"
                    id="localNumber"
                    placeholder="Local Phone No"
                    className="form-control"
                    maxLength="10"
                    // autoFocus
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-offset-1 col-md-11">
                  <div className="form-group">
                    <label className="col-sm-12 control-label">
                      <span className="text-danger text-req">*</span>Area of
                      interest:
                    </label>
                    <div className="col-sm-12">
                      <TextField
                        type="text"
                        name="areaOfInterest"
                        id="areaOfInterest"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-12 control-label">
                  Available subject combination
                </label>
                <SubjectTable />
              </div>
              <div className="row">
                <label className="col-md-12">
                  <span className="text-danger text-req">*</span>Please choose
                  the group you want to study and select the radio button
                </label>
              </div>
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-2">
                    <label className="radio-inline">
                      <input name="group" type="radio" id="ARadio" value="1" />
                      Group A
                    </label>
                  </div>
                  <div className="col-sm-12 col-md-2">
                    <label className="radio-inline">
                      <input name="group" type="radio" id="BRadio" value="2" />
                      Group B
                    </label>
                  </div>
                  <div className="col-md-2 col-sm-12 ">
                    <label className="radio-inline">
                      <input name="group" type="radio" id="CRadio" value="3" />
                      Group C
                    </label>
                  </div>
                  <div className="col-md-2 col-sm-12">
                    <label className="radio-inline">
                      <input name="group" type="radio" id="DRadio" value="4" />
                      Group D1
                    </label>
                  </div>
                  <div className="col-md-2 col-sm-12">
                    <label className="radio-inline">
                      <input name="group" type="radio" id="ERadio" value="5" />
                      Group D2
                    </label>
                  </div>
                  <div className="col-md-2 col-sm-12">
                    <label className="radio-inline">
                      <input name="group" type="radio" id="FRadio" value="6" />
                      Group D3
                    </label>
                  </div>
                  <div className="col-md-2 col-sm-12">
                    <label className="radio-inline">
                      <input name="group" type="radio" id="GRadio" value="7" />
                      Group E
                    </label>
                  </div>
                  <div className="col-md-2 col-sm-12">
                    <label className="radio-inline">
                      <input name="group" type="radio" id="HRadio" value="8" />
                      Group F
                    </label>
                  </div>
                </div>
              </div>
              {isCheckedD1 && (
                <div>helo</div>

                // <div className="form-group col-sm-12 " id="optionalSubjects_4_5">
                //   <div className="col-sm-2">
                //     <label className="radio-inline">
                //       <input
                //         name="group_4_5"
                //         type="radio"
                //         id="GRadio4"
                //         value="Biology"
                //       />{" "}
                //       Biology
                //     </label>
                //   </div>

                //    <div className="col-sm-2">
                //     <label className="radio-inline">
                //       <input
                //         name="group_4_5"
                //         type="radio"
                //         id="GRadio41"
                //         value="Computer"
                //       />{" "}
                //       Computer
                //     </label>
                //   </div>
                // </div>
              )}
              <AcademicTable />

              <div className="row form-group">
                <div className="col-md-offset-1 col-md-11">
                  <label htmlFor="reportlabel" className="col-sm-12">
                    <span className="text-danger text-req">*</span>Submit
                    photocopy of Class 9 Final Progress Report & Send Up results
                    of class 10 along with this form.
                  </label>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="form-group">
                        <label className="control-label col-sm-6">
                          <span className="text-danger text-req">*</span>Class 9
                          Final Progress Report
                        </label>
                        <div className="col-sm-6">
                          {/* <img height="100" required="required" /> */}

                          <input
                            type="file"
                            name="ninereportphoto"
                            id="ninereportphoto"
                            className="form-control nineImages"
                            accept="image/*"
                          />
                        </div>
                        <small>
                          ( Note : Only jpg/jpeg/png.Max file size 1 MB )
                        </small>
                        <span className="nineError text-danger"></span>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="control-label col-sm-6">
                            <span className="text-danger text-req">*</span>Send
                            Up results of class 10{" "}
                          </label>
                          <div className="col-sm-6">
                            {/* <img
                              src="<?php echo base_url(); ?>/assets/images/students/<?php echo $student_information['student_id']; ?>/<?php echo $student_information['ten_sendup_report']; ?>"
                              height="100"

                            /> */}

                            <input
                              type="file"
                              name="tenreportphoto"
                              id="tenreportphoto"
                              className="form-control tenImages"
                              accept="image/x-png,image/jpeg"
                            />
                          </div>
                        </div>
                        <small>
                          ( Note : Only jpg/jpeg/png.Max file size 1 MB )
                        </small>
                        <span className="tenError text-danger"></span>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label className="control-label col-sm-6">
                            Upload Recommendation
                          </label>
                          <div className="col-sm-6">
                            {/* <img
                              src="<?php echo base_url(); ?>/assets/images/students/<?php echo $student_information['student_id']; ?>/<?php echo $student_information['recommendations']; ?>"
                              height="100"
                            /> */}

                            <input
                              type="file"
                              name="recommendations"
                              id="recommendations"
                              className="form-control remImages"
                              accept="image/x-png,image/jpeg"
                            />
                          </div>
                        </div>
                        <small>
                          ( Note : Only jpg/jpeg/png.Max file size 1 MB )
                        </small>
                        <span className="recomError text-danger"></span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label
                          htmlFor="studentsignature"
                          className="col-sm-6 control-label"
                        >
                          <span className="text-danger text-req">*</span>
                          Student's Signature*
                        </label>
                        <div className="col-sm-6">
                          <input
                            type="text"
                            name="studentsignature"
                            id="studentsignature"
                            className="form-control"
                            autoFocus
                          />
                          <span className="help-block">
                            Please write the name
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label
                          htmlFor="parentsignature"
                          className="col-sm-6 control-label"
                        >
                          <span className="text-danger text-req">*</span>
                          Parent's Signature*
                        </label>
                        <div className="col-sm-6">
                          <input
                            type="text"
                            name="parentsignature"
                            id="parentsignature"
                            className="form-control"
                            autoFocus
                          />
                          <span className="help-block">
                            Please write the name
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button type="submit">Submit </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
