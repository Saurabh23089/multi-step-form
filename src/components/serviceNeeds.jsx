import { useState } from "react";
import { serviceNeedsValidation } from "../validations/serviceNeedsValidation"; 4
import PropTypes from "prop-types";
import { frequencyOptions } from "../constants/commonConstant";
import ErrorMessage from "../constants/errorMeesage";

const ServiceNeeds = ({ formData, setFormData, prevStep, nextStep }) => {
  const [errors, setErrors] = useState({});
  const supportTypes = ["speechTherapy", "occupationalTherapy", "behavioral Support"]

  const handleServiceNeedsSubmit = (e) => {
    e.preventDefault();
    const validationErrors = serviceNeedsValidation(formData);
    if (Object.keys(validationErrors).length === 0) {
      nextStep();
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;



    setFormData((prev) => {
      if (type === "checkbox") {
        const prevValues = prev[name] || [];
        const newValues = checked
          ? [...prevValues, value]
          : prevValues.filter((item) => item !== value);

        return { ...prev, [name]: newValues };
      }

      return { ...prev, [name]: value };
    });

    setErrors({});
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 overflow-x-hidden">
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-semibold text-blue-700 mb-6 text-center">
          Service Needs
        </h1>

        <form onSubmit={handleServiceNeedsSubmit} className="space-y-5">
          {/* Support Types */}
          <div>
            <p className="block text-sm font-medium text-gray-700 mb-2">
              Specify Type of Support Needed
            </p>
            <div className="flex flex-col space-y-2">
              {supportTypes && supportTypes.map((supportType) => (
                <label key={supportType} className="flex items-center">
                  <input
                    id={supportType}
                    name="supportTypes"
                    type="checkbox"
                    value={supportType}
                    checked={formData?.supportTypes?.includes(supportType)}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                  <span className="ml-2 capitalize text-gray-700">
                    {supportType.replace(/([A-Z])/g, " $1")}
                  </span>
                </label>
              ))}
            </div>
            {errors.supportTypes && (
              <ErrorMessage error={errors.supportTypes}/>
            )}
          </div>

          <div>
            <label htmlFor="frequency" className="block text-sm font-medium text-gray-700 mb-1">
              Please Select Frequency
            </label>
            <select
              id="frequency"
              name="frequency"
              value={formData.frequency || ""}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                Select Frequency
              </option>
              {frequencyOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {errors.frequency && (
               <ErrorMessage error={errors.frequency}/>
            )}
          </div>

          <div>
            <label
              htmlFor="requirements"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Specific Requirements
            </label>
            <textarea
              id="requirements"
              name="requirements"
              placeholder="Enter any specific requirements"
              value={formData.requirements || ""}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={prevStep}
              className="w-full bg-gray-300 hover:bg-gray-400 text-black font-semibold py-2 rounded-lg transition duration-200"
            >
              Prev
            </button>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

ServiceNeeds.propTypes = {
  formData: PropTypes.object,
  setFormData: PropTypes.func,
  prevStep: PropTypes.func,
  nextStep: PropTypes.func
}

export default ServiceNeeds;

