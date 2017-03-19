var elements = document.getElementsByTagName("select");
var submitButton = document.querySelector("#submit");
var resetButton = document.querySelector("#reset");
var monthSelect = document.querySelector("#month");
var daySelect = document.querySelector("#day");
var birthYear = document.querySelector("#birthyear");
var month, year, years, months, day, fra, bic, age, minMonthAge, minMonth, fraMonth, currentAge, currentMonth, dayBefore, monthBefore, modifiedFra, fraYear, minAge, fraAge, pia, calculation, mba, rf;
var result = document.getElementById("result");
var bicSelect = document.querySelector("#bic");
var outcome = document.querySelectorAll("#outcome");
var checkFields = false;
var compute = false;



//year field 
birthYear.addEventListener("change", function(){
       year = Number(this.value);
       
});

//bic field
bicSelect.addEventListener("change", function(){
       bic = this.value;

});
    
//month field
monthSelect.addEventListener("change", function(){
         month = Number(this.value);
    
});

//day field
daySelect.addEventListener("change", function(){
        day = Number(this.value);
     
});

//submit button
submitButton.addEventListener("click", function(){
    
    pia = document.querySelector("#pia").value;
    
    
    if ((bic === undefined) || (month === undefined) || (day === undefined) || (year === undefined)) {
        
        missingFields();
        checkFields = false; 
        calculation = false;
    } else {
        totalComp();
        checkFields = true;
            if(checkFields === true) {
                    output(); 
                    $("#outcome").show();


            } 

    }

    output();


});

//reset button
resetButton.addEventListener("click", function(){
    missingFields();
    checkFields = false;
    result.textContent = " ";
    calculation = false;
    
    for(i=0; i < elements.length ; i++){
            elements[i].selectedIndex= 0;
    }  
    
    $("#outcome").hide();
});



//calculate minimum age 62
function calcMinAge() {
    
    age = 62;
    
    if(month <= 11) {
    
    minMonthAge = year + age;
        
    } else {
        
    minMonthAge = year + age + 1;
        
        
    }
    

}

function calcMinAgeWidow() {
    
    age = 60;
    minMonthAge = year + age;

}

function calcMinMonthWidow() {
    
    minMonth = month;
    
    if (day === 1) {
        
        minMonth = month - 1;
          if(minMonth === 0){
              minMonth = month;
              
          }
    }else {
        minMonth = month;
    }

    
}

//calculate FRA widow
function correctFraMonthWidow() {
    
yearFraWidow();
    
    fraMonth;
    
     if ((year === 1940) || (year === 1957)) {
         var numOfMonths = 2;
         fraMonth = month + 2;
            if (day === 1) {
                    fraMonth = fraMonth - 1;
                if(fraMonth < 1) {
                        fraMonth = 12;

                }
                
            } else {
                    
                    fraMonth;
            }
                
         if(fraMonth > 12) {
             fraMonth = fraMonth - 12;
             fra = fra + 1;
         }
         
     } else if ((year === 1941) || (year === 1958))  {
         numOfMonths = 4;
         fraMonth = month + 4;
            if (day === 1) {
                    fraMonth = fraMonth - 1;
                if(fraMonth < 1) {
                        fraMonth = 12;
                }
            } else {
                    
                    fraMonth;
            }
         if(fraMonth > 12) {
             fraMonth = fraMonth - 12;
             fra = fra + 1;
         }
     }  else if ((year === 1942) || (year === 1959)) {
         numOfMonths = 6;
         fraMonth = month + 6;
            if (day === 1) {
                    fraMonth = fraMonth - 1;
                     
                if(fraMonth < 1) {
                        fraMonth = 12;
                }
                
            } else {
                    
                    fraMonth;
            }
         
         if(fraMonth > 12) {
             fraMonth = fraMonth - 12;
             fra = fra + 1;
         }
     }  else if ((year === 1943) || (year === 1960)) {
         numOfMonths = 8;
         fraMonth = month + 8;
            if (day === 1) {
                    fraMonth = fraMonth - 1;
                if(fraMonth < 1) {
                        fraMonth = 12;
                }

            } else {
                    
                    fraMonth;
            }

         if(fraMonth > 12) {
             fraMonth = fraMonth - 12;
             fra = fra + 1;
         }
     }  else if ((year === 1944) || (year === 1961)) {
         numOfMonths = 10;
         fraMonth = month + 10;
            if (day === 1) {
                    fraMonth = fraMonth - 1;
                if(fraMonth < 1) {
                        fraMonth = 12;
                }
            } else {
                    
                    fraMonth;
            }
         if(fraMonth > 12) {
             fraMonth = fraMonth - 12;
             fra = fra + 1;
         }
     }  
    
    else {
         fraMonth = month;
            if (day === 1) {
                    fraMonth = fraMonth - 1;
                if(fraMonth < 1) {
                        fraMonth = 12;
                }
            } else {
                    
                    fraMonth;
            }
     }
      
}



