export const DEFAULT_LIMIT = 10;

export function getQueryKey(key, params) {
  return [key, ...(params ? [params] : [])];
}


// pages = [{
//   results: T[];
//   count: number;
//   next: string | null;
//   previous: string | null;
// }]
// for infinite query pages  to flatList data
export function normalizePages(pages) {
  return pages
    ? pages.reduce((prev, current) => [...prev, ...current.results], [])
    : [];
}

// a function that accept a url and return params as an object
export function getUrlParameters(
  url
){
  if (url === null) {
    return null;
  }
  let regex = /[?&]([^=#]+)=([^&#]*)/g,
    params = {},
    match;
  while ((match = regex.exec(url))) {
    if (match[1] !== null) {
      //@ts-ignore
      params[match[1]] = match[2];
    }
  }
  return params;
}

export const getPreviousPageParam = (page) => getUrlParameters(page.previous)?.offset ?? null;

export const getNextPageParam = (page) => getUrlParameters(page.next)?.offset ?? null;
