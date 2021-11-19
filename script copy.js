convertir();
function convertir() {
    let elIdCalcular = document.getElementById("calcular");
    elIdCalcular.addEventListener("click", () => {
        console.log("estoy convirtiendo");

        // capturar el valor de "elIdCalcular": elIdCalcular.value

        const getCalcular = () => {
            let elIdCalcular = document.getElementById("calcular").value;
            document.getElementById("calcular").innerHTML = inputValue

            // capturar la moneda inicial (local)

            const getDivisas1 = () => {
                let elIdDivisas1 = document.getElementById("Divisas1").value;
                document.getElementById("Divisas1").innerHTML = inputValue
            }

            // captura la moneda final (destino)

            const getDivisas2 = () => {
                let elIdDivisas1 = document.getElementById("Divisas2").value;
                document.getElementById("Divisas2").innerHTML = inputValue
            }

            // IFs de conversion"----> valor convertido
            // Caturarar el elemnto de respuesta con id "total" y asignarle el valor convertido.
        });
}



function convertir()
Input.addEventListener, "convertir"(); {
    console.log(convertir)

    var valore = ["resultado", "COP", "EUR", "GBP", "MXN", "USD"];
    var valore = parseInt(document.getElementById("monto").value);
    var resultado = 0;
    var COP = 10;
    var EUR = 20;
    var GBP = 10;
    var MXN = 20;
    var USD = 50;

}

//COP A TODAS LAS MONEDAS.

if (document.getElementById(COP).Checked) {
    resultado = valore / EUR;
    alert("el cambio de COP a EUR es:" + resultado)
}
else if (document.getElementById(EUR).Checked) {
    resultado = valore / COP;
    alert("el cambio de EUR a COP es:" + resultado)
}

if (document.getElementById(COP).Checked) {
    resultado = valore / COP;
    alert("el cambio de COP a GBP es:" + resultado)
}
else if (document.getElementById(GBP).Checked) {
    resultado = valore / COP;
    alert("el cambio de GBP a COP es:" + resultado)
}
if (document.getElementById(COP).Checked) {
    resultado = valore / GBP;
    alert("el cambio de COP a GBP es:" + resultado)
}
else if (document.getElementById(GBP).Checked)
    resultado = valore / COP;
alert("el cambio de GBP A COP es:" + resultado)

{
    if (document.getElementById(COP).Checked) {
        resultado = valore / MXN;
        alert("el cambio de COP a MXN es:" + resultado)
    }
    else if (document.getElementById(MXN).Checked) {
        resultado = valore / COP;
        alert("el cambio de MXN a COP es:" + resultado)
    }
    if (document.getElementById(COP).Checked) {
        resultado = valore / USD;
        alert("el cambio de COP a USD es:" + resultado)
    }
    else if (document.getElementById(USD).Checked) {
        resultado = valore / COP;
        alert("el cambio de USD a COP es:" + resultado)
    }
}
//EUR A TODAS LAS MONEDAS 

if (document.getElementById(EUR).Checked) {
    resultado = valore / GBP;
    alert("el cambio de EUR a GBP es:" + resultado)
}
else if (document.getElementById(GBP).Checked) {
    resultado = valore / GBP;
    alert("el cambio de GBP a EUR es:" + resultado)
}

if (document.getElementById(EUR).Checked) {
    resultado = valore / MXN;
    alert("el cambio de EUR a MXN es:" + resultado)
}
else if (document.getElementById(MXN).Checked) {
    resultado = valore / EUR;
    alert("el cambio de MXN a EUR es:" + resultado)
}
if (document.getElementById(EUR).Checked) {
    resultado = valore / USD;
    alert("el cambio de EUR a USD es:" + resultado)
}
else if (document.getElementById(USD).Checked)
    resultado = valore / EUR;
alert("el cambio de USD A EUR es:" + resultado)

//GBP A TODAS LAS MONEDAS.

{
    if (document.getElementById(GBP).Checked) {
        resultado = valore / MXN;
        alert("el cambio de GBP a MXN es:" + resultado)
    }
    else if (document.getElementById(MXN).Checked) {
        resultado = valore / GBP;
        alert("el cambio de MXN a GBP es:" + resultado)
    }
    if (document.getElementById(GBP).Checked) {
        resultado = valore / USD;
        alert("el cambio de GBP a USD es:" + resultado)
    }
    else if (document.getElementById(USD).Checked) {
        resultado = valore / GBP;
        alert("el cambio de USD a GBP es:" + resultado)
    }
}

//MXN A TODAS LAS MONEDAS

if (document.getElementById(MXN).Checked) {
    resultado = valore / USD;
    alert("el cambio de MXN a USD es:" + resultado)
}
else if (document.getElementById(USD).Checked) {
    resultado = valore / MXN;
    alert("el cambio de USD a MXN es:" + resultado)
}
