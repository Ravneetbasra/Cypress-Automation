import ConfirmationPage from "./ConfirmationPage";

class CartPage {

    checkTotalPriceInCart() {
            let sum = 0
       return cy.get('tr td:nth-child(4) strong').each($e1=> {
          const amount =  Number($e1.text().split(" ")[1].trim())
          sum = sum + amount
        }).then(() => {
            //expect(sum).to.be.lessThan(200000);
            return sum
        })
    }

    clickonCheckOutBtn() {
         cy.contains('button', 'Checkout').click()
         return new ConfirmationPage()
    }


}
export default CartPage;