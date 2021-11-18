function convertir() 
Input.addEventListener,"convertir"();{
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

if(document.getElementById(COP).Checked) {
    resultado = valore/EUR;
    alert("el cambio de COP a EUR es:"+ resultado)
}
else if (document.getElementById(EUR).Checked){
    resultado = valore/COP;
    alert("el cambio de EUR a COP es:" + resultado)
}

if (document.getElementById(COP).Checked){
    resultado = valore/COP;
    alert("el cambio de COP a GBP es:" + resultado)
}
else if (document.getElementById(GBP). Checked) {
    resultado = valore/COP;
    alert("el cambio de GBP a COP es:" + resultado)
}
if (document.getElementById(COP).Checked){
    resultado = valore/GBP;
    alert("el cambio de COP a GBP es:" + resultado)
}
else if (document.getElementById(GBP).Checked)
resultado = valore/COP;
alert("el cambio de GBP A COP es:" + resultado)

{
    if (document.getElementById(COP).Checked){
        resultado = valore/MXN;
        alert("el cambio de COP a MXN es:" + resultado)
    }
else if (document.getElementById(MXN).Checked){
    resultado = valore/COP;
    alert("el cambio de MXN a COP es:" + resultado)
}
if (document.getElementById(COP).Checked){
    resultado = valore/USD;
    
}
}