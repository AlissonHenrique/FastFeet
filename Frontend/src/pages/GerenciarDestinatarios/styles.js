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
    width: 120px;
    padding-left: 25px;
  }
  .colum-02 {
    width: 240px;
  }
  .colum-03 {
    width: 750px;
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
    width: 120px;
    padding-left: 25px;
  }
  .colum-02 {
    width: 240px;
  }
  .colum-03 {
    width: 750px;
  }
  .colum-07 {
    width: 95px;
    padding-right: 25px;
    text-align: right;
   height:15px;
    svg {
      margin-right: 12px;
      cursor: pointer;
    }
  }
`;
export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  width: 150px !important;
  background: #fff;
  border: 1px solid #eeeeee;
  border-radius: 8px;
  position: relative;
  right: 30px;
  align-items: center;
  display: ${props => props.state || 'none'};
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
    border-bottom: 1px solid #eeeeee;
    padding: 7px 0;
    p {
      margin-left: 5px;
    }
  }
`;
