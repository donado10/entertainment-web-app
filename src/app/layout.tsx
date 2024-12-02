import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-entertain-secondary min-h-screen">{children}</body>
    </html>
  );
}
