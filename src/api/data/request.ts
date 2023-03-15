// Imported like this to use TS features
const axios = require('axios').default;

export const get = async (url: string) => {
  try {
    const response = await axios.get(url);
    console.log(response);
  }
  catch (ex) {
    console.log(ex);
  }
  finally {
    // do nothing for now
  }
}

