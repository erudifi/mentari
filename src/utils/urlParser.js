/**
 * parseURL
 * @references https://www.abeautifulsite.net/parsing-urls-in-javascript
 * @param url
 * @return {Object}
 */
export const parseUrl = url => {
  const parser = document.createElement('a');
  const searchObject = {};
  let split;


  // Let the browser do the work
  parser.href = url;

  // Convert query string to object
  const queries = parser.search.replace(/^\?/, '').split('&');
  for(let i = 0; i < queries.length; i+=1 ) {
    split = queries[i].split('=');
    [,searchObject[split[0]]] = split;
  }
  return {
    protocol: parser.protocol,
    host: parser.host,
    hostname: parser.hostname,
    port: parser.port,
    pathname: parser.pathname,
    search: parser.search,
    searchObject,
    hash: parser.hash
  };
};

/**
 * getGoogleStorageFilename
 * @param url
 * @return {string}
 */
export const getGoogleStorageFilename = url => {
  const parsedUrl = parseUrl(url);
  const { pathname } = parsedUrl;
  const [,,rawFilename] = pathname.split('/');
  const [,filename] = rawFilename.split('%2F');
  return filename;
};