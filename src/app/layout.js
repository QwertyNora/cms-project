import Layout from "@/components/layout";
import "./globals.css";
import StoryblokProvider from "@/providers/StoryblokProvider";
import { StoryblokCMS } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import { Mooli } from "next/font/google";

storyblokInit({
  accessToken: StoryblokCMS.TOKEN,
  use: [apiPlugin],
});

const mooli = Mooli({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default async function RootLayout({ children }) {
  const currentConfig = await StoryblokCMS.getConfig();
  return (
    <StoryblokProvider>
      <html lang="en">
        <body className={mooli.className}>
          <Layout config={currentConfig}>{children}</Layout>
        </body>
      </html>
    </StoryblokProvider>
  );
}
