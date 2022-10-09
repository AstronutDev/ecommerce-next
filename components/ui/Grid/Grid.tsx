import { FC, ReactNode } from "react";

type Props = {
  children: React.ReactNode;
};

const Grid: FC<Props> = ({ children }) => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">{children}</div>
    </>
  );
};

export default Grid;
