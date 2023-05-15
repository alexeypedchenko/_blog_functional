import React, { FC } from "react";

type IconName = "arrow-right" | "close" | "menu";

type Props = {
  width?: number;
  height?: number;
  className?: string;
  name: IconName;
};

const Icon: FC<Props> = ({ width = 24, height = 24, className, name }) => {
  return (
    <svg width={width} height={height} className={className}>
      <use xlinkHref={`/icons-sprite.svg#icon-${name}`} />
    </svg>
  );
};

export default Icon;
