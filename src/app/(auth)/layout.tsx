import "../css/globals.css";
import LogoIcon from "@/assets/logo.svg";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen w-screen bg-entertain-third">
        <main className="mt-16 flex h-screen w-full flex-col items-center justify-start gap-16">
          <span>
            <Image src={LogoIcon} alt="icon movie" />
          </span>
          {children}
        </main>
      </body>
    </html>
  );
}