function calcMinMonth() {
    
    minMonth = month;
    
    if (day <= 2) {
        
        minMonth = month;
        
    } else {
        minMonth = month + 1;
        if(month === 12) {
           
            minMonth = 1;
        }
    }

    
}

function yearFra() {
    
    fraAge;
    
    if(year < 1943) {
         fraAge = 65;
         fra = year + fraAge;

    } else if ((year > 1942) && (year < 1960)) {
            
            fraAge = 66;
            fra = year + fraAge;
            
    } else {
            
            fraAge = 67;
            fra = year + fraAge;
    }
}

function yearFraWidow() {
    
    fraAge;
    if(year <= 1944) {
         fraAge = 65;
         fra = year + fraAge;

    } else if ((year > 1944) && (year < 1962)) {
            
            fraAge = 66;
            fra = year + fraAge;
            
    } else {
            
            fraAge = 67;
            fra = year + fraAge;
    }
}

function correctFraMonth() {
    
yearFra();
    
     if ((year === 1938) || (year === 1955)) {
         numOfMonths = 2;
         fraMonth = month + 2;
            if (day === 1) {
                    fraMonth = fraMonth - 1;
                compute = false;
                if(fraMonth < 1) {
                        fraMonth = 12;
                }
            } else {
                    
                    fraMonth;
            }
                
         if(fraMonth > 12) {
             fraMonth = fraMonth - 12;
             fra = fra + 1;
         }
     } else if ((year === 1939) || (year === 1956))  {
         numOfMonths = 4;
         fraMonth = month + 4;
            if (day === 1) {
                    fraMonth = fraMonth - 1;
                if(fraMonth < 1) {
                        fraMonth = 12;
                }
            } else {
                    
                    fraMonth;
            }
         if(fraMonth > 12) {
             fraMonth = fraMonth - 12;
             fra = fra + 1;
         }
     }  else if ((year === 1940) || (year === 1957)) {
         numOfMonths = 6;
         fraMonth = month + 6;
            if (day === 1) {
                    fraMonth = fraMonth - 1;
                if(fraMonth < 1) {
                        fraMonth = 12;
                }
            } else {
                    
                    fraMonth;
            }
         if(fraMonth > 12) {
             fraMonth = fraMonth - 12;
             fra = fra + 1;
         }
     }  else if ((year === 1941) || (year === 1958)) {
         numOfMonths = 8;
         fraMonth = month + 8;
            if (day === 1) {
                    fraMonth = fraMonth - 1;
                if(fraMonth < 1) {
                        fraMonth = 12;
                }
            } else {
                    
                    fraMonth;
            }

         if(fraMonth > 12) {
             fraMonth = fraMonth - 12;
             fra = fra + 1;
         }
     }  else if ((year === 1942) || (year === 1959)) {
         numOfMonths = 10;
         fraMonth = month + 10;
            if (day === 1) {
                    fraMonth = fraMonth - 1;
                if(fraMonth < 1) {
                        fraMonth = 12;
                }
            } else {
                    
                    fraMonth;
            }
         if(fraMonth > 12) {
             fraMonth = fraMonth - 12;
             fra = fra + 1;
         }
     }  
    
    else {
         fraMonth = month;
            if (day === 1) {
                    fraMonth = fraMonth - 1;
                    if(fraMonth < 1) {
                        fraMonth = 12;
                    }
            
            }  else {
                    
                    fraMonth;
            }
     }
      
}



