import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsappButton";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Templ Group of Institutions",
    description: "TEMPL Group of Institutions provides quality education and placement assistance."
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <WhatsAppButton/>
                
                <main>
                    {children}
                </main>
                <Footer/>
            </body>
        </html>
    );
}