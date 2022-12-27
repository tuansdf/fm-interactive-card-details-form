import { ReactNode } from "react";

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
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
