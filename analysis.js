const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

const emptyFiles = [];
const incompleteComponents = [];
const routeIssues = [];
const brokenImports = [];

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.js') || fullPath.endsWith('.jsx')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      
      // 1. Empty files
      if (content.trim() === '') {
        emptyFiles.push(path.relative(srcDir, fullPath));
        continue;
      }
      
      // 2 & 4. Missing default export in page.js (Route issues) or components
      if (!content.includes('export default')) {
        if (fullPath.includes('page.js') || fullPath.includes('layout.js')) {
          routeIssues.push(path.relative(srcDir, fullPath));
        } else {
          incompleteComponents.push(path.relative(srcDir, fullPath));
        }
      } else {
        // Also call incomplete if it just exports an empty fragment or has FIXME/TODO
        if (content.includes('TODO') || content.includes('FIXME') || content.includes('return (\n    <div>\n      \n    </div>\n  );')) {
          incompleteComponents.push(path.relative(srcDir, fullPath));
        }
      }

      // 3. Broken imports
      const importRegex = /import.*?(?:from\s+)?['"](.*?)['"]/g;
      let match;
      while ((match = importRegex.exec(content)) !== null) {
        const importPath = match[1];
        if (importPath.startsWith('.') || importPath.startsWith('@/')) {
          // Check if file exists
          let resolvedPath = importPath;
          if (importPath.startsWith('@/')) {
            resolvedPath = path.join(srcDir, importPath.replace('@/', ''));
          } else {
            resolvedPath = path.join(path.dirname(fullPath), importPath);
          }
          
          const extensions = ['.js', '.jsx', '.ts', '.tsx', '/index.js', ''];
          let found = false;
          for (const ext of extensions) {
            if (fs.existsSync(resolvedPath + ext)) {
              found = true;
              break;
            }
          }
          
          if (!found) {
            brokenImports.push({ file: path.relative(srcDir, fullPath), import: importPath });
          }
        }
      }
    }
  }
}

walk(srcDir);

console.log('--- Empty Files ---');
emptyFiles.forEach(f => console.log('src/' + f.replace(/\\/g, '/')));

console.log('\n--- Incomplete Components ---');
incompleteComponents.forEach(f => console.log('src/' + f.replace(/\\/g, '/')));

console.log('\n--- Route Issues ---');
routeIssues.forEach(f => console.log('src/' + f.replace(/\\/g, '/')));

console.log('\n--- Broken Imports ---');
brokenImports.forEach(i => console.log('src/' + i.file.replace(/\\/g, '/') + ' -> ' + i.import));
