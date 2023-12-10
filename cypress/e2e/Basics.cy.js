describe("Basic Test",()=> {
    beforeEach('visit base URL', ()=>{
     cy.visit('https://para.testar.org/parabank/index.htm;jsessionid=D8ED8A472732ABEE3365314242085787')
    })
    it('check logo',()=> { 
      cy.get(".logo").should('be.visible')
    })
    it("click on admin page", ()=> {
        cy.contains("Admin Page").click()
    })
    it('Enter Username and password', ()=>{

        
        cy.get('[name="username"]').type('test')
        cy.get('[name="password"]').type('123')
    })
    it ('click on read more', ()=>{
        cy.get('.more').contains("Read More").click() 
    })
  
})