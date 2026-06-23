const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const EXCLUDE_DIRS = new Set(['.git', 'node_modules', 'android', 'twa']);
const EXTENSIONS = new Set(['.html', '.htm', '.js', '.css', '.json', '.md', '.svg', '.yml', '.yaml', '.toml', '.txt', '.xml']);
const BAD_PATTERNS = [
  String.fromCharCode(0x00f0, 0x0178),
  String.fromCharCode(0x00e2, 0x20ac),
  String.fromCharCode(0x00e2, 0x2022),
  String.fromCharCode(0x00c3),
  String.fromCharCode(0x00c2),
  String.fromCharCode(0xfffd),
];

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (EXCLUDE_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, files);
      continue;
    }
    if (EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      files.push(full);
    }
  }
  return files;
}

const matches = [];

for (const file of walk(ROOT)) {
  let text;
  try {
    text = fs.readFileSync(file, 'utf8');
  } catch {
    continue;
  }

  const found = BAD_PATTERNS.filter((pattern) => text.includes(pattern));
  if (found.length) {
    matches.push({ file, found });
  }
}

if (matches.length) {
  for (const { file, found } of matches) {
    console.error(`${path.relative(ROOT, file)}: ${found.join(', ')}`);
  }
  process.exitCode = 1;
  throw new Error(`Mojibake found in ${matches.length} file(s).`);
}

console.log('No mojibake patterns found.');
