import * as fs from 'node:fs';

// 'files' will be an array of filenames, like ['bash.js', 'pwd.js']
const ls = (done) => {
  fs.readdir('./', 'utf-8', (err, files) => {
    if (err) {
      done('Something went wrong!');
    } else {
      done(files.join('\n'));
    }
  });
};

export default ls;
