const turf = require('@turf/turf');
const { assignId, checkValidData } = require('../utils/helper');
const { errorHandler } = require('../utils/error');

const findIntersection = (req, res) => {
  try {
    const { lineString, randomLines } = req.body;

    // check valid line string data
    checkValidData(lineString, randomLines);

    // to assign id to all line object
    const randomLinesWithId = assignId(randomLines);

    // Convert linestring to Turf.js format
    const turfLineString = turf.lineString(lineString.coordinates);

    // Find intersections
    const intersections = randomLinesWithId.filter((line) => {
      const turfLine = turf.lineString(line.line.coordinates);
      return turf.booleanIntersects(turfLine, turfLineString);
    });

    // Prepare response
    const result = intersections.map((intersection) => ({
      id: intersection.id,
      point: turf.lineIntersect(
        turfLineString,
        turf.lineString(intersection.line.coordinates),
      ).features[0].geometry.coordinates,
    }));

    return res.json(result);
  } catch (error) {
    const formatError = errorHandler(error);

    return res.status(formatError.statusCode).send({ error: formatError.errorMessage });
  }
};

module.exports = {
  findIntersection,
};
