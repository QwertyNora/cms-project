"use client";
import { StoryblokCMS } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import Page from "@/components/content-types/Page";

import Teaser from "@/components/nestable/Teaser";
import RichTextDefault from "@/components/nestable/RichText";
import Header from "@/components/nestable/Header";
import Hero from "@/components/nestable/Hero";
import ImageCard from "@/components/nestable/ImageCard";
import Grid from "@/components/nestable/Grid";
import Button from "@/components/nestable/Button";
import Footer from "@/components/nestable/Footer";
import RichText from "@/components/nestable/RichText";
import Form from "@/components/nestable/Form";

const components = {
  page: Page,
  teaser: Teaser,
  header: Header,
  hero: Hero,
  image_card: ImageCard,
  grid: Grid,
  button: Button,
  footer: Footer,
  richtext: RichText,
  form: Form,
};

storyblokInit({
  accessToken: StoryblokCMS.TOKEN,

  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({ children }) {
  return children;
}
