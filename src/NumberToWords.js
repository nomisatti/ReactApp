import React from 'react';

function NumberToWords () {

    return (
         
         <div>
           
            <div class="container">
                <div class='col-md-6'>
                <h1>Numbers to Words Conversion</h1>
                    <div class="form-group">
                        <label for="number">Number:</label>
                        <input type='text' id='number' class="form-control" placeholder='Enter any Number' onKeyUp={Conversion}/>
                    </div>
        
                    <div class="form-group">
                        <label for="words">Words:</label>
                        <input type='text' id='words' class="form-control" />
                    </div>
                </div> 
            </div> 
        </div>
    )

    function Conversion (){
       
        var unitsMap =  [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen" ];
        var tensMap =  ['',"", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety" ];
    
        var indexof = 0;
        var number = document.getElementById('number').value
        if( number >  11111111){
            document.getElementById('words').value = 'Please Enter Number less than 11111111';

        }
        else{
            var words = "";
            if (number === 0)
               words += "zero";
       
           if (parseInt(number / 1000000) > 0)
            {
               indexof =  parseInt(number / 1000000) ;
               words += unitsMap[indexof] + " million "
               number %= 1000000;
            } 
       
           if (parseInt(number / 100000) > 0)
            {
               indexof =  parseInt(number / 100000) ;
               words += unitsMap[indexof] + " lakh "
               number %= 100000;
            } 
       
           if (parseInt(number / 1000) > 0)
            {    
                indexof = parseInt((number / 1000))
               if(indexof>20){
                   indexof = parseInt((indexof / 10))
                }
                words += unitsMap[indexof] + " thousand ";
                number %= 1000;
            }
           if (parseInt(number / 100) > 0)
            {
         
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
                   words += " " + unitsMap[number % 10];
               }
           }
       
           document.getElementById('words').value = words
        }
       
            
    }

}

export default NumberToWords;
