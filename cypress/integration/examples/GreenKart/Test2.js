//cypress web automation
//Any test case file is called spec file

describe('My First Test Suite', function()
{
    it('My Second Test Suite',function() {
      
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/") //visit-->navigate to the website
        cy.get('.search-keyword').type('ca')
       
       
       cy.get('.products').as('productLocator')
       
       

         
         
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {

            const textVeg = $el.find('h4.product-name').text()
        if (textVeg.includes('Cashews')) {
            cy.wrap($el).find('button').click()
          
       } 
})

 
       cy.get('.cart-icon > img').click()
       cy.contains('PROCEED TO CHECKOUT').click()
       cy.get('button').contains('Place Order').click()
 



}  )

})
