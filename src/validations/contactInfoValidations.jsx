import { MESSAGE } from "../constants/message";

export const contactDetailsValidation = (formData) => {

    const errors = {};

    if (!formData.email
        || formData.email.startsWith('@')
        || formData.email.endsWith('@')
        || !formData.email.includes('.')
    ) {
        errors["email"] = MESSAGE.INVALID_EMAIL
    }

    if (!formData.parentsName || formData.parentsName.length < 3) {
        errors['parentsName'] = MESSAGE.INVALID_NAME;
    }

    if (!formData.phoneNumber
        || formData.phoneNumber.startsWith('0')
        || formData.phoneNumber.length !== 10
    ) {
        errors['phoneNumber'] = MESSAGE.INVALID_PHONE;
    }

    return errors;

}