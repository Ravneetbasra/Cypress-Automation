//cypress web automation
//Any test case file is called spec file

describe('My First Test Suite', function()
{
    it('My Eigth  Test ',function() {

     // handling child window

        cy.visit("https://rahulshettyacademy.com/AutomationPractice"); //visit-->navigate to the website
       // cy.get('#opentab').prop('href') // This will not work as cy.get is cypress command and prop is a jquery command

        cy.get('#opentab').then(function(e1) {
            const url = e1.prop('href')
            cy.visit(url) //CYPRESS DOESn't SUPPORT CROSS DOMAIN, so below code is written to handle actions in
             cy.origin("https://www.qaclickacademy.com", () => {
               cy.get("#navbarSupportedContent a[href*='about']").click();
               cy.get('.mt-50 h2').should('contain','QAClick Academy');
        })
        }
    )
       

})
})
