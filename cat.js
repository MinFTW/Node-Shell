const fs = require('fs');
const bash = require('./bash');

module.exports = (filename) => {
  fs.readFile(filename, 'utf-8', (err, data) => {
    if (err) {
      bash.done('Something went wrong!');
    } else {
      bash.done(data);
    }
  });
};
