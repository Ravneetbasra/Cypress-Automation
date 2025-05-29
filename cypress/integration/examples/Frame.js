//cypress web automation
//Any test case file is called spec file
import 'cypress-iframe'
describe('My First Test Suite', function()
{
    it('My Ninth  Test ',function() {

     // handling Frames

        cy.visit(Cypress.env('url')+"/AutomationPractice"); //to fecth env url from cypress.Config file
        cy.frameLoaded("#courses-iframe")
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
        cy.wait(4000);
        cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)


})
})
