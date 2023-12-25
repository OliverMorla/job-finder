export const checkImage = (url: string) => {
  const imageUrlRegex = /\.(jpeg|jpg|gif|png|webp)$/i;
  const isImageValid = imageUrlRegex.test(url);
  if (isImageValid) {
    return true;
  }
  return false;
};
