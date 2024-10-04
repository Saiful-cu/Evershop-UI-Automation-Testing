import addToCartAction from '../addToCart/addToCartAction';
import checkoutAction from '../checkout/checkoutAction';
import viewCartAction from '../viewCart/viewCartAction';
import CategoriesObject from './categoriesObject'


class CategoriesAction{
     async  clickOnCategories(){
          await CategoriesObject.categories.click();
     }

     async selectCategories(){
          await CategoriesObject.selectMenCategories.click();
     }

     async  sortListBySelectingSize(){
          await CategoriesObject.selectSize.click();
     }
     async sortListBySelectingColor(){
          await CategoriesObject.selectColor.click();
     }

     async clickOnProduct(){
          await CategoriesObject.viewProducts.click();
     }
     async open(){
          await browser.url("https://demo.evershop.io/");
     }


    async productViewThrowCategories(){
          await this.open();
          await this.clickOnCategories();
          await this.selectCategories();
          await this.sortListBySelectingSize();
          await browser.pause(500);
          await this.sortListBySelectingColor();
          await browser.pause(500);
          await this.clickOnProduct();

          await addToCartAction.addToCart();
          await viewCartAction.viewCart();
          await checkoutAction.completeCheckout();
     }
}

export default new CategoriesAction();