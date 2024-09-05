import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import Image from "next/image";

export default function Hero({ blok }) {
  return (
    <section
      className="bg-white p-8 lg:px-28 lg:py-20 flex flex-col-reverse lg:flex-row items-center justify-between"
      {...storyblokEditable(blok)}
    >
      {/* Text Section */}
      <div className="flex-1 pr-0 lg:pr-28">
        {/* Title */}
        {blok.title && (
          <h1
            className="text-3xl font-bold mb-10"
            {...storyblokEditable(blok, "title")}
          >
            {blok.title}
          </h1>
        )}
        {/* Text Area */}
        {blok.textarea && (
          <p
            className="text-lg text-gray-700 mb-8"
            {...storyblokEditable(blok, "textarea")}
          >
            {blok.textarea}
          </p>
        )}
        {/* Buttons */}
        <div className="space-y-4">
          {blok.button &&
            blok.button.map((button) => (
              <StoryblokComponent blok={button} key={button._uid} />
            ))}
        </div>
      </div>

      {/* Hero Image */}
      {blok.hero_image?.filename && (
        <div className="relative w-full h-64 lg:w-1/2 lg:h-80 mb-8 lg:mb-0 lg:p-0">
          <Image
            src={blok.hero_image.filename}
            alt={blok.hero_image.alt || "Hero Image"}
            fill
            style={{ objectFit: "cover" }}
            className="rounded lg:rounded-none"
          />
        </div>
      )}
    </section>
  );
}
