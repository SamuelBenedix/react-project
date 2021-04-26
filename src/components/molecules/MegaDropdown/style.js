import { css } from "@emotion/css";
import { Gray } from "../../style";

export const styNavbar = css`
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
  transition: 0.2s all ease-in-out;
`;

export const styTitle = css`
  font-family: "Crimson Text", serif;
  text-transform: uppercase;
  width: 100%;
  margin-left: 8px;
  color: ${Gray};
  font-size: 20px;
  padding: 10px 10px 10px 0;
  letter-spacing: 1px;
  @media screen and (max-width: 970px) {
    display: none;
  }
`;

export const styMegaWrapper = css`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (max-width: 970px) {
    display: block;
  }
`;

export const styMegaItems = css`
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
  display: block;
  @media screen and (max-width: 970px) {
    display: block;
    max-width: 100%;
  }
`;

export const styMegaItem = css`
  font-size: 15px;
  padding: 10px 20px;
  text-transform: capitalize;
  color: ${Gray};
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  display: block;
  &:hover {
    color: $primary;
  }
`;

export const styWidget = css`
  display: block;
  overflow: hidden;
  height: 300px;
  width: 100%;
  img {
    width: 100%;
    transition: 1.2s all ease-in-out;
  }
  &:hover img {
    transform: scale(1.1);
  }
  @media screen and (max-width: 970px) {
    display: none;
  }
`;
