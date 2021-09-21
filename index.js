const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
conts = require('./config/routes');


const app = express();

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());
app.use(routes());

let db = [
    { '1' : { Nome: 'Client 1', Idade: '20' }},
    { '2' : { Nome: 'Client 2', Idade: '22' }},
    { '3' : { Nome: 'Client 3', Idade: '23' }},
    { '4' : { Nome: 'Client 1', Idade: '24' }},

]

app.get('/', (req, res) => {
     return res.json(db)
})

app.post('/add', (req, res) => {
    const body = req.body

    if (!body)
        return res.status(400).end()

    db.push(body)
        return res.json(body)

})

app.listen(3000, () => {
    console.log('Servidos rodando na porta 3000')
})