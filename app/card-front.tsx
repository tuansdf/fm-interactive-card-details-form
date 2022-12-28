import Image from "next/image";
import bgCardFront from "/public/bg-card-front.png";
import cardLogo from "/public/card-logo.svg";

interface IProps {
  name: string;
  number: string;
  month: string;
  year: string;
  containerClassName?: string;
}

export default function CardFront({
  name,
  number,
  month,
  year,
  containerClassName,
}: IProps) {
  return (
    <div className={"relative " + containerClassName}>
      {/* background */}
      <Image src={bgCardFront} alt="" className="w-full" priority />
      {/* body */}
      <div className="absolute inset-0 flex flex-col justify-between p-5 text-white xl:p-8">
        <Image src={cardLogo} alt="" className="w-14 xl:w-20" />
        {/* card number */}
        <div>
          <div className="mb-3 text-xl tracking-widest xl:mb-6 xl:text-3xl xl:tracking-wider">
            {number || "0000 0000 0000 0000"}
          </div>
          <div className="flex justify-between text-xs xl:text-base">
            {/* name */}
            <div className="uppercase tracking-widest">
              {name || "Jane Appleseed"}
            </div>
            {/* date */}
            <div className="tracking-widest">
              <span>{month || "00"}</span>/<span>{year || "00"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
