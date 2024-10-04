import shippingAddressAction from "../shippingAddress/shippingAddressAction";
import checkoutObject from "./checkoutObject";

class CheckoutAction{
     async clickOnCheckout(){
          await checkoutObject.checkout.click();
     }
     async setEmail(){
          await checkoutObject.email.setValue('saifut@test.com');
     }
     async clickContinueShipping(){
          await checkoutObject.continueShipping.click();
     }
     async selectShippingMethod(){
          await checkoutObject.shippingMethod.click();
     }

     async clickContinueToPayment(){
          await checkoutObject.continueToPayment.click();
     }

     async selectPaymentMethod(){
          await checkoutObject.paymentMethod.click();
     }

     async clickPlaceOrder(){
          await checkoutObject.placeOrder.click();
     }

     async completeCheckout(){
          await this.clickOnCheckout();
          await this.setEmail();
          await this.clickContinueShipping();
          await shippingAddressAction.setUserAddress();
          await this.selectShippingMethod();
          await this.clickContinueToPayment();
          await this.selectPaymentMethod();
          await this.clickPlaceOrder();
     }
}

export default new CheckoutAction();