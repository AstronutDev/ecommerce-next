import React, { FC, HTMLAttributes, ReactNode } from "react";

interface ContainerProp {
  children: ReactNode | ReactNode[];
  el?: React.ComponentType<HTMLAttributes<HTMLElement>>;
}

const Container: FC<ContainerProp> = ({ children, el: El = "div" }) => {
  return (
    <>
      <El className="max-w-[1200px] mx-auto px-8 "> {children}</El>
    </>
  );
};

export default Container;
