class ViewCartObject{
     get cartIcon(){
          return $("//a[@href ='/cart' and contains(.,'VIEW CART (1)')  ]");
     }

     get grandTotalAmount(){
          return $(".grand-total-value");
     }
     get baseAmount(){
          return $(".sale-price")
     }
     // get numberQty(){
     //      return $("//div[@class='qty-box grid grid-cols-3 border border-[#ccc]']/input[@type='text' ]")
     // }



}

export default new ViewCartObject();