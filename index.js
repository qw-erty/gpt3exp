require('dotenv').config()

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


const fs = require('fs');
const pdf = require('pdf-parse');
 
let dataBuffer = fs.readFileSync('ABHINAV_RESUME1.pdf');

var resume;

pdf(dataBuffer).then(function(data) {
  resume = data.text; 
  // console.log(resume);
    
  const promt = resume + " \n " + "find the detailed work experience from above text";

  // console.log(promt);

  (async ()=>{
      const response = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: promt,
          temperature: 0,
          max_tokens: 1500,
        });

      console.log("response",response.data.choices);
      console.log("tokens",response.data.usage);
  })();
});





// (async () => {
//     const gptResponse = await openai.answers({
//       "documents": [resume],
//       "question": "extract work experience from document",
//       "search_model": "ada",
//       "model": "text-davinci-003",
//       "max_tokens": 125,
//     });

//     console.log(gptResponse.data);
// })();