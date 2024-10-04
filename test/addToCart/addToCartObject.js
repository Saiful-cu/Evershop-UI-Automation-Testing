class AddToCartObject{
     get productSize(){
          return $("//a[text() ='X' or text()='M']");
     }
     get productColor(){
          return $("//a[text() ='Black']");
     }
     get productQty(){
          return $("//input[@placeholder ='Qty']");
     }
     get addToCartButton(){
          return $("//button/span[text()='ADD TO CART']")
     }
     
}

export default new AddToCartObject();