import { FC } from "react";

interface ReturnType {
  children: any;
}

const ProductSlider: FC<ReturnType> = ({ children }) => {
  return (
    <>
      <div className="relative w-full h-full overflow-y-hidden">
        <div className="h-full transition-opacity duration-150">{children}</div>
      </div>
    </>
  );
};

export default ProductSlider;
