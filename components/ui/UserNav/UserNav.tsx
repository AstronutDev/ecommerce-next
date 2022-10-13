import { Bag, Heart } from "../Icons";

const UserNav = () => {
  return (
    <>
      <div>
        <ul className="flex flex-row cursor-pointer text-slate-500 p-1 space-x-4">
          <li className="transition ease-in-out delay-150 text-grey-500 hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-300 ">
            <Bag className="h-4 w-4" />
          </li>
          <li className="transition ease-in-out delay-150 text-grey-500 hover:-translate-y-1 hover:scale-110 hover:text-red-500 duration-300 ">
            <Heart className="h-4 w-4" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default UserNav;
