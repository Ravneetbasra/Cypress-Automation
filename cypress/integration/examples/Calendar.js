//cypress web automation
//Any test case file is called spec file
import 'cypress-iframe'
describe('Calendar Test', function()
{
    it('Verify Date Selection ',function() {

     // CALENDAR
        const monthNumber = "8";
        const date = "15";
        const year = "2027";
        const expectedList = [monthNumber, date, year];
          cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers"); 
        cy.get("div[class*='picker__inputGroup']").click()
         cy.get(".react-calendar__navigation__label").click()
          cy.get(".react-calendar__navigation__label").click()
        cy.contains("button",year).click();
        cy.get(".react-calendar__year-view__months__month").eq((Number(monthNumber))-1).click();
        cy.contains("abbr",date).click();

        cy.get(".react-date-picker__inputGroup__input").each(($e1,index)=>
        {
          cy.wrap($e1).invoke('val').should('eq', expectedList[index]);

        })




      
       

})
})