function AB_benefits() {

calcMinMonth();
calcMinAge();
correctFraMonth()
birthAttainment();
yearWithMonths();
}

function D_benefits() {
    
    calcMinAgeWidow();
    calcMinMonthWidow();
    correctFraMonthWidow();
    birthAttainment();
    
}

//calculate year with months 
function yearWithMonths() {
    
    
    years = new Date().getFullYear();
    months = new Date().getMonth() + 1;
    
    
        currentAge = years - year;
        
    
    if(months === month) {
        
        currentMonth = 0;
    
    } else if (months < month) {
    
        currentMonth = (12 - month) + months;
        currentAge = years - year - 1;
        
    
    } else {
        
        currentMonth = months - month;
    }
    
    

}

//attains birthday according to SSA
function birthAttainment() {
    
    dayBefore = day - 1;
    monthBefore = month - 1;
 
if((month === 1) && (day === 1) || (month === 2) && (day === 1) || (month === 4) && (day === 1) || (month === 6) && (day === 1 ) || (month === 8) && (day === 1) || (month === 9) && (day === 1) || (month === 11) && (day === 1)) {
 
      dayBefore = 31;
      if(month === 1) {
            monthBefore = 12;

      } else {
 
            monthBefore = month - 1;
      }

 
} else if ((month === 3) && (day === 1)) {
 
      dayBefore = 28;
      monthBefore = month - 1;

 
} else if ((month === 5) && (day === 1) || (month === 7) && (day === 1) || (month === 12) && (day === 1)){
 
      dayBefore = 30;
      monthBefore = month - 1;
    
}
    
else {
    
        dayBefore = day - 1;
        monthBefore = month;

    
        if(month <= 0) {
            month = 12;
        }
}
 
}
 
 



//computation function
function totalComp() {

    if ((bic === "a") || (bic === "b")) {

    
    AB_benefits();
    yearWithMonths();
    calcMinAge();
    minAge = year + 62;

    
    
        
}
    
 else if (bic === "d") {
    
    D_benefits();
    yearWithMonths();
    calcMinAgeWidow();
    minAge = year + 60;
    
  } else {

    

    }

}

    //if any fields are missing function
    function missingFields() {
        
        result.textContent = "";
        result1.textContent = "";
        result2.textContent = "";
        result3.textContent = "";
        bic = undefined;
        month = undefined;
        day = undefined;
        year = undefined;

        
    }

    function calculateMBA() {
        
        
//        console.log((fra - years) * 12);
        rf = (fra - years) * 12 + (fraMonth - months);
        if(rf <= 0) {
            rf = 0;
        } else {
            rf = 60;
        }
        
        if(rf === 1) {
            mba = Math.floor((((pia * 179)/180) * 100)/100).toFixed(2);
        } else if(rf === 2) {
            mba = Math.floor((pia * 178)/180).toFixed(2);
        }
    }





 function output() {
     
     totalComp();
     calculateMBA();

     result.textContent = "Minimum age is " + minMonth + "/" + minMonthAge;
     result1.textContent = "FRA month is " + fraMonth + "/" + fra + " at age " + fraAge;
     result2.textContent = "NH attains " +  age + " for SSA purposes on " + monthBefore + "/" + dayBefore + "/" +  minAge + ".";
     
     if (currentMonth > 0) {
     result3.textContent = currentAge + " and " + currentMonth + " months old.";
         
     } else {
         result3.textContent = currentAge + " years old.";
     }
     
     console.log(mba);
//     result5.textContent = rf;
     
     
 }
    


    
    
    


