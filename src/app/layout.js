import { Inter } from "next/font/google";
import "./globals.css";
import "./assets/css/animate.min.css"
import "./assets/css/bootstrap.min.css"
import "./assets/css/font-awesome-pro.min.css"
import "./assets/css/flaticon_gerold.css"
import "./assets/css/nice-select.css"
import "./assets/css/backToTop.css"
import "./assets/css/owl.carousel.min.css"
import "./assets/css/odometer-theme-default.css"
import "./assets/css/magnific-popup.css"
import "./assets/css/main.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Akshat Portfolio",
  description: "Full Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
