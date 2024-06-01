export function jsonToObject (json: string): Record<string, any> {
  return JSON.parse(json);
}
