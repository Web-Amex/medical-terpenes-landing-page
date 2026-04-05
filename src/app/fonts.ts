import localFont from "next/font/local";

const adelphiSans = localFont({
  src: "../../public/fonts/AdelphiPEVF-All.ttf",
  variable: "--font-sans",
  display: "swap",
});

const neueHaasUnicaW1GMono = localFont({
  src: [
    {
      path: "../../public/fonts/NeueHaasUnicaW1G/NeueHaasUnicaW1G-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueHaasUnicaW1G/NeueHaasUnicaW1G-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueHaasUnicaW1G/NeueHaasUnicaW1G-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueHaasUnicaW1G/NeueHaasUnicaW1G-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-mono",
  display: "swap",
});

export { adelphiSans, neueHaasUnicaW1GMono };

