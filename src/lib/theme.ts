export const THEMES = ["white", "blue", "teal"] as const;

export type Theme = (typeof THEMES)[number];

export const THEME_STORAGE_KEY = "horizonpath-theme";

export const THEME_LABELS: Record<Theme, string> = {
  white: "White",
  blue: "Blue",
  teal: "Teal",
};

export function isTheme(value: string | null | undefined): value is Theme {
  return THEMES.includes(value as Theme);
}

export function getNextTheme(current: Theme): Theme {
  const index = THEMES.indexOf(current);
  return THEMES[(index + 1) % THEMES.length];
}
