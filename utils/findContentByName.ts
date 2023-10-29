export const findContentByName = (bottom: { name: string; content: string[] }[], name: string) => {
  return bottom.find((item) => item.name === name)?.content || [];
};
