import PropTypes from 'prop-types';

const FormSubmitted = ({ formData }) => {
  
    console.log("✅ Final submitted form data:", formData);
 

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-xl text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Form Submitted Successfully!</h1>
        <p className="text-gray-700 text-lg">
          Thank you for providing your details. We have received your submission.
        </p>
      </div>
    </div>
  );
};

FormSubmitted.propTypes = {
  formData:PropTypes.object.isRequired
}

export default FormSubmitted;
