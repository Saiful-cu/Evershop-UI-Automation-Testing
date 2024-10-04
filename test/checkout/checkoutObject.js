class CheckoutObject{
     get checkout(){
          return $('//span[text() = "CHECKOUT"]')
     }
     get email(){
          return $("//input[@name = 'email']")
     }
     get continueShipping(){
          return $("//span[contains(.,'Continue to shipping')]")
     }

     // Payment process
     get shippingMethod(){
          return $("//span[contains(.,'Standard Delivery')]")
     }

     get  continueToPayment(){
          return $("//span[contains(.,'Continue to payment')]")
     }

     get paymentMethod(){
          return $("//img[@alt='Cash On Delivery']/ancestor::div[contains(@class,'flex')]")
     }
     get placeOrder(){
          return $("//span[text()='Place Order']")
     }
     

 



}

export default new CheckoutObject();