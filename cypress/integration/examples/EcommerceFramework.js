import HomePage from "../../support/pageObjects/HomePage"



describe('End to End ecommerce Test', function() {
  before(function() {
            //runs once before all tests in this block
            cy.fixture('example').then(function(data){
                this.data = data
                 this.homepage = new HomePage() //how object creation is done in Javascript

            })
        })


    it('Submit Order', function() {
        
        const productName = this.data.productName
        
        this.homepage.goTo(Cypress.env('url')+"/loginpagePractise/#")
        const productPage = this.homepage.login(this.data.username, this.data.password)
        productPage.pageValidation()
        productPage.getCardLimit().should('have.length', 4)
        productPage.selectProduct(productName)
        productPage.selectFirstProduct()
        const cartPage = productPage.goTocart()
        cartPage.checkTotalPriceInCart().then(function(sum) {
            expect(sum).to.be.lessThan(200000);
          })
        const confirmationPage= cartPage.clickonCheckOutBtn()
        confirmationPage.submitFormDetails()
        confirmationPage.getAlertMessage().should('contain','Success')
       
        
       
      
        
    })
})