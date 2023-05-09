const express = require('express')
const db = require('./model/db') // calls file db.js in which is connect() function
const bodyParser = require('body-parser');
let cors = require('cors');


const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.get('/', (req, res) => {
    res.render('index');
});

const userRouter = require('./routes/users');
const projectsRouter = require('./routes/projects');

app.use('/users', userRouter);
app.use('/projects', projectsRouter);

app.listen(process.env.PORT || 3000, () => {

});

