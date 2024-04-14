import React from "react";
import { useTheme } from "styled-components";

type Props = {
  icon: string;
  color?: string;
  size?: 12 | 16 | 20 | 24 | 32;
};

function Icons(props: Props) {
  const { icon, color = "black", size = 16 } = props;
  const theme = useTheme();

  return <i className={`fi ${icon}`} style={{ fontSize: `${size}px`, color: theme[color] }}></i>;
}

export default Icons;
