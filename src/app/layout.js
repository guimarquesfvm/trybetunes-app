import { Epilogue } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/side-bar";
import TunesProvider from "@/context/tunes-context";

const epilogue = Epilogue({ subsets: ["latin"] });

export const metadata = {
  title: "TrybeTunes",
  description: "Listen to music.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={epilogue.className}>
        <TunesProvider>
          <main className="flex h-full">
            <aside>
              <SideBar />
            </aside>
            <section className="flex flex-col flex-1">{children}</section>
          </main>
        </TunesProvider>
      </body>
    </html>
  );
}
