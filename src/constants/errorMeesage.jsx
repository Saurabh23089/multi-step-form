import PropTypes from 'prop-types';

const ErrorMessage = ({error}) => {
    return (
        <p className="text-red-500 text-sm mt-1 font-medium">{error}</p>
    )
}

ErrorMessage.propTypes = {
    error: PropTypes.string.isRequired
}





export default ErrorMessage;