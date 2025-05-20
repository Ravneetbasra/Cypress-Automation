//cypress web automation
//Any test case file is called spec file

describe('My First Test Suite', function()
{
    it('My Third Test ',function() {

        // CHECKBOX HANDLING
      
        cy.visit("https://rahulshettyacademy.com/AutomationPractice") //visit-->navigate to the website
       cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1') // you can use click but check is more reliable
       //for property of element, we use 'have' and for behavior we use 'be'

       //if you want to uncheck it
       cy.get('#checkBoxOption1').uncheck().uncheck().should('not.be.checked')
       cy.get('input[type="checkbox"]').check(['option2','option3'])


        // DROPDOWN HANDLING STATIC AND DYNAMIC DROPDOWN

        //STATIC DROPDOWN
        cy.get('select').select('option2').should('have.value', 'option2')

        //DYNAMIC DROPDOWN
        cy.get('#autocomplete').as('dynamicDropdown')
        cy.get('@dynamicDropdown').type('ind')

        cy.wait(2000)
         cy.get('.ui-menu-item div').each(($el, index, $list) => {

            if($el.text() == 'India')
            {
                $el.click()
            }
}  )

        cy.get('@dynamicDropdown').should('have.value','India')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //RADIO BUTTONS
        cy.get('[value="radio2"]').check().should('be.checked')
        

})
})
