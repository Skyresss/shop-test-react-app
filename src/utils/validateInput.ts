export interface ValidationStatus {
  status: boolean;
  errMessage: string;
}


export const validateInput = (
  inputValue: string,
  type: 'Name' | 'Number',
  setValidationError: (arg: ValidationStatus) => void
) => {
  const phonePattern = /^[0-9]+$/;
  const namePattern = /^[a-zA-Z]+$/;

  if (type === 'Number') {
    if (inputValue === '') {
      setValidationError({
        status: true,
        errMessage: 'This field is required',
      });
    } else if (!phonePattern.test(inputValue)) {
      setValidationError({
        status: true,
        errMessage: 'Only numbers allowed',
      });
    } else if (inputValue.length !== 12) {
      setValidationError({
        status: true,
        errMessage: 'Should contain 12 characters',
      });
    } else {
      setValidationError({
        status: false,
        errMessage: 'validation passed',
      });
    }
  }

  if (type === 'Name') {
    if (inputValue === '') {
      setValidationError({
        status: true,
        errMessage: 'This field is required',
      });
    } else if (!namePattern.test(inputValue)) {
      setValidationError({
        status: true,
        errMessage: 'Only letters allowed',
      });
    } else {
      setValidationError({
        status: false,
        errMessage: 'validation passed',
      });
    }
  }
};