// @flow

import * as React from "react";
import cn from "classnames";
import TextSmall from "./TextSmall.react";

type Props = {|
  +children?: React.Node,
  +className?: string,
  +RootComponent?: React.ElementType,
  +color?: string,
  +size?: string,
  +wrap?: boolean,
|};

const Text = ({
  className,
  children,
  RootComponent,
  color = "",
  size = "",
  wrap,
  ...props
}: Props): React.Node => {
  const classes = cn(
    {
      [`text-wrap p-lg-6`]: wrap,
      [`text-${color}`]: color,
      [`${size}`]: size,
    },
    className
  );
  const Component = RootComponent || "div";
  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

Text.displayName = "Text";

Text.Small = TextSmall;

export default Text;
