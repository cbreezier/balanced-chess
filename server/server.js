'use strict';
// @flow

const express = require('express');

import { helloWorld } from 'common';

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  // res.send({ express: `Hello From Express: ${helloWorld()}` });
  res.send({ express: `Hello From Express` });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
