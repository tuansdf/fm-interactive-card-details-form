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
    <div className={"relative inline-block shadow-lg " + containerClassName}>
      {/* background */}
      <Image src={bgCardFront} alt="" />
      {/* body */}
      <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
        <Image src={cardLogo} alt="" />
        {/* card number */}
        <div>
          <div className="mb-2 text-xl tracking-wider">
            {number || "0000 0000 0000 0000"}
          </div>
          <div className="flex justify-between text-xs">
            {/* name */}
            <div className="uppercase">{name || "Jane Appleseed"}</div>
            {/* date */}
            <div>
              <span>{month || "00"}</span>/<span>{year || "00"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
