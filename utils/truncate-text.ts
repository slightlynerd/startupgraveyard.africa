export function truncateText (
  text: string | undefined,
  length: number
): string | undefined {
  return text && text?.length > length
    ? text.substring(0, length) + '...'
    : text;
}
