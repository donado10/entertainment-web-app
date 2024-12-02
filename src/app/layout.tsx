import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-entertain-third min-h-screen w-full">{children}</body>
    </html>
  );
}
