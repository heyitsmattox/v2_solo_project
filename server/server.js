/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const db = require('./db');

const app = express();

const port = 3005;

// morgan middleware 3rd party
app.use(morgan('dev'));

// express json Middleware
// Comes built in with express
// When we send a request
// Takes info from body of the request
// Going to attach to our request object under BODY
// i.e req.body is now valid
app.use(express.json());

// send our index.html file once we create it here
// app.get('/', (req, res) => {
//   // console.log('Is my get request loading')
//   // res.setHeader('Content-Type', 'text/html');
//   // return res.status(200).sendFile(path.resolve(__dirname, '../public/index.html'));
// });

// Get all bathrooms
app.get('/bathrooms', async (req, res, next) => {
  try {
    const results = await db.query('select * from bathrooms');
    console.log('HERE ARE THE RESULTS ---->', results);
    res.status(200).json({
      status: 'success',
      results: results.rows.length,
      data: {
        bathrooms: results.rows,
      },
    });
  } catch (err) {
    return next({
      log: 'ERR within getting all the bathrooms ----> /bathrooms',
      message: { err: 'route of /bathrooms: ERROR: Check server logs for details' },
    });
  }
});

// Get a bathroom
// eslint-disable-next-line consistent-return
app.get('/bathrooms/:id', async (req, res, next) => {
  // console.log(req.params.id);
  try {
    const results = await db.query('select * from bathrooms where id = $1', [req.params.id]);
    res.status(200).json({
      status: 'Selecting a bathroom succeeded',
      data: {
        bathroom: results.rows[0],
      },
    });
    console.log(results.rows[0]);
  } catch (error) {
    return next({
      log: 'ERR within getting an individual bathroom ---> /v1/bathrooms/:id',
      message: { err: 'route of api/v1/bathrooms/:id: ERROR: Check server logs for details' },
    });
  }
});

// Create a bathroom
app.post('/bathrooms', async (req, res, next) => {
  console.log(req.body);
  try {
    const results = await db.query(
      // the query returning * returns the newest result into the db
      'INSERT INTO bathrooms (bathroom_of, city, description) values ($1, $2, $3) returning *',
      [req.body.bathroom_of, req.body.city, req.body.description],
    );
    console.log(results);
    res.status(201).json({
      status: 'creating a bathroom succeeded',
      data: {
        bathroom: results.rows[0],
      },
    });
  } catch (err) {
    return next({
      log: 'ERR within creating a bathroom---> /v1/bathrooms',
      message: { err: 'route of api/v1/bathrooms/:id: ERROR: Check server logs for details' },
    });
  }
});

// Update bathroom

app.put('/bathrooms/:id', async (req, res, next) => {
  console.log(`this is my req.body ${req.body}`);
  try {
    const results = await db.query('UPDATE bathrooms SET bathroom_of = $1, city = $2, description = $3 where id = $4 returning *', [req.body.bathroom_of, req.body.city, req.body.description, req.params.id]);
    // console.log(`this is my req ID ${req.params.id}`);
    // console.log(req.body);
    console.log(`this is my req.body ${req.body}`);
    console.log(results);
    res.status(200).json({
      status: 'update was successful',
      data: {
        bathroom: results.rows[0],
      },
    });
  } catch (err) {
    return next({
      log: 'ERR within creating a bathroom---> /bathrooms/:id',
      message: { err: 'route of /bathrooms/:id: ERROR: Check server logs for details' },
    });
  }
});

// Delete a bathroom
app.delete('/bathrooms/:id', async (req, res, next) => {
  try {
    const results = await db.query('DELETE from bathrooms where id = $1', [req.params.id]);
    console.log(results);
    res.status(204).json({
      status: 'deletion was successful',
    });
  } catch (err) {
    return next({
      log: 'ERR within deleting a bathroom---> /v1/bathrooms',
      message: { err: 'route of api/v1/bathrooms/:id: ERROR: Check server logs for details' },
    });
  }
  // res.status(204).json({
  //   status: 'delete was successful - no data needed to return',
  // });
});

app.listen(port, () => {
  console.log(`server is up and running on port: ${port}`);
});
