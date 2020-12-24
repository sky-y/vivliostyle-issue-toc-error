module.exports = {
  title: '科学の不思議', 
  author: 'アンリイ・ファブル（大杉栄、伊藤野枝訳）', 
  size: 'JIS-B5', // paper size.
  theme: '@vivliostyle/theme-techbook', // .css or local dir or npm package. default to undefined.
  entry: [
    'index.md',
    '01.md',
  ], 
  // toc: true, // whether generate and include toc.html or not (does not affect manifest.json), default to `true`. if `string` given, use it as a custom toc.html.
}
