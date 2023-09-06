import "./globals.css";
import { Fira_Sans } from "next/font/google";

const firaSans = Fira_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-firaSans",
});

export const metadata = {
  title: "RECTEM | REDEEMERS COLLEGE OF TECHNOLOGY AND MANAGEMENT",
  description: "College of Technology and Management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`max-w-screen-xl m-auto ${firaSans.className} bg-white dark:bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
