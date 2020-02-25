import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { darken } from 'polished';
import img from '../../assets/icon-search.png';
import arrow from '../../assets/icon-arrow.svg';

export const Container = styled.div`
  max-width: 1200px;
  height: 500px;
  margin: 0 auto;
  padding: 34px 0 0 0;
  h1 {
    color: #444;
    font-size: 24px;
    font-weight: bold;
  }
`;
export const HeaderBox = styled.div`
  padding: 34px 0 0 0;
  display: flex;
  justify-content: space-between;
  a {
    line-height: 36px;
    text-align: center;
    background: #7d40e7;
    border: 0;
    color: #fff;
    border-radius: 4px;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: bold;
    transition: background 0.2s;
    height: 36px;
    line-height: 36px;
    padding: 10px 15px;
    margin-right: 15px;

    &:hover {
      background: ${darken(0.03, '#7D40E7')};
    }
  }
  input[type='text'] {
    width: 237px;
    border: 1px solid #dddddd;
    border-radius: 4px;
    height: 36px;
    font-size: 14px;
    padding: 0 0 0 40px;
    background: url(${img}) no-repeat #fff;
    background-position: 6% 50%;
  }
`;
export const IconAdd = styled(MdAdd)`
  color: #fff;
  font-size: 22px;
  position: relative;
  top: 6px;
`;
export const HeaderTable = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  height: 57px;
  .colum-01 {
    width: 240px;
    padding-left: 25px;
  }
  .colum-02 {
    width: 825px;
  }



  .colum-07 {
    width: 95px;
    padding-right: 25px;
    text-align: right;
  }
`;

export const Table = styled.div`
  display: flex;
  justify-content: flex-start;
  background: #fff;
  margin-bottom: 21px;
  text-align: left;
  align-items: center;
  height: 57px;
  font-size: 16px;
  color: #666666;
  border-radius: 4px;
  .colum-01 {
    width: 240px;
    padding-left: 25px;
  }
  .colum-02 {
    width: 825px;
  }
  .colum-07 {
    width: 95px;
    padding-right: 25px;
    text-align: right;
    margin-top: 80px;
    svg {
      margin-right: 12px;
    }
  }
`;
export const ModalBlack = styled.div`
  z-index: 1;
  position: absolute;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
   display: ${props => props.state || 'none'};
`;
export const BoxModal = styled.div`
  z-index: 2;
  position:absolute;
  padding: 22px;
  width: 450px;
  height: auto;
  border-radius: 4px;
  background: #fff;
  top:31%;
  left:0;
  right:0;
  margin:auto;
   display: ${props => props.state || 'none'};
  h1,
  h2 {
    font-size: 14px;
    font-weight: bold;
    color: #444444;
    text-transform: uppercase;
  }
  p {
    font-size: 16px;
    line-height: 26px;
    color: #666666;
    margin: 15px 0;
  }
  textarea {
    width: 100%;
    height: 127px;
    margin-top: 15px;
    border: 1px solid #dddddd;
    border-radius: 4px;
    border-color: #dddddd;
    padding: 15px;
    font-size: 16px;
    font-family: 'Roboto';
    color: #999999;
  }
  button {
    width: 100%;
    height: 45px;
    background: #ee4d64;
    line-height: 45px;
    text-align: center;
    color: #fff;
    border: 0;
    border-radius: 4px;
    margin-top: 15px;
    font-weight: bold;
    font-size: 16px;
  }
`;
export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  width: 220px !important;
  background: #fff;
  border: 1px solid #eeeeee;
  border-radius: 8px;
  position: relative;
  right: 30px;
  align-items: left;

  &::before {
    content: '';
    background: url(${arrow});
    display: block;
    width: 10px;
    height: 10px;
    position: absolute;
    top: -10px;
  }
  button {
    display: flex;
    width: 100%;
    font-size: 16px;
    color: #999999;
    background: transparent;
    border: 0;
    cursor: pointer;

    border-bottom: 1px solid #eeeeee;
    padding: 7px 0;
    p {
      margin-left: 5px;
    }
  }
`;
