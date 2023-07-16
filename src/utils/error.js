// errorHandler util to format the error
const errorHandler = (error) => {
  try {
    let formatError = String(error).split(':');
    formatError.shift();
    formatError = JSON.parse(formatError.join(':'));
    return formatError;
  } catch (e) {
    console.log(e);
    return { errorMessage: 'Internal Server Error', statusCode: 500 };
  }
};

module.exports = {
  errorHandler,
};
