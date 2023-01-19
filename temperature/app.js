//Concevoir une fonction qui convertit les températures entre °celsius et farenheit
//tip: c/5=(f-32)/9 -> exprimer l'un en fonction de l'autre
let retour = document.getElementById("return");
        function convert() {
            box.style.display = "none";
            let temp = document.getElementById("temp").value;
            let unit = document.getElementById("unit").value;
            retour.style.display = "block";
            let result = 0;
            let froid = "froid.jpg"
            let chaud = "chaud.jpg"
            if (unit == "farenheit") {
                result = (temp - 32) * 5/9;
                document.querySelector("h2").innerHTML = `${temp}°F  >  ${result.toFixed(2)}°C`
                if (result <= 0) {
                    document.body.style.backgroundImage = `url(${froid})`
                    document.querySelector("h2").style.color = 'blue'
                } else {
                    document.body.style.backgroundImage = `url(${chaud})`
                    document.querySelector("h2").style.color = 'red'
                }
            } else if (unit == "celsius") {
                result = temp * 9/5 + 32; 
                document.querySelector("h2").innerHTML = `${temp}°C  >  ${result.toFixed(2)}°F`
                if (result <= 32) {
                    document.body.style.backgroundImage = `url(${froid})`
                    document.querySelector("h2").style.color = 'blue'
                } else {
                    document.body.style.backgroundImage = `url(${chaud})`
                    document.querySelector("h2").style.color = 'red'
                }
            }
        }
      
       