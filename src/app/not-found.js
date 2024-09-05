"use client";
import { StoryblokCMS } from "@/utils/cms";
export default async function NotFound() {
  try {
    const currentStory = await StoryblokCMS.getConfig();
    const { notfound_title, notfound_description } = currentStory.content;
    if (!currentStory) throw new Error();
    console.log(notfound_title);
    return (
      <div>
        <h1>{notfound_title}</h1>
        <p>Page not found</p>
      </div>
    );
  } catch (error) {
    console.log(error);
  }
}
