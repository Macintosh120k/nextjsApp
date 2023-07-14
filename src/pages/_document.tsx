import { Footer } from "@/components/Footer";
import DemoHeader from "@/components/demoHeader";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <DemoHeader></DemoHeader>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
