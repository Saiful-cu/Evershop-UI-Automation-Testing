import viewCartAction from "../viewCart/viewCartAction"
import { expect } from 'chai'; // Import Chai for assertions




describe('Verify The Cart Total Amount ',()=> {
     // verification

     it("should product price is correct in cart", async()=>{
          
          
          const singleProductCost = await viewCartAction.getSinglePrice();
          const totalPrice = await viewCartAction.getTotalPrice();
          
          const expectedTotalPrice = 5 * singleProductCost;

          expect(expectedTotalPrice).to.equal(totalPrice);

     })

})