import { StoryblokComponent, storyblokEditable } from "@storyblok/react/rsc";
import Link from "next/link";

export default function Header({ blok }) {
  const { logotype, header_navigation } = blok.content;

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {logotype && (
          <img src={logotype?.filename} alt="Logo" className="h-16" />
        )}

        <nav>
          <ul className="flex space-x-4">
            {header_navigation?.map((link) => (
              <li key={link._uid} {...storyblokEditable(link)}>
                {link.url.linktype === "story" ? (
                  <Link href={link.url.cached_url ?? ""} passHref>
                    {link.name}
                  </Link>
                ) : (
                  <a
                    href={link.url.url ?? ""}
                    className="text-gray-800 hover:text-blue-500"
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
    </header>
  );
}
