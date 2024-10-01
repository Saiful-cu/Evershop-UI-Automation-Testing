class SearchObject{
     get searchIcon(){
          return $(".search-icon")
     }
     get searchInputField(){
          return $("//input[@placeholder='Search']")
     }
     get viewProduct(){
          return $("//div[@class='listing-tem']//img[@src='https://demositefiles.blob.core.windows.net/images/catalog/5761/1580/plv5236-Black-listing.png']")
     }
     
}

export default new SearchObject();