import React, { FC } from "react";
import { Footer } from "@components/ui";
import { Sidebar } from "@components/ui";
import { CartSidebar } from "@components/ui";
import { Nav } from "@components/ui";

type Props = {
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Nav />
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
