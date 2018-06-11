'use strict';
// @flow

import express from 'express';

import { helloWorld } from 'common';

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({ express: sampleResponse() });
});

function sampleResponse(): string {
  return `Hello From Express: ${helloWorld()}`;
}

app.listen(port, () => console.log(`Listening on port ${port}`));
