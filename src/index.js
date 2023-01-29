//getting input elements 
const dateOfBirth= document.querySelector("#date-of-birth");
const luckyNumber= document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box")


//compare two variables dateofbirth and lucky number .checking if the number is lucky or not
function compareValues(sum, luckyNumber){
    //modueles the date of birth and lucknumber equals to 0
   if(sum%luckyNumber === 0){
     outputBox.value="Your Birthday Is Lucky ☘️";
   }else{
     outputBox.value="Your Birthday Is Not Lucky 🤒";
   }
}
//checking if the birth date is lucky  
function checkBirthDateIsLucky(){
    const dob= dateOfBirth.value;
    const sum =AddNumber(dob);
    //give lucky number an dob 
    if(sum && dob){
        compareValues(sum, luckyNumber.value)
    }else{
        outputBox.innerText="Please Enter Both The Fields 😡";
    }
    
}
//to add the numbers and calculate the sum and returnd the number
function AddNumber(dob){
    //remove the hypens and return the string 
    dob = dob.replaceAll("-","");
    //sum variables =0
    let sum=0;
     //first is initilization ,second is comparing ,third is increamment the value.. the for loop
    for (let i=0; i<dob.length; i++){
        //picking char one by one || number is typecasting we can use this to convert charcter to number.and there are many other typecasting
       sum = sum + Number(dob.charAt(i));
    }
    //return the dateOfBirth
    return sum;

}


checkNumberButton.addEventListener("click", checkBirthDateIsLucky)