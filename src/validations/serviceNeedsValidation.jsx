import { MESSAGE } from "../constants/message"

export const serviceNeedsValidation = (formData) => {
    
    const errors = {}

    if(formData.supportTypes.length === 0 || !formData.supportTypes){
       errors.supportTypes = MESSAGE.INVALID_SUPPORT
    }

    if(!formData.frequency) {
        errors.frequency = MESSAGE.INVALID_FREQUENCY
    }

    return errors;



}