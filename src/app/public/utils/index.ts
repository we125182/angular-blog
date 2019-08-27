export function getDescFromMd(content: string) {
  let index = 0;
  while (!index) {
    index = content.indexOf('\n', index + 1);
  }
  return content.slice(0, index);
}
