import SideBar from "@/components/sideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" flex w-full h-screen">
        <SideBar />
        {children}
      </body>
    </html>
  );
}
