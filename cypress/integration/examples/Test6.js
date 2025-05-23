//cypress web automation
//Any test case file is called spec file

describe('My First Test Suite', function()
{
    it('My Sixth  Test ',function() {

     // HANDLING WEB TABLES
        cy.visit("https://rahulshettyacademy.com/AutomationPractice"); //visit-->navigate to the website
        cy.get('table[name="courses"] tr td:nth-child(2)').each(($el, index, $list) => {

            const text = $el.text()
            if(text.includes('Python')) {
              cy.get('table[name="courses"] tr td:nth-child(2)').eq(index).next().then(function(price){
                     //we can't use text directly, so we have used then to resolve the above promise
                    // text can't be used as it is jquery 
                  const priceText =    price.text()
                  expect(priceText).to.equal('25')

              })
              //move to sibling from your desired element using next()

              
             
            }
            
              
})

        
})
})
