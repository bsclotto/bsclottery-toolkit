import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M21.41,3.44H18.85c0-.28,0-.57,0-.85A.58.58,0,0,0,18.28,2H5.72a.58.58,0,0,0-.58.59c0,.28,0,.57,0,.85H2.59A.59.59,0,0,0,2,4a12.74,12.74,0,0,0,1.93,7,6.08,6.08,0,0,0,4.65,3,6.18,6.18,0,0,0,1.26,1.07v2.6h-1a2.16,2.16,0,0,0-2.15,2.16v1h0a.59.59,0,1,0,0,1.17H17.33a.59.59,0,1,0,0-1.17h0v-1a2.16,2.16,0,0,0-2.15-2.16h-1v-2.6A6,6,0,0,0,15.42,14a6.08,6.08,0,0,0,4.65-3A12.74,12.74,0,0,0,22,4,.59.59,0,0,0,21.41,3.44ZM4.91,10.36A11.39,11.39,0,0,1,3.18,4.62h2A19.54,19.54,0,0,0,7,11.72a9.35,9.35,0,0,0,.49.89A5.65,5.65,0,0,1,4.91,10.36Zm11.21,9.49v1H7.88v-1a1,1,0,0,1,1-1h6.28A1,1,0,0,1,16.12,19.85ZM13,17.69H11V15.6a4.06,4.06,0,0,0,2,0Zm.37-3.49-.08,0a2.76,2.76,0,0,1-2.54,0l-.08,0a4.67,4.67,0,0,1-1.32-1.09L9.25,13A8.92,8.92,0,0,1,8.09,11.2a19.29,19.29,0,0,1-1.77-8H17.68a19.29,19.29,0,0,1-1.77,8A8.92,8.92,0,0,1,14.75,13l-.08.09A4.67,4.67,0,0,1,13.35,14.2Zm5.74-3.84a5.65,5.65,0,0,1-2.62,2.25,9.35,9.35,0,0,0,.49-.89,19.54,19.54,0,0,0,1.82-7.1h2A11.39,11.39,0,0,1,19.09,10.36Z" />
    </Svg>
  );
};

export default Icon;