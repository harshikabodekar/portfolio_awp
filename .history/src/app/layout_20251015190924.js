import "./globals.css";

export const metadata = {
  title: "AWP Portfolio",
  description: "Personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
