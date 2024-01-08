describe('recipe project', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
      cy.viewport(1200, 1200);
  })
    it('login', () => {
      cy.login() 
      
      cy.get("[data-test='homeAbout']").contains("About").should("be.visible").click({ force: true });
      cy.url().should("include", "/about");
      cy.get("[data-test='homeLogo']").contains("<Clarusway/>").should("be.visible").click({ force: true });
      cy.url().should("include", "/home");
    })
   
  })