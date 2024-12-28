import Header from "@/components/Header";
import "../css/globals.css";
import MaxWithWrapper from "@/components/MaxWithWrapper";
import Search from "@/components/Search";
import { validateRequest } from "@/config/auth";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen w-screen overflow-y-scroll bg-entertain-third tracking-wide xl:flex xl:flex-row">
        <div className="sticky md:p-4 xl:w-[10%]">
          <Header />
        </div>
        <main className="h-screen overflow-y-scroll xl:w-[90%]">
          <MaxWithWrapper>
            <Search />
          </MaxWithWrapper>
          {children}
        </main>
      </body>
    </html>
  );
}
