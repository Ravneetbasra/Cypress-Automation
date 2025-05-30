describe('My First Test Suite', function()
{
    it('My FirstTest Case',function() {
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")
        // Mock Https Responses for generating Stub Data to test edge Scenarios
        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
            (req)=> {
            req.url = "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"
                req.continue((res) => {
                    //expect(res.statusCode).to.equal(403)
                })
            }
        ).as("dummyUrl")
         cy.get("button[class='btn btn-primary']").click()
        cy.wait('@dummyUrl')

            
}
)
    }
)