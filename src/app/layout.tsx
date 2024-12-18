import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./styles/globals.scss";
import NavBar from "./navContainer";
import Nav from "./nav";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
    title: "Andrew Dang",
    description: "Andrew Dang Portfolio",

    viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${poppins.className}  mainLayout`}>
                <NavBar>
                    <Nav />
                </NavBar>
                {children}
            </body>
        </html>
    );
}
