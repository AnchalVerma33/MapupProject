// It is used to assign unique id to each line object in randomLines
function assignId(randomLines) {
  if (!randomLines || !Array.isArray(randomLines)) {
    throw new Error(
      JSON.stringify({ errorMessage: 'Invalid Data', statusCode: 500 }),
    );
  }

  const linesData = randomLines.map((lineObj, idx) => {
    const newLineObj = lineObj;
    newLineObj.id = `LO ${idx + 1}`;
    return newLineObj;
  });

  return linesData;
}

// It is used to check and validate lineString and random line data
function checkValidData(lineString, randomLines) {
  // To handle the case when lineString not given through body for using default lineString
  if (!lineString || !randomLines) {
    console.log('Required Data Not Found');
    throw new Error(
      JSON.stringify({
        errorMessage: 'Required Body not Found',
        statusCode: 400,
      }),
    );
  }

  // Validate the typeof lineString whether it is of type LineString and in Array format
  // It also checks whether random Lines is of Array format
  if (
    lineString.type !== 'LineString'
    || !Array.isArray(lineString.coordinates)
    || !Array.isArray(randomLines)
  ) {
    console.log('Invalid Data');
    throw new Error(
      JSON.stringify({ errorMessage: 'Invalid Data', statusCode: 500 }),
    );
  }

  // Validate the typeof each randomLines object
  randomLines.forEach((lineStringObj) => {
    const randomLineString = lineStringObj.line;
    if (
      !randomLineString
      || randomLineString.type !== 'LineString'
      || !Array.isArray(randomLineString.coordinates)
    ) {
      throw new Error(
        JSON.stringify({ errorMessage: 'Invalid Data', statusCode: 500 }),
      );
    }
  });
}

module.exports = {
  assignId,
  checkValidData,
};
