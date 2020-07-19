const fetch = require('node-fetch');

const baseURL = 'https://pro-api.coinmarketcap.com';

exports.handler = async (event) => {
  try {
    const query = event.queryStringParameters.q;
    const response = await fetch(`${baseURL}/v1/cryptocurrency/info?symbol=${query}`, {
      headers: {
        Accept: 'application/json',
        'X-CMC_PRO_API_KEY': process.env.CMC_API_KEY,
      },
    });

    if (!response.ok) {
      return { statusCode: response.status, body: response.statusText };
    }

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
