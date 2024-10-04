import  addToCartAction from '../addToCart/addToCartAction.js';
import  searchAction  from '../search/searchAction.js';
import viewCartAction from '../viewCart/viewCartAction.js';
import { expect } from 'chai'; 

describe("Search Functionality check", ()=>{
     it("should perform a search operation ", async()=>{
          await searchAction.searchProduct();
          
     });
     it("should perform a Add To Cart operation ", async()=>{
          await addToCartAction.addToCart();
          
     })
     it("should perform a View Cart  operation ", async()=>{
          await viewCartAction.clickViewCart();
          
     })
     
})