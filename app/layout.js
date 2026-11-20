import "./globals.css";
// Components
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsappButton";
import Footer from "@/components/Footer";
import Enquiry from "@/components/Enquiry";
// Font Awesome
import "@fortawesome/fontawesome-free/css/all.min.css";

// Poppins Fonts
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

// Inter Fonts
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

import Script from "next/script";
// ==========================================
// SEO METADATA
// ==========================================

export const metadata = {
    metadataBase: new URL("https://www.templgroup.in"),

    // Website Title
    title: {
    default: "TEMPL Group | NAAC-Accredited College in Muradnagar, Ghaziabad",
    template: "%s | TEMPL Group of Institutions",
},

    // Meta Description
    description:
        "TEMPL Group of Institutions provides quality education in Ghaziabad. Explore BCA, BBA, B.Com, B.Ed, M.Ed, LL.B and other professional courses.",

    // Search Engine Verification
    verification: {
        google: "hAo2IrOADCRsT3jT_f1yUjIegQk4wg29UJ8B6tLddHc",

        other: {
            "p:domain_verify":
                "080638e0a74886a685aacc9ea52fc166",
        },
    },

    // LLMS.txt Reference
    alternates: {
        types: {
            "text/plain": [
                {
                    url: "/llms.txt",
                    title: "LLMs.txt",
                },
            ],
        },
    },

    // Open Graph Metadata
    openGraph: {
        title:
            "TEMPL Group | NAAC-Accredited College in Muradnagar, Ghaziabad",

        description:
            "NAAC-accredited college in Muradnagar, Ghaziabad. BCA, BBA, B.Com, B.Ed, M.Ed, LL.B & more. CCSU Meerut-affiliated. 40% scholarship. Admission 2026 open!",

        url: "/",

        siteName: "TEMPL Group of Institutions",

        images: [
            {
                url: "/Images/admission-open-2026.webp",
                width: 1200,
                height: 630,
                alt: "TEMPL Group of Institutions - Admission 2026",
            },
        ],

        locale: "en_IN",

        type: "website",
    },

    // Twitter / X Metadata
    twitter: {
        card: "summary_large_image",

        title:
            "TEMPL Group | NAAC-Accredited College in Muradnagar, Ghaziabad",

        description:
            "Explore BCA, BBA, B.Com, B.Ed, M.Ed and LL.B courses at TEMPL Group of Institutions. Admissions 2026 open!",

        images: [
            "/Images/admission-open-2026.webp",
        ],
    },
};

// ==========================================
// ROOT LAYOUT
// ==========================================

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                {/* =================================
                    RESOURCE HINTS
                ================================= */}

                <link
                    rel="preconnect"
                    href="https://www.googletagmanager.com"
                />

                <link
                    rel="preconnect"
                    href="https://fonts.googleapis.com"
                />

                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />

                <link
                    rel="dns-prefetch"
                    href="https://cdnjs.cloudflare.com"
                />

                <link
                    rel="dns-prefetch"
                    href="https://cdn.jsdelivr.net"
                />

                {/* Website Favicon */}

                <link
                    rel="icon"
                    href="/favicon.ico"
                    sizes="any"
                />

            </head>

            <body>

                {/* =================================
                    GOOGLE TAG MANAGER
                ================================= */}

                <Script
                    id="google-tag-manager"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function(w,d,s,l,i){
                                w[l]=w[l]||[];
                                w[l].push({
                                    'gtm.start': new Date().getTime(),
                                    event:'gtm.js'
                                });

                                var f=d.getElementsByTagName(s)[0],
                                j=d.createElement(s),
                                dl=l!='dataLayer'?'&l='+l:'';

                                j.async=true;
                                j.src=
                                'https://www.googletagmanager.com/gtm.js?id='+i+dl;

                                f.parentNode.insertBefore(j,f);

                            })(window,document,'script','dataLayer','GTM-W9F3NQRD');
                        `,
                    }}
                />

                {/* Google Tag Manager NoScript */}

                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-W9F3NQRD"
                        height="0"
                        width="0"
                        style={{
                            display: "none",
                            visibility: "hidden",
                        }}
                        title="Google Tag Manager"
                    />
                </noscript>

                {/* =================================
                    WEBSITE NAVBAR
                ================================= */}

                <Navbar />

                {/* =================================
                    MAIN PAGE CONTENT
                ================================= */}

                <main
                    id="main-content"
                    tabIndex={-1}
                    role="main"
                >
                    {children}
                </main>

                {/* =================================
                    WEBSITE FOOTER
                ================================= */}

                <Footer />

                {/* =================================
                    WHATSAPP BUTTON
                ================================= */}

                <WhatsAppButton />
                {/*Enquiry button */}
                <Enquiry/>

            </body>
        </html>
    );
}
