class ShippingAddressObject{
     get fullName(){
          return $("//input[@placeholder= 'Full name']");
     }

     get telephone(){
          return $("//input[@placeholder ='Telephone']");
     }

     get address(){
          return $("//input[@placeholder='Address']");
     }

     get city(){
          return $("//input[@placeholder='City']");
     }
     get country(){
          return $("//select[@placeholder = 'Country']");
     }
     get countryName(){
          return $("//option[text()='China']");
     }

     get province(){
          return $("//select[@placeholder = 'Province']");
     }

     get provinceName(){
          return $("//option[text() = 'Anhui']");
     }

     get postalCode(){
          return $("//input[@placeholder = 'Postcode']");
     }
}

export default new ShippingAddressObject();