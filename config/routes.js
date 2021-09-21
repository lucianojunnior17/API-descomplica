const express = require('express');
const routes = express.Router()


let db = [
    { '1' : { Nome: 'Client 1', Idade: '20' }},
    { '2' : { Nome: 'Client 2', Idade: '22' }},
    { '3' : { Nome: 'Client 3', Idade: '23' }},
    { '4' : { Nome: 'Client 1', Idade: '24' }},

]
routes.get('/', (req, res) => {
     return res.json(db)
})

routes.post('/add', (req, res) => {
    const body = req.body

    if (!body)
        return res.status(400).end()

    db.push(body)
        return res.json(body)

})

routes.delete('/:id', (req, res) => {
    const id = req.params.id

    let newDb = db.filter(iten => {
        if(!iten[id])
            return iten
    })

    db = newDb

    return res.send(newDb)
})

module.exports = routes