const myform = document.getElementById("myform");
const myform2 = document.getElementById("myform2");

let from_curr = document.getElementById("from-curr").value;
let to_curr = document.getElementById("to-curr").value;
let amount = document.getElementById("amount").value;

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '7dad4c7b99msh830dd0f9e28c5e9p171d8fjsn5c19f37e2092',
        'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
    }
};
async function fetchData(url, amount, from_curr, to_curr ) {
    const response = await fetch(url, options)
    const json = await response.json();
    // console.log(json);
    if(!json.error){
        document.getElementById("to-value").innerHTML = json.new_amount;
        document.getElementById("from-value").innerHTML = amount;
        document.getElementById("from-currency").innerHTML = from_curr;
        document.getElementById("to-currency").innerHTML = to_curr;
    }else{
        alert("Please try again later.")
    }
}

function onLoad(){
    const url = `https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=${from_curr}&want=${to_curr}&amount=${amount}`;
    fetchData(url, amount, from_curr, to_curr);
}

myform.addEventListener("submit", (e) => {
    e.preventDefault();
    from_curr = document.getElementById("from-curr").value;
    to_curr = document.getElementById("to-curr").value;
    amount = document.getElementById("amount").value;
    const url = `https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=${from_curr}&want=${to_curr}&amount=${amount}`;
    fetchData(url, amount, from_curr, to_curr);
});

myform2.addEventListener("change", (e) => {
    e.preventDefault();
    from_curr = document.getElementById("from-curr").value;
    to_curr = document.getElementById("to-curr").value;
    amount = document.getElementById("amount").value;
    const url = `https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=${from_curr}&want=${to_curr}&amount=${amount}`;
    fetchData(url, amount, from_curr, to_curr);
});