import categoriesActions from "../categories/categoriesActions";
import ViewCartAction from "../viewCart/viewCartAction";
import { expect } from "chai";

describe('Product verify through', ()=>{
     it(' add cart and verify the total price.',async ()=>{
          await categoriesActions.productViewThrowCategories();
     })

})
