 describe("Create new Account", () => {
  beforeEach("visit url", () => {
    cy.visit(
        "https://para.testar.org/parabank/index.htm;jsessionid=D8ED8A472732ABEE3365314242085787"
         )
    })
    
    it('get Register BTN', () => {
        cy.get('#loginPanel').find('p').contains('Register').click();
        
    });
  });

