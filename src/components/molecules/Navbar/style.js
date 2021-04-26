import { css } from "@emotion/css";
import { Primary, Secondary } from "../../style";

export const styNavbar = css`
  position: fixed;
  z-index: 99;
  background: #fff;
  max-height: 87px;
  width: 100%;
  padding: 0 20px;
  border-bottom: 1px solid rgba(176, 151, 116, 0.05);
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.05);
`;

export const styNavbarWrapper = css`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const styIconWrapper = css`
  display: flex;
  justify-content: space-between;
  margin: 0 15px 0 0;
`;

export const styIcon = css`
  margin-right: 14px;
  cursor: pointer;
  &:hover {
    color: ${Primary};
  }
  i {
    font-size: 18px;
    display: inline-block;
  }
`;

export const styCartNotify = css`
  &::after {
    content: attr(data-notify);
    font-size: 15px;
    color: #fff;
    text-align: center;

    display: block;
    position: absolute;
    line-height: 18px;

    height: 20px;
    width: 20px;

    top: 25%;
    margin-left: 10px;

    background-color: ${Primary};
    border-radius: 50%;
  }
`;

export const styToggle = css`
  visibility: hidden;
  display: none;
  @media screen and (max-width: 970px) {
    visibility: visible;
    opacity: 1;
    display: block;
    left: 0;
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    padding: 0.25rem 0.75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    border: none;
    margin: 0;
  }
`;

export const styCloseToggle = css`
  display: none;
  @media screen and (max-width: 970px) {
    display: block;
    margin: 0 15px 0 auto;
    font-size: 20px;
    cursor: pointer;
  }
`;

export const styLinks = css`
  margin: 0;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.4s all ease-in-out;
`;

export const styNavLink = css`
  list-style: none;
  padding: 30px 25px;

  @media screen and (max-width: 970px) {
    display: block;
    width: 100%;
    padding: 0;
  }
`;

export const styNavItem = css`
  font-size: 13px;
  color: ${Secondary};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: "Crimson Text", serif;
  :hover {
    color: ${Primary};
  }
  @media screen and (max-width: 970px) {
    padding: 2px 0;
    display: block;
    font-size: 15px;
    letter-spacing: 1px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.18);
  }
`;

export const styMegaArea = css`
  position: absolute;
  width: calc(100%);
  background-color: #fff;
  visibility: hidden;
  opacity: 0;
  min-width: 10rem;
  top: 100%;
  overflow: hidden;
  left: 0;
  right: 0;
  z-index: 1000;
  background-clip: padding-box;
  margin: 0.125rem 0 0;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.05);
  transition: 0.1s all;

  @media screen and (max-width: 970px) {
    position: static;
    display: none;
    visibility: hidden;
    opacity: 1;
    z-index: 1001;
    top: 65px;
    padding: 0;
    transition: all 1s ease;
    box-shadow: none;
    width: 100%;
  }
`;

export const styShowMega = css`
  visibility: visible;
  opacity: 1;
  @media screen and (max-width: 970px) {
    display: block;
    visibility: visible;
    opacity: 1;
  }
`;

export const stySearchBg = css`
  transform: translate(-50%, -50%);
  position: fixed;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  width: 100%;
  z-index: 999;
  text-align: center;
  background: #fbfbfb;
  visibility: hidden;
  transition: 0.4s all ease-in-out;
  -webkit-transition: 0.4s all ease-in-out;
  -moz-transition: 0.4s all ease-in-out;
  -ms-transition: 0.4s all ease-in-out;
  -o-transition: 0.4s all ease-in-out;
`;

export const styShowSearch = css`
  opacity: 1;
  visibility: visible;
  transform: translate(-50%, 0%);
  -webkit-transform: translate(-50%, 0%);
  -moz-transform: translate(-50%, 0%);
  -ms-transform: translate(-50%, 0%);
  -o-transform: translate(-50%, 0%);
`;

export const styWrapperCart = css`
  visibility: hidden;
  background-color: rgba(0, 0, 0, 0);
  position: fixed;
  height: 100vh;
  width: 100%;
  z-index: 1100;
  top: 0;
  right: 0;
  transition: all 0.4s;
`;

export const styShowCart = css`
  visibility: visible;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const styLinkWrapper = css`
  @media screen and (max-width: 970px) {
    visibility: hidden;
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    height: 100vh;
    width: 100%;
    z-index: 1100;
    top: 0;
    right: 0;
    display: block;
    transition: all 0.4s;
  }
`;

export const styNavLinks = css`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 970px) {
    overflow-x: hidden;
    position: fixed;
    left: -400px;
    padding: 15px;
    line-height: 50px;
    width: 390px;
    max-width: calc(100%-30px);
    height: 100vh;
    top: 0;
    background-color: #fff;
    z-index: 1101;
    flex-direction: column;
    display: flex;
    justify-content: flex-start;
    transition: all 0.4s;
    -webkit-transition: all 0.4s;
    -moz-transition: all 0.4s;
    -ms-transition: all 0.4s;
    -o-transition: all 0.4s;
    box-shadow: 3px 6px 0px rgba(0, 0, 0, 0.18);
  }
`;

export const styShowSidebar = css`
  @media screen and (max-width: 970px) {
    visibility: visible;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;
