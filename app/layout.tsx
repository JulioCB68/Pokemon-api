"use client";

import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";

import { robotoMono } from "@/config/font";
import { metaData } from "@/config/meta";
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
      </Head>
      <html lang="en">
        <body className={robotoMono.className}>{children}</body>
      </html>
    </QueryClientProvider>
  );
}
