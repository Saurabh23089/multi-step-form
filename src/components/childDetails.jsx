import { useState } from "react";
import { validateChildDetails } from "../validations/childDetailsValidations";
import PropTypes from "prop-types";
import { schoolOptions } from "../constants/commonConstant";
import { diagnosisOptions } from "../constants/commonConstant";
import ErrorMessage from "../constants/errorMeesage";

const ChildDetails = ({ formData, setFormData, nextStep }) => {
  const [errors, setErrors] = useState({});

  const handleChildDetailsSubmit = (e) => {
    e.preventDefault();
    const errors = validateChildDetails(formData);
    if (Object.keys(errors).length === 0) {
      nextStep();
    } else {
      setErrors(errors);
    }
  };

  const handleChildDetailsChange = (event) => {
    const { name, value } = event.target;
    setFormData(() => ({ ...formData, [name]: value }));
    setErrors({});
  };

  console.log("formData", formData);


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 overflow-x-hidden">
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-xl rounded-2xl shadow-xl">
        <h1 className="text-3xl font-semibold text-blue-700 mb-6 text-center">Child Details</h1>
        <form className="space-y-5" onSubmit={handleChildDetailsSubmit}>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Enter your age
            </label>
            <input
              name="age"
              type="number"
              value={formData.age}
              placeholder="Enter your age"
              onChange={handleChildDetailsChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.age && (
              <ErrorMessage error={errors.age} />
            )}
          </div>

          {/* Diagnosis */}
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select your Diagnosis
            </label>
            <select
              name="diagnosis"
              value={formData.diagnosis}
              onChange={handleChildDetailsChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                Select diagnosis
              </option>
              {diagnosisOptions.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.diagnosis && (
              <ErrorMessage error={errors.diagnosis} />
            )}
          </div>

          <div className="">
            <p className="block text-sm font-medium text-gray-700 mb-2">
              Select your School type
            </p>
            <div className="flex items-center gap-4">
              {schoolOptions.map((option) => (
                <label key={option.value} className="flex items-center">
                  <input
                    type="radio"
                    name="schoolType"
                    value={option.value}
                    checked={formData.schoolType === option.value}
                    onChange={handleChildDetailsChange}
                    className="text-blue-500 focus:ring-blue-500 w-4 h-4"
                  />
                  <span className="ml-2 text-gray-700">{option.label}</span>
                </label>
              ))}
            </div>
            {errors.schoolType && (
              <ErrorMessage error={errors.schoolType} />
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

ChildDetails.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func,
  prevStep: PropTypes.func.isRequired
}

export default ChildDetails;
