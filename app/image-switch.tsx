import Image from "next/image";

interface IProps {
  mobileSrc: any;
  desktopSrc: any;
}

export default function ImageSwitch({ mobileSrc, desktopSrc }: IProps) {
  return (
    <div>
      <Image
        src={mobileSrc}
        alt=""
        className="w-full xl:hidden"
        loading="eager"
      />
      <Image
        src={desktopSrc}
        alt=""
        className="hidden h-screen xl:block"
        loading="eager"
      />
    </div>
  );
}
