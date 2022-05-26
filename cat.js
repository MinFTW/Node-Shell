const fs = require('fs');

module.exports = (filename) => {
  fs.readFile(filename, 'utf-8', (err, data) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(data);
      process.stdout.write('\nprompt > ');
    }
  });
};
