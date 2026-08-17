import localFont from "next/font/local";

export const yekanBakh = localFont({
  src: [
    {
      path: "../assets/fonts/YekanBakhFaNum-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/YekanBakhFaNum-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../assets/fonts/YekanBakhFaNum-SemiBold.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-yekanBakh",
  display: "swap",
});
