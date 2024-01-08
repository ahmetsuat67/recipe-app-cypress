describe('recipe project', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.viewport(1200, 1200);
    })
    it('login', () => {
        cy.login()
        cy.get("[data-test='homeSearch']").type("r")
        cy.get("[data-test='homeSearchBtn']").click({ force: true });
        cy.get("[data-test='cardHeader']").should("be.visible")
        cy.get("[data-test='cardImage']").should("be.visible")
        cy.get("[data-test='cardBtn']").should("be.visible").first().click({ force: true });
        cy.url().should("include", "/details");

    })

})