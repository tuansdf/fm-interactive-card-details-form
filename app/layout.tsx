import { ReactNode } from "react";
import { primaryFont } from "/app/fonts";

interface IProps {
  children: ReactNode;
}

export default function Layout({ children }: IProps) {
  return (
    <html>
      <head>
        <title>
          Interactive Card Details Form - Frontend Mentor - Tuan Nguyen
        </title>
      </head>
      <body className={primaryFont + " text-lg"}>
        <main>{children}</main>
      </body>
    </html>
  );
}
