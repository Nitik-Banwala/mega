import Navbar from "@/components/common/Navbar";
import "./globals.css";
import Footer from "@/components/common/Footer";


export const metadata = {
  title: "Mega Martians",
  description: "MEGA MARTIANS",
  image:'/meta.png'
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <body>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
