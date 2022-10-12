import { FC, ReactNode } from "react";

interface ContainerProp {
  children: ReactNode | ReactNode[];
}

const Container: FC<ContainerProp> = ({ children }) => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto px-8 "> {children}</div>
    </>
  );
};

export default Container;
