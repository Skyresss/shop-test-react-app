import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Container } from './styles';
import Card from '../Card';

const CardList: React.FC = () => {
  const { cardsInfo } = useTypedSelector((state) => state.cards);

  return (
    <Container>
      {cardsInfo.map((card) => (
        <Card
          key={card.name + card.price}
          name={card.name}
          category={card.category}
          price={card.price}
        />
      ))}
    </Container>
  );
};

export default CardList;
