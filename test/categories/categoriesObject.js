class CategoriesObject{

     get categories(){
          return $("//a[contains(.,'Shop ❤️')]");
     }

     get selectMenCategories(){
          return $("//a[contains(.,'Men')]");
     }

     get selectSize(){
          return $("//span[text() = 'L']");
     }
     get selectColor(){
          return $('//span[text()= "Black" ]');
     }

     get viewProducts(){
          return $("//span[contains(.,'Nike air zoom pegasus 35')]");
     }


}

export default new CategoriesObject();