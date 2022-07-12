
let x1;
let res;

let minValue
let maxValue

let maxValue1
let minValue1

let answerNumber

let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;


document.getElementById("OK").onclick = change;

function change (){

     minValue = +document.getElementById('minimum').value;
     maxValue = +document.getElementById('maximum').value;
    
     maxValue1 = (maxValue > 999) ? 999 : maxValue;
     minValue1 = (minValue < -999) ? -999 : minValue;

    let out = document.getElementById("textres");

     out.innerHTML = `Загадайте любое целое число от ${minValue1} до ${maxValue1}, а я его угадаю`;
        }

    
document.getElementById("Start").onclick = start;
function start ()
{
   answerNumber  = Math.floor((minValue1 + maxValue1) / 2);

   document.getElementById("answerField").innerHTML = `Это число ${answerNumber}?`
}


function phraseRandom1(){
   
    let phraseRandom1 = Math.round( Math.random()*2);

    if(phraseRandom1 === 1){
        x1 = "Скорее всего это "
     }
     else if (phraseRandom1 === 2){
         x1 = "Наверное, это число "
     }
     else{
        x1 = "Да, это легко! Ты загадал "
     }
}


function phraseRandom2 (){

    let phraseRandom2 = Math.round( Math.random()*2);
    
    if(phraseRandom2 === 1){
        document.getElementById("answerField").innerHTML = `Я же говорил, что угадаю!`
    }
    else if (phraseRandom2 === 2){
         document.getElementById("answerField").innerHTML = `Это было очень легко!`
     }
     else{       
     document.getElementById("answerField").innerHTML =  `Я всегда угадываю\n\u{1F60E}`}
    }



     let sotni = ["", "сто", "двести", "триста", "четыреста", "пятьсот", "шестьсот", "семьсот", "восемьсот", "девятьсот"];

     let desatki = ["", "", "двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто"]
     
     
     let edinici = ["", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять",];
     
     let odi = [ "десять","одинадцать", "двенадцать", "тринадцать", "четырнадцать","пятнадцать", "шеснадцать", "семнадцать", "восемнадцать", "девятнадцать"];
     
     
function go() {
    phraseRandom1()
        let s = d = e = o = "";
        res;
        //res1;
        let num = answerNumber;
        let n = num.toString();
        let m = "минус";
        x1;
        
        if(n >= 100 || n < -100) s = "" + sotni[n[n.length-3]] + " ";
        else 
        s = "";
         
        if(n >= 20 || n < -20) 
        d = "" + desatki[n[n.length-2]] + " ";
        else 
        d = "";
         
        e = edinici[n[n.length-1]];
        
        o = odi[n[n.length-1]];
     
     
        if( n >= 10 && n <= 19 && n > 0 || n % 100 >= 10 && n % 100 <= 19 && n > 0)
         {document.getElementById("answerField").innerHTML = x1 + s + o + d + " ?";
         res = x1 + s + o + d + " ?"}
        else
         {document.getElementById("answerField").innerHTML = x1 + s + d + e + " ?";
        res = x1 + s + d + e + " ?"}
     
        if( n <= -10 && n >= -19 && n < 0 || n % 100 <= -10 && n % 100 >= -19 && n < 0)
         {document.getElementById("answerField").innerHTML = x1 + m + " " + s + o + d + " ?";
         res = x1 + m + " " + s + o + d + " ?"}
        else if (n < 0)
         {document.getElementById("answerField").innerHTML = x1 + m + " " + s + d + e + " ?";
         res = x1 + m + " " + s + d + e + " ?"}
        
    //console.log(res.length)
     }
     
function go1(){
     go()
         res;
         if (res.length >= 21)
         document.getElementById("answerField").innerHTML = x1 + `${answerNumber}` + "?";
         else
         res;
     }
     


document.getElementById('btnRetry').addEventListener('click', function () {

    location.reload(); 
})



document.getElementById('btnOver').addEventListener('click', function over () {

    if (gameRun){
        if ((minValue1 === maxValue1) || (Number.isNaN(minValue1)) || (Number.isNaN(maxValue1))){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue1 = answerNumber  + 1;
            answerNumber = Math.floor((minValue1 + maxValue1) / 2);
             orderNumber++;
            orderNumberField.innerText = orderNumber;
           
            go1();
        }
    }
})


document.getElementById('btnLess').addEventListener('click', function less() {

    if (gameRun){
        if ((minValue1 === maxValue1) || (Number.isNaN(minValue1)) || (Number.isNaN(maxValue1))){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue1 = answerNumber;
            answerNumber  = Math.floor(( minValue1 +maxValue1)/ 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;

            go1();
        }
    }
})


document.getElementById('btnEqual').addEventListener('click', function () {
    
    if (gameRun){
        phraseRandom2();
        gameRun = false;
    }
})

