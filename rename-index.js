#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// After build, rename index.html to app.html for PHP router
const distDir = path.join(__dirname, 'dist');
const indexPath = path.join(distDir, 'index.html');
const appPath = path.join(distDir, 'app.html');

if (fs.existsSync(indexPath)) {
    fs.renameSync(indexPath, appPath);
    console.log('✅ Renamed index.html to app.html for PHP routing');
} else {
    console.log('❌ index.html not found in dist directory');
}