const { spawn } = require('child_process');

const client = spawn('npm', ['run', 'build'], { cwd: './packages/client' });
client.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});
client.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});
client.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
  const server = spawn('npm', ['run', 'start'], { cwd: './packages/server' });
  // ...
});
