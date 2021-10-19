export function getMedia(url) {
  if (url.startsWith("/")) {
    return `${process.env.backendUrl}${url}`;
  }
  return url;
}
