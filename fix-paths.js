import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const BASE_PATH = '/patent-history-lab-site';
const DIST_DIR = './dist';

function fixPaths(dir) {
  const files = readdirSync(dir, { withFileTypes: true });

  for (const file of files) {
    const fullPath = join(dir, file.name);

    if (file.isDirectory()) {
      fixPaths(fullPath);
    } else if (file.name.endsWith('.html')) {
      let content = readFileSync(fullPath, 'utf-8');

      // Fix CSS links
      content = content.replace(
        /href="\/_astro\//g,
        `href="${BASE_PATH}/_astro/`
      );

      // Fix JS links
      content = content.replace(
        /src="\/_astro\//g,
        `src="${BASE_PATH}/_astro/`
      );

      writeFileSync(fullPath, content);
      console.log(`Fixed paths in: ${fullPath}`);
    }
  }
}

console.log('Fixing asset paths in HTML files...');
fixPaths(DIST_DIR);
console.log('Done!');
