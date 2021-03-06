// @flow
declare class URL {
  constructor(urlStr: string): URL,
  toString(): string,
  static compare(url1: URL, url2: URL): boolean,
}
