const path = require('path');
var cors = require('cors')

const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./util/database')

const Item = require('./models/item')

const app = express();
app.use(cors())

app.set('view engine', 'ejs');
app.set('views', 'views');


const itemRoutes = require('./routes/item')

app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(itemRoutes)

sequelize.sync({
    // force: true
})
    .then(() => {
        console.log('Database synchronized');
    })
    .catch(err => {
        console.error('Error synchronizing database:', err);
    });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});