function assignId(randomLines) {
  if (!randomLines || !Array.isArray(randomLines)) {
    throw new Error(JSON.stringify({ errorMessage: 'Invalid Data', statusCode: 500 }));
  }

  const linesData = randomLines.map((lineObj, idx) => {
    const newLineObj = lineObj;
    newLineObj.id = `LO ${idx + 1}`;
    return newLineObj;
  });

  return linesData;
}

function checkValidData(lineString, randomLines) {
  // To handle the case when lineString not given through body for using default lineString
  if (!lineString || !randomLines) {
    throw new Error(JSON.stringify({ errorMessage: 'Required Body not Found', statusCode: 400 }));
  }

  // Validate the linestring
  if (lineString.type !== 'LineString' || !Array.isArray(lineString.coordinates) || !Array.isArray(randomLines)) {
    throw new Error(JSON.stringify({ errorMessage: 'Invalid Data', statusCode: 500 }));
  }

  randomLines.forEach((lineStringObj) => {
    const randomLineString = lineStringObj.line;
    if (!randomLineString || randomLineString.type !== 'LineString' || !Array.isArray(randomLineString.coordinates)) {
      throw new Error(JSON.stringify({ errorMessage: 'Invalid Data', statusCode: 500 }));
    }
  });
}

module.exports = {
  assignId,
  checkValidData,
};
