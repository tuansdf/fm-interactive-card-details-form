import Image from "next/image";
import bgCardFront from "/public/bg-card-front.png";
import cardLogo from "/public/card-logo.svg";

interface IProps {
  name: string;
  number: string;
  month: string;
  year: string;
}

export default function Card({ name, number, month, year }: IProps) {
  return (
    <div className="relative inline-block">
      {/* background */}
      <Image src={bgCardFront} alt="" />
      {/* body */}
      <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
        <Image src={cardLogo} alt="" />
        {/* card number */}
        <div>
          <div className="text-2xl tracking-wider">{number}</div>
          <div className="mt-4 flex justify-between">
            {/* name */}
            <div>{name}</div>
            {/* date */}
            <div>
              <span>{month}</span>/<span>{year}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
