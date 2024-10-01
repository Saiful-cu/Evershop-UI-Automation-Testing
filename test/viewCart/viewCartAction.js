import ViewCartObject from "./viewCartObject";
import Utilities from "../utility/utilities";

class ViewCartAction{
     async clickViewCart(){
          await ViewCartObject.cartIcon.click();
     }

     // async getProductQty(){
     //      const numberProduct = await ViewCartObject.numberQty.parseInt();
     //      return numberProduct;
     // }

     async getTotalPrice(){
          const totalPriceText = await ViewCartObject.grandTotalAmount.getText();
          //console.log(totalPriceText)
          return Utilities.trimsFloat(totalPriceText);
     }
     async getSinglePrice(){
          const singlePriceText = await ViewCartObject.baseAmount.getText();
          return Utilities.trimsFloat(singlePriceText);
     }
     async viewCart(){
          await this.clickViewCart();

     }


}

export default new ViewCartAction();