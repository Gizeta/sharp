const { execSync } = require('child_process');
const platform = require('../lib/platform');

if (platform() === 'win32-ia32') {
  process.exit(0);
}
execSync('npm run install-bin');
