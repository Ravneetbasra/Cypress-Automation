//cypress web automation
//Any test case file is called spec file

describe('My First Test Suite', function()
{
    it('My Seventh  Test ',function() {

     // HANDLING MOUSE HOVER,CYPRESS DOESN"T SUPPORT MOUSE HOVER BUT THERE IS AN ALTERNATIVE WAY

        cy.visit("https://rahulshettyacademy.com/AutomationPractice"); //visit-->navigate to the website
        //show method in jquery : show hideen and selected method
        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include','top')

        //ANOTHER WAY TO DO THIS FORCE CLICK for hidden element
        //**
        // cy.contains('Top').click({force:true})
        // cy.url().should('include','top')
        //  **/
        

})
})
