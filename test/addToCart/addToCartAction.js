import addToCartObject from "./addToCartObject";



class AddToCartAction{
     
     async setColor(){
          await addToCartObject.productColor.click();
     }

     async  setSize(){
          await addToCartObject.productSize.click();
     }

     async setQty(quantity){
          await addToCartObject.productQty.setValue(quantity);
          
     }
     async clickAddToCart(){
          await addToCartObject.addToCartButton.click();
     }

     async addToCart(){
          await this.setSize();
          await browser.pause(1000)

          await this.setColor();
          await browser.pause(1000);

          await this.setQty(5);
          await browser.pause(1000);

          await this.clickAddToCart();
          await browser.pause(1000);
     }


}
export default new AddToCartAction();