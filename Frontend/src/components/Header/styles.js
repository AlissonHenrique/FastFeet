import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  border-bottom: 1px solid #dddddd;
  background: #fff;
  padding: 0 30px;

  div:nth-child(1) {
    display: flex;
    align-items: center;
    img {
      height: 26px;
    }
    ul.menu {
      display: flex;
      justify-content: space-between;
      align-items: center;
      li {
        padding: 0 10px;
        a {
          font-size: 15px;
          text-transform: uppercase;
          color: #999999;
          font-weight: bold;
          &:active,
          &:hover {
            color: #444444;
          }
        }
      }
    }
    div:nth-child(1) {
      border-right: 1px solid #dddddd;
      padding-right: 30px;
      margin-right: 20px;
    }
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    font-size: 14px;
    span {
      font-weight: bold;
      color: #666666;
    }
    button {
      color: #ee4d64;
      background: none;
      border: 0;
      text-align: right;
      width: 100px;
    }
  }
`;
