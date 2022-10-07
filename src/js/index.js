
const inputEl = document.querySelector("input[name='inputTemp']");
const outputKelvin = document.querySelector("#valueKelvin") 
const outputFaren = document.querySelector("#valueFaren")


inputEl.addEventListener("keyup", function (evt){
    let valorCel = Number(evt.target.value) 
    outputKelvin.innerText = parseInt(valorCel+273.15)
    outputFaren.innerText = (valorCel * 9/5) + 32;
    //to K = 0 °C + 273,15 = 273,15 K
    //to F = (0 °C × 9 / 5) + 32 = 32 °F    
})
