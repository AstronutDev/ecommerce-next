import React, { FC } from "react";
import Ticker from "react-ticker";
import Marquee from "react-fast-marquee";

interface MarqueeProp {
  children: React.ReactNode[];
}

const MarqueeX: FC<MarqueeProp> = ({ children }) => {
  return (
    <>
      {/* <div className="flex flex-row item-center justify-center flex-1 px-16 py-10">
        {children}
      </div> */}
      {/* <Ticker offset={80}> */}
      {/* {() => ( */}
      <Marquee gradient={false}>
        <div className="flex flex-row item-center justify-center gap-2 flex-1 px-16 py-10">
          {children}
        </div>
      </Marquee>
      {/* </Ticker> */}
    </>
  );
};

export default MarqueeX;
