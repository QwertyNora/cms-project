import Link from "next/link";
import React from "react";
import {
  render,
  MARK_LINK,
  MARK_CODE,
  NODE_HR,
  NODE_HEADING,
  NODE_CODEBLOCK,
  NODE_LI,
  NODE_UL,
  NODE_OL,
  NODE_PARAGRAPH,
} from "storyblok-rich-text-react-renderer";

export default function RichTextDefault({ blok }) {
  const { richtext, ...rest } = blok;

  const resolveNodeHeading = (children, props) => {
    return <h1 className="text-xl font-bold mb-4 font-sans">{children}</h1>;
  };

  const resolveNodeUL = (children) => {
    return <ul className="list-disc ml-4 mb-4 font-sans">{children}</ul>;
  };

  const resolveNodeOL = (children) => {
    return <ol className="list-decimal ml-4 mb-4 font-sans">{children}</ol>;
  };

  const resolveNodeLI = (children) => {
    return <li className="mb-1 font-sans">{children}</li>;
  };

  const resolveMarkLink = (children, props) => {
    const linkClassNames =
      "font-bold underline text-blue-500 hover:text-blue-700 font-sans";
    return (
      <Link className={linkClassNames} href={props.href}>
        {children}
      </Link>
    );
  };

  const resolveNodeParagraph = (children) => {
    return <p className="mb-4 font-sans">{children}</p>;
  };

  const resolveMarkCode = (children, props) => {
    return "";
  };

  const resolvers = {
    markResolvers: {
      [MARK_LINK]: (children, props) => resolveMarkLink(children, props),
      [MARK_CODE]: (children, props) => resolveMarkCode(children, props),
    },
    nodeResolvers: {
      [NODE_HEADING]: resolveNodeHeading,
      [NODE_UL]: resolveNodeUL,
      [NODE_OL]: resolveNodeOL,
      [NODE_LI]: resolveNodeLI,
      [NODE_PARAGRAPH]: resolveNodeParagraph,
    },
    blokResolvers: {},
  };

  const renderedRichText = render(richtext, resolvers);

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-4xl mx-4 lg:mx-16 mt-16 mb-16 font-sans">
        {" "}
        {/* Tillämpa font-sans här */}
        {renderedRichText}
      </div>
    </div>
  );
}
