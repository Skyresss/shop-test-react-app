import { useEffect, useState } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { validateInput } from '../../utils';
import {
  Wrapper,
  Modal,
  OrderButton,
  StyledArrowIcon,
  StyledIconContainer,
  StyledCloseIcon,
  Category,
  DollarSign,
  Price,
  PriceContainer,
  Title,
} from './styles';
import ValidationInput from '../ValidationInput';

interface PopupProps {
  setShowPopup: (arg: boolean) => void;
  showPopup: boolean;
  name: string;
  category: string;
  price: number;
}

const Popup: React.FC<PopupProps> = ({
  showPopup,
  name,
  category,
  price,
  setShowPopup,
}) => {
  const [formData, setFormData] = useState({
    Name: '',
    Number: '',
  });
  const [showArrowIcon, setShowArrowIcon] = useState(false);
  const [validationFailed, setValidationFailed] = useState(false);
  const [nameValidationError, setNameValidationError] = useState({
    status: false,
    errMessage: 'no error message',
  });
  const [phoneValidationError, setPhoneValidationError] = useState({
    status: false,
    errMessage: 'no error message',
  });

  const resetInputs = () => {
    setShowPopup(!showPopup);
    setFormData({
      Name: '',
      Number: '',
    });
    setNameValidationError({
      status: false,
      errMessage: 'no error message',
    });
    setPhoneValidationError({
      status: false,
      errMessage: 'no error message',
    });
    setShowArrowIcon(!showArrowIcon);
  };

  useEffect(() => {
    if (
      nameValidationError.status === true ||
      phoneValidationError.status === true
    ) {
      setValidationFailed(true);
    } else setValidationFailed(false);
  }, [nameValidationError, phoneValidationError]);

  return (
    <>
      <Wrapper
        onClick={(e) => {
          e.stopPropagation();
          resetInputs();
        }}
      />
      <Modal
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <StyledIconContainer onClick={() => resetInputs()}>
          <StyledCloseIcon size="15px" />
        </StyledIconContainer>

        <Category>{category}</Category>
        <Title>{name}</Title>
        <PriceContainer>
          <DollarSign>$</DollarSign>
          <Price>{price}</Price>
        </PriceContainer>
        <form
          noValidate
          onSubmit={(e) => {
            if (validationFailed === true) {
              e.preventDefault();
              return;
            } else {
              e.preventDefault();
              resetInputs();
              console.log(formData);
            }
          }}
        >
          <ValidationInput
            validationError={nameValidationError}
            setValidationError={setNameValidationError}
            inputValue={formData}
            setInputValue={setFormData}
            type="Name"
          />
          <ValidationInput
            validationError={phoneValidationError}
            setValidationError={setPhoneValidationError}
            inputValue={formData}
            setInputValue={setFormData}
            type="Number"
          />

          <OrderButton
            type="submit"
            onMouseEnter={() => setShowArrowIcon(!showArrowIcon)}
            onMouseLeave={() => setShowArrowIcon(!showArrowIcon)}
            onClick={() => {
              validateInput(formData.Name, 'Name', setNameValidationError);
              validateInput(formData.Number, 'Number', setPhoneValidationError);
            }}
          >
            Order
            <StyledArrowIcon>
              {showArrowIcon && <HiArrowNarrowRight size="20px" />}
            </StyledArrowIcon>
          </OrderButton>
        </form>
      </Modal>
    </>
  );
};

export default Popup;
