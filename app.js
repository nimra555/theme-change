
let count = 0;
let sun = '<i class="fas fa-sun"></i>';
let moon = '<i class="fas fa-moon"></i>';
function changeTheme(){
    let buttonChange = document.querySelector("#btn");
    buttonChange.innerHTML = sun;
    console.log(buttonChange);
    ++count;
   if(count%2==0){
       console.log(count);
       changedark();
       buttonChange.innerHTML = moon;   
   }
   else{
    changeLight();
   }
}

function changedark(){
    let changeBG = document.querySelector("body");
    changeBG.style.backgroundColor = 'black';
    changeBG.style.color = 'white';
    let quote = document.querySelectorAll(".block");
    quote[0].style.color = "red";
    quote[1].style.color = "blue";    
}
function changeLight(){
    let changeBG = document.querySelector("body");
    changeBG.style.backgroundColor = 'white';
    changeBG.style.color = 'black';
    let quote = document.querySelectorAll(".block");
    quote[0].style.color = "blue";
    quote[1].style.color = "red";    
}