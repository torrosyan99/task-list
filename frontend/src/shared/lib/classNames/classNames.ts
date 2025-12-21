interface Mods {
  [key: string]: boolean;
}

export function classNames(
  str: string,
  additional: (string | undefined)[] = [],
  mods: Mods = {},
): string {
  return [
    str,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => value)
      .map(([key]) => key),
  ].join(' ');
}
