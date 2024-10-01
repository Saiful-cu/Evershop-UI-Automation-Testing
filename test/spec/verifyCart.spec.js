import addToCartAction from "../addToCart/addToCartAction"
import searchAction from "../search/searchAction"
import viewCartAction from "../viewCart/viewCartAction"
import { expect } from 'chai'; // Import Chai for assertions




describe('Verify The Cart Total Amount ',()=> {
     it("should perform a search operation ", async()=>{
          await searchAction.searchProduct();
          
     });
     it("should perform a Add To Cart operation ", async()=>{
          await addToCartAction.addToCart();
          
     })
     it("should perform a View Cart  operation ", async()=>{
          await viewCartAction.clickViewCart();
          
     })

     // verification

     it("should product price is correct in cart", async()=>{
          
          
          const singleProductCost = await viewCartAction.getSinglePrice();
          const totalPrice = await viewCartAction.getTotalPrice();
          
          const expectedTotalPrice = 5 * singleProductCost;

          expect(expectedTotalPrice).to.equal(totalPrice);

     })

})