const request = require('request');
const bash = require('./bash');

module.exports = (website) => {
  request(`https://${website}`, (error, response, body) => {
    console.error('error:', error); 
    console.log('statusCode:', response && response.statusCode); 
    bash.done(body); 
  });
};
