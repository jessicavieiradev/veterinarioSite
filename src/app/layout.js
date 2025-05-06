import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "design de site de uma clínica veterinária existente remasterizada",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
