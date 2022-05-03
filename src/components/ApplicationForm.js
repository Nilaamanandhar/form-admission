import React, { useState } from "react";
import { TextField } from "./TextInput";

export default function ApplicationForm() {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [engDateBirth, setEngDateBirth] = useState("");
  const [nepDateBirth, setNepDateBirth] = useState("");

  const [religion, setReligion] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [studentNumber, setStudentNumber] = useState("");
const[placeOfBirth,setPlaceOfBirth] = useState("");
  const[nationality,setNationality] = useState("");
  const [fatherName, setFatherName] = useState("");
  const[fatherOccupation, setFatherOccupation]= useState("");
  const[fatherNumber,setFatherNumber]= useState("");
  const[motherName,setMotherName] = useState("");
  const[motherNumber,setMotherNumber] = useState("");
  const[motherOccupation,setMotherOccupation]= useState("");
  const[permanentCity,setPermanentCity] = useState("");
  const[permanentCountry,setPermanentCountry] = useState("");
  const[localCity,setLocalCity] = useState("");
  const[localCountry,setLocalCountry] = useState("");
  const[studentEmail,setStudentEmail] = useState("");
  const[familyPhoneNumber,setFamilyPhoneNumber] = useState("");
  const[localPhoneNumber,setLocalPhoneNumber] = useState("");



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
        <form className="form-horizontal">
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
              <br /> <small>(IN BLOCK LETTERS)</small>
            </label>
            <div className="col-md-3 col-sm-12 textfield">
              <TextField
                type="text"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                placeholder="First Name"
                autocomplete="on"
              />
              {/* <?php echo form_error('firstname', '<span className="error">', '</span>'); ?><br> */}
            </div>
            <div className="col-md-3 col-sm-12 textfield">
              <TextField
                type="text"
                value={middleName}
                onChange={(e) => {
                  setMiddleName(e.target.value);
                }}
                placeholder="Middle Name"
                autocomplete="on"
              />
              {/* <?php echo form_error('firstname', '<span className="error">', '</span>'); ?><br> */}
            </div>
            <div className="col-md-3 col-sm-12 textfield">
              <TextField
                type="text"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                placeholder="Last Name"
                autocomplete="on"
              />
              {/* <?php echo form_error('firstname', '<span className="error">', '</span>'); ?><br> */}
            </div>
          </div>
          <div className="row">
            <label className="control-label col-md-3 col-sm-12 ">
              <span className="text-danger text-req">*</span>Student's Photo:
            </label>
            <div className="col-md-6 col-sm-12 textfield">
              <TextField
                type="text"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                placeholder="First Name"
                autocomplete="on"
              />
              {/* <?php echo form_error('firstname', '<span className="error">', '</span>'); ?><br> */}
            </div>
          </div>
          <div className="row">
            <label className="control-label col-md-3 col-sm-12 ">
              <span className="text-danger text-req">*</span> Gender
            </label>
            <div className="col-md-3 col-sm-12 textfield">
              <label class="radio-inline ml-4">
                <input
                  name="gender"
                  type="radio"
                  id="maleRadio"
                  value="1"
                  required
                  checked="checked"
                />
                Male
              </label>
              <label class="radio-inline">
                <input name="gender" type="radio" id="femaleRadio" value="1" />
                Female
              </label>
              {/* <?php echo form_error('firstname', '<span className="error">', '</span>'); ?><br> */}
            </div>

            <label
              for="password"
              class="col-md-3 d-flex justify-content-end control-label"
            >
              {" "}
              <span className="text-danger text-req">*</span>Religion
            </label>

            <div className="col-md-3">
              <select name="religion" class="form-control">
                {religionList.map((item) => {
                  return <option value={item}>{item}</option>;
                })}
              </select>
            </div>
          </div>
          <div className="row">
            <label className="control-label col-md-3 col-sm-12 ">
              <span className="text-danger text-req">*</span>Date of Birth(In
              A.D.)
            </label>
            <div className="col-md-3 col-sm-12 textfield">
              <TextField
                type="date"
                name="dateofbirthad"
                value={engDateBirth}
                onChange={(e) => {
                  setEngDateBirth(e.target.value);
                }}
                placeholder="YYYY-MM-DD"
                autocomplete="off"
              />
              {/* <?php echo form_error('firstname', '<span className="error">', '</span>'); ?><br> */}
            </div>
            <label className="control-label col-md-3 col-sm-12 d-flex justify-content-end ">
              <span className="text-danger text-req">*</span>(In B.S.)
            </label>
            <div className="col-md-3 col-sm-12 textfield">
              <TextField
                type="date"
                name="dateofbirthad"
                value={nepDateBirth}
                onChange={(e) => {
                  setNepDateBirth(e.target.value);
                }}
                placeholder="YYYY-MM-DD"
                autocomplete="off"
              />
              {/* <?php echo form_error('firstname', '<span className="error">', '</span>'); ?><br> */}
            </div>
          </div>
          <div className="row">
            <label className="control-label col-md-3 col-sm-12 ">
              <span className="text-danger text-req">*</span>Blood Group
            </label>
            <div className="col-md-3 col-sm-12 textfield">
              <TextField
                type="text"
                name="bloodgroup"
                value={bloodGroup}
                onChange={(e) => {
                  setBloodGroup(e.target.value);
                }}
                placeholder="Blood Group"
                autocomplete="on"
              />
              {/* <?php echo form_error('firstname', '<span className="error">', '</span>'); ?><br> */}
            </div>
            <label className="control-label col-md-3 col-sm-12 d-flex justify-content-end ">
              <span className="text-danger text-req">*</span>Student’s Personal
              Cell No
            </label>
            <div className="col-md-3 col-sm-12 textfield">
              <TextField
                name="studentPhoneNumber"
                value={studentNumber}
                onChange={(e) => {
                  setStudentNumber(e.target.value);
                }}
                placeholder="Student Phone Number"
                autocomplete="on"
                maxlength="10"
                type="phoneNumber"
              />
              {/* <?php echo form_error('firstname', '<span className="error">', '</span>'); ?><br> */}
            </div>
          </div>
          <div className="row">
            <label className="control-label col-md-3 col-sm-12 ">
              <span className="text-danger text-req">*</span>"Place of Birth
            </label>
            <div className="col-md-6 col-sm-12 textfield">
              <TextField
                type="text"
                name="placeofbirth"
                id="placeOfBirth"
                placeholder="Place of Birth"
                value={placeOfBirth}
                onChange={(e) => {
                  setPlaceOfBirth(e.target.value);
                }}
              />
              {/* <?php echo form_error('firstname', '<span className="error">', '</span>'); ?><br> */}
            </div>
          </div>
          <div className="row">
            <label className="control-label col-md-3 col-sm-12 ">
              <span className="text-danger text-req">*</span>Blood Group
            </label>
            <div className="col-md-3 col-sm-12 textfield">
              <TextField
                type="text"
                name="bloodgroup"
                value={bloodGroup}
                onChange={(e) => {
                  setBloodGroup(e.target.value);
                }}
                placeholder="Blood Group"
                autocomplete="on"
              />
              {/* <?php echo form_error('firstname', '<span className="error">', '</span>'); ?><br> */}
            </div>
            <label className="control-label col-md-3 col-sm-12 d-flex justify-content-end ">
              <span className="text-danger text-req">*</span>Student’s Personal
              Cell No
            </label>
            <div className="col-md-3 col-sm-12 textfield">
              <TextField
                name="studentPhoneNumber"
                value={studentNumber}
                onChange={(e) => {
                  setStudentNumber(e.target.value);
                }}
                placeholder="Student Phone Number"
                autocomplete="on"
                maxlength="10"
                type="phoneNumber"
              />
              {/* <?php echo form_error('firstname', '<span className="error">', '</span>'); ?><br> */}
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
                value={nationality}
                onChange={(e)=>{setNationality(e.target.value)}}
              />
              {/* <?php echo form_error('firstname', '<span className="error">', '</span>'); ?><br> */}
            </div>
            <label className="control-label col-md-3 col-sm-12 d-flex justify-content-end ">
              <span className="text-danger text-req">*</span>Ethnic Group

            </label>
            <div className="col-md-3 col-sm-12 textfield">
            <select name="ethnicgroup" class="form-control">
                  {ethnicGroupList.map((item) => {
                    return <option value={item}>{item}</option>;
                  })}
                </select>
              {/* <?php echo form_error('firstname', '<span className="error">', '</span>'); ?><br> */}
            </div>
          </div>
          <div className="row">
            <label className="control-label col-md-3 col-sm-12 ">
              <span className="text-danger text-req">*</span>Father's Name
            </label>
            <div className="col-md-3 col-sm-12 textfield">
            <TextField
                type="text"
                name="fathersname"
                placeholder="Father's Name"
                value={fatherName}
                onChange={(e) => {
                  setFatherName(e.target.value);
                }}
                autofocus
                required
              />
              {/* <?php echo form_error('firstname', '<span className="error">', '</span>'); ?><br> */}
            </div>
            <label className="control-label col-md-3 col-sm-12 d-flex justify-content-end ">
              <span className="text-danger text-req">*</span>Living
            </label>
            <div className="col-md-3 col-sm-12 textfield">
            <input
                type="radio"
                name="fatherliving"
                id="fatherLiving1"
                checked="checked"
                value="yes"
              />
              <input
                type="radio"
                name="fatherliving"
                id="fatherLiving2"
                value="no"
              />
              {/* <?php echo form_error('firstname', '<span className="error">', '</span>'); ?><br> */}
            </div>
          </div>
          <div className="row">
            <label className="control-label col-md-3 col-sm-12 ">
              <span className="text-danger text-req">*</span>Father's Occupation
            </label>
            <div className="col-md-3 col-sm-12 textfield">
            <TextField
                type="text"
                name="fathersname"
                placeholder="Father's Occupation"
                value={fatherOccupation}
                onChange={(e) => {
                  setFatherOccupation(e.target.value);
                }}
                autofocus
                required
              />
              {/* <?php echo form_error('firstname', '<span className="error">', '</span>'); ?><br> */}
            </div>
            <label className="control-label col-md-3 col-sm-12 d-flex justify-content-end ">
              <span className="text-danger text-req">*</span>Phone/Cell No
            </label>
            <div className="col-md-3 col-sm-12 textfield">
            <TextField
              type="phoneNumber"
              name="fatherPhoneNumber"
              id="fatherPhoneNumber"
              placeholder="Father Phone/Cell No"
              value={fatherNumber}
                onChange={(e) => {
                  setFatherNumber(e.target.value);
                }}
              class="form-control"
              maxlength="10"
            //   value="<?php if(isset($student_information['fathers_phone_no'])){echo $student_information['fathers_phone_no']; } else { echo set_value('fatherPhoneNumber'); } ?>"
              required
              autofocus
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
             name="mothersname"
             id="mothersname"
             placeholder="Mother's Name"
             value={motherName}
             onChange={(e) => {
              setMotherName(e.target.value);
             }}
             class="form-control"
             autofocus
             required
            />
              {/* <?php echo form_error('firstname', '<span className="error">', '</span>'); ?><br> */}
            </div>
            <label className="control-label col-md-3 col-sm-12 d-flex justify-content-end ">
              <span className="text-danger text-req">*</span>Living
            </label>
            <div className="col-md-3 col-sm-12 textfield">
            <input
                type="radio"
                name="fatherliving"
                id="fatherLiving1"
                checked="checked"
                value="yes"
              />
              <input
                type="radio"
                name="fatherliving"
                id="fatherLiving2"
                value="no"
              />
              {/* <?php echo form_error('firstname', '<span className="error">', '</span>'); ?><br> */}
            </div>
          </div>
          <div className="row">
            <label className="control-label col-md-3 col-sm-12 ">
              <span className="text-danger text-req">*</span>Mother's Occupation
            </label>
            <div className="col-md-3 col-sm-12 textfield">
            <TextField   type="text"
                name="mothersoccupation"
                id="mothersoccupation"
                placeholder="Mother's Occupation"
                class="form-control"
                value={motherOccupation}
             onChange={(e) => {
              setMotherOccupation(e.target.value);
             }}
                autofocus
                required/>
              {/* <?php echo form_error('firstname', '<span className="error">', '</span>'); ?><br> */}
            </div>
            <label className="control-label col-md-3 col-sm-12 d-flex justify-content-end ">
              <span className="text-danger text-req">*</span>Phone/Cell No
            </label>
            <div className="col-md-3 col-sm-12 textfield">
            <TextField title="Phone/Cell No"  type="phoneNumber"
                name="motherPhoneNumber"
                id="motherPhoneNumber"
                placeholder="Mother Phone/Cell No"
                class="form-control"
                maxlength="10"
                value={motherNumber}
                onChange={(e) => {
                  setMotherNumber(e.target.value);
                }}
                required
                autofocus />


            </div>
          </div>
          <div className="row">
            <label className="control-label col-md-3 col-sm-12 ">
              <span className="text-danger text-req">*</span>Address (Permanent)
            </label>
            <div className="col-md-3 col-sm-12 textfield">
            <TextField type="text"
                    name="permanentCity"
                    id="permanentCity"
                    placeholder="City"
                    class="form-control"
                    maxlength="100"
                value={permanentCity}
                onChange={(e) => {
                  setPermanentCity(e.target.value);
                }}
                    required
                    autofocus/>

              {/* <?php echo form_error('firstname', '<span className="error">', '</span>'); ?><br> */}
            </div>

            <div className="col-md-5 col-sm-12 textfield">
            <TextField
                  type="text"
                  name="permanentCountry"
                  id="permanentCountry"
                  placeholder="Country"
                  class="form-control"
                  maxlength="100"
                  value={permanentCountry}
                  onChange={(e) => {
                    setPermanentCountry(e.target.value);
                  }}
                //   value="<?php if(isset($student_information['country'])){echo $student_information['country']; } else { echo set_value('permanentCountry'); } ?>"
                  required
                  autofocus
                />

            </div>
          </div>
          <div className="row">
            <label className="control-label col-md-3 col-sm-12 ">
              <span className="text-danger text-req">*</span>Local (if different)

            </label>
            <div className="col-md-3 col-sm-12 textfield">
            <TextField   type="text"
                    name="localCity"
                    id="localCity"
                    placeholder="City"
                    class="form-control"
                    value={localCity}
                    onChange={(e) => {
                      setLocalCity(e.target.value);
                    }}

                    maxlength="100"
                    autofocus/>
              {/* <?php echo form_error('firstname', '<span className="error">', '</span>'); ?><br> */}
            </div>

            <div className="col-md-5 col-sm-12 textfield">
            <TextField  type="text"
                    name="localCountry"
                    id="localCountry"
                    value={localCountry}
                    onChange={(e) => {
                      setLocalCountry(e.target.value);
                    }}

                    placeholder="Country"
                    class="form-control"
                    maxlength="100"
                    autofocus/>

            </div>
          </div>
          <div className="row">
            <label className="control-label col-md-3 col-sm-12 ">
              <span className="text-danger text-req">*</span>Student's Email Address
            (Gmail Only)
            </label>
            <div className="col-md-6 col-sm-12 textfield">
            <TextField
               type="email"
                id="studentemail"
                placeholder="Gmail ID"
                class="form-control"
                name="studentemail"
                value={studentEmail}
                onChange={(e) => {
                  setStudentEmail(e.target.value);
                }}
                required
                autofocus
                onblur="checkEmail();"/>
              {/* <?php echo form_error('firstname', '<span className="error">', '</span>'); ?><br> */}
            </div>

          </div>
          <div className="row">
            <label className="control-label col-md-3 col-sm-12 ">
              <span className="text-danger text-req">*</span>Family Phone
            </label>
            <div className="col-md-3 col-sm-12 textfield">
            <TextField  type="text" name="familyphone" id="familyphone" placeholder="Family Phone" class="form-control" maxlength="10" value={familyPhoneNumber}
                onChange={(e) => {
                  setFamilyPhoneNumber(e.target.value);
                }} required autofocus/>
              {/* <?php echo form_error('firstname', '<span className="error">', '</span>'); ?><br> */}
            </div>
            <label className="control-label col-md-3 col-sm-12 d-flex justify-content-end ">
              <span className="text-danger text-req">*</span>Local Phone No
            </label>
            <div className="col-md-3 col-sm-12 textfield">
            <TextField  type="text" name="localPhoneNumber" id="localPhoneNumber"   value={localPhoneNumber}
                onChange={(e) => {
                  setLocalPhoneNumber(e.target.value);
                }} placeholder="Local Phone No"  class="form-control" maxlength="10" required autofocus />

            </div>
          </div>
          <div class="row">
					<div class="col-md-offset-1 col-md-11">

						<div class="form-group">
							<label  className="col-sm-12 control-label"><span class="text-danger text-req">*</span>Area of interest:</label>
							<div class="col-sm-12">
								<input type="text" name="areaofinterest" id="areaofinterest" class="form-control" autofocus required/>

							</div>
						</div>
					</div>
				</div>
        <div class="form-group">
	<label  class="col-sm-12 control-label" >Available subject combination</label>
	<div class="table-responsive">
  <table class="table table-responsive table-bordered subject">
			<tr>
				<th >Groups/Subjects</th>
				<th >1</th>
				<th >2</th>
				<th >3</th>
				<th >4</th>
				<th >5</th>
				<th >6</th>

			</tr>
      </table></div></div>
      <div class="row">
					{/* <div class="col-md-offset-1 col-md-11"> */}
          <label  class="col-md-12" ><span class="text-danger text-req">*</span>Please choose the group you want to study and select the radio button</label>
          </div>
          <div class="col-md-12">
          <div class="row">
									<div class="col-md-2">
										<label class="radio-inline">
											<input name="group" type="radio" id="ARadio" value="1" required

											/>Group A
										</label>
									</div>
                  <div class="col-sm-2">
										<label class="radio-inline">
											<input name="group" type="radio" id="BRadio" value="2"/>

											Group B
										</label>
									</div>
                  <div class="col-sm-2">
										<label class="radio-inline">
											<input name="group" type="radio" id="CRadio" value="3"
                      />

										Group C
										</label>
									</div>
                  <div class="col-sm-2">
										<label class="radio-inline">
											<input name="group" type="radio" id="DRadio" value="4"
											/>Group D1
										</label>
									</div>
                  <div class="col-sm-2">
										<label class="radio-inline">
											<input name="group" type="radio" id="ERadio" value="5"
											/>Group D2
										</label>
									</div>
                  <div class="col-sm-2">
										<label class="radio-inline">
											<input name="group" type="radio" id="FRadio" value="6"
											/>Group D3
										</label>
									</div>
                  <div class="col-sm-2">
										<label class="radio-inline">
											<input name="group" type="radio" id="GRadio" value="7"

											/>Group E
										</label>
									</div>
                  <div class="col-sm-2">
										<label class="radio-inline">
											<input name="group" type="radio" id="HRadio" value="8"

											/>Group F
										</label>
									</div>
                  </div>
          </div>
          <button >Submit </button>
          {/* </div> */}
        </form>
      </div>
    </div>
  );
}
