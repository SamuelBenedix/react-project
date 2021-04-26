import { css } from "@emotion/css";
import { keyframes } from "@emotion/react";

const loading = keyframes`
  0% {
    width: 10px;
  }
  50% {
    width: 100px;
  }
  100% {
    width: 10px;
  }
`;

export const styImgLoad = css`
  background-color: rgba(235, 235, 235, 0.3);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const stySpinnerWrapper = css`
  background-color: #d1d1d1;
  width: 25%;
  height: 4px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
`;

export const stySpinner = css`
  height: 100%;
  width: 10px;
  background-color: #b09774;
  animation: ${loading} 2s linear infinite;
  -webkit-animation: ${loading} 2s linear infinite;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
`;
