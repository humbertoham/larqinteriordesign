import React from "react";

/**
 * VideoEmbed component
 *
 * Embed and center a YouTube video responsively using TailwindCSS.
 *
 * Usage: <VideoEmbed videoId="fr4e4Ipm_E4" />
 */
interface VideoEmbedProps {
  videoId: string;
}

export default function VideoEmbed({ videoId }: VideoEmbedProps) {
  return (
    <div className="w-full rounded-xl max-w-3xl mx-auto mb-14 mt-8 ">
      <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
        <iframe
          className="absolute rounded-2xl top-0 left-0 w-full  h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
