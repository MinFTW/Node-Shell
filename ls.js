const fs = require('fs');
const bash = require('./bash');

// 'files' will be an array of filenames, like ['bash.js', 'pwd.js']
module.exports = () => {
  fs.readdir('./', 'utf-8', (err, files) => {
    if (err) {
      bash.done('Something went wrong!');
    } else {
      bash.done(files.join('\n'));
    }
  });
};
