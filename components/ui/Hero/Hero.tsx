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
      <div className="mx-auto">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 py-20 ">
            <div className="text-4xl leading-10 font-extrabold text-white sm:text-5xl tracking-wide">
              <h2 className="mx-10">{headline}</h2>
            </div>
            <div className="mt-5 text-white">
              <p className="">{description}</p>
              <Link href={"#"} className="hover:underline cursor-pointer ">
                <a>
                  <button className="mt-4 p-6 font-extrabold bg-gray-400">
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
