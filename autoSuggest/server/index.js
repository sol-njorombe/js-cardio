/**
 * Some Good reference
 * https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4
 *
 */

const express = require('express');
const app = express();
let fs = require('fs');
let wordsPath = 'autoSuggest/server/words.json';
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Use middleware to set the default Content-Type
app.use(function (req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader("Access-Control-Allow-Headers", "Authorization, Cache-Control, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  next();
});

app.post('/', async (req, res) => {
  try {
    let query = req.body.string || '';
    let words = await fs.readFileSync(wordsPath);
    let results = JSON.parse(words);
    results = results.filter( word => word.startsWith(query));
    results = results.slice(0, 100);
    return res.status(200).send(results);
  } catch (error) {
    return res.status(500).send({error});
  }

});

app.listen(3000);