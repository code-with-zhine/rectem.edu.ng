import Header from "@/components/Header";
import "./globals.css";
import { Fira_Sans_Extra_Condensed } from "next/font/google";
import Footer from "@/components/Footer";

const firaSans = Fira_Sans_Extra_Condensed({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-firaSans",
});

export const metadata = {
  title: "RECTEM | REDEEMERS COLLEGE OF TECHNOLOGY AND MANAGEMENT",
  description:
    "REDEEMERS COLLEGE OF TECHNOLOGY AND MANAGEMENT, REDEMPTION CITY, OGUN STATE.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`max-w-screen-xl m-auto ${firaSans.className} bg-white dark:bg-white`}
      >
          <Header />
          {children}
          <Footer />
      </body>
    </html>
  );
}
