import Link from "next/link";
import UserNav from "../UserNav";

const Nav = () => {
  return (
    <>
      <div className="p-4 flex item-center justify-between">
        <div>
          <Link href={"/"}>
            <a className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              NUTX
            </a>
          </Link>
        </div>
        <div className="text-lg flex justify-start  space-x-10 text-slate-500 ">
          <div className="p-2 hover:text-black">
            <Link href={"/"}>
              <a className="">All</a>
            </Link>
          </div>
          <div className="p-2 hover:text-black">
            <Link href={"/"}>
              <a className="Clothes">Accessories</a>
            </Link>
          </div>
          <div className="p-2 hover:text-black">
            <Link href={"/"}>
              <a className="Clothes">Clothes</a>
            </Link>
          </div>
          <div className="p-2 hover:text-black">
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
