import shippingAddressObject from "./shippingAddressObject";

class ShippingAddressAction{

     async setName(){
          await shippingAddressObject.fullName.setValue('Md Saiful Islam');
     }

     async setTelephone(){
          await shippingAddressObject.telephone.setValue('016407620121');
     }

     async setAddress(){
          await shippingAddressObject.address.setValue('Fazlur Rahman Hall , City University , Khagan, Savar');
     }

     async setCity(){
          await shippingAddressObject.city.setValue('Dhaka');
     }

     async setCountry(){
          await shippingAddressObject.country.click();
          await shippingAddressObject.countryName.click();
     }

     // async setCountryName(){
     //      await shippingAddressObject.countryName.click();
     // }

     async setProvince(){
          await shippingAddressObject.province.click();
          await shippingAddressObject.provinceName.click();
     }

     async setPostalCode(){
          await shippingAddressObject.postalCode.setValue('19202');
     }

     async setUserAddress(){
          await this.setName();
          await this.setTelephone();
          await this.setAddress();
          await this.setCity();
          
          await this.setCountry();
          await browser.pause(500);

          await this.setProvince();
          await browser.pause(500);

          await this.setPostalCode();
     }


     
}

export default new ShippingAddressAction();