import React, { FC } from "react";
import { Footer } from "@components/ui";
import { Sidebar } from "@components/ui";
import { CartSidebar } from "@components/ui";
type Props = {
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Sidebar>
        <CartSidebar />
      </Sidebar>
      <div>{children}</div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
