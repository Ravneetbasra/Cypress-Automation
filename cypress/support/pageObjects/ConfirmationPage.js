class   ConfirmationPage {
    submitFormDetails() {
          cy.submitFormDetails()
    }

    getAlertMessage() {
        //.should('contain','Success')
        return cy.get(".alert-success")
    }
}
export default ConfirmationPage