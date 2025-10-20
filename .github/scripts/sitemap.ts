import "zone.js/node";
import "@angular/compiler";
import "@angular/platform-browser-dynamic";

import fs from "fs";

import {routes} from "../../src/app/app.routes";
import {Route} from '@angular/router';

// DO NOT CHANGE //
const INITIAL_PATH: string = 'https://borisonekenobi.github.io/DynoC-Docs/';

function getUrlTags(route: Route, prefix: string): string[] {
  if (route.path === '' || route.path === '**') return [];

  const path: string = `${prefix}${route.path}/`;
  let paths: string[] = [path];

  if (route.children) {
    for (const child of route.children) {
      paths = paths.concat(getUrlTags(child, path));
    }
  }

  return paths;
}

let paths: string[] = [INITIAL_PATH];
for (const route of routes) {
  paths = paths.concat(getUrlTags(route, INITIAL_PATH));
}

if (paths.length <= 1) throw new Error('Could not generate paths for sitemap');


const date = new Date();
let xml: string = '';

xml += `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`
for (const path of paths) {
  xml += `
  <url>
    <loc>${path}</loc>
    <lastmod>${date.toISOString()}</lastmod>
  </url>`
}
xml += '\n</urlset>\n';

fs.writeFileSync('./public/sitemap.xml', xml);
