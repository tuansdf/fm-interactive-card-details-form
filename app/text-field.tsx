import { InputHTMLAttributes } from "react";

export default function TextField({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="text"
      className={
        "w-full rounded-lg border border-light-grayish-violet p-3 text-xl placeholder-dark-grayish-violet " +
        className
      }
      {...props}
    />
  );
}
