const express = require('express'),
	http = require('http');

const hostname = 'localhost';
const port = 3000;
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter');
const promotionsRouter = require('./routes/promotionsRouter');
const leadersRouter = require('./routes/leadersRouter');


app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());

app.use('/dishes', dishRouter);
app.use('/promotions', promotionsRouter);
app.use('/leaders', leadersRouter);


const server = http.createServer(app);

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
  });
  