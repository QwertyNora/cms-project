import Link from "next/link";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

export default function Button({ blok }) {
  const colorClasses = {
    "white-border":
      "bg-white text-gray-800 border border-gray-800 hover:bg-gray-100", // Vit bakgrund med mörk text och border
    "light-gray": "bg-gray-200 text-gray-800 hover:bg-gray-300", // Ljusgrå bakgrund med mörk text
    gray: "bg-gray-400 text-white hover:bg-gray-500", // Grå bakgrund med vit text
    "dark-gray": "bg-gray-600 text-white hover:bg-gray-700", // Mörkgrå bakgrund med vit text
    "almost-black": "bg-gray-800 text-white hover:bg-gray-900", // Nästan svart bakgrund med vit text
  };

  const buttonClass =
    colorClasses[blok.color] || "bg-gray-200 text-gray-800 hover:bg-gray-300";

  return (
    <Link
      href={blok.url.url}
      passHref
      legacyBehavior
      {...storyblokEditable(blok)}
    >
      <a className={`px-4 py-2 rounded ${buttonClass}`}>{blok.text}</a>
    </Link>
  );
}
