import express from 'express';
import handlebars from 'express-handlebars'

import routes from './routes.js';

const port = 5000;

const app = express();

// Setup Handlebars
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));

app.set('view engine', 'hbs');
app.set('views', 'src/views');

// Setup middlewares
// Setup static middleware
app.use(express.static('src/public'));
// Parse form data from req
app.use(express.urlencoded());

// Routes
app.use(routes);

// Start server
app.listen(port, () => console.log(`Server is listening on http://localhost:${port}`));