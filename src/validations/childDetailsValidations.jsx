import { MESSAGE } from "../constants/message";

export const validateChildDetails = (formData) => {
  const errors = {};

  console.log("formData",formData);
  

  const age = parseInt(formData.age);
  if (isNaN(age) || age < 1 || age > 150) {
    errors.age = MESSAGE.INVALID_AGE;
  }

  if (!formData.diagnosis) {
    errors.diagnosis = MESSAGE.INVALID_DIAGNOSIS;
  }

  if (!formData.schoolType) {
    console.log("jhgj");
    
    errors.schoolType = MESSAGE.INVALID_SCHOOLTYPE;
  }

  return errors;
};
