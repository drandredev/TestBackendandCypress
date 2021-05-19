describe('Pruebita', () =>{
    /*
    it('Pruebatres', () =>{
        cy.request('POST', 'http://localhost:3001/api/persons', { name: 'Jane', number: "75-44-532352" }).then(
            (response) => {
              // response.body is automatically serialized into JSON
              expect(response.body).to.have.property('name', 'Jane') // true
            }
          )
    })
    */
   
    it('Prueba', () =>{
        cy.visit('http://localhost:3001/info')
        cy.contains('May')
    })
    it('Pruebados', () =>{
        cy.request('http://localhost:3001/api').as('id')

        cy.get('@id').should((response) => {
        //expect(response.body).to.have.length(4)
        expect(response).to.have.property('headers')
        expect(response).to.have.property('duration')
        })  
    })
    it('Pruebatres', () =>{
        cy.request('DELETE', 'http://localhost:3001/api/persons/1')
    })
    it('Pruebacuatro', () =>{
        cy.request('http://localhost:3001/api')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json')
  })
})
