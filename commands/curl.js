import request from 'request';

const curl = (website, done) => {
  request(`https://${website}`, (error, response, body) => {
    console.error('error:', error);
    console.log('statusCode:', response && response.statusCode);
    done(body);
  });
};

export default curl;
