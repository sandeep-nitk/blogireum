
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import {Inter, Roboto, Poppins} from "next/font/google"

const inter = Inter({subsets:["latin"]});

export const metadata = {
  title: "Blogireum",
  description: "This is the description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Navbar/>
        <div>{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
