const { execSync } = require('child_process');

function run(cmd) {
  console.log(`> ${cmd}`);
  execSync(cmd, { stdio: 'inherit' });
}

try {
  run('git add .');
  run('git commit -m "update"');
  run('git push');
  console.log('✅ Done — pushed to GitHub!');
} catch (err) {
  console.error('❌ Something went wrong:', err.message);
}
