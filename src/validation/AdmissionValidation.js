import * as Yup from "yup";

export const AdmissionValidation = Yup.object({
  firstName: Yup.string().required("This field cannot be empty"),
  middleName: Yup.string().required("This field cannot be empty"),
  lastName: Yup.string().required("This field cannot be empty"),
  engDateBirth: Yup.date().required("This field cannot be empty"),
  nepDateBirth: Yup.date().required("This field cannot be empty"),
  religion: Yup.string().required("This field cannot be empty"),
  bloodGroup: Yup.string().required("This field cannot be empty"),
  studentNumber: Yup.number().required("This field cannot be empty"),
  placeOfBirth: Yup.string().required("This field cannot be empty"),
  nationality: Yup.string().required("This field cannot be empty"),
  // ethnicGroup: Yup.string().required("This field cannot be empty"),
  fatherName: Yup.string().required("This field cannot be empty"),
  fatherOccupation: Yup.string().required("This field cannot be empty"),
  fatherNumber: Yup.string().required("This field cannot be empty"),
  motherName: Yup.string().required("This field cannot be empty"),
  motherOccupation: Yup.string().required("This field cannot be empty"),
  motherNumber: Yup.string().required("This field cannot be empty"),
  permanentCity: Yup.string().required("This field cannot be empty"),
  permanentCountry: Yup.string().required("This field cannot be empty"),
  localCity: Yup.string().required("This field cannot be empty"),
  localCountry: Yup.string().required("This field cannot be empty"),
  studentEmail: Yup.string().required("This field cannot be empty"),
  familyNumber: Yup.string().required("This field cannot be empty"),
  localNumber: Yup.string().required("This field cannot be empty"),
  areaOfInterest: Yup.string().required("This field cannot be empty"),
  //   gender: Yup.boolean()
  //     .oneOf([true, false])
  //     .required("This field cannot be empty"),
});
