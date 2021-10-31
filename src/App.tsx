import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCards } from './state';
import styled from 'styled-components';
import CardList from './components/CardList';
import BuyCheapestButton from './components/BuyCheapestButton';
import GlobalStyle from './theme/GlobalStyle';

const MainWrapper = styled.div`
  max-width: 1176px;
  margin: auto;
  margin-top: 100px;

  @media only screen and (max-width: 450px) {
    max-width: 450px;
    margin-top: 20px;
  }
`;

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      dispatch(fetchCards());
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  return (
    <MainWrapper>
      <GlobalStyle />
      <CardList />
      <BuyCheapestButton />
    </MainWrapper>
  );
};

export default App;
