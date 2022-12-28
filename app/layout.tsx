import { ReactNode } from "react";
import { primaryFont } from "/app/fonts";
import "/styles/globals.css";

interface IProps {
  children: ReactNode;
}

export default function Layout({ children }: IProps) {
  return (
    <html lang="en">
      <head>
        <title>
          Interactive Card Details Form - Frontend Mentor - Tuan Nguyen
        </title>
      </head>
      <body className={primaryFont.className + " text-lg"}>
        <main>{children}</main>
      </body>
    </html>
  );
}
