import clsx from "clsx";
import { InputHTMLAttributes, useId } from "react";
import Label from "/app/label";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
  errorMessage?: string;
  label?: string;
}

export default function TextField({
  className,
  isError,
  errorMessage,
  label,
  ...props
}: IProps) {
  const id = useId();

  return (
    <div>
      {label ? <Label htmlFor={id}>{label}</Label> : null}
      <input
        id={id}
        type="text"
        className={clsx(
          "w-full rounded-lg border p-3 placeholder-dark-grayish-violet ",
          { "border-light-grayish-violet": !isError, "border-red": isError },
          className
        )}
        {...props}
      />
      {errorMessage ? (
        <span className="text-sm text-red">{errorMessage}</span>
      ) : null}
    </div>
  );
}
