import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-2 max-w-5xl m-auto h-full">
        {children}
      </div>
    </>
  );
};

export default Layout;
