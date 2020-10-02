module.exports = function toReadable (number) {
    let str = "";

    if(number < 10){
      str = tn(number);
    } else if(number >= 10 && number < 20) {
      str = tnn(number);
    } else if(number >= 20 && number < 99) {
      if (number%10==0){
        str = tnnn(number/10)
      } else {
      str = tnnn(Math.floor(number/10)) + " " + tn(number - Math.floor(number/10)*10);
      }
    } else {
      if (number%100 == 0){

        str = tn(Math.floor(number/100)) + " hundred";

      } else if (number%10 == 0 && (number - Math.floor(number/100)* 100) != 10){

        str = tn(Math.floor(number/100)) + " hundred " + tnnn(number/10 - Math.floor(number/100)*10);

      } else if((number - Math.floor(number/100)* 100) < 10){

        str = tn(Math.floor(number/100)) + " hundred " + tn(number - Math.floor(number/10)*10);
        
      
      } else if((number - Math.floor(number/100)* 100) == 10){

        str = tn(Math.floor(number/100)) + " hundred ten";

      } else if ( (number - Math.floor(number/100)* 100) > 10 && (number - Math.floor(number/100)* 100) < 20){

        str = tn(Math.floor(number/100)) + " hundred " + tnn(number - Math.floor(number/100)*100);

      } else if ( number == 99){

        str = "ninety nine";

      } else{

      str = tn(Math.floor(number/100)) + " hundred " + tnnn(Math.floor(number/10) - Math.floor(number/100) * 10) + " " + tn(number - Math.floor(number/10)*10);
      
      }
    }
    return str;
  }
  
  function tn(number){
      switch (number) {
          case 0:
            return "zero";
          case 1:
              return "one";
          case 2:
              return "two";
          case 3:
              return "three";
          case 4:
              return "four";
          case 5:
              return "five";
          case 6:
              return "six";
          case 7:
              return "seven";
          case 8:
              return "eight";
          case 9: 
              return "nine";
      }
}
  
  function tnn(number){
      switch (number) {
          case 10:
            return "ten";
          case 11:
              return "eleven";
          case 12:
              return "twelve";
          case 13:
              return "thirteen";
          case 14:
              return "fourteen";
          case 15:
              return "fifteen";
          case 16:
              return "sixteen";
          case 17:
              return "seventeen";
          case 18:
              return "eighteen";
          case 19:
              return "nineteen";
      }
}

function tnnn(number){
  switch (number) {
          case 2:
            return "twenty";
          case 3:
              return "thirty";
          case 4:
              return "forty";
          case 5:
              return "fifty";
          case 6:
              return "sixty";
          case 7:
              return "seventy";
          case 8:
              return "eighty";           
          case 9:
              return "ninety";         
      }
}
