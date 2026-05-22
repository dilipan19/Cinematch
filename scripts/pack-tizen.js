import { cpSync, mkdirSync, rmSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const dist = join(root, 'dist');
const target = join(root, 'platforms', 'tizen', 'www');

if (!existsSync(dist)) {
  console.error('Run npm run build:smart-tv first.');
  process.exit(1);
}

rmSync(target, { recursive: true, force: true });
mkdirSync(target, { recursive: true });
cpSync(dist, target, { recursive: true });
cpSync(join(root, 'platforms', 'tizen', 'config.xml'), join(target, '..', 'config.xml'));
console.log('Tizen www packaged at platforms/tizen/www');
