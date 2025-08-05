import { Inter, Roboto } from "next/font/google";
import localFont from "next/font/local";


export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  variable: "--font-roboto",
});


