const request = require('request');

module.exports = (website, done) => {
  request(`https://${website}`, (error, response, body) => {
    console.error('error:', error); 
    console.log('statusCode:', response && response.statusCode); 
    done(body); 
  });
};
