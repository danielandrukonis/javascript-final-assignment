/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

function kiloweightConvert(e) {

    e.preventDefault();

    const weight = document.querySelector('#search');
           
    let gramsCount =  weight.value / 0.0010000;
    let gramsValue = document.getElementById("gram").innerHTML = gramsCount.toFixed(0);
    
    let poundsCount = weight.value * 2.2046;
    let pounsaValue = document.getElementById("pounds").innerHTML = poundsCount.toFixed(1);

    let ouncesCount =  weight.value * 35.274;
    let ouncesValue = document.getElementById("ounces").innerHTML = ouncesCount.toFixed(1);          
    
}
       
document.querySelector('#submit-btn').addEventListener('click', kiloweightConvert);