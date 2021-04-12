import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M15.12,2.64c-3.33,0-6.87,1.09-6.87,3.12V8.25a.63.63,0,1,0,1.25,0V7.6a11.31,11.31,0,0,0,5.62,1.28A11.26,11.26,0,0,0,20.74,7.6v.65c0,.61-1.54,1.59-4.42,1.83a.63.63,0,0,0,.05,1.25h.05a9.81,9.81,0,0,0,4.32-1.24v.67c0,.53-1.13,1.3-3.23,1.67a.62.62,0,0,0,.11,1.24h.11a8.37,8.37,0,0,0,3-1.05v.65c0,.53-1.13,1.3-3.23,1.67a.62.62,0,0,0-.51.72.64.64,0,0,0,.62.52h.11a8.36,8.36,0,0,0,3-1.06v.66c0,.53-1.13,1.3-3.23,1.67a.62.62,0,0,0-.51.72.63.63,0,0,0,.62.51h.11a8.37,8.37,0,0,0,3-1.05v.65c0,.61-1.54,1.59-4.42,1.83a.62.62,0,0,0-.57.67.61.61,0,0,0,.62.57h.05C19.19,21.08,22,20,22,18.24V5.76C22,3.73,18.45,2.64,15.12,2.64Zm0,5c-3.43,0-5.62-1.11-5.62-1.87s2.19-1.88,5.62-1.88S20.74,5,20.74,5.76,18.55,7.63,15.12,7.63Z" />
      <path d="M8.88,10.13C5.55,10.13,2,11.22,2,13.25v5c0,2,3.54,3.12,6.87,3.12s6.87-1.09,6.87-3.12v-5C15.75,11.22,12.21,10.13,8.88,10.13Zm5.62,8.11c0,.77-2.19,1.88-5.62,1.88S3.26,19,3.26,18.24v-.65a11.26,11.26,0,0,0,5.62,1.28,11.31,11.31,0,0,0,5.62-1.28Zm0-2.49c0,.76-2.19,1.87-5.62,1.87s-5.62-1.11-5.62-1.87V15.1a11.37,11.37,0,0,0,5.62,1.27A11.42,11.42,0,0,0,14.5,15.1Zm-5.62-.63c-3.43,0-5.62-1.11-5.62-1.87s2.19-1.87,5.62-1.87,5.62,1.11,5.62,1.87S12.31,15.12,8.88,15.12Z" />
    </Svg>
  );
};

export default Icon;
