import searchObject from "./searchObject";

const searchText = "Nike react phantom run flyknit 2 "
class SearchAction{
     async clickSearchIcon(){
          await searchObject.searchIcon.click();
     }

     async enterProductNameInSearch(){
          await searchObject.searchInputField.setValue(searchText);
     }

     async enterSearch(){
          await browser.keys('Enter');
     }

     async productDetails(){
          await searchObject.viewProduct.click();
     }

     async open(){
          await browser.url("https://demo.evershop.io/");
     }

     async searchProduct(){
          await this.open();
          await this.clickSearchIcon();
          await this.enterProductNameInSearch();
          await this.enterSearch();
          await browser.pause(5000);
          await this.productDetails();
     }
}
export default new SearchAction();