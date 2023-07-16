# Intersections API

This is a Express-NodeJS application that provides an API for finding intersections between a given linestring and a set of randomly spread lines.

## Requirements

To develop and run this application, you need to have the following:

- Node.js (for Express-NodeJS)
- [turf.js](https://turfjs.org/docs/) library for Node.js

## Problem Statement

The Intersections API has the following requirements:

- It should be a POST request protected with a header-based authentication check.
- The API expects a GeoJSON linestring with 5,000 points in the request body.
- There is a set of 50 randomly spread lines (with just start and end points) on the plane.
- The API needs to determine which of the 50 lines (identified by L01 - L50) intersect with the given linestring.

The API should return one of the following:

- An empty array `[]` if there are no intersections.
- An array of intersecting line IDs along with the point of intersection.
- An error message with a 5XX status code if the supplied linestring is invalid.
- An error message with a 4XX status code if the supplied request body or auth header are missing or malformed.

## Server Setup

- Download the code from following repository. 
- Make sure node,npm is installed on system.
- Follow up with installing the required dependecies by using following command 
    ```Shell
    npm install 
    ```
- Create an environment variable file in root directory with name ```.env```
- Paste following content in ```.env``` file
    ```SECRET_KEY = 'YOUR_SECRET_KEY'```
- Make sure port 3000 is free on system.
- To run in dev mode use 
    ```Shell
    npm run dev
    ```
- To run in production mode 
    ```Shell
    npm run start
    ```


## Postman Collection 

- Signup using Postman
- [![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/19486549-86f7fcfb-94bd-4a58-a57b-793846f9ca7a?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D19486549-86f7fcfb-94bd-4a58-a57b-793846f9ca7a%26entityType%3Dcollection%26workspaceId%3D5d443e49-03dd-4a97-ad95-188e6f27685c)

## Code Explanation

The code for the Intersections API is implemented using Express-NodeJS. Here is an overview of the code:

1. Import required libraries and set up Express:

   ```javascript
    const express = require('express');
    const cors = require('cors');
    const { router } = require('./routes/route');

    const app = express();
    app.use(express.json({ limit: '10mb' }));
    app.use(cors());
    app.use('/api', router);

2. Define the necessary middleware and routing:
- express.json({ limit: '10mb' }) is used to parse the request body containing the linestring.
- cors() enables Cross-Origin Resource Sharing (CORS) to allow requests from different origins.
- /api is the base URL for the API routes, which will be handled by the router defined in ./routes/route.js.

3. Start the server on port 3000:

```javascript
  app.listen(3000, () => {
  console.log('Server is running on port 3000');
  });
  ```


- Please note that the code provided here is the entry point of the application. The actual logic for finding intersections and handling the API request is implemented in the ./routes/route.js file. Make sure to define appropriate route handlers and integrate the required libraries, such as turf.js, for performing the intersection calculations.

- Remember to install the required dependencies (express, cors, etc.) and import the necessary libraries and routes (route.js) to run the code successfully.

- This README provides an overview of the Intersections API, its requirements, and the explanation of the provided code. Make sure you have the necessary dependencies installed and follow the instructions to execute the application.
