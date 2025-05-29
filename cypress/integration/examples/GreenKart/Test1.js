//cypress web automation
//Any test case file is called spec file

describe('My First Test Suite', function()
{
    it('My First Test Suite',function() {
        /**navigating to url --> visit
        Through Command Line, Cypress runs in headless in electron
        Update configurations in cypress.json which over rides existing behavior
        cypress supports Css selectors only
        We can see what happened on every step with screenshot and error  messages in cypress
        Cypress is asynchronous in nature and there is no gaurntee in sequence of execution, but cypress takes care of it
        Selenium is Synchronous
        Promise comes with rejection, resolved , pending
        .then()---> wait until promise is resolved then only it(cypress) will move to next step-->Noisy Promise 

        **/
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/") //visit-->navigate to the website
        cy.get('.search-keyword').type('ca')
       // cy.wait(2000);
       //selenium get hit url in browser, cypress get acts like findElement of Selenium
       // cy.get('.product:visible').should('have.length',4);
        /*
        ALIASING TO REUSE LOCATORS
        cypress has Alias command i.e as('nameOfLocator') to name the locator so that no need to use the locator again and again
         Example: cy.get('products').as('productLocator')

        **/
       cy.get('.products').as('productLocator')
        //parent-child chaining
        cy.get('@productLocator').find('.product').should('have.length',4)
       
        cy.get(':nth-child(3) > .product-action > button').click()
        //eq gets product with index 2 as below example
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function()
    {
        console.log('sf')
    })

         
     /**
      * console.log('sf') //It will print directly on browser console,,in inspect tool you can see
     console.log() is javascript method and not cypress command, it will execute even without page loading 
     so, that means it executes firstly then the tests are run, so it is asynchronous
     Tp make this synchronous, use then() command as above
    **/

        cy.get('@productLocator').find('.product').each(($el, index, $list) => {

            const textVeg = $el.find('h4.product-name').text()
        if (textVeg.includes('Cashews')) {
            cy.wrap($el).find('button').click()
          
       } 
})
  /**text() is also not cypress command, text() is a jquery method
         * const logo = cy.get('.brand')
         * vy.log(logo.text())
         * Above code will not work
         * only cypress related commands work that for above code, promise gets confused
         * But Below code works as Cypress supports jquery objects that is text() but in a way that the code written below works.
         * Non cypress commands cannot resolve promise by themselves. We need to manually resolve it by then()
         * Below code is to print log
         * **/
     cy.get('.brand').then(function(logoelement){
      
        cy.log(logoelement.text()) 
     })

     /**
      * Assert if logo text is correctly displayed
      */

     cy.get('.brand').should('have.text','GREENKART')
    
    
    })



}  )


