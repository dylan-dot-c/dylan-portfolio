import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Studio | Dylan Heslop",
    description: "A fullStack Web Developer Based in NY.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body>{children}</body>
        </html>
    );
}
