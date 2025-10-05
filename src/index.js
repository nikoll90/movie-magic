import express from 'express';
import handlebars from 'express-handlebars'
import homeController from './controllers/homeController.js';

const port = 5000;

const app = express();

// Setup Handlebars
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));

app.set('view engine', 'hbs');
app.set('views', 'src/views');

// Setup middlewares
app.use(express.static('src/public'));

// Routes
app.use(homeController);

// Start server
app.listen(port, () => console.log(`Server is listening on http://localhost:${port}`));