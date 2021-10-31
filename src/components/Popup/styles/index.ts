import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const Wrapper = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.8);
  z-index: 1;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 30px;
`;

export const Category = styled.span`
  text-transform: uppercase;
  opacity: 0.5;
  margin-bottom: 10px;
`;

export const Title = styled.span`
  font-size: 40px;
  line-height: 48px;
  margin-bottom: 15px;
`;

export const DollarSign = styled.span`
  font-size: 30px;
  line-height: 35px;
  margin-right: 5px;
`;

export const Price = styled.span`
  font-size: 60px;
  line-height: 72px;
  vertical-align: middle;
`;

export const PriceContainer = styled.div`
  margin-bottom: 32px;
`;

export const Modal = styled.div`
  display: flex;
  position: fixed;
  padding: 54px 50px 66px 50px;
  flex-direction: column;
  width: 384px;
  height: 536px;
  top: 184px;
  left: 0;
  right: 0;

  background: #ffffff;
  border-radius: 24px;
  z-index: 2;

  margin-left: auto;
  margin-right: auto;

  align-items: center;

  @media only screen and (max-width: 450px) {
    top: 15px;
    width: 93%;
    max-width: 384px;
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const OrderButton = styled.button`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  width: 288px;
  height: 56px;
  margin-top: 16px;
  padding: 16px 103px;

  font-weight: 500;
  color: #ffffff;

  border-radius: 16px;
  text-transform: uppercase;
  background: #4bcfa0;
  cursor: pointer;

  @media only screen and (max-width: 450px) {
    width: 100%;
    max-width: 250px;
    margin-left: auto;
    margin-right: auto;
  }
`;
export const StyledArrowIcon = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  hight: 100%;
`;

export const StyledIconContainer = styled.button`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  top: -10px;
  right: -10px;
  border-radius: 100%;
  background: #f2f2f2;
  cursor: pointer;
`;
export const StyledCloseIcon = styled(MdClose)`
  z-index: 1;
`;
