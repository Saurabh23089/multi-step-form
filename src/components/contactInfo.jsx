import { useState } from "react";
import { contactDetailsValidation } from "../validations/contactInfoValidations";
import PropTypes from "prop-types";
import { contactFields } from "../constants/commonConstant";
import ErrorMessage from "../constants/errorMeesage";

const ContactInfo = ({ formData, setFormData, prevStep, nextStep }) => {
  const [errors, setErrors] = useState({});

  const handleContactDetailsChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors({});
  };

  const handleContactDetailsSubmit = (e) => {
    e.preventDefault();
    const validationErrors = contactDetailsValidation(formData);
    if (Object.keys(validationErrors).length === 0) {
      nextStep();
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 overflow-x-hidden">
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-semibold text-blue-700 mb-6 text-center">
          Contact Details
        </h1>

        <form onSubmit={handleContactDetailsSubmit} className="space-y-5">
          {/* Parents Name */}

          {contactFields.map(({ id, name, label, type, placeholder }) => (
            <div key={id}>
              <label
                htmlFor={id}
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {label}
              </label>
              <input
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                value={formData[name] || ""}
                onChange={handleContactDetailsChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors[name] && (
                <ErrorMessage error={errors[name]}/>
              )}
            </div>
          ))}

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

ContactInfo.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

export default ContactInfo;