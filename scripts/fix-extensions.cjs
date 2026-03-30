const fs = require('fs');
const path = require('path');

function fixFile(file) {
  let content = fs.readFileSync(file, 'utf8');
  // Add .js extension to relative imports/exports without it (but not .css)
  content = content.replace(/from ['"](\.\.?\/[^'"]+)(?<!\.js)(?<!\.css)['"];/g, "from '$1.js';");
  content = content.replace(/import ['"](\.\.?\/[^'"]+)(?<!\.js)(?<!\.css)['"];/g, "import '$1.js';");
  fs.writeFileSync(file, content);
}

function walk(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (file.endsWith('.js')) {
      fixFile(fullPath);
    }
  });
}

walk('./dist');
console.log('Fixed .js extensions in dist/');
