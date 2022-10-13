import { useState } from "react";
import { Nav } from "@components/ui";
import { Heart } from "components/ui/Icons";
import { Sidebar } from "@components/ui";
import { CartSidebar } from "@components/ui";
import Layout from "../components/common/Layout";
const WishList = () => {
  const [isEmpty, setIsempty] = useState(true);

  return (
    <Layout>
      <Sidebar>
        <CartSidebar />
      </Sidebar>
      <div className="">
        <Nav />
        <div className="w-full">
          <div className="flex flex-col">
            {isEmpty ? (
              <div className="flex px-12 py-2 flex-col flex-1 justify-center items-center">
                <div className="border border-dashed border w-32 h-32 bg-primary p-12 rounded-lg text-primary flex items-center justify-center">
                  <Heart className="absolute" />
                </div>
                <h1 className="py-6 font-bold text-xl tracking-wide text-center">
                  Your wishlist is empty
                </h1>
                <p className="text-accents-6 px-10 text-center pt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt, quo eveniet obcaecati inventore rem, minima
                  explicabo sint quibusdam dignissimos nostrum atque ratione
                  cupiditate. Nostrum magnam deleniti ipsam porro provident
                  nemo?
                </p>
              </div>
            ) : (
              <h1>list card...</h1>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WishList;
