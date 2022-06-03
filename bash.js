import { pwd, ls, cat, curl, date, echo } from './commands/index.js';

const done = (output) => {
  process.stdout.write(output);
  process.stdout.write('\nprompt > ');
};

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after the user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); // remove the new line

  if (cmd === 'pwd') return pwd(done);
  if (cmd === 'ls') return ls(done);
  if (cmd.slice(0, 3) === 'cat') {
    const filename = cmd.slice(4).toString();

    return cat(filename, done);
  }

  if (cmd.slice(0, 4) === 'curl') {
    const website = cmd.slice(5).toString();

    return curl(website, done);
  }

  if (cmd === 'date') return date(done);

  if (cmd.slice(0, 4) === 'echo') {
    const string = cmd.slice(5).toString();

    return echo(string, done);
  }

  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
});

