export const metadata = {
  title: "Grout Restorations | Tile & Grout Cleaning, Sealing, and Restoration",
  description: "Professional tile and grout cleaning, color sealing, regrouting, and shower restoration. Free quotes. Licensed & insured.",
  openGraph: {
    title: "Grout Restorations",
    description: "Tile & grout cleaning, color sealing, regrouting, and shower restoration.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
