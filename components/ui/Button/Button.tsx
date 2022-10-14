import { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface ReturntypeX extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactNode[];
}

interface Returntype {
  children: ReactNode | ReactNode[];
  onClick: () => void;
  lable: string;
}

const Button: FC<ReturntypeX> = ({ children, ...rest }) => {
  // ...rest จะเป็นการ deconstruct ตัว KEY ทัั้งหมดที่ ReturntypeX มี ซึ่งรวมไปถึง Button attribute ด้วย
  // ซึงจะมีการ ทำ props พวก onClick onFocus ... มาให้
  return (
    <>
      <button
        //onClick={onClick}
        {...rest}
        className="bg-violet-900 text-center w-full max-w-[300px] p-4 text-white rounded-lg hover:bg-black"
      >
        {children}
      </button>
    </>
  );
};

export default Button;
