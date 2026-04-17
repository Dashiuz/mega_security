"use client";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function ClientBlocksRenderer({ content }: { content: any }) {
  return (
    <BlocksRenderer 
      content={content} 
      blocks={{
        heading: ({ children, level }) => {
          switch (level) {
            case 1:
              return <h1 className="text-5xl mt-12 mb-6 text-white">{children}</h1>
            case 2:
              return <h2 className="text-4xl mt-10 mb-5 text-white">{children}</h2>
            case 3:
              return <h3 className="text-3xl mt-8 mb-4 text-[#D3DEE8]">{children}</h3>
            default:
              return <h4 className="text-2xl mt-6 mb-3 text-mega-silver">{children}</h4>
          }
        },
        paragraph: ({ children }) => <p className="mb-6 leading-relaxed font-light">{children}</p>,
      }}
    />
  );
}
