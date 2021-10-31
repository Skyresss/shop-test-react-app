import { useState } from 'react';
import {
  Wrapper,
  Title,
  Category,
  Price,
  Container,
  DollarSign,
  PriceContainer,
  Button,
  TextContainer,
} from './styles';
import Popup from '../Popup';

interface CardProps {
  name: string;
  category: string;
  price: number;
}

const Card: React.FC<CardProps> = ({ name, category, price }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <Wrapper>
        <TextContainer>
          <Category>{category}</Category>
          <Title>{name}</Title>
        </TextContainer>
        <Container>
          <PriceContainer>
            <DollarSign>$</DollarSign>
            <Price>{price}</Price>
          </PriceContainer>
          <Button onClick={() => setShowPopup(true)}>buy</Button>
        </Container>
      </Wrapper>
      {showPopup && (
        <Popup
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          name={name}
          category={category}
          price={price}
        />
      )}
    </>
  );
};

export default Card;
