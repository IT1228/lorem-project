var express =  require('express');
var loremIpsum = require('lorem-ipsum')
var application = express();

application.get("/", (request, response) => {
   response.send('lorem-ipsum'){
        count: 3,                     
        units: 'paragraphs',           
        format: 'html',
    })
};

// application.post('/', (request, response) => {
//     response.render('index');
// });


// output = loremIpsum({
//     count: 3                      // Number of words, sentences, or paragraphs to generate.
//   , units: 'paragraphs'            // Generate words, sentences, or paragraphs.
//   , sentenceLowerBound: 5         // Minimum words per sentence.
//   , sentenceUpperBound: 10        // Maximum words per sentence.
//   , paragraphLowerBound: 3        // Minimum sentences per paragraph.
//   , paragraphUpperBound: 5        // Maximum sentences per paragraph.
// });



