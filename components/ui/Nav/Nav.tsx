import Link from "next/link";
import UserNav from "../UserNav";

const Nav = () => {
  return (
    <>
      <div className="p-2 flex item-center justify-between">
        <div>
          <Link href={"/"}>
            <a className="text-lg font-extrabold text-transparent md:text-2xl  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              NUTX
            </a>
          </Link>
        </div>
        <div className="flex justify-start text-slate-500 py-1 space-x-1 md:space-x-10">
          <div className="hover:text-black text-sm md:text-lg">
            <Link href={"/"}>
              <a className="">All</a>
            </Link>
          </div>
          <div className="hover:text-black text-sm md:text-lg">
            <Link href={"/"}>
              <a className="Clothes">Accessories</a>
            </Link>
          </div>
          <div className="hover:text-black text-sm md:text-lg">
            <Link href={"/"}>
              <a className="Clothes">Clothes</a>
            </Link>
          </div>
          <div className="hover:text-black text-sm md:text-lg">
            <Link href={"/"}>
              <a className="Clothes">Shoe</a>
            </Link>
          </div>
          <UserNav />
        </div>
      </div>
    </>
  );
};

export default Nav;
