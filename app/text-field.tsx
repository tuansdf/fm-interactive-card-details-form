import clsx from "clsx";
import { InputHTMLAttributes, useId } from "react";
import ErrorMessage from "/app/error-message";
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
          "w-full rounded-lg border p-3 placeholder-dark-grayish-violet outline-linear-gradient-2 focus:outline",
          {
            "border-light-grayish-violet outline-1": !isError,
            "border-red outline-0": isError,
          },
          className
        )}
        {...props}
      />
      {isError && errorMessage ? <ErrorMessage text={errorMessage} /> : null}
    </div>
  );
}
