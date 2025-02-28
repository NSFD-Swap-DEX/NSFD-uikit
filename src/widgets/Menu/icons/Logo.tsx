import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 154 60" {...props}>
      <image width="104" height="60" href={isDark ? 'images/egg/LogoTextNewDark.png' : 'images/egg/LogoTextNewWhite.png'}/>
    </Svg>
  )
};

export default Logo;
