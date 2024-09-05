import { storyblokEditable } from "@storyblok/react/rsc";
import Image from "next/image";

export default function ImageCard({ blok }) {
  return (
    <div
      className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl border rounded-lg overflow-hidden shadow-md"
      {...storyblokEditable(blok)}
    >
      {/* Card Image */}
      {blok.card_image?.filename && (
        <div className="relative w-full h-48">
          <Image
            src={blok.card_image.filename}
            alt={blok.card_image.alt || "Card Image"}
            fill
            style={{ objectFit: "cover" }} // Uppdatera till ny Image API
          />
        </div>
      )}

      {/* Card Content */}
      <div className="p-4">
        {/* Title */}
        {blok.title && (
          <h2 className="text-xl font-semibold mb-2">{blok.title}</h2>
        )}

        {/* Text Area */}
        {blok.textarea && <p className="text-gray-700">{blok.textarea}</p>}
      </div>
    </div>
  );
}
