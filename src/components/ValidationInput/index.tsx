import React from 'react';
import { InputContainer, ValidationLabel, Input } from './styles';
import { StyledIoIosCloseCircle } from './styles';
import { validateInput, ValidationStatus } from '../../utils';

export interface InputProps {
  validationError: boolean;
  validationPassed: boolean;
}

export interface ValidationInputProps {
  validationError: ValidationStatus;
  setValidationError: (arg: ValidationStatus) => void;
  inputValue: { Name: string; Number: string };
  setInputValue: (arg: { Name: string; Number: string }) => void;
  type: 'Name' | 'Number';
}

const ValidationInput: React.FC<ValidationInputProps> = ({
  validationError,
  setValidationError,
  inputValue,
  setInputValue,
  type,
}) => {
  return (
    <>
      <InputContainer
        validationError={validationError.status}
        validationPassed={
          validationError.errMessage === 'validation passed' &&
          !validationError.status
        }
      >
        <Input
          onBlur={() => {
            validateInput(inputValue[type], type, setValidationError);
          }}
          type="text"
          name={type}
          required
          placeholder={type}
          value={inputValue[type]}
          onChange={(e) => {
            setInputValue({
              ...inputValue,
              [e.target.name]: e.target.value,
            });
            setValidationError({
              status: false,
              errMessage: 'no validation error',
            });
          }}
        />
        <StyledIoIosCloseCircle
          hidden={!validationError.status}
          color="#E43F3F"
          size="30px"
        />
      </InputContainer>
      {validationError.status ? (
        <ValidationLabel hidden={false}>
          {validationError.errMessage}
        </ValidationLabel>
      ) : (
        <ValidationLabel hidden={true}>
          {validationError.errMessage}
        </ValidationLabel>
      )}
    </>
  );
};

export default ValidationInput;
