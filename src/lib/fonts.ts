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



export const ceraStencil = localFont({
  src: "../fonts/Cera_Stencil_PRO_Trial_Black.otf",
  variable: "--font-cera-stencil",
  weight: "900",
  display: "swap",
});