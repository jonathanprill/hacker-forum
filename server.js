const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const routes = require('./controllers/');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
//This uses Heroku's process.env.PORT value when deployed and 3001 when run locally.
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// pass the helpers 
const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
//handlebars

//Cookies
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));
//Cookies

//This method is for specific front end files like style sheets, and js files. 
app.use(express.static(path.join(__dirname, 'public')));

// turn on routes
app.use(routes);


// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});