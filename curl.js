const request = require('request');

module.exports = (website) => {
  request(`https://${website}`, (error, response, body) => {
    console.error('error:', error); 
    console.log('statusCode:', response && response.statusCode); 
    console.log('body:', body); 
  });
};
