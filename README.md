# Reproduction of Prisma Accelerate warning ESM in Next.JS

Here is the associated Github [discussion](https://github.com/prisma/prisma/issues/20743).

```bash
- warn ./node_modules/@prisma/extension-accelerate/dist/esm/node-fetch.js
Critical dependency: the request of a dependency is an expression

Import trace for requested module:
./node_modules/@prisma/extension-accelerate/dist/esm/node-fetch.js
./node_modules/@prisma/extension-accelerate/dist/esm/index.js
./lib/db.ts
./app/api/route.ts
./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Froute&page=%2Fapi%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Froute.ts&appDir=%2FUsers%2Fankur%2FWork%2Fmongo-accelerate%2Fnext-mongo-bug%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fankur%2FWork%2Fmongo-accelerate%2Fnext-mongo-bug&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=iad1&middlewareConfig=e30%3D!./app/api/route.ts?__next_edge_ssr_entry__
```