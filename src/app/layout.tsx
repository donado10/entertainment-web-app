import Header from "@/components/Header";
import "./globals.css";
import MaxWithWrapper from "@/components/MaxWithWrapper";
import Search from "@/components/Search";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full bg-entertain-third">
        <div>
          <Header />
        </div>
        <MaxWithWrapper>
          <Search />
        </MaxWithWrapper>
        {children}
      </body>
    </html>
  );
}
