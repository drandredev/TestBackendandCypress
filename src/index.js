const express = require('express')

const app = express()
app.use(express.json())


const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)

app.get('/api', (request,response)=>{response.json(persons)})
app.get('/info', (request,response)=>{response.send("<p>Phonebook has info for "+ persons.length + " persons</p>"+"<p>"+ new Date() +"</p>")})
app.get('/api/persons/:id', (request,response)=>{
    let filtro = persons.filter((persona)=>{if (persona.id == request.params.id) {
        return true
        
    }})
    if (filtro.length > 0) {
        response.json(filtro)
      } else {
        response.status(404).end()
        console.log("Hola")
      }
})
app.delete('/api/persons/:id', (request,response)=>{
    persons = persons.filter((persona)=>{if (persona.id != request.params.id) {
        return true
        
    }})
    response.status(204).end()
})

app.post('/api/persons', (request,response)=>{
    let number = Math.floor(Math.random() * 10000);
    const personas = request.body
    personas.id = number
    console.log(personas)
    let unico_nombre = persons.filter((persona)=>{if (persona.name == personas.name) {
        return true        
    }})
    let unico_celular =  persons.filter((persona)=>{if (persona.number == personas.number) {
        return true
        
    }})
    if (unico_nombre.length == 0 && unico_celular == 0) {
        persons.push(personas)
        response.json(personas)
    }else{
        response.status(404).end()
    }
    
    
})




let persons = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "040-123456"
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "39-44-5323523"
    },
    {
        id: 3,
        name: "Dan Abramov",
        number: "12-43-234345"
    },
    {
        id: 4,
        name: "Mary Poppendick",
        number: "39-23-6423122"
    }
]

