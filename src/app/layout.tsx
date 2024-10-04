import Link from "next/link";

export default function RootLayout({children}:any) {
  return (
    <html lang="en">
      <body>
      <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/navbar">Navbar</Link>
        <Link href="/Footer">Footer</Link>
        {children}
      </body>
    </html>
  );
}
