function parseRgb(
  color: string
): { r: number; g: number; b: number; a: number } | null {
  const match = color.match(
    /rgba?\(\s*(\d+)[,\s]+(\d+)[,\s]+(\d+)(?:[,\s/]+([\d.]+))?\s*\)/
  );
  if (!match) return null;
  return {
    r: Number(match[1]),
    g: Number(match[2]),
    b: Number(match[3]),
    a: match[4] !== undefined ? Number(match[4]) : 1,
  };
}

function luminance(r: number, g: number, b: number): number {
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
}

const DARK_SURFACE_CLASS =
  /\b(bg-navy|from-navy|via-deep|to-deep|from-blue-900|from-indigo-900|from-red-900|from-teal-900)\b/;

export function isOnDarkSurface(element: HTMLElement | null): boolean {
  let current = element;

  while (current && current !== document.documentElement) {
    if (current.dataset.cursorDark !== undefined) return true;
    if (current.tagName === "FOOTER") return true;

    const className =
      typeof current.className === "string" ? current.className : "";

    if (DARK_SURFACE_CLASS.test(className)) {
      const tag = current.tagName;
      if (
        tag === "SECTION" ||
        tag === "ARTICLE" ||
        tag === "FOOTER" ||
        tag === "ASIDE" ||
        (tag === "DIV" && current.clientHeight > 80)
      ) {
        return true;
      }
    }

    const { backgroundColor } = window.getComputedStyle(current);
    const rgb = parseRgb(backgroundColor);
    if (rgb && rgb.a > 0.4 && luminance(rgb.r, rgb.g, rgb.b) < 0.38) {
      return true;
    }

    current = current.parentElement;
  }

  return false;
}
