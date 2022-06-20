import styled from "styled-components";
export const Header = styled.nav`
  background-color: #111;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0px 20px;
  font-size: 16px;
  height: 70px;
  border: none;
  justify-content: space-between;
  label.ModeWhite {
    display: none;
  }
  label {
    width: 34px;
    height: 34px;
    margin-right: 40px;
    background: #272728;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    animation: 0.5s;
    transition: 0.5s;
    cursor: pointer;
    div.BoxTextMode {
      position: absolute;
      margin-top: 80px;
      background: #38d430;
      color: #111;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px 10px;
      border-radius: 5px;
      margin-right: -0px;
      display: none;
      animation: 0.5s;
      transition: 0.5s;
      z-index: 1;
    }
    img.ImageMode {
      width: 26px;
    }
    :hover {
      animation: 0.5s;
      transition: 0.5s;
      background: #4a4a4a;
      div.BoxTextMode {
        display: block;
      }
    }
  }
  div {
    margin-right: 20px;
    img.ImageLogo {
      width: 80px;
    }
    a {
      text-decoration: none;
      color: #b4b4b4 !important;
      padding: 10px 20px;
      font-size: 18px;
      :hover {
        color: #fff !important;
      }
    }
  }
`;
