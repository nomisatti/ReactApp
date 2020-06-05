import React from 'react';

import './App.css';

function App() {



var number = Number(prompt("Enter any number"));
number = NumberToWords(number);
alert(number);
  return (
    <div className="App">
       
    </div>
  );
}

function NumberToWords (number) {

  var unitsMap =  [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen" ];
var tensMap =  ['',"", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety" ];

  var indexof = 0;
  /*
      if (number == 0)
      return "zero";
  
  if (number < 0)
      return "minus " + NumberToWords(Math.Abs(number));
      */
  
  var words = "";
  
  if (parseInt(number / 100000) > 0)
  {
      indexof =  parseInt(number / 100000) ;
      words += unitsMap[indexof] + " lakh "
      number %= 100000;
  } 
  
  if (parseInt(number / 1000) > 0)
  {    
      if (words !== "")
      words += "and ";
      indexof = parseInt((number / 1000))
      if(indexof>20){
          indexof = parseInt((indexof / 10))
  
  
      }
      words += unitsMap[indexof] + " thousand ";
      number %= 1000;
  
   
  }
  if (parseInt(number / 100) > 0)
  {
      if (words !== "")
      words += "and ";
  
      indexof = parseInt((number / 100))
       words += unitsMap[indexof] + " hundred ";
       number %= 100;
  }
  
  if (number > 0)
  {
      if (words !== "")
          words += "and ";
  
    
      if (number < 20)
          words += unitsMap[number];
      else
      {
          indexof = parseInt(number / 10);
          words += tensMap[indexof];
          if ((number % 10) > 0)
              words += "-" + unitsMap[number % 10];
      }
  }
  
  return words;
  }

export default App;
