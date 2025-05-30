 

describe('My First Test Suite', function()
{
    it('My FirstTest Case',function() {
        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")
        // Mock Https Responses for generating Stub Data to test edge Scenarios
        cy.intercept({
            method: 'GET',
            url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },
      {
        statusCode : 200,
        body:    [
	{
        "book_name": "Postman",
        "isbn": "RS750",
        "aisle": "111"
    }
]
 }).as('bookretrievals')
    cy.get("button[class='btn btn-primary']").click()
    cy.wait('@bookretrievals').then(({request,response}) => {
        cy.get('tr').should('have.length', response.body.length+1)
       
    })
    cy.get('p').should('have.text','Oops only 1 Book available')

//length of the response array = rows of the table

    })
})