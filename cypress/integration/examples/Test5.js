//cypress web automation
//Any test case file is called spec file

describe('My First Test Suite', function()
{
    it('My Fifth Test ',function() {

     // HANDLING CHILD WINDOWS
        cy.visit("https://rahulshettyacademy.com/AutomationPractice"); //visit-->navigate to the website

        //if someothing opens in new tab , CYPRESS cannot handle it
        /*So, using JQuery, we can remove this target="_blank" at runtime and invoke this
        DOM again, so the new window will open in same tab.

        */

        cy.get("#opentab").invoke('removeAttr', 'target').click(); // invoke is method which will remove attribute target
        //'New Window' will open on same tab
        /*by writting only this    cy.get('#navbarSupportContent a[href*="about"]').click();
        CYPRESS DOESN't SUPPORT CROSS DOMAIN SWITCHING i.e moving to complete different site
        TO RESOLVE THIS CY.ORIGIN is the command
         */

        cy.origin("https://www.qaclickacademy.com", () => {
               cy.get("#navbarSupportedContent a[href*='about']").click();
               cy.get('.mt-50 h2').should('contain','QAClick Academy');
        })
     

        
      
})
})
