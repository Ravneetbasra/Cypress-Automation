//cypress web automation
//Any test case file is called spec file

describe('My First Test Suite', function()
{
    it('My Fourth Test ',function() {

        /*CYPRESS HAVE CAPABILITY OF BROWSER EVENTS. window:alert is the event which get fired on alert open
        so you are firing the event through cypress to get access to that alert
        */
        
      
        cy.visit("https://rahulshettyacademy.com/AutomationPractice") //visit-->navigate to the website
        //Automatically Cypress handles Alerts
       cy.get('#alertbtn').click()
       cy.get('input[value="Confirm"]').click()

       //windows:alert ---> is an event to manipulate Alerts
     //  cy.on('window:alert') -->on is a method to trigger any event
       //Automatically alert will open when the above line of code is written

       cy.on('window:alert', (str) =>
    {
        //Mocha
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })
        //TO ACCESS THE CONFIRM EVENT:

         cy.on('window:confirm', (str) =>
    {
        //Mocha
        expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })

})
})
