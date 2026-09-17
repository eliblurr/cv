import { ImageResponse } from "next/og";
import { RESUME_DATA } from "@/data/resume-data";

async function loadInterBold(text: string): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=Inter:wght@800&text=${encodeURIComponent(
        text,
      )}`,
    ).then((res) => res.text());
    const match = css.match(
      /src: url\((.+?)\) format\('(opentype|truetype)'\)/,
    );
    if (!match) return null;
    const res = await fetch(match[1]);
    return res.ok ? res.arrayBuffer() : null;
  } catch {
    return null;
  }
}

/**
 * Renders a square icon in the style of the original template icon:
 * a dark rounded square with the user's initials in heavy white type.
 */
export async function renderInitialsIcon(px: number) {
  const initials = RESUME_DATA.initials;
  const font = await loadInterBold(initials);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1a1a1a",
          borderRadius: px * 0.22,
          color: "#ffffff",
          fontFamily: "Inter",
          fontSize: px * 0.58,
          fontWeight: 800,
          letterSpacing: -px * 0.03,
          paddingBottom: px * 0.02,
        }}
      >
        {initials}
      </div>
    ),
    {
      width: px,
      height: px,
      fonts: font
        ? [{ name: "Inter", data: font, weight: 800, style: "normal" }]
        : undefined,
    },
  );
}
