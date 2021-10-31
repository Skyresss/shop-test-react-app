import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 32px;
  width: 352px;
  height: 256px;

  background: #ffffff;
  border-radius: 24px;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 24px 24px 40px rgba(75, 207, 160, 0.08);
    transform: scale(1.1);
  }

  @media only screen and (max-width: 450px) {
    padding-right: 0;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 120px;
    margin: 10px;

    transition: none;

    &:hover {
      transform: none;
    }
  }

  @media only screen and (max-width: 375px) {
    height: 80px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 30px;

  @media only screen and (max-width: 450px) {
    margin-bottom: 0px;
  }
`;

export const Category = styled.span`
  text-transform: uppercase;
  opacity: 0.5;
  margin-bottom: 10px;

  @media only screen and (max-width: 450px) {
    font-size: 12px;
    line-height: 16px;
  }

  @media only screen and (max-width: 375px) {
    font-size: 10px;
    line-height: 12px;
  }
`;
export const Title = styled.span`
  font-size: 40px;
  line-height: 48px;
  margin-bottom: 15px;

  @media only screen and (max-width: 450px) {
    font-size: 26px;
    line-height: 32px;
  }

  @media only screen and (max-width: 375px) {
    font-size: 17px;
    line-height: 21px;
  }
`;

export const DollarSign = styled.span`
  font-size: 30px;
  line-height: 35px;
  margin-right: 5px;

  @media only screen and (max-width: 450px) {
    font-size: 20px;
    line-height: 24px;
  }

  @media only screen and (max-width: 375px) {
    font-size: 13px;
    line-height: 16px;
  }
`;
export const Price = styled.span`
  font-size: 60px;
  line-height: 72px;
  vertical-align: middle;

  @media only screen and (max-width: 450px) {
    font-size: 40px;
    line-height: 48px;
  }

  @media only screen and (max-width: 375px) {
    font-size: 26px;
    line-height: 32px;
  }
`;
export const PriceContainer = styled.div`
  margin-bottom: 32px;

  @media only screen and (max-width: 450px) {
    margin-bottom: 0px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px;
  width: 64px;
  height: 56px;

  font-weight: 500;
  color: #4bcfa0;

  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background: #4bcfa0;
    border: none;
    color: #ffffff;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
