import styled from 'styled-components';
import { InputProps } from '../';
import { IoIosCloseCircle } from 'react-icons/io';

export interface StyledIoIosCloseCircleProps {
  hidden: boolean;
}

export const ValidationLabel = styled.label`
  display: block;
  margin-top: -16px;
  width: 256px;
  height: 16px;

  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.02em;

  color: #e43f3f;
  opacity: ${(props) => (props.hidden ? '0' : '1.0')};
`;

export const InputContainer = styled('div')<InputProps>`
  display: flex;
  align-items: center;
  width: 288px;
  height: 56px;
  margin-bottom: 16px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-color: ${(props) =>
    props.validationError ? 'rgb(228,63,63)' : 'rgba(0, 0, 0, 0.2)'};
  border-color: ${(props) =>
    props.validationPassed ? '#4BCFA0 !important' : ''};
  border-radius: 16px;

  @media only screen and (max-width: 450px) {
    width: 100%;
    max-width: 250px;
    margin-left: auto;
    margin-right: auto;
  }
`;
export const Input = styled.input`
  margin: 0px 16px 0px 16px;
`;

export const StyledIoIosCloseCircle = styled(
  IoIosCloseCircle
)<StyledIoIosCloseCircleProps>`
  display: ${(props) => (props.hidden ? 'none' : 'block')};
  margin-right: 10px;
`;
