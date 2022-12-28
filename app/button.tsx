import { ButtonHTMLAttributes } from "react";

export default function Button({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={
        "w-full rounded-lg bg-very-dark-violet p-4 text-xl text-white " +
        className
      }
      {...props}
    >
      {children}
    </button>
  );
}
