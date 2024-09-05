import { storyblokEditable } from "@storyblok/react/rsc";
import Link from "next/link";

export default function Footer({ blok }) {
  const { footer_logotype, footer_title, footer_textarea, footer_links } =
    blok.content;
  console.log("BLOK FOOTER", blok);
  return (
    <footer
      className="bg-gray-400 text-white py-8"
      {...storyblokEditable(blok)}
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-center items-start gap-8">
        {/* Footer Logotyp */}
        {footer_logotype?.filename && (
          <img
            src={footer_logotype.filename}
            alt="Footer Logo"
            className="h-12 mb-4 lg:mb-0"
          />
        )}

        <div className="flex flex-col lg:flex-row justify-between w-full">
          {/* Footer Title and Textarea */}
          <div className="lg:w-1/2">
            {/* Footer Title */}
            {footer_title && (
              <h2
                className="text-xl font-bold mb-2"
                {...storyblokEditable(blok)}
              >
                {footer_title}
              </h2>
            )}

            {/* Footer Textarea */}
            {footer_textarea && (
              <p className="text-gray-200 mb-4" {...storyblokEditable(blok)}>
                {footer_textarea}
              </p>
            )}
          </div>

          {/* Navigationslänkar i footern */}
          <nav className="lg:w-1/2">
            <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
              {footer_links?.map((link) => (
                <li key={link._uid} {...storyblokEditable(link)}>
                  {link.url.linktype === "story" ? (
                    <Link
                      href={link.url.cached_url || ""}
                      className="text-gray-100 hover:text-white"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.url.url || ""}
                      className="text-gray-300 hover:text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
