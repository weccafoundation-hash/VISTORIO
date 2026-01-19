import type { ReactNode } from "react";

export const metadata = {
  title: "Vistorio",
  description: "Vistorio Core Web and Reservation Pages",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
