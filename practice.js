//                                    Object

/*  Object *****


let car = {
     brand: "Toyota",
     color: "Red",
     model: "Corolla",
     drive: function(){
          console.log(`The car model is ${this.brand}`);
     }
}
car.brand = "Lambugani";
car.owner = "Saiful"
// console.log(car)

car.drive();

let car1 = new Object();

car1.brand = "Toyota";
*/

//                                 Inheritance 
/*
class Animal{
     constructor(name, color){
          this.name  = name;
          this.color = color;
     }

     run(){
          console.log(this.name + "is running!");
     }

     shout(){
          console.log(this.name +" is shouting!");
     }

}
class Monkey extends Animal{

     eatBanana(){
          console.log(this.name + " is eating Banana");
     }
}

let monkey = new Monkey('Compu', 'Black');
monkey.eatBanana();

*/


//                                  Method Overloading

/*
class Employee{
     constructor(name, role){
          this.name = name;
          this.role = role;
     }

     info(address, workLocation, specialty, graduationYear , department){
          this.address = address;
          this.workLocation = workLocation;
          this.specialty = specialty;
          this.graduationYear = graduationYear;
          this.department = department;
     }
     login(){
          console.log(`${this.name} is log in successfully.`);
     }
     logout(){
          console.log(`${this.name} is logout successfully.`);
     }
     requestLeaves(leaves){
          console.log(`${this.name} is requested ${leaves} days leave`)
     }
}


class QA extends Employee{

     requestCoffee(coffeeName){
          console.log(`${QA.capitalize(this.name)} has requested for ${coffeeName}  coffee`)
     }

    static capitalize(value){
     return value.charAt(0).toUpperCase() + value.substr(1,value.length);
    }
}



let saifulP = new QA("md Saiful Islam", "QA Annalist");

saifulP.requestLeaves(5);
saifulP.requestCoffee('Cafesino')

*/


//                        Getter and Setter    


class Animal{
     constructor(name){
          this.name = name;
     }
     fly(){
          console.log("Mai ur raha hu");
     }

     get getname (){
          return this.name;
     }


}

let bird = new Animal("Bird ");
console.log(bird.getname);