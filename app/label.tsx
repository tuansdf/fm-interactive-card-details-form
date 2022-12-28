import { LabelHTMLAttributes } from "react";

export default function Label({
  children,
  className,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={
        "mb-2 inline-block text-sm uppercase tracking-widest text-very-dark-violet " +
        className
      }
      {...props}
    >
      {children}
    </label>
  );
}
