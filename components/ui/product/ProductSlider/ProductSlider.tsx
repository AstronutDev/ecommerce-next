import { FC } from "react";

interface ReturnType {
  children: any;
}

const ProductSlider: FC<ReturnType> = ({ children }) => {
  return (
    <>
      <div className="relative w-full h-full overflow-y-hidden">
        <div className="h-full transition-opacity">{children}</div>
      </div>
    </>
  );
};

export default ProductSlider;
