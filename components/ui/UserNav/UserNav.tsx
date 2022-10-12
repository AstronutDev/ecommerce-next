import { Bag, Heart } from "../Icons";

const UserNav = () => {
  return (
    <>
      <div>
        <ul className="flex flex-row cursor-pointer text-slate-500 space-x-8 p-2">
          <li className="transition ease-in-out delay-150 text-grey-500 hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-300 ">
            <Bag />
          </li>
          <li className="transition ease-in-out delay-150 text-grey-500 hover:-translate-y-1 hover:scale-110 hover:text-red-500 duration-300 ">
            <Heart />
          </li>
        </ul>
      </div>
    </>
  );
};

export default UserNav;
