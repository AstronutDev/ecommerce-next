import React, { FC, Children, isValidElement } from "react";
import { useKeenSlider } from "keen-slider/react";
interface ReturnType {
  children: any;
}

const ProductSlider: FC<ReturnType> = ({ children }) => {
  const [SliderRef, slider] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(s) {
      console.log("chaning to :", s);
    },
  });

  return (
    <>
      <div className="relative w-full h-full overflow-y-hidden">
        <div ref={SliderRef} className="keen-slider h-full transition-opacity">
          <button
            onClick={slider.current?.next}
            className="opacity-0 transition duration-150  bg-red-500 absolute top-1/2 -translate-x-1/2 z-20 w-16 h-16 flex items-center justify-center bg-hover-1 rounded-full bg-cover left-10 bg-[url('/images/cursor-left.png')]"
          >
            next
          </button>
          {Children.map(children, (child) => {
            if (isValidElement(child)) {
              return React.cloneElement(child, {
                className: `${
                  child.props.className ? `${child.props.className}` : ""
                }keen-slider__slide`,
              });
            }
            return child;
          })}
        </div>
      </div>
    </>
  );
};

export default ProductSlider;
