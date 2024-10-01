
class Utilities{

     trimsFloat(value){
          //console.log(value);
          const floatValue = parseFloat(value.replace(/[$,]/g, ''));
          //console.log(floatValue);
          return floatValue;
     }
     trimsInt(value){
          const IntValue = parseInt(value.replace('$',''));
          return IntValue;
     }
}

export default new Utilities();