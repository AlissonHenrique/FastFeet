import styled from 'styled-components';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';
import { darken } from 'polished';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 900px;
  height: 500px;
  margin: 0 auto;
  padding: 34px 0 0 0;
`;

export const BtnBack = styled(Link)`
  line-height: 36px;
  text-align: center;
  background: #ccc;
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
    background: ${darken(0.03, '#ccc')};
  }
`;
export const BtnAdd = styled.button`
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
  padding: 0 15px;
  margin-left: 15px;

  &:hover {
    background: ${darken(0.03, '#7D40E7')};
  }
`;
export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 34px;
  h1 {
    color: #444;
    font-size: 24px;
    font-weight: bold;
  }
`;
export const IconBack = styled(MdKeyboardArrowLeft)`
  color: #fff;
  font-size: 22px;
  position: relative;
  top: 6px;
`;
export const IconSave = styled(MdDone)`
  color: #fff;
  font-size: 22px;
  position: relative;
  top: 6px;
`;

export const ContainerBox = styled.div`
  background: #fff;
  border-radius: 4px;
  padding: 40px 30px;
  label {
    font-size: 14px;
    font-weight: bold;
    color: #444444;
  }
  input {
    width: 100%;
    height: 45px;
    border-radius: 4px;
    border: 1px solid #dddddd;
    margin: 7px 0 20px;
    padding: 12px 25px;
    font-size: 16px;
    color: #666666;
  }
  .line-one {
    display: flex;
    justify-content: space-between;
    label:nth-child(1) {
      input {
        width: 518px;
      }
    }
    label:nth-child(2) {
      input {
        width: 150px;
      }
    }
    label:nth-child(3) {
      input {
        width: 140px;
      }
    }
  }
  .line-two {
    display: flex;
    justify-content: space-between;
    label {
      input {
        width: 270px;
      }
    }
  }
`;
