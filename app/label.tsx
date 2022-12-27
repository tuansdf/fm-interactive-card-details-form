import { LabelHTMLAttributes } from "react";

export default function Label({
  children,
  className,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label className={"mb-2 " + className} {...props}>
      {children}
    </label>
  );
}
