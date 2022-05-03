import React, { useState } from "react";
import { TextField } from "./TextInput";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateBirth, setDateBirth] = useState("");
  const [religion, setReligion] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fatherName, setFatherName] = useState("");

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
        <div className="col-md-3 text-center">
          <div>photo</div>
        </div>
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
      <div className="pull-right">
        <a href="./index" className="btn btn-success">
          Make Your Payment
        </a>
        <a href="./index" className="btn btn-warning">
          Resend Admit Card
        </a>
      </div>
      <div className="block">
        <form
          className="form-horizontal"
          role="form"
          action="<?php echo base_url('register/store'); ?>"
          method="POST"
          encType="multipart/form-data"
          id="register-form"
          name="register_form"
        >
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <div className="panel panel-danger">
                <div className="panel-body">
                  <span className="text-danger">*Required fields</span> |{" "}
                  <span className="text-danger">
                    *Image should be in JPEG or PNG format
                  </span>
                </div>
              </div>

              <div className="alert alert-danger">
                <button
                  type="button"
                  className="close"
                  data-dismiss="alert"
                  aria-hidden="true"
                >
                  X
                </button>
                <div className="alert-body">
                  <span className="text-danger">already_paid</span>
                </div>
              </div>

              <div className="alert alert-danger">
                <button
                  type="button"
                  className="close"
                  data-dismiss="alert"
                  aria-hidden="true"
                >
                  X
                </button>
                <div className="alert-body">
                  <span className="text-danger">payment cancel</span>
                </div>
              </div>

              <div className="alert alert-danger">
                <button
                  type="button"
                  className="close"
                  data-dismiss="alert"
                  aria-hidden="true"
                >
                  X
                </button>
                <div className="alert-body">
                  <span className="text-danger">resend_fail</span>
                </div>
              </div>

              <div className="alert alert-success">
                <button
                  type="button"
                  className="close"
                  data-dismiss="alert"
                  aria-hidden="true"
                >
                  X
                </button>
                <div className="alert-body">
                  <span className="text-primary">resend_success</span>
                </div>
              </div>
            </div>
            <div className="col-sm-3"></div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3 ">
              <span className="text-danger text-req">*</span> Name of the
              Student
              <small>(IN BLOCK LETTERS)</small>
            </label>
            <div className="col-sm-3">
              <TextField
                type="text"
                name="firstname"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                placeholder="First Name"
                autocomplete="on"
              />
              {/* <?php echo form_error('firstname', '<span className="error">', '</span>'); ?><br> */}
            </div>
            <div className="col-sm-3">
              <TextField
                type="text"
                name="middlename"
                value={middleName}
                onChange={(e) => {
                  setMiddleName(e.target.value);
                }}
                placeholder="Middle Name"
                autocomplete="on"
              />
            </div>
            <div className="col-sm-3">
              <TextField
                type="text"
                name="lastname"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                placeholder="Last Name"
                autocomplete="on"
              />

              {/* <?php echo form_error('lastname', '<span className="error">', '</span>'); ?><br> */}
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3">
              <span className="text-danger text-req">*</span>Student's Photo:
            </label>
            <div className="col-sm-6">
              {/* <img src="<?php echo base_url(); ?>/assets/images/students/<?php echo $student_information['student_id'] ?>/<?php echo $student_information['student_photo'] ?>">  */}

              <input
                type="file"
                name="studentsphoto"
                className="form-control"
                required="required"
                id="studentsphoto"
                accept="image/x-png,image/jpeg"
              />

              <small>
                ( Note : Only jpg/jpeg/png. Dimension : Width: 600 pixels ,
                Height: 600 pixels and photo must be taken within the last six
                months )
              </small>

              <small id="response" className="text-danger"></small>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label class="control-label col-sm-6">
                  <span class="text-danger text-req">*</span>Gender
                </label>
                <div class="col-sm-4">
                  <div class="row">
                    <div class="col-sm-4">
                      <label class="radio-inline">
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
                    </div>
                    <div class="col-sm-4">
                      <label class="radio-inline">
                        <input
                          name="gender"
                          type="radio"
                          id="femaleRadio"
                          value="2"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="password" class="col-sm-6 control-label">
                  <span class="text-danger text-req">*</span>Religion
                </label>
                <div class="col-sm-6">
                  <select name="religion" class="form-control">
                    {religionList.map((item) => {
                      return <option value={item}>{item}</option>;
                    })}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <div class="col-sm-4">
                  <TextField
                    type="date"
                    title="Date of Birth(In
					A.D.)"
                    name="dateofbirthad"
                    value={dateBirth}
                    onChange={(e) => {
                      setDateBirth(e.target.value);
                    }}
                    placeholder="YYYY-MM-DD"
                    autocomplete="off"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="birthDate" class="col-sm-6 control-label">
                  <span class="text-danger text-req">*</span>(In B.S.)
                </label>
                <div class="col-sm-4">
                  <input
                    type="text"
                    id="dateofbirthbs"
                    autocomplete="off"
                    name="dateofbirthbs"
                    placeholder="YYYY-MM-DD"
                    class="form-control cDate"
                    value="<?php if(isset($student_information['dateofbirthbs'])){echo $student_information['dateofbirthbs']; } else { echo set_value('dateofbirthbs'); } ?>"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <TextField
                  type="text"
                  title="Blood Group"
                  name="bloodgroup"
                  value={bloodGroup}
                  onChange={(e) => {
                    setBloodGroup(e.target.value);
                  }}
                  placeholder="Blood Group"
                  autocomplete="on"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <div class="col-sm-6">
                  <TextField
                    title="Student's Personal
                  Cell No"
                    name="studentPhoneNumber"
                    value={phoneNumber}
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                    }}
                    placeholder="Student Phone Number"
                    autocomplete="on"
                    maxlength="10"
                    type="phoneNumber"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="form-group">
            <div class="col-sm-6">
              <TextField title="Place of Birth" placeholder="Place of Birth" />
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <TextField title="Nationality" placeholder="Nationality" />
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <label for="password" class="col-sm-6 control-label">
                <span class="text-danger text-req">*</span>Ethnic Group
              </label>
              <div class="col-sm-6">
                <select name="ethnicgroup" class="form-control">
                  {ethnicGroupList.map((item) => {
                    return <option value={item}>{item}</option>;
                  })}
                </select>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="fathersName" class="col-sm-3 control-label">
              <span class="text-danger text-req">*</span>Father's Name
            </label>
            <div class="col-sm-6">
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
            </div>
            <div class="col-sm-3">
              <label for="fatherLiving" className=" control-label">
                <span class="text-danger text-req"></span>Living
              </label>
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
            </div>
          </div>
          <div class="form-group">
            <TextField
              title="Father's Occupation"
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

            <TextField
              title="Phone/Cell No"
              type="phoneNumber"
              name="fatherPhoneNumber"
              id="fatherPhoneNumber"
              placeholder="Father Phone/Cell No"
              class="form-control"
              maxlength="10"
              value="<?php if(isset($student_information['fathers_phone_no'])){echo $student_information['fathers_phone_no']; } else { echo set_value('fatherPhoneNumber'); } ?>"
              required
              autofocus
            />
          </div>
          <div class="form-group">

            <div class="col-sm-6">
            <TextField
            title="Mother's Name"
             type="text"
             name="mothersname"
             id="mothersname"
             placeholder="Mother's Name"
             class="form-control"
             value="<?php if(isset($student_information['mothers_name'])){echo $student_information['mothers_name']; } else { echo set_value('mothersname'); } ?>"
             autofocus
             required
            />

            </div>
            <div class="col-sm-3">
              <label for="motherLiving" className="control-label">
                <span class="text-danger text-req"></span>Living
              </label>
              <input
                type="radio"
                name="motherliving"
                id="motherLiving1"
                checked="checked"
                value="yes"
              />
              <input
                type="radio"
                name="motherliving"
                id="motherLiving2"
                value="no"
              />
            </div>
          </div>
          <div class="form-group">
          <TextField title="Mother's Occupation"  type="text"
                name="mothersoccupation"
                id="mothersoccupation"
                placeholder="Mother's Occupation"
                class="form-control"
                value="<?php if(isset($student_information['mothers_occupation'])){echo $student_information['mothers_occupation']; } else { echo set_value('mothersoccupation'); } ?>"
                autofocus
                required/>

                <TextField title="Phone/Cell No"  type="phoneNumber"
                name="motherPhoneNumber"
                id="motherPhoneNumber"
                placeholder="Mother Phone/Cell No"
                class="form-control"
                maxlength="10"
                value="<?php if(isset($student_information['mothers_phone_no'])){echo $student_information['mothers_phone_no']; } else { echo set_value('motherPhoneNumber'); } ?>"
                required
                autofocus />


          </div>
          <div class="form-group">
            <label for="addresspermanent" class="col-sm-3 control-label">
              <span class="text-danger text-req">*</span>Address (Permanent)
            </label>
            <div class="col-sm-9">
              <div class="row">
                <div class="col-sm-6">
                <TextField title="Address (Permanent)"   type="text"
                    name="permanentCity"
                    id="permanentCity"
                    placeholder="City"
                    class="form-control"
                    maxlength="100"
                    value="hy"
                    required
                    autofocus/>

                </div>
                <div class="col-sm-4">
                <TextField
                  type="text"
                  name="permanentCountry"
                  id="permanentCountry"
                  placeholder="Country"
                  class="form-control"
                  maxlength="100"
                  value="<?php if(isset($student_information['country'])){echo $student_information['country']; } else { echo set_value('permanentCountry'); } ?>"
                  required
                  autofocus
                />
                </div>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="addresslocal" class="col-sm-3 control-label">
              {" "}
              Local (if different)
            </label>
            <div class="col-sm-9">
              <div class="row">
                <div class="col-sm-6">
                  <TextField   type="text"
                    name="localCity"
                    id="localCity"
                    placeholder="City"
                    class="form-control"
                    value="<?php if(isset($student_information['local_address'])){echo $student_information['local_address']; } else { echo set_value('localCity'); } ?>"
                    maxlength="100"
                    autofocus/>
                </div>
                <div class="col-sm-4">
                  <TextField  type="text"
                    name="localCountry"
                    id="localCountry"
                    value="<?php if(isset($student_information['local_country'])){echo $student_information['local_country']; } else { echo set_value('localCountry'); } ?>"
                    placeholder="Country"
                    class="form-control"
                    maxlength="100"
                    autofocus/>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group">
            <TextField
            title="Student's Email Address
            (Gmail Only)"   type="email"
                id="studentemail"
                placeholder="Gmail ID"
                class="form-control"
                name="studentemail"
                value="<?php if(isset($student_information['email_address'])){echo $student_information['email_address']; } else { echo set_value('studentemail'); } ?>"
                required
                autofocus
                onblur="checkEmail();"/>
          </div>
          <div class="row">
					<div class="col-md-6">
						<div class="form-group">
							<label for="familyphone" class="col-sm-6 control-label"><span class="text-danger text-req">*</span>Family Phone</label>
							<div class="col-sm-6">
                <TextField title="* Family Phone" type="text" name="familyphone" id="familyphone" placeholder="Family Phone" class="form-control" maxlength="10" value="<?php if(isset($student_information['family_phone'])){echo $student_information['family_phone']; } else { echo set_value('familyphone'); } ?>" required autofocus/>


							</div>
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
            <TextField title="Local Phone No" type="text" name="localPhoneNumber" id="localPhoneNumber" placeholder="Local Phone No" value="<?php if(isset($student_information['local_phone'])){echo $student_information['local_phone']; } else { echo set_value('localPhoneNumber'); } ?>" class="form-control" maxlength="10" required autofocus />
						</div>
					</div>
				</div>
        <div class="row">
					<div class=" col-sm-offset-1 col-sm-11">
						<div class="form-group">
							<div class="col-sm-12">
              <TextField title="With whom will you stay while attending St. Xavier's College" type="hidden" name="stayingwith" id="stayingwith" class="form-control" value="family" required autofocus/>

							</div>
						</div>
					</div>
				</div>
        </form>
      </div>
    </div>
  );
}
