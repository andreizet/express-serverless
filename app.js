const serverless = require("serverless-http");
const express = require("express");
const cors = require("cors");
const app = express();
const fs = require('fs');

const SUCCESS_CODE = 0;
const ERROR_CODE = 1;

app.use(cors());

app.get("/search-country", function(req, res) {
  if(!req.query.country)
    res.send(JSON.stringify({message: "No code for no country ...", code: ERROR_CODE}));

  fs.readFile('country_codes.json', 'utf8', function(err, contents) {
    res.send(search_json(JSON.parse(contents), req.query.country));
  });
});

app.get('/',function(req,res) {
  res.sendFile(__dirname + '/index.html');
});

module.exports.handler = serverless(app);

function search_json(aJson, aContent)
{
  let toReturn;

  for(let i=0; i<aJson.length; i++)
  {
    let key = aJson[i];
    if(key['name'] === aContent || key['code'] === aContent)
      toReturn = key;
  }

  if(!toReturn)
    return {message: "Country not found", code: ERROR_CODE};

  return {message: toReturn, code: SUCCESS_CODE};
}
