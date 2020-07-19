exports.handler = async (event) => {
  try {
    const query = event.queryStringParameters.q;

    return {
      statusCode: 200,
      body: JSON.stringify([query]),
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
