import { useState } from 'react';
import { Button } from './styles';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Popup from '../Popup';

const BuyCheapestButton: React.FC = () => {
  const { cardsInfo } = useTypedSelector((state) => state.cards);
  const [showCheapestPopup, setShowCheapestPopup] = useState(false);
  const cheapestCard = cardsInfo.find(
    (el) => el.price === Math.min(...cardsInfo.map((el) => el.price))
  );

  return (
    <>
      {showCheapestPopup && (
        <Popup
          name={cheapestCard!.name}
          category={cheapestCard!.category}
          price={cheapestCard!.price}
          showPopup={showCheapestPopup}
          setShowPopup={setShowCheapestPopup}
        />
      )}
      <Button onClick={() => setShowCheapestPopup(true)}>Buy Cheapest</Button>
    </>
  );
};

export default BuyCheapestButton;
