import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';
const root = resolve('dist/client');
const htmlFile = resolve(root,'index.html');
if (!existsSync(htmlFile)) throw Error('Missing dist/client/index.html. Run npm run mobile:build.');
const html = readFileSync(htmlFile, 'utf8');
if (!/<div\s+id=["']app["']/.test(html)) throw Error('Missing React #app mount element.');
const assets = resolve(root, 'assets');
if (!existsSync(assets) || !readdirSync(assets).some(f => /\.js$/.test(f))) {
  throw Error('No JavaScript bundle found in dist/client/assets.');
}
if (/src\/main\.tsx/.test(html)) throw Error('Uncompiled Vite entry detected in build HTML.');
console.log('PASS: Bundled React HTML and JS assets exist. API/login/network functionality is NOT verified.');
