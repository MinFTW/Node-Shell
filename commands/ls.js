const fs = require('fs');

// 'files' will be an array of filenames, like ['bash.js', 'pwd.js']
module.exports = (done) => {
  fs.readdir('./', 'utf-8', (err, files) => {
    if (err) {
      done('Something went wrong!');
    } else {
      done(files.join('\n'));
    }
  });
};
