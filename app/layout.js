
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import {Inter, Roboto, Poppins} from "next/font/google"
import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import AuthProvider from  "../components/AuthProvider/AuthProvider"
const inter = Inter({subsets:["latin"]});

export const metadata = {
  title: "Blogireum",
  description: "This is the description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
        <AuthProvider>
        <div className="container">
        <Navbar/>
        <div>{children}</div>
        <Footer/>
        </div>
        </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
