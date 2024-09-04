// import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
// import Image from "next/image";

// export default function Hero({ blok }) {
//   return (
//     <section className="bg-gray-100 p-8" {...storyblokEditable(blok)}>
//       {/* Hero Image */}
//       {blok.hero_image?.filename && (
//         <div className="relative w-full h-48">
//           <Image
//             src={blok.hero_image.filename}
//             alt={blok.hero_image.alt || "Hero Image"}
//             layout="fill"
//             objectFit="cover"
//           />
//         </div>
//       )}

//       {/* Title */}
//       {blok.title && <h1 className="text-3xl font-bold mb-2">{blok.title}</h1>}

//       {/* Text Area */}
//       {blok.textarea && (
//         <p className="text-lg text-gray-700 mb-4">{blok.textarea}</p>
//       )}

//       {/* Buttons */}
//       {blok.button &&
//         blok.button.map((button) => (
//           <StoryblokComponent blok={button} key={button._uid} />
//         ))}
//     </section>
//   );
// }

import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import Image from "next/image";

export default function Hero({ blok }) {
  return (
    <section
      className="bg-white p-8 lg:px-28 lg:py-20 flex flex-col-reverse lg:flex-row items-center justify-between" // Flex column-reverse för mindre skärmar, flex-row för större skärmar
      {...storyblokEditable(blok)}
    >
      {/* Text Section */}
      <div className="flex-1 pr-0 lg:pr-28">
        {" "}
        {/* Flex-1 gör denna kolumn flexibel */}
        {/* Title */}
        {blok.title && (
          <h1 className="text-3xl font-bold mb-10">{blok.title}</h1>
        )}
        {/* Text Area */}
        {blok.textarea && (
          <p className="text-lg text-gray-700 mb-8">{blok.textarea}</p>
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
          {" "}
          {/* Full bredd på små skärmar, halv bredd på större */}
          <Image
            src={blok.hero_image.filename}
            alt={blok.hero_image.alt || "Hero Image"}
            layout="fill"
            objectFit="cover"
            className="rounded lg:rounded-none" // Rundade hörn på större skärmar, inga rundade hörn på mindre skärmar
          />
        </div>
      )}
    </section>
  );
}
