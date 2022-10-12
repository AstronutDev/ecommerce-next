import { FC } from "react";
import Link from "next/link";
import { Container } from "@components/ui";

interface HeropProps {
  headline: string;
  description: string;
}

const Hero: FC<HeropProps> = ({ headline, description }) => {
  return (
    <>
      <div className="">
        <Container>
          <div className="flex flex-col justify-center md:flex-row py-10 ">
            <div className="sm:text-sm sm:font-bold font-bold md:text-4xl leading-10  text-white ">
              <h2 className="mx-10">{headline}</h2>
            </div>
            <div className="mt-5 text-white max-w-[600px]">
              <p className="">{description}</p>
              <Link href={"#"} className=" cursor-pointer ">
                <a>
                  <button className="mt-4 p-6 font-extrabold bg-gray-400 rounded-full hover:bg-gray-500 hover:underline">
                    read it here
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Hero;
