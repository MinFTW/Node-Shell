const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after the user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); // remove the new line

  if (cmd === 'pwd') return pwd();
  if (cmd === 'ls') return ls();
  if (cmd.slice(0, 3) === 'cat') {
    const filename = cmd.slice(4).toString();
    
    return cat(filename);
  }

  if (cmd.slice(0, 4) === 'curl') {
    const website = cmd.slice(5).toString();
    
    return curl(website);
  }

  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
});
