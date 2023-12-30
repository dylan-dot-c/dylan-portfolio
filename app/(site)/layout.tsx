import type { Metadata } from "next";
import { Inter, Poppins, Lora, Roboto_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";

// const inter = Inter({ subsets: ["latin"] });
// const poppins = Poppins({ weight: ["300", "500", "800"], subsets: ["latin"] });
const lora = Roboto_Mono({ weight: ["500"], subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Dylan Heslop",
    description: "A fullStack Web Developer Based NY.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={lora.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
