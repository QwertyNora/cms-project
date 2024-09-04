import { StoryblokComponent, storyblokEditable } from "@storyblok/react/rsc";

export default function Grid({ blok }) {
  const itemCount = blok.items.length;

  // Dynamisk grid-klass baserad på antalet komponenter
  let gridClasses = "grid-cols-1"; // Default för alla skärmstorlekar

  if (itemCount === 1) {
    gridClasses = "grid-cols-1";
  } else if (itemCount === 2) {
    gridClasses = "grid-cols-1 sm:grid-cols-2";
  } else if (itemCount === 3) {
    gridClasses = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3";
  } else {
    gridClasses = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
  }

  return (
    <div
      className={`grid ${gridClasses} gap-4 sm:gap-8 w-full max-w-8xl mx-auto px-4 sm:px-6 md:px-8`}
      {...storyblokEditable(blok)}
    >
      {blok.items.map((nestedBlok) => (
        <div key={nestedBlok._uid} className="flex justify-center my-8">
          {" "}
          {/* Lägger till margin ovan och under varje komponent */}
          <StoryblokComponent blok={nestedBlok} />
        </div>
      ))}
    </div>
  );
}

// import { StoryblokComponent, storyblokEditable } from "@storyblok/react/rsc";

// export default function Grid({ blok }) {
//   const itemCount = blok.items.length;
//   let gridClasses = "";

//   if (itemCount === 1) {
//     gridClasses = "grid-cols-1";
//   } else if (itemCount === 2) {
//     gridClasses = "grid-cols-1 sm:grid-cols-2";
//   } else if (itemCount === 3) {
//     gridClasses = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3";
//   } else {
//     gridClasses = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
//   }

//   return (
//     <div
//       className={`grid ${gridClasses} gap-4 sm:gap-12 w-full max-w-8xl mx-auto p-0 sm:px-12 sm:py-12`}
//       {...storyblokEditable(blok)}
//     >
//       {blok.items.map((nestedBlok) => (
//         <div key={nestedBlok._uid} className="flex justify-center w-full my-4">
//           <StoryblokComponent blok={nestedBlok} />
//         </div>
//       ))}
//     </div>
//   );
// }
