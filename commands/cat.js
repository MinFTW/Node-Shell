import * as fs from 'node:fs';

const cat = (filename, done) => {
  fs.readFile(filename, 'utf-8', (err, data) => {
    if (err) {
      done('Something went wrong!');
    } else {
      done(data);
    }
  });
};

export default cat;