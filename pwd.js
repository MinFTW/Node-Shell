const bash = require('./bash');

module.exports = () => {
  bash.done(process.cwd());
};
