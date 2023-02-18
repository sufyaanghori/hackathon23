// back end js file

const axios = require('axios');
const fs = require('fs');

// import openai
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

const generateImage = async (prompt) => {
  try {
    const response = await openai.createImage(
      {
        prompt,
        n: 1,
        size: '1024x1024',
      }
    );
    const image = response.data;
    console.log(image);
    console.log('Image generated and saved to file!');
  } catch (error) {
    console.error(error);
  }
};

async function uploadFileUsingURL() {
  const fileURL = image.data[0.0];
  const metadata = JSON.stringify({
    name: "file name",
    description: "file description",
    image: fileURL,
  });
  const file = new File([metadata], "metadata.json", {
    type: mime.getType("png"),
  });
  const cid = await client.storeBlob(file);
  console.log(cid);
}

// Example usage:
generateImage('an armchair in the shape of an avocado');


