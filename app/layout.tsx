import Head from "next/head";

import { robotoMono } from "@/config/font";
import { metaData } from "@/config/meta";

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
      </Head>
      <html lang="en">
        <body className={robotoMono.className}>{children}</body>
      </html>
    </>
  );
}
