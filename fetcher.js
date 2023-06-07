const request = require('request');
const fs = require('fs');

const downloadResource = (url, filePath) => {
  request(url, (error, response, body) => {
    if (error) {
      console.error('Error:', error.message);
      return;
    }
    if (response.statusCode !== 200) {
      console.error('Error:', `Request failed with status code ${response.statusCode}`);
      return;
    }
    fs.writeFile(filePath, body, (error) => {
      if (error) {
        console.error('Error:', error.message);
        return;
      }
      console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
    });
  });
};

const url = process.argv[2];
const filePath = process.argv[3];

downloadResource(url, filePath);
